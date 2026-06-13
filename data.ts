export type Language = 'uk' | 'ru' | 'en';

export const SUPPORTED_LOCALES = ['uk', 'ru', 'en'] as const;
export const DEFAULT_LOCALE: Language = 'uk';

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
    pdfExportTitle: "Зберегти обраний пакет як PDF",
    pdfExportDesc: "Створіть зрозумілий PDF з обраним пакетом, його складом та межами роботи.",
    pdfBtn: "Експортувати PDF пакета",

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

    servicesTitle: "Три рівні підтримки",
    servicesSub: "Житло і оренда, підготовка до приїзду та практичне облаштування після приїзду - три зрозумілі напрями.",
    servicesFooter: "Ціни та склад послуг показані у вибраній мові",

    singleTitle: "Окремі послуги",
    singleSub: "Оберіть одну послугу, якщо потрібен лише один конкретний крок у межах житла, підготовки або практичного облаштування.",
    singlePriceTag: "Фіксована ціна",
    singleBadge: "Один крок",
    singleCta: "Обрати послугу",

    consultTitle: "Консультації",
    consultSub: "Якщо ви ще плануєте переїзд, вже розбираєтесь із житлом або після приїзду хочете зрозуміти наступний крок, консультація допоможе швидко звузити вибір.",
    consultBadge: "Початок тут",
    consultResultLabel: "Після дзвінка у вас буде:",
    consultNoteLabel: "Найкраще для:",

    calcSidebarTitle: "Що може коштувати затримка",
    calcAlternative: "Що допомога може зменшити",
    calcPackageLabel: "Пакет Arrival Setup",
    calcPackageDesc: "Покриває головні кроки після приїзду: реєстрацію, BSN, DigiD, банк, страхування, GP і листи.",
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
    pkgGridSub: "Prepare, Arrival Setup і Thrive покривають різні обсяги допомоги до приїзду, під час переїзду та після нього.",
    pkgIdealTitle: "Найкраще для:",
    pkgScopeTitle: "Що входить у пакет:",
    pkgLimitsTitle: "Що не входить:",

    checklistProgressLabel: "Ваш прогрес:",
    checklistPrepTab: "1. До виліту з дому",
    checklistPrepDesc: "Підготовка",
    checklistArrivalTab: "2. Перші 72 години",
    checklistArrivalDesc: "Після приїзду",
    checklistSettleTab: "3. Arrival Setup",
    checklistSettleDesc: "Практичне облаштування",

    testimonialsTitle: "Типові ситуації",
    testimonialsSub: "Короткі приклади звернень, з якими люди приходять до VANTAM.",
    testimonialsVerified: "Приклад ситуації",

    contactTitle: "Розкажіть, що вам потрібно",
    contactSub: "Надішліть короткий запит. Ми відповімо на електронну адресу, яку ви вкажете, і зможемо працювати від уже обраного контексту.",
    contactNameLabel: "Ваше ім'я",
    contactEmailLabel: "Адреса електронної пошти",
    contactTypeLabel: "З чим потрібна допомога?",
    contactTypePlaceholder: "Оберіть послугу або пакет...",
    contactTypeOpt1: "Планую переїзд до Нідерландів",
    contactTypeOpt2: "Потрібна допомога з житлом або орендною заявкою",
    contactTypeOpt3: "Я вже приїхав(-ла) і мені потрібне практичне облаштування",
    contactTypeOpt4: "Я представляю організацію",
    contactMessageLabel: "Коротко опишіть ситуацію",
    contactConsent: "Я погоджуюся, щоб VANTAM використав мої дані для відповіді на цей запит.",
    contactSubmitBtn: "Надіслати запит",
    contactSending: "Надсилаємо ваш запит...",
    contactSuccessTitle: "Запит надіслано",
    contactSuccessDesc: "Дякуємо. Ми отримали запит і відповімо на електронну адресу, яку ви вказали.",
    contactFailBtn: "Надіслати ще один запит",

    modalTitle: "PDF обраного пакета",
    modalDesc: "Перевірте склад і межі пакета, а потім збережіть сторінку як PDF.",
    modalOfferNo: "OFFER NO",
    modalValidity: "VALIDITY",
    modalClientProfile: "Для кого:",
    modalAdvisorDesc: "Короткий огляд пакета VANTAM.",
    modalTargetPlan: "Обраний пакет:",
    modalPrintBtn: "Роздрукувати PDF",
    modalCloseBtn: "Закрити",

    footerSub: "VANTAM надає практичну підтримку до, під час і після приїзду в Нідерландах, пояснює процеси та допомагає з комунікацією. Ми не замінюємо ліцензовані юридичні, фінансові, страхові чи ріелторські послуги.",
    footerContact: "Контакти:",

    housingDisclaimerTitle: "Межі роботи VANTAM",
    housingDisclaimerText: "VANTAM не надає юридичних, фінансових, страхових чи ріелторських послуг. Ми допомагаємо з поясненням, підготовкою, плануванням кроків і професійною комунікацією.",

    selectorTitle: "Оберіть свій шлях",
    selectorSub: "Кожен варіант веде до відповідного розділу і підставляє потрібний контекст у форму.",
    selectorSingleTitle: "Планую переїзд",
    selectorSingleDesc: "Перейдіть до консультацій і зафіксуйте підготовку до приїзду.",
    selectorPackageTitle: "Потрібна допомога з житлом",
    selectorPackageDesc: "Перейдіть до житлових послуг і підставте житловий контекст у форму.",
    selectorConsultTitle: "Після приїзду потрібне облаштування",
    selectorConsultDesc: "Перейдіть до пакетів Arrival Setup і практичного облаштування.",
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
    pdfExportTitle: "Сохранить выбранный пакет в PDF",
    pdfExportDesc: "Создайте понятный PDF с выбранным пакетом, его составом и границами работы.",
    pdfBtn: "Экспортировать PDF пакета",

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

    servicesTitle: "Три уровня поддержки",
    servicesSub: "Жильё и аренда, подготовка к приезду и практическое обустройство после приезда - три понятных направления.",
    servicesFooter: "Цены и состав услуг показаны на выбранном языке",

    singleTitle: "Отдельные услуги",
    singleSub: "Выберите одну услугу, если нужен только один конкретный шаг в рамках жилья, подготовки или практического обустройства.",
    singlePriceTag: "Фиксированная цена",
    singleBadge: "Один шаг",
    singleCta: "Выбрать услугу",

    consultTitle: "Консультации",
    consultSub: "Если вы ещё планируете переезд, уже разбираетесь с жильём или после приезда хотите понять следующий шаг, консультация поможет быстро сузить выбор.",
    consultBadge: "Начать здесь",
    consultResultLabel: "После звонка у вас будет:",
    consultNoteLabel: "Лучше всего для:",

    calcSidebarTitle: "Что может стоить задержка",
    calcAlternative: "Что может снизить поддержка",
    calcPackageLabel: "Пакет Arrival Setup",
    calcPackageDesc: "Покрывает главные шаги после приезда: регистрацию, BSN, DigiD, банк, страховку, GP и письма.",
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
    pkgGridSub: "Prepare, Arrival Setup и Thrive покрывают разный объём помощи до приезда, во время переезда и после него.",
    pkgIdealTitle: "Лучше всего для:",
    pkgScopeTitle: "Что входит в пакет:",
    pkgLimitsTitle: "Что не входит:",

    checklistProgressLabel: "Ваш прогресс:",
    checklistPrepTab: "1. До вылета из дома",
    checklistPrepDesc: "Подготовка",
    checklistArrivalTab: "2. Первые 72 часа",
    checklistArrivalDesc: "После приезда",
    checklistSettleTab: "3. Arrival Setup",
    checklistSettleDesc: "Практическое обустройство",

    testimonialsTitle: "Типичные ситуации",
    testimonialsSub: "Короткие примеры обращений, с которыми люди приходят в VANTAM.",
    testimonialsVerified: "Пример ситуации",

    contactTitle: "Расскажите, что вам нужно",
    contactSub: "Отправьте короткий запрос. Мы ответим на указанный email и сможем работать от уже выбранного контекста.",
    contactNameLabel: "Ваше имя",
    contactEmailLabel: "Адрес электронной почты",
    contactTypeLabel: "С чем нужна помощь?",
    contactTypePlaceholder: "Выберите услугу или пакет...",
    contactTypeOpt1: "Планирую переезд в Нидерланды",
    contactTypeOpt2: "Нужна помощь с жильём или арендной заявкой",
    contactTypeOpt3: "Я уже приехал(-а) и мне нужно практическое обустройство",
    contactTypeOpt4: "Я представляю организацию",
    contactMessageLabel: "Кратко опишите ситуацию",
    contactConsent: "Я согласен, чтобы VANTAM использовал мои данные для ответа на этот запрос.",
    contactSubmitBtn: "Отправить запрос",
    contactSending: "Отправляем ваш запрос...",
    contactSuccessTitle: "Запрос отправлен",
    contactSuccessDesc: "Спасибо. Мы получили запрос и ответим на электронную почту, которую вы указали.",
    contactFailBtn: "Отправить ещё один запрос",

    modalTitle: "PDF выбранного пакета",
    modalDesc: "Проверьте состав и границы пакета, затем сохраните страницу как PDF.",
    modalOfferNo: "OFFER NO",
    modalValidity: "VALIDITY",
    modalClientProfile: "Для кого:",
    modalAdvisorDesc: "Краткий обзор пакета VANTAM.",
    modalTargetPlan: "Выбранный пакет:",
    modalPrintBtn: "Распечатать PDF",
    modalCloseBtn: "Закрыть",

    footerSub: "VANTAM даёт практическую поддержку до, во время и после приезда в Нидерландах, объясняет процессы и помогает с коммуникацией. Мы не заменяем лицензированные юридические, финансовые, страховые или риелторские услуги.",
    footerContact: "Контакты:",

    housingDisclaimerTitle: "Границы работы VANTAM",
    housingDisclaimerText: "VANTAM не оказывает юридических, финансовых, страховых или риелторских услуг. Мы помогаем с объяснением, подготовкой, планированием шагов и профессиональной коммуникацией.",

    selectorTitle: "Выберите свой путь",
    selectorSub: "Каждый вариант ведёт к нужному разделу и подставляет правильный контекст в форму.",
    selectorSingleTitle: "Планирую переезд",
    selectorSingleDesc: "Перейдите к консультациям и зафиксируйте подготовку к приезду.",
    selectorPackageTitle: "Нужна помощь с жильём",
    selectorPackageDesc: "Перейдите к жилищным услугам и подставьте жилищный контекст в форму.",
    selectorConsultTitle: "После приезда нужно обустройство",
    selectorConsultDesc: "Перейдите к пакетам Arrival Setup и практическому обустройству.",
  },
  en: {
    navTitle: "VANTAM",
    navSub: "Practical support before, during and after arrival",
    langLabel: "Language",
    heroBadge: "Support before, during and after arrival",
    heroHeadline: "Practical support for people moving to the Netherlands",
    heroSub: "Before arrival, during the housing and rental process, and after arrival for practical settlement - with clear next steps and no extra noise.",
    heroCtaPrimary: "Planning my move",
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
    pdfExportTitle: "Save the selected package as PDF",
    pdfExportDesc: "Create a clear PDF with the selected package, its scope and its limits.",
    pdfBtn: "Export package PDF",

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
    navContact: "Contact",

    metric1Count: "3",
    metric1Text: "languages on the site: Ukrainian, Russian and English",
    metric2Count: "3",
    metric2Text: "ways to start: consultation, single service or package",
    metric3Count: "1",
    metric3Text: "form for every enquiry",
    metric4Count: "1",
    metric4Text: "selected context is prefilled in the form",

    servicesTitle: "Three levels of support",
    servicesSub: "Housing and rental support, pre-arrival preparation, and practical settlement after arrival.",
    servicesFooter: "Prices and scope are shown in the selected language",

    singleTitle: "Single services",
    singleSub: "Choose one service when you need help with one concrete step within housing, preparation or practical settlement.",
    singlePriceTag: "Fixed price",
    singleBadge: "One step",
    singleCta: "Choose service",

    consultTitle: "Consultations",
    consultSub: "If you are still planning your move, already working through housing, or want to understand the next step after arrival, a consultation helps narrow the path quickly.",
    consultBadge: "Start here",
    consultResultLabel: "You leave with:",
    consultNoteLabel: "Best for:",

    calcSidebarTitle: "What a delay can cost",
    calcAlternative: "What support can reduce",
    calcPackageLabel: "Arrival Setup package",
    calcPackageDesc: "Covers the main post-arrival steps: registration, BSN, DigiD, banking, insurance, GP and letters.",
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
    pkgGridSub: "Prepare, Arrival Setup and Thrive cover different levels of help before arrival, during the move and after arrival.",
    pkgIdealTitle: "Best for:",
    pkgScopeTitle: "Included in this package:",
    pkgLimitsTitle: "What is not included:",

    checklistProgressLabel: "Your progress:",
    checklistPrepTab: "1. Prior to Leaving Home",
    checklistPrepDesc: "Preparation",
    checklistArrivalTab: "2. Crucial 72 Hours",
    checklistArrivalDesc: "After arrival",
    checklistSettleTab: "3. Arrival Setup",
    checklistSettleDesc: "Practical settlement",

    testimonialsTitle: "Typical situations",
    testimonialsSub: "Short examples of the kinds of requests people bring to VANTAM.",
    testimonialsVerified: "Example situation",

    contactTitle: "Tell us what you need",
    contactSub: "Send a short enquiry. We will reply to the email address you provide and can work from the context already selected.",
    contactNameLabel: "Your name",
    contactEmailLabel: "Email address",
    contactTypeLabel: "What do you need help with?",
    contactTypePlaceholder: "Select preferred support path...",
    contactTypeOpt1: "I am planning my move to the Netherlands",
    contactTypeOpt2: "I need help with housing or my rental application",
    contactTypeOpt3: "I have arrived and need practical setup support",
    contactTypeOpt4: "I represent an organisation",
    contactMessageLabel: "Briefly describe your situation",
    contactConsent: "I agree that VANTAM may use my details to reply to this enquiry.",
    contactSubmitBtn: "Send enquiry",
    contactSending: "Sending your enquiry...",
    contactSuccessTitle: "Enquiry sent",
    contactSuccessDesc: "Thanks. We received your enquiry and will reply to the email address you provided.",
    contactFailBtn: "Send another enquiry",

    modalTitle: "PDF for the selected package",
    modalDesc: "Review the scope and limits, then save the page as PDF.",
    modalOfferNo: "OFFER PROSPECTUS NO",
    modalValidity: "VALID UNTIL",
    modalClientProfile: "For:",
    modalAdvisorDesc: "Short overview of the selected VANTAM package.",
    modalTargetPlan: "Selected package:",
    modalPrintBtn: "Print PDF",
    modalCloseBtn: "Close",

    footerSub: "VANTAM provides practical support before, during and after arrival in the Netherlands, explains the process and helps with communication. We do not replace licensed legal, financial, insurance or real-estate services.",
    footerContact: "Contact:",

    housingDisclaimerTitle: "VANTAM working boundaries",
    housingDisclaimerText: "VANTAM does not provide legal, financial, insurance or real-estate services. We help with explanations, preparation, step planning and professional communication.",

    selectorTitle: "Choose your path",
    selectorSub: "Each option leads to the right section and pre-fills the form with the matching context.",
    selectorSingleTitle: "I am planning my move",
    selectorSingleDesc: "Go to consultations and prefill the move-planning context.",
    selectorPackageTitle: "I need help with housing",
    selectorPackageDesc: "Go to the housing section and prefill the rental-application context.",
    selectorConsultTitle: "I have arrived and need setup help",
    selectorConsultDesc: "Go to Arrival Setup and practical settlement.",
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
    title: { uk: 'Студенти', ru: 'Студенты', en: 'Students' },
    note: {
      uk: 'Переїзд, університетські листи, житло й перші адміністративні кроки.',
      ru: 'Переезд, университетские письма, жилье и первые административные шаги.',
      en: 'Move-in, university letters, housing and the first admin steps.',
    },
    timing: {
      uk: 'Часто до приїзду і в перший місяць після.',
      ru: 'Часто до приезда и в первый месяц после.',
      en: 'Often before arrival and through the first month after.',
    },
  },
  {
    id: 'professionals',
    title: { uk: 'Експати та професіонали', ru: 'Экспаты и профессионалы', en: 'Expats & Professionals' },
    note: {
      uk: 'Робочий старт, адміністрація, листування та практичні побутові питання.',
      ru: 'Рабочий старт, администрация, переписка и практические бытовые вопросы.',
      en: 'Work setup, administration, correspondence and everyday practical questions.',
    },
    timing: {
      uk: 'Часто після прибуття або якщо вже не вистачає ясності.',
      ru: 'Часто после приезда или когда уже не хватает ясности.',
      en: 'Often after arrival or once things need catching up.',
    },
  },
  {
    id: 'families',
    title: { uk: 'Сім’ї', ru: 'Семьи', en: 'Families' },
    note: {
      uk: 'Більше видимості, менше сюрпризів і зрозумілий план для близьких.',
      ru: 'Больше видимости, меньше сюрпризов и понятный план для близких.',
      en: 'More visibility, fewer surprises and a clear plan for the people involved.',
    },
    timing: {
      uk: 'До переїзду, на етапі заселення або в перші тижні.',
      ru: 'До переезда, на этапе заселения или в первые недели.',
      en: 'Before the move, at move-in or during the first weeks.',
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
    title: { uk: 'Я планую переїзд до Нідерландів', ru: 'Я планирую переезд в Нидерланды', en: 'I am planning my move to the Netherlands' },
    description: {
      uk: 'Перейдіть до консультації, щоб спланувати кроки до приїзду й обрати потрібний формат.',
      ru: 'Перейдите к консультации, чтобы спланировать шаги до приезда и выбрать нужный формат.',
      en: 'Go to consultations to map the steps before arrival and choose the right format.',
    },
    target: 'consultation',
    inquiryType: 'consultation',
    audienceHint: { uk: 'Переїзд ще попереду', ru: 'Переезд ещё впереди', en: 'Before arrival' },
    statusHint: { uk: 'До приїзду', ru: 'До приезда', en: 'Before arrival' },
  },
  {
    id: 'found_housing',
    title: { uk: 'Мені потрібна допомога з житлом або орендною заявкою', ru: 'Мне нужна помощь с жильём или арендной заявкой', en: 'I need help with housing or my rental application' },
    description: {
      uk: 'Перейдіть до житлових послуг, щоб відкрити Housing Preparation & Application Support.',
      ru: 'Перейдите к жилищным услугам, чтобы открыть Housing Preparation & Application Support.',
      en: 'Go to the housing services to open Housing Preparation & Application Support.',
    },
    target: 'services',
    inquiryType: 'single',
    audienceHint: { uk: 'Житловий запит', ru: 'Жилищный запрос', en: 'Housing request' },
    statusHint: { uk: 'Потрібна житлова допомога', ru: 'Нужна жилищная помощь', en: 'Housing help needed' },
  },
  {
    id: 'need_housing',
    title: { uk: 'Я вже приїхав(-ла) і потрібне практичне облаштування', ru: 'Я уже приехал(-а) и нужно практическое обустройство', en: 'I have arrived and need practical setup support' },
    description: {
      uk: 'Перейдіть до пакетів, щоб побачити Arrival Setup і практичне облаштування після приїзду.',
      ru: 'Перейдите к пакетам, чтобы посмотреть Arrival Setup и практическое обустройство после приезда.',
      en: 'Go to packages to review Arrival Setup and practical settlement after arrival.',
    },
    target: 'packages',
    inquiryType: 'packages',
    audienceHint: { uk: 'Після приїзду', ru: 'После приезда', en: 'After arrival' },
    statusHint: { uk: 'Вже в Нідерландах', ru: 'Уже в Нидерландах', en: 'Already in the Netherlands' },
  },
  {
    id: 'organisation',
    title: { uk: 'Я представляю організацію', ru: 'Я представляю организацию', en: 'I represent an organisation' },
    description: {
      uk: 'Перейдіть до контакту, щоб обговорити передавання звернень і партнерську співпрацю.',
      ru: 'Перейдите к контакту, чтобы обсудить передачу обращений и партнёрское сотрудничество.',
      en: 'Go to contact to discuss referrals and partnership cooperation.',
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
    title: { uk: 'Надішліть запит', ru: 'Отправьте запрос', en: 'Submit your enquiry' },
    description: { uk: 'Коротко опишіть ситуацію і вкажіть дату переїзду або поточний стан.', ru: 'Коротко опишите ситуацию и укажите дату переезда или текущее положение.', en: 'Briefly describe the situation and include the move date or current status.' },
  },
  {
    id: 'step_2',
    title: { uk: 'VANTAM оцінює контекст', ru: 'VANTAM оценивает контекст', en: 'VANTAM reviews the context' },
    description: { uk: 'Ми дивимось, який рівень допомоги доречний і де потрібна узгодженість.', ru: 'Мы смотрим, какой уровень помощи уместен и где нужна согласованность.', en: 'We look at the right level of support and where coordination is needed.' },
  },
  {
    id: 'step_3',
    title: { uk: 'Ви обираєте формат', ru: 'Вы выбираете формат', en: 'You choose the format' },
    description: { uk: 'Після оцінки ви обираєте окрему послугу або пакет.', ru: 'После оценки вы выбираете отдельную услугу или пакет.', en: 'After the assessment, you choose a single service or a package.' },
  },
  {
    id: 'step_4',
    title: { uk: 'Починається підтримка', ru: 'Начинается поддержка', en: 'Support begins' },
    description: { uk: 'Робота стартує після узгодження обсягу, умов і відповідного наступного кроку.', ru: 'Работа стартует после согласования объёма, условий и следующего шага.', en: 'Work starts after the scope, terms and next step have been agreed.' },
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
      pillar: "Житло та орендні заявки",
      sub: "Підготовка, договір, комунікація",
      items: [
        { name: "Підготовка заявки", desc: "Підготовка документів, пояснення ситуації з гарантом і практична допомога з поданням заявки." },
        { name: "Пояснення договору", desc: "Зрозуміле пояснення умов оренди, ключових ризиків і запитань перед підписанням." },
        { name: "Комунікація з орендодавцем", desc: "Підготовка професійних повідомлень до орендодавця або агенції." },
        { name: "Перевірка оголошення", desc: "Оцінка однієї житлової пропозиції на ризикові сигнали та підозрілі деталі." }
      ]
    },
    {
      pillar: "Підготовка до приїзду",
      sub: "План, документи, консультації",
      items: [
        { name: "Орієнтація з переїзду", desc: "Консультація для побудови таймлайну до приїзду та вибору потрібного формату підтримки." },
        { name: "Офіційні листи", desc: "Пояснення змісту листів і підготовка зрозумілого наступного кроку або відповіді." },
        { name: "Університетська адміністрація", desc: "Допомога з питаннями до відділів університету, листами або запитами документів." },
        { name: "Перевірка документів", desc: "Підготовка до муніципальної реєстрації, BSN та інших кроків, які краще впорядкувати до приїзду." }
      ]
    },
    {
      pillar: "Практичне облаштування після приїзду",
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
      pillar: "Жильё и арендные заявки",
      sub: "Подготовка, договор, коммуникация",
      items: [
        { name: "Подготовка заявки", desc: "Подготовка документов, объяснение ситуации с поручителем и практическая помощь с подачей заявки." },
        { name: "Объяснение договора", desc: "Понятное объяснение условий аренды, ключевых рисков и вопросов до подписания." },
        { name: "Коммуникация с арендодателем", desc: "Подготовка профессиональных сообщений арендодателю или агентству." },
        { name: "Проверка объявления", desc: "Оценка одного жилищного предложения на рисковые сигналы и подозрительные детали." }
      ]
    },
    {
      pillar: "Подготовка к приезду",
      sub: "План, документы, консультации",
      items: [
        { name: "Ориентация по переезду", desc: "Консультация для построения таймлайна до приезда и выбора нужного формата поддержки." },
        { name: "Официальные письма", desc: "Объяснение содержания писем и подготовка понятного следующего шага или ответа." },
        { name: "Университетская администрация", desc: "Помощь с вопросами к отделам университета, письмами или запросами документов." },
        { name: "Проверка документов", desc: "Подготовка к муниципальной регистрации, BSN и другим шагам, которые лучше упорядочить до приезда." }
      ]
    },
    {
      pillar: "Практическое обустройство после приезда",
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
      pillar: "Housing and rental applications",
      sub: "Preparation, contract, communication",
      items: [
        { name: "Application preparation", desc: "Document readiness, guarantor context and practical help with the application itself." },
        { name: "Contract explanation", desc: "Plain-language explanation of rental terms, key risks and questions before signing." },
        { name: "Landlord communication", desc: "Help preparing professional messages to a landlord or housing agency." },
        { name: "Listing review", desc: "Review of one housing offer for risk signals and suspicious details." }
      ]
    },
    {
      pillar: "Pre-arrival preparation",
      sub: "Plan, documents, consultations",
      items: [
        { name: "Relocation orientation", desc: "A consultation to map the timeline before arrival and choose the right support format." },
        { name: "Official letters", desc: "Explanation of official correspondence and help preparing a clear response or next step." },
        { name: "University admin", desc: "Support with department communication, administrative questions and document requests." },
        { name: "Document review", desc: "Preparation for municipality registration, BSN and the other steps best organised before arrival." }
      ]
    },
    {
      pillar: "Practical settlement after arrival",
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
    name: { uk: "Prepare", ru: "Prepare", en: "Prepare" },
    subtitle: {
      uk: "Ясність до приїзду",
      ru: "Ясность до приезда",
      en: "Pre-arrival clarity"
    },
    price: "€349",
    tagline: {
      uk: "Підготовча ясність до переїзду в Нідерланди.",
      ru: "Подготовительная ясность до переезда в Нидерланды.",
      en: "Pre-arrival clarity before you move to the Netherlands."
    },
    workload: {
      uk: "~9 годин роботи VANTAM",
      ru: "~9 часов работы VANTAM",
      en: "~9 hours of VANTAM work"
    },
    idealFor: {
      uk: "Студенти та інші новоприбулі, які вже мають підтверджений переїзд і хочуть чіткий план до приїзду, але більшість кроків виконуватимуть самостійно.",
      ru: "Студенты и другие новоприбывшие, которые уже подтвердили переезд и хотят четкий план до приезда, но большинство шагов будут делать самостоятельно.",
      en: "Students and other newcomers who already have a confirmed move and want a clear plan before arrival, while handling most steps themselves."
    },
    scope: {
      uk: [
        "1 орієнтаційний дзвінок, 60 хв",
        "персональний таймлайн переїзду",
        "чеклист дій",
        "перевірка готовності документів для реєстрації",
        "перевірка 1 договору оренди або житлового оголошення",
        "письмовий довилітний брифінг",
        "пояснення процесу BSN та DigiD"
      ],
      ru: [
        "1 ориентационный звонок, 60 мин",
        "персональный таймлайн переезда",
        "чеклист действий",
        "проверка готовности документов для регистрации",
        "проверка 1 договора аренды или жилищного объявления",
        "письменный довылетный брифинг",
        "объяснение процесса BSN и DigiD"
      ],
      en: [
        "1 orientation call, 60 min",
        "personal relocation timeline",
        "action checklist",
        "document readiness review for registration",
        "check of 1 rental contract or housing listing",
        "written pre-arrival briefing",
        "BSN and DigiD process walkthrough"
      ]
    },
    limits: {
      uk: [
        "дистанційно",
        "30 днів з моменту покупки",
        "не включено: координація після приїзду, налаштування банку/страхування, фізична присутність, комунікація з третіми сторонами"
      ],
      ru: [
        "удаленно",
        "30 дней с момента покупки",
        "не включено: координация после приезда, настройка банка/страховки, физическое присутствие, коммуникация с третьими сторонами"
      ],
      en: [
        "remote only",
        "30 days from purchase",
        "not included: post-arrival coordination, bank/insurance setup, physical presence, third-party communication"
      ]
    },
    cta: { uk: "Почати з Prepare", ru: "Начать с Prepare", en: "Start with Prepare" }
  },
  {
    id: "pkg_setup",
    name: { uk: "Arrival Setup", ru: "Arrival Setup", en: "Arrival Setup" },
    subtitle: {
      uk: "Перший місяць після приїзду",
      ru: "Первый месяц после приезда",
      en: "First month after arrival"
    },
    price: "€749",
    tagline: {
      uk: "Повне практичне налаштування протягом першого місяця після приїзду в Нідерланди.",
      ru: "Полная практическая настройка в течение первого месяца после приезда в Нидерланды.",
      en: "Full practical setup during the first month after arrival in the Netherlands."
    },
    workload: {
      uk: "~26 годин роботи VANTAM",
      ru: "~26 часов работы VANTAM",
      en: "~26 hours of VANTAM work"
    },
    idealFor: {
      uk: "Люди, які хочуть правильно пройти ключові практичні кроки після приїзду без самостійної навігації всією системою.",
      ru: "Люди, которые хотят правильно пройти ключевые практические шаги после приезда без самостоятельной навигации по всей системе.",
      en: "People who want the key practical steps handled correctly after arrival without navigating everything alone."
    },
    scope: {
      uk: [
        "усе з Prepare",
        "координація муніципальної реєстрації + BSN",
        "підтримка активації DigiD",
        "налаштування банківського рахунку, 1 рахунок",
        "налаштування медичного страхування",
        "координація заявки на zorgtoeslag",
        "підтримка реєстрації у GP / huisarts",
        "підтримка з офіційними листами, до 2 листів",
        "університетська адміністрація, до 1 кейсу",
        "WhatsApp / Telegram підтримка 21 день після приїзду",
        "1 проміжний check-in дзвінок, 30 хв"
      ],
      ru: [
        "все из Prepare",
        "координация муниципальной регистрации + BSN",
        "поддержка активации DigiD",
        "настройка банковского счета, 1 счет",
        "настройка медицинской страховки",
        "координация заявки на zorgtoeslag",
        "поддержка регистрации у GP / huisarts",
        "поддержка с официальными письмами, до 2 писем",
        "университетская администрация, до 1 кейса",
        "поддержка WhatsApp / Telegram 21 день после приезда",
        "1 промежуточный check-in звонок, 30 мин"
      ],
      en: [
        "everything in Prepare",
        "municipality registration + BSN coordination",
        "DigiD activation support",
        "bank account setup, 1 account",
        "health insurance setup",
        "zorgtoeslag application coordination",
        "GP registration support",
        "official letter support, up to 2 letters",
        "university admin support, up to 1 case",
        "WhatsApp / Telegram support for 21 days post-arrival",
        "1 mid-point check-in call, 30 min"
      ]
    },
      limits: {
      uk: [
        "дистанційна підтримка",
        "35 днів після приїзду",
        "не включено: фізичний супровід на зустрічі, пошук житла, податкова декларація, юридичні спори, платежі третіх сторін"
      ],
      ru: [
        "удаленная поддержка",
        "35 дней после приезда",
        "не включено: физическое сопровождение на встречи, поиск жилья, налоговая декларация, юридические споры, платежи третьих сторон"
      ],
      en: [
        "remote support",
        "35 days post-arrival",
        "not included: physical appointment accompaniment, housing search, tax filing, legal disputes, third-party fees"
      ]
    },
    cta: { uk: "Почати налаштування", ru: "Начать настройку", en: "Start your setup" }
  },
  {
    id: "pkg_full",
    name: { uk: "Thrive", ru: "Thrive", en: "Thrive" },
    subtitle: {
      uk: "Пріоритетна координація",
      ru: "Приоритетная координация",
      en: "Priority coordination"
    },
    price: "€1690",
    tagline: {
      uk: "Два місяці повної координації з пріоритетною підтримкою та вибраною очною допомогою.",
      ru: "Два месяца полной координации с приоритетной поддержкой и отдельной очной помощью.",
      en: "Two months of full coordination with priority support and selected in-person help."
    },
    workload: {
      uk: "~55 годин роботи VANTAM",
      ru: "~55 часов работы VANTAM",
      en: "~55 hours of VANTAM work"
    },
    idealFor: {
      uk: "Батьки, які хочуть більше впевненості, студенти у складних ситуаціях, перший досвід за кордоном, мовний бар'єр або потреба в сильнішій локальній координації.",
      ru: "Родители, которым нужно больше уверенности, студенты в сложных ситуациях, первый опыт за границей, языковой барьер или потребность в более сильной локальной координации.",
      en: "Parents who want more confidence, students in complex situations, first time abroad, language barriers or students needing stronger local coordination."
    },
    scope: {
      uk: [
        "усе з Arrival Setup",
        "підтримка з офіційними листами, до 4 листів",
        "університетська адміністрація, до 2 кейсів",
        "фізичний супровід на 2 ключові зустрічі",
        "пріоритетна чат-підтримка 30 днів",
        "щотижневі оновлення для батьків x 8",
        "1 кейс житлової ситуації",
        "1 кейс повернення депозиту або комунікації з орендодавцем",
        "1 кейс страхового відшкодування",
        "1 терміновий слот реагування",
        "координація облаштування кімнати"
      ],
      ru: [
        "все из Arrival Setup",
        "поддержка с официальными письмами, до 4 писем",
        "университетская администрация, до 2 кейсов",
        "физическое сопровождение на 2 ключевые встречи",
        "приоритетная чат-поддержка 30 дней",
        "еженедельные обновления для родителей x 8",
        "1 кейс жилищной ситуации",
        "1 кейс возврата депозита или коммуникации с арендодателем",
        "1 кейс страхового возмещения",
        "1 срочный слот реагирования",
        "координация обустройства комнаты"
      ],
      en: [
        "everything in Arrival Setup",
        "official letter support, up to 4 letters",
        "university admin support, up to 2 cases",
        "physical accompaniment to 2 key appointments",
        "priority chat support for 30 days",
        "weekly parent updates x 8",
        "1 housing situation support case",
        "1 deposit return or landlord communication case",
        "1 insurance claim support case",
        "1 urgent response slot",
        "room setup coordination"
      ]
    },
      limits: {
      uk: [
        "60 днів після приїзду",
        "пріоритетне опрацювання звернень у робочий час",
        "не включено: пошук житла, юридичне представництво, ліцензована фінансова порада, платежі третіх сторін"
      ],
      ru: [
        "60 дней после приезда",
        "приоритетная обработка обращений в рабочее время",
        "не включено: поиск жилья, юридическое представительство, лицензированная финансовая консультация, платежи третьих сторон"
      ],
      en: [
        "60 days post-arrival",
        "priority handling during working hours",
        "not included: housing search, legal representation, licensed financial advice, third-party fees"
      ]
    },
    cta: { uk: "Активувати Thrive", ru: "Активировать Thrive", en: "Activate Thrive" }
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
    name: { uk: "Орієнтація з переїзду", ru: "Ориентация по переезду", en: "Relocation orientation" },
    price: "€59",
    duration: { uk: "45 хв · дистанційно", ru: "45 мин · удаленно", en: "45 min · remote" },
    desc: {
      uk: "Для людей, які ще планують переїзд або вже приїхали, але хочуть зрозуміти, який практичний крок потрібен далі - житло, підготовка чи післяприїзне облаштування.",
      ru: "Для людей, которые ещё планируют переезд или уже приехали, но хотят понять, какой практический шаг нужен дальше - жильё, подготовка или послеприездное обустройство.",
      en: "For people who are still planning the move or have already arrived but want to understand the next practical step - housing, preparation or post-arrival setup."
    },
    result: { uk: "письмовий план дій", ru: "письменный план действий", en: "written action plan" },
    note: { uk: "Можна зарахувати до будь-якого пакета протягом 14 днів.", ru: "Можно зачесть в любой пакет в течение 14 дней.", en: "Can be credited toward any package within 14 days." },
    cta: { uk: "Записатися на дзвінок", ru: "Записаться на звонок", en: "Book a call" }
  },
  {
    id: "consult_parent",
    name: { uk: "Дзвінок для родини", ru: "Звонок для семьи", en: "Family confidence call" },
    price: "€79",
    duration: { uk: "45 хв · дистанційно", ru: "45 мин · удаленно", en: "45 min · remote" },
    desc: {
      uk: "Для батьків, партнерів або інших близьких, які хочуть зрозуміти три основні напрямки підтримки: підготовку до приїзду, житло та практичне облаштування після приїзду.",
      ru: "Для родителей, партнёров или других близких, которые хотят понять три основные направления поддержки: подготовку к приезду, жильё и практическое обустройство после приезда.",
      en: "For parents, partners or other close people who want to understand the three main support directions: pre-arrival preparation, housing, and practical settlement after arrival."
    },
    result: { uk: "зрозумілі перші кроки та можливий формат підтримки", ru: "понятные первые шаги и возможный формат поддержки", en: "clear understanding of the first steps and possible support format" },
    note: { uk: "Можна зарахувати до будь-якого пакета протягом 14 днів.", ru: "Можно зачесть в любой пакет в течение 14 дней.", en: "Can be credited toward any package within 14 days." },
    cta: { uk: "Записатися на дзвінок", ru: "Записаться на звонок", en: "Book a call" }
  },
  {
    id: "consult_urgent",
    name: { uk: "Терміновий дзвінок", ru: "Срочный звонок", en: "Urgent situation call" },
    price: "€99",
    duration: { uk: "до 60 хв · пріоритет · того ж дня, якщо можливо", ru: "до 60 мин · приоритет · в тот же день, если возможно", en: "Up to 60 min · priority · same day where possible" },
    desc: {
      uk: "Для ситуацій, коли вже виникла проблема в будь-якій із трьох зон: житло, підготовка до приїзду або практичне облаштування після приїзду.",
      ru: "Для ситуаций, когда уже возникла проблема в любой из трёх зон: жильё, подготовка к приезду или практическое обустройство после приезда.",
      en: "For situations where a problem has already appeared in any of the three areas: housing, pre-arrival preparation or practical settlement after arrival."
    },
    result: { uk: "швидка оцінка і чіткий план дій", ru: "быстрая оценка и четкий план действий", en: "quick assessment and clear action plan" },
    note: { uk: "Окремий пріоритетний слот.", ru: "Отдельный приоритетный слот.", en: "Reserved priority slot." },
    cta: { uk: "Записатися зараз", ru: "Записаться сейчас", en: "Book now" }
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
    id: "single_housing_application_support",
    name: {
      uk: "Housing Preparation & Application Support",
      ru: "Housing Preparation & Application Support",
      en: "Housing Preparation & Application Support",
    },
    price: {
      uk: "Після оцінки",
      ru: "После оценки",
      en: "After assessment",
    }[DEFAULT_LOCALE],
    mode: {
      uk: "дистанційно",
      ru: "удаленно",
      en: "remote",
    },
    desc: {
      uk: "Підготовка документів для орендної заявки, пояснення ситуації з поручителем, комунікація з агенцією або орендодавцем, подання заявки та практична підтримка з договором оренди.",
      ru: "Подготовка документов для арендной заявки, объяснение ситуации с поручителем, коммуникация с агентством или арендодателем, подача заявки и практическая поддержка по договору аренды.",
      en: "Preparing the rental-application file, explaining the guarantor situation, communicating with the agency or landlord, submitting the application and supporting rental-contract questions.",
    },
    limit: {
      uk: "Ліміт: один кейс, без гарантії результату.",
      ru: "Лимит: один кейс, без гарантии результата.",
      en: "Limit: one case, no outcome guarantee.",
    },
    notIncluded: {
      uk: "Не включено: юридичний висновок, представництво або гарантія отримання житла.",
      ru: "Не включено: юридическое заключение, представительство или гарантия получения жилья.",
      en: "Not included: legal opinion, representation or a housing guarantee.",
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
  category: 'prep' | 'arrival' | 'settle';
}

export const BLUEPRINT_CHECKLIST: RelocationTask[] = [
  { id: "c1", category: "prep", title: { uk: "Отримати підтвердження зарахування від університету", ru: "Получить подтверждение зачисления от университета", en: "Receive the official university admission confirmation" } },
  { id: "c2", category: "prep", title: { uk: "Перевірити документи для муніципальної реєстрації", ru: "Проверить документы для муниципальной регистрации", en: "Review documents for municipal registration" } },
  { id: "c3", category: "prep", title: { uk: "Скласти особистий таймлайн до приїзду", ru: "Составить личный таймлайн до приезда", en: "Map the personal pre-arrival timeline" } },
  { id: "c4", category: "prep", title: { uk: "Перевірити один договір або житлове оголошення", ru: "Проверить один договор или жилищное объявление", en: "Check one rental contract or housing listing" } },
  { id: "c5", category: "arrival", title: { uk: "Запланувати реєстрацію в муніципалітеті", ru: "Запланировать регистрацию в муниципалитете", en: "Plan the municipality registration appointment" } },
  { id: "c6", category: "arrival", title: { uk: "Підготувати зв'язок і доступ до важливих сервісів", ru: "Подготовить связь и доступ к важным сервисам", en: "Prepare phone access and essential service logins" } },
  { id: "c7", category: "arrival", title: { uk: "Пройти реєстрацію та отримати шлях до BSN", ru: "Пройти регистрацию и получить путь к BSN", en: "Complete registration and receive the BSN route" } },
  { id: "c8", category: "arrival", title: { uk: "Зберегти офіційні листи та інструкції після візитів", ru: "Сохранить официальные письма и инструкции после визитов", en: "Keep official letters and next-step instructions after appointments" } },
  { id: "c9", category: "settle", title: { uk: "Активувати DigiD після отримання BSN", ru: "Активировать DigiD после получения BSN", en: "Activate DigiD after receiving BSN" } },
  { id: "c10", category: "settle", title: { uk: "Відкрити місцевий банківський рахунок", ru: "Открыть местный банковский счет", en: "Open a local bank account" } },
  { id: "c11", category: "settle", title: { uk: "Налаштувати страхування та перевірити можливість zorgtoeslag", ru: "Настроить страховку и проверить возможность zorgtoeslag", en: "Set up insurance and check zorgtoeslag route" } },
  { id: "c12", category: "settle", title: { uk: "Зареєструватися у GP / huisarts", ru: "Зарегистрироваться у GP / huisarts", en: "Register with a GP / huisarts" } }
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
      uk: "Консультації допомагають обрати правильний наступний крок між трьома напрямками: підготовкою до приїзду, житлом і практичним облаштуванням після приїзду. Окремі послуги покривають один конкретний крок, а Prepare, Arrival Setup і Thrive - різні рівні ширшого супроводу.",
      ru: "Консультации помогают выбрать правильный следующий шаг между тремя направлениями: подготовкой к приезду, жильём и практическим обустройством после приезда. Отдельные услуги покрывают один конкретный шаг, а Prepare, Arrival Setup и Thrive - разные уровни более широкого сопровождения.",
      en: "Consultations help you choose the right next step between the three directions: pre-arrival preparation, housing, and practical settlement after arrival. Single services cover one concrete step, while Prepare, Arrival Setup and Thrive are different levels of broader support."
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
      uk: "VANTAM не гарантує житло, схвалення заявки, рішення банку, страховика чи державного органу, а також не виступає агентством нерухомості, юридичною фірмою або страховим брокером.",
      ru: "VANTAM не гарантирует жильё, одобрение заявки, решение банка, страховщика или государственного органа, а также не выступает агентством недвижимости, юридической фирмой или страховым брокером.",
      en: "VANTAM does not guarantee housing, application approval, bank, insurer or public-authority decisions, and it does not act as a real-estate agency, law firm or insurance broker."
    }
  },
  {
    id: "f3",
    q: {
      uk: "Скільки зазвичай триває підтримка?",
      ru: "Сколько обычно длится поддержка?",
      en: "How long does support usually take?"
    },
    a: {
      uk: "Тривалість залежить від того, чи ви ще до приїзду, чи вже на місці, наскільки готові документи і чи потрібна комунікація з третьою стороною. VANTAM підтверджує реальний обсяг роботи після оцінки ситуації.",
      ru: "Продолжительность зависит от того, до приезда вы или уже на месте, насколько готовы документы и нужна ли коммуникация с третьей стороной. VANTAM подтверждает реальный объём работы после оценки ситуации.",
      en: "Timing depends on whether you are before or after arrival, how ready the documents are and whether third-party communication is needed. VANTAM confirms the real scope after assessing the situation."
    }
  },
  {
    id: "f4",
    q: {
      uk: "Як працює оплата?",
      ru: "Как работает оплата?",
      en: "How does payment work?"
    },
    a: {
      uk: "Оплата узгоджується у письмовій пропозиції для вибраної послуги або пакета. Якщо обсяг ще уточнюється, VANTAM підтверджує умови до початку роботи.",
      ru: "Оплата согласуется в письменном предложении для выбранной услуги или пакета. Если объём ещё уточняется, VANTAM подтверждает условия до начала работы.",
      en: "Payment is agreed in the written offer for the selected service or package. If the scope is still being clarified, VANTAM confirms the terms before work starts."
    }
  },
  {
    id: "f5",
    q: {
      uk: "Які правила скасування або повернення коштів?",
      ru: "Какие правила отмены или возврата средств?",
      en: "What are the cancellation or refund rules?"
    },
    a: {
      uk: "Правила скасування або повернення коштів підтверджуються у письмовій пропозиції для конкретної послуги або пакета. Для сайту окрему універсальну політику поки не опубліковано.",
      ru: "Правила отмены или возврата средств подтверждаются в письменном предложении для конкретной услуги или пакета. Для сайта отдельная универсальная политика пока не опубликована.",
      en: "Cancellation or refund terms are confirmed in the written offer for the specific service or package. A separate universal website policy is not published yet."
    }
  },
  {
    id: "f6",
    q: {
      uk: "Чи можна почати дистанційно до приїзду?",
      ru: "Можно ли начать дистанционно до приезда?",
      en: "Can support start remotely before arrival?"
    },
    a: {
      uk: "Так. Підтримка може початися до приїзду, якщо це потрібно для підготовки документів, пояснення кроків або планування житла, переїзду чи післяприїзних кроків.",
      ru: "Да. Поддержка может начаться до приезда, если это нужно для подготовки документов, объяснения шагов или планирования жилья, переезда и послеприездных шагов.",
      en: "Yes. Support can start before arrival when documents need preparing, steps need explaining or you want to plan housing, the move or the post-arrival steps."
    }
  }
];
