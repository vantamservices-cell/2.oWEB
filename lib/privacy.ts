import {BUSINESS, BUSINESS_LOCATION, getWhatsAppAriaLabel, getWhatsAppUrl} from './business';
import type {Locale} from './locales';
import {localePath} from './locales';
import {PRIVACY_POLICY_VERSION} from './privacy-version';

export const PRIVACY_LAST_UPDATED_ISO = PRIVACY_POLICY_VERSION;

const PRIVACY_DATE_LOCALE: Record<Locale, string> = {
  en: 'en-GB',
  uk: 'uk-UA',
  ru: 'ru-RU',
};

export const PRIVACY_ROUTE_LABELS: Record<Locale, string> = {
  en: 'Privacy Policy',
  uk: 'Політика конфіденційності',
  ru: 'Политика конфиденциальности',
};

export const PRIVACY_FORM_ACKNOWLEDGEMENT: Record<Locale, {prefix: string; suffix: string}> = {
  en: {
    prefix: 'I have read the',
    suffix: 'and understand how VANTAM processes my enquiry.',
  },
  uk: {
    prefix: 'Я ознайомився(-лася) з',
    suffix: 'та розумію, як VANTAM обробляє мій запит.',
  },
  ru: {
    prefix: 'Я ознакомился(-лась) с',
    suffix: 'и понимаю, как VANTAM обрабатывает мой запрос.',
  },
};

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type PrivacyCopy = {
  seoTitle: string;
  seoDescription: string;
  title: string;
  summary: string;
  lastUpdatedLabel: string;
  tocLabel: string;
  backHomeLabel: string;
  themeToggleLightLabel: string;
  themeToggleDarkLabel: string;
  contactLead: string;
  contactTitle: string;
  contactSummary: string;
  contactNote: string;
  footerNote: string;
  emailLabel: string;
  phoneLabel: string;
  whatsappLabel: string;
  sections: PrivacySection[];
};

