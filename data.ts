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
    navSub: "Локальна підтримка у Нідерландах",
    langLabel: "Мова",
    heroBadge: "Локальна підтримка у Нідерландах",
    heroHeadline: "Локальна опора та впевнена адаптація у Нідерландах для спокою вашої родини",
    heroSub: "Ми допомагаємо студентам і молодим експатам пройти перші практичні кроки в Нідерландах: реєстрація, BSN, DigiD, банк, страхування, офіційні листи, медицина та університетські питання.",
    heroCtaPrimary: "Обрати рівень спокою",
    heroCtaSecondary: "Оцінити ризики",
    whyTitle: "Чому саме VANTAM?",
    whySub: "Ми живемо в Нідерландах, знаємо місцевий контекст і допомагаємо студентам проходити реальні адміністративні та побутові кроки.",
    roleTitle: "Довірений локальний координатор",
    roleDesc: "Ми координуємо документи, готуємо до реєстрації в муніципалітеті, пояснюємо процес BSN і DigiD, допомагаємо з банком, страховкою, лікарем, листами та університетською адміністрацією.",
    antiRoleTitle: "Що ми НЕ робимо (Прозорі межі)",
    antiRoleDesc: "VANTAM не є юридичною фірмою, фінансовим консультантом, страховим брокером або агентством нерухомості. Ми надаємо практичну підтримку, пояснення, підготовку документів і допомогу з комунікацією.",
    calculatorTitle: "Калькулятор «Вартість помилки»",
    calculatorSub: "Окремі помилки під час переїзду можуть спричинити додаткові витрати. Порівняйте орієнтовні сценарії з фіксованою вартістю підтримки VANTAM.",
    calculatorInfo: "Оберіть релевантні сценарії, щоб побачити орієнтовну суму можливих витрат.",
    checklistTitle: "Інтерактивний планер адаптації",
    checklistSub: "Покроковий перелік стратегічних завдань до вильоту та в перші тижні у Нідерландах. Дізнайтеся, чи готові ви до європейської бюрократії.",
    faqTitle: "Запитання та відповіді",
    faqSub: "Чесні та відкриті відповіді на ключові питання батьків, студентів та наших партнерів-агенцій.",
    pdfExportTitle: "Завантажити персональну оферту",
    pdfExportDesc: "Збережіть зрозумілий PDF з обраним пакетом, його складом та обмеженнями.",
    pdfBtn: "Завантажити PDF-оферту VANTAM",

    statusBanner: "Практична підтримка студентів та експатів у Нідерландах",
    statusScope: "Документи, адаптація та щоденні кроки",
    navWhy: "Чому ми",
    navServices: "Матриця послуг",
    navSingleServices: "Окремі послуги",
    navPackages: "Рівні спокою",
    navCalculator: "Калькулятор втрат",
    navChecklist: "Планер адаптації",
    navTestimonials: "Відгуки",
    navFaq: "FAQ",
    navContact: "Контакти",

    metric1Count: "100%",
    metric1Text: "Практична перевірка перших кроків",
    metric2Count: "72 год",
    metric2Text: "Фокус на BSN, DigiD, банку та страхуванні",
    metric3Count: "0 стресу",
    metric3Text: "Абсолютна впевненість батьків та студентів",
    metric4Count: "1 контакт",
    metric4Text: "Замість десятків заплутаних нідерландських служб",

    servicesTitle: "Практична матриця підтримки VANTAM",
    servicesSub: "Основний фокус VANTAM — зрозумілий студентський старт у Нідерландах: документи, повсякденна адміністрація, медицина, університет і житлові питання як частина контексту.",
    servicesFooter: "СТАНДАРТИ ОПЕРАЦІЙНОЇ ДІЯЛЬНОСТІ VANTAM 2026 • НАЦІОНАЛЬНИЙ КОМПЛАЄНС",

    singleTitle: "Окремі послуги",
    singleSub: "Потрібна допомога з одним конкретним кроком? Оберіть окрему послугу. Найкраще для студентів, які вже знають, що їм потрібно, і хочуть фокусну підтримку без повного пакета.",
    singlePriceTag: "Фіксована ціна",
    singleBadge: "Фокусна послуга",
    singleCta: "Замовити послугу",

    consultTitle: "Консультації",
    consultSub: "Не впевнені, з чого почати? Почніть з фокусного дзвінка та отримайте зрозумілий наступний крок.",
    consultBadge: "Консультація",
    consultResultLabel: "Результат:",
    consultNoteLabel: "Примітка:",

    calcSidebarTitle: "ПОТЕНЦІЙНІ ЗБИТКИ БЕЗ СУПРОВОДУ",
    calcAlternative: "БЕЗПЕЧНА АЛЬТЕРНАТИВА З VANTAM",
    calcPackageLabel: "Пакет Settle",
    calcPackageDesc: "Покриває ключові адміністративні кроки після прибуття: реєстрація, BSN, DigiD, банк, страхування, лікар і листи.",
    calcSavingTag: "Запобіжний фінансовий щит",
    calcNoRiskSelected: "Активуйте чекбокси ризиків для запуска моделювання збитків",
    calcFooterNotice: "Це ілюстративна оцінка для планування на основі вибраних сценаріїв. Фактичні витрати залежать від конкретної ситуації.",

    calcRiskLow: "Низька сума вибраних ризиків",
    calcRiskMedium: "Помітна сума вибраних ризиків",
    calcRiskHigh: "Висока сума вибраних ризиків",
    calcRiskLowDesc: "Вибрані сценарії мають відносно невелику орієнтовну вартість, але кожен крок усе одно варто перевірити.",
    calcRiskMediumDesc: "Кілька вибраних сценаріїв можуть помітно вплинути на бюджет. Перевірте строки, документи та умови заздалегідь.",
    calcRiskHighDesc: "Сукупна орієнтовна вартість вибраних сценаріїв висока. Варто розібрати кожен ризик окремо та скласти план дій.",
    calcRiskTextLabel: "Оцінка вибраних сценаріїв:",

    pkgGridTitle: "Оберіть формат підтримки",
    pkgGridSub: "Три рівні підтримки для підготовки, першого місяця та складніших ситуацій з прозорими межами роботи VANTAM.",
    pkgIdealTitle: "Оптимально для:",
    pkgScopeTitle: "Що входить у пакет:",
    pkgLimitsTitle: "Винятки та обмеження пакета:",

    checklistProgressLabel: "Твій особистий прогрес:",
    checklistPrepTab: "1. До виліту з дому",
    checklistPrepDesc: "Підготовка",
    checklistArrivalTab: "2. Перші 72 години",
    checklistArrivalDesc: "Після прибуття",
    checklistSettleTab: "3. Протягом 30 днів",
    checklistSettleDesc: "Щоденне налаштування",

    testimonialsTitle: "Історії успішного старту",
    testimonialsSub: "Досвід студентів, експатів та батьків, які зверталися до VANTAM по практичну підтримку.",
    testimonialsVerified: "Історія клієнта VANTAM",

    contactTitle: "Давайте будувати ваш спокій разом",
    contactSub: "Залиште заявку та коротко опишіть ситуацію. Локальний координатор відповість на вказану електронну адресу.",
    contactNameLabel: "Ваше ім'я",
    contactEmailLabel: "Адреса електронної пошти",
    contactTypeLabel: "Напрямок вашого запиту",
    contactTypePlaceholder: "Оберіть послугу або пакет...",
    contactTypeOpt1: "Пакет підтримки (Prepare, Settle або Thrive)",
    contactTypeOpt2: "Окрема послуга",
    contactTypeOpt3: "B2B партнерство для навчальних агенцій",
    contactTypeOpt4: "Консультація або загальне питання",
    contactMessageLabel: "Ваш коментар або опис ситуації",
    contactConsent: "Я згоден на обробку персональних даних для відповіді на мій запит.",
    contactSubmitBtn: "Надіслати запит координатору VANTAM",
    contactSending: "Реєстрація запиту в системі...",
    contactSuccessTitle: "Ваш запит успішно надіслано!",
    contactSuccessDesc: "Дякуємо! Запит доставлено. Відповідь надійде на вказану електронну адресу.",
    contactFailBtn: "Надіслати новий запит",

    modalTitle: "PDF з обраним пакетом VANTAM",
    modalDesc: "Перевірте склад і обмеження пакета, а потім збережіть сторінку як PDF.",
    modalOfferNo: "OFFER NO",
    modalValidity: "VALIDITY",
    modalClientProfile: "Профіль отримувача:",
    modalAdvisorDesc: "Опис обраного формату підтримки VANTAM.",
    modalTargetPlan: "Цільовий пакет / Plan:",
    modalPrintBtn: "Запустити друк PDF у браузері",
    modalCloseBtn: "Повернутися назад",

    footerSub: "Потреби та практичні завдання студентів та молодих експатів адаптуються строго в межах індивідуальних консультацій. VANTAM діє строго в межах нідерландського комплаєнсу та не несе відповідальності за внутрішні рішення уряду країни.",
    footerContact: "Офіційні канали координації:",

    housingDisclaimerTitle: "Межі роботи VANTAM",
    housingDisclaimerText: "VANTAM не надає юридичні, фінансові, страхові або ріелторські послуги. Ми допомагаємо з поясненням, підготовкою, організацією кроків і професійною комунікацією.",

    selectorTitle: "Оберіть свій формат співпраці",
    selectorSub: "Шукаєте рішення конкретної проблеми на місці чи потребуєте повного супроводу з першого дня? Ми пропонуємо два прозорих шляхи, а також можливість почати з консультації.",
    selectorSingleTitle: "Конкретна ситуація / Разова допомога",
    selectorSingleDesc: "Оберіть окрему послугу, якщо один конкретний крок блокує рух: BSN, DigiD, банк, страхування, GP, офіційний лист або комунікація з орендодавцем.",
    selectorPackageTitle: "Комплексні пакети супроводу",
    selectorPackageDesc: "Оберіть структуровану підтримку для довилітної підготовки, першого місяця або складнішої ситуації, де потрібна сильніша локальна координація.",
    selectorConsultTitle: "Почніть зі стратегічної консультації",
    selectorConsultDesc: "Не впевнені, з чого почати? Почніть з фокусного дзвінка та отримайте зрозумілий наступний крок."
  },
  ru: {
    navTitle: "VANTAM",
    navSub: "Локальная поддержка в Нидерландах",
    langLabel: "Язык",
    heroBadge: "Локальная поддержка в Нидерландах",
    heroHeadline: "Локальная опора и уверенная адаптация в Нидерландах для спокойствия вашей семьи",
    heroSub: "Мы помогаем студентам и молодым экспатам пройти первые практические шаги в Нидерландах: регистрация, BSN, DigiD, банк, страховка, официальные письма, медицина и университетские вопросы.",
    heroCtaPrimary: "Выбрать уровень спокойствия",
    heroCtaSecondary: "Оценить риски",
    whyTitle: "Почему именно VANTAM?",
    whySub: "Мы живем в Нидерландах, знаем местный контекст и помогаем студентам проходить реальные административные и бытовые шаги.",
    roleTitle: "Ваш надежный сопровождающий",
    roleDesc: "Мы координируем документы, готовим к регистрации в муниципалитете, объясняем процесс BSN и DigiD, помогаем с банком, страховкой, врачом, письмами и университетской администрацией.",
    antiRoleTitle: "Наши четкие границы работы",
    antiRoleDesc: "VANTAM не является юридической фирмой, финансовым консультантом, страховым брокером или агентством недвижимости. Мы предоставляем практическую поддержку, объяснения, подготовку документов и помощь с коммуникацией.",
    calculatorTitle: "Калькулятор стоимости ошибок",
    calculatorSub: "Отдельные ошибки во время переезда могут привести к дополнительным расходам. Сравните ориентировочные сценарии с фиксированной стоимостью поддержки VANTAM.",
    calculatorInfo: "Выберите подходящие сценарии, чтобы увидеть ориентировочную сумму возможных расходов.",
    checklistTitle: "Интерактивная карта переезда",
    checklistSub: "Пошаговый план задач до вылета и в первые критические 30 дней. Оцените свою готовность к требованиям нидерландского законодательства.",
    faqTitle: "Часто задаваемые вопросы",
    faqSub: "Откровенные ответы на вопросы о границах услуг, жилье, коммуникации с куратором и юридических обязательствах.",
    pdfExportTitle: "Сформировать брошюру предложения",
    pdfExportDesc: "Сохраните понятный PDF с выбранным пакетом, его составом и ограничениями.",
    pdfBtn: "Создать PDF предложение VANTAM",

    statusBanner: "Практическая поддержка студентов и экспатов в Нидерландах",
    statusScope: "Документы, адаптация и повседневные шаги",
    navWhy: "Почему мы",
    navServices: "Матрица услуг",
    navSingleServices: "Отдельные услуги",
    navPackages: "Уровни спокойствия",
    navCalculator: "Калькулятор потерь",
    navChecklist: "Планер адаптации",
    navTestimonials: "Отзывы",
    navFaq: "FAQ",
    navContact: "Контакты",

    metric1Count: "100%",
    metric1Text: "Практическая проверка первых шагов",
    metric2Count: "72 ч",
    metric2Text: "Фокус на BSN, DigiD, банке и страховке",
    metric3Count: "0 стресса",
    metric3Text: "Абсолютная уверенность родителей и студентов",
    metric4Count: "1 контакт",
    metric4Text: "Вместо десятков голландских и местных служб",

    servicesTitle: "Практическая матрица поддержки VANTAM",
    servicesSub: "Главный фокус VANTAM — понятный студенческий старт в Нидерландах: документы, бытовая администрация, медицина, университет и жилищные вопросы как часть контекста.",
    servicesFooter: "СТАНДАРТЫ ОПЕРАЦИОННОЙ ДЕЯТЕЛЬНОСТИ VANTAM 2026 • НАЦИОНАЛЬНЫЙ КОМПЛАЕНС",

    singleTitle: "Отдельные услуги",
    singleSub: "Нужна помощь с одним конкретным шагом? Выберите отдельную услугу. Лучше всего для студентов, которые уже понимают, что им нужно, и хотят фокусную поддержку без полного пакета.",
    singlePriceTag: "Фиксированная цена",
    singleBadge: "Фокусная услуга",
    singleCta: "Заказать услугу",

    consultTitle: "Консультации",
    consultSub: "Не уверены, с чего начать? Начните с фокусного звонка и получите понятный следующий шаг.",
    consultBadge: "Консультация",
    consultResultLabel: "Результат:",
    consultNoteLabel: "Примечание:",

    calcSidebarTitle: "ПОТЕНЦИАЛЬНЫЙ УЩЕРБ БЕЗ СОПРОВОЖДЕНИЯ",
    calcAlternative: "БЕЗОПАСНАЯ АЛЬТЕРНАТИВА С VANTAM",
    calcPackageLabel: "Пакет Settle",
    calcPackageDesc: "Покрывает ключевые административные шаги после прибытия: регистрация, BSN, DigiD, банк, страховка, врач и письма.",
    calcSavingTag: "Предохранительный финансовый щит",
    calcNoRiskSelected: "Активируйте чекбоксы рисков для запуска моделирования ущерба",
    calcFooterNotice: "Это иллюстративная оценка для планирования на основе выбранных сценариев. Фактические расходы зависят от конкретной ситуации.",

    calcRiskLow: "Низкая сумма выбранных рисков",
    calcRiskMedium: "Заметная сумма выбранных рисков",
    calcRiskHigh: "Высокая сумма выбранных рисков",
    calcRiskLowDesc: "Вы обезопасили первичные шаги. Однако мелкие процедурные пробелы все еще могут усложнить получение BSN и затянить регистрацию ребенка.",
    calcRiskMediumDesc: "Выборочная защита оставляет опасные окна. Например, арендное мошенничество (€1600) является катастрофическим ударом по бюджету студента.",
    calcRiskHighDesc: "Высокий уровень финансовой и легальной опасности! Вы рискуете потерять крупные деньги, получить государственные пени и нарушить сроки IND.",
    calcRiskTextLabel: "ОЦЕНКА РИСКОВОГО СТАТУСУ СТУДЕНТА:",

    pkgGridTitle: "Выберите формат поддержки",
    pkgGridSub: "Три уровня поддержки для подготовки, первого месяца и более сложных ситуаций с прозрачными границами работы VANTAM.",
    pkgIdealTitle: "Оптимально для:",
    pkgScopeTitle: "Что входит в пакет:",
    pkgLimitsTitle: "Исключения и ограничения пакета:",

    checklistProgressLabel: "Твой личный прогресс:",
    checklistPrepTab: "1. До вылета из дома",
    checklistPrepDesc: "Подготовка",
    checklistArrivalTab: "2. Первые 72 часа",
    checklistArrivalDesc: "После прибытия",
    checklistSettleTab: "3. В течение 30 дней",
    checklistSettleDesc: "Повседневная настройка",

    testimonialsTitle: "Истории успешного старта",
    testimonialsSub: "Опыт студентов, экспатов и родителей, которые обращались в VANTAM за практической поддержкой.",
    testimonialsVerified: "История клиента VANTAM",

    contactTitle: "Давайте строить ваше спокойствие вместе",
    contactSub: "Оставьте заявку и кратко опишите ситуацию. Локальный координатор ответит на указанный электронный адрес.",
    contactNameLabel: "Ваше имя",
    contactEmailLabel: "Адрес электронной почты",
    contactTypeLabel: "Направление вашего запроса",
    contactTypePlaceholder: "Выберите услугу или пакет...",
    contactTypeOpt1: "Пакет поддержки (Prepare, Settle или Thrive)",
    contactTypeOpt2: "Отдельная услуга",
    contactTypeOpt3: "B2B партнерство для учебных агентств",
    contactTypeOpt4: "Консультация или общий вопрос",
    contactMessageLabel: "Ваш комментарий или описание ситуации",
    contactConsent: "Я согласен на обработку персональных данных для ответа на мой запрос.",
    contactSubmitBtn: "Отправить запрос координатору VANTAM",
    contactSending: "Регистрация запроса в системе...",
    contactSuccessTitle: "Ваш запрос успешно отправлен!",
    contactSuccessDesc: "Спасибо! Запрос доставлен. Ответ придёт на указанный электронный адрес.",
    contactFailBtn: "Отправить новый запрос",

    modalTitle: "PDF с выбранным пакетом VANTAM",
    modalDesc: "Проверьте состав и ограничения пакета, затем сохраните страницу как PDF.",
    modalOfferNo: "OFFER NO",
    modalValidity: "VALIDITY",
    modalClientProfile: "Профиль получателя:",
    modalAdvisorDesc: "Описание выбранного формата поддержки VANTAM.",
    modalTargetPlan: "Целевой пакет / Plan:",
    modalPrintBtn: "Запустить печать PDF в браузере",
    modalCloseBtn: "Вернуться назад",

    footerSub: "Потребности и практические задачи студентов и молодых экспатов адаптируются строго в рамках индивидуальных консультаций. VANTAM действует строго в рамках нидерландского комплаенса и не несет ответственности за внутренние решения правительства страны.",
    footerContact: "Официальные каналы координации:",

    housingDisclaimerTitle: "Границы работы VANTAM",
    housingDisclaimerText: "VANTAM не оказывает юридические, финансовые, страховые или риелторские услуги. Мы помогаем с объяснением, подготовкой, организацией шагов и профессиональной коммуникацией.",

    selectorTitle: "Выберите свой формат сотрудничества",
    selectorSub: "Ищете решение конкретной проблемы на месте или нуждаетесь в полном сопровождении с первого дня? Мы предлагаем два прозрачных пути, а также возможность начать с консультации.",
    selectorSingleTitle: "Конкретная ситуация / Разовая помощь",
    selectorSingleDesc: "Выберите отдельную услугу, если один конкретный шаг мешает двигаться дальше: BSN, DigiD, банк, страховка, GP, официальное письмо или коммуникация с арендодателем.",
    selectorPackageTitle: "Комплексные пакеты сопровождения",
    selectorPackageDesc: "Выберите структурированную поддержку для довылетной подготовки, первого месяца или более сложной ситуации, где нужна сильная локальная координация.",
    selectorConsultTitle: "Начните со стратегической консультации",
    selectorConsultDesc: "Не уверены, с чего начать? Начните с фокусного звонка и получите понятный следующий шаг."
  },
  en: {
    navTitle: "VANTAM",
    navSub: "Local support in the Netherlands",
    langLabel: "Language",
    heroBadge: "Local support in the Netherlands",
    heroHeadline: "Practical Student Setup Support in the Netherlands",
    heroSub: "We help students and young expats handle the first practical steps in the Netherlands: registration, BSN, DigiD, banking, insurance, official letters, healthcare, university admin and parent confidence.",
    heroCtaPrimary: "Choose Levels of Peace",
    heroCtaSecondary: "Evaluate Risks",
    whyTitle: "Why VANTAM?",
    whySub: "We live in the Netherlands, understand the local context, and help students handle real administrative and everyday setup steps.",
    roleTitle: "Your Practical Local Coordinator",
    roleDesc: "We coordinate documents, prepare municipal registration steps, explain BSN and DigiD, and support banking, insurance, GP registration, official letters and university administration.",
    antiRoleTitle: "Our Explicit Operational Boundaries",
    antiRoleDesc: "VANTAM is not a law firm, financial advisor, insurance broker or real estate agency. We provide practical support, explanations, document preparation and communication help.",
    calculatorTitle: "The Cost of Mistake Calculator",
    calculatorSub: "Individual relocation mistakes can lead to additional costs. Compare illustrative scenarios with VANTAM's fixed support price.",
    calculatorInfo: "Select the relevant scenarios to see an illustrative total of possible costs.",
    checklistTitle: "Interactive Relocation Blueprint",
    checklistSub: "A step-by-step task list covering crucial phases before takeoff and during your critical first 30 days. Test your readiness level for Dutch regulations.",
    faqTitle: "Frequently Asked Questions",
    faqSub: "Transparent answers to direct questions regarding limits, housing, communication, and legal boundaries.",
    pdfExportTitle: "Generate Premium Offer Memo",
    pdfExportDesc: "Save a clear PDF with the selected package, its scope, and its limits.",
    pdfBtn: "Generate VANTAM PDF Proposal",

    statusBanner: "Practical support for students and expats in the Netherlands",
    statusScope: "Documents, adaptation, and everyday setup",
    navWhy: "Why Vantam",
    navServices: "Service Matrix",
    navSingleServices: "Single Services",
    navPackages: "Packages",
    navCalculator: "Risk Calculator",
    navChecklist: "Relocation Tracker",
    navTestimonials: "Reviews",
    navFaq: "FAQ",
    navContact: "Let's Talk",

    metric1Count: "100%",
    metric1Text: "Practical first-step readiness checks",
    metric2Count: "72 hrs",
    metric2Text: "Focus on BSN, DigiD, bank and insurance",
    metric3Count: "0 Stress",
    metric3Text: "Clear first-month confidence for families",
    metric4Count: "1 Contact",
    metric4Text: "Instead of dozens of uncoordinated municipal desks",

    servicesTitle: "VANTAM Practical Support Matrix",
    servicesSub: "VANTAM focuses on a practical student start in the Netherlands: documents, everyday administration, healthcare, university admin and housing questions as context.",
    servicesFooter: "VANTAM OPERATIONAL METRICS 2026 • COMPLIANT COMPASS STANDARDS",

    singleTitle: "Single services",
    singleSub: "Need help with one specific step? Choose a single service. Best for students who already know what they need and want focused support without a full package.",
    singlePriceTag: "Fixed Fee",
    singleBadge: "Single service",
    singleCta: "Request service",

    consultTitle: "Consultations",
    consultSub: "Not sure where to start? Begin with a focused call and get a clear next step.",
    consultBadge: "Consultation",
    consultResultLabel: "Result:",
    consultNoteLabel: "Note:",

    calcSidebarTitle: "HYPOTHETICAL RISK EXPOSURE",
    calcAlternative: "SAFE LANDING ARCHITECTURE WITH VANTAM",
    calcPackageLabel: "Settle package",
    calcPackageDesc: "Covers key post-arrival admin steps: registration, BSN, DigiD, banking, insurance, GP registration and official letters.",
    calcSavingTag: "Preventative Financial Guard",
    calcNoRiskSelected: "Toggle checkboxes above to calculate risk score values",
    calcFooterNotice: "This is an illustrative planning estimate based on the scenarios selected. Actual costs depend on the individual situation.",

    calcRiskLow: "Low total across selected risks",
    calcRiskMedium: "Notable total across selected risks",
    calcRiskHigh: "High total across selected risks",
    calcRiskLowDesc: "The selected scenarios have a relatively low illustrative cost, but each step is still worth checking.",
    calcRiskMediumDesc: "Several selected scenarios could have a noticeable budget impact. Check timelines, documents, and conditions in advance.",
    calcRiskHighDesc: "The combined illustrative cost of the selected scenarios is high. Review each risk separately and prepare a clear action plan.",
    calcRiskTextLabel: "Selected scenario estimate:",

    pkgGridTitle: "Choose your support format",
    pkgGridSub: "Three levels for pre-arrival planning, first-month setup and more complex situations, with clear VANTAM work limits.",
    pkgIdealTitle: "Ideal For:",
    pkgScopeTitle: "What is Included in Your Package:",
    pkgLimitsTitle: "Exclusions and Package Scope Limits:",

    checklistProgressLabel: "Your Relocation Readiness Tracker:",
    checklistPrepTab: "1. Prior to Leaving Home",
    checklistPrepDesc: "Preparation",
    checklistArrivalTab: "2. Crucial 72 Hours",
    checklistArrivalDesc: "After arrival",
    checklistSettleTab: "3. Within First 30 Days",
    checklistSettleDesc: "Everyday setup",

    testimonialsTitle: "Student Success Stories",
    testimonialsSub: "Experiences shared by students, expats, and parents who came to VANTAM for practical support.",
    testimonialsVerified: "VANTAM customer story",

    contactTitle: "Let's Secure Your Landing Together",
    contactSub: "Send a request and briefly describe the situation. A local coordinator will reply to the email address you provide.",
    contactNameLabel: "Your Full Name",
    contactEmailLabel: "Email Address",
    contactTypeLabel: "Primary Area of Consultation",
    contactTypePlaceholder: "Select preferred support path...",
    contactTypeOpt1: "Support package (Prepare, Settle or Thrive)",
    contactTypeOpt2: "Single service",
    contactTypeOpt3: "B2B Partnership / Multi-student Enrollment",
    contactTypeOpt4: "Consultation or general question",
    contactMessageLabel: "Briefly describe your situation and dates...",
    contactConsent: "I agree to provide my data so VANTAM can respond to my request.",
    contactSubmitBtn: "Submit Coordination Request to VANTAM Desk",
    contactSending: "Broadcasting request to Netherlands desk...",
    contactSuccessTitle: "Request Registered Successfully!",
    contactSuccessDesc: "Thank you. Your request has been delivered. The reply will go to the email address you provided.",
    contactFailBtn: "Resubmit Request",

    modalTitle: "PDF for your selected VANTAM package",
    modalDesc: "Review the package scope and limits, then save the page as a PDF.",
    modalOfferNo: "OFFER PROSPECTUS NO",
    modalValidity: "VALID UNTIL",
    modalClientProfile: "Client Case Profile:",
    modalAdvisorDesc: "Summary of the selected VANTAM support format.",
    modalTargetPlan: "Proposed Level of Support:",
    modalPrintBtn: "Initiate PDF Device Printing",
    modalCloseBtn: "Close Memo Workspace",

    footerSub: "Relocation support, administrative timing, and specific student needs are mapped strictly based on localized consultation. VANTAM is not liable for structural governmental changes as we operate strictly inside compliant framework bounds.",
    footerContact: "Direct Local Channels:",

    housingDisclaimerTitle: "VANTAM working boundaries",
    housingDisclaimerText: "VANTAM does not provide legal, financial, insurance or real estate licensed services. We help with explanations, preparation, step planning and professional communication.",

    selectorTitle: "Choose Your Relocation Strategy",
    selectorSub: "Do you need persistent physical coordination from day-1, or do you have a single localized hurdle to cross? Select the path that fits you.",
    selectorSingleTitle: "Ad-hoc On-Demand Support",
    selectorSingleDesc: "Select a focused service when one specific step is blocking progress: BSN, DigiD, banking, insurance, GP registration, official letters or housing communication.",
    selectorPackageTitle: "Structured support packages",
    selectorPackageDesc: "Choose structured support for pre-arrival planning, first-month setup, or stronger local coordination when the situation is complex.",
    selectorConsultTitle: "Begin With a Strategic Advice Call",
    selectorConsultDesc: "Not sure where to start? Begin with a focused call and get a clear next step."
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
        { name: "DigiD activation", desc: "Step-by-step support after BSN so the student can access Dutch public-service portals." },
        { name: "Bank account", desc: "Guidance on choosing a suitable option and opening one student account." },
        { name: "Official letters", desc: "Explanation of official correspondence and help preparing a clear response or next step." }
      ]
    },
    {
      pillar: "Health and daily setup",
      sub: "Insurance, GP, university",
      items: [
        { name: "Insurance setup", desc: "Support choosing and setting up the right insurance direction for the student's situation." },
        { name: "GP / huisarts", desc: "Help finding and registering with a GP and understanding the basic healthcare route." },
        { name: "University admin", desc: "Support with department communication, administrative questions and document requests." },
        { name: "First-month steps", desc: "Practical coordination after arrival so the student is not left guessing in a new system." }
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
      uk: "Підготовча ясність до того, як студент виїде з дому.",
      ru: "Подготовительная ясность до того, как студент уедет из дома.",
      en: "Pre-arrival clarity before the student leaves home."
    },
    workload: {
      uk: "~9 годин роботи VANTAM",
      ru: "~9 часов работы VANTAM",
      en: "~9 hours of VANTAM work"
    },
    idealFor: {
      uk: "Студенти, які вже мають зарахування і хочуть чіткий план до приїзду, але більшість кроків виконуватимуть самостійно.",
      ru: "Студенты, которые уже получили зачисление и хотят четкий план до приезда, но большинство шагов будут делать самостоятельно.",
      en: "Students who already have admission and want a clear plan before arrival, but will manage most steps themselves."
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
      uk: "Студенти та молоді експати, які хочуть правильно пройти ключові практичні кроки після приїзду без самостійної навігації всією системою.",
      ru: "Студенты и молодые экспаты, которые хотят правильно пройти ключевые практические шаги после приезда без самостоятельной навигации по всей системе.",
      en: "Students and young expats who want the key practical steps handled correctly after arrival without navigating everything alone."
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
        "пріоритетна відповідь протягом 4 годин у робочий час",
        "не включено: пошук житла, юридичне представництво, ліцензована фінансова порада, платежі третіх сторін"
      ],
      ru: [
        "60 дней после приезда",
        "приоритетный ответ в течение 4 часов в рабочее время",
        "не включено: поиск жилья, юридическое представительство, лицензированная финансовая консультация, платежи третьих сторон"
      ],
      en: [
        "60 days post-arrival",
        "priority response within 4 hours during working hours",
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
    name: { uk: "Relocation Orientation", ru: "Relocation Orientation", en: "Relocation Orientation" },
    price: "€59",
    duration: { uk: "45 хв · дистанційно", ru: "45 мин · удаленно", en: "45 min · remote" },
    desc: {
      uk: "Для зарахованих студентів, які не знають, з чого почати. Ми складаємо головний таймлайн: реєстрація, BSN, банк, страхування, житлова ситуація і перші дні.",
      ru: "Для зачисленных студентов, которые не знают, с чего начать. Мы составляем основной таймлайн: регистрация, BSN, банк, страховка, жилищная ситуация и первые дни.",
      en: "For admitted students who do not know where to start. We map the main timeline: registration, BSN, bank, insurance, housing situation and first days."
    },
    result: { uk: "письмовий план дій", ru: "письменный план действий", en: "written action plan" },
    note: { uk: "Вираховується з будь-якого пакета протягом 14 днів.", ru: "Вычитается из любого пакета в течение 14 дней.", en: "Deductible from any package within 14 days." },
    cta: { uk: "Забронювати дзвінок", ru: "Забронировать звонок", en: "Book a call" }
  },
  {
    id: "consult_parent",
    name: { uk: "Parent Confidence Call", ru: "Parent Confidence Call", en: "Parent Confidence Call" },
    price: "€79",
    duration: { uk: "45 хв · дистанційно", ru: "45 мин · удаленно", en: "45 min · remote" },
    desc: {
      uk: "Для батьків, які хочуть спокійно і зрозуміло побачити, що дитині потрібно зробити в Нідерландах і де VANTAM може допомогти.",
      ru: "Для родителей, которые хотят спокойно и понятно увидеть, что ребенку нужно сделать в Нидерландах и где VANTAM может помочь.",
      en: "For parents who want a calm, clear picture of what their child needs to do in the Netherlands and where VANTAM can help."
    },
    result: { uk: "зрозумілі перші кроки студента і можливий формат підтримки", ru: "понятные первые шаги студента и возможный формат поддержки", en: "clear understanding of the student's first steps and possible support format" },
    note: { uk: "Вираховується з будь-якого пакета протягом 14 днів.", ru: "Вычитается из любого пакета в течение 14 дней.", en: "Deductible from any package within 14 days." },
    cta: { uk: "Забронювати дзвінок", ru: "Забронировать звонок", en: "Book a call" }
  },
  {
    id: "consult_urgent",
    name: { uk: "Urgent Situation Call", ru: "Urgent Situation Call", en: "Urgent Situation Call" },
    price: "€99",
    duration: { uk: "до 60 хв · пріоритет · того ж дня, якщо можливо", ru: "до 60 мин · приоритет · в тот же день, если возможно", en: "Up to 60 min · priority · same day where possible" },
    desc: {
      uk: "Для ситуацій, коли щось уже пішло не так: заблокований акаунт, пропущений дедлайн, незрозумілий офіційний лист, тиск орендодавця або терміновий наступний крок.",
      ru: "Для ситуаций, когда что-то уже пошло не так: заблокированный аккаунт, пропущенный дедлайн, непонятное официальное письмо, давление арендодателя или срочный следующий шаг.",
      en: "For situations where something has already gone wrong: locked account, missed deadline, confusing official letter, landlord pressure or urgent next step."
    },
    result: { uk: "швидка оцінка і чіткий план дій", ru: "быстрая оценка и четкий план действий", en: "quick assessment and clear action plan" },
    note: { uk: "Не вираховується. Пріоритетний слот.", ru: "Не вычитается. Приоритетный слот.", en: "Not deductible. Priority slot." },
    cta: { uk: "Забронювати зараз", ru: "Забронировать сейчас", en: "Book now" }
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
    desc: { uk: "Допомога з вибором відповідного банківського варіанта та відкриттям одного студентського рахунку.", ru: "Помощь с выбором подходящего банковского варианта и открытием одного студенческого счета.", en: "Guidance with choosing a suitable bank option and opening one student account." },
    limit: { uk: "Ліміт: один банк / один рахунок.", ru: "Лимит: один банк / один счет.", en: "Limit: one bank / one account." }
  },
  {
    id: "single_insurance_setup",
    name: { uk: "Підтримка зі страхуванням", ru: "Поддержка со страховкой", en: "Insurance Setup Support" },
    price: "€99",
    mode: { uk: "дистанційно", ru: "удаленно", en: "remote" },
    desc: { uk: "Підтримка з вибором та налаштуванням правильного страхового напрямку для ситуації студента.", ru: "Поддержка с выбором и настройкой подходящего страхового направления для ситуации студента.", en: "Support with selecting and setting up the right insurance direction for the student's situation." },
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
    name: { uk: "Ольга Ковальчук", ru: "Ольга Ковальчук", en: "Olga Kovalchuk" },
    role: { uk: "Мати студента", ru: "Мама студента", en: "Mother of Student" },
    university: { uk: "Університет Хагсе (Hague UAS)", ru: "Университет Хагсе (Hague UAS)", en: "The Hague UAS" },
    city: { uk: "Гаага", ru: "Гаага", en: "The Hague" },
    story: {
      uk: "Ми неймовірно хвилювалися через житлову кризу в Нідерландах і нідерландський податковий номер BSN. Команда VANTAM взяла на себе перевірку договору на предмет шахрайства та координацію з мерією. Син отримав BSN у перші дні, банк Bunq запрацював одразу ж! Величезна подяка за щотижневі звіти спеціально для мене.",
      ru: "Мы очень переживали из-за кризиса жилья в Нидерландах и оформления налогового номера BSN. Команда VANTAM буквально за руку провела нас: проверила договор аренды на мошенничество, записала в муниципалитет Гааги. Сын получил карту резидента и открыл счет без стресса.",
      en: "We were extremely anxious about the Dutch housing market and registration delays. VANTAM took complete charge of our file: they vetted the landlord via cadaster registries, secured a municipal registration instantly, and helped open Bunq. The weekly parent updates kept our family completely calm."
    }
  },
  {
    id: "t2",
    name: { uk: "Данило Морозов", ru: "Даниил Морозов", en: "Daniil Morozov" },
    role: { uk: "Студент-експат", ru: "Студент-экспат", en: "Expat Student" },
    university: { uk: "Делфтський технічний унівеситет (TUDelft)", ru: "Делфтский технический (TUDelft)", en: "TU Delft" },
    city: { uk: "Делфт", ru: "Делфт", en: "Delft" },
    story: {
      uk: "Замовив Settle і це було найкраще рішення. Після приїзду мені допомогли з реєстрацією, BSN, DigiD, банком, страховкою та реєстрацією у huisarts. Я точно знав, який крок робити далі.",
      ru: "Оформил Settle и ни разу не пожалел. После приезда мне помогли с регистрацией, BSN, DigiD, банком, страховкой и регистрацией у huisarts. Я точно понимал, какой шаг делать дальше.",
      en: "I chose Settle and it saved me weeks of confusion. After arrival, VANTAM helped with registration, BSN, DigiD, banking, insurance and GP registration. I always knew the next step."
    }
  },
  {
    id: "t3",
    name: { uk: "Катерина Швед", ru: "Екатерина Швед", en: "Ekaterina Shved" },
    role: { uk: "Молодий експат", ru: "Молодой экспат", en: "Young Expat" },
    university: { uk: "Університет Еразма (Erasmus University)", ru: "Университет Эразма (Erasmus University)", en: "Erasmus University" },
    city: { uk: "Роттердам", ru: "Роттердам", en: "Rotterdam" },
    story: {
      uk: "Знайшла кімнату на Facebook і засумнівалася перед оплатою депозиту. VANTAM перевірив оголошення, пояснив ризикові сигнали та допоміг підготувати правильні питання до орендодавця. Це дало мені спокій перед підписанням.",
      ru: "Нашла комнату на Facebook и засомневалась перед оплатой депозита. VANTAM проверил объявление, объяснил рисковые сигналы и помог подготовить правильные вопросы арендодателю. Это дало мне спокойствие перед подписанием.",
      en: "I found a room on Facebook and hesitated before paying a deposit. VANTAM checked the listing, explained the risk signals and helped prepare the right landlord questions. That gave me confidence before signing."
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
      uk: "Шахрайство з орендою житла (передоплата фейку)",
      ru: "Мошенничество с арендой жилья (предоплата фейку)",
      en: "Rent scam (fake landlord prepayment)"
    },
    cost: 1600,
    explanation: {
      uk: "Студент переказує кошти на іноземний рахунок до перевірки власника за кадастром, після чого фейковий орендодавець зникає з грошима.",
      ru: "Студент отправляет залог на зарубежный банковский счет до реальной кадастровой проверки, после чего фейковый хозяин пропадает.",
      en: "The student transfers prepayment to an overseas IBAN prior to verification of title deed, resulting in immediate loss."
    }
  },
  {
    id: "fine",
    label: {
      uk: "Державні штрафи за несвоєчасну реєстрацію BSN",
      ru: "Штрафы мэрии за несвоевременную регистрацию BSN",
      en: "Municipal penalty for late address registry"
    },
    cost: 350,
    explanation: {
      uk: "Несвоєчасний запис на прийом або подача договору без права реєстрації веде до порушень закону про проживання та штрафів до €350.",
      ru: "Пропуск законных сроков регистрации адреса в Gemeente или договор без права прописки ведет к муниципальному аудиту и штрафу.",
      en: "Missing legal timelines for municipal registration yields official compliance fines and freezes BSN generation."
    }
  },
  {
    id: "insurance",
    label: { 
      uk: "Неправильне оформлення медичної страховки", 
      ru: "Оформление неподходящей страховки", 
      en: "Suboptimal health insurance registration" 
    },
    cost: 450,
    explanation: {
      uk: "Реєстрація невідповідного студентського полісу веде до відмов у компенсаціях від компаній та вимушених переплат.",
      ru: "Оформление неподходящего полиса приводит к отказам страховых и вынужденной потере льготных субсидий.",
      en: "Entering incorrect insurance categories voids governmental subsidy opportunities. High out-of-pocket costs."
    }
  },
  {
    id: "hostel",
    label: { uk: "Незаплановане проживання в готелі / хостелі у вересні", ru: "Незапланированное проживание в отеле в сентябре", en: "Overstaying in high-priced hostels" },
    cost: 1200,
    explanation: {
      uk: "Через затримку з пошуком або відсутністю безпечної супроводжувальної папки доводиться орендувати хостел за шаленою ціною.",
      ru: "Из-за задержек с документами приходится неделями жить в переполненных отелях Нидерландов по пиковой цене сезона.",
      en: "Failure to organize tenancy folders smoothly forces short-term luxury hotel booking in high-demand autumn months."
    }
  },
  {
    id: "banking",
    label: { uk: "Затримки з відкриттям європейського банку", ru: "Задержка открытия европейского банковского счета", en: "Banking establishment delays" },
    cost: 200,
    explanation: {
      uk: "Вимушені додаткові комісії на конвертаціях, проблеми з покупками на касах Albert Heijn, де не працює Visa.",
      ru: "Вынужденные траты на комиссии при снятии денег, сбои при расчете картами в супермаркетах Albert Heijn.",
      en: "Loss on currency conversion and inability to spend money since premium stores strictly decline standard Visa/Mastercard."
    }
  },
  {
    id: "panic",
    label: { uk: "Втрата робочого часу батьків на паніку та дзвінки", ru: "Потеря времени родителей на панику и ночные звонки", en: "Lost parental work productivity due to extreme stress" },
    cost: 800,
    explanation: {
      uk: "Психологічна вартість хаосу: батьки відволікаються від власного бізнесу або роботи, намагаючись дистанційно координувати дитину.",
      ru: "Психологическая цена хаоса: родители вынуждены бросать свои дела дома, чтобы решать вопросы чада по телефону.",
      en: "Indirect loss of work hours and severe mental toll, trying to handle distant foreign administrative tasks remotely."
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
  { id: "c10", category: "settle", title: { uk: "Відкрити один студентський банківський рахунок", ru: "Открыть один студенческий банковский счет", en: "Open one student bank account" } },
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
      uk: "Ні. Житлові питання є лише частиною контексту. Основна цінність VANTAM — практичний студентський старт у Нідерландах: реєстрація, BSN, DigiD, банк, страхування, лікар, офіційні листи, університетські питання і впевненість батьків.",
      ru: "Нет. Жилищные вопросы — только часть контекста. Главная ценность VANTAM — практический студенческий старт в Нидерландах: регистрация, BSN, DigiD, банк, страховка, врач, официальные письма, университетские вопросы и спокойствие родителей.",
      en: "No. Housing questions are only one part of the context. VANTAM's main value is practical student setup in the Netherlands: registration, BSN, DigiD, banking, insurance, GP registration, official letters, university admin and parent confidence."
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
      uk: "Prepare діє 30 днів з моменту покупки і є довилітною підготовкою. Settle покриває 35 днів після приїзду. Thrive покриває 60 днів після приїзду з пріоритетною відповіддю у робочий час.",
      ru: "Prepare действует 30 дней с момента покупки и является довылетной подготовкой. Settle покрывает 35 дней после приезда. Thrive покрывает 60 дней после приезда с приоритетным ответом в рабочее время.",
      en: "Prepare runs for 30 days from purchase and is pre-arrival support. Settle covers 35 days post-arrival. Thrive covers 60 days post-arrival with priority response during working hours."
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
      uk: "Ні. VANTAM не є юридичною фірмою, фінансовим консультантом, страховим брокером або агентством нерухомості. Ми пояснюємо практичні кроки, допомагаємо підготувати документи і комунікацію, а для ліцензованих питань радимо звертатися до відповідних фахівців.",
      ru: "Нет. VANTAM не является юридической фирмой, финансовым консультантом, страховым брокером или агентством недвижимости. Мы объясняем практические шаги, помогаем подготовить документы и коммуникацию, а по лицензируемым вопросам рекомендуем обращаться к профильным специалистам.",
      en: "No. VANTAM is not a law firm, financial advisor, insurance broker or real estate agency. We explain practical steps and help prepare documents and communication; licensed matters should go to the relevant qualified professionals."
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
