import {DEFAULT_LOCALE} from './lib/locales';
import type {Locale} from './lib/locales';
export {DEFAULT_LOCALE, LOCALES as SUPPORTED_LOCALES} from './lib/locales';

export type Language = Locale;

export type RegionCode = 'nl';

export interface RegionalProfile {
  code: RegionCode;
  name: Record<Language, string>;
  defaultLocale: Language;
}

export const REGION_PROFILES: RegionalProfile[] = [
  {
    code: 'nl',
    name: {
      uk: 'Нідерланди',
      ru: 'Нидерланды',
      en: 'The Netherlands',
    },
    defaultLocale: 'en',
  },
];

export function localize<T>(values: Record<Language, T>, language: Language) {
  return values[language];
}

export interface TranslationMatrix {
  navTitle: string;
  navSub: string;
  langLabel: string;
  heroBadge: string;
  heroHeadline: string;
  heroSub: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  whyTitle: string;
  whySub: string;
  roleTitle: string;
  roleDesc: string;
  antiRoleTitle: string;
  antiRoleDesc: string;
  calculatorTitle: string;
  calculatorSub: string;
  calculatorInfo: string;
  checklistTitle: string;
  checklistSub: string;
  faqTitle: string;
  faqSub: string;
  pdfExportTitle: string;
  pdfExportDesc: string;
  pdfBtn: string;

  // New localized labels & controls
  statusBanner: string;
  statusScope: string;
  navWhy: string;
  navServices: string;
  navSingleServices: string;
  navPackages: string;
  navCalculator: string;
  navChecklist: string;
  navTestimonials: string;
  navFaq: string;
  navContact: string;

  metric1Count: string;
  metric1Text: string;
  metric2Count: string;
  metric2Text: string;
  metric3Count: string;
  metric3Text: string;
  metric4Count: string;
  metric4Text: string;

  servicesTitle: string;
  servicesSub: string;
  servicesFooter: string;

  singleTitle: string;
  singleSub: string;
  singlePriceTag: string;
  singleBadge: string;
  singleCta: string;

  consultTitle: string;
  consultSub: string;
  consultBadge: string;
  consultResultLabel: string;
  consultNoteLabel: string;

  calcSidebarTitle: string;
  calcAlternative: string;
  calcPackageLabel: string;
  calcPackageDesc: string;
  calcSavingTag: string;
  calcNoRiskSelected: string;
  calcFooterNotice: string;

  calcRiskLow: string;
  calcRiskMedium: string;
  calcRiskHigh: string;
  calcRiskLowDesc: string;
  calcRiskMediumDesc: string;
  calcRiskHighDesc: string;
  calcRiskTextLabel: string;

  pkgGridTitle: string;
  pkgGridSub: string;
  pkgIdealTitle: string;
  pkgScopeTitle: string;
  pkgLimitsTitle: string;

  checklistProgressLabel: string;
  checklistPrepTab: string;
  checklistPrepDesc: string;
  checklistArrivalTab: string;
  checklistArrivalDesc: string;
  checklistSettleTab: string;
  checklistSettleDesc: string;
  checklistVerifyTab: string;
  checklistVerifyDesc: string;

  testimonialsTitle: string;
  testimonialsSub: string;
  testimonialsVerified: string;

  contactTitle: string;
  contactSub: string;
  contactNameLabel: string;
  contactEmailLabel: string;
  contactTypeLabel: string;
  contactTypePlaceholder: string;
  contactTypeOpt1: string;
  contactTypeOpt2: string;
  contactTypeOpt3: string;
  contactTypeOpt4: string;
  contactMessageLabel: string;
  contactConsent: string;
  contactSubmitBtn: string;
  contactSending: string;
  contactSuccessTitle: string;
  contactSuccessDesc: string;
  contactFailBtn: string;

  modalTitle: string;
  modalDesc: string;
  modalOfferNo: string;
  modalValidity: string;
  modalClientProfile: string;
  modalAdvisorDesc: string;
  modalTargetPlan: string;
  modalPrintBtn: string;
  modalCloseBtn: string;

  footerSub: string;
  footerContact: string;

  // Additional helper UI strings
  housingDisclaimerTitle: string;
  housingDisclaimerText: string;

  // Selector block
  selectorTitle: string;
  selectorSub: string;
  selectorSingleTitle: string;
  selectorSingleDesc: string;
  selectorPackageTitle: string;
  selectorPackageDesc: string;
  selectorConsultTitle: string;
  selectorConsultDesc: string;
}

