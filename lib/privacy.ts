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
    summary: 'This policy explains what personal data VANTAM processes, why we process it, which providers support us, how long we keep it, and what rights you have.',
    lastUpdatedLabel: 'Last updated',
    tocLabel: 'On this page',
    backHomeLabel: 'Back to home',
    themeToggleLightLabel: 'Use light theme',
    themeToggleDarkLabel: 'Use dark theme',
    contactLead: 'Privacy question or request?',
    contactTitle: 'Contact VANTAM',
    contactSummary: `Email ${BUSINESS.publicEmail} if you have a privacy question, want to exercise a data protection right, or want to raise a concern.`,
    contactNote: 'Do not send passports, banking documents, health data, guarantor documents, or other sensitive files through the open form or an ordinary WhatsApp conversation. VANTAM will arrange an appropriate method if documents are needed later.',
    footerNote: 'This policy describes the current enquiry form and contact channels. VANTAM will update it if the processing changes.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp Business',
    sections: [
      {
        id: 'who-controls',
        title: 'Who controls your data',
        paragraphs: [
          `VANTAM Services is the controller for the personal data described in this policy. VANTAM Services is a Dutch eenmanszaak registered with the Dutch Chamber of Commerce under KvK number ${BUSINESS.kvkNumber}.`,
          `For privacy matters, contact ${BUSINESS.publicEmail}.`,
        ],
      },
      {
        id: 'data-collected',
        title: 'What the contact form collects',
        paragraphs: [
          'The open form is for a minimal initial enquiry. It does not accept files and does not create a contract or payment obligation.',
        ],
        bullets: [
          'name, email address, enquiry type, and message',
          'language and the path of the page from which you submitted the form',
          'when provided: audience, planned moving date, city or region, housing budget range, situation status, guarantor context, and help needed',
          'privacy policy version and acknowledgement time',
          'workflow status, creation time, last meaningful contact time, and scheduled deletion time',
          'a pseudonymous rate-limit identifier, time window, request count, and expiry time for abuse prevention',
        ],
      },
      {
        id: 'form-flow',
        title: 'How the contact form works',
        paragraphs: [
          'Your browser sends the form to a Next.js API running on Vercel. The server validates the request, limits abusive traffic, minimises the submitted data, and stores an accepted enquiry in Supabase PostgreSQL.',
          'The browser cannot write directly to Supabase. Privileged credentials remain on the server, and public database access is restricted. Full form submissions are not sent through Resend or automatically delivered to Gmail.',
          'Gmail is used only if later correspondence takes place by email. WhatsApp is a separate optional channel that you choose yourself.',
        ],
      },
      {
        id: 'purposes',
        title: 'Purposes and legal bases',
        paragraphs: [
          'The legal basis depends on why the data is processed. The required Privacy Policy checkbox confirms that you have read this policy; it is not the legal basis for all processing.',
        ],
        bullets: [
          'responding to enquiries and taking steps you request before a possible contract',
          'VANTAM’s legitimate interests in website security, abuse prevention, enquiry administration, and reliable operation',
          'performing a contract after an engagement exists',
          'meeting applicable tax, accounting, record-keeping, or other legal obligations',
          'consent only where a separate activity specifically relies on consent',
        ],
      },
      {
        id: 'contact-channels',
        title: 'Email, phone, and WhatsApp',
        paragraphs: [
          'You may contact VANTAM by email, telephone, or WhatsApp Business. Email correspondence is handled through Gmail. WhatsApp is an optional third-party service provided by WhatsApp and Meta, and their own privacy terms apply when you use it.',
        ],
        bullets: [
          `Email: ${BUSINESS.publicEmail}`,
          `Telephone: ${BUSINESS.phoneDisplayNumber}`,
          `WhatsApp Business: ${BUSINESS.whatsappDisplayNumber}`,
        ],
      },
      {
        id: 'recipients',
        title: 'Service providers and other recipients',
        paragraphs: [
          'VANTAM limits access to people and providers that need the data for the purposes described above.',
        ],
        bullets: [
          'Vercel, as the website hosting and server runtime provider, may process technical request and operational information',
          'Supabase, as the PostgreSQL contact-database provider, stores accepted form enquiries and rate-limit records',
          'Google, as the Gmail provider, processes later email correspondence',
          'WhatsApp and Meta process communications when you choose WhatsApp',
          'professional advisers, accountants, courts, regulators, or public authorities where access is necessary or legally required',
        ],
      },
      {
        id: 'transfers',
        title: 'International processing',
        paragraphs: [
          'VANTAM does not claim that all data remains exclusively in the European Union. Providers and their subprocessors may process or access data internationally.',
          'The safeguards that apply depend on the provider, processing location, and its current official terms. These may include adequacy decisions or contractual safeguards where required. This policy does not claim that VANTAM has signed a particular data processing agreement or set of standard contractual clauses unless that arrangement has been verified.',
        ],
      },
      {
        id: 'retention',
        title: 'How long data is kept',
        paragraphs: [
          'Non-client enquiries may be retained for up to 12 months after the last meaningful contact. Deletion is an operational process and may not occur at the exact moment the retention period ends.',
        ],
        bullets: [
          'pseudonymous rate-limit records are kept only for a short operational period',
          'email, WhatsApp, and client records are kept only as reasonably necessary for communication, services, disputes, and applicable legal obligations',
          'records may be deleted earlier when they are no longer needed or retained longer where an applicable legal duty or justified dispute requires it',
        ],
      },
      {
        id: 'security',
        title: 'Security and sensitive documents',
        paragraphs: [
          'VANTAM uses technical and organisational measures intended to reduce risk, including server-side validation, origin checks, request-size limits, abuse controls, restricted database access, and server-only credentials. No system can guarantee absolute security.',
          'The contact database does not store raw IP addresses for rate limiting. The server converts a valid client IP address into an irreversible HMAC-derived identifier before storage.',
          'Do not submit passports, banking documents, health data, guarantor documents, or other sensitive files through the open form or an ordinary WhatsApp conversation.',
        ],
      },
      {
        id: 'rights',
        title: 'Your data protection rights',
        paragraphs: [
          'Depending on the circumstances, the General Data Protection Regulation gives you rights of access, correction, deletion, restriction, objection, and data portability where applicable. You may withdraw consent at any time where processing relies on consent, without affecting earlier lawful processing.',
          `Send a request to ${BUSINESS.publicEmail}. VANTAM may request information reasonably necessary to verify your identity. You may also complain to the Autoriteit Persoonsgegevens, the Dutch data protection authority.`,
        ],
      },
      {
        id: 'automated',
        title: 'Automated decision-making',
        paragraphs: [
          'The website does not make decisions with legal or similarly significant effects based solely on automated processing.',
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies, analytics, and browser storage',
        paragraphs: [
          'The current site has no analytics, advertising, or behavioural tracking. Its code does not set non-essential cookies or use localStorage or sessionStorage.',
          'The theme control changes the appearance only for the current page session. The site does not store that preference between visits.',
        ],
      },
      {
        id: 'changes',
        title: 'Policy changes',
        paragraphs: [
          'VANTAM may update this policy when its services, providers, legal obligations, or website processing change.',
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
    summary: 'Ця політика пояснює, які персональні дані обробляє VANTAM, навіщо ми це робимо, які провайдери нас підтримують, як довго ми зберігаємо дані та які права ви маєте.',
    lastUpdatedLabel: 'Оновлено',
    tocLabel: 'На цій сторінці',
    backHomeLabel: 'Повернутися на головну',
    themeToggleLightLabel: 'Увімкнути світлу тему',
    themeToggleDarkLabel: 'Увімкнути темну тему',
    contactLead: 'Питання або запит щодо конфіденційності?',
    contactTitle: 'Зв’яжіться з VANTAM',
    contactSummary: `Напишіть на ${BUSINESS.publicEmail}, якщо маєте питання щодо конфіденційності, хочете скористатися правом на захист даних або повідомити про проблему.`,
    contactNote: 'Не надсилайте паспорти, банківські документи, дані про здоров’я, документи гарантів або інші чутливі файли через відкриту форму чи звичайне листування у WhatsApp. Якщо документи знадобляться пізніше, VANTAM організує належний спосіб передачі.',
    footerNote: 'Ця політика описує поточну форму запиту та канали зв’язку. VANTAM оновить її, якщо обробка даних зміниться.',
    emailLabel: 'Електронна пошта',
    phoneLabel: 'Телефон',
    whatsappLabel: 'WhatsApp Business',
    sections: [
      {
        id: 'who-controls',
        title: 'Хто контролює ваші дані',
        paragraphs: [
          `VANTAM Services є контролером персональних даних, описаних у цій політиці. VANTAM Services є нідерландською eenmanszaak, зареєстрованою в Торговій палаті Нідерландів за номером KvK ${BUSINESS.kvkNumber}.`,
          `З питань конфіденційності пишіть на ${BUSINESS.publicEmail}.`,
        ],
      },
      {
        id: 'data-collected',
        title: 'Що збирає контактна форма',
        paragraphs: [
          'Відкрита форма призначена для мінімального початкового запиту. Вона не приймає файли та не створює договору чи платіжного зобов’язання.',
        ],
        bullets: [
          'ім’я, адреса електронної пошти, тип запиту та повідомлення',
          'мова та шлях сторінки, з якої ви надіслали форму',
          'якщо вказано: аудиторія, запланована дата переїзду, місто або регіон, діапазон бюджету на житло, статус ситуації, контекст щодо гаранта та потрібна допомога',
          'версія Політики конфіденційності та час підтвердження ознайомлення',
          'статус обробки, час створення, час останнього змістовного контакту та запланований час видалення',
          'псевдонімний ідентифікатор обмеження частоти запитів, часове вікно, кількість запитів і час завершення дії для запобігання зловживанням',
        ],
      },
      {
        id: 'form-flow',
        title: 'Як працює контактна форма',
        paragraphs: [
          'Ваш браузер надсилає форму до Next.js API, що працює на Vercel. Сервер перевіряє запит, обмежує зловживання, мінімізує надіслані дані та зберігає прийнятий запит у Supabase PostgreSQL.',
          'Браузер не може записувати дані безпосередньо до Supabase. Привілейовані облікові дані залишаються на сервері, а публічний доступ до бази даних обмежено. Повні дані форми не надсилаються через Resend і не доставляються автоматично до Gmail.',
          'Gmail використовується лише для подальшого листування електронною поштою. WhatsApp є окремим необов’язковим каналом, який ви обираєте самостійно.',
        ],
      },
      {
        id: 'purposes',
        title: 'Цілі та правові підстави',
        paragraphs: [
          'Правова підстава залежить від мети обробки. Обов’язковий прапорець Політики конфіденційності підтверджує, що ви прочитали цю політику; він не є правовою підставою для всієї обробки.',
        ],
        bullets: [
          'відповідь на запити та виконання кроків, які ви просите зробити до можливого укладення договору',
          'законні інтереси VANTAM щодо безпеки сайту, запобігання зловживанням, адміністрування запитів і надійної роботи',
          'виконання договору після початку співпраці',
          'виконання застосовних податкових, бухгалтерських, облікових або інших юридичних обов’язків',
          'згода лише тоді, коли окрема діяльність прямо ґрунтується на згоді',
        ],
      },
      {
        id: 'contact-channels',
        title: 'Електронна пошта, телефон і WhatsApp',
        paragraphs: [
          'Ви можете звернутися до VANTAM електронною поштою, телефоном або через WhatsApp Business. Листування електронною поштою обробляється через Gmail. WhatsApp є необов’язковим стороннім сервісом WhatsApp і Meta, тому при його використанні діють їхні правила конфіденційності.',
        ],
        bullets: [
          `Електронна пошта: ${BUSINESS.publicEmail}`,
          `Телефон: ${BUSINESS.phoneDisplayNumber}`,
          `WhatsApp Business: ${BUSINESS.whatsappDisplayNumber}`,
        ],
      },
      {
        id: 'recipients',
        title: 'Постачальники послуг та інші отримувачі',
        paragraphs: [
          'VANTAM обмежує доступ особами та провайдерами, яким дані потрібні для описаних вище цілей.',
        ],
        bullets: [
          'Vercel як провайдер хостингу сайту та серверного середовища може обробляти технічну інформацію про запити й роботу системи',
          'Supabase як провайдер контактної бази PostgreSQL зберігає прийняті запити з форми та записи обмеження частоти',
          'Google як провайдер Gmail обробляє подальше листування електронною поштою',
          'WhatsApp і Meta обробляють повідомлення, коли ви обираєте WhatsApp',
          'професійні радники, бухгалтери, суди, регулятори або державні органи, якщо доступ потрібен або передбачений законом',
        ],
      },
      {
        id: 'transfers',
        title: 'Міжнародна обробка',
        paragraphs: [
          'VANTAM не стверджує, що всі дані залишаються виключно в Європейському Союзі. Провайдери та їхні субпроцесори можуть обробляти дані або отримувати до них доступ у різних країнах.',
          'Застосовні гарантії залежать від провайдера, місця обробки та його чинних офіційних умов. За потреби це можуть бути рішення про належний рівень захисту або договірні гарантії. Ця політика не стверджує, що VANTAM підписала конкретну угоду про обробку даних або стандартні договірні положення, якщо це не було перевірено.',
        ],
      },
      {
        id: 'retention',
        title: 'Як довго зберігаються дані',
        paragraphs: [
          'Запити осіб, які не стали клієнтами, можуть зберігатися до 12 місяців після останнього змістовного контакту. Видалення є операційним процесом і може не відбутися точно в момент завершення строку зберігання.',
        ],
        bullets: [
          'псевдонімні записи обмеження частоти зберігаються лише протягом короткого операційного періоду',
          'електронні листи, повідомлення WhatsApp і клієнтські записи зберігаються лише стільки, скільки обґрунтовано потрібно для комунікації, послуг, спорів і застосовних юридичних обов’язків',
          'записи можуть бути видалені раніше, якщо вони більше не потрібні, або зберігатися довше, якщо цього вимагає застосовний закон чи обґрунтований спір',
        ],
      },
      {
        id: 'security',
        title: 'Безпека та чутливі документи',
        paragraphs: [
          'VANTAM застосовує технічні та організаційні заходи для зменшення ризику, зокрема серверну перевірку, перевірку джерела запиту, обмеження розміру, захист від зловживань, обмежений доступ до бази даних і серверні облікові дані. Жодна система не може гарантувати абсолютну безпеку.',
          'Контактна база не зберігає необроблені IP-адреси для обмеження частоти. Перед збереженням сервер перетворює дійсну IP-адресу клієнта на незворотний ідентифікатор, створений за допомогою HMAC.',
          'Не надсилайте паспорти, банківські документи, дані про здоров’я, документи гарантів або інші чутливі файли через відкриту форму чи звичайне листування у WhatsApp.',
        ],
      },
      {
        id: 'rights',
        title: 'Ваші права на захист даних',
        paragraphs: [
          'Залежно від обставин Загальний регламент про захист даних надає вам права на доступ, виправлення, видалення, обмеження, заперечення та перенесення даних, де це застосовно. Якщо обробка ґрунтується на згоді, ви можете відкликати її будь-коли без впливу на законність попередньої обробки.',
          `Надішліть запит на ${BUSINESS.publicEmail}. VANTAM може попросити інформацію, яка обґрунтовано потрібна для підтвердження вашої особи. Ви також можете подати скаргу до Autoriteit Persoonsgegevens, нідерландського органу із захисту даних.`,
        ],
      },
      {
        id: 'automated',
        title: 'Автоматизоване прийняття рішень',
        paragraphs: [
          'Сайт не приймає рішень із юридичними або подібно значущими наслідками виключно на основі автоматизованої обробки.',
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies, аналітика та сховище браузера',
        paragraphs: [
          'Поточний сайт не використовує аналітику, рекламу чи поведінкове відстеження. Його код не встановлює необов’язкові cookies і не використовує localStorage або sessionStorage.',
          'Перемикач теми змінює вигляд лише протягом поточного сеансу сторінки. Сайт не зберігає цей вибір між відвідуваннями.',
        ],
      },
      {
        id: 'changes',
        title: 'Зміни політики',
        paragraphs: [
          'VANTAM може оновлювати цю політику, коли змінюються послуги, провайдери, юридичні обов’язки або обробка даних на сайті.',
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
    summary: 'Эта политика объясняет, какие персональные данные обрабатывает VANTAM, зачем мы это делаем, какие провайдеры нас поддерживают, как долго мы храним данные и какие права у вас есть.',
    lastUpdatedLabel: 'Обновлено',
    tocLabel: 'На этой странице',
    backHomeLabel: 'Вернуться на главную',
    themeToggleLightLabel: 'Включить светлую тему',
    themeToggleDarkLabel: 'Включить тёмную тему',
    contactLead: 'Вопрос или запрос о конфиденциальности?',
    contactTitle: 'Свяжитесь с VANTAM',
    contactSummary: `Напишите на ${BUSINESS.publicEmail}, если у вас есть вопрос о конфиденциальности, вы хотите воспользоваться правом на защиту данных или сообщить о проблеме.`,
    contactNote: 'Не отправляйте паспорта, банковские документы, данные о здоровье, документы гарантов или другие чувствительные файлы через открытую форму или обычную переписку в WhatsApp. Если документы понадобятся позже, VANTAM организует подходящий способ передачи.',
    footerNote: 'Эта политика описывает текущую форму запроса и каналы связи. VANTAM обновит её, если обработка данных изменится.',
    emailLabel: 'Электронная почта',
    phoneLabel: 'Телефон',
    whatsappLabel: 'WhatsApp Business',
    sections: [
      {
        id: 'who-controls',
        title: 'Кто контролирует ваши данные',
        paragraphs: [
          `VANTAM Services является контролером персональных данных, описанных в этой политике. VANTAM Services является нидерландской eenmanszaak, зарегистрированной в Торговой палате Нидерландов под номером KvK ${BUSINESS.kvkNumber}.`,
          `По вопросам конфиденциальности пишите на ${BUSINESS.publicEmail}.`,
        ],
      },
      {
        id: 'data-collected',
        title: 'Что собирает контактная форма',
        paragraphs: [
          'Открытая форма предназначена для минимального первоначального запроса. Она не принимает файлы и не создаёт договор или платёжное обязательство.',
        ],
        bullets: [
          'имя, адрес электронной почты, тип запроса и сообщение',
          'язык и путь страницы, с которой вы отправили форму',
          'если указано: аудитория, планируемая дата переезда, город или регион, диапазон бюджета на жильё, статус ситуации, контекст по гаранту и требуемая помощь',
          'версия Политики конфиденциальности и время подтверждения ознакомления',
          'статус обработки, время создания, время последнего содержательного контакта и запланированное время удаления',
          'псевдонимный идентификатор ограничения частоты запросов, временное окно, количество запросов и время истечения для предотвращения злоупотреблений',
        ],
      },
      {
        id: 'form-flow',
        title: 'Как работает контактная форма',
        paragraphs: [
          'Ваш браузер отправляет форму в Next.js API, работающий на Vercel. Сервер проверяет запрос, ограничивает злоупотребления, минимизирует отправленные данные и сохраняет принятый запрос в Supabase PostgreSQL.',
          'Браузер не может записывать данные напрямую в Supabase. Привилегированные учётные данные остаются на сервере, а публичный доступ к базе данных ограничен. Полные данные формы не отправляются через Resend и не доставляются автоматически в Gmail.',
          'Gmail используется только для последующей переписки по электронной почте. WhatsApp является отдельным необязательным каналом, который вы выбираете самостоятельно.',
        ],
      },
      {
        id: 'purposes',
        title: 'Цели и правовые основания',
        paragraphs: [
          'Правовое основание зависит от цели обработки. Обязательный флажок Политики конфиденциальности подтверждает, что вы прочитали эту политику; он не является правовым основанием для всей обработки.',
        ],
        bullets: [
          'ответ на запросы и выполнение шагов, которые вы просите предпринять до возможного заключения договора',
          'законные интересы VANTAM в безопасности сайта, предотвращении злоупотреблений, администрировании запросов и надёжной работе',
          'исполнение договора после начала сотрудничества',
          'выполнение применимых налоговых, бухгалтерских, учётных или других юридических обязанностей',
          'согласие только тогда, когда отдельная деятельность прямо основана на согласии',
        ],
      },
      {
        id: 'contact-channels',
        title: 'Электронная почта, телефон и WhatsApp',
        paragraphs: [
          'Вы можете обратиться в VANTAM по электронной почте, телефону или через WhatsApp Business. Переписка по электронной почте обрабатывается через Gmail. WhatsApp является необязательным сторонним сервисом WhatsApp и Meta, поэтому при его использовании действуют их правила конфиденциальности.',
        ],
        bullets: [
          `Электронная почта: ${BUSINESS.publicEmail}`,
          `Телефон: ${BUSINESS.phoneDisplayNumber}`,
          `WhatsApp Business: ${BUSINESS.whatsappDisplayNumber}`,
        ],
      },
      {
        id: 'recipients',
        title: 'Поставщики услуг и другие получатели',
        paragraphs: [
          'VANTAM ограничивает доступ лицами и провайдерами, которым данные нужны для описанных выше целей.',
        ],
        bullets: [
          'Vercel как провайдер хостинга сайта и серверной среды может обрабатывать техническую информацию о запросах и работе системы',
          'Supabase как провайдер контактной базы PostgreSQL хранит принятые запросы из формы и записи ограничения частоты',
          'Google как провайдер Gmail обрабатывает последующую переписку по электронной почте',
          'WhatsApp и Meta обрабатывают сообщения, когда вы выбираете WhatsApp',
          'профессиональные консультанты, бухгалтеры, суды, регуляторы или государственные органы, если доступ необходим или предусмотрен законом',
        ],
      },
      {
        id: 'transfers',
        title: 'Международная обработка',
        paragraphs: [
          'VANTAM не утверждает, что все данные остаются исключительно в Европейском союзе. Провайдеры и их субпроцессоры могут обрабатывать данные или получать к ним доступ в разных странах.',
          'Применимые гарантии зависят от провайдера, места обработки и его действующих официальных условий. При необходимости это могут быть решения об адекватности или договорные гарантии. Эта политика не утверждает, что VANTAM подписала конкретное соглашение об обработке данных или стандартные договорные положения, если это не было проверено.',
        ],
      },
      {
        id: 'retention',
        title: 'Как долго хранятся данные',
        paragraphs: [
          'Запросы лиц, которые не стали клиентами, могут храниться до 12 месяцев после последнего содержательного контакта. Удаление является операционным процессом и может не произойти точно в момент окончания срока хранения.',
        ],
        bullets: [
          'псевдонимные записи ограничения частоты хранятся только в течение короткого операционного периода',
          'электронные письма, сообщения WhatsApp и клиентские записи хранятся только столько, сколько обоснованно необходимо для коммуникации, услуг, споров и применимых юридических обязанностей',
          'записи могут быть удалены раньше, если они больше не нужны, или храниться дольше, если этого требует применимый закон или обоснованный спор',
        ],
      },
      {
        id: 'security',
        title: 'Безопасность и чувствительные документы',
        paragraphs: [
          'VANTAM применяет технические и организационные меры для снижения риска, включая серверную проверку, проверку источника запроса, ограничения размера, защиту от злоупотреблений, ограниченный доступ к базе данных и серверные учётные данные. Ни одна система не может гарантировать абсолютную безопасность.',
          'Контактная база не хранит необработанные IP-адреса для ограничения частоты. Перед сохранением сервер преобразует действительный IP-адрес клиента в необратимый идентификатор, созданный с помощью HMAC.',
          'Не отправляйте паспорта, банковские документы, данные о здоровье, документы гарантов или другие чувствительные файлы через открытую форму или обычную переписку в WhatsApp.',
        ],
      },
      {
        id: 'rights',
        title: 'Ваши права на защиту данных',
        paragraphs: [
          'В зависимости от обстоятельств Общий регламент по защите данных предоставляет вам права на доступ, исправление, удаление, ограничение, возражение и переносимость данных, где это применимо. Если обработка основана на согласии, вы можете отозвать его в любое время без влияния на законность предыдущей обработки.',
          `Отправьте запрос на ${BUSINESS.publicEmail}. VANTAM может запросить информацию, которая обоснованно необходима для подтверждения вашей личности. Вы также можете подать жалобу в Autoriteit Persoonsgegevens, нидерландский орган по защите данных.`,
        ],
      },
      {
        id: 'automated',
        title: 'Автоматизированное принятие решений',
        paragraphs: [
          'Сайт не принимает решений с юридическими или аналогично значимыми последствиями исключительно на основе автоматизированной обработки.',
        ],
      },
      {
        id: 'cookies',
        title: 'Cookies, аналитика и хранилище браузера',
        paragraphs: [
          'Текущий сайт не использует аналитику, рекламу или поведенческое отслеживание. Его код не устанавливает необязательные cookies и не использует localStorage или sessionStorage.',
          'Переключатель темы меняет вид только в рамках текущего сеанса страницы. Сайт не сохраняет этот выбор между посещениями.',
        ],
      },
      {
        id: 'changes',
        title: 'Изменения политики',
        paragraphs: [
          'VANTAM может обновлять эту политику, когда меняются услуги, провайдеры, юридические обязанности или обработка данных на сайте.',
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
