'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  FileText,
  HeartPulse,
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
  BLUEPRINT_CHECKLIST,
  CONSULTATIONS_STORE,
  DICTIONARY,
  FAQS_STORE,
  PARTNER_AUDIENCES,
  PROCESS_STEPS,
  PITFALLS,
  PREMIUM_PACKAGES,
  SITUATION_OPTIONS,
  SERVICES_STORE,
  SINGLE_SERVICES,
  TESTIMONIALS,
} from '../../data';
import { LOCALES, LOCALE_LABELS, type Locale, swapLocale } from '../../lib/locales';
import { BUSINESS, BUSINESS_LOCATION, getBusinessFooterLine, getBusinessPrintFooterLine, getWhatsAppAriaLabel, getWhatsAppUrl } from '../../lib/business';
import { PRIVACY_FORM_ACKNOWLEDGEMENT, PRIVACY_ROUTE_LABELS, privacyPath } from '../../lib/privacy';

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

export default function VantamHome({lang, pathname, searchString}: VantamHomeProps) {
  const prefersReducedMotion = useReducedMotion();
  const mobileNavigationRef = useRef<HTMLDetailsElement>(null);
  const pdfTriggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const formStartedAtRef = useRef(0);
  const [currentHash, setCurrentHash] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedPackage, setSelectedPackage] = useState('pkg_setup');
  const [activeServiceCategory, setActiveServiceCategory] = useState('housing');
  const [activeSituation, setActiveSituation] = useState('moving');
  const [calculatorToggles, setCalculatorToggles] = useState<Record<string, boolean>>({
    scam: true,
    fine: false,
    insurance: true,
    hostel: false,
  });
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({c1: true, c2: false, c3: false});
  const [faqOpen, setFaqOpen] = useState<Record<string, boolean>>({f1: true});
  const [showExportModal, setShowExportModal] = useState(false);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formInquiryType, setFormInquiryType] = useState('consultation');
  const [formAudience, setFormAudience] = useState('student');
  const [formMovingDate, setFormMovingDate] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formBudget, setFormBudget] = useState('');
  const [formStatus, setFormStatus] = useState('before');
  const [formGuarantor, setFormGuarantor] = useState('maybe');
  const [formHelp, setFormHelp] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formConsent, setFormConsent] = useState(false);
  const [formWebsite, setFormWebsite] = useState('');
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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
      const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((element) => !element.hasAttribute('disabled'));
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

  const dict = useMemo(() => DICTIONARY[lang], [lang]);
  const sList = useMemo(() => SERVICES_STORE[lang], [lang]);
  const whatsappHref = useMemo(() => getWhatsAppUrl(lang), [lang]);
  const whatsappAriaLabel = useMemo(() => getWhatsAppAriaLabel(lang), [lang]);
  const privacyHref = useMemo(() => privacyPath(lang), [lang]);
  const privacyLabel = PRIVACY_ROUTE_LABELS[lang];
  const privacyAcknowledgement = PRIVACY_FORM_ACKNOWLEDGEMENT[lang];
  const footerBusinessLine = useMemo(() => getBusinessFooterLine(lang), [lang]);
  const footerPrintLine = useMemo(() => getBusinessPrintFooterLine(lang), [lang]);
  const businessLocation = BUSINESS_LOCATION[lang];
  const localeSwitchHref = useMemo(() => {
    return (nextLocale: Locale) => {
      const path = swapLocale(pathname, nextLocale);
      return `${path}${searchString ? `?${searchString}` : ''}${currentHash}`;
    };
  }, [currentHash, pathname, searchString]);

  const ui = useMemo(() => ({
    uk: {
      notice: 'Підтримка до, під час і після приїзду',
      menu: 'Меню',
      darkTheme: 'Увімкнути темну тему',
      lightTheme: 'Увімкнути світлу тему',
      heroTitle: 'Практична підтримка для тих, хто переїжджає до Нідерландів',
      heroText: 'До приїзду, під час пошуку житла та оренди, і після приїзду для практичного облаштування. Чіткі наступні кроки без зайвого шуму.',
      heroImageAlt: 'Житлова вулиця з цегляними будинками в Амстердамі',
      photoCredit: 'Фото: Haberdoedas, Unsplash',
      localNote: 'Три мови. Три рівні підтримки. Один локальний контакт.',
      heroPrimary: 'Оберіть свій шлях',
      heroSecondary: 'Подивитися послуги',
      entryTitle: 'Оберіть формат, який відповідає вашій ситуації',
      entryConsult: 'Планую переїзд',
      entryPackage: 'Потрібна допомога з житлом',
      entrySingle: 'Потрібне практичне облаштування',
      from: 'від',
      trustTitle: 'Підтримка без інституційної дистанції',
      trustText: 'VANTAM пояснює процеси простою мовою, допомагає підготуватися і тримає наступний крок у фокусі - для житла, приїзду й практичного облаштування.',
      boundary: 'Ми не замінюємо ліцензованих фахівців і не обіцяємо результатів, які залежать від банків, державних органів, страховиків або орендодавців.',
      consultLead: 'Найпростіший спосіб почати',
      servicesLead: 'Окремий запит',
      categoryCount: 'послуг',
      packageLead: 'Три рівні підтримки',
      packageCompare: 'Порівняйте варіанти поруч',
      packageDetails: 'Склад обраного пакета',
      selected: 'Обрано',
      choose: 'Переглянути',
      toolsLead: 'Корисні інструменти до розмови',
      toolsText: 'Оцініть типові витрати та відмітьте, що вже готово. Інструменти допомагають спланувати розмову, а не замінюють консультацію.',
      estimate: 'Сума вибраних сценаріїв',
      maximum: 'Максимум у калькуляторі: €4,575',
      difference: 'Різниця із Arrival Setup',
      progress: 'готово',
      testimonialLead: 'Приклади',
      contactLead: 'Розкажіть, що відбувається',
      contactAside: 'Можна почати без готового рішення',
      contactAsideText: 'Оберіть тип запиту або просто опишіть ситуацію. Контекст обраної послуги чи пакета вже буде у формі.',
      emailLabel: 'Електронна пошта',
      phoneLabel: 'Телефон',
      whatsappLabel: 'Написати у WhatsApp Business',
      businessDetailsLabel: 'Дані компанії',
      responseTime: 'Відповідаємо протягом одного робочого дня.',
      scopeLabel: 'Включено',
      limitsLabel: 'Межі',
      result: 'Результат',
      details: 'Деталі',
      audienceLead: 'Хто отримує користь',
      audienceTitle: 'Підтримка для людей, які переїжджають до Нідерландів',
      audienceText: 'Одна пропозиція для людей до приїзду, під час житла та оренди, і після приїзду для практичного облаштування. Комусь потрібен один чіткий крок, комусь - ширший супровід.',
      audienceBefore: 'До приїзду',
      audienceAfter: 'Після приїзду',
      selectorLead: 'Почніть із вашої ситуації',
      selectorTitle: 'Вибір за ситуацією',
      selectorText: 'Оберіть варіант, який швидше підведе вас до потрібного розділу і підставить відповідний контекст у форму.',
      selectorServices: 'Потрібна допомога з житлом',
      selectorPackages: 'Після приїзду потрібне облаштування',
      selectorConsult: 'Планую переїзд',
      selectorPartner: 'Партнерський запит',
      processLead: 'Як працюємо',
      processTitle: 'Від запиту до підтримки',
      processText: 'Спершу ми дивимося на вашу ситуацію, потім ви обираєте формат. Підтримка починається після узгодження обсягу й умов.',
      partnerLead: 'Партнерство',
      partnerTitle: 'Партнер з VANTAM',
      partnerText: 'Для житлових агенцій, HR-команд, університетів та освітніх консультантів, які хочуть акуратно передавати запити на практичну підтримку.',
      partnerCTA: 'Обговорити співпрацю',
      housingLead: 'Важлива житлова послуга',
      housingTitle: 'Housing Preparation & Application Support',
      housingText: 'Підготовка документів для заявки, пояснення ситуації з гарантом, комунікація з агенцією або орендодавцем, подання заявки та підтримка з договором оренди.',
      housingNote: 'Без гарантії отримання житла і без юридичного представництва.',
      housingCta: 'Запитати цю послугу',
      housingPriceLabel: 'Після оцінки',
      formSectionTitle: 'Кваліфікація запиту',
      formSectionSub: 'Дайте нам кілька практичних деталей. Це допоможе швидше зрозуміти, чи вам потрібна окрема послуга, пакет або партнерська розмова.',
      formAudienceLabel: 'Контекст',
      formMovingDateLabel: 'Очікувана дата переїзду',
      formCityLabel: 'Переважне місто або регіон',
      formBudgetLabel: 'Орієнтовний бюджет на житло',
      formStatusLabel: 'Поточний стан',
      formGuarantorLabel: 'Гарант / поручитель',
      formHelpLabel: 'Яка допомога потрібна',
      formSensitiveWarning: 'Не надсилайте через цю відкриту форму паспорти, банківські виписки, медичні дані, файли поручителя чи інші чутливі документи.',
      formStatusBefore: 'Ще до приїзду',
      formStatusAfter: 'Вже в Нідерландах',
      formStatusFoundHousing: 'Житло вже знайдено',
      formStatusNeedHousing: 'Потрібна житлова або практична підтримка',
      formAudienceStudent: 'Студент',
      formAudienceProfessional: 'Експат / професіонал',
      formAudienceFamily: 'Сім’я',
      formAudienceOrganisation: 'Організація',
      formGuarantorYes: 'Так, гарант є',
      formGuarantorMaybe: 'Може знадобитися',
      formGuarantorNo: 'Немає / не впевнений(-а)',
    },
    ru: {
      notice: 'Поддержка до, во время и после приезда',
      menu: 'Меню',
      darkTheme: 'Включить темную тему',
      lightTheme: 'Включить светлую тему',
      heroTitle: 'Практическая поддержка для тех, кто переезжает в Нидерланды',
      heroText: 'До приезда, во время поиска жилья и аренды, и после приезда для практического обустройства. Понятные следующие шаги без лишнего шума.',
      heroImageAlt: 'Жилая улица с кирпичными домами в Амстердаме',
      photoCredit: 'Фото: Haberdoedas, Unsplash',
      localNote: 'Три языка. Три уровня поддержки. Один локальный контакт.',
      heroPrimary: 'Выберите свой путь',
      heroSecondary: 'Посмотреть услуги',
      entryTitle: 'Выберите формат, который подходит вашей ситуации',
      entryConsult: 'Планирую переезд',
      entryPackage: 'Нужна помощь с жильём',
      entrySingle: 'Нужно практическое обустройство',
      from: 'от',
      trustTitle: 'Поддержка без институциональной дистанции',
      trustText: 'VANTAM объясняет процессы простым языком, помогает подготовиться и держит следующий шаг в фокусе - для жилья, приезда и практического обустройства.',
      boundary: 'Мы не заменяем лицензированных специалистов и не обещаем результатов, которые зависят от банков, государственных органов, страховщиков или арендодателей.',
      consultLead: 'Самый простой способ начать',
      servicesLead: 'Отдельный запрос',
      categoryCount: 'услуг',
      packageLead: 'Три уровня поддержки',
      packageCompare: 'Сравните варианты рядом',
      packageDetails: 'Состав выбранного пакета',
      selected: 'Выбрано',
      choose: 'Посмотреть',
      toolsLead: 'Полезные инструменты до разговора',
      toolsText: 'Оцените типичные расходы и отметьте, что уже готово. Инструменты помогают спланировать разговор, а не заменяют консультацию.',
      estimate: 'Сумма выбранных сценариев',
      maximum: 'Максимум в калькуляторе: €4,575',
      difference: 'Разница с Arrival Setup',
      progress: 'готово',
      testimonialLead: 'Примеры',
      contactLead: 'Расскажите, что происходит',
      contactAside: 'Можно начать без готового решения',
      contactAsideText: 'Выберите тип запроса или просто опишите ситуацию. Контекст выбранной услуги или пакета уже будет в форме.',
      emailLabel: 'Электронная почта',
      phoneLabel: 'Телефон',
      whatsappLabel: 'Написать в WhatsApp Business',
      businessDetailsLabel: 'Данные компании',
      responseTime: 'Отвечаем в течение одного рабочего дня.',
      scopeLabel: 'Включено',
      limitsLabel: 'Границы',
      result: 'Результат',
      details: 'Детали',
      audienceLead: 'Кому это полезно',
      audienceTitle: 'Поддержка для людей, которые переезжают в Нидерланды',
      audienceText: 'Одно предложение для людей до приезда, во время жилья и аренды, и после приезда для практического обустройства. Кому-то нужен один чёткий шаг, кому-то - более широкое сопровождение.',
      audienceBefore: 'До приезда',
      audienceAfter: 'После приезда',
      selectorLead: 'Начните со своей ситуации',
      selectorTitle: 'Выбор по ситуации',
      selectorText: 'Выберите вариант, который быстрее приведёт вас к нужному разделу и подставит в форму нужный контекст.',
      selectorServices: 'Нужна помощь с жильём',
      selectorPackages: 'После приезда нужно обустройство',
      selectorConsult: 'Планирую переезд',
      selectorPartner: 'Партнёрский запрос',
      processLead: 'Как работаем',
      processTitle: 'От запроса к поддержке',
      processText: 'Сначала мы смотрим на вашу ситуацию, затем вы выбираете формат. Поддержка начинается после согласования объёма и условий.',
      partnerLead: 'Партнёрство',
      partnerTitle: 'Партнёр с VANTAM',
      partnerText: 'Для жилищных агентств, HR-команд, университетов и образовательных консультантов, которые хотят аккуратно передавать запросы на практическую поддержку.',
      partnerCTA: 'Обсудить сотрудничество',
      housingLead: 'Важная жилищная услуга',
      housingTitle: 'Housing Preparation & Application Support',
      housingText: 'Подготовка документов для заявки, объяснение ситуации с гарантом, коммуникация с агентством или арендодателем, подача заявки и поддержка по договору аренды.',
      housingNote: 'Без гарантии получения жилья и без юридического представительства.',
      housingCta: 'Запросить эту услугу',
      housingPriceLabel: 'После оценки',
      formSectionTitle: 'Квалификация запроса',
      formSectionSub: 'Дайте нам несколько практических деталей. Это поможет быстрее понять, нужна ли вам отдельная услуга, пакет или партнёрский разговор.',
      formAudienceLabel: 'Контекст',
      formMovingDateLabel: 'Ожидаемая дата переезда',
      formCityLabel: 'Предпочтительный город или регион',
      formBudgetLabel: 'Ориентировочный бюджет на жильё',
      formStatusLabel: 'Текущий статус',
      formGuarantorLabel: 'Гарант / поручитель',
      formHelpLabel: 'Какая помощь нужна',
      formSensitiveWarning: 'Не отправляйте через эту открытую форму паспорта, банковские выписки, медицинские данные, файлы поручителя или другие чувствительные документы.',
      formStatusBefore: 'Ещё до приезда',
      formStatusAfter: 'Уже в Нидерландах',
      formStatusFoundHousing: 'Жильё уже найдено',
      formStatusNeedHousing: 'Нужна жилищная или практическая поддержка',
      formAudienceStudent: 'Студент',
      formAudienceProfessional: 'Экспат / профессионал',
      formAudienceFamily: 'Семья',
      formAudienceOrganisation: 'Организация',
      formGuarantorYes: 'Да, гарант есть',
      formGuarantorMaybe: 'Может понадобиться',
      formGuarantorNo: 'Нет / не уверен(-а)',
    },
    en: {
      notice: 'Support before, during and after arrival',
      menu: 'Menu',
      darkTheme: 'Use dark theme',
      lightTheme: 'Use light theme',
      heroTitle: 'Practical support for people moving to the Netherlands',
      heroText: 'Before arrival, during the housing and rental process, and after arrival for practical settlement - with clear next steps and no extra noise.',
      heroImageAlt: 'Residential brick street in Amsterdam',
      photoCredit: 'Photo: Haberdoedas, Unsplash',
      localNote: 'Three languages. Three support levels. One local contact.',
      heroPrimary: 'Choose your path',
      heroSecondary: 'See the services',
      entryTitle: 'Choose the format that fits your situation',
      entryConsult: 'Planning my move',
      entryPackage: 'I need housing help',
      entrySingle: 'I need practical setup',
      from: 'from',
      trustTitle: 'Support without institutional distance',
      trustText: 'VANTAM explains processes in plain language, helps you prepare and keeps the next step in focus - for housing, arrival and practical settlement.',
      boundary: 'We do not replace licensed professionals or promise outcomes that depend on banks, public bodies, insurers or landlords.',
      consultLead: 'The simplest place to start',
      servicesLead: 'One-off tasks',
      categoryCount: 'services',
      packageLead: 'Three levels of support',
      packageCompare: 'Compare the options side by side',
      packageDetails: 'Contents of the selected package',
      selected: 'Selected',
      choose: 'View details',
      toolsLead: 'Useful tools before we talk',
      toolsText: 'Review common costs and mark what is already prepared. The tools help you plan the conversation; they do not replace a consultation.',
      estimate: 'Selected scenario total',
      maximum: 'Maximum in the calculator: €4,575',
      difference: 'Difference from Arrival Setup',
      progress: 'ready',
      testimonialLead: 'Representative examples',
      contactLead: 'Tell us what is happening',
      contactAside: 'You can start without knowing the answer',
      contactAsideText: 'Choose a request type or describe the situation. Any selected service or package context is already included.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      whatsappLabel: 'Message VANTAM on WhatsApp Business',
      businessDetailsLabel: 'Business details',
      responseTime: 'We respond within one business day.',
      scopeLabel: 'Included',
      limitsLabel: 'Boundaries',
      result: 'Outcome',
      details: 'Details',
      audienceLead: 'Who we help',
      audienceTitle: 'Support for people moving to the Netherlands',
      audienceText: 'One offer for people before arrival, during housing and rental steps, and after arrival for practical settlement. Some need one clear step, others need broader support.',
      audienceBefore: 'Before arrival',
      audienceAfter: 'After arrival',
      selectorLead: 'Start with your situation',
      selectorTitle: 'Select by situation',
      selectorText: 'Choose the path that gets you to the right section and pre-fills the form with the matching context.',
      selectorServices: 'Need housing help',
      selectorPackages: 'Need practical setup after arrival',
      selectorConsult: 'Planning my move',
      selectorPartner: 'Partnership enquiry',
      processLead: 'How it works',
      processTitle: 'From enquiry to support',
      processText: 'We first look at your situation, then you choose the right format. Support begins after the scope and terms are agreed.',
      partnerLead: 'Partnership',
      partnerTitle: 'Partner with VANTAM',
      partnerText: 'For rental agencies, HR teams, universities and education consultants who want a clean handoff to practical support.',
      partnerCTA: 'Discuss cooperation',
      housingLead: 'Important housing service',
      housingTitle: 'Housing Preparation & Application Support',
      housingText: 'Application-file preparation, explaining the guarantor situation, communicating with the agency or landlord, submitting the application and supporting rental-contract questions.',
      housingNote: 'No housing guarantee and no legal representation.',
      housingCta: 'Request this service',
      housingPriceLabel: 'After assessment',
      formSectionTitle: 'Qualification form',
      formSectionSub: 'Share a few practical details. It helps us see faster whether you need a service, a package or a partnership conversation.',
      formAudienceLabel: 'Context',
      formMovingDateLabel: 'Expected move date',
      formCityLabel: 'Preferred city or region',
      formBudgetLabel: 'Approximate housing budget',
      formStatusLabel: 'Current status',
      formGuarantorLabel: 'Guarantor situation',
      formHelpLabel: 'What help is needed',
      formSensitiveWarning: 'Do not submit passports, bank statements, medical information, guarantor files or other sensitive documents through this open form.',
      formStatusBefore: 'Before arrival',
      formStatusAfter: 'Already in the Netherlands',
      formStatusFoundHousing: 'Housing already found',
      formStatusNeedHousing: 'Need housing or practical setup support',
      formAudienceStudent: 'Student',
      formAudienceProfessional: 'Expat / professional',
      formAudienceFamily: 'Family',
      formAudienceOrganisation: 'Organisation',
      formGuarantorYes: 'Yes, guarantor available',
      formGuarantorMaybe: 'May be needed',
      formGuarantorNo: 'No / not sure',
    },
  }[lang]), [lang]);

  const serviceCategories = useMemo(() => [
    {
      id: 'housing', label: lang === 'uk' ? 'Житло та орендні заявки' : lang === 'ru' ? 'Жильё и арендные заявки' : 'Housing and rental applications',
      description: lang === 'uk' ? 'Підготовка заявки, поручитель, договір і комунікація' : lang === 'ru' ? 'Подготовка заявки, поручитель, договор и коммуникация' : 'Application prep, guarantor, contract and communication',
      icon: House,
      ids: ['single_housing_application_support', 'single_rental_contract', 'single_housing_scam_check', 'single_deposit_return', 'single_landlord_communication'],
    },
    {
      id: 'arrival', label: lang === 'uk' ? 'Підготовка до приїзду' : lang === 'ru' ? 'Подготовка к приезду' : 'Pre-arrival preparation',
      description: lang === 'uk' ? 'План, документи, консультація та інші кроки до виїзду' : lang === 'ru' ? 'План, документы, консультация и другие шаги до выезда' : 'Plan, documents, consultation and other pre-departure steps',
      icon: FileText,
      ids: ['single_official_letter', 'single_university_admin', 'single_registration_bsn', 'single_digid_activation', 'single_bank_setup'],
    },
    {
      id: 'settlement', label: lang === 'uk' ? 'Практичне облаштування після приїзду' : lang === 'ru' ? 'Практическое обустройство после приезда' : 'Practical settlement after arrival',
      description: lang === 'uk' ? 'Реєстрація, DigiD, банк, страхування, GP' : lang === 'ru' ? 'Регистрация, DigiD, банк, страховка, GP' : 'Registration, DigiD, banking, insurance, GP',
      icon: HeartPulse,
      ids: ['single_insurance_setup', 'single_insurance_claim', 'single_healthcare_registration'],
    },
  ], [lang]);

  const activeCategory = serviceCategories.find((category) => category.id === activeServiceCategory) || serviceCategories[0];
  const activeServices = SINGLE_SERVICES.filter((service) => activeCategory.ids.includes(service.id));
  const calculatorTotal = useMemo(() => PITFALLS.reduce((sum, item) => calculatorToggles[item.id] ? sum + item.cost : sum, 0), [calculatorToggles]);
  const progressPercent = useMemo(() => Math.round((BLUEPRINT_CHECKLIST.filter((item) => completedTasks[item.id]).length / BLUEPRINT_CHECKLIST.length) * 100), [completedTasks]);
  const currentSelectedPkgObj = useMemo(() => PREMIUM_PACKAGES.find((item) => item.id === selectedPackage) || PREMIUM_PACKAGES[1], [selectedPackage]);
  const activeSituationObj = useMemo(() => SITUATION_OPTIONS.find((item) => item.id === activeSituation) || SITUATION_OPTIONS[0], [activeSituation]);

  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({behavior: prefersReducedMotion ? 'auto' : 'smooth'});
  const scrollToTarget = (target: 'consultation' | 'services' | 'packages' | 'contact') => document.getElementById(target === 'consultation' ? 'consultations' : target === 'services' ? 'single-services' : target === 'packages' ? 'packages' : 'contact')?.scrollIntoView({behavior: prefersReducedMotion ? 'auto' : 'smooth'});

  const applyQualificationContext = (overrides: Partial<{
    inquiryType: string;
    audience: string;
    movingDate: string;
    city: string;
    budget: string;
    status: string;
    guarantor: string;
    help: string;
    message: string;
  }>) => {
    if (overrides.inquiryType) setFormInquiryType(overrides.inquiryType);
    if (overrides.audience) setFormAudience(overrides.audience);
    if (overrides.movingDate !== undefined) setFormMovingDate(overrides.movingDate);
    if (overrides.city !== undefined) setFormCity(overrides.city);
    if (overrides.budget !== undefined) setFormBudget(overrides.budget);
    if (overrides.status !== undefined) setFormStatus(overrides.status);
    if (overrides.guarantor !== undefined) setFormGuarantor(overrides.guarantor);
    if (overrides.help !== undefined) setFormHelp(overrides.help);
    if (overrides.message !== undefined) setFormMessage(overrides.message);
  };

  const handleSelectSingleService = (serviceId: string) => {
    setFormInquiryType('single');
    const service = SINGLE_SERVICES.find((item) => item.id === serviceId);
    if (service) {
      applyQualificationContext({
        inquiryType: 'single',
        help: service.id,
        message: lang === 'uk'
          ? `Мені потрібна окрема послуга: ${service.name.uk}.`
          : lang === 'ru'
            ? `Мне нужна отдельная услуга: ${service.name.ru}.`
            : `I need a single service: ${service.name.en}.`,
      });
    }
    scrollToContact();
  };

  const handleSelectConsultation = (consultationId: string) => {
    const consultation = CONSULTATIONS_STORE.find((item) => item.id === consultationId);
    if (consultation) applyQualificationContext({
      inquiryType: 'consultation',
      help: 'consultation',
      message: lang === 'uk'
        ? `Мені потрібна консультація: ${consultation.name.uk}.`
        : lang === 'ru'
          ? `Мне нужна консультация: ${consultation.name.ru}.`
          : `I need a consultation: ${consultation.name.en}.`,
    });
    scrollToContact();
  };

  const handleSelectPackage = (packageId: string) => {
    const item = PREMIUM_PACKAGES.find((pkg) => pkg.id === packageId);
    setSelectedPackage(packageId);
    if (item) applyQualificationContext({
      inquiryType: 'packages',
      help: 'packages',
      message: lang === 'uk'
        ? `Мені потрібен пакет: ${item.name.uk} (${item.price}).`
        : lang === 'ru'
          ? `Мне нужен пакет: ${item.name.ru} (${item.price}).`
          : `I need the package: ${item.name.en} (${item.price}).`,
    });
    scrollToContact();
  };

  const handleSelectSituation = (situationId: string) => {
    const option = SITUATION_OPTIONS.find((item) => item.id === situationId) || SITUATION_OPTIONS[0];
    setActiveSituation(option.id);
    if (option.target === 'consultation') {
      applyQualificationContext({
        inquiryType: option.inquiryType,
        status: 'before',
        help: 'consultation',
        message: lang === 'uk'
          ? `Я планую переїзд до Нідерландів і хочу почати з консультації.`
          : lang === 'ru'
            ? `Я планирую переезд в Нидерланды и хочу начать с консультации.`
            : `I am planning my move to the Netherlands and want to start with a consultation.`,
      });
      scrollToTarget(option.target);
      return;
    }

    if (option.target === 'services') {
      setActiveServiceCategory('housing');
      applyQualificationContext({
        inquiryType: 'single',
        status: 'need_housing',
        help: 'single',
        message: lang === 'uk'
          ? `Мені потрібна допомога з житлом або орендною заявкою.`
          : lang === 'ru'
            ? `Мне нужна помощь с жильём или арендной заявкой.`
            : `I need help with housing or my rental application.`,
      });
      scrollToTarget(option.target);
      return;
    }

    if (option.target === 'packages') {
      setSelectedPackage('pkg_setup');
      applyQualificationContext({
        inquiryType: 'packages',
        status: 'after',
        help: 'packages',
        message: lang === 'uk'
          ? `Я вже приїхав(-ла) і мені потрібне практичне облаштування після приїзду.`
          : lang === 'ru'
            ? `Я уже приехал(-а) и мне нужно практическое обустройство после приезда.`
            : `I have arrived and need practical setup support after arrival.`,
      });
      scrollToTarget(option.target);
      return;
    }

    applyQualificationContext({
        inquiryType: 'b2b',
        audience: 'organisation',
        status: 'organisation',
        help: 'b2b',
        message: lang === 'uk'
          ? `Я представляю організацію і хочу обговорити співпрацю.`
        : lang === 'ru'
          ? `Я представляю организацию и хочу обсудить сотрудничество.`
          : `I represent an organisation and would like to discuss cooperation.`,
    });
    scrollToTarget(option.target);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !formMessage.trim() || !formConsent) return;
    setFormState('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          inquiryType: formInquiryType,
          message: formMessage,
          consent: formConsent,
          language: lang,
          website: formWebsite,
          sourceUrl: window.location.pathname,
          audience: formAudience,
          movingDate: formMovingDate,
          city: formCity,
          budget: formBudget,
          status: formStatus,
          guarantor: formGuarantor,
          help: formHelp,
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
    setFormStatus('before');
    setFormGuarantor('maybe');
    setFormHelp('');
    formStartedAtRef.current = Date.now();
    setActiveSituation('moving');
    setFormState('idle');
  };

  const closeNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => event.currentTarget.closest('details')?.removeAttribute('open');
  const formErrorMessage = lang === 'uk' ? 'Не вдалося надіслати запит. Спробуйте ще раз або напишіть у WhatsApp Business.' : lang === 'ru' ? 'Не удалось отправить запрос. Попробуйте ещё раз или напишите в WhatsApp Business.' : 'The enquiry could not be sent. Please try again or use WhatsApp Business.';
  const plannerGroups = [
    {category: 'prep' as const, title: dict.checklistPrepTab, description: dict.checklistPrepDesc},
    {category: 'arrival' as const, title: dict.checklistArrivalTab, description: dict.checklistArrivalDesc},
    {category: 'settle' as const, title: dict.checklistSettleTab, description: dict.checklistSettleDesc},
  ];
  const qualificationOptions = useMemo(() => ({
    audience: [
      { value: 'student', label: ui.formAudienceStudent },
      { value: 'professional', label: ui.formAudienceProfessional },
      { value: 'family', label: ui.formAudienceFamily },
      { value: 'organisation', label: ui.formAudienceOrganisation },
    ],
    status: [
      { value: 'before', label: ui.formStatusBefore },
      { value: 'after', label: ui.formStatusAfter },
      { value: 'found_housing', label: ui.formStatusFoundHousing },
      { value: 'need_housing', label: ui.formStatusNeedHousing },
    ],
    guarantor: [
      { value: 'yes', label: ui.formGuarantorYes },
      { value: 'maybe', label: ui.formGuarantorMaybe },
      { value: 'no', label: ui.formGuarantorNo },
    ],
    help: [
      { value: '', label: lang === 'uk' ? 'Оберіть потрібну допомогу' : lang === 'ru' ? 'Выберите нужную помощь' : 'Choose the required help' },
      { value: 'consultation', label: ui.selectorConsult },
      { value: 'single', label: ui.selectorServices },
      { value: 'packages', label: ui.selectorPackages },
      { value: 'b2b', label: ui.selectorPartner },
    ],
    budget: [
      { value: 'under-700', label: lang === 'uk' ? 'До €700' : lang === 'ru' ? 'До €700' : 'Under €700' },
      { value: '700-1000', label: '€700–€1,000' },
      { value: '1000-1500', label: '€1,000–€1,500' },
      { value: '1500-plus', label: lang === 'uk' ? 'Понад €1,500' : lang === 'ru' ? 'Свыше €1,500' : '€1,500+' },
      { value: 'not-sure', label: lang === 'uk' ? 'Ще не знаю' : lang === 'ru' ? 'Пока не знаю' : 'Not sure yet' },
    ],
  }), [lang, ui]);

  return (
    <div className="vantam-site" data-theme={theme}>
      <div className="service-strip">
        <div className="site-container">
          <span>{dict.contactSub}</span>
          <a href={whatsappHref} target="_blank" rel="noreferrer noopener" aria-label={whatsappAriaLabel}>{ui.whatsappLabel}</a>
        </div>
      </div>

      <a href="#main" className="skip-link">Skip to main content</a>

      <header className="site-header">
        <div className="site-container header-inner">
          <a href="#top" className="brand-lockup" aria-label="VANTAM">
            <BrandLogo className="brand-logo" />
          </a>

          <nav className="desktop-nav" aria-label={ui.menu}>
            <a href="#consultations">{dict.consultTitle}</a>
            <a href="#single-services">{dict.navSingleServices}</a>
            <a href="#packages">{dict.navPackages}</a>
            <a href="#tools">{dict.navCalculator}</a>
            <a href="#contact" className="nav-cta">{dict.navContact}</a>
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}
              aria-label={theme === 'light' ? ui.darkTheme : ui.lightTheme}
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
            <div className="language-switcher" aria-label={dict.langLabel}>
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
              <summary aria-label={ui.menu}><Menu /></summary>
              <nav>
                <a href="#consultations" onClick={closeNavigation}>{dict.consultTitle}</a>
                <a href="#single-services" onClick={closeNavigation}>{dict.navSingleServices}</a>
                <a href="#packages" onClick={closeNavigation}>{dict.navPackages}</a>
                <a href="#tools" onClick={closeNavigation}>{dict.navCalculator}</a>
                <a href="#faq" onClick={closeNavigation}>{dict.navFaq}</a>
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
              <h1>{ui.heroTitle}</h1>
              <p className="hero-lede">{ui.heroText}</p>
              <div className="hero-actions">
                <a href="#start-here" className="button button-primary">{ui.heroPrimary}<ArrowRight /></a>
                <a href="#single-services" className="text-link">{ui.heroSecondary}<ArrowUpRight /></a>
              </div>
              <div className="hero-tags" aria-label={ui.audienceLead}>
                {AUDIENCE_FOCUS.map((audience) => <span key={audience.id}>{audience.title[lang]}</span>)}
              </div>
              <p className="hero-note"><ShieldCheck />{ui.localNote}</p>
            </div>
            <figure className="hero-media reveal-media">
              <HeroScene />
            </figure>
          </div>
        </section>

        <section className="entry-section section-anchor" aria-labelledby="start-here-title" id="start-here">
          <div className="site-container start-hub">
            <div className="start-hub-copy">
              <p>{ui.audienceLead}</p>
              <h2 id="start-here-title">{ui.audienceTitle}</h2>
              <p className="large-copy">{ui.audienceText}</p>
              <div className="audience-grid">
                {AUDIENCE_FOCUS.map((audience) => (
                  <article key={audience.id} className="audience-item">
                    <strong>{audience.title[lang]}</strong>
                    <p>{audience.note[lang]}</p>
                    <span>{audience.timing[lang]}</span>
                  </article>
                ))}
              </div>
              <div className="arrival-contrast" aria-label={lang === 'uk' ? 'До і після приїзду' : lang === 'ru' ? 'До и после приезда' : 'Before and after arrival'}>
                <div>
                  <span>{ui.audienceBefore}</span>
                  <strong>{lang === 'uk' ? 'Планування, документи, вибір формату' : lang === 'ru' ? 'Планирование, документы, выбор формата' : 'Planning, documents, format choice'}</strong>
                </div>
                <div>
                  <span>{ui.audienceAfter}</span>
                  <strong>{lang === 'uk' ? 'Заселення, комунікація, налаштування' : lang === 'ru' ? 'Заселение, коммуникация, настройка' : 'Move-in, communication, setup'}</strong>
                </div>
              </div>
            </div>

            <div className="situation-selector-shell">
              <p>{ui.selectorLead}</p>
              <h2>{ui.selectorTitle}</h2>
              <p className="selector-text">{ui.selectorText}</p>
              <div className="situation-selector">
                {SITUATION_OPTIONS.map((option) => (
                  <button key={option.id} type="button" className={activeSituation === option.id ? 'is-selected' : ''} aria-pressed={activeSituation === option.id} onClick={() => handleSelectSituation(option.id)}>
                    <strong>{option.title[lang]}</strong>
                    <span>{option.description[lang]}</span>
                    <small>{option.target === 'consultation' ? ui.selectorConsult : option.target === 'services' ? ui.selectorServices : option.target === 'packages' ? ui.selectorPackages : ui.selectorPartner}</small>
                  </button>
                ))}
              </div>
              <div className="selector-links">
                <a href="#consultations">{ui.selectorConsult}</a>
                <a href="#single-services">{ui.selectorServices}</a>
                <a href="#packages">{ui.selectorPackages}</a>
                <a href="#contact">{ui.selectorPartner}</a>
              </div>
              <p className="selector-current"><strong>{activeSituationObj.title[lang]}</strong><span>{activeSituationObj.description[lang]}</span></p>
            </div>
          </div>
        </section>

        <section id="why" className="trust-section section-anchor">
          <div className="site-container trust-layout">
            <div className="process-panel">
              <p>{ui.processLead}</p>
              <h2>{ui.processTitle}</h2>
              <p className="large-copy">{ui.processText}</p>
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
              <p>{ui.partnerLead}</p>
              <h2>{ui.partnerTitle}</h2>
              <p className="large-copy">{ui.partnerText}</p>
              <div className="partner-grid">
                {PARTNER_AUDIENCES.map((partner) => (
                  <article key={partner.id}>
                    <strong>{partner.title[lang]}</strong>
                    <p>{partner.description[lang]}</p>
                  </article>
                ))}
              </div>
              <button
                type="button"
                className="button button-secondary"
                onClick={() => {
                  handleSelectSituation('organisation');
                  scrollToContact();
                }}
              >
                {ui.partnerCTA}<ArrowRight />
              </button>
              <div className="boundary-note">
                <Info />
                <p><strong>{dict.antiRoleTitle}</strong>{ui.boundary}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="consultations" className="consultations-section section-anchor">
          <div className="site-container">
            <div className="section-intro"><p>{ui.consultLead}</p><h2>{dict.consultTitle}</h2><span>{dict.consultSub}</span></div>
            <div className="consultation-composition">
              {CONSULTATIONS_STORE.map((consultation, index) => (
                <article key={consultation.id} className={index === 0 ? 'consultation consultation-featured' : 'consultation'}>
                  <div className="consultation-top"><span><Clock />{consultation.duration[lang]}</span><strong>{consultation.price}</strong></div>
                  <h3>{consultation.name[lang]}</h3>
                  <p>{consultation.desc[lang]}</p>
                  <dl><div><dt>{ui.result}</dt><dd>{consultation.result[lang]}</dd></div><div><dt>{ui.details}</dt><dd>{consultation.note[lang]}</dd></div></dl>
                  <button onClick={() => handleSelectConsultation(consultation.id)} className="button button-secondary">{consultation.cta[lang]}<ArrowRight /></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="service-map-section section-anchor">
          <div className="site-container">
            <div className="section-intro section-intro-wide"><p>{dict.servicesTitle}</p><h2>{dict.servicesSub}</h2></div>
            <div className="pillar-band">
              {sList.map((column) => <div key={column.pillar}><strong>{column.pillar}</strong><span>{column.sub}</span></div>)}
            </div>
          </div>
        </section>

        <section id="single-services" className="single-services-section section-anchor">
          <div className="site-container services-layout">
            <aside>
              <p>{ui.servicesLead}</p>
              <h2>{dict.singleTitle}</h2>
              <span>{dict.singleSub}</span>
              <div className="housing-highlight">
                <p>{ui.housingLead}</p>
                <h3>{ui.housingTitle}</h3>
                <p>{ui.housingText}</p>
                <small><Info />{ui.housingNote}</small>
                <button type="button" className="button button-secondary" onClick={() => handleSelectSingleService('single_housing_application_support')}>{ui.housingCta}<ArrowRight /></button>
              </div>
              <div className="service-category-tabs" aria-label={ui.servicesLead}>
                {serviceCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button key={category.id} type="button" aria-pressed={activeServiceCategory === category.id} onClick={() => setActiveServiceCategory(category.id)}>
                      <Icon /><span><strong>{category.label}</strong><small>{category.ids.length} {ui.categoryCount}</small></span><ChevronRight />
                    </button>
                  );
                })}
              </div>
            </aside>
            <div className="service-list-panel" aria-live="polite">
              <div className="service-panel-heading"><div><h3>{activeCategory.label}</h3><p>{activeCategory.description}</p></div><span>{activeServices.length}</span></div>
              <div className="service-rows">
                {activeServices.map((service) => (
                  <article key={service.id}>
                    <div className="service-name"><h4>{service.name[lang]}</h4><span>{service.mode[lang]}</span></div>
                    <div className="service-description"><p>{service.desc[lang]}</p><small><Check />{service.limit[lang]}</small>{service.notIncluded && <small className="service-exclusion">{service.notIncluded[lang]}</small>}</div>
                    <div className="service-action"><strong>{service.id === 'single_housing_application_support' ? ui.housingPriceLabel : service.price}</strong><button onClick={() => handleSelectSingleService(service.id)} aria-label={`${dict.singleCta}: ${service.name[lang]}`}><ArrowUpRight /></button></div>
                  </article>
                ))}
              </div>
              <div className="boundary-note"><Info /><p><strong>{dict.housingDisclaimerTitle}</strong>{dict.housingDisclaimerText}</p></div>
            </div>
          </div>
        </section>

        <section id="packages" className="packages-section section-anchor">
          <div className="site-container">
            <div className="section-intro"><p>{ui.packageLead}</p><h2>{dict.pkgGridTitle}</h2><span>{ui.packageCompare}</span></div>
            <div className="package-comparison">
              {PREMIUM_PACKAGES.map((item) => {
                const isSelected = item.id === selectedPackage;
                return (
                  <article key={item.id} className={isSelected ? 'package-option is-selected' : 'package-option'}>
                    <div className="package-heading"><span>{item.subtitle[lang]}</span><strong>{item.price}</strong></div>
                    <h3>{item.name[lang]}</h3>
                    <p>{item.tagline[lang]}</p>
                    <small><Clock />{item.workload[lang]}</small>
                    <ul>{item.scope[lang].slice(0, 4).map((scope) => <li key={scope}><Check />{scope}</li>)}</ul>
                    <button onClick={() => setSelectedPackage(item.id)} aria-pressed={isSelected}>{isSelected ? ui.selected : ui.choose}<ArrowRight /></button>
                  </article>
                );
              })}
            </div>
            <div className="package-detail" aria-live="polite">
              <div className="package-summary">
                <p>{ui.packageDetails}</p>
                <h3>{currentSelectedPkgObj.name[lang]}</h3>
                <strong>{currentSelectedPkgObj.price}</strong>
                <span>{currentSelectedPkgObj.idealFor[lang]}</span>
                <div className="package-actions"><button onClick={() => handleSelectPackage(currentSelectedPkgObj.id)} className="button button-primary">{currentSelectedPkgObj.cta[lang]}<ArrowRight /></button><button ref={pdfTriggerRef} id="pdf-download-btn" onClick={() => setShowExportModal(true)} className="button button-quiet"><Download />{dict.pdfBtn}</button></div>
              </div>
              <div className="package-list"><h4><ShieldCheck />{ui.scopeLabel}</h4><ul>{currentSelectedPkgObj.scope[lang].map((item) => <li key={item}><Check />{item}</li>)}</ul></div>
              <div className="package-list package-limits"><h4><AlertCircle />{ui.limitsLabel}</h4><ul>{currentSelectedPkgObj.limits[lang].map((item) => <li key={item}><AlertCircle />{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section id="tools" className="tools-section section-anchor">
          <div className="site-container">
            <div className="section-intro section-intro-wide"><p>{ui.toolsLead}</p><h2>{ui.toolsText}</h2></div>
            <div id="calculator" className="calculator-shell section-anchor">
              <div className="calculator-copy"><h3>{dict.calculatorTitle}</h3><p>{dict.calculatorInfo}</p><div className="risk-list">{PITFALLS.map((item) => { const checked = !!calculatorToggles[item.id]; return <button key={item.id} onClick={() => setCalculatorToggles((previous) => ({...previous, [item.id]: !previous[item.id]}))} aria-pressed={checked} className={checked ? 'is-selected' : ''}><span className="check-box">{checked && <Check />}</span><span><strong>{item.label[lang]}</strong><small>{item.explanation[lang]}</small></span><b>+€{item.cost}</b></button>; })}</div></div>
              <aside className="calculator-result"><span>{ui.estimate}</span><strong>€{calculatorTotal}</strong><small>{ui.maximum}</small><div><span>{dict.calcPackageLabel}</span><b>€749</b>{calculatorTotal > 749 && <p>{ui.difference}: €{calculatorTotal - 749}</p>}</div><p><AlertCircle />{dict.calcFooterNotice}</p></aside>
            </div>

            <div id="checklist" className="planner-shell section-anchor">
              <div className="planner-heading"><div><h3>{dict.checklistTitle}</h3><p>{dict.checklistSub}</p></div><div className="planner-progress"><strong>{progressPercent}%</strong><span>{ui.progress}</span></div></div>
              <div className="planner-columns">{plannerGroups.map((group) => <section key={group.category}><header><h4>{group.title}</h4><span>{group.description}</span></header>{BLUEPRINT_CHECKLIST.filter((item) => item.category === group.category).map((task) => { const done = !!completedTasks[task.id]; return <button key={task.id} onClick={() => setCompletedTasks((previous) => ({...previous, [task.id]: !previous[task.id]}))} aria-pressed={done} className={done ? 'is-complete' : ''}><span className="check-box">{done && <Check />}</span><span>{task.title[lang]}</span></button>; })}</section>)}</div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="proof-section section-anchor">
          <div className="site-container proof-layout">
            <div className="proof-heading"><p>{ui.testimonialLead}</p><h2>{dict.testimonialsTitle}</h2><span>{dict.testimonialsSub}</span></div>
            <div className="testimonial-stage">
              <AnimatePresence initial={false}>
                <motion.figure key={activeTestimonialIdx} initial={{opacity: 0, transform: prefersReducedMotion ? 'none' : 'translateY(4px)'}} animate={{opacity: 1, transform: 'none'}} exit={{opacity: 0}} transition={{duration: prefersReducedMotion ? 0 : 0.18}}>
                  <p>{TESTIMONIALS[activeTestimonialIdx].story[lang]}</p>
                  <figcaption><strong>{TESTIMONIALS[activeTestimonialIdx].name[lang]}</strong><span>{TESTIMONIALS[activeTestimonialIdx].role[lang]}</span><span>{TESTIMONIALS[activeTestimonialIdx].city[lang]} / {TESTIMONIALS[activeTestimonialIdx].university[lang]}</span></figcaption>
                </motion.figure>
              </AnimatePresence>
              <div className="testimonial-controls"><span>{activeTestimonialIdx + 1} / {TESTIMONIALS.length}</span><div><button onClick={() => setActiveTestimonialIdx((previous) => previous === 0 ? TESTIMONIALS.length - 1 : previous - 1)} aria-label={lang === 'uk' ? 'Попередня ситуація' : lang === 'ru' ? 'Предыдущая ситуация' : 'Previous situation'}><ChevronLeft /></button><button onClick={() => setActiveTestimonialIdx((previous) => previous === TESTIMONIALS.length - 1 ? 0 : previous + 1)} aria-label={lang === 'uk' ? 'Наступна ситуація' : lang === 'ru' ? 'Следующая ситуация' : 'Next situation'}><ChevronRight /></button></div></div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section section-anchor">
          <div className="site-container faq-layout">
            <div><h2>{dict.faqTitle}</h2><p>{dict.faqSub}</p></div>
            <div className="faq-list">{FAQS_STORE.map((faq) => { const open = !!faqOpen[faq.id]; const answerId = `faq-answer-${faq.id}`; return <div key={faq.id} className="faq-item"><button onClick={() => setFaqOpen((previous) => ({...previous, [faq.id]: !previous[faq.id]}))} aria-expanded={open} aria-controls={answerId}><span>{faq.q[lang]}</span><ChevronDown className={open ? 'is-open' : ''} /></button><div id={answerId} aria-hidden={!open} className={open ? 'faq-answer is-open' : 'faq-answer'}><p>{faq.a[lang]}</p></div></div>; })}</div>
          </div>
        </section>

        <section id="contact" className="contact-section section-anchor">
          <div className="site-container contact-layout">
            <div className="contact-copy">
              <p>{ui.contactLead}</p>
              <h2>{dict.contactTitle}</h2>
              <span>{dict.contactSub}</span>
              <div className="contact-note"><MessageIcon /><div><strong>{ui.contactAside}</strong><p>{ui.contactAsideText}</p></div></div>
              <div className="contact-details" aria-label={ui.businessDetailsLabel}>
                <p className="contact-details-lead">{ui.businessDetailsLabel}</p>
                <div className="contact-details-grid">
                  <div className="contact-details-item">
                    <span>{ui.emailLabel}</span>
                    <a href={BUSINESS.publicEmailMailto}>{BUSINESS.publicEmail}</a>
                  </div>
                  <div className="contact-details-item">
                    <span>{ui.phoneLabel}</span>
                    <a href={BUSINESS.phoneTelHref}>{BUSINESS.phoneDisplayNumber}</a>
                  </div>
                  <div className="contact-details-item contact-details-item-whatsapp">
                    <span>{ui.whatsappLabel}</span>
                    <a className="button button-secondary contact-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer noopener" aria-label={whatsappAriaLabel}><MessageCircle />{ui.whatsappLabel}<ArrowUpRight /></a>
                    <small>{BUSINESS.whatsappDisplayNumber}</small>
                  </div>
                </div>
                <p className="contact-response-time">{ui.responseTime}</p>
                <div className="contact-business-meta">
                  <strong>{BUSINESS.registeredBusinessName}</strong>
                  <p>KvK {BUSINESS.kvkNumber}</p>
                  <p>{businessLocation}</p>
                </div>
              </div>
            </div>
            <div className="contact-form-shell">
              {formState === 'success' ? <motion.div ref={successRef} tabIndex={-1} role="status" initial={{opacity: 0}} animate={{opacity: 1}} className="form-success"><span><Check /></span><h3>{dict.contactSuccessTitle}</h3><p>{dict.contactSuccessDesc}</p><button onClick={handleResetForm} className="button button-primary">{dict.contactFailBtn}</button></motion.div> :
                <form onSubmit={handleFormSubmit}>
                  <div className="sr-only" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={formWebsite} onChange={(event) => setFormWebsite(event.target.value)} /></div>
                  {formState === 'error' && <div role="alert" className="form-error">{formErrorMessage}</div>}
                  <div className="form-section-copy">
                    <p>{ui.formSectionTitle}</p>
                    <span>{ui.formSectionSub}</span>
                  </div>
                  <p role="note">{ui.formSensitiveWarning}</p>
                  <div className="qualification-grid">
                    <label htmlFor="contact-audience"><span>{ui.formAudienceLabel}</span><select id="contact-audience" name="audience" value={formAudience} onChange={(event) => setFormAudience(event.target.value)} disabled={formState === 'sending'}>{qualificationOptions.audience.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
                    <label htmlFor="contact-status"><span>{ui.formStatusLabel}</span><select id="contact-status" name="status" value={formStatus} onChange={(event) => setFormStatus(event.target.value)} disabled={formState === 'sending'}>{qualificationOptions.status.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
                    <label htmlFor="contact-moving-date"><span>{ui.formMovingDateLabel}</span><input id="contact-moving-date" name="movingDate" type="date" value={formMovingDate} onChange={(event) => setFormMovingDate(event.target.value)} disabled={formState === 'sending'} /></label>
                    <label htmlFor="contact-city"><span>{ui.formCityLabel}</span><input id="contact-city" name="city" type="text" value={formCity} onChange={(event) => setFormCity(event.target.value)} disabled={formState === 'sending'} maxLength={80} placeholder={lang === 'uk' ? 'Амстердам, Гаага, Делфт...' : lang === 'ru' ? 'Амстердам, Гаага, Делфт...' : 'Amsterdam, The Hague, Delft...'} /></label>
                    <label htmlFor="contact-budget"><span>{ui.formBudgetLabel}</span><select id="contact-budget" name="budget" value={formBudget} onChange={(event) => setFormBudget(event.target.value)} disabled={formState === 'sending'}><option value="">{lang === 'uk' ? 'Оберіть діапазон' : lang === 'ru' ? 'Выберите диапазон' : 'Choose a range'}</option>{qualificationOptions.budget.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
                    <label htmlFor="contact-guarantor"><span>{ui.formGuarantorLabel}</span><select id="contact-guarantor" name="guarantor" value={formGuarantor} onChange={(event) => setFormGuarantor(event.target.value)} disabled={formState === 'sending'}>{qualificationOptions.guarantor.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
                  </div>
                  <label htmlFor="contact-help"><span>{ui.formHelpLabel}</span><select id="contact-help" name="help" value={formHelp} onChange={(event) => setFormHelp(event.target.value)} disabled={formState === 'sending'}>{qualificationOptions.help.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
                  <div className="form-grid"><label htmlFor="contact-name"><span>{dict.contactNameLabel} *</span><input id="contact-name" name="name" type="text" required value={formName} onChange={(event) => {setFormName(event.target.value); if (formState === 'error') setFormState('idle');}} disabled={formState === 'sending'} maxLength={120} autoComplete="name" placeholder="Maria" /></label><label htmlFor="contact-email"><span>{dict.contactEmailLabel} *</span><input id="contact-email" name="email" type="email" required value={formEmail} onChange={(event) => {setFormEmail(event.target.value); if (formState === 'error') setFormState('idle');}} disabled={formState === 'sending'} maxLength={254} autoComplete="email" placeholder="maria@example.com" /></label></div>
                  <label htmlFor="contact-type"><span>{dict.contactTypeLabel}</span><select id="contact-type" name="inquiryType" value={formInquiryType} onChange={(event) => setFormInquiryType(event.target.value)} disabled={formState === 'sending'}><option value="consultation">{dict.contactTypeOpt1}</option><option value="single">{dict.contactTypeOpt2}</option><option value="packages">{dict.contactTypeOpt3}</option><option value="b2b">{dict.contactTypeOpt4}</option></select></label>
                  <label htmlFor="contact-message"><span>{dict.contactMessageLabel} *</span><textarea id="contact-message" name="message" rows={5} required value={formMessage} onChange={(event) => {setFormMessage(event.target.value); if (formState === 'error') setFormState('idle');}} disabled={formState === 'sending'} maxLength={5000} placeholder={lang === 'uk' ? 'Наприклад: потрібна допомога з BSN, житлом або пакетом.' : lang === 'ru' ? 'Например: нужна помощь с BSN, жильём или пакетом.' : 'For example: I need help with BSN, housing or a package.'} /></label>
                  <div className="consent-row">
                    <input type="checkbox" id="privacy-consent" name="consent" required checked={formConsent} onChange={(event) => setFormConsent(event.target.checked)} disabled={formState === 'sending'} />
                    <div className="consent-copy">
                      <label htmlFor="privacy-consent"><span>{privacyAcknowledgement.prefix}</span></label>
                      <Link href={privacyHref} className="consent-link">{privacyLabel}</Link>
                      <label htmlFor="privacy-consent"><span>{privacyAcknowledgement.suffix}</span></label>
                    </div>
                  </div>
                  <button type="submit" disabled={formState === 'sending' || !formConsent} className="button button-primary contact-submit"><span aria-live="polite">{formState === 'sending' ? dict.contactSending : dict.contactSubmitBtn}</span>{formState !== 'sending' && <ArrowRight />}</button>
                </form>}
            </div>
          </div>
          <footer className="site-footer"><div className="site-container footer-layout"><a href="#top" className="footer-brand" aria-label="VANTAM"><BrandLogo className="brand-logo brand-logo-footer" /></a><div className="footer-copy"><p>{dict.footerSub}</p><p className="footer-business-meta">{footerBusinessLine}</p></div><div className="footer-contact-links"><a href={BUSINESS.publicEmailMailto}>{BUSINESS.publicEmail}</a><a href={BUSINESS.phoneTelHref}>{BUSINESS.phoneDisplayNumber}</a><a href={whatsappHref} target="_blank" rel="noreferrer noopener" aria-label={whatsappAriaLabel}>{ui.whatsappLabel}</a><Link href={privacyHref}>{privacyLabel}</Link></div></div></footer>
        </section>
      </main>

      {showExportModal && <div id="print-modal-overlay" className="print-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setShowExportModal(false); }}><div ref={modalRef} className="print-modal" role="dialog" aria-modal="true" aria-labelledby="print-modal-title"><div className="print-modal-header"><div><h3 id="print-modal-title">{dict.modalTitle}</h3><p>{dict.modalDesc}</p></div><button ref={modalCloseRef} id="close-print-modal-btn" onClick={() => setShowExportModal(false)} aria-label={dict.modalCloseBtn}><X /></button></div><div id="vantam-printable-prospectus" className="print-sheet"><div className="print-brand-row"><div className="print-brand"><BrandLogo className="brand-logo brand-logo-print" /><div><strong>{BUSINESS.publicBrandName}</strong><p>{dict.modalAdvisorDesc}</p></div></div><div><span>{dict.modalOfferNo}</span><strong>{currentSelectedPkgObj.id.toUpperCase()}-2026</strong></div></div><div className="print-package-summary"><div><span>{dict.modalTargetPlan}</span><h4>{currentSelectedPkgObj.name[lang]}</h4><p>{currentSelectedPkgObj.idealFor[lang]}</p></div><strong>{currentSelectedPkgObj.price}</strong></div><div className="print-list"><h5>{dict.pkgScopeTitle}</h5><ul>{currentSelectedPkgObj.scope[lang].map((item) => <li key={item}>{item}</li>)}</ul></div><div className="print-list"><h5>{dict.pkgLimitsTitle}</h5><ul>{currentSelectedPkgObj.limits[lang].map((item) => <li key={item}>{item}</li>)}</ul></div><p className="print-disclaimer">{dict.footerSub}</p><div className="print-footer">{footerPrintLine}</div></div><div className="print-actions"><button onClick={() => window.print()} className="button button-primary"><Download />{dict.modalPrintBtn}</button><button onClick={() => setShowExportModal(false)} className="button button-quiet">{dict.modalCloseBtn}</button></div></div></div>}

      <style jsx global>{`@media print { body * { visibility: hidden; } #vantam-printable-prospectus, #vantam-printable-prospectus * { visibility: visible; } #vantam-printable-prospectus { position: absolute; inset: 0; width: 100%; border: 0 !important; box-shadow: none !important; } }`}</style>
    </div>
  );
}

function MessageIcon() {
  return <MessageCircle aria-hidden="true" />;
}