export const DICTIONARY: Record<Language, TranslationMatrix> = {
  uk: {
    navTitle: "VANTAM",
    navSub: "Практична підтримка до, під час і після приїзду",
    langLabel: "Мова",
    heroBadge: "Підтримка до, під час і після приїзду",
    heroHeadline: "Практична підтримка для тих, хто переїжджає до Нідерландів",
    heroSub: "До приїзду, під час пошуку житла та оренди, і після приїзду для практичного облаштування. Чіткі наступні кроки без зайвого шуму.",
    heroCtaPrimary: "Планую переїзд",
    heroCtaSecondary: "Подивитися послуги",
    whyTitle: "Чому до VANTAM звертаються",
    whySub: "Ви отримуєте один локальний контакт, пояснення простою мовою та зрозумілий наступний крок до, під час або після приїзду без перебільшень і тиску.",
    roleTitle: "Локальний координатор практичних кроків",
    roleDesc: "Ми готуємо документи, пояснюємо листи й допомагаємо пройти житлові, доїздові та післяприїзні практичні кроки без зайвої плутанини.",
    antiRoleTitle: "Що VANTAM не робить",
    antiRoleDesc: "VANTAM не є юридичною фірмою, фінансовим консультантом, страховим брокером, агентством нерухомості чи державним органом. Ми пояснюємо процес, готуємо документи та допомагаємо з комунікацією.",
    calculatorTitle: "Скільки може коштувати затримка",
    calculatorSub: "Порівняйте типові витрати переїзду й облаштування з вартістю підтримки VANTAM і побачте, де виникає ризик зайвих витрат.",
    calculatorInfo: "Оберіть сценарії, які стосуються вашої ситуації, щоб побачити орієнтовну суму.",
    checklistTitle: "Ваш план переїзду",
    checklistSub: "Перевірте, що вже зроблено, і що ще потребує уваги.",
    faqTitle: "Поширені запитання",
    faqSub: "Чіткі відповіді про обсяг роботи, строки, оплату, повернення коштів, підтримку до, під час і після приїзду та що відбувається після звернення.",
    pdfExportTitle: "Зберегти обрану пропозицію як PDF",
    pdfExportDesc: "Створіть зрозумілий PDF з обраною пропозицією, її складом та межами роботи.",
    pdfBtn: "Експортувати PDF",

    statusBanner: "Підтримка до, під час і після приїзду",
    statusScope: "Житло, переїзд і практичне облаштування",
    navWhy: "Чому ми",
    navServices: "Послуги",
    navSingleServices: "Окремі послуги",
    navPackages: "Пакети",
    navCalculator: "Калькулятор",
    navChecklist: "Планер",
    navTestimonials: "Ситуації",
    navFaq: "FAQ",
    navContact: "Контакти",

    metric1Count: "3",
    metric1Text: "мови на сайті: українська, російська та англійська",
    metric2Count: "3",
    metric2Text: "способи почати: консультація, окрема послуга або пакет",
    metric3Count: "1",
    metric3Text: "форма для всіх звернень",
    metric4Count: "1",
    metric4Text: "контекст запиту підтягується у форму",

    servicesTitle: "Підтримка для студентського переїзду",
    servicesSub: "Публічна пропозиція розділена на орієнтацію, основний пакет і окрему житлову активацію. Остаточний обсяг і ціна підтверджуються письмово.",
    servicesFooter: "Ціни та склад послуг показані у вибраній мові",

    singleTitle: "Житлова активація та окремі послуги",
    singleSub: "Оберіть окрему послугу, якщо потрібен один конкретний крок. Житлові варіанти відокремлені від основного пакета.",
    singlePriceTag: "Фіксована ціна",
    singleBadge: "Один крок",
    singleCta: "Обрати послугу",

    consultTitle: "Консультації",
    consultSub: "Консультація зазвичай є першим кроком. Обсяг, тривалість, ціна і час підтверджуються письмово перед бронюванням.",
    consultBadge: "Початок тут",
    consultResultLabel: "Після дзвінка у вас буде:",
    consultNoteLabel: "Найкраще для:",

    calcSidebarTitle: "Що може коштувати затримка",
    calcAlternative: "Що допомога може зменшити",
    calcPackageLabel: "Пакет VANTAM First Year",
    calcPackageDesc: "Покриває головні кроки першого року: реєстрацію, BSN, DigiD, банк, страхування, GP і листи.",
    calcSavingTag: "Порівняння для планування",
    calcNoRiskSelected: "Оберіть сценарії, щоб порівняти можливі витрати з підтримкою",
    calcFooterNotice: "Це приклад для планування, а не офіційний кошторис.",

    calcRiskLow: "Невелика сума обраних сценаріїв",
    calcRiskMedium: "Помітна сума обраних сценаріїв",
    calcRiskHigh: "Висока сума обраних сценаріїв",
    calcRiskLowDesc: "Сценарії мають нижчу орієнтовну вартість, але кожен крок усе одно варто перевірити.",
    calcRiskMediumDesc: "Кілька сценаріїв уже можуть помітно вплинути на бюджет. Краще звірити строки й документи заздалегідь.",
    calcRiskHighDesc: "Разом ці сценарії можуть стати дорогими. Корисно розібрати їх окремо і скласти план дій.",
    calcRiskTextLabel: "Обрані сценарії:",

    pkgGridTitle: "Порівняйте пакети",
    pkgGridSub: "VANTAM Start, VANTAM First Year і VANTAM Continue покривають різні рівні допомоги. Остаточний обсяг, ціна, строки і погоджені зовнішні витрати підтверджуються письмово.",
    pkgIdealTitle: "Найкраще для:",
    pkgScopeTitle: "Що входить у пакет:",
    pkgLimitsTitle: "Що не входить:",

    checklistProgressLabel: "Ваш прогрес:",
    checklistPrepTab: "1. Оцінити",
    checklistPrepDesc: "Оцінка",
    checklistArrivalTab: "2. Скласти карту",
    checklistArrivalDesc: "Карта",
    checklistSettleTab: "3. Дія і координація",
    checklistSettleDesc: "Дія",
    checklistVerifyTab: "4. Перевірити і продовжити",
    checklistVerifyDesc: "Продовження",

    testimonialsTitle: "Типові ситуації",
    testimonialsSub: "Короткі приклади звернень, з якими люди приходять до VANTAM.",
    testimonialsVerified: "Приклад ситуації",

    contactTitle: "Розкажіть, що вам потрібно",
    contactSub: "Ми переглядаємо звернення і відповідаємо на вказану пошту з наступними кроками.",
    contactNameLabel: "Ваше ім'я",
    contactEmailLabel: "Адреса електронної пошти",
    contactTypeLabel: "З чим потрібна допомога?",
    contactTypePlaceholder: "Оберіть потрібний шлях...",
    contactTypeOpt1: "Потрібна орієнтація",
    contactTypeOpt2: "Потрібен основний пакет",
    contactTypeOpt3: "Потрібна житлова активація",
    contactTypeOpt4: "Партнерський запит",
    contactMessageLabel: "Коротко опишіть ситуацію",
    contactConsent: "Я ознайомився(-лася) з Політикою конфіденційності та розумію, як VANTAM обробляє мій запит.",
    contactSubmitBtn: "Надіслати запит",
    contactSending: "Надсилаємо ваш запит...",
    contactSuccessTitle: "Запит надіслано",
    contactSuccessDesc: "Дякуємо. Ми отримали ваш запит і відповімо на електронну адресу, яку ви вказали, щодо можливих наступних кроків.",
    contactFailBtn: "Надіслати ще один запит",

    modalTitle: "PDF обраної пропозиції",
    modalDesc: "Перевірте склад і межі пропозиції, а потім збережіть сторінку як PDF.",
    modalOfferNo: "OFFER NO",
    modalValidity: "VALIDITY",
    modalClientProfile: "Для кого:",
    modalAdvisorDesc: "Короткий огляд обраної пропозиції VANTAM.",
    modalTargetPlan: "Обрана пропозиція:",
    modalPrintBtn: "Роздрукувати PDF",
    modalCloseBtn: "Закрити",

    footerSub: "VANTAM надає практичну підтримку для студентів, які переїжджають до Нідерландів, пояснює процеси та допомагає з комунікацією. Ми не замінюємо ліцензовані юридичні, фінансові, страхові чи ріелторські послуги.",
    footerContact: "Контакти:",

    housingDisclaimerTitle: "Межі роботи VANTAM",
    housingDisclaimerText: "VANTAM не надає юридичних, фінансових, страхових чи ріелторських послуг. Ми допомагаємо з поясненням, підготовкою, плануванням кроків і професійною комунікацією.",

    selectorTitle: "Оберіть свій шлях",
    selectorSub: "Кожен варіант веде до відповідного розділу і підставляє потрібний контекст у форму.",
    selectorSingleTitle: "Оцінюю наступний крок",
    selectorSingleDesc: "Перейдіть до орієнтації й зафіксуйте поточну ситуацію.",
    selectorPackageTitle: "Потрібна житлова активація",
    selectorPackageDesc: "Перейдіть до житлового шляху і підставте відповідний контекст у форму.",
    selectorConsultTitle: "Потрібен основний пакет",
    selectorConsultDesc: "Перейдіть до VANTAM Start або VANTAM First Year.",
  },
  ru: {
    navTitle: "VANTAM",
    navSub: "Практическая поддержка до, во время и после приезда",
    langLabel: "Язык",
    heroBadge: "Поддержка до, во время и после приезда",
    heroHeadline: "Практическая поддержка для тех, кто переезжает в Нидерланды",
    heroSub: "До приезда, во время поиска жилья и аренды, и после приезда для практического обустройства. Понятные следующие шаги без лишнего шума.",
    heroCtaPrimary: "Планирую переезд",
    heroCtaSecondary: "Посмотреть услуги",
    whyTitle: "Почему обращаются в VANTAM",
    whySub: "Вы получаете один локальный контакт, объяснения простым языком и понятный следующий шаг до, во время или после приезда без давления и громких обещаний.",
    roleTitle: "Локальный координатор практических шагов",
    roleDesc: "Мы готовим документы, объясняем письма и помогаем пройти жилищные, до-переездные и после-приездные практические шаги без лишней путаницы.",
    antiRoleTitle: "Чего VANTAM не делает",
    antiRoleDesc: "VANTAM не является юридической фирмой, финансовым консультантом, страховым брокером, агентством недвижимости или государственным органом. Мы объясняем процесс, готовим документы и помогаем с коммуникацией.",
    calculatorTitle: "Сколько может стоить задержка",
    calculatorSub: "Сравните типичные расходы при переезде и обустройстве со стоимостью поддержки VANTAM и увидьте, где возникает риск лишних затрат.",
    calculatorInfo: "Выберите сценарии, которые относятся к вашей ситуации, чтобы увидеть ориентировочную сумму.",
    checklistTitle: "Ваш план переезда",
    checklistSub: "Проверьте, что уже сделано, и что ещё требует внимания.",
    faqTitle: "Часто задаваемые вопросы",
    faqSub: "Понятные ответы об объёме работы, сроках, оплате, возвратах, поддержке до, во время и после приезда и том, что происходит после обращения.",
    pdfExportTitle: "Сохранить выбранное предложение в PDF",
    pdfExportDesc: "Создайте понятный PDF с выбранным предложением, его составом и границами работы.",
    pdfBtn: "Экспортировать PDF",

    statusBanner: "Поддержка до, во время и после приезда",
    statusScope: "Жильё, переезд и практическое обустройство",
    navWhy: "Почему мы",
    navServices: "Услуги",
    navSingleServices: "Отдельные услуги",
    navPackages: "Пакеты",
    navCalculator: "Калькулятор",
    navChecklist: "Планер",
    navTestimonials: "Ситуации",
    navFaq: "FAQ",
    navContact: "Контакты",

    metric1Count: "3",
    metric1Text: "языка на сайте: украинский, русский и английский",
    metric2Count: "3",
    metric2Text: "способа начать: консультация, отдельная услуга или пакет",
    metric3Count: "1",
    metric3Text: "форма для всех обращений",
    metric4Count: "1",
    metric4Text: "контекст запроса подставляется в форму",

    servicesTitle: "Поддержка студенческого переезда",
    servicesSub: "Публичная линейка разделена на ориентацию, основной пакет и отдельную жилищную активацию. Итоговый объём и цена подтверждаются письменно.",
    servicesFooter: "Цены и состав услуг показаны на выбранном языке",

    singleTitle: "Жилищная активация и отдельные услуги",
    singleSub: "Выберите отдельную услугу, если нужен один конкретный шаг. Жилищные варианты отделены от основного пакета.",
    singlePriceTag: "Фиксированная цена",
    singleBadge: "Один шаг",
    singleCta: "Выбрать услугу",

    consultTitle: "Консультации",
    consultSub: "Консультация обычно является первым шагом. Объём, длительность, цена и время подтверждаются письменно до бронирования.",
    consultBadge: "Начать здесь",
    consultResultLabel: "После звонка у вас будет:",
    consultNoteLabel: "Лучше всего для:",

    calcSidebarTitle: "Что может стоить задержка",
    calcAlternative: "Что может снизить поддержка",
    calcPackageLabel: "Пакет VANTAM First Year",
    calcPackageDesc: "Покрывает главные шаги первого года: регистрацию, BSN, DigiD, банк, страховку, GP и письма.",
    calcSavingTag: "Сравнение для планирования",
    calcNoRiskSelected: "Выберите сценарии, чтобы сравнить возможные расходы с поддержкой",
    calcFooterNotice: "Это пример для планирования, а не официальный расчёт.",

    calcRiskLow: "Небольшая сумма выбранных сценариев",
    calcRiskMedium: "Заметная сумма выбранных сценариев",
    calcRiskHigh: "Высокая сумма выбранных сценариев",
    calcRiskLowDesc: "Сценарии имеют более низкую ориентировочную стоимость, но каждый шаг всё равно стоит проверить.",
    calcRiskMediumDesc: "Несколько сценариев уже могут заметно повлиять на бюджет. Лучше сверить сроки и документы заранее.",
    calcRiskHighDesc: "В сумме эти сценарии могут оказаться дорогими. Полезно разобрать их по отдельности и составить план действий.",
    calcRiskTextLabel: "Выбранные сценарии:",

    pkgGridTitle: "Сравните пакеты",
    pkgGridSub: "VANTAM Start, VANTAM First Year и VANTAM Continue покрывают разные уровни помощи. Итоговый объём, цена, сроки и согласованные внешние расходы подтверждаются письменно.",
    pkgIdealTitle: "Лучше всего для:",
    pkgScopeTitle: "Что входит в пакет:",
    pkgLimitsTitle: "Что не входит:",

    checklistProgressLabel: "Ваш прогресс:",
    checklistPrepTab: "1. Оценить",
    checklistPrepDesc: "Оценка",
    checklistArrivalTab: "2. Составить карту",
    checklistArrivalDesc: "Карта",
    checklistSettleTab: "3. Действовать и координировать",
    checklistSettleDesc: "Действие",
    checklistVerifyTab: "4. Проверить и продолжить",
    checklistVerifyDesc: "Продолжение",

    testimonialsTitle: "Типичные ситуации",
    testimonialsSub: "Короткие примеры обращений, с которыми люди приходят в VANTAM.",
    testimonialsVerified: "Пример ситуации",

    contactTitle: "Расскажите, что вам нужно",
    contactSub: "Мы просматриваем обращения и отвечаем на указанную почту с следующими шагами.",
    contactNameLabel: "Ваше имя",
    contactEmailLabel: "Адрес электронной почты",
    contactTypeLabel: "С чем нужна помощь?",
    contactTypePlaceholder: "Выберите нужный путь...",
    contactTypeOpt1: "Нужна ориентация",
    contactTypeOpt2: "Нужен основной пакет",
    contactTypeOpt3: "Нужна жилищная активация",
    contactTypeOpt4: "Партнёрский запрос",
    contactMessageLabel: "Кратко опишите ситуацию",
    contactConsent: "Я ознакомился(-лась) с Политикой конфиденциальности и понимаю, как VANTAM обрабатывает мой запрос.",
    contactSubmitBtn: "Отправить запрос",
    contactSending: "Отправляем ваш запрос...",
    contactSuccessTitle: "Запрос отправлен",
    contactSuccessDesc: "Спасибо. Мы получили ваш запрос и ответим на указанную электронную почту о возможных следующих шагах.",
    contactFailBtn: "Отправить ещё один запрос",

    modalTitle: "PDF выбранного предложения",
    modalDesc: "Проверьте состав и границы предложения, затем сохраните страницу как PDF.",
    modalOfferNo: "OFFER NO",
    modalValidity: "VALIDITY",
    modalClientProfile: "Для кого:",
    modalAdvisorDesc: "Краткий обзор выбранного предложения VANTAM.",
    modalTargetPlan: "Выбранное предложение:",
    modalPrintBtn: "Распечатать PDF",
    modalCloseBtn: "Закрыть",

    footerSub: "VANTAM даёт практическую поддержку для студентов, которые переезжают в Нидерланды, объясняет процессы и помогает с коммуникацией. Мы не заменяем лицензированные юридические, финансовые, страховые или риелторские услуги.",
    footerContact: "Контакты:",

    housingDisclaimerTitle: "Границы работы VANTAM",
    housingDisclaimerText: "VANTAM не оказывает юридических, финансовых, страховых или риелторских услуг. Мы помогаем с объяснением, подготовкой, планированием шагов и профессиональной коммуникацией.",

    selectorTitle: "Выберите свой путь",
    selectorSub: "Каждый вариант ведёт к нужному разделу и подставляет правильный контекст в форму.",
    selectorSingleTitle: "Оцениваю следующий шаг",
    selectorSingleDesc: "Перейдите к ориентации и зафиксируйте текущую ситуацию.",
    selectorPackageTitle: "Нужна жилищная активация",
    selectorPackageDesc: "Перейдите к жилищному пути и подставьте нужный контекст в форму.",
    selectorConsultTitle: "Нужен основной пакет",
    selectorConsultDesc: "Перейдите к VANTAM Start или VANTAM First Year.",
  },
  en: {
    navTitle: "VANTAM",
    navSub: "Practical support before, during and after arrival",
    langLabel: "Language",
    heroBadge: "Support before, during and after arrival",
    heroHeadline: "Practical support for students moving to the Netherlands",
    heroSub: "Before arrival, during the housing and rental process, and after arrival for practical settlement - with clear next steps and no extra noise.",
    heroCtaPrimary: "Need orientation",
    heroCtaSecondary: "See the services",
    whyTitle: "Why people come to VANTAM",
    whySub: "You get one local contact, plain-language explanations and a clear next step before, during or after arrival, without pressure or exaggerated promises.",
    roleTitle: "Local coordinator for practical steps",
    roleDesc: "We prepare documents, explain letters and help you work through housing, pre-arrival and post-arrival practical steps without unnecessary confusion.",
    antiRoleTitle: "What VANTAM does not do",
    antiRoleDesc: "VANTAM is not a law firm, financial advisor, insurance broker, real estate agency or government office. We explain the process, prepare documents and help with communication.",
    calculatorTitle: "What a delay can cost",
    calculatorSub: "Compare common relocation and setup costs with the price of support and see where extra expenses may appear.",
    calculatorInfo: "Select the scenarios that fit your situation to see an illustrative total.",
    checklistTitle: "Your relocation plan",
    checklistSub: "Check what is already done and what still needs attention.",
    faqTitle: "Frequently asked questions",
    faqSub: "Clear answers about scope, timing, payment, refunds, support before, during and after arrival, and what happens after you contact VANTAM.",
    pdfExportTitle: "Save the selected offer as PDF",
    pdfExportDesc: "Create a clear PDF with the selected offer, its scope and its limits.",
    pdfBtn: "Export PDF",

    statusBanner: "Support before, during and after arrival",
    statusScope: "Housing, moving and practical settlement",
    navWhy: "Why VANTAM",
    navServices: "Services",
    navSingleServices: "Single Services",
    navPackages: "Packages",
    navCalculator: "Calculator",
    navChecklist: "Planner",
    navTestimonials: "Situations",
    navFaq: "FAQ",
    navContact: "Contacts",

    metric1Count: "3",
    metric1Text: "languages on the site: Ukrainian, Russian and English",
    metric2Count: "3",
    metric2Text: "ways to start: consultation, single service or package",
    metric3Count: "1",
    metric3Text: "form for every enquiry",
    metric4Count: "1",
    metric4Text: "selected context is prefilled in the form",

    servicesTitle: "Student move support",
    servicesSub: "The public line is split into orientation, the main package and a separate housing activation path. Final scope and price are confirmed in writing.",
    servicesFooter: "Prices and scope are shown in the selected language",

    singleTitle: "Housing activation and single services",
    singleSub: "Choose one service when you need help with one concrete step. Housing options are separated from the main package.",
    singlePriceTag: "Fixed price",
    singleBadge: "One step",
    singleCta: "Choose service",

    consultTitle: "Consultations",
    consultSub: "A consultation is normally the first step. Scope, duration, price and timing are confirmed in writing before booking.",
    consultBadge: "Start here",
    consultResultLabel: "You leave with:",
    consultNoteLabel: "Best for:",

    calcSidebarTitle: "What a delay can cost",
    calcAlternative: "What support can reduce",
    calcPackageLabel: "VANTAM First Year package",
    calcPackageDesc: "Covers the main first-year steps: registration, BSN, DigiD, banking, insurance, GP and letters.",
    calcSavingTag: "Planning comparison",
    calcNoRiskSelected: "Select scenarios to compare possible extra costs with support",
    calcFooterNotice: "This is a planning example, not an official estimate.",

    calcRiskLow: "Low total across the selected scenarios",
    calcRiskMedium: "Notable total across the selected scenarios",
    calcRiskHigh: "High total across the selected scenarios",
    calcRiskLowDesc: "The scenarios have a relatively low illustrative cost, but each step is still worth checking.",
    calcRiskMediumDesc: "Several scenarios could already affect your budget. It helps to check timelines and documents in advance.",
    calcRiskHighDesc: "Taken together, these scenarios could become expensive. It helps to review them one by one and plan ahead.",
    calcRiskTextLabel: "Selected scenarios:",

    pkgGridTitle: "Compare the packages",
    pkgGridSub: "VANTAM Start, VANTAM First Year and VANTAM Continue cover different levels of help. Final scope, price, timing and approved external costs are confirmed in writing.",
    pkgIdealTitle: "Best for:",
    pkgScopeTitle: "Included in this package:",
    pkgLimitsTitle: "What is not included:",

    checklistProgressLabel: "Your progress:",
    checklistPrepTab: "1. Assess",
    checklistPrepDesc: "Assess",
    checklistArrivalTab: "2. Map",
    checklistArrivalDesc: "Map",
    checklistSettleTab: "3. Act & coordinate",
    checklistSettleDesc: "Act",
    checklistVerifyTab: "4. Verify & continue",
    checklistVerifyDesc: "Continue",

    testimonialsTitle: "Typical situations",
    testimonialsSub: "Short examples of the kinds of requests people bring to VANTAM.",
    testimonialsVerified: "Example situation",

    contactTitle: "Tell us what you need",
    contactSub: "We review enquiries and reply to the email address you provided with next steps.",
    contactNameLabel: "Your name",
    contactEmailLabel: "Email address",
    contactTypeLabel: "What do you need help with?",
    contactTypePlaceholder: "Select the right path...",
    contactTypeOpt1: "I need orientation",
    contactTypeOpt2: "I need the main package",
    contactTypeOpt3: "I need housing activation",
    contactTypeOpt4: "Partnership enquiry",
    contactMessageLabel: "Briefly describe your situation",
    contactConsent: "I have read the Privacy Policy and understand how VANTAM processes my enquiry.",
    contactSubmitBtn: "Send enquiry",
    contactSending: "Sending your enquiry...",
    contactSuccessTitle: "Enquiry sent",
    contactSuccessDesc: "Thanks. We received your enquiry and will reply to the email address you provided about possible next steps.",
    contactFailBtn: "Send another enquiry",

    modalTitle: "PDF for the selected offer",
    modalDesc: "Review the scope and limits, then save the page as PDF.",
    modalOfferNo: "OFFER PROSPECTUS NO",
    modalValidity: "VALID UNTIL",
    modalClientProfile: "For:",
    modalAdvisorDesc: "Short overview of the selected VANTAM offer.",
    modalTargetPlan: "Selected offer:",
    modalPrintBtn: "Print PDF",
    modalCloseBtn: "Close",

    footerSub: "VANTAM provides practical support for students moving to the Netherlands, explains the process and helps with communication. We do not replace licensed legal, financial, insurance or real-estate services.",
    footerContact: "Contact:",

    housingDisclaimerTitle: "VANTAM working boundaries",
    housingDisclaimerText: "VANTAM does not provide legal, financial, insurance or real-estate services. We help with explanations, preparation, step planning and professional communication.",

    selectorTitle: "Choose your path",
    selectorSub: "Each option leads to the right section and pre-fills the form with the matching context.",
    selectorSingleTitle: "I am assessing the next step",
    selectorSingleDesc: "Go to orientation and prefill the current situation.",
    selectorPackageTitle: "I need housing activation",
    selectorPackageDesc: "Go to the housing path and prefill the matching context.",
    selectorConsultTitle: "I need the main package",
    selectorConsultDesc: "Go to VANTAM Start or VANTAM First Year.",
  }
};