export const PRIVACY_COPY: Record<Locale, PrivacyCopy> = {
  en: {
    seoTitle: 'Privacy Policy | VANTAM',
    seoDescription:
      'How VANTAM collects, uses, shares, and keeps enquiry data when you contact the site by form, email, phone, or WhatsApp.',
    title: 'Privacy Policy',
    summary:
      'This page explains what VANTAM collects when you send an enquiry, why we need it, who can receive it, how long we keep it, and what choices you have.',
    lastUpdatedLabel: 'Last updated',
    tocLabel: 'On this page',
    backHomeLabel: 'Back to home',
    themeToggleLightLabel: 'Use light theme',
    themeToggleDarkLabel: 'Use dark theme',
    contactLead: 'Need a privacy question answered?',
    contactTitle: 'Contact VANTAM',
    contactSummary:
      'Use email, phone, or WhatsApp Business if you want to ask how your data is handled, request a copy of what we keep, or raise a privacy concern.',
    contactNote:
      'WhatsApp is an external third-party channel. Do not send passports, bank statements, full contracts, health information, or other highly sensitive documents through WhatsApp unless VANTAM has specifically asked for a secure method.',
    footerNote:
      'This policy matches the current website form, email delivery, and contact channels. VANTAM will update it before optional analytics or marketing tracking is introduced.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp Business',
    sections: [
      {
        id: 'who-controls',
        title: 'Who controls the data',
        paragraphs: [
          'VANTAM Services controls the personal data collected through this website. We trade publicly as VANTAM.',
          'We are a Dutch eenmanszaak based in The Hague, Netherlands.',
          `You can reach us at ${BUSINESS.publicEmail} or ${BUSINESS.phoneDisplayNumber}.`,
          'We do not publish a street address here because no public street address has been authorised. No VAT number is currently available, so we do not invent one.',
        ],
      },
      {
        id: 'data-collected',
        title: 'Data collected through the website',
        paragraphs: [
          'When you use the contact form, VANTAM may collect the following data:',
        ],
        bullets: [
          'name and email address',
          'inquiry type, message, and the service or package context you selected',
          'language, source page or source URL, intended audience or user category, planned move date, city or region, budget information, housing or arrival status, guarantor-related information, and the requested type of help',
          'the privacy acknowledgement you tick before sending the form',
          'a hidden anti-abuse field, IP-based abuse-prevention or rate-limiting information, and request and submission timestamps when the request reaches the server and when the message is sent',
        ],
      },
      {
        id: 'contact-channels',
        title: 'Direct contact channels',
        paragraphs: [
          'You can also contact VANTAM directly by email, by telephone, or through WhatsApp Business.',
          'WhatsApp is an external service run by Meta and WhatsApp. Its own privacy practices apply when you choose that channel.',
        ],
        bullets: [
          `Email: ${BUSINESS.publicEmail}`,
          `Telephone: ${BUSINESS.phoneDisplayNumber}`,
          `WhatsApp Business: ${BUSINESS.whatsappDisplayNumber}`,
        ],
      },
      {
        id: 'purposes',
        title: 'Purposes of processing',
        paragraphs: [
          'VANTAM may use enquiry information to:',
        ],
        bullets: [
          'respond to your enquiry',
          'understand your situation and decide whether VANTAM can help',
          'prepare a consultation, written offer, agreement, or appendix',
          'communicate about your request and provide the agreed service',
          'issue and administer invoices when a client relationship is formed',
          'prevent spam, fraud, and technical abuse',
          'meet legal and administrative obligations',
        ],
      },
      {
        id: 'legal-bases',
        title: 'Legal bases',
        paragraphs: [
          'VANTAM uses different legal bases depending on the situation:',
          'The mandatory checkbox on the form is an acknowledgement that you read the Privacy Policy. It is not blanket consent for all processing.',
        ],
        bullets: [
          'steps requested before a contract when you ask VANTAM to review your situation, prepare an offer, or set up a consultation',
          'performance of an agreement when you become a client',
          'legitimate interests for genuine enquiry handling, website operation, and abuse prevention',
          'legal obligations for accounting, invoices, record keeping, and required disclosures',
          'consent only when a separate piece of processing truly depends on consent',
        ],
      },
      {
        id: 'recipients',
        title: 'Recipients and service providers',
        paragraphs: [
          'VANTAM may share enquiry data with the following categories of recipients or processors:',
        ],
        bullets: [
          'VANTAM itself, through the systems used to run the website and handle enquiries',
          'Vercel for website hosting and application infrastructure',
          'Resend for email delivery',
          'Google or Gmail as the mailbox provider for the recipient account',
          'Meta and WhatsApp when you choose to contact us through WhatsApp Business',
          'professional advisers, accountants, or legal advisers when that is necessary and appropriate',
          'authorities when disclosure is legally required',
        ],
      },
      {
        id: 'transfers',
        title: 'International data transfers',
        paragraphs: [
          'Some of these providers may process data outside the EEA or make it accessible from outside the EEA.',
          'Where required, VANTAM relies on recognised legal transfer mechanisms and safeguards used by the provider or the relevant service arrangement.',
        ],
      },
      {
        id: 'retention',
        title: 'Retention',
        paragraphs: [
          'VANTAM keeps different categories of data for different periods:',
        ],
        bullets: [
          'ordinary enquiries from people who do not become clients may be kept for up to 12 months after the last meaningful contact',
          'information may be deleted earlier when it is no longer needed',
          'client contracts, invoices, communications, and service records may be kept longer when needed for the agreement, administration, accounting, disputes, or legal obligations',
          'technical abuse-prevention information is kept only as long as operationally necessary',
          'email and WhatsApp messages may also remain in the relevant provider accounts until deleted according to operational and legal requirements',
        ],
      },
      {
        id: 'security',
        title: 'Security',
        paragraphs: [
          'VANTAM uses reasonable technical and organisational safeguards. No system is perfectly secure, but we work to reduce risk.',
        ],
        bullets: [
          'HTTPS',
          'limited access to enquiry data',
          'server-side environment variables for secrets',
          'input validation and sanitisation',
          'origin checking for the form submission',
          'anti-spam measures and rate limiting',
          'controlled email delivery through the server, not direct browser-to-mailbox delivery',
        ],
      },
      {
        id: 'rights',
        title: 'Your privacy rights',
        paragraphs: [
          'Depending on the situation, you may have the right to access, correct, delete, restrict, or object to processing, and to ask for portability where that right applies.',
          'Where consent is the legal basis, you can withdraw it at any time for the processing that depends on consent.',
          'You may also file a complaint with the Dutch Data Protection Authority, the Autoriteit Persoonsgegevens.',
        ],
        bullets: [
          `Send privacy requests to ${BUSINESS.publicEmail}.`,
          'VANTAM may ask for enough information to confirm your identity, but not for more than is reasonably necessary.',
        ],
      },
      {
        id: 'automated',
        title: 'Automated decision-making',
        paragraphs: [
          'The current website does not make decisions that produce legal or similarly significant effects solely through automated processing.',
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies and analytics',
        paragraphs: [
          'The repository does not show non-essential cookies, advertising pixels, behavioural tracking, third-party media embeds, chat widgets, or browser storage used for tracking.',
          'On that basis, VANTAM does not currently use non-essential tracking technologies that require a consent banner.',
          'If optional analytics or marketing tracking is introduced later, this policy will be updated before it goes live.',
        ],
      },
      {
        id: 'changes',
        title: 'Policy changes',
        paragraphs: [
          'VANTAM may update this policy when services change, vendors change, legal obligations change, or new website functionality is introduced.',
          `Last updated: ${new Intl.DateTimeFormat(PRIVACY_DATE_LOCALE.en, {dateStyle: 'long'}).format(new Date(`${PRIVACY_LAST_UPDATED_ISO}T00:00:00Z`))}.`,
        ],
      },
    ],
  },
  uk: {
    seoTitle: 'Політика конфіденційності | VANTAM',
    seoDescription:
      'Як VANTAM збирає, використовує, передає та зберігає дані запитів, коли ви звертаєтеся через форму, email, телефон або WhatsApp.',
    title: 'Політика конфіденційності',
    summary:
      'Ця сторінка пояснює, які дані VANTAM збирає, коли ви надсилаєте запит, навіщо вони потрібні, хто може їх отримати, як довго ми їх зберігаємо і які у вас є права.',
    lastUpdatedLabel: 'Оновлено',
    tocLabel: 'На цій сторінці',
    backHomeLabel: 'Повернутися на головну',
    themeToggleLightLabel: 'Увімкнути світлу тему',
    themeToggleDarkLabel: 'Увімкнути темну тему',
    contactLead: 'Потрібне уточнення щодо конфіденційності?',
    contactTitle: 'Зв’яжіться з VANTAM',
    contactSummary:
      'Напишіть на email, зателефонуйте або скористайтеся WhatsApp Business, якщо хочете запитати, як обробляються ваші дані, отримати копію того, що ми зберігаємо, або підняти питання конфіденційності.',
    contactNote:
      'WhatsApp є зовнішнім каналом третьої сторони. Не надсилайте через WhatsApp паспорти, банківські виписки, повні договори, медичну інформацію або інші дуже чутливі документи, якщо VANTAM прямо не попросив про безпечний спосіб передачі.',
    footerNote:
      'Ця політика відповідає поточній формі на сайті, email-доставці та каналам зв’язку. VANTAM оновить її до запуску будь-якої необов’язкової аналітики або маркетингового трекінгу.',
    emailLabel: 'Електронна пошта',
    phoneLabel: 'Телефон',
    whatsappLabel: 'WhatsApp Business',
    sections: [
      {
        id: 'who-controls',
        title: 'Хто контролює дані',
        paragraphs: [
          'Контролером персональних даних для цього сайту є VANTAM Services. Публічно ми працюємо як VANTAM.',
          'Ми є нідерландською eenmanszaak і працюємо в Гаазі, Нідерланди.',
          `Зв’язатися з нами можна за адресою ${BUSINESS.publicEmail} або за номером ${BUSINESS.phoneDisplayNumber}.`,
          'Ми не публікуємо тут вуличну адресу, тому що публічна адреса не була дозволена. Номер VAT зараз недоступний, тож ми його не вигадуємо.',
        ],
      },
      {
        id: 'data-collected',
        title: 'Дані, які збираються через сайт',
        paragraphs: [
          'Коли ви користуєтеся формою, VANTAM може збирати такі дані:',
        ],
        bullets: [
          'ім’я та адреса електронної пошти',
          'тип запиту, повідомлення та контекст обраної послуги або пакета',
          'мова, сторінка або URL джерела, цільова аудиторія чи категорія користувача, планована дата переїзду, місто або регіон, бюджет, статус щодо житла або приїзду, дані про гаранта та запитаний тип допомоги',
          'позначка про ознайомлення з Політикою конфіденційності',
          'приховане антиабуз поле, IP-дані для захисту від зловживань або rate limiting, а також мітки часу запиту та надсилання, коли запит доходить до сервера і коли лист відправляється',
        ],
      },
      {
        id: 'contact-channels',
        title: 'Прямі канали зв’язку',
        paragraphs: [
          'Ви також можете зв’язатися з VANTAM напряму через email, телефон або WhatsApp Business.',
          'WhatsApp є зовнішнім сервісом Meta та WhatsApp. Коли ви обираєте цей канал, діють їхні власні правила конфіденційності.',
        ],
        bullets: [
          `Email: ${BUSINESS.publicEmail}`,
          `Телефон: ${BUSINESS.phoneDisplayNumber}`,
          `WhatsApp Business: ${BUSINESS.whatsappDisplayNumber}`,
        ],
      },
      {
        id: 'purposes',
        title: 'Цілі обробки',
        paragraphs: [
          'VANTAM може використовувати дані запиту для того, щоб:',
        ],
        bullets: [
          'відповісти на ваш запит',
          'зрозуміти вашу ситуацію та вирішити, чи може VANTAM допомогти',
          'підготувати консультацію, письмову пропозицію, договір або додаток',
          'обговорити ваш запит і надати погоджену послугу',
          'виставляти та адмініструвати рахунки, якщо ви стаєте клієнтом',
          'запобігати спаму, шахрайству та технічним зловживанням',
          'виконувати юридичні та адміністративні обов’язки',
        ],
      },
      {
        id: 'legal-bases',
        title: 'Правові підстави',
        paragraphs: [
          'VANTAM використовує різні правові підстави залежно від ситуації:',
          'Прапорець у формі означає, що ви ознайомилися з Політикою конфіденційності. Це не є загальною згодою на всю обробку.',
        ],
        bullets: [
          'кроки до укладення договору, коли ви просите перевірити вашу ситуацію, підготувати пропозицію або консультацію',
          'виконання договору, коли ви стаєте клієнтом',
          'законний інтерес для добросовісної обробки запитів, роботи сайту та захисту від зловживань',
          'юридичні обов’язки для бухгалтерії, рахунків, обліку та обов’язкових розкриттів',
          'згода лише тоді, коли окрема обробка справді залежить від згоди',
        ],
      },
      {
        id: 'recipients',
        title: 'Отримувачі та постачальники послуг',
        paragraphs: [
          'VANTAM може передавати дані запиту таким категоріям отримувачів або обробників:',
        ],
        bullets: [
          'самій VANTAM через системи, які використовуються для роботи сайту та обробки запитів',
          'Vercel для хостингу сайту та інфраструктури додатка',
          'Resend для доставки email',
          'Google або Gmail як поштовий сервіс для скриньки отримувача',
          'Meta та WhatsApp, коли ви самі обираєте контакт через WhatsApp Business',
          'професійним радникам, бухгалтерам або юристам, коли це необхідно і доречно',
          'державним органам, коли розкриття вимагає закон',
        ],
      },
      {
        id: 'transfers',
        title: 'Міжнародні передачі даних',
        paragraphs: [
          'Деякі з цих провайдерів можуть обробляти дані поза ЄЕЗ або надавати до них доступ із-за меж ЄЕЗ.',
          'Коли це потрібно, VANTAM спирається на визнані законні механізми передачі та захисні заходи, які використовує провайдер або відповідна сервісна угода.',
        ],
      },
      {
        id: 'retention',
        title: 'Зберігання',
        paragraphs: [
          'VANTAM зберігає різні категорії даних протягом різного часу:',
        ],
        bullets: [
          'звичайні запити від людей, які не стають клієнтами, можуть зберігатися до 12 місяців після останнього змістовного контакту',
          'дані можуть бути видалені раніше, якщо вони більше не потрібні',
          'контракти, рахунки, листування та сервісні записи клієнтів можуть зберігатися довше, якщо це потрібно для договору, адміністрування, бухгалтерії, спорів або юридичних обов’язків',
          'технічні дані для захисту від зловживань зберігаються лише стільки, скільки потрібно операційно',
          'email та WhatsApp-повідомлення також можуть залишатися в акаунтах відповідних провайдерів, доки їх не видалять відповідно до операційних та юридичних вимог',
        ],
      },
      {
        id: 'security',
        title: 'Безпека',
        paragraphs: [
          'VANTAM використовує розумні технічні та організаційні заходи безпеки. Жодна система не є абсолютно захищеною, але ми зменшуємо ризик.',
        ],
        bullets: [
          'HTTPS',
          'обмежений доступ до даних запитів',
          'server-side environment variables для секретів',
          'перевірка введення та очищення даних',
          'перевірка origin під час надсилання форми',
          'антиспам-заходи та rate limiting',
          'контрольована доставка email через сервер, а не напряму з браузера до поштової скриньки',
        ],
      },
      {
        id: 'rights',
        title: 'Ваші права щодо конфіденційності',
        paragraphs: [
          'Залежно від ситуації ви можете мати право на доступ, виправлення, видалення, обмеження або заперечення проти обробки, а також на перенесення даних там, де це право застосовується.',
          'Якщо правовою підставою є згода, ви можете відкликати її будь-коли для тієї обробки, яка залежить від згоди.',
          'Ви також можете подати скаргу до нідерландського органу з захисту даних, Autoriteit Persoonsgegevens.',
        ],
        bullets: [
          `Надсилайте запити щодо конфіденційності на адресу ${BUSINESS.publicEmail}.`,
          'VANTAM може попросити достатньо даних, щоб підтвердити вашу особу, але не більше, ніж це розумно необхідно.',
        ],
      },
      {
        id: 'automated',
        title: 'Автоматизоване прийняття рішень',
        paragraphs: [
          'Нинішній сайт не приймає рішень, які мають юридичні або подібно значущі наслідки, лише на основі автоматизованої обробки.',
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies та аналітика',
        paragraphs: [
          'У репозиторії немає ознак не обов’язкових cookie, рекламних пікселів, поведінкового трекінгу, сторонніх медіавставок, чат-виджетів або browser storage для трекінгу.',
          'На цій підставі VANTAM наразі не використовує необов’язкові трекінг-технології, для яких потрібен банер згоди.',
          'Якщо пізніше буде додано необов’язкову аналітику або маркетинговий трекінг, ця політика буде оновлена до запуску.',
        ],
      },
      {
        id: 'changes',
        title: 'Зміни політики',
        paragraphs: [
          'VANTAM може оновлювати цю політику, коли змінюються послуги, провайдери, юридичні обов’язки або з’являються нові функції сайту.',
          `Оновлено: ${new Intl.DateTimeFormat(PRIVACY_DATE_LOCALE.uk, {dateStyle: 'long'}).format(new Date(`${PRIVACY_LAST_UPDATED_ISO}T00:00:00Z`))}.`,
        ],
      },
    ],
  },
  ru: {
    seoTitle: 'Политика конфиденциальности | VANTAM',
    seoDescription:
      'Как VANTAM собирает, использует, передаёт и хранит данные обращений, когда вы связываетесь через форму, email, телефон или WhatsApp.',
    title: 'Политика конфиденциальности',
    summary:
      'Эта страница объясняет, какие данные VANTAM собирает, когда вы отправляете запрос, зачем они нужны, кто может их получить, как долго мы их храним и какие у вас есть права.',
    lastUpdatedLabel: 'Обновлено',
    tocLabel: 'На этой странице',
    backHomeLabel: 'Вернуться на главную',
    themeToggleLightLabel: 'Включить светлую тему',
    themeToggleDarkLabel: 'Включить тёмную тему',
    contactLead: 'Нужен ответ на вопрос о конфиденциальности?',
    contactTitle: 'Свяжитесь с VANTAM',
    contactSummary:
      'Напишите на email, позвоните или используйте WhatsApp Business, если хотите спросить, как обрабатываются ваши данные, получить копию того, что мы храним, или поднять вопрос конфиденциальности.',
    contactNote:
      'WhatsApp является внешним каналом третьей стороны. Не отправляйте через WhatsApp паспорта, банковские выписки, полные договоры, медицинскую информацию или другие очень чувствительные документы, если VANTAM прямо не попросил о безопасном способе передачи.',
    footerNote:
      'Эта политика соответствует текущей форме на сайте, доставке email и каналам связи. VANTAM обновит её до запуска любой необязательной аналитики или маркетингового трекинга.',
    emailLabel: 'Электронная почта',
    phoneLabel: 'Телефон',
    whatsappLabel: 'WhatsApp Business',
    sections: [
      {
        id: 'who-controls',
        title: 'Кто контролирует данные',
        paragraphs: [
          'Контролером персональных данных для этого сайта является VANTAM Services. Публично мы работаем как VANTAM.',
          'Мы являемся нидерландской eenmanszaak и работаем в Гааге, Нидерланды.',
          `Связаться с нами можно по адресу ${BUSINESS.publicEmail} или по номеру ${BUSINESS.phoneDisplayNumber}.`,
          'Мы не публикуем здесь уличный адрес, потому что публичный адрес не был разрешён. Номер VAT сейчас недоступен, поэтому мы его не выдумываем.',
        ],
      },
      {
        id: 'data-collected',
        title: 'Данные, которые собираются через сайт',
        paragraphs: [
          'Когда вы используете форму, VANTAM может собирать следующие данные:',
        ],
        bullets: [
          'имя и адрес электронной почты',
          'тип запроса, сообщение и контекст выбранной услуги или пакета',
          'язык, страница или URL источника, целевая аудитория или категория пользователя, планируемая дата переезда, город или регион, бюджет, статус по жилью или приезду, данные о гаранте и запрашиваемый тип помощи',
          'отметку о том, что вы ознакомились с Политикой конфиденциальности',
          'скрытое антиабуз-поле, IP-данные для защиты от злоупотреблений или rate limiting, а также временные метки запроса и отправки, когда запрос доходит до сервера и когда письмо отправляется',
        ],
      },
      {
        id: 'contact-channels',
        title: 'Прямые каналы связи',
        paragraphs: [
          'Вы также можете связаться с VANTAM напрямую через email, телефон или WhatsApp Business.',
          'WhatsApp является внешним сервисом Meta и WhatsApp. Когда вы выбираете этот канал, действуют их собственные правила конфиденциальности.',
        ],
        bullets: [
          `Email: ${BUSINESS.publicEmail}`,
          `Телефон: ${BUSINESS.phoneDisplayNumber}`,
          `WhatsApp Business: ${BUSINESS.whatsappDisplayNumber}`,
        ],
      },
      {
        id: 'purposes',
        title: 'Цели обработки',
        paragraphs: [
          'VANTAM может использовать данные запроса для того, чтобы:',
        ],
        bullets: [
          'ответить на ваш запрос',
          'понять вашу ситуацию и решить, может ли VANTAM помочь',
          'подготовить консультацию, письменное предложение, договор или приложение',
          'обсуждать ваш запрос и оказывать согласованную услугу',
          'выставлять и администрировать счета, если вы становитесь клиентом',
          'предотвращать спам, мошенничество и технические злоупотребления',
          'выполнять юридические и административные обязанности',
        ],
      },
      {
        id: 'legal-bases',
        title: 'Правовые основания',
        paragraphs: [
          'VANTAM использует разные правовые основания в зависимости от ситуации:',
          'Флажок в форме означает, что вы ознакомились с Политикой конфиденциальности. Это не является общим согласием на всю обработку.',
        ],
        bullets: [
          'шаги до заключения договора, когда вы просите проверить вашу ситуацию, подготовить предложение или консультацию',
          'исполнение договора, когда вы становитесь клиентом',
          'законный интерес для добросовестной обработки запросов, работы сайта и защиты от злоупотреблений',
          'юридические обязанности для бухгалтерии, счетов, учёта и обязательных раскрытий',
          'согласие только тогда, когда отдельная обработка действительно зависит от согласия',
        ],
      },
      {
        id: 'recipients',
        title: 'Получатели и поставщики услуг',
        paragraphs: [
          'VANTAM может передавать данные запроса следующим категориям получателей или обработчиков:',
        ],
        bullets: [
          'самой VANTAM через системы, которые используются для работы сайта и обработки запросов',
          'Vercel для хостинга сайта и инфраструктуры приложения',
          'Resend для доставки email',
          'Google или Gmail как почтовый сервис для ящика получателя',
          'Meta и WhatsApp, когда вы сами выбираете контакт через WhatsApp Business',
          'профессиональным советникам, бухгалтерам или юристам, когда это необходимо и уместно',
          'государственным органам, когда раскрытие требуется законом',
        ],
      },
      {
        id: 'transfers',
        title: 'Международная передача данных',
        paragraphs: [
          'Некоторые из этих провайдеров могут обрабатывать данные за пределами ЕЭЗ или предоставлять к ним доступ из-за пределов ЕЭЗ.',
          'Когда это требуется, VANTAM опирается на признанные законные механизмы передачи и защитные меры, которые использует провайдер или соответствующая сервисная схема.',
        ],
      },
      {
        id: 'retention',
        title: 'Хранение',
        paragraphs: [
          'VANTAM хранит разные категории данных в течение разного времени:',
        ],
        bullets: [
          'обычные запросы от людей, которые не становятся клиентами, могут храниться до 12 месяцев после последнего содержательного контакта',
          'данные могут быть удалены раньше, если они больше не нужны',
          'контракты, счета, переписка и сервисные записи клиентов могут храниться дольше, если это нужно для договора, администрирования, бухгалтерии, споров или юридических обязанностей',
          'технические данные для защиты от злоупотреблений хранятся только столько, сколько требуется операционно',
          'email и сообщения WhatsApp также могут оставаться в аккаунтах соответствующих провайдеров, пока их не удалят в соответствии с операционными и юридическими требованиями',
        ],
      },
      {
        id: 'security',
        title: 'Безопасность',
        paragraphs: [
          'VANTAM использует разумные технические и организационные меры безопасности. Ни одна система не защищена идеально, но мы снижаем риск.',
        ],
        bullets: [
          'HTTPS',
          'ограниченный доступ к данным запросов',
          'server-side environment variables для секретов',
          'проверка ввода и очистка данных',
          'проверка origin при отправке формы',
          'антиспам-механизмы и rate limiting',
          'контролируемая доставка email через сервер, а не напрямую из браузера в почтовый ящик',
        ],
      },
      {
        id: 'rights',
        title: 'Ваши права на конфиденциальность',
        paragraphs: [
          'В зависимости от ситуации вы можете иметь право на доступ, исправление, удаление, ограничение или возражение против обработки, а также на перенос данных там, где это право применяется.',
          'Если правовым основанием является согласие, вы можете отозвать его в любое время для той обработки, которая зависит от согласия.',
          'Вы также можете подать жалобу в нидерландский орган по защите данных, Autoriteit Persoonsgegevens.',
        ],
        bullets: [
          `Отправляйте запросы по конфиденциальности на адрес ${BUSINESS.publicEmail}.`,
          'VANTAM может попросить достаточно данных, чтобы подтвердить вашу личность, но не больше, чем это разумно необходимо.',
        ],
      },
      {
        id: 'automated',
        title: 'Автоматизированное принятие решений',
        paragraphs: [
          'Текущий сайт не принимает решения, которые имеют юридические или сопоставимо значимые последствия, исключительно на основе автоматизированной обработки.',
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies и аналитика',
        paragraphs: [
          'В репозитории нет признаков необязательных cookie, рекламных пикселей, поведенческого трекинга, сторонних медиа-вставок, чат-виджетов или browser storage для трекинга.',
          'На этом основании VANTAM сейчас не использует необязательные трекинг-технологии, для которых нужен баннер согласия.',
          'Если позже будет добавлена необязательная аналитика или маркетинговый трекинг, эта политика будет обновлена до запуска.',
        ],
      },
      {
        id: 'changes',
        title: 'Изменения политики',
        paragraphs: [
          'VANTAM может обновлять эту политику, когда меняются услуги, провайдеры, юридические обязательства или появляются новые функции сайта.',
          `Обновлено: ${new Intl.DateTimeFormat(PRIVACY_DATE_LOCALE.ru, {dateStyle: 'long'}).format(new Date(`${PRIVACY_LAST_UPDATED_ISO}T00:00:00Z`))}.`,
        ],
      },
    ],
  },
};

export function privacyPath(locale: Locale) {
  return localePath(locale, '/privacy');
}

export function formatPrivacyLastUpdated(locale: Locale) {
  return new Intl.DateTimeFormat(PRIVACY_DATE_LOCALE[locale], {dateStyle: 'long'}).format(
    new Date(`${PRIVACY_LAST_UPDATED_ISO}T00:00:00Z`),
  );
}

export function getPrivacyContactLinks(locale: Locale) {
  return {
    email: BUSINESS.publicEmail,
    emailHref: BUSINESS.publicEmailMailto,
    phone: BUSINESS.phoneDisplayNumber,
    phoneHref: BUSINESS.phoneTelHref,
    whatsapp: BUSINESS.whatsappDisplayNumber,
    whatsappHref: getWhatsAppUrl(locale),
    whatsappAriaLabel: getWhatsAppAriaLabel(locale),
    location: BUSINESS_LOCATION[locale],
  };
}
