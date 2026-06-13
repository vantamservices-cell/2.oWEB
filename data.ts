export type Language = 'uk' | 'ru' | 'en';

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
    navSub: "Практична підтримка для міжнародних людей у Нідерландах",
    langLabel: "Мова",
    heroBadge: "Практична підтримка для міжнародних людей",
    heroHeadline: "Практична допомога з перших кроків у Нідерландах",
    heroSub: "Для міжнародних студентів, експатів та інших новоприбулих до або після приїзду: реєстрація, BSN, DigiD, банк, страхування, медицина, житлові питання та університетська адміністрація.",
    heroCtaPrimary: "Почати з консультації",
    heroCtaSecondary: "Подивитися послуги",
    whyTitle: "Чому до VANTAM звертаються",
    whySub: "Ви отримуєте один локальний контакт, пояснення простою мовою та зрозумілий наступний крок до або після приїзду без перебільшень і тиску.",
    roleTitle: "Локальний координатор практичних кроків",
    roleDesc: "Ми готуємо документи, пояснюємо листи, допомагаємо розібратися з реєстрацією, BSN, DigiD, банком, страховкою, GP, житловою комунікацією та листуванням з університетом.",
    antiRoleTitle: "Що VANTAM не робить",
    antiRoleDesc: "VANTAM не є юридичною фірмою, фінансовим консультантом, страховим брокером, агентством нерухомості чи державним органом. Ми пояснюємо процес, готуємо документи та допомагаємо з комунікацією.",
    calculatorTitle: "Скільки може коштувати затримка",
    calculatorSub: "Порівняйте типові витрати переїзду й облаштування з вартістю підтримки VANTAM і побачте, де виникає ризик зайвих витрат.",
    calculatorInfo: "Оберіть сценарії, які стосуються вашої ситуації, щоб побачити орієнтовну суму.",
    checklistTitle: "Планер переїзду",
    checklistSub: "Простий список завдань до від'їзду та на перші тижні в Нідерландах.",
    faqTitle: "Поширені запитання",
    faqSub: "Чіткі відповіді про обсяг роботи, строки, підтримку до або після приїзду, житло та що відбувається після звернення.",
    pdfExportTitle: "Зберегти обраний пакет як PDF",
    pdfExportDesc: "Створіть зрозумілий PDF з обраним пакетом, його складом та межами роботи.",
    pdfBtn: "Експортувати PDF пакета",

    statusBanner: "Практична підтримка для міжнародних людей у Нідерландах",
    statusScope: "Документи, налаштування та щоденні кроки",
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

    servicesTitle: "Як структурована допомога VANTAM",
    servicesSub: "Сайт розкладає підтримку на адміністративні, медичні та житлові запити, щоб студенти й інші новоприбулі швидко знайшли потрібний рівень допомоги.",
    servicesFooter: "Ціни та склад послуг показані у вибраній мові",

    singleTitle: "Окремі послуги",
    singleSub: "Оберіть одну послугу, якщо потрібен лише один конкретний крок.",
    singlePriceTag: "Фіксована ціна",
    singleBadge: "Один крок",
    singleCta: "Обрати послугу",

    consultTitle: "Консультації",
    consultSub: "Якщо ви скоро приїжджаєте, уже в Нідерландах або ще порівнюєте варіанти, консультація дає найпростіший вхід.",
    consultBadge: "Початок тут",
    consultResultLabel: "Після дзвінка у вас буде:",
    consultNoteLabel: "Найкраще для:",

    calcSidebarTitle: "Що може коштувати затримка",
    calcAlternative: "Що допомога може зменшити",
    calcPackageLabel: "Пакет Settle",
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
    pkgGridSub: "Prepare, Settle і Thrive покривають різні обсяги допомоги до виїзду та після приїзду.",
    pkgIdealTitle: "Найкраще для:",
    pkgScopeTitle: "Що входить у пакет:",
    pkgLimitsTitle: "Що не входить:",

    checklistProgressLabel: "Ваш прогрес:",
    checklistPrepTab: "1. До виліту з дому",
    checklistPrepDesc: "Підготовка",
    checklistArrivalTab: "2. Перші 72 години",
    checklistArrivalDesc: "Після приїзду",
    checklistSettleTab: "3. Протягом 30 днів",
    checklistSettleDesc: "Налаштування побуту",

    testimonialsTitle: "Типові ситуації",
    testimonialsSub: "Короткі приклади звернень, з якими люди приходять до VANTAM.",
    testimonialsVerified: "Приклад ситуації",

    contactTitle: "Розкажіть, що вам потрібно",
    contactSub: "Надішліть короткий запит. Ми відповімо на електронну адресу, яку ви вкажете, і зможемо працювати від уже вибраного контексту.",
    contactNameLabel: "Ваше ім'я",
    contactEmailLabel: "Адреса електронної пошти",
    contactTypeLabel: "З чим потрібна допомога?",
    contactTypePlaceholder: "Оберіть послугу або пакет...",
    contactTypeOpt1: "Пакет: Prepare, Settle або Thrive",
    contactTypeOpt2: "Окрема послуга",
    contactTypeOpt3: "Партнерський або рекомендаційний запит",
    contactTypeOpt4: "Консультація або загальне питання",
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

    footerSub: "VANTAM надає практичну підтримку для міжнародних людей у Нідерландах, пояснює процеси та допомагає з комунікацією. Ми не замінюємо ліцензовані юридичні, фінансові, страхові чи ріелторські послуги.",
    footerContact: "Контакти:",

    housingDisclaimerTitle: "Межі роботи VANTAM",
    housingDisclaimerText: "VANTAM не надає юридичних, фінансових, страхових чи ріелторських послуг. Ми допомагаємо з поясненням, підготовкою, плануванням кроків і професійною комунікацією.",

    selectorTitle: "Оберіть, як почати",
    selectorSub: "Почніть з консультації, окремої послуги або пакета, залежно від того, скільки допомоги вам потрібно і чи ви ще до приїзду, чи вже в Нідерландах.",
    selectorSingleTitle: "Один конкретний крок",
    selectorSingleDesc: "Оберіть окрему послугу, якщо одна задача гальмує все інше.",
    selectorPackageTitle: "Супровід на кілька кроків",
    selectorPackageDesc: "Оберіть пакет, якщо вам потрібна допомога на кількох етапах одразу.",
    selectorConsultTitle: "Почати з консультації",
    selectorConsultDesc: "Консультація допомагає швидко зрозуміти, що робити далі."
  },
  ru: {
    navTitle: "VANTAM",
    navSub: "Практическая поддержка для международных людей в Нидерландах",
    langLabel: "Язык",
    heroBadge: "Практическая поддержка для международных людей",
    heroHeadline: "Практическая помощь с первыми шагами в Нидерландах",
    heroSub: "Для международных студентов, экспатов и других новоприбывших до или после приезда: регистрация, BSN, DigiD, банк, страховка, медицина, жилищные вопросы и университетская администрация.",
    heroCtaPrimary: "Начать с консультации",
    heroCtaSecondary: "Посмотреть услуги",
    whyTitle: "Почему обращаются в VANTAM",
    whySub: "Вы получаете один локальный контакт, объяснения простым языком и понятный следующий шаг до или после приезда без давления и громких обещаний.",
    roleTitle: "Локальный координатор практических шагов",
    roleDesc: "Мы готовим документы, объясняем письма, помогаем разобраться с регистрацией, BSN, DigiD, банком, страховкой, GP, жилищной коммуникацией и общением с университетом.",
    antiRoleTitle: "Чего VANTAM не делает",
    antiRoleDesc: "VANTAM не является юридической фирмой, финансовым консультантом, страховым брокером, агентством недвижимости или государственным органом. Мы объясняем процесс, готовим документы и помогаем с коммуникацией.",
    calculatorTitle: "Сколько может стоить задержка",
    calculatorSub: "Сравните типичные расходы при переезде и обустройстве со стоимостью поддержки VANTAM и увидьте, где возникает риск лишних затрат.",
    calculatorInfo: "Выберите сценарии, которые относятся к вашей ситуации, чтобы увидеть ориентировочную сумму.",
    checklistTitle: "Планировщик переезда",
    checklistSub: "Простой список задач до отъезда и на первые недели в Нидерландах.",
    faqTitle: "Часто задаваемые вопросы",
    faqSub: "Понятные ответы об объёме работы, сроках, поддержке до или после приезда, жилье и том, что происходит после обращения.",
    pdfExportTitle: "Сохранить выбранный пакет в PDF",
    pdfExportDesc: "Создайте понятный PDF с выбранным пакетом, его составом и границами работы.",
    pdfBtn: "Экспортировать PDF пакета",

    statusBanner: "Практическая поддержка для международных людей в Нидерландах",
    statusScope: "Документы, настройки и повседневные шаги",
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

    servicesTitle: "Как устроена помощь VANTAM",
    servicesSub: "Сайт делит поддержку на административные, медицинские и жилищные запросы, чтобы студенты и другие новоприбывшие быстро нашли нужный уровень помощи.",
    servicesFooter: "Цены и состав услуг показаны на выбранном языке",

    singleTitle: "Отдельные услуги",
    singleSub: "Выберите одну услугу, если нужен только один конкретный шаг.",
    singlePriceTag: "Фиксированная цена",
    singleBadge: "Один шаг",
    singleCta: "Выбрать услугу",

    consultTitle: "Консультации",
    consultSub: "Если вы скоро приезжаете, уже в Нидерландах или ещё сравниваете варианты, консультация даёт самый простой вход.",
    consultBadge: "Начать здесь",
    consultResultLabel: "После звонка у вас будет:",
    consultNoteLabel: "Лучше всего для:",

    calcSidebarTitle: "Что может стоить задержка",
    calcAlternative: "Что может снизить поддержка",
    calcPackageLabel: "Пакет Settle",
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
    pkgGridSub: "Prepare, Settle и Thrive покрывают разный объём помощи до выезда и после приезда.",
    pkgIdealTitle: "Лучше всего для:",
    pkgScopeTitle: "Что входит в пакет:",
    pkgLimitsTitle: "Что не входит:",

    checklistProgressLabel: "Ваш прогресс:",
    checklistPrepTab: "1. До вылета из дома",
    checklistPrepDesc: "Подготовка",
    checklistArrivalTab: "2. Первые 72 часа",
    checklistArrivalDesc: "После приезда",
    checklistSettleTab: "3. В течение 30 дней",
    checklistSettleDesc: "Настройка быта",

    testimonialsTitle: "Типичные ситуации",
    testimonialsSub: "Короткие примеры обращений, с которыми люди приходят в VANTAM.",
    testimonialsVerified: "Пример ситуации",

    contactTitle: "Расскажите, что вам нужно",
    contactSub: "Отправьте короткий запрос. Мы ответим на электронную почту, которую вы укажете, и сможем работать от уже выбранного контекста.",
    contactNameLabel: "Ваше имя",
    contactEmailLabel: "Адрес электронной почты",
    contactTypeLabel: "С чем нужна помощь?",
    contactTypePlaceholder: "Выберите услугу или пакет...",
    contactTypeOpt1: "Пакет: Prepare, Settle или Thrive",
    contactTypeOpt2: "Отдельная услуга",
    contactTypeOpt3: "Партнёрский или рекомендательный запрос",
    contactTypeOpt4: "Консультация или общий вопрос",
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

    footerSub: "VANTAM даёт практическую поддержку для международных людей в Нидерландах, объясняет процессы и помогает с коммуникацией. Мы не заменяем лицензированные юридические, финансовые, страховые или риелторские услуги.",
    footerContact: "Контакты:",

    housingDisclaimerTitle: "Границы работы VANTAM",
    housingDisclaimerText: "VANTAM не оказывает юридических, финансовых, страховых или риелторских услуг. Мы помогаем с объяснением, подготовкой, планированием шагов и профессиональной коммуникацией.",

    selectorTitle: "Выберите, как начать",
    selectorSub: "Начните с консультации, отдельной услуги или пакета, в зависимости от того, сколько помощи вам нужно и до выезда ли вы ещё или уже в Нидерландах.",
    selectorSingleTitle: "Один конкретный шаг",
    selectorSingleDesc: "Выберите отдельную услугу, если одна задача тормозит всё остальное.",
    selectorPackageTitle: "Поддержка на несколько шагов",
    selectorPackageDesc: "Выберите пакет, если вам нужна помощь сразу на нескольких этапах.",
    selectorConsultTitle: "Начать с консультации",
    selectorConsultDesc: "Консультация помогает быстро понять, что делать дальше."
  },
  en: {
    navTitle: "VANTAM",
    navSub: "Practical support for international people in the Netherlands",
    langLabel: "Language",
    heroBadge: "Practical support for international people",
    heroHeadline: "Practical help with the first steps in the Netherlands",
    heroSub: "For international students, expats and other newcomers before or after arrival: registration, BSN, DigiD, banking, insurance, healthcare, housing questions and university admin.",
    heroCtaPrimary: "Start with a consultation",
    heroCtaSecondary: "See the services",
    whyTitle: "Why people come to VANTAM",
    whySub: "You get one local contact, plain-language explanations and a clear next step before or after arrival, without pressure or exaggerated promises.",
    roleTitle: "Local coordinator for practical steps",
    roleDesc: "We prepare documents, explain letters, and help you work through registration, BSN, DigiD, banking, insurance, GP setup, housing communication and university communication.",
    antiRoleTitle: "What VANTAM does not do",
    antiRoleDesc: "VANTAM is not a law firm, financial advisor, insurance broker, real estate agency or government office. We explain the process, prepare documents and help with communication.",
    calculatorTitle: "What a delay can cost",
    calculatorSub: "Compare common relocation and setup costs with the price of support and see where extra expenses may appear.",
    calculatorInfo: "Select the scenarios that fit your situation to see an illustrative total.",
    checklistTitle: "Relocation planner",
    checklistSub: "A simple task list for before departure and the first weeks in the Netherlands.",
    faqTitle: "Frequently asked questions",
    faqSub: "Clear answers about scope, timing, before-or-after-arrival support, housing and what happens after you contact VANTAM.",
    pdfExportTitle: "Save the selected package as PDF",
    pdfExportDesc: "Create a clear PDF with the selected package, its scope and its limits.",
    pdfBtn: "Export package PDF",

    statusBanner: "Practical support for international people in the Netherlands",
    statusScope: "Documents, setup and everyday tasks",
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

    servicesTitle: "How VANTAM is structured",
    servicesSub: "The site groups help into administrative, healthcare and housing requests so students and other newcomers can find the right level fast.",
    servicesFooter: "Prices and scope are shown in the selected language",

    singleTitle: "Single services",
    singleSub: "Choose one service when you need help with one concrete step.",
    singlePriceTag: "Fixed price",
    singleBadge: "One step",
    singleCta: "Choose service",

    consultTitle: "Consultations",
    consultSub: "If you are arriving soon, already in the Netherlands, or still comparing options, a consultation is the simplest entry point.",
    consultBadge: "Start here",
    consultResultLabel: "You leave with:",
    consultNoteLabel: "Best for:",

    calcSidebarTitle: "What a delay can cost",
    calcAlternative: "What support can reduce",
    calcPackageLabel: "Settle package",
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
    pkgGridSub: "Prepare, Settle and Thrive cover different levels of help before departure and after arrival.",
    pkgIdealTitle: "Best for:",
    pkgScopeTitle: "Included in this package:",
    pkgLimitsTitle: "What is not included:",

    checklistProgressLabel: "Your progress:",
    checklistPrepTab: "1. Prior to Leaving Home",
    checklistPrepDesc: "Preparation",
    checklistArrivalTab: "2. Crucial 72 Hours",
    checklistArrivalDesc: "After arrival",
    checklistSettleTab: "3. Within First 30 Days",
    checklistSettleDesc: "Everyday setup",

    testimonialsTitle: "Typical situations",
    testimonialsSub: "Short examples of the kinds of requests people bring to VANTAM.",
    testimonialsVerified: "Example situation",

    contactTitle: "Tell us what you need",
    contactSub: "Send a short enquiry. We will reply to the email address you provide and can work from the context already selected.",
    contactNameLabel: "Your name",
    contactEmailLabel: "Email address",
    contactTypeLabel: "What do you need help with?",
    contactTypePlaceholder: "Select preferred support path...",
    contactTypeOpt1: "Package: Prepare, Settle or Thrive",
    contactTypeOpt2: "Single service",
    contactTypeOpt3: "Partnership or referral enquiry",
    contactTypeOpt4: "Consultation or general question",
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

    footerSub: "VANTAM provides practical support for international people in the Netherlands, explains the process and helps with communication. We do not replace licensed legal, financial, insurance or real-estate services.",
    footerContact: "Contact:",

    housingDisclaimerTitle: "VANTAM working boundaries",
    housingDisclaimerText: "VANTAM does not provide legal, financial, insurance or real-estate services. We help with explanations, preparation, step planning and professional communication.",

    selectorTitle: "Choose how to start",
    selectorSub: "Start with a consultation, a single service or a package, depending on how much help you need and whether you are before or after arrival.",
    selectorSingleTitle: "One concrete step",
    selectorSingleDesc: "Choose a single service when one task is blocking the rest.",
    selectorPackageTitle: "Support across several steps",
    selectorPackageDesc: "Choose a package if you need help across several stages at once.",
    selectorConsultTitle: "Start with a consultation",
    selectorConsultDesc: "A consultation is the easiest way to understand the right next step."
  }
};

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
      pillar: "Адміністративний старт",
      sub: "Реєстрація, BSN, DigiD, банк",
      items: [
        { name: "Реєстрація та BSN", desc: "Підготовка документів, планування запису та пояснення процесу муніципальної реєстрації." },
        { name: "Активація DigiD", desc: "Покрокова підтримка після отримання BSN, щоб студент міг користуватися державними порталами." },
        { name: "Банківський рахунок", desc: "Допомога з вибором відповідного варіанта і відкриттям одного студентського рахунку." },
        { name: "Офіційні листи", desc: "Пояснення змісту листів і підготовка зрозумілого наступного кроку або відповіді." }
      ]
    },
    {
      pillar: "Медицина та щоденні кроки",
      sub: "Страхування, GP, університет",
      items: [
        { name: "Страхування", desc: "Пояснення страхового напрямку для ситуації студента і підтримка з оформленням." },
        { name: "GP / huisarts", desc: "Пошук і реєстрація у сімейного лікаря, пояснення базового медичного маршруту." },
        { name: "Університетська адміністрація", desc: "Допомога з питаннями до відділів університету, листами або запитами документів." },
        { name: "Перший місяць", desc: "Фокус на практичних кроках після прибуття, щоб студент не губився в системі." }
      ]
    },
    {
      pillar: "Житловий контекст",
      sub: "Договори, оголошення, комунікація",
      items: [
        { name: "Пояснення договору", desc: "Зрозуміле пояснення умов оренди, ключових ризиків і питань перед підписанням." },
        { name: "Перевірка оголошення", desc: "Оцінка одного житлового оголошення, орендодавця або пропозиції на підозрілі сигнали." },
        { name: "Комунікація з орендодавцем", desc: "Підготовка професійних повідомлень до орендодавця або агенції." },
        { name: "Депозит і претензії", desc: "Підготовка письмового запиту та стратегії комунікації, якщо депозит не повертають." }
      ]
    }
  ],
  ru: [
    {
      pillar: "Административный старт",
      sub: "Регистрация, BSN, DigiD, банк",
      items: [
        { name: "Регистрация и BSN", desc: "Подготовка документов, планирование записи и объяснение процесса муниципальной регистрации." },
        { name: "Активация DigiD", desc: "Пошаговая поддержка после получения BSN, чтобы студент мог пользоваться государственными порталами." },
        { name: "Банковский счет", desc: "Помощь с выбором подходящего варианта и открытием одного студенческого счета." },
        { name: "Официальные письма", desc: "Объяснение содержания писем и подготовка понятного следующего шага или ответа." }
      ]
    },
    {
      pillar: "Медицина и бытовые шаги",
      sub: "Страховка, GP, университет",
      items: [
        { name: "Страховка", desc: "Объяснение страхового направления для ситуации студента и поддержка с оформлением." },
        { name: "GP / huisarts", desc: "Поиск и регистрация у семейного врача, объяснение базового медицинского маршрута." },
        { name: "Университетская администрация", desc: "Помощь с вопросами к отделам университета, письмами или запросами документов." },
        { name: "Первый месяц", desc: "Фокус на практических шагах после прибытия, чтобы студент не терялся в системе." }
      ]
    },
    {
      pillar: "Жилищный контекст",
      sub: "Договоры, объявления, коммуникация",
      items: [
        { name: "Объяснение договора", desc: "Понятное объяснение условий аренды, ключевых рисков и вопросов до подписания." },
        { name: "Проверка объявления", desc: "Оценка одного жилищного объявления, арендодателя или предложения на подозрительные сигналы." },
        { name: "Коммуникация с арендодателем", desc: "Подготовка профессиональных сообщений арендодателю или агентству." },
        { name: "Депозит и претензии", desc: "Подготовка письменного запроса и стратегии коммуникации, если депозит не возвращают." }
      ]
    }
  ],
  en: [
    {
      pillar: "Administrative setup",
      sub: "Registration, BSN, DigiD, banking",
      items: [
        { name: "Registration & BSN", desc: "Document readiness, appointment planning and plain-language guidance through municipal registration." },
        { name: "DigiD activation", desc: "Step-by-step support after BSN so you can access Dutch public-service portals." },
        { name: "Bank account", desc: "Guidance on choosing a suitable bank option and opening one account for your situation." },
        { name: "Official letters", desc: "Explanation of official correspondence and help preparing a clear response or next step." }
      ]
    },
    {
      pillar: "Health and daily setup",
      sub: "Insurance, GP, university",
      items: [
        { name: "Insurance setup", desc: "Support choosing and setting up the right insurance option for your situation." },
        { name: "GP / huisarts", desc: "Help finding and registering with a GP and understanding the basic healthcare route." },
        { name: "University admin", desc: "Support with department communication, administrative questions and document requests." },
        { name: "First-month steps", desc: "Practical coordination after arrival so you are not left guessing in a new system." }
      ]
    },
    {
      pillar: "Housing context",
      sub: "Contracts, listings, communication",
      items: [
        { name: "Contract explanation", desc: "Plain-language explanation of rental terms, key risks and questions before signing." },
        { name: "Listing risk check", desc: "Review of one housing listing, landlord or offer for suspicious details." },
        { name: "Landlord messages", desc: "Help preparing professional messages to a landlord or housing agency." },
        { name: "Deposit and claims", desc: "Written request preparation and communication strategy when a deposit or claim stalls." }
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
    name: { uk: "Settle", ru: "Settle", en: "Settle" },
    subtitle: {
      uk: "Перший місяць у Нідерландах",
      ru: "Первый месяц в Нидерландах",
      en: "First-month setup"
    },
    price: "€749",
    tagline: {
      uk: "Повне адміністративне налаштування протягом першого місяця в Нідерландах.",
      ru: "Полная административная настройка в течение первого месяца в Нидерландах.",
      en: "Full administrative setup during the first month in the Netherlands."
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
        "усе з Settle",
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
        "все из Settle",
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
        "everything in Settle",
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
      uk: "Для студентів та інших новоприбулих, які вже приїжджають або скоро приїдуть, але ще не склали план перших кроків. Разом збираємо таймлайн: реєстрація, BSN, банк, страхування, житло та перші дні.",
      ru: "Для студентов и других новоприбывших, которые уже едут или скоро приедут, но ещё не собрали план первых шагов. Вместе выстраиваем таймлайн: регистрация, BSN, банк, страховка, жильё и первые дни.",
      en: "For students and other newcomers who are arriving soon or have already arrived, but still need a clear plan. Together we map the timeline: registration, BSN, bank, insurance, housing and the first days."
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
      uk: "Для батьків, партнерів або інших близьких, які хочуть зрозуміти, які кроки чекають на людину в Нідерландах, де потрібна їхня участь і де VANTAM може взяти частину роботи на себе.",
      ru: "Для родителей, партнёров или других близких, которые хотят понять, какие шаги ждут человека в Нидерландах, где нужна их помощь и где VANTAM может взять часть работы на себя.",
      en: "For parents, partners or other close people who want to understand the steps ahead, where they need to be involved and where VANTAM can take some of the work off their plate."
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
      uk: "Для ситуацій, коли вже виникла проблема: заблокований акаунт, пропущений дедлайн, незрозумілий лист, тиск орендодавця або крок, який потрібно зробити сьогодні.",
      ru: "Для ситуаций, когда уже возникла проблема: заблокированный аккаунт, пропущенный дедлайн, непонятное письмо, давление арендодателя или шаг, который нужно сделать сегодня.",
      en: "For situations where a problem has already appeared: a locked account, a missed deadline, a confusing letter, landlord pressure or a step that needs action today."
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
      uk: "VANTAM займається тільки житлом?",
      ru: "VANTAM занимается только жильем?",
      en: "Is VANTAM only about housing?"
    },
    a: {
      uk: "Ні. Житлові питання - лише одна частина. Основна робота VANTAM - практичний старт у Нідерландах: реєстрація, BSN, DigiD, банк, страхування, GP, листи та університетська адміністрація.",
      ru: "Нет. Жилищные вопросы - только одна часть. Основная работа VANTAM - практический старт в Нидерландах: регистрация, BSN, DigiD, банк, страховка, GP, письма и университетская администрация.",
      en: "No. Housing is only one part of the picture. VANTAM's main work is practical setup in the Netherlands: registration, BSN, DigiD, banking, insurance, GP setup, letters and university admin."
    }
  },
  {
    id: "f2",
    q: {
      uk: "Протягом якого часу діє підтримка після приїзду?",
      ru: "Сколько длится поддержка после приезда?",
      en: "How long does support last after arrival?"
    },
    a: {
      uk: "Prepare діє 30 днів з моменту покупки та підходить для підготовки до приїзду. Settle покриває 35 днів після приїзду. Thrive покриває 60 днів після приїзду з пріоритетним опрацюванням звернень у робочий час.",
      ru: "Prepare действует 30 дней с момента покупки и подходит для подготовки к приезду. Settle покрывает 35 дней после приезда. Thrive покрывает 60 дней после приезда с приоритетной обработкой обращений в рабочее время.",
      en: "Prepare runs for 30 days from purchase and is designed for pre-arrival prep. Settle covers 35 days after arrival. Thrive covers 60 days after arrival with priority handling during working hours."
    }
  },
  {
    id: "f3",
    q: {
      uk: "Чи надає VANTAM юридичні, фінансові або страхові консультації?",
      ru: "Предоставляет ли VANTAM юридические, финансовые или страховые консультации?",
      en: "Does VANTAM provide legal, financial or insurance advice?"
    },
    a: {
      uk: "Ні. VANTAM не є юридичною фірмою, фінансовим консультантом, страховим брокером або агентством нерухомості. Ми пояснюємо практичні кроки та допомагаємо з документами і комунікацією; ліцензовані питання краще вирішувати з відповідними фахівцями.",
      ru: "Нет. VANTAM не является юридической фирмой, финансовым консультантом, страховым брокером или агентством недвижимости. Мы объясняем практические шаги и помогаем с документами и коммуникацией; лицензируемые вопросы лучше решать с профильными специалистами.",
      en: "No. VANTAM is not a law firm, financial advisor, insurance broker or real estate agency. We explain practical steps and help with documents and communication; licensed matters should go to the relevant professionals."
    }
  },
  {
    id: "f4",
    q: {
      uk: "Чи можна замовити одну послугу без пакета?",
      ru: "Можно заказать одну услугу без пакета?",
      en: "Can I request one service without a package?"
    },
    a: {
      uk: "Так. Окремі послуги створені саме для одного конкретного кроку: BSN, DigiD, банк, страхування, офіційний лист, університетська адміністрація, договір оренди, депозит, GP або комунікація з орендодавцем.",
      ru: "Да. Отдельные услуги созданы именно для одного конкретного шага: BSN, DigiD, банк, страховка, официальное письмо, университетская администрация, договор аренды, депозит, GP или коммуникация с арендодателем.",
      en: "Yes. Single services are designed for one specific step: BSN, DigiD, banking, insurance, an official letter, university admin, rental contract explanation, deposit support, GP registration or landlord communication."
    }
  }
];