export interface AudienceFocus {
  id: string;
  title: Record<Language, string>;
  note: Record<Language, string>;
  timing: Record<Language, string>;
}

export const AUDIENCE_FOCUS: AudienceFocus[] = [
  {
    id: 'students',
    title: { uk: 'Студенти-мігранти', ru: 'Студенты-мигранты', en: 'International students' },
    note: {
      uk: 'Переїзд, житло, перші адміністративні кроки й студентські листи.',
      ru: 'Переезд, жильё, первые административные шаги и студенческие письма.',
      en: 'Move, housing, first admin steps and student letters.',
    },
    timing: {
      uk: 'Найчастіше до приїзду та в перший рік навчання.',
      ru: 'Чаще всего до приезда и в первый год учёбы.',
      en: 'Often before arrival and through the first year of study.',
    },
  },
  {
    id: 'professionals',
    title: { uk: 'Батьки та родина', ru: 'Родители и семья', en: 'Parents and family' },
    note: {
      uk: 'Більше бачення, менше сюрпризів і зрозумілий план підтримки.',
      ru: 'Больше ясности, меньше сюрпризов и понятный план поддержки.',
      en: 'More visibility, fewer surprises and a clear support plan.',
    },
    timing: {
      uk: 'До приїзду, під час заселення або в перші тижні.',
      ru: 'До приезда, во время заселения или в первые недели.',
      en: 'Before arrival, during move-in or in the first weeks.',
    },
  },
  {
    id: 'families',
    title: { uk: 'Партнерські запити', ru: 'Партнёрские запросы', en: 'Referral partners' },
    note: {
      uk: 'Швидкий і акуратний спосіб передати практичний запит.',
      ru: 'Быстрый и аккуратный способ передать практический запрос.',
      en: 'A clean way to hand over a practical request.',
    },
    timing: {
      uk: 'Коли потрібне ясне направлення запиту.',
      ru: 'Когда нужен ясный маршрут запроса.',
      en: 'When a clear referral route is needed.',
    },
  },
];

