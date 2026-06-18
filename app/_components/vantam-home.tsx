'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {motion, useReducedMotion} from 'motion/react';
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock,
  Download,
  FileText,
  House,
  Info,
  Menu,
  MessageCircle,
  Moon,
  ShieldCheck,
  Sun,
  X,
} from 'lucide-react';

import {
  AUDIENCE_FOCUS,
  APPROVED_INDIVIDUAL_SERVICE_SLUGS,
  CONSULTATIONS_STORE,
  DICTIONARY,
  FAQS_STORE,
  HOUSING_PRODUCTS,
  INDIVIDUAL_SERVICE_GROUPS,
  PARTNER_AUDIENCES,
  PREMIUM_PACKAGES,
  PROCESS_STEPS,
  RETURNING_CLIENT_NOTE,
  SITUATION_OPTIONS,
  STUDENT_LIFE_MAP_PREVIEW,
  STUDENT_LIFE_STATUSES,
  TYPICAL_SITUATIONS,
} from '../../data';
import {LOCALES, LOCALE_LABELS, type Locale, swapLocale} from '../../lib/locales';
import {
  BUSINESS,
  BUSINESS_LOCATION,
  getBusinessFooterLine,
  getBusinessPrintFooterLine,
  getWhatsAppAriaLabel,
  getWhatsAppUrl,
} from '../../lib/business';
import {legalFooterLinks} from '../../lib/legal-navigation';
import {PRIVACY_FORM_ACKNOWLEDGEMENT, PRIVACY_ROUTE_LABELS, privacyPath} from '../../lib/privacy';

const BrandLogo = ({className = ''}: {className?: string}) => (
  <Image
    src="/brand/vantam-logo-source.png"
    alt=""
    width={2023}
    height={315}
    priority
    className={className}
  />
);

const HeroScene = () => (
  <div className="hero-visual" aria-hidden="true">
    <svg className="hero-route" viewBox="0 0 760 620" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M102 470C160 426 194 373 239 332C288 287 332 255 388 228C441 202 508 171 632 196" />
      <circle cx="102" cy="470" r="11" />
      <circle cx="388" cy="228" r="11" />
      <circle cx="632" cy="196" r="11" />
    </svg>
    <div className="hero-scene-card hero-scene-card-left">
      <span className="hero-scene-icon"><FileText /></span>
      <div className="hero-scene-lines">
        <span />
        <span />
        <span className="short" />
      </div>
    </div>
    <div className="hero-scene-card hero-scene-card-center">
      <span className="hero-scene-icon"><House /></span>
      <div className="hero-scene-house" aria-hidden="true">
        <span className="roof" />
        <span className="window" />
        <span className="door" />
      </div>
    </div>
    <div className="hero-scene-card hero-scene-card-right">
      <span className="hero-scene-icon"><Check /></span>
      <div className="hero-scene-lines">
        <span />
        <span className="mid" />
        <span className="short" />
      </div>
    </div>
    <div className="hero-scene-chip">NL</div>
  </div>
);

type VantamHomeProps = {
  lang: Locale;
  pathname: string;
  searchString: string;
};

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

type HelpValue =
  | 'relocation_orientation'
  | 'vantam_start'
  | 'vantam_first_year'
  | 'vantam_continue'
  | 'partnership'
  | `housing_ready:${string}`
  | `housing_campaign:${string}`
  | `individual_service:${string}`;

function isHousingHelp(value: string) {
  return value.startsWith('housing_ready:') || value.startsWith('housing_campaign:');
}

function isIndividualServiceHelp(value: string) {
  return value.startsWith('individual_service:');
}

function getInquiryTypeForHelp(help: string) {
  if (help === 'relocation_orientation') return 'consultation';
  if (help === 'partnership') return 'b2b';
  if (
    help === 'vantam_start'
    || help === 'vantam_first_year'
    || help === 'vantam_continue'
    || isHousingHelp(help)
  ) {
    return 'packages';
  }
  return 'single';
}

function getIndividualServiceSlug(help: string) {
  return isIndividualServiceHelp(help) ? help.split(':', 2)[1] ?? '' : '';
}