export interface SituationOption {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  target: 'consultation' | 'services' | 'packages' | 'contact';
  inquiryType: 'consultation' | 'single' | 'packages' | 'b2b';
  audienceHint: Record<Language, string>;
  statusHint: Record<Language, string>;
}

export const SITUATION_OPTIONS: SituationOption[] = [
  {
    id: 'moving',
    title: { uk: 'Я оцінюю свої наступні кроки', ru: 'Я оцениваю свои следующие шаги', en: 'I am assessing my next steps' },
    description: {
      uk: 'Почніть з орієнтації, щоб оцінити ситуацію і вибрати правильний шлях.',
      ru: 'Начните с ориентации, чтобы оценить ситуацию и выбрать правильный путь.',
      en: 'Start with an orientation to assess the situation and choose the right path.',
    },
    target: 'consultation',
    inquiryType: 'consultation',
    audienceHint: { uk: 'Переїзд ще попереду', ru: 'Переезд ещё впереди', en: 'Before arrival' },
    statusHint: { uk: 'До приїзду', ru: 'До приезда', en: 'Before arrival' },
  },
  {
    id: 'found_housing',
    title: { uk: 'Я шукаю житлову активацію', ru: 'Мне нужна жилищная активация', en: 'I need a housing activation path' },
    description: {
      uk: 'Перейдіть до житла, щоб відкрити Housing Ready або Housing Search Campaign.',
      ru: 'Перейдите к жилью, чтобы открыть Housing Ready или Housing Search Campaign.',
      en: 'Go to housing to open Housing Ready or Housing Search Campaign.',
    },
    target: 'services',
    inquiryType: 'single',
    audienceHint: { uk: 'Житловий запит', ru: 'Жилищный запрос', en: 'Housing request' },
    statusHint: { uk: 'Потрібна житлова допомога', ru: 'Нужна жилищная помощь', en: 'Housing help needed' },
  },
  {
    id: 'need_housing',
    title: { uk: 'Мені потрібна підтримка першого року', ru: 'Мне нужна поддержка первого года', en: 'I need first-year support' },
    description: {
      uk: 'Перейдіть до пакетів, щоб побачити VANTAM Start і VANTAM First Year.',
      ru: 'Перейдите к пакетам, чтобы посмотреть VANTAM Start и VANTAM First Year.',
      en: 'Go to packages to review VANTAM Start and VANTAM First Year.',
    },
    target: 'packages',
    inquiryType: 'packages',
    audienceHint: { uk: 'Після приїзду', ru: 'После приезда', en: 'After arrival' },
    statusHint: { uk: 'Вже в Нідерландах', ru: 'Уже в Нидерландах', en: 'Already in the Netherlands' },
  },
  {
    id: 'organisation',
    title: { uk: 'Я представляю партнера', ru: 'Я представляю партнёра', en: 'I represent a partner' },
    description: {
      uk: 'Перейдіть до контакту, щоб обговорити передавання звернень і співпрацю.',
      ru: 'Перейдите к контакту, чтобы обсудить передачу обращений и сотрудничество.',
      en: 'Go to contact to discuss referrals and cooperation.',
    },
    target: 'contact',
    inquiryType: 'b2b',
    audienceHint: { uk: 'Партнерський запит', ru: 'Партнёрский запрос', en: 'Partnership enquiry' },
    statusHint: { uk: 'Організаційний контакт', ru: 'Организационный контакт', en: 'Organisation contact' },
  },
];

export interface ProcessStep {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step_1',
    title: { uk: 'Оцініть', ru: 'Оцените', en: 'Assess' },
    description: { uk: 'Коротко опишіть ситуацію, щоб зрозуміти, який шлях потрібен.', ru: 'Кратко опишите ситуацию, чтобы понять, какой путь нужен.', en: 'Briefly describe the situation so the right path is clear.' },
  },
  {
    id: 'step_2',
    title: { uk: 'Побудуйте карту', ru: 'Составьте карту', en: 'Map' },
    description: { uk: 'Ми допомагаємо побачити послідовність кроків і що саме потрібно підготувати.', ru: 'Мы помогаем увидеть последовательность шагов и что именно нужно подготовить.', en: 'We help map the sequence of steps and what needs preparing.' },
  },
  {
    id: 'step_3',
    title: { uk: 'Дійте і координуйте', ru: 'Действуйте и координируйте', en: 'Act & coordinate' },
    description: { uk: 'Ми координуємо практичні кроки у вибраному форматі підтримки.', ru: 'Мы координируем практические шаги в выбранном формате поддержки.', en: 'We coordinate the practical steps in the chosen support format.' },
  },
  {
    id: 'step_4',
    title: { uk: 'Перевірте і продовжуйте', ru: 'Проверьте и продолжайте', en: 'Verify & continue' },
    description: { uk: 'Після першого етапу ми перевіряємо прогрес і погоджуємо подальший рух.', ru: 'После первого этапа мы проверяем прогресс и согласуем дальнейшее движение.', en: 'After the first stage, we review progress and agree the next move.' },
  },
];

export interface PartnerAudience {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
}

export const PARTNER_AUDIENCES: PartnerAudience[] = [
  {
    id: 'agencies',
    title: { uk: 'Житлові агенції', ru: 'Жилищные агентства', en: 'Rental agencies' },
    description: { uk: 'Спокійний спосіб узгодити запит і очікування клієнта.', ru: 'Спокойный способ согласовать запрос и ожидания клиента.', en: 'A calm way to align the request and the client expectation.' },
  },
  {
    id: 'hr',
    title: { uk: 'HR-команди', ru: 'HR-команды', en: 'HR teams' },
    description: { uk: 'Для співробітників, які релокуються і потребують практичної координації.', ru: 'Для сотрудников, которые релокируются и нуждаются в практической координации.', en: 'For relocating employees who need practical coordination.' },
  },
  {
    id: 'universities',
    title: { uk: 'Університети', ru: 'Университеты', en: 'Universities' },
    description: { uk: 'Для студентів, які потребують ясного першого кроку та подальшого супроводу.', ru: 'Для студентов, которым нужен ясный первый шаг и дальнейшее сопровождение.', en: 'For students who need a clear first step and follow-up support.' },
  },
  {
    id: 'consultants',
    title: { uk: 'Освітні консультанти', ru: 'Образовательные консультанты', en: 'Education consultants' },
    description: { uk: 'Зручний вхід для рекомендацій і акуратного передавання клієнта.', ru: 'Удобный вход для рекомендаций и аккуратной передачи клиента.', en: 'A practical entry point for referrals and clean handoffs.' },
  },
];

export interface ServiceItem {
  name: string;
  desc: string;
}

export interface ServiceColumn {
  pillar: string;
  sub: string;
  items: ServiceItem[];
}

export const SERVICES_STORE: Record<Language, ServiceColumn[]> = {
  uk: [
    {
      pillar: "Житлова активація",
      sub: "Підготовка, запит, комунікація",
      items: [
        { name: "Підготовка заявки", desc: "Підготовка документів, пояснення ситуації з гарантом і практична допомога з поданням заявки." },
        { name: "Пояснення договору", desc: "Зрозуміле пояснення умов оренди, ключових ризиків і запитань перед підписанням." },
        { name: "Комунікація з орендодавцем", desc: "Підготовка професійних повідомлень до орендодавця або агенції." },
        { name: "Перевірка оголошення", desc: "Оцінка однієї житлової пропозиції на ризикові сигнали та підозрілі деталі." }
      ]
    },
    {
      pillar: "Орієнтація до приїзду",
      sub: "План, документи, орієнтація",
      items: [
        { name: "Орієнтація з переїзду", desc: "Консультація для побудови таймлайну до приїзду та вибору потрібного формату підтримки." },
        { name: "Офіційні листи", desc: "Пояснення змісту листів і підготовка зрозумілого наступного кроку або відповіді." },
        { name: "Університетська адміністрація", desc: "Допомога з питаннями до відділів університету, листами або запитами документів." },
        { name: "Перевірка документів", desc: "Підготовка до муніципальної реєстрації, BSN та інших кроків, які краще впорядкувати до приїзду." }
      ]
    },
    {
      pillar: "Практичне облаштування",
      sub: "Реєстрація, банк, страхування, медицина",
      items: [
        { name: "Реєстрація та BSN", desc: "Підготовка документів, планування запису та пояснення процесу муніципальної реєстрації." },
        { name: "Активація DigiD", desc: "Покрокова підтримка після отримання BSN, щоб користуватися державними порталами." },
        { name: "Банківський рахунок", desc: "Допомога з вибором відповідного варіанта і відкриттям одного рахунку." },
        { name: "Страхування та GP", desc: "Підтримка з налаштуванням страхування та реєстрацією у GP / huisarts." }
      ]
    }
  ],
  ru: [
    {
      pillar: "Жилищная активация",
      sub: "Подготовка, запрос, коммуникация",
      items: [
        { name: "Подготовка заявки", desc: "Подготовка документов, объяснение ситуации с поручителем и практическая помощь с подачей заявки." },
        { name: "Объяснение договора", desc: "Понятное объяснение условий аренды, ключевых рисков и вопросов до подписания." },
        { name: "Коммуникация с арендодателем", desc: "Подготовка профессиональных сообщений арендодателю или агентству." },
        { name: "Проверка объявления", desc: "Оценка одного жилищного предложения на рисковые сигналы и подозрительные детали." }
      ]
    },
    {
      pillar: "Ориентация до приезда",
      sub: "План, документы, ориентация",
      items: [
        { name: "Ориентация по переезду", desc: "Консультация для построения таймлайна до приезда и выбора нужного формата поддержки." },
        { name: "Официальные письма", desc: "Объяснение содержания писем и подготовка понятного следующего шага или ответа." },
        { name: "Университетская администрация", desc: "Помощь с вопросами к отделам университета, письмами или запросами документов." },
        { name: "Проверка документов", desc: "Подготовка к муниципальной регистрации, BSN и другим шагам, которые лучше упорядочить до приезда." }
      ]
    },
    {
      pillar: "Практическое обустройство",
      sub: "Регистрация, банк, страховка, медицина",
      items: [
        { name: "Регистрация и BSN", desc: "Подготовка документов, планирование записи и объяснение процесса муниципальной регистрации." },
        { name: "Активация DigiD", desc: "Пошаговая поддержка после получения BSN, чтобы пользоваться государственными порталами." },
        { name: "Банковский счет", desc: "Помощь с выбором подходящего варианта и открытием одного счета." },
        { name: "Страховка и GP", desc: "Поддержка с настройкой страховки и регистрацией у GP / huisarts." }
      ]
    }
  ],
  en: [
    {
      pillar: "Housing activation",
      sub: "Preparation, request, communication",
      items: [
        { name: "Application preparation", desc: "Document readiness, guarantor context and practical help with the application itself." },
        { name: "Contract explanation", desc: "Plain-language explanation of rental terms, key risks and questions before signing." },
        { name: "Landlord communication", desc: "Help preparing professional messages to a landlord or housing agency." },
        { name: "Listing review", desc: "Review of one housing offer for risk signals and suspicious details." }
      ]
    },
    {
      pillar: "Pre-arrival orientation",
      sub: "Plan, documents, orientation",
      items: [
        { name: "Relocation orientation", desc: "A consultation to map the timeline before arrival and choose the right support format." },
        { name: "Official letters", desc: "Explanation of official correspondence and help preparing a clear response or next step." },
        { name: "University admin", desc: "Support with department communication, administrative questions and document requests." },
        { name: "Document review", desc: "Preparation for municipality registration, BSN and the other steps best organised before arrival." }
      ]
    },
    {
      pillar: "Practical settlement",
      sub: "Registration, banking, insurance, healthcare",
      items: [
        { name: "Registration & BSN", desc: "Document readiness, appointment planning and plain-language guidance through municipal registration." },
        { name: "DigiD activation", desc: "Step-by-step support after BSN so you can access Dutch public-service portals." },
        { name: "Bank account", desc: "Guidance on choosing a suitable bank option and opening one account for your situation." },
        { name: "Insurance and GP", desc: "Support with insurance setup and registering with a GP / huisarts." }
      ]
    }
  ]
};

export interface Package {
  id: string;
  name: Record<Language, string>;
  subtitle: Record<Language, string>;
  price: string;
  tagline: Record<Language, string>;
  workload: Record<Language, string>;
  scope: Record<Language, string[]>;
  limits: Record<Language, string[]>;
  idealFor: Record<Language, string>;
  cta: Record<Language, string>;
}

export const PREMIUM_PACKAGES: Package[] = [
  {
    id: "pkg_start",
    name: { uk: "VANTAM Start", ru: "VANTAM Start", en: "VANTAM Start" },
    subtitle: {
      uk: "Перший платний крок після орієнтації",
      ru: "Первый платный шаг после ориентации",
      en: "The first paid step after orientation"
    },
    price: "€449",
    tagline: {
      uk: "Практична підтримка для тих, кому потрібен чіткий старт без зайвого масштабу.",
      ru: "Практическая поддержка для тех, кому нужен ясный старт без лишнего объёма.",
      en: "Practical support for people who need a clear start without extra scope."
    },
    workload: {
      uk: "~16 годин роботи VANTAM",
      ru: "~16 часов работы VANTAM",
      en: "~16 hours of VANTAM work"
    },
    idealFor: {
      uk: "Студенти, яким потрібен чіткий старт після орієнтації.",
      ru: "Студенты, которым нужен чёткий старт после ориентации.",
      en: "Students who need a clear start after orientation."
    },
    scope: {
      uk: [
        "1 орієнтаційний дзвінок, 60 хв",
        "персональна карта наступних кроків",
        "чеклист документів і контактів",
        "підбір відповідного формату підтримки",
        "короткий письмовий підсумок"
      ],
      ru: [
        "1 ориентационный звонок, 60 мин",
        "персональная карта следующих шагов",
        "чеклист документов и контактов",
        "подбор подходящего формата поддержки",
        "краткий письменный итог"
      ],
      en: [
        "1 orientation call, 60 min",
        "personal next-step map",
        "document and contact checklist",
        "matching support format selection",
        "short written summary"
      ]
    },
    limits: {
      uk: [
        "дистанційно",
        "30 днів з письмового прийняття",
        "не включено: довгострокова координація, фізична присутність, юридичні або регульовані послуги"
      ],
      ru: [
        "удаленно",
        "30 дней с письменного принятия",
        "не включено: долгосрочная координация, физическое присутствие, юридические или регулируемые услуги"
      ],
      en: [
        "remote only",
        "30 days from written acceptance",
        "not included: long-term coordination, physical presence, legal or regulated services"
      ]
    },
    cta: { uk: "Запитати про VANTAM Start", ru: "Запросить VANTAM Start", en: "Enquire about VANTAM Start" }
  },
  {
    id: "pkg_setup",
    name: { uk: "VANTAM First Year", ru: "VANTAM First Year", en: "VANTAM First Year" },
    subtitle: {
      uk: "Рекомендований основний пакет",
      ru: "Рекомендуемый основной пакет",
      en: "Recommended main package"
    },
    price: "€899",
    tagline: {
      uk: "Найбільш зрозумілий пакет для першого року після переїзду.",
      ru: "Самый понятный пакет для первого года после переезда.",
      en: "The clearest option for the first year after the move."
    },
    workload: {
      uk: "~28 годин роботи VANTAM",
      ru: "~28 часов работы VANTAM",
      en: "~28 hours of VANTAM work"
    },
    idealFor: {
      uk: "Студенти, яким потрібна основна координація на перший рік навчання.",
      ru: "Студенты, которым нужна основная координация на первый год учёбы.",
      en: "Students who need the main coordination package for the first year of study."
    },
    scope: {
      uk: [
        "усе з VANTAM Start",
        "координація житлових, приїзних і навчальних кроків",
        "підтримка реєстрації та BSN",
        "підтримка активації DigiD",
        "підтримка з банком, страховкою та GP / huisarts",
        "підтримка з офіційними листами, до 3 листів",
        "університетська адміністрація, до 2 кейсів",
        "2 проміжні check-in дзвінки",
        "узгоджена наступна перевірка"
      ],
      ru: [
        "всё из VANTAM Start",
        "координация жилищных, приездных и учебных шагов",
        "поддержка регистрации и BSN",
        "поддержка активации DigiD",
        "поддержка с банком, страховкой и GP / huisarts",
        "поддержка с официальными письмами, до 3 писем",
        "университетская администрация, до 2 кейсов",
        "2 промежуточных check-in звонка",
        "согласованная следующая проверка"
      ],
      en: [
        "everything in VANTAM Start",
        "coordination across housing, arrival and study steps",
        "registration and BSN support",
        "DigiD activation support",
        "bank, insurance and GP / huisarts support",
        "official letter support, up to 3 letters",
        "university admin support, up to 2 cases",
        "2 check-in calls",
        "agreed follow-up review"
      ]
    },
      limits: {
      uk: [
        "дистанційна підтримка",
        "перший рік після письмового прийняття",
        "не включено: фізичний супровід на зустрічі, юридичні спори, платежі третіх сторін"
      ],
      ru: [
        "удалённая поддержка",
        "первый год после письменного принятия",
        "не включено: физическое сопровождение на встречи, юридические споры, платежи третьих сторон"
      ],
      en: [
        "remote support",
        "first year after written acceptance",
        "not included: physical appointment accompaniment, legal disputes, third-party fees"
      ]
    },
    cta: { uk: "Запитати про VANTAM First Year", ru: "Запросить VANTAM First Year", en: "Enquire about VANTAM First Year" }
  },
  {
    id: "pkg_full",
    name: { uk: "VANTAM Continue", ru: "VANTAM Continue", en: "VANTAM Continue" },
    subtitle: {
      uk: "Повернення для існуючих клієнтів",
      ru: "Возврат для существующих клиентов",
      en: "Return path for existing clients"
    },
    price: "За запитом",
    tagline: {
      uk: "Доступний лише для повернення існуючих клієнтів у цьому циклі.",
      ru: "Доступен только для возврата существующих клиентов в этом цикле.",
      en: "Available only as a return path for existing clients in this cycle."
    },
    workload: {
      uk: "Залежить від запиту",
      ru: "Зависит от запроса",
      en: "Depends on the request"
    },
    idealFor: {
      uk: "Існуючі клієнти, яким потрібне продовження вже відкритого запиту.",
      ru: "Существующие клиенты, которым нужно продолжение уже открытого запроса.",
      en: "Existing clients who need to continue an already opened request."
    },
    scope: {
      uk: [
        "продовження вже погодженого обсягу",
        "повернення до раніше відкритого кейсу",
        "1 короткий check-in дзвінок",
        "узгоджені наступні кроки"
      ],
      ru: [
        "продолжение уже согласованного объёма",
        "возврат к ранее открытому кейсу",
        "1 короткий check-in звонок",
        "согласованные следующие шаги"
      ],
      en: [
        "continuation of an already agreed scope",
        "return to a previously opened case",
        "1 short check-in call",
        "agreed next steps"
      ]
    },
      limits: {
      uk: [
        "лише для повернення існуючих клієнтів",
        "умови підтверджуються окремо",
        "не включено: новий первинний scope"
      ],
      ru: [
        "только для возврата существующих клиентов",
        "условия подтверждаются отдельно",
        "не включено: новый первичный scope"
      ],
      en: [
        "existing clients only",
        "terms confirmed separately",
        "not included: a new primary scope"
      ]
    },
    cta: { uk: "Запитати про VANTAM Continue", ru: "Запросить VANTAM Continue", en: "Enquire about VANTAM Continue" }
  }
];

export interface Consultation {
  id: string;
  name: Record<Language, string>;
  price: string;
  duration: Record<Language, string>;
  desc: Record<Language, string>;
  result: Record<Language, string>;
  note: Record<Language, string>;
  cta: Record<Language, string>;
}