export default function VantamHome({lang, pathname, searchString}: VantamHomeProps) {
  const dict = DICTIONARY[lang];
  const prefersReducedMotion = useReducedMotion();
  const mobileNavigationRef = useRef<HTMLDetailsElement>(null);
  const pdfTriggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const formStartedAtRef = useRef(0);
  const [currentHash, setCurrentHash] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedPackage, setSelectedPackage] = useState<'vantam_start' | 'vantam_first_year'>('vantam_first_year');
  const [selectedHousing, setSelectedHousing] = useState<'housing_ready' | 'housing_campaign'>('housing_ready');
  const [activeServiceGroup, setActiveServiceGroup] = useState<'a' | 'b' | 'c' | 'd'>('a');
  const [activeSituation, setActiveSituation] = useState('moving');
  const [faqOpen, setFaqOpen] = useState<Record<string, boolean>>({f1: true});
  const [showExportModal, setShowExportModal] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formAudience, setFormAudience] = useState('student');
  const [formMovingDate, setFormMovingDate] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formBudget, setFormBudget] = useState('');
  const [formStatusField, setFormStatusField] = useState('before');
  const [formGuarantor, setFormGuarantor] = useState('');
  const [formHelp, setFormHelp] = useState<HelpValue>('relocation_orientation');
  const [formHousingType, setFormHousingType] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formConsent, setFormConsent] = useState(false);
  const [formWebsite, setFormWebsite] = useState('');
  const [formState, setFormState] = useState<FormStatus>('idle');

  const copy = useMemo(() => ({
    en: {
      sectionLead: 'Who VANTAM helps',
      sectionTitle: 'Practical support for students before arrival, after arrival, and through defined first-year situations.',
      sectionText: 'Use the public ladder when you need a clear route, visible deliverables, and honest boundaries instead of a generic relocation promise.',
      situationLead: 'Start with your situation',
      situationTitle: 'Choose the route that fits what is happening now',
      situationText: 'Each route takes you to the right section and, where the choice is specific enough, pre-fills the contact form with the matching product context.',
      processLead: 'How VANTAM works',
      processTitle: 'Four public stages, with defined scope and visible outputs',
      processText: 'VANTAM starts by clarifying the situation, then maps the next actions, works through the defined practical scope, and documents what is completed, pending, or waiting.',
      packageLead: 'Start versus First Year',
      packageTitle: 'Choose between first-month execution and defined first-year support',
      packageText: 'The main package comparison contains only VANTAM Start and VANTAM First Year.',
      packageSummary: 'Selected package',
      packageDownload: 'Download / save package overview',
      packageDownloadHint: 'Browser print only. Final written scope is confirmed before work begins.',
      consultationLead: 'Single consultation entry',
      consultationTitle: 'Relocation Orientation',
      consultationText: 'One public consultation for the first practical assessment and product recommendation.',
      housingLead: 'Housing path',
      housingTitle: 'Housing Ready versus Housing Search Campaign',
      housingText: 'Preparation and campaign execution are separate from the main packages and use fixed public limits.',
      servicesLead: 'Individual Student Services',
      servicesTitle: 'Defined practical cases for students already living in the Netherlands',
      servicesText: 'These are specific public services with fixed prices only where scope is predictable. Everything else uses Request a price.',
      studentLifeLead: 'Student Life Map Preview',
      studentLifeTitle: 'An illustrative working-document preview, not a portal',
      studentLifeText: 'The preview shows the kinds of areas and statuses VANTAM may organise during support. It does not imply an account, saved progress, or a client area.',
      situationsLead: 'Typical situations',
      situationsTitle: 'Typical situations VANTAM can take into work',
      situationsText: 'These are scenario types, not testimonials.',
      faqText: 'Clear answers about scope, limits, public pricing logic, returning clients, and the Student Life Map Preview.',
      partnerLead: 'Partner entry',
      partnerTitle: 'A clean route for organisations referring practical student cases',
      partnerText: 'For universities, education consultants, agencies, and family-supported routes that need one practical handoff instead of scattered messages.',
      partnerCta: 'Discuss a partner enquiry',
      contactLead: 'Contact',
      contactAside: 'You can contact VANTAM without knowing the final answer yet.',
      contactAsideText: 'Choose a product, housing path, or individual service when you know it. Otherwise describe the situation and VANTAM can respond with possible next steps.',
      responseTime: 'VANTAM reviews enquiries and replies by email with possible next steps.',
      businessDetailsLabel: 'Business details',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      whatsappLabel: 'Message VANTAM on WhatsApp Business',
      boundaryTitle: 'Boundaries',
      boundaryText: 'VANTAM does not present itself as a law firm, immigration service, insurance broker, financial advisor, medical provider, real-estate agency, or client portal.',
      formSectionTitle: 'Enquiry details',
      formSectionSub: 'These fields help VANTAM understand the situation and preserve the right product context.',
      formAudienceLabel: 'Context',
      formStatusLabel: 'Current status',
      formMovingDateLabel: 'Expected move date',
      formCityLabel: 'Preferred city or region',
      formBudgetLabel: 'Approximate housing budget',
      formGuarantorLabel: 'Guarantor situation',
      formHelpLabel: 'What help is needed',
      formHousingTypeLabel: 'What type of housing are you looking for?',
      formSensitiveWarning: 'Do not submit passports, bank statements, medical information, guarantor files, or other sensitive documents through this open form.',
      formEnquiryNotice: 'This is an enquiry only. Submitting the form does not create a contract, book a consultation, start work, or waive any rights.',
      formStatusBefore: 'Before arrival',
      formStatusAfter: 'Already in the Netherlands',
      formStatusFoundHousing: 'Housing already found',
      formStatusNeedHousing: 'Need housing now or later',
      formStatusOrganisation: 'Organisation / partnership',
      formAudienceStudent: 'Student',
      formAudienceProfessional: 'Expat / professional',
      formAudienceFamily: 'Family',
      formAudienceOrganisation: 'Organisation',
      formGuarantorYes: 'Yes, guarantor available',
      formGuarantorMaybe: 'May be needed',
      formGuarantorNo: 'No / not sure',
      chooseHousingType: 'Choose a housing type',
      chooseRange: 'Choose a range',
      chooseSituation: 'Choose a situation',
      printTitle: 'Download / save package overview',
      printDesc: 'Review the package overview, then use the browser print dialog to print or save it as PDF.',
      printButton: 'Print or save as PDF',
      close: 'Close',
      printComparison: 'Short package comparison',
      printGenerated: 'Generated',
      printVersion: 'Package version',
      printDisclaimer: 'Final written scope, deliverables, exclusions, and price are confirmed before work begins.',
      printClientResponsibilities: 'Client responsibilities',
      printExclusions: 'Exclusions',
      printOptional: 'Optional additions',
      printNoGuarantee: 'No-third-party-outcome notice',
      printNextStep: 'Next step',
      returningClientCta: 'Returning client? Ask about Continue',
      individualServiceIntro: 'Choose a defined individual service',
      packageDifference: 'How it differs',
      packagePeriod: 'Active period',
      packageOutcome: 'Outcome',
      requestPriceNote: 'Request a price means written scope, deliverables, exclusions, and price before work begins.',
      serviceBoundary: 'Boundary',
      recommendedProduct: 'Recommended product',
      whatRisk: 'What is at risk',
      whatVantamDoes: 'What VANTAM does',
      trigger: 'Trigger',
    },
    uk: {
      sectionLead: 'Кому допомагає VANTAM',
      sectionTitle: 'Практична підтримка для студентів до приїзду, після приїзду та в межах визначених ситуацій першого року.',
      sectionText: 'Використовуйте публічну архітектуру, коли вам потрібні чіткий маршрут, видимі результати та чесні межі замість загальної обіцянки релокації.',
      situationLead: 'Почніть зі своєї ситуації',
      situationTitle: 'Оберіть маршрут, який відповідає тому, що відбувається зараз',
      situationText: 'Кожен маршрут веде до правильного розділу і, коли вибір достатньо конкретний, підставляє у форму відповідний контекст продукту.',
      processLead: 'Як працює VANTAM',
      processTitle: 'Чотири публічні етапи з визначеним обсягом і видимими результатами',
      processText: 'VANTAM спочатку прояснює ситуацію, потім складає карту наступних дій, далі опрацьовує визначений практичний обсяг і фіксує, що завершено, що очікує та що ще потребує руху.',
      packageLead: 'Start versus First Year',
      packageTitle: 'Оберіть між виконанням першого місяця та визначеною підтримкою на перший рік',
      packageText: 'Основне порівняння пакетів містить лише VANTAM Start і VANTAM First Year.',
      packageSummary: 'Обраний пакет',
      packageDownload: 'Завантажити / зберегти огляд пакета',
      packageDownloadHint: 'Лише друк браузера. Фінальний письмовий обсяг підтверджується до початку роботи.',
      consultationLead: 'Один вхід через консультацію',
      consultationTitle: 'Relocation Orientation',
      consultationText: 'Одна публічна консультація для першої практичної оцінки та рекомендації продукту.',
      housingLead: 'Житловий шлях',
      housingTitle: 'Housing Ready versus Housing Search Campaign',
      housingText: 'Підготовка і виконання кампанії відокремлені від основних пакетів і мають фіксовані публічні межі.',
      servicesLead: 'Індивідуальні студентські послуги',
      servicesTitle: 'Визначені практичні кейси для студентів, які вже живуть у Нідерландах',
      servicesText: 'Це конкретні публічні послуги з фіксованими цінами лише там, де обсяг передбачуваний. Усе інше використовує Запитати ціну.',
      studentLifeLead: 'Student Life Map Preview',
      studentLifeTitle: 'Ілюстративний попередній перегляд робочого документа, а не портал',
      studentLifeText: 'Попередній перегляд показує типи зон і статусів, які VANTAM може впорядковувати під час підтримки. Це не означає акаунт, збережений прогрес або клієнтський кабінет.',
      situationsLead: 'Типові ситуації',
      situationsTitle: 'Типові ситуації, які VANTAM може взяти в роботу',
      situationsText: 'Це типи сценаріїв, а не відгуки.',
      faqText: 'Чіткі відповіді про обсяг, межі, публічну логіку цін, клієнтів, що повертаються, і Student Life Map Preview.',
      partnerLead: 'Партнерський вхід',
      partnerTitle: 'Окремий маршрут для організацій, які передають практичні студентські кейси',
      partnerText: 'Для університетів, освітніх консультантів, агенцій і маршрутів за підтримки родини, яким потрібна одна практична передача замість розрізнених повідомлень.',
      partnerCta: 'Обговорити партнерський запит',
      contactLead: 'Контакт',
      contactAside: 'До VANTAM можна звернутися навіть без готової остаточної відповіді.',
      contactAsideText: 'Оберіть продукт, житловий шлях або індивідуальну послугу, якщо вже знаєте її. Інакше опишіть ситуацію, і VANTAM відповість щодо можливих наступних кроків.',
      responseTime: 'VANTAM переглядає запити та відповідає електронною поштою щодо можливих наступних кроків.',
      businessDetailsLabel: 'Дані бізнесу',
      emailLabel: 'Електронна пошта',
      phoneLabel: 'Телефон',
      whatsappLabel: 'Написати VANTAM у WhatsApp Business',
      boundaryTitle: 'Межі',
      boundaryText: 'VANTAM не позиціонує себе як юридичну фірму, імміграційний сервіс, страхового брокера, фінансового радника, медичного провайдера, агенцію нерухомості чи клієнтський портал.',
      formSectionTitle: 'Деталі запиту',
      formSectionSub: 'Ці поля допомагають VANTAM зрозуміти ситуацію та зберегти правильний контекст продукту.',
      formAudienceLabel: 'Контекст',
      formStatusLabel: 'Поточний статус',
      formMovingDateLabel: 'Очікувана дата переїзду',
      formCityLabel: 'Бажане місто або регіон',
      formBudgetLabel: 'Орієнтовний бюджет на житло',
      formGuarantorLabel: 'Ситуація з гарантом',
      formHelpLabel: 'Яка допомога потрібна',
      formHousingTypeLabel: 'Який тип житла ви шукаєте?',
      formSensitiveWarning: 'Не надсилайте через цю відкриту форму паспорти, банківські виписки, медичні дані, файли гаранта чи інші чутливі документи.',
      formEnquiryNotice: 'Це лише запит. Надсилання форми не створює договір, не бронює консультацію, не запускає роботу й не означає відмову від прав.',
      formStatusBefore: 'До приїзду',
      formStatusAfter: 'Вже в Нідерландах',
      formStatusFoundHousing: 'Житло вже знайдено',
      formStatusNeedHousing: 'Житло потрібне зараз або пізніше',
      formStatusOrganisation: 'Організація / партнерство',
      formAudienceStudent: 'Студент',
      formAudienceProfessional: 'Експат / професіонал',
      formAudienceFamily: 'Родина',
      formAudienceOrganisation: 'Організація',
      formGuarantorYes: 'Так, гарант є',
      formGuarantorMaybe: 'Може знадобитися',
      formGuarantorNo: 'Немає / не впевнений(-а)',
      chooseHousingType: 'Оберіть тип житла',
      chooseRange: 'Оберіть діапазон',
      chooseSituation: 'Оберіть ситуацію',
      printTitle: 'Завантажити / зберегти огляд пакета',
      printDesc: 'Перегляньте огляд пакета, а потім скористайтеся друком браузера, щоб роздрукувати або зберегти його як PDF.',
      printButton: 'Роздрукувати або зберегти як PDF',
      close: 'Закрити',
      printComparison: 'Коротке порівняння пакетів',
      printGenerated: 'Згенеровано',
      printVersion: 'Версія пакета',
      printDisclaimer: 'Фінальний письмовий обсяг, результати, виключення та ціна підтверджуються до початку роботи.',
      printClientResponsibilities: 'Обов’язки клієнта',
      printExclusions: 'Виключення',
      printOptional: 'Необов’язкові додатки',
      printNoGuarantee: 'Примітка про відсутність гарантій результату третіх сторін',
      printNextStep: 'Наступний крок',
      returningClientCta: 'Клієнт, що повертається? Запитайте про Continue',
      individualServiceIntro: 'Оберіть визначену індивідуальну послугу',
      packageDifference: 'Чим відрізняється',
      packagePeriod: 'Активний період',
      packageOutcome: 'Результат',
      requestPriceNote: 'Запитати ціну означає письмовий обсяг, результати, виключення та ціну до початку роботи.',
      serviceBoundary: 'Межа',
      recommendedProduct: 'Рекомендований продукт',
      whatRisk: 'Що під ризиком',
      whatVantamDoes: 'Що робить VANTAM',
      trigger: 'Тригер',
    },
    ru: {
      sectionLead: 'Кому помогает VANTAM',
      sectionTitle: 'Практическая поддержка для студентов до приезда, после приезда и в рамках определённых ситуаций первого года.',
      sectionText: 'Используйте публичную архитектуру, когда вам нужны ясный маршрут, видимые результаты и честные границы вместо общей обещанной релокации.',
      situationLead: 'Начните со своей ситуации',
      situationTitle: 'Выберите маршрут, который соответствует тому, что происходит сейчас',
      situationText: 'Каждый маршрут ведёт к правильному разделу и, когда выбор достаточно конкретен, подставляет в форму нужный контекст продукта.',
      processLead: 'Как работает VANTAM',
      processTitle: 'Четыре публичных этапа с определённым объёмом и видимыми результатами',
      processText: 'VANTAM сначала проясняет ситуацию, затем выстраивает карту следующих действий, дальше отрабатывает определённый практический объём и фиксирует, что завершено, что ждёт и что ещё требует движения.',
      packageLead: 'Start versus First Year',
      packageTitle: 'Выберите между выполнением первого месяца и определённой поддержкой на первый год',
      packageText: 'Основное сравнение пакетов содержит только VANTAM Start и VANTAM First Year.',
      packageSummary: 'Выбранный пакет',
      packageDownload: 'Скачать / сохранить обзор пакета',
      packageDownloadHint: 'Только печать браузера. Финальный письменный объём подтверждается до начала работы.',
      consultationLead: 'Один вход через консультацию',
      consultationTitle: 'Relocation Orientation',
      consultationText: 'Одна публичная консультация для первой практической оценки и рекомендации продукта.',
      housingLead: 'Жилищный маршрут',
      housingTitle: 'Housing Ready versus Housing Search Campaign',
      housingText: 'Подготовка и выполнение кампании отделены от основных пакетов и используют фиксированные публичные пределы.',
      servicesLead: 'Индивидуальные студенческие услуги',
      servicesTitle: 'Определённые практические кейсы для студентов, которые уже живут в Нидерландах',
      servicesText: 'Это конкретные публичные услуги с фиксированными ценами только там, где объём предсказуем. Всё остальное использует Запросить цену.',
      studentLifeLead: 'Student Life Map Preview',
      studentLifeTitle: 'Иллюстративный предварительный просмотр рабочего документа, а не портал',
      studentLifeText: 'Предварительный просмотр показывает типы зон и статусов, которые VANTAM может упорядочивать во время поддержки. Это не означает аккаунт, сохранённый прогресс или клиентский кабинет.',
      situationsLead: 'Типичные ситуации',
      situationsTitle: 'Типичные ситуации, которые VANTAM может взять в работу',
      situationsText: 'Это типы сценариев, а не отзывы.',
      faqText: 'Понятные ответы об объёме, границах, публичной логике цен, возвращающихся клиентах и Student Life Map Preview.',
      partnerLead: 'Партнёрский вход',
      partnerTitle: 'Отдельный маршрут для организаций, которые передают практические студенческие кейсы',
      partnerText: 'Для университетов, образовательных консультантов, агентств и маршрутов при поддержке семьи, которым нужен один практический хенд-офф вместо разрозненных сообщений.',
      partnerCta: 'Обсудить партнёрский запрос',
      contactLead: 'Контакт',
      contactAside: 'В VANTAM можно обратиться даже без готового окончательного ответа.',
      contactAsideText: 'Выберите продукт, жилищный маршрут или индивидуальную услугу, если уже знаете её. Иначе опишите ситуацию, и VANTAM ответит о возможных следующих шагах.',
      responseTime: 'VANTAM рассматривает запросы и отвечает по электронной почте о возможных следующих шагах.',
      businessDetailsLabel: 'Данные бизнеса',
      emailLabel: 'Электронная почта',
      phoneLabel: 'Телефон',
      whatsappLabel: 'Написать VANTAM в WhatsApp Business',
      boundaryTitle: 'Границы',
      boundaryText: 'VANTAM не позиционирует себя как юридическую фирму, иммиграционный сервис, страхового брокера, финансового советника, медицинского провайдера, агентство недвижимости или клиентский портал.',
      formSectionTitle: 'Детали запроса',
      formSectionSub: 'Эти поля помогают VANTAM понять ситуацию и сохранить правильный контекст продукта.',
      formAudienceLabel: 'Контекст',
      formStatusLabel: 'Текущий статус',
      formMovingDateLabel: 'Ожидаемая дата переезда',
      formCityLabel: 'Предпочтительный город или регион',
      formBudgetLabel: 'Ориентировочный бюджет на жильё',
      formGuarantorLabel: 'Ситуация с гарантом',
      formHelpLabel: 'Какая помощь нужна',
      formHousingTypeLabel: 'Какой тип жилья вы ищете?',
      formSensitiveWarning: 'Не отправляйте через эту открытую форму паспорта, банковские выписки, медицинские данные, файлы гаранта или другие чувствительные документы.',
      formEnquiryNotice: 'Это только запрос. Отправка формы не создаёт договор, не бронирует консультацию, не запускает работу и не означает отказ от прав.',
      formStatusBefore: 'До приезда',
      formStatusAfter: 'Уже в Нидерландах',
      formStatusFoundHousing: 'Жильё уже найдено',
      formStatusNeedHousing: 'Жильё нужно сейчас или позже',
      formStatusOrganisation: 'Организация / партнёрство',
      formAudienceStudent: 'Студент',
      formAudienceProfessional: 'Экспат / профессионал',
      formAudienceFamily: 'Семья',
      formAudienceOrganisation: 'Организация',
      formGuarantorYes: 'Да, гарант есть',
      formGuarantorMaybe: 'Может понадобиться',
      formGuarantorNo: 'Нет / не уверен(-а)',
      chooseHousingType: 'Выберите тип жилья',
      chooseRange: 'Выберите диапазон',
      chooseSituation: 'Выберите ситуацию',
      printTitle: 'Скачать / сохранить обзор пакета',
      printDesc: 'Просмотрите обзор пакета, затем используйте печать браузера, чтобы распечатать или сохранить его как PDF.',
      printButton: 'Распечатать или сохранить как PDF',
      close: 'Закрыть',
      printComparison: 'Краткое сравнение пакетов',
      printGenerated: 'Сформировано',
      printVersion: 'Версия пакета',
      printDisclaimer: 'Финальный письменный объём, результаты, исключения и цена подтверждаются до начала работы.',
      printClientResponsibilities: 'Обязанности клиента',
      printExclusions: 'Исключения',
      printOptional: 'Необязательные добавления',
      printNoGuarantee: 'Примечание об отсутствии гарантии результата третьих сторон',
      printNextStep: 'Следующий шаг',
      returningClientCta: 'Возвращающийся клиент? Спросите о Continue',
      individualServiceIntro: 'Выберите определённую индивидуальную услугу',
      packageDifference: 'Чем отличается',
      packagePeriod: 'Активный период',
      packageOutcome: 'Результат',
      requestPriceNote: 'Запросить цену означает письменный объём, результаты, исключения и цену до начала работы.',
      serviceBoundary: 'Граница',
      recommendedProduct: 'Рекомендуемый продукт',
      whatRisk: 'Что под риском',
      whatVantamDoes: 'Что делает VANTAM',
      trigger: 'Триггер',
    },
  })[lang], [lang]);

  useEffect(() => {
    formStartedAtRef.current = Date.now();
    const updateHash = () => setCurrentHash(window.location.hash);
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  useEffect(() => {
    const navigation = mobileNavigationRef.current;
    const handlePointerDown = (event: PointerEvent) => {
      if (navigation?.open && !navigation.contains(event.target as Node)) navigation.removeAttribute('open');
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && navigation?.open) {
        navigation.removeAttribute('open');
        navigation.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!showExportModal) return;
    const trigger = pdfTriggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modalCloseRef.current?.focus();

    const handleModalKeys = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowExportModal(false);
        return;
      }
      if (event.key !== 'Tab' || !modalRef.current) return;
      const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
        .filter((element) => !element.hasAttribute('disabled'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleModalKeys);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleModalKeys);
      trigger?.focus();
    };
  }, [showExportModal]);

  useEffect(() => {
    if (formState === 'success') successRef.current?.focus();
  }, [formState]);

  const whatsappHref = getWhatsAppUrl(lang);
  const whatsappAriaLabel = getWhatsAppAriaLabel(lang);
  const privacyHref = privacyPath(lang);
  const privacyLabel = PRIVACY_ROUTE_LABELS[lang];
  const legalLinks = legalFooterLinks(lang);
  const privacyAcknowledgement = PRIVACY_FORM_ACKNOWLEDGEMENT[lang];
  const footerBusinessLine = getBusinessFooterLine(lang);
  const footerPrintLine = getBusinessPrintFooterLine(lang);
  const businessLocation = BUSINESS_LOCATION[lang];
  const localeSwitchHref = (nextLocale: Locale) => {
    const path = swapLocale(pathname, nextLocale);
    return `${path}${searchString ? `?${searchString}` : ''}${currentHash}`;
  };

  const selectedPackageData = PREMIUM_PACKAGES.find((item) => item.id === selectedPackage) ?? PREMIUM_PACKAGES[1];
  const selectedHousingData = HOUSING_PRODUCTS.find((item) => item.id === selectedHousing) ?? HOUSING_PRODUCTS[0];
  const activeServiceGroupData = INDIVIDUAL_SERVICE_GROUPS.find((item) => item.id === activeServiceGroup) ?? INDIVIDUAL_SERVICE_GROUPS[0];
  const activeSituationData = SITUATION_OPTIONS.find((item) => item.id === activeSituation) ?? SITUATION_OPTIONS[0];

  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: prefersReducedMotion ? 'auto' : 'smooth'});
  };

  const resetHousingFields = () => {
    setFormHousingType('');
    setFormBudget('');
    setFormGuarantor('');
  };

  const applyQualificationContext = (overrides: Partial<{
    audience: string;
    movingDate: string;
    city: string;
    budget: string;
    status: string;
    guarantor: string;
    help: HelpValue;
    message: string;
  }>) => {
    if (overrides.audience !== undefined) setFormAudience(overrides.audience);
    if (overrides.movingDate !== undefined) setFormMovingDate(overrides.movingDate);
    if (overrides.city !== undefined) setFormCity(overrides.city);
    if (overrides.status !== undefined) {
      setFormStatusField(overrides.status);
      if (overrides.status !== 'before') setFormMovingDate('');
    }
    if (overrides.budget !== undefined) setFormBudget(overrides.budget);
    if (overrides.guarantor !== undefined) setFormGuarantor(overrides.guarantor);
    if (overrides.help !== undefined) {
      setFormHelp(overrides.help);
      if (!isHousingHelp(overrides.help)) resetHousingFields();
    }
    if (overrides.message !== undefined) setFormMessage(overrides.message);
  };

  const handleSelectSituation = (situationId: string) => {
    const option = SITUATION_OPTIONS.find((item) => item.id === situationId) ?? SITUATION_OPTIONS[0];
    setActiveSituation(option.id);

    if (option.id === 'moving') {
      setSelectedPackage('vantam_first_year');
      applyQualificationContext({
        audience: 'student',
        status: 'before',
        help: 'vantam_first_year',
        message: lang === 'en'
          ? 'I am moving or have just arrived and want to compare VANTAM Start with VANTAM First Year.'
          : lang === 'uk'
            ? 'Я переїжджаю або щойно приїхав(-ла) і хочу порівняти VANTAM Start та VANTAM First Year.'
            : 'Я переезжаю или только что приехал(-а) и хочу сравнить VANTAM Start и VANTAM First Year.',
      });
    }

    if (option.id === 'housing') {
      setSelectedHousing('housing_ready');
      applyQualificationContext({
        audience: 'student',
        status: 'need_housing',
        help: 'housing_ready:not_sure',
        message: lang === 'en'
          ? 'I need housing support and want to compare Housing Ready with Housing Search Campaign.'
          : lang === 'uk'
            ? 'Мені потрібна житлова підтримка, і я хочу порівняти Housing Ready та Housing Search Campaign.'
            : 'Мне нужна жилищная поддержка, и я хочу сравнить Housing Ready и Housing Search Campaign.',
      });
    }

    if (option.id === 'problem') {
      applyQualificationContext({
        audience: 'student',
        status: 'after',
        message: lang === 'en'
          ? 'I already live in the Netherlands and need help with a practical problem.'
          : lang === 'uk'
            ? 'Я вже живу в Нідерландах і потребую допомоги з практичною проблемою.'
            : 'Я уже живу в Нидерландах и нуждаюсь в помощи с практической проблемой.',
      });
    }

    if (option.id === 'organisation') {
      applyQualificationContext({
        audience: 'organisation',
        status: 'organisation',
        help: 'partnership',
        message: lang === 'en'
          ? 'I represent an organisation and would like to discuss a practical student referral.'
          : lang === 'uk'
            ? 'Я представляю організацію і хотів(-ла) б обговорити практичну передачу студентського кейсу.'
            : 'Я представляю организацию и хотел(-а) бы обсудить практическую передачу студенческого кейса.',
      });
    }

    scrollToId(option.targetId);
  };

  const handleSelectPackage = (packageId: 'vantam_start' | 'vantam_first_year') => {
    const item = PREMIUM_PACKAGES.find((entry) => entry.id === packageId);
    setSelectedPackage(packageId);
    if (!item) return;
    const nextStatus = packageId === 'vantam_start'
      ? 'before'
      : formStatusField === 'organisation'
        ? 'before'
        : formStatusField;
    applyQualificationContext({
      audience: 'student',
      status: nextStatus,
      help: packageId,
      message: lang === 'en'
        ? `I want ${item.name.en} (${item.price}).`
        : lang === 'uk'
          ? `Мені потрібен ${item.name.uk} (${item.price}).`
          : `Мне нужен ${item.name.ru} (${item.price}).`,
    });
    scrollToId('contact');
  };

  const handleSelectHousing = (housingId: 'housing_ready' | 'housing_campaign') => {
    const item = HOUSING_PRODUCTS.find((entry) => entry.id === housingId);
    setSelectedHousing(housingId);
    if (!item) return;
    applyQualificationContext({
      audience: 'student',
      status: 'need_housing',
      help: `${housingId}:not_sure`,
      message: lang === 'en'
        ? `I want ${item.name.en} (${item.price}).`
        : lang === 'uk'
          ? `Мені потрібен ${item.name.uk} (${item.price}).`
          : `Мне нужен ${item.name.ru} (${item.price}).`,
    });
    scrollToId('contact');
  };

  const handleSelectService = (slug: string, name: string) => {
    if (!APPROVED_INDIVIDUAL_SERVICE_SLUGS.includes(slug)) return;
    applyQualificationContext({
      audience: 'student',
      status: 'after',
      help: `individual_service:${slug}`,
      message: lang === 'en'
        ? `I need help with ${name}.`
        : lang === 'uk'
          ? `Мені потрібна допомога з: ${name}.`
          : `Мне нужна помощь по теме: ${name}.`,
    });
    scrollToId('contact');
  };

  const handleReturningClient = () => {
    applyQualificationContext({
      audience: 'student',
      status: 'after',
      help: 'vantam_continue',
      message: lang === 'en'
        ? 'I am a returning client and want to ask about Continue for an already-open case.'
        : lang === 'uk'
          ? 'Я клієнт, що повертається, і хочу запитати про Continue для вже відкритого кейсу.'
          : 'Я возвращающийся клиент и хочу спросить о Continue для уже открытого кейса.',
    });
    scrollToId('contact');
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim() || !formConsent) return;
    setFormState('sending');
    try {
      const helpValue = isHousingHelp(formHelp)
        ? `${formHelp.split(':')[0]}:${formHousingType || formHelp.split(':')[1] || 'not_sure'}`
        : formHelp;
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          inquiryType: getInquiryTypeForHelp(helpValue),
          message: formMessage,
          consent: formConsent,
          language: lang,
          website: formWebsite,
          sourceUrl: window.location.pathname,
          audience: formAudience,
          movingDate: formStatusField === 'before' ? formMovingDate : '',
          city: formCity,
          budget: isHousingHelp(helpValue) ? formBudget : '',
          status: formStatusField,
          guarantor: isHousingHelp(helpValue) ? formGuarantor : '',
          help: helpValue,
          formStartedAt: formStartedAtRef.current,
        }),
      });
      if (!response.ok) throw new Error('Contact request failed');
      setFormState('success');
    } catch {
      setFormState('error');
    }
  };

  const handleResetForm = () => {
    setFormName('');
    setFormEmail('');
    setFormMessage('');
    setFormConsent(false);
    setFormWebsite('');
    setFormAudience('student');
    setFormMovingDate('');
    setFormCity('');
    setFormBudget('');
    setFormStatusField('before');
    setFormGuarantor('');
    setFormHelp('relocation_orientation');
    setFormHousingType('');
    formStartedAtRef.current = Date.now();
    setActiveSituation('moving');
    setFormState('idle');
  };

  const closeNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => event.currentTarget.closest('details')?.removeAttribute('open');
  const formErrorMessage = lang === 'en'
    ? 'The enquiry could not be sent. Please try again or use WhatsApp Business.'
    : lang === 'uk'
      ? 'Не вдалося надіслати запит. Спробуйте ще раз або напишіть у WhatsApp Business.'
      : 'Не удалось отправить запрос. Попробуйте ещё раз или напишите в WhatsApp Business.';

  const helpOptions = [
    {value: 'relocation_orientation', label: CONSULTATIONS_STORE[0].name[lang]},
    ...PREMIUM_PACKAGES.map((item) => ({value: item.id, label: item.name[lang]})),
    ...HOUSING_PRODUCTS.map((item) => ({value: `${item.id}:not_sure`, label: item.name[lang]})),
    ...INDIVIDUAL_SERVICE_GROUPS.flatMap((group) =>
      group.services.map((service) => ({
        value: `individual_service:${service.slug}`,
        label: service.name[lang],
      })),
    ),
    {value: 'partnership', label: lang === 'en' ? 'Partnership enquiry' : lang === 'uk' ? 'Партнерський запит' : 'Партнёрский запрос'},
  ];

  if (formHelp === 'vantam_continue') {
    helpOptions.splice(3, 0, {
      value: 'vantam_continue',
      label: 'VANTAM Continue',
    });
  }

  return (
    <div className="vantam-site" data-theme={theme}>
      <div className="service-strip">
        <div className="site-container">
          <span>{copy.responseTime}</span>
          <a href={whatsappHref} target="_blank" rel="noreferrer noopener" aria-label={whatsappAriaLabel}>{copy.whatsappLabel}</a>
        </div>
      </div>

      <a href="#main" className="skip-link">Skip to main content</a>

      <header className="site-header">
        <div className="site-container header-inner">
          <a href="#top" className="brand-lockup" aria-label="VANTAM">
            <BrandLogo className="brand-logo" />
          </a>

          <nav className="desktop-nav" aria-label={dict.menu}>
            <a href="#packages">{copy.packageLead}</a>
            <a href="#consultation">{copy.consultationTitle}</a>
            <a href="#housing">{copy.housingLead}</a>
            <a href="#individual-services">{copy.servicesLead}</a>
            <a href="#contact" className="nav-cta">{dict.navContact}</a>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}
              aria-label={theme === 'light' ? dict.darkTheme : dict.lightTheme}
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
            <div className="language-switcher" aria-label="Language switcher">
              {LOCALES.map((code) => (
                <Link
                  key={code}
                  href={localeSwitchHref(code)}
                  aria-current={lang === code ? 'page' : undefined}
                  data-active={lang === code ? 'true' : 'false'}
                >
                  {LOCALE_LABELS[code]}
                </Link>
              ))}
            </div>
            <details ref={mobileNavigationRef} className="mobile-navigation">
              <summary aria-label={dict.menu}><Menu /></summary>
              <nav>
                <a href="#packages" onClick={closeNavigation}>{copy.packageLead}</a>
                <a href="#consultation" onClick={closeNavigation}>{copy.consultationTitle}</a>
                <a href="#housing" onClick={closeNavigation}>{copy.housingLead}</a>
                <a href="#individual-services" onClick={closeNavigation}>{copy.servicesLead}</a>
                <a href="#faq" onClick={closeNavigation}>FAQ</a>
                <a href="#contact" onClick={closeNavigation}>{dict.navContact}</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero-section">
          <div className="site-container hero-layout">
            <div className="hero-copy reveal-block">
              <p className="hero-kicker">VANTAM Netherlands</p>
              <h1>{dict.heroHeadline}</h1>
              <p className="hero-lede">{dict.heroSub}</p>
              <div className="hero-actions">
                <a href="#start-here" className="button button-primary">{dict.heroPrimary}<ArrowRight /></a>
                <a href="#packages" className="text-link">{dict.heroSecondary}<ArrowUpRight /></a>
              </div>
              <div className="hero-tags" aria-label={copy.sectionLead}>
                {AUDIENCE_FOCUS.map((audience) => <span key={audience.id}>{audience.title[lang]}</span>)}
              </div>
              <p className="hero-note"><ShieldCheck />{dict.localNote}</p>
            </div>
            <figure className="hero-media reveal-media">
              <HeroScene />
            </figure>
          </div>
        </section>

        <section className="entry-section section-anchor" id="start-here">
          <div className="site-container start-hub">
            <div className="start-hub-copy">
              <p>{copy.sectionLead}</p>
              <h2>{copy.sectionTitle}</h2>
              <p className="large-copy">{copy.sectionText}</p>
              <div className="audience-grid">
                {AUDIENCE_FOCUS.map((audience) => (
                  <article key={audience.id} className="audience-item">
                    <strong>{audience.title[lang]}</strong>
                    <p>{audience.note[lang]}</p>
                    <span>{audience.timing[lang]}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="situation-selector-shell">
              <p>{copy.situationLead}</p>
              <h2>{copy.situationTitle}</h2>
              <p className="selector-text">{copy.situationText}</p>
              <div className="situation-selector">
                {SITUATION_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={activeSituation === option.id ? 'is-selected' : ''}
                    aria-pressed={activeSituation === option.id}
                    onClick={() => handleSelectSituation(option.id)}
                  >
                    <strong>{option.title[lang]}</strong>
                    <span>{option.description[lang]}</span>
                    <small>{option.label[lang]}</small>
                  </button>
                ))}
              </div>
              <p className="selector-current">
                <strong>{activeSituationData.title[lang]}</strong>
                <span>{activeSituationData.description[lang]}</span>
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="trust-section section-anchor">
          <div className="site-container trust-layout">
            <div className="process-panel">
              <p>{copy.processLead}</p>
              <h2>{copy.processTitle}</h2>
              <p className="large-copy">{copy.processText}</p>
              <div className="process-list">
                {PROCESS_STEPS.map((step, index) => (
                  <article key={step.id}>
                    <span>{index + 1}</span>
                    <div>
                      <h3>{step.title[lang]}</h3>
                      <p>{step.description[lang]}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="partner-panel">
              <p>{copy.boundaryTitle}</p>
              <h2>{lang === 'en' ? 'Practical help, not regulated representation' : lang === 'uk' ? 'Практична допомога, а не регульоване представництво' : 'Практическая помощь, а не регулируемое представительство'}</h2>
              <p className="large-copy">{copy.boundaryText}</p>
              <div className="boundary-note">
                <Info />
                <p>
                  <strong>{lang === 'en' ? 'Public boundary note' : lang === 'uk' ? 'Публічна примітка про межі' : 'Публичная заметка о границах'}</strong>
                  {lang === 'en'
                    ? ' VANTAM uses practical review, sequence, preparation, communication, and specialist handoff language where regulated topics appear.'
                    : lang === 'uk'
                      ? ' VANTAM використовує мову практичного перегляду, послідовності, підготовки, комунікації та handoff до спеціаліста там, де виникають регульовані теми.'
                      : ' VANTAM использует язык практического обзора, последовательности, подготовки, коммуникации и handoff к специалисту там, где появляются регулируемые темы.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="packages-section section-anchor">
          <div className="site-container">
            <div className="section-intro">
              <p>{copy.packageLead}</p>
              <h2>{copy.packageTitle}</h2>
              <span>{copy.packageText}</span>
            </div>
            <div className="package-comparison">
              {PREMIUM_PACKAGES.map((item) => {
                const isSelected = item.id === selectedPackage;
                return (
                  <article
                    key={item.id}
                    className={[
                      'package-option',
                      item.id === 'vantam_first_year' ? 'is-featured' : '',
                      isSelected ? 'is-selected' : '',
                    ].filter(Boolean).join(' ')}
                  >
                    <div className="package-heading">
                      <span>{item.badge ? item.badge[lang] : item.shortTitle[lang]}</span>
                      <strong>{item.price}</strong>
                    </div>
                    <h3>{item.name[lang]}</h3>
                    <p>{item.subtitle[lang]}</p>
                    <small><Clock />{item.activePeriod[lang]}</small>
                    <ul>
                      {item.reasons[lang].slice(0, 4).map((reason) => (
                        <li key={reason}><Check />{reason}</li>
                      ))}
                    </ul>
                    <button onClick={() => setSelectedPackage(item.id)} aria-pressed={isSelected}>
                      {isSelected ? (lang === 'en' ? 'Selected' : lang === 'uk' ? 'Обрано' : 'Выбрано') : (lang === 'en' ? 'View details' : lang === 'uk' ? 'Деталі' : 'Детали')}
                      <ArrowRight />
                    </button>
                  </article>
                );
              })}
            </div>
            <div className="package-detail" aria-live="polite">
              <div className="package-summary">
                <p>{copy.packageSummary}</p>
                <h3>{selectedPackageData.name[lang]}</h3>
                <strong>{selectedPackageData.price}</strong>
                <span>{selectedPackageData.audience[lang]}</span>
                <div className="package-actions">
                  <button onClick={() => handleSelectPackage(selectedPackageData.id)} className="button button-primary">
                    {selectedPackageData.cta[lang]}<ArrowRight />
                  </button>
                  <button ref={pdfTriggerRef} id="pdf-download-btn" onClick={() => setShowExportModal(true)} className="button button-quiet">
                    <Download />{copy.packageDownload}
                  </button>
                </div>
                <p className="package-download-note">{copy.packageDownloadHint}</p>
              </div>
              <div className="package-list">
                <h4><ShieldCheck />{copy.packageOutcome}</h4>
                <ul>
                  <li><Check />{selectedPackageData.outcome[lang]}</li>
                  <li><Check />{selectedPackageData.activePeriod[lang]}</li>
                  <li><Check />{selectedPackageData.difference[lang]}</li>
                </ul>
              </div>
              <div className="package-list package-limits">
                <h4><AlertCircle />{copy.packageDifference}</h4>
                <ul>
                  {selectedPackageData.reasons[lang].map((reason) => (
                    <li key={reason}><AlertCircle />{reason}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="structured-details-grid">
              {selectedPackageData.detailSections.map((section) => (
                <article key={section.title.en} className="structured-detail-card">
                  <h4>{section.title[lang]}</h4>
                  <ul>
                    {section.items[lang].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="boundary-note">
              <Info />
              <p><strong>{lang === 'en' ? 'Returning clients' : lang === 'uk' ? 'Клієнти, що повертаються' : 'Возвращающиеся клиенты'}</strong>{RETURNING_CLIENT_NOTE[lang]}</p>
            </div>
            <div className="returning-client-row">
              <button type="button" className="button button-secondary" onClick={handleReturningClient}>{copy.returningClientCta}<ArrowRight /></button>
            </div>
          </div>
        </section>

        <section id="consultation" className="consultations-section section-anchor">
          <div className="site-container">
            <div className="section-intro">
              <p>{copy.consultationLead}</p>
              <h2>{copy.consultationTitle}</h2>
              <span>{copy.consultationText}</span>
            </div>
            <div className="consultation-composition consultation-composition-single">
              {CONSULTATIONS_STORE.map((consultation) => (
                <article key={consultation.id} className="consultation consultation-featured">
                  <div className="consultation-top">
                    <span><Clock />{consultation.duration[lang]}</span>
                    <strong>{consultation.price}</strong>
                  </div>
                  <h3>{consultation.name[lang]}</h3>
                  <p>{consultation.summary[lang]}</p>
                  <dl>
                    <div>
                      <dt>{lang === 'en' ? 'Includes' : lang === 'uk' ? 'Включає' : 'Включает'}</dt>
                      <dd>{consultation.deliverables[lang].join(', ')}</dd>
                    </div>
                    <div>
                      <dt>{lang === 'en' ? 'Note' : lang === 'uk' ? 'Примітка' : 'Примечание'}</dt>
                      <dd>{consultation.note[lang]}</dd>
                    </div>
                  </dl>
                  <button onClick={() => {
                    applyQualificationContext({
                      audience: 'student',
                      status: 'before',
                      help: 'relocation_orientation',
                      message: lang === 'en'
                        ? 'I want Relocation Orientation before choosing a package.'
                        : lang === 'uk'
                          ? 'Мені потрібна Relocation Orientation перед вибором пакета.'
                          : 'Мне нужна Relocation Orientation перед выбором пакета.',
                    });
                    scrollToId('contact');
                  }} className="button button-secondary">{consultation.cta[lang]}<ArrowRight /></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="housing" className="single-services-section section-anchor">
          <div className="site-container services-layout">
            <aside>
              <p>{copy.housingLead}</p>
              <h2>{copy.housingTitle}</h2>
              <span>{copy.housingText}</span>
              <div className="service-category-tabs" aria-label={copy.housingLead}>
                {HOUSING_PRODUCTS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={selectedHousing === item.id}
                    onClick={() => setSelectedHousing(item.id)}
                  >
                    <House />
                    <span>
                      <strong>{item.name[lang]}</strong>
                      <small>{item.period[lang]}</small>
                    </span>
                    <ChevronDown />
                  </button>
                ))}
              </div>
            </aside>
            <div className="service-list-panel">
              <div className="service-panel-heading">
                <div>
                  <h3>{selectedHousingData.name[lang]}</h3>
                  <p>{selectedHousingData.outcome[lang]}</p>
                </div>
                <span>{selectedHousingData.price}</span>
              </div>
              <div className="service-rows">
                {selectedHousingData.limits[lang].map((item) => (
                  <article key={item}>
                    <div className="service-name"><h4>{selectedHousingData.name[lang]}</h4><span>{selectedHousingData.period[lang]}</span></div>
                    <div className="service-description"><p>{item}</p></div>
                    <div className="service-action"><strong>{selectedHousingData.price}</strong></div>
                  </article>
                ))}
              </div>
              <div className="boundary-note">
                <Info />
                <p><strong>{lang === 'en' ? 'Optional additions' : lang === 'uk' ? 'Необов’язкові додатки' : 'Необязательные добавления'}</strong>{selectedHousingData.optionalAdditions[lang].join(' ')}</p>
              </div>
              <div className="service-action-row">
                <button type="button" className="button button-secondary" onClick={() => handleSelectHousing(selectedHousingData.id)}>{selectedHousingData.cta[lang]}<ArrowRight /></button>
              </div>
            </div>
          </div>
        </section>

        <section id="individual-services" className="single-services-section section-anchor">
          <div className="site-container services-layout">
            <aside>
              <p>{copy.servicesLead}</p>
              <h2>{copy.servicesTitle}</h2>
              <span>{copy.servicesText}</span>
              <div className="service-category-tabs" aria-label={copy.servicesLead}>
                {INDIVIDUAL_SERVICE_GROUPS.map((group) => (
                  <button
                    key={group.id}
                    type="button"
                    aria-pressed={activeServiceGroup === group.id}
                    onClick={() => setActiveServiceGroup(group.id)}
                  >
                    <FileText />
                    <span>
                      <strong>{group.title[lang]}</strong>
                      <small>{group.services.length} {lang === 'en' ? 'services' : lang === 'uk' ? 'послуг' : 'услуг'}</small>
                    </span>
                    <ChevronDown />
                  </button>
                ))}
              </div>
              <div className="boundary-note">
                <Info />
                <p><strong>{lang === 'en' ? 'Pricing logic' : lang === 'uk' ? 'Логіка цін' : 'Логика цен'}</strong>{copy.requestPriceNote}</p>
              </div>
            </aside>
            <div className="service-list-panel" aria-live="polite">
              <div className="service-panel-heading">
                <div>
                  <h3>{activeServiceGroupData.title[lang]}</h3>
                  <p>{activeServiceGroupData.description[lang]}</p>
                </div>
                <span>{activeServiceGroupData.services.length}</span>
              </div>
              <div className="service-rows">
                {activeServiceGroupData.services.map((service) => (
                  <article key={service.slug}>
                    <div className="service-name">
                      <h4>{service.name[lang]}</h4>
                      <span>{service.price === 'Request a price' ? dict.requestPrice : service.price}</span>
                    </div>
                    <div className="service-description">
                      <p>{service.summary[lang]}</p>
                      <small className="service-exclusion"><Info />{copy.serviceBoundary}: {service.boundary[lang]}</small>
                    </div>
                    <div className="service-action">
                      <strong>{service.price === 'Request a price' ? dict.requestPrice : service.price}</strong>
                      <button onClick={() => handleSelectService(service.slug, service.name[lang])} aria-label={`${copy.individualServiceIntro}: ${service.name[lang]}`}><ArrowUpRight /></button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="student-life-map" className="tools-section section-anchor">
          <div className="site-container">
            <div className="section-intro section-intro-wide">
              <p>{copy.studentLifeLead}</p>
              <h2>{copy.studentLifeTitle}</h2>
              <span>{copy.studentLifeText}</span>
            </div>
            <div className="life-map-shell">
              <div className="life-map-grid">
                {STUDENT_LIFE_MAP_PREVIEW.map((item) => (
                  <article key={item.area.en} className="life-map-card">
                    <strong>{item.area[lang]}</strong>
                    <span>{STUDENT_LIFE_STATUSES[item.status][lang]}</span>
                  </article>
                ))}
              </div>
              <div className="status-legend">
                {Object.entries(STUDENT_LIFE_STATUSES).map(([status, label]) => (
                  <span key={status}>{label[lang]}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="typical-situations" className="proof-section section-anchor">
          <div className="site-container">
            <div className="proof-heading">
              <p>{copy.situationsLead}</p>
              <h2>{copy.situationsTitle}</h2>
              <span>{copy.situationsText}</span>
            </div>
            <div className="scenario-grid">
              {TYPICAL_SITUATIONS.map((item) => (
                <article key={item.id} className="scenario-card">
                  <h3>{item.title[lang]}</h3>
                  <dl>
                    <div><dt>{copy.trigger}</dt><dd>{item.trigger[lang]}</dd></div>
                    <div><dt>{copy.whatRisk}</dt><dd>{item.risk[lang]}</dd></div>
                    <div><dt>{copy.whatVantamDoes}</dt><dd>{item.action[lang]}</dd></div>
                    <div><dt>{copy.recommendedProduct}</dt><dd>{item.recommendedProduct[lang]}</dd></div>
                    <div><dt>{copy.boundaryTitle}</dt><dd>{item.boundary[lang]}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section section-anchor">
          <div className="site-container faq-layout">
            <div>
              <h2>FAQ</h2>
              <p>{copy.faqText}</p>
            </div>
            <div className="faq-list">
              {FAQS_STORE.map((faq) => {
                const open = !!faqOpen[faq.id];
                const answerId = `faq-answer-${faq.id}`;
                return (
                  <div key={faq.id} className="faq-item">
                    <button onClick={() => setFaqOpen((previous) => ({...previous, [faq.id]: !previous[faq.id]}))} aria-expanded={open} aria-controls={answerId}>
                      <span>{faq.q[lang]}</span>
                      <ChevronDown className={open ? 'is-open' : ''} />
                    </button>
                    <div id={answerId} aria-hidden={!open} className={open ? 'faq-answer is-open' : 'faq-answer'}>
                      <div>
                        <p>{faq.a[lang]}</p>
                        {faq.id === 'f4' && (
                          <div className="faq-inline-action">
                            <button type="button" className="button button-secondary" onClick={handleReturningClient}>{copy.returningClientCta}<ArrowRight /></button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="partner-entry" className="trust-section section-anchor">
          <div className="site-container trust-layout">
            <div className="process-panel">
              <p>{copy.partnerLead}</p>
              <h2>{copy.partnerTitle}</h2>
              <p className="large-copy">{copy.partnerText}</p>
              <div className="partner-grid">
                {PARTNER_AUDIENCES.map((partner) => (
                  <article key={partner.id}>
                    <strong>{partner.title[lang]}</strong>
                    <p>{partner.description[lang]}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="partner-panel">
              <p>{lang === 'en' ? 'Partner route' : lang === 'uk' ? 'Партнерський маршрут' : 'Партнёрский маршрут'}</p>
              <h2>{lang === 'en' ? 'Use the existing contact form with partnership context' : lang === 'uk' ? 'Використовуйте наявну контактну форму з контекстом партнерства' : 'Используйте существующую контактную форму с контекстом партнёрства'}</h2>
              <p className="large-copy">{lang === 'en' ? 'No new organisation fields or special database path are introduced. Partnership enquiries stay inside the existing contact architecture.' : lang === 'uk' ? 'Жодних нових полів для організацій або спеціального шляху в базі не додається. Партнерські запити залишаються в межах наявної контактної архітектури.' : 'Никаких новых полей для организаций или специального пути в базе не добавляется. Партнёрские запросы остаются в рамках существующей контактной архитектуры.'}</p>
              <button type="button" className="button button-secondary" onClick={() => {
                handleSelectSituation('organisation');
                scrollToId('contact');
              }}>{copy.partnerCta}<ArrowRight /></button>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-anchor">
          <div className="site-container contact-layout">
            <div className="contact-copy">
              <p>{copy.contactLead}</p>
              <h2>{dict.navContact}</h2>
              <span>{copy.responseTime}</span>
              <div className="contact-note">
                <MessageIcon />
                <div>
                  <strong>{copy.contactAside}</strong>
                  <p>{copy.contactAsideText}</p>
                </div>
              </div>
              <div className="contact-details" aria-label={copy.businessDetailsLabel}>
                <p className="contact-details-lead">{copy.businessDetailsLabel}</p>
                <div className="contact-details-grid">
                  <div className="contact-details-item">
                    <span>{copy.emailLabel}</span>
                    <a href={BUSINESS.publicEmailMailto}>{BUSINESS.publicEmail}</a>
                  </div>
                  <div className="contact-details-item">
                    <span>{copy.phoneLabel}</span>
                    <a href={BUSINESS.phoneTelHref}>{BUSINESS.phoneDisplayNumber}</a>
                  </div>
                  <div className="contact-details-item contact-details-item-whatsapp">
                    <span>{copy.whatsappLabel}</span>
                    <a className="button button-secondary contact-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer noopener" aria-label={whatsappAriaLabel}><MessageCircle />{copy.whatsappLabel}<ArrowUpRight /></a>
                    <small>{BUSINESS.whatsappDisplayNumber}</small>
                  </div>
                </div>
                <p className="contact-response-time">{copy.responseTime}</p>
                <div className="contact-business-meta">
                  <strong>{BUSINESS.registeredBusinessName}</strong>
                  <p>KvK {BUSINESS.kvkNumber}</p>
                  <p>{businessLocation}</p>
                </div>
              </div>
            </div>
            <div className="contact-form-shell">
              {formState === 'success' ? (
                <motion.div ref={successRef} tabIndex={-1} role="status" initial={{opacity: 0}} animate={{opacity: 1}} className="form-success">
                  <span><Check /></span>
                  <h3>{dict.contactSuccessTitle}</h3>
                  <p>{dict.contactSuccessDesc}</p>
                  <button onClick={handleResetForm} className="button button-primary">{dict.contactFailBtn}</button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="contact-website">Website</label>
                    <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={formWebsite} onChange={(event) => setFormWebsite(event.target.value)} />
                  </div>
                  {formState === 'error' && <div role="alert" className="form-error">{formErrorMessage}</div>}
                  <div className="form-section-copy">
                    <p>{copy.formSectionTitle}</p>
                    <span>{copy.formSectionSub}</span>
                  </div>
                  <p role="note">{copy.formSensitiveWarning}</p>
                  <p role="note">{copy.formEnquiryNotice}</p>
                  <div className="qualification-grid">
                    <label htmlFor="contact-audience">
                      <span>{copy.formAudienceLabel}</span>
                      <select id="contact-audience" name="audience" value={formAudience} onChange={(event) => setFormAudience(event.target.value)} disabled={formState === 'sending'}>
                        <option value="student">{copy.formAudienceStudent}</option>
                        <option value="professional">{copy.formAudienceProfessional}</option>
                        <option value="family">{copy.formAudienceFamily}</option>
                        <option value="organisation">{copy.formAudienceOrganisation}</option>
                      </select>
                    </label>
                    <label htmlFor="contact-status">
                      <span>{copy.formStatusLabel}</span>
                      <select id="contact-status" name="status" value={formStatusField} onChange={(event) => {
                        const nextStatus = event.target.value;
                        setFormStatusField(nextStatus);
                        if (nextStatus !== 'before') setFormMovingDate('');
                      }} disabled={formState === 'sending'}>
                        <option value="before">{copy.formStatusBefore}</option>
                        <option value="after">{copy.formStatusAfter}</option>
                        <option value="found_housing">{copy.formStatusFoundHousing}</option>
                        <option value="need_housing">{copy.formStatusNeedHousing}</option>
                        <option value="organisation">{copy.formStatusOrganisation}</option>
                      </select>
                    </label>
                    {formStatusField === 'before' && (
                      <label htmlFor="contact-moving-date">
                        <span>{copy.formMovingDateLabel}</span>
                        <input id="contact-moving-date" name="movingDate" type="date" value={formMovingDate} onChange={(event) => setFormMovingDate(event.target.value)} disabled={formState === 'sending'} />
                      </label>
                    )}
                    <label htmlFor="contact-city">
                      <span>{copy.formCityLabel}</span>
                      <input id="contact-city" name="city" type="text" value={formCity} onChange={(event) => setFormCity(event.target.value)} disabled={formState === 'sending'} maxLength={80} placeholder={lang === 'en' ? 'Amsterdam, The Hague, Delft...' : lang === 'uk' ? 'Амстердам, Гаага, Делфт...' : 'Амстердам, Гаага, Делфт...'} />
                    </label>
                  </div>
                  <label htmlFor="contact-help">
                    <span>{copy.formHelpLabel}</span>
                    <select id="contact-help" name="help" value={formHelp} onChange={(event) => {
                      const nextHelp = event.target.value as HelpValue;
                      setFormHelp(nextHelp);
                      if (!isHousingHelp(nextHelp)) resetHousingFields();
                    }} disabled={formState === 'sending'}>
                      {helpOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </label>
                  {isHousingHelp(formHelp) && (
                    <div className="qualification-grid">
                      <label htmlFor="contact-housing-type">
                        <span>{copy.formHousingTypeLabel} *</span>
                        <select id="contact-housing-type" name="housingType" required value={formHousingType} onChange={(event) => setFormHousingType(event.target.value)} disabled={formState === 'sending'}>
                          <option value="">{copy.chooseHousingType}</option>
                          <option value="room_student">{lang === 'en' ? 'Room / student accommodation' : lang === 'uk' ? 'Кімната / студентське житло' : 'Комната / студенческое жильё'}</option>
                          <option value="studio">{lang === 'en' ? 'Studio' : lang === 'uk' ? 'Студія' : 'Студия'}</option>
                          <option value="apartment">{lang === 'en' ? 'Apartment' : lang === 'uk' ? 'Квартира' : 'Квартира'}</option>
                          <option value="house">{lang === 'en' ? 'House' : lang === 'uk' ? 'Будинок' : 'Дом'}</option>
                          <option value="short_stay">{lang === 'en' ? 'Temporary / short-stay housing' : lang === 'uk' ? 'Тимчасове / короткострокове житло' : 'Временное / краткосрочное жильё'}</option>
                          <option value="not_sure">{lang === 'en' ? 'Not sure yet' : lang === 'uk' ? 'Ще не знаю' : 'Пока не знаю'}</option>
                        </select>
                      </label>
                      <label htmlFor="contact-budget">
                        <span>{copy.formBudgetLabel}</span>
                        <select id="contact-budget" name="budget" value={formBudget} onChange={(event) => setFormBudget(event.target.value)} disabled={formState === 'sending'}>
                          <option value="">{copy.chooseRange}</option>
                          <option value="under-700">{lang === 'en' ? 'Under €700' : lang === 'uk' ? 'До €700' : 'До €700'}</option>
                          <option value="700-1000">€700–€1,000</option>
                          <option value="1000-1500">€1,000–€1,500</option>
                          <option value="1500-plus">{lang === 'en' ? '€1,500+' : lang === 'uk' ? 'Понад €1,500' : 'Свыше €1,500'}</option>
                          <option value="not-sure">{lang === 'en' ? 'Not sure yet' : lang === 'uk' ? 'Ще не знаю' : 'Пока не знаю'}</option>
                        </select>
                      </label>
                      <label htmlFor="contact-guarantor">
                        <span>{copy.formGuarantorLabel}</span>
                        <select id="contact-guarantor" name="guarantor" value={formGuarantor} onChange={(event) => setFormGuarantor(event.target.value)} disabled={formState === 'sending'}>
                          <option value="">{copy.chooseSituation}</option>
                          <option value="yes">{copy.formGuarantorYes}</option>
                          <option value="maybe">{copy.formGuarantorMaybe}</option>
                          <option value="no">{copy.formGuarantorNo}</option>
                        </select>
                      </label>
                    </div>
                  )}
                  <div className="form-grid">
                    <label htmlFor="contact-name">
                      <span>{dict.contactNameLabel} *</span>
                      <input id="contact-name" name="name" type="text" required value={formName} onChange={(event) => { setFormName(event.target.value); if (formState === 'error') setFormState('idle'); }} disabled={formState === 'sending'} maxLength={120} autoComplete="name" placeholder="Maria" />
                    </label>
                    <label htmlFor="contact-email">
                      <span>{dict.contactEmailLabel} *</span>
                      <input id="contact-email" name="email" type="email" required value={formEmail} onChange={(event) => { setFormEmail(event.target.value); if (formState === 'error') setFormState('idle'); }} disabled={formState === 'sending'} maxLength={254} autoComplete="email" placeholder="maria@example.com" />
                    </label>
                  </div>
                  <label htmlFor="contact-message">
                    <span>{dict.contactMessageLabel} *</span>
                    <textarea id="contact-message" name="message" rows={5} required value={formMessage} onChange={(event) => { setFormMessage(event.target.value); if (formState === 'error') setFormState('idle'); }} disabled={formState === 'sending'} maxLength={5000} placeholder={lang === 'en' ? 'For example: I need help with housing, a letter, university administration, or the right package.' : lang === 'uk' ? 'Наприклад: мені потрібна допомога з житлом, листом, університетською адміністрацією або правильним пакетом.' : 'Например: мне нужна помощь с жильём, письмом, университетской администрацией или правильным пакетом.'} />
                  </label>
                  <div className="consent-row">
                    <input type="checkbox" id="privacy-consent" name="consent" required checked={formConsent} onChange={(event) => setFormConsent(event.target.checked)} disabled={formState === 'sending'} />
                    <div className="consent-copy">
                      <label htmlFor="privacy-consent"><span>{privacyAcknowledgement.prefix}</span></label>
                      <Link href={privacyHref} className="consent-link">{privacyLabel}</Link>
                      <label htmlFor="privacy-consent"><span>{privacyAcknowledgement.suffix}</span></label>
                    </div>
                  </div>
                  <button type="submit" disabled={formState === 'sending' || !formConsent} className="button button-primary contact-submit">
                    <span aria-live="polite">{formState === 'sending' ? dict.contactSending : dict.contactSubmitBtn}</span>
                    {formState !== 'sending' && <ArrowRight />}
                  </button>
                </form>
              )}
            </div>
          </div>
          <footer className="site-footer">
            <div className="site-container footer-layout">
              <a href="#top" className="footer-brand" aria-label="VANTAM"><BrandLogo className="brand-logo brand-logo-footer" /></a>
              <div className="footer-copy">
                <p>{copy.boundaryText}</p>
                <p className="footer-business-meta">{footerBusinessLine}</p>
              </div>
              <div className="footer-contact-links">
                <a href={BUSINESS.publicEmailMailto}>{BUSINESS.publicEmail}</a>
                <a href={BUSINESS.phoneTelHref}>{BUSINESS.phoneDisplayNumber}</a>
                <a href={whatsappHref} target="_blank" rel="noreferrer noopener" aria-label={whatsappAriaLabel}>{copy.whatsappLabel}</a>
                {legalLinks.map((link) => (<Link key={link.href} href={link.href}>{link.label}</Link>))}
              </div>
            </div>
          </footer>
        </section>
      </main>

      {showExportModal && (
        <div id="print-modal-overlay" className="print-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowExportModal(false); }}>
          <div ref={modalRef} className="print-modal" role="dialog" aria-modal="true" aria-labelledby="print-modal-title">
            <div className="print-modal-header">
              <div>
                <h3 id="print-modal-title">{copy.printTitle}</h3>
                <p>{copy.printDesc}</p>
              </div>
              <button ref={modalCloseRef} id="close-print-modal-btn" onClick={() => setShowExportModal(false)} aria-label={copy.close}><X /></button>
            </div>
            <div id="vantam-printable-prospectus" className="print-sheet">
              <div className="print-brand-row">
                <div className="print-brand">
                  <BrandLogo className="brand-logo brand-logo-print" />
                  <div>
                    <strong>{BUSINESS.publicBrandName}</strong>
                    <p>{selectedPackageData.printValue[lang]}</p>
                  </div>
                </div>
                <div>
                  <span>{copy.printVersion}</span>
                  <strong>{selectedPackageData.id.toUpperCase()}-V3</strong>
                </div>
              </div>
              <div className="print-package-summary">
                <div>
                  <span>{copy.packageSummary}</span>
                  <h4>{selectedPackageData.name[lang]}</h4>
                  <p>{selectedPackageData.outcome[lang]}</p>
                </div>
                <strong>{selectedPackageData.price}</strong>
              </div>
              <div className="print-list">
                <h5>{copy.printComparison}</h5>
                <ul>
                  {PREMIUM_PACKAGES.map((item) => (
                    <li key={item.id}>{item.name[lang]}: {item.shortTitle[lang]} · {item.price}</li>
                  ))}
                </ul>
              </div>
              <div className="print-list">
                <h5>{lang === 'en' ? 'Delivery phases' : lang === 'uk' ? 'Фази виконання' : 'Фазы выполнения'}</h5>
                <ul>
                  {selectedPackageData.detailSections.slice(0, 4).flatMap((section) => section.items[lang]).map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="print-list">
                <h5>{lang === 'en' ? 'Deliverables' : lang === 'uk' ? 'Результати' : 'Результаты'}</h5>
                <ul>
                  {selectedPackageData.detailSections.find((section) => section.title.en === 'What you receive')?.items[lang].map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              {selectedPackageData.id === 'vantam_first_year' && (
                <>
                  <div className="print-list">
                    <h5>{lang === 'en' ? 'Action Credit' : lang === 'uk' ? 'Action Credit' : 'Action Credit'}</h5>
                    <ul>
                      {selectedPackageData.detailSections.find((section) => section.title.en === 'Action Credit definition')?.items[lang].map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="print-list">
                    <h5>{lang === 'en' ? 'Quick Review' : lang === 'uk' ? 'Quick Review' : 'Quick Review'}</h5>
                    <ul>
                      {selectedPackageData.detailSections.find((section) => section.title.en === 'Quick Review definition')?.items[lang].map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </>
              )}
              <div className="print-list">
                <h5>{copy.printClientResponsibilities}</h5>
                <ul>
                  <li>{lang === 'en' ? 'Provide requested information and documents in the agreed sequence.' : lang === 'uk' ? 'Надати запитану інформацію та документи у погодженій послідовності.' : 'Предоставить запрошенную информацию и документы в согласованной последовательности.'}</li>
                  <li>{lang === 'en' ? 'Check dates, bookings, and third-party messages promptly.' : lang === 'uk' ? 'Вчасно перевіряти дати, записи та повідомлення від третіх сторін.' : 'Своевременно проверять даты, записи и сообщения от третьих сторон.'}</li>
                </ul>
              </div>
              <div className="print-list">
                <h5>{copy.printExclusions}</h5>
                <ul>
                  {selectedPackageData.detailSections.find((section) => section.title.en === 'What is not included')?.items[lang].map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="print-list">
                <h5>{copy.printOptional}</h5>
                <ul>
                  <li>{lang === 'en' ? 'Relocation Orientation may be credited within 14 days when eligible.' : lang === 'uk' ? 'Relocation Orientation може бути зарахована протягом 14 днів, якщо це доречно.' : 'Relocation Orientation может быть зачтена в течение 14 дней, если это уместно.'}</li>
                  <li>{lang === 'en' ? 'Parent Update applies only with separate written consent from the adult student.' : lang === 'uk' ? 'Parent Update застосовується лише за окремою письмовою згодою повнолітнього студента.' : 'Parent Update применяется только по отдельному письменному согласию совершеннолетнего студента.'}</li>
                </ul>
              </div>
              <div className="print-list">
                <h5>{copy.printNoGuarantee}</h5>
                <ul>
                  <li>{lang === 'en' ? 'VANTAM does not guarantee housing, approvals, response times, or other third-party outcomes.' : lang === 'uk' ? 'VANTAM не гарантує житло, погодження, час відповіді чи інші результати третіх сторін.' : 'VANTAM не гарантирует жильё, одобрения, время ответа или другие результаты третьих сторон.'}</li>
                </ul>
              </div>
              <div className="print-list">
                <h5>{copy.printNextStep}</h5>
                <ul>
                  <li>{selectedPackageData.cta[lang]}</li>
                  <li>{copy.printDisclaimer}</li>
                </ul>
              </div>
              <p className="print-disclaimer">{copy.printDisclaimer}</p>
              <div className="print-footer">{copy.printGenerated}: {new Date().toISOString().slice(0, 10)} · {footerPrintLine}</div>
            </div>
            <div className="print-actions">
              <button onClick={() => window.print()} className="button button-primary"><Download />{copy.printButton}</button>
              <button onClick={() => setShowExportModal(false)} className="button button-quiet">{copy.close}</button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @media print {
          body * { visibility: hidden; }
          #vantam-printable-prospectus, #vantam-printable-prospectus * { visibility: visible; }
          #vantam-printable-prospectus { position: absolute; inset: 0; width: 100%; border: 0 !important; box-shadow: none !important; }
          .print-list { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}

function MessageIcon() {
  return <MessageCircle aria-hidden="true" />;
}