export const CONSULTATIONS_STORE: Consultation[] = [
  {
    id: "consult_orientation",
    name: { uk: "Орієнтація з переїзду", ru: "Ориентация по переезду", en: "Relocation Orientation" },
    price: "€59",
    duration: { uk: "45 хв · дистанційно", ru: "45 мин · удаленно", en: "45 min · remote" },
    desc: {
      uk: "Для студентів, які хочуть зрозуміти наступний практичний крок і обрати правильний шлях підтримки.",
      ru: "Для студентов, которые хотят понять следующий практический шаг и выбрать правильный путь поддержки.",
      en: "For students who want to understand the next practical step and choose the right support path."
    },
    result: { uk: "письмовий план дій", ru: "письменный план действий", en: "written action plan" },
    note: { uk: "Оплачену суму можна один раз зарахувати до відповідного пакета протягом 14 днів.", ru: "Оплаченную сумму можно один раз зачесть в подходящий пакет в течение 14 дней.", en: "The paid amount may be credited once toward an eligible package within 14 days." },
    cta: { uk: "Запитати про дзвінок", ru: "Запросить звонок", en: "Ask about this call" }
  },
  {
    id: "consult_parent",
    name: { uk: "Брифінг для батьків", ru: "Брифинг для родителей", en: "Parent briefing call" },
    price: "€79",
    duration: { uk: "45 хв · дистанційно", ru: "45 мин · удаленно", en: "45 min · remote" },
    desc: {
      uk: "Для батьків або близьких, які хочуть зрозуміти студентський шлях підтримки без перевантаження деталями.",
      ru: "Для родителей или близких, которые хотят понять студенческий путь поддержки без перегруза деталями.",
      en: "For parents or close people who want to understand the student support path without being overloaded with details."
    },
    result: { uk: "зрозумілі перші кроки та формат підтримки", ru: "понятные первые шаги и формат поддержки", en: "clear understanding of the first steps and support format" },
    note: { uk: "Оплачену суму можна один раз зарахувати до відповідного пакета протягом 14 днів.", ru: "Оплаченную сумму можно один раз зачесть в подходящий пакет в течение 14 дней.", en: "The paid amount may be credited once toward an eligible package within 14 days." },
    cta: { uk: "Запитати про дзвінок", ru: "Запросить звонок", en: "Ask about this call" }
  },
  {
    id: "consult_urgent",
    name: { uk: "Пріоритетний дзвінок", ru: "Приоритетный звонок", en: "Priority situation call" },
    price: "€99",
    duration: { uk: "до 60 хв · пріоритет · того ж дня, якщо можливо", ru: "до 60 мин · приоритет · в тот же день, если возможно", en: "Up to 60 min · priority · same day where possible" },
    desc: {
      uk: "Для ситуацій, коли вже виникла проблема в житлі, переїзді або практичному облаштуванні.",
      ru: "Для ситуаций, когда уже возникла проблема в жилье, переезде или практическом обустройстве.",
      en: "For situations where a problem has already appeared in housing, moving or practical settlement."
    },
    result: { uk: "швидка оцінка і чіткий план дій", ru: "быстрая оценка и четкий план действий", en: "quick assessment and clear action plan" },
    note: { uk: "Пріоритетний слот за наявності.", ru: "Приоритетный слот при наличии.", en: "Priority slot where available." },
    cta: { uk: "Запитати про пріоритетний дзвінок", ru: "Запросить приоритетный звонок", en: "Ask about the priority call" }
  }
];

export interface SingleService {
  id: string;
  name: Record<Language, string>;
  price: string;
  mode: Record<Language, string>;
  desc: Record<Language, string>;
  limit: Record<Language, string>;
  notIncluded?: Record<Language, string>;
}

export const SINGLE_SERVICES: SingleService[] = [
  {
    id: "housing_ready",
    name: {
      uk: "Housing Ready",
      ru: "Housing Ready",
      en: "Housing Ready",
    },
    price: {
      uk: "€249",
      ru: "€249",
      en: "€249",
    }[DEFAULT_LOCALE],
    mode: {
      uk: "дистанційно",
      ru: "удаленно",
      en: "remote",
    },
    desc: {
      uk: "Підготовка до житлового запиту, пояснення ситуації з поручителем і перші практичні кроки перед пошуком житла.",
      ru: "Подготовка к жилищному запросу, объяснение ситуации с поручителем и первые практические шаги перед поиском жилья.",
      en: "Preparation for the housing path, explaining the guarantor situation and the first practical steps before the search.",
    },
    limit: {
      uk: "Ліміт: один житловий шлях.",
      ru: "Лимит: один жилищный путь.",
      en: "Limit: one housing path.",
    },
    notIncluded: {
      uk: "Не включено: гарантія житла, юридичний висновок або представництво.",
      ru: "Не включено: гарантия жилья, юридическое заключение или представительство.",
      en: "Not included: a housing guarantee, legal opinion or representation.",
    }
  },
  {
    id: "housing_campaign",
    name: {
      uk: "Housing Search Campaign",
      ru: "Housing Search Campaign",
      en: "Housing Search Campaign",
    },
    price: {
      uk: "€649",
      ru: "€649",
      en: "€649",
    }[DEFAULT_LOCALE],
    mode: {
      uk: "дистанційно / гібридно",
      ru: "удаленно / гибридно",
      en: "remote / hybrid",
    },
    desc: {
      uk: "Кампанія для активного пошуку житла з координацією повідомлень, позиціонуванням запиту та практичними наступними кроками.",
      ru: "Кампания для активного поиска жилья с координацией сообщений, позиционированием запроса и практическими следующими шагами.",
      en: "A campaign for active housing search with message coordination, request positioning and practical next steps.",
    },
    limit: {
      uk: "Ліміт: один житловий запит.",
      ru: "Лимит: один жилищный запрос.",
      en: "Limit: one housing request.",
    },
    notIncluded: {
      uk: "Не включено: гарантія житла, юридичний висновок або представництво.",
      ru: "Не включено: гарантия жилья, юридическое заключение или представительство.",
      en: "Not included: a housing guarantee, legal opinion or representation.",
    }
  },
  {
    id: "single_registration_bsn",
    name: { uk: "Підтримка реєстрації та BSN", ru: "Поддержка регистрации и BSN", en: "Registration & BSN Support" },
    price: "€149",
    mode: { uk: "дистанційно / локально / гібридно", ru: "удаленно / локально / гибридно", en: "remote / local / hybrid" },
    desc: { uk: "Підтримка з муніципальною реєстрацією, підготовкою до BSN, плануванням запису та готовністю документів.", ru: "Поддержка с муниципальной регистрацией, подготовкой к BSN, планированием записи и готовностью документов.", en: "Support with municipality registration, BSN preparation, appointment planning and document readiness." },
    limit: { uk: "Ліміт: до 2 раундів підтримки.", ru: "Лимит: до 2 раундов поддержки.", en: "Limit: up to 2 support rounds." }
  },
  {
    id: "single_digid_activation",
    name: { uk: "Підтримка активації DigiD", ru: "Поддержка активации DigiD", en: "DigiD Activation Support" },
    price: "€79",
    mode: { uk: "дистанційно", ru: "удаленно", en: "remote" },
    desc: { uk: "Покрокова підтримка з налаштуванням та активацією DigiD після отримання BSN.", ru: "Пошаговая поддержка с настройкой и активацией DigiD после получения BSN.", en: "Step-by-step support with DigiD setup and activation after BSN is received." },
    limit: { uk: "Ліміт: один процес активації.", ru: "Лимит: один процесс активации.", en: "Limit: one activation process." }
  },
  {
    id: "single_bank_setup",
    name: { uk: "Налаштування банківського рахунку", ru: "Открытие банковского счета", en: "Bank Account Setup" },
    price: "€89",
    mode: { uk: "дистанційно / гібридно", ru: "удаленно / гибридно", en: "remote / hybrid" },
    desc: { uk: "Допомога з вибором відповідного банківського варіанта та відкриттям одного рахунку.", ru: "Помощь с выбором подходящего банковского варианта и открытием одного счета.", en: "Guidance with choosing a suitable bank option and opening one account." },
    limit: { uk: "Ліміт: один банк / один рахунок.", ru: "Лимит: один банк / один счет.", en: "Limit: one bank / one account." }
  },
  {
    id: "single_insurance_setup",
    name: { uk: "Підтримка зі страхуванням", ru: "Поддержка со страховкой", en: "Insurance Setup Support" },
    price: "€99",
    mode: { uk: "дистанційно", ru: "удаленно", en: "remote" },
    desc: { uk: "Підтримка з вибором та налаштуванням правильного страхового рішення для вашої ситуації.", ru: "Поддержка с выбором и настройкой подходящего страхового решения для вашей ситуации.", en: "Support with selecting and setting up the right insurance option for your situation." },
    limit: { uk: "Ліміт: один страховик.", ru: "Лимит: один страховщик.", en: "Limit: one insurer." },
    notIncluded: { uk: "Не включено: ліцензована страхова консультація.", ru: "Не включено: лицензированная страховая консультация.", en: "Not included: licensed insurance advice." }
  },
  {
    id: "single_official_letter",
    name: { uk: "Підтримка з офіційним листом", ru: "Поддержка с официальным письмом", en: "Official Letter Support" },
    price: "€79",
    mode: { uk: "дистанційно", ru: "удаленно", en: "remote" },
    desc: { uk: "Пояснення одного офіційного листа та допомога з підготовкою відповіді або наступного кроку.", ru: "Объяснение одного официального письма и помощь с подготовкой ответа или следующего шага.", en: "Explanation of one official letter and help preparing a response or next step." },
    limit: { uk: "Ліміт: один лист. Додаткові листи: €49.", ru: "Лимит: одно письмо. Дополнительные письма: €49.", en: "Limit: one letter. Additional letters: €49." }
  },
  {
    id: "single_university_admin",
    name: { uk: "Університетська адміністрація", ru: "Университетская администрация", en: "University Admin Support" },
    price: "€99",
    mode: { uk: "дистанційно / гібридно", ru: "удаленно / гибридно", en: "remote / hybrid" },
    desc: { uk: "Допомога з університетськими адміністративними питаннями, комунікацією з відділами або запитами документів.", ru: "Помощь с университетскими административными вопросами, коммуникацией с отделами или запросами документов.", en: "Help with university-related administrative questions, department communication or document requests." },
    limit: { uk: "Ліміт: до 2 кейсів.", ru: "Лимит: до 2 кейсов.", en: "Limit: up to 2 cases." }
  },
  {
    id: "single_rental_contract",
    name: { uk: "Пояснення договору оренди", ru: "Объяснение договора аренды", en: "Rental Contract Explanation" },
    price: "€129",
    mode: { uk: "дистанційно", ru: "удаленно", en: "remote" },
    desc: { uk: "Просте пояснення договору оренди, ключових ризиків і питань перед підписанням.", ru: "Простое объяснение договора аренды, ключевых рисков и вопросов до подписания.", en: "Plain-language explanation of a rental contract, key risks and questions before signing." },
    limit: { uk: "Ліміт: один договір.", ru: "Лимит: один договор.", en: "Limit: one contract." },
    notIncluded: { uk: "Не включено: юридичний висновок або представництво.", ru: "Не включено: юридическое заключение или представительство.", en: "Not included: legal opinion or representation." }
  },
  {
    id: "single_housing_scam_check",
    name: { uk: "Перевірка житлової пропозиції", ru: "Проверка жилищного предложения", en: "Housing Scam Check" },
    price: "€99",
    mode: { uk: "дистанційно", ru: "удаленно", en: "remote" },
    desc: { uk: "Перевірка одного житлового оголошення, орендодавця або пропозиції на ризикові сигнали та підозрілі деталі.", ru: "Проверка одного жилищного объявления, арендодателя или предложения на рисковые сигналы и подозрительные детали.", en: "Checking one housing listing, landlord or offer for risk signals and suspicious details." },
    limit: { uk: "Ліміт: одне оголошення / один орендодавець.", ru: "Лимит: одно объявление / один арендодатель.", en: "Limit: one listing / one landlord." },
    notIncluded: { uk: "Не включено: пошук житла або гарантія оренди.", ru: "Не включено: поиск жилья или гарантия аренды.", en: "Not included: housing search or tenancy guarantee." }
  },
  {
    id: "single_deposit_return",
    name: { uk: "Підтримка повернення депозиту", ru: "Поддержка возврата депозита", en: "Deposit Return Support" },
    price: "€149",
    mode: { uk: "дистанційно / гібридно", ru: "удаленно / гибридно", en: "remote / hybrid" },
    desc: { uk: "Підтримка з підготовкою письмового запиту та стратегії комунікації, коли депозит не повертають.", ru: "Поддержка с подготовкой письменного запроса и стратегии коммуникации, когда депозит не возвращают.", en: "Support preparing a written request and communication strategy when a deposit is not returned." },
    limit: { uk: "Ліміт: до 3 раундів комунікації.", ru: "Лимит: до 3 раундов коммуникации.", en: "Limit: up to 3 communication rounds." },
    notIncluded: { uk: "Не включено: юридичне представництво.", ru: "Не включено: юридическое представительство.", en: "Not included: legal representation." }
  },
  {
    id: "single_insurance_claim",
    name: { uk: "Підтримка страхового відшкодування", ru: "Поддержка страхового возмещения", en: "Insurance Claim Support" },
    price: "€99",
    mode: { uk: "дистанційно", ru: "удаленно", en: "remote" },
    desc: { uk: "Підтримка з підготовкою документів і поданням однієї страхової заяви або запиту на відшкодування.", ru: "Поддержка с подготовкой документов и подачей одного страхового заявления или запроса на возмещение.", en: "Support with preparing documents and submitting one insurance claim or reimbursement request." },
    limit: { uk: "Ліміт: один запит.", ru: "Лимит: один запрос.", en: "Limit: one claim." },
    notIncluded: { uk: "Не включено: гарантія рішення страховика.", ru: "Не включено: гарантия решения страховщика.", en: "Not included: insurer decision guarantee." }
  },
  {
    id: "single_healthcare_registration",
    name: { uk: "Реєстрація в системі медицини", ru: "Регистрация в системе медицины", en: "Healthcare Registration" },
    price: "€89",
    mode: { uk: "дистанційно / локально / гібридно", ru: "удаленно / локально / гибридно", en: "remote / local / hybrid" },
    desc: { uk: "Підтримка з пошуком і реєстрацією у GP / huisarts та пояснення базового медичного маршруту.", ru: "Поддержка с поиском и регистрацией у GP / huisarts и объяснение базового медицинского маршрута.", en: "Support with finding and registering with a GP / huisarts and understanding the basic healthcare route." },
    limit: { uk: "Ліміт: одна реєстрація у GP.", ru: "Лимит: одна регистрация у GP.", en: "Limit: one GP registration." }
  },
  {
    id: "single_landlord_communication",
    name: { uk: "Комунікація з орендодавцем", ru: "Коммуникация с арендодателем", en: "Landlord Communication" },
    price: "€89",
    mode: { uk: "дистанційно", ru: "удаленно", en: "remote" },
    desc: { uk: "Допомога з підготовкою професійних повідомлень до орендодавця або житлової агенції.", ru: "Помощь с подготовкой профессиональных сообщений арендодателю или жилищному агентству.", en: "Help preparing professional messages to a landlord or housing agency." },
    limit: { uk: "Ліміт: до 2 повідомлень.", ru: "Лимит: до 2 сообщений.", en: "Limit: up to 2 messages." },
    notIncluded: { uk: "Не включено: переговори як представник або агент.", ru: "Не включено: переговоры как представитель или агент.", en: "Not included: negotiation as a representative or agent." }
  }
];

export interface Testimonial {
  id: string;
  name: Record<Language, string>;
  role: Record<Language, string>;
  university: Record<Language, string>;
  city: Record<Language, string>;
  story: Record<Language, string>;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: { uk: "Перед приїздом", ru: "До приезда", en: "Before arrival" },
    role: { uk: "Новоприбулому потрібен зрозумілий план", ru: "Новоприбывшему нужен понятный план", en: "A newcomer needs a clear plan" },
    university: { uk: "Реєстрація і BSN", ru: "Регистрация и BSN", en: "Registration and BSN" },
    city: { uk: "Нідерланди", ru: "Нидерланды", en: "The Netherlands" },
    story: {
      uk: "VANTAM перевірив документи, пояснив порядок дій і допоміг сім'ї зрозуміти, що треба зробити до приїзду, а що можна відкласти до реєстрації.",
      ru: "VANTAM проверил документы, объяснил порядок действий и помог семье понять, что нужно сделать до приезда, а что можно оставить на период после регистрации.",
      en: "VANTAM reviewed the documents, explained the steps and helped the family understand what had to happen before arrival and what could wait until after registration."
    }
  },
  {
    id: "t2",
    name: { uk: "Перший місяць", ru: "Первый месяц", en: "First month" },
    role: { uk: "Новоприбулий починає життя на місці", ru: "Новоприбывший начинает жизнь на месте", en: "A newcomer starting life on site" },
    university: { uk: "Адміністративні кроки", ru: "Административные шаги", en: "Administrative steps" },
    city: { uk: "Делфт", ru: "Делфт", en: "Delft" },
    story: {
      uk: "Для першого місяця VANTAM допоміг тримати послідовність: реєстрація, BSN, DigiD, банк, страховка та GP без хаотичних пошуків.",
      ru: "В первый месяц VANTAM помог удержать последовательность: регистрация, BSN, DigiD, банк, страховка и GP без хаотичных поисков.",
      en: "During the first month, VANTAM helped keep the sequence clear: registration, BSN, DigiD, banking, insurance and GP without random searching."
    }
  },
  {
    id: "t3",
    name: { uk: "Перевірка житла", ru: "Проверка жилья", en: "Housing check" },
    role: { uk: "Молодий експат оцінює пропозицію", ru: "Молодой экспат оценивает предложение", en: "A young expat reviewing an offer" },
    university: { uk: "Договір і ризики", ru: "Договор и риски", en: "Contract and risks" },
    city: { uk: "Роттердам", ru: "Роттердам", en: "Rotterdam" },
    story: {
      uk: "Коли з'явилася сумнівна житлова пропозиція, VANTAM розібрав сигнали ризику та допоміг сформулювати правильні запитання до орендодавця.",
      ru: "Когда появилось сомнительное жилищное предложение, VANTAM разобрал сигналы риска и помог сформулировать правильные вопросы арендодателю.",
      en: "When a housing offer looked uncertain, VANTAM broke down the warning signs and helped prepare the right questions for the landlord."
    }
  }
];

export interface Pitfall {
  id: string;
  label: Record<Language, string>;
  cost: number;
  explanation: Record<Language, string>;
}

export const PITFALLS: Pitfall[] = [
  {
    id: "scam",
    label: {
      uk: "Ризик втрати передоплати за житло",
      ru: "Риск потери предоплаты за жилье",
      en: "Risk of losing a housing prepayment"
    },
    cost: 1600,
    explanation: {
      uk: "Приклад для планування: депозит або передоплата переказані до перевірки пропозиції та особи орендодавця.",
      ru: "Пример для планирования: депозит или предоплата переведены до проверки предложения и личности арендодателя.",
      en: "Planning example: a deposit or prepayment is transferred before the listing and landlord identity are checked."
    }
  },
  {
    id: "fine",
    label: {
      uk: "Додаткові витрати через затримку реєстрації",
      ru: "Дополнительные расходы из-за задержки регистрации",
      en: "Extra costs linked to delayed registration"
    },
    cost: 350,
    explanation: {
      uk: "Приклад резерву на повторні візити, термінові документи, транспорт або інші витрати, якщо реєстрація затримується.",
      ru: "Пример резерва на повторные визиты, срочные документы, транспорт или другие расходы при задержке регистрации.",
      en: "Example allowance for repeat visits, urgent documents, transport or other costs when registration is delayed."
    }
  },
  {
    id: "insurance",
    label: { 
      uk: "Витрати через невідповідний страховий маршрут",
      ru: "Расходы из-за неподходящего страхового маршрута",
      en: "Costs linked to the wrong insurance route"
    },
    cost: 450,
    explanation: {
      uk: "Приклад для планування: тимчасові переплати або медичні витрати до з'ясування відповідного типу страхування.",
      ru: "Пример для планирования: временные переплаты или медицинские расходы до выяснения подходящего типа страхования.",
      en: "Planning example: temporary overpayments or medical costs while the appropriate insurance route is clarified."
    }
  },
  {
    id: "hostel",
    label: { uk: "Незаплановане короткострокове проживання", ru: "Незапланированное краткосрочное проживание", en: "Unplanned short-term accommodation" },
    cost: 1200,
    explanation: {
      uk: "Приклад резерву на готель, хостел або інше тимчасове житло, якщо дата заселення змінюється.",
      ru: "Пример резерва на отель, хостел или другое временное жилье, если дата заселения меняется.",
      en: "Example allowance for a hotel, hostel or other temporary stay when the move-in date changes."
    }
  },
  {
    id: "banking",
    label: { uk: "Тимчасові банківські та конвертаційні витрати", ru: "Временные банковские расходы и конвертация", en: "Temporary banking and conversion costs" },
    cost: 200,
    explanation: {
      uk: "Приклад резерву на комісії, конвертацію та тимчасові способи оплати до відкриття місцевого рахунку.",
      ru: "Пример резерва на комиссии, конвертацию и временные способы оплаты до открытия местного счета.",
      en: "Example allowance for fees, conversion and temporary payment methods before a local account is available."
    }
  },
  {
    id: "panic",
    label: { uk: "Час родини на дистанційну координацію", ru: "Время семьи на дистанционную координацию", en: "Family time spent coordinating remotely" },
    cost: 800,
    explanation: {
      uk: "Умовна оцінка часу, який родина може витратити на дзвінки, пошук інформації та координацію з іншої країни.",
      ru: "Условная оценка времени, которое семья может потратить на звонки, поиск информации и координацию из другой страны.",
      en: "An illustrative value for time spent on calls, research and coordination from another country."
    }
  }
];

export interface RelocationTask {
  id: string;
  title: Record<Language, string>;
  category: 'assess' | 'map' | 'act' | 'verify';
}

export const BLUEPRINT_CHECKLIST: RelocationTask[] = [
  { id: "c1", category: "assess", title: { uk: "Зрозуміти свою ситуацію і пріоритет", ru: "Понять свою ситуацию и приоритет", en: "Understand the situation and priority" } },
  { id: "c2", category: "assess", title: { uk: "Визначити, чи потрібна консультація чи пакет", ru: "Определить, нужна ли консультация или пакет", en: "Decide whether a consultation or package is needed" } },
  { id: "c3", category: "map", title: { uk: "Скласти карту наступних кроків", ru: "Составить карту следующих шагов", en: "Map the next steps" } },
  { id: "c4", category: "map", title: { uk: "Зібрати потрібні документи й контакти", ru: "Собрать нужные документы и контакты", en: "Gather the needed documents and contacts" } },
  { id: "c5", category: "act", title: { uk: "Запустити відповідний шлях підтримки", ru: "Запустить подходящий путь поддержки", en: "Start the right support path" } },
  { id: "c6", category: "act", title: { uk: "Узгодити повідомлення, запити та наступні дії", ru: "Согласовать сообщения, запросы и следующие действия", en: "Align messages, requests and next actions" } },
  { id: "c7", category: "verify", title: { uk: "Перевірити, що вже виконано", ru: "Проверить, что уже выполнено", en: "Verify what has been done" } },
  { id: "c8", category: "verify", title: { uk: "Вирішити, чи потрібне продовження", ru: "Решить, нужно ли продолжение", en: "Decide whether continuation is needed" } }
];

export interface FaqItem {
  id: string;
  q: Record<Language, string>;
  a: Record<Language, string>;
}

export const FAQS_STORE: FaqItem[] = [
  {
    id: "f1",
    q: {
      uk: "Що входить у послуги та пакети VANTAM?",
      ru: "Что входит в услуги и пакеты VANTAM?",
      en: "What is included in VANTAM services and packages?"
    },
    a: {
      uk: "Описи на сайті є орієнтовними. Остаточний обсяг, винятки, ціна, строки і погоджені зовнішні витрати підтверджуються письмово перед формальним прийняттям.",
      ru: "Описания на сайте являются ориентировочными. Итоговый объём, исключения, цена, сроки и согласованные внешние расходы подтверждаются письменно до формального принятия.",
      en: "Website descriptions are indicative. Final scope, exclusions, price, timing and approved external costs are confirmed in writing before formal acceptance."
    }
  },
  {
    id: "f2",
    q: {
      uk: "Що VANTAM не гарантує?",
      ru: "Что VANTAM не гарантирует?",
      en: "What does VANTAM not guarantee?"
    },
    a: {
      uk: "VANTAM не гарантує житло, схвалення заявки, рішення банку, страховика, муніципалітету, університету чи орендодавця. VANTAM не є агентством нерухомості, юридичною фірмою, страховим брокером або ліцензованим посередником.",
      ru: "VANTAM не гарантирует жильё, одобрение заявки, решение банка, страховщика, муниципалитета, университета или арендодателя. VANTAM не является агентством недвижимости, юридической фирмой, страховым брокером или лицензированным посредником.",
      en: "VANTAM does not guarantee housing, application approval, bank, insurer, municipality, university or landlord decisions. VANTAM is not a real-estate agency, law firm, insurance broker or licensed intermediary."
    }
  },
  {
    id: "f3",
    q: {
      uk: "Чи надсилання форми створює договір?",
      ru: "Создаёт ли отправка формы договор?",
      en: "Does submitting the form create a contract?"
    },
    a: {
      uk: "Ні. Форма є лише каналом для запиту. Вона не створює договір, бронювання, платіжне зобов’язання, запит на початок роботи або відмову від прав.",
      ru: "Нет. Форма является только каналом для запроса. Она не создаёт договор, бронирование, платёжное обязательство, запрос на начало работы или отказ от прав.",
      en: "No. The form is an enquiry channel only. It does not create a contract, book a consultation, create a payment obligation, request work to start or waive any rights."
    }
  },
  {
    id: "f4",
    q: {
      uk: "Як підтверджується консультація?",
      ru: "Как подтверждается консультация?",
      en: "How is a consultation confirmed?"
    },
    a: {
      uk: "Тип, обсяг, тривалість, ціна і час консультації підтверджуються письмово перед бронюванням. Якщо погоджено інвойс, він сплачується протягом 3 календарних днів, і консультація зазвичай проходить після оплати.",
      ru: "Тип, объём, длительность, цена и время консультации подтверждаются письменно до бронирования. Если согласован счёт, он оплачивается в течение 3 календарных дней, и консультация обычно проходит после оплаты.",
      en: "The consultation type, scope, duration, price and timing are confirmed in writing before booking. Where an invoice is agreed, it is due within 3 calendar days, and the consultation normally takes place after payment."
    }
  },
  {
    id: "f5",
    q: {
      uk: "Чи можна перенести консультацію?",
      ru: "Можно ли перенести консультацию?",
      en: "Can I reschedule a consultation?"
    },
    a: {
      uk: "Так. Одну консультацію можна перенести без додаткової плати, якщо повідомити щонайменше за 24 години до початку. Повторне перенесення не є автоматичним.",
      ru: "Да. Одну консультацию можно перенести без дополнительной платы, если сообщить минимум за 24 часа до начала. Повторный перенос не является автоматическим.",
      en: "Yes. One consultation can be rescheduled without an additional fee if you give at least 24 hours’ notice before the start time. Repeated rescheduling is not automatic."
    }
  },
  {
    id: "f6",
    q: {
      uk: "Як працює кредит за консультацію?",
      ru: "Как работает зачёт консультации?",
      en: "How does the consultation credit work?"
    },
    a: {
      uk: "Оплачену суму консультації можна один раз зарахувати до відповідного опублікованого пакета, який той самий клієнт формально приймає протягом 14 календарних днів. Кредит не виплачується готівкою і не може перевищувати ціну пакета.",
      ru: "Оплаченную сумму консультации можно один раз зачесть в подходящий опубликованный пакет, который тот же клиент формально принимает в течение 14 календарных дней. Зачёт не выплачивается деньгами и не может превышать цену пакета.",
      en: "The paid consultation amount may be credited once against an eligible published package formally accepted by the same client within 14 calendar days. The credit is not paid out in cash and cannot exceed the package price."
    }
  },
  {
    id: "f7",
    q: {
      uk: "Як працює оплата за послуги або пакети?",
      ru: "Как работает оплата услуг или пакетов?",
      en: "How does payment for services or packages work?"
    },
    a: {
      uk: "Оплата, строки та будь-які погоджені зовнішні витрати підтверджуються письмово для конкретної послуги або пакета. Матеріальна додаткова робота чи зовнішні витрати потребують письмового погодження.",
      ru: "Оплата, сроки и любые согласованные внешние расходы подтверждаются письменно для конкретной услуги или пакета. Существенная дополнительная работа или внешние расходы требуют письменного согласования.",
      en: "Payment, timing and any approved external costs are confirmed in writing for the specific service or package. Material extra work or external costs require written approval."
    }
  },
  {
    id: "f8",
    q: {
      uk: "Чи можна скасувати або скористатися правом на відмову?",
      ru: "Можно ли отменить или воспользоваться правом на отказ?",
      en: "Can I cancel or withdraw?"
    },
    a: {
      uk: "Скасування до початку роботи, припинення після початку роботи і законне право споживача на відмову є різними питаннями. Відповідні правила пояснюються в письмовій угоді та документах, наданих перед формальним прийняттям.",
      ru: "Отмена до начала работы, прекращение после начала работы и законное право потребителя на отказ являются разными вопросами. Соответствующие правила объясняются в письменном соглашении и документах, предоставленных до формального принятия.",
      en: "Cancellation before work starts, termination after work starts and statutory consumer withdrawal are separate issues. The applicable rules are explained in the written agreement and documents supplied before formal acceptance."
    }
  },
  {
    id: "f9",
    q: {
      uk: "Чи може робота початися під час строку відмови?",
      ru: "Может ли работа начаться в период отказа?",
      en: "Can work start during a withdrawal period?"
    },
    a: {
      uk: "Звернення через форму цього не просить. Якщо окремий запит на початок під час строку законної відмови потрібен, VANTAM обробляє його окремо після надання відповідної інформації.",
      ru: "Обращение через форму этого не запрашивает. Если нужен отдельный запрос на начало в период законного отказа, VANTAM обрабатывает его отдельно после предоставления соответствующей информации.",
      en: "The enquiry form does not request this. If a separate request to begin during a statutory withdrawal period is needed, VANTAM handles it separately after providing the relevant information."
    }
  },
  {
    id: "f10",
    q: {
      uk: "Чи можна почати дистанційно до приїзду?",
      ru: "Можно ли начать дистанционно до приезда?",
      en: "Can support start remotely before arrival?"
    },
    a: {
      uk: "Так, підготовку можна обговорити дистанційно до приїзду. Будь-яка фактична робота починається лише після письмового підтвердження обсягу, ціни, строків і потрібних умов.",
      ru: "Да, подготовку можно обсудить дистанционно до приезда. Любая фактическая работа начинается только после письменного подтверждения объёма, цены, сроков и необходимых условий.",
      en: "Yes, preparation can be discussed remotely before arrival. Any actual work starts only after scope, price, timing and required conditions are confirmed in writing."
    }
  }
];
