import {DEFAULT_LOCALE} from './lib/locales';
import type {Locale} from './lib/locales';
export {DEFAULT_LOCALE, LOCALES as SUPPORTED_LOCALES} from './lib/locales';

export type Language = Locale;

type LocalizedText = Record<Language, string>;
type LocalizedList = Record<Language, string[]>;

export function localize<T>(values: Record<Language, T>, language: Language) {
  return values[language];
}

export interface TranslationMatrix {
  navContact: string;
  menu: string;
  darkTheme: string;
  lightTheme: string;
  heroHeadline: string;
  heroSub: string;
  heroPrimary: string;
  heroSecondary: string;
  localNote: string;
  contactNameLabel: string;
  contactEmailLabel: string;
  contactMessageLabel: string;
  contactSubmitBtn: string;
  contactSending: string;
  contactSuccessTitle: string;
  contactSuccessDesc: string;
  contactFailBtn: string;
  requestPrice: string;
  recommended: string;
}

export const DICTIONARY: Record<Language, TranslationMatrix> = {
  en: {
    navContact: 'Contact',
    menu: 'Menu',
    darkTheme: 'Use dark theme',
    lightTheme: 'Use light theme',
    heroHeadline: 'Practical support for international students from arrival to everyday student life in the Netherlands',
    heroSub: 'Support with relocation steps, housing preparation, first-month setup, and defined first-year situations, with clear scope and no invented guarantees.',
    heroPrimary: 'Choose your situation',
    heroSecondary: 'See the support options',
    localNote: 'Three languages. One practical route. One local contact.',
    contactNameLabel: 'Your name',
    contactEmailLabel: 'Email address',
    contactMessageLabel: 'Briefly describe your situation',
    contactSubmitBtn: 'Send enquiry',
    contactSending: 'Sending your enquiry...',
    contactSuccessTitle: 'Enquiry sent',
    contactSuccessDesc: 'Thanks. We received your enquiry and will reply to the email address you provided with possible next steps.',
    contactFailBtn: 'Send another enquiry',
    requestPrice: 'Request a price',
    recommended: 'Recommended',
  },
  uk: {
    navContact: 'Контакт',
    menu: 'Меню',
    darkTheme: 'Увімкнути темну тему',
    lightTheme: 'Увімкнути світлу тему',
    heroHeadline: 'Практична підтримка для міжнародних студентів від підготовки до приїзду до повсякденного студентського життя в Нідерландах',
    heroSub: 'Підтримка з кроками переїзду, підготовкою до житла, першим місяцем після приїзду та визначеними ситуаціями першого року, з чіткими межами без вигаданих гарантій.',
    heroPrimary: 'Оберіть свою ситуацію',
    heroSecondary: 'Подивитися варіанти підтримки',
    localNote: 'Три мови. Один практичний маршрут. Один локальний контакт.',
    contactNameLabel: "Ваше ім'я",
    contactEmailLabel: 'Електронна пошта',
    contactMessageLabel: 'Коротко опишіть свою ситуацію',
    contactSubmitBtn: 'Надіслати запит',
    contactSending: 'Надсилаємо ваш запит...',
    contactSuccessTitle: 'Запит надіслано',
    contactSuccessDesc: 'Дякуємо. Ми отримали ваш запит і відповімо на вказану адресу електронної пошти щодо можливих наступних кроків.',
    contactFailBtn: 'Надіслати ще один запит',
    requestPrice: 'Запитати ціну',
    recommended: 'Рекомендовано',
  },
  ru: {
    navContact: 'Контакт',
    menu: 'Меню',
    darkTheme: 'Включить тёмную тему',
    lightTheme: 'Включить светлую тему',
    heroHeadline: 'Практическая поддержка для международных студентов от подготовки к приезду до повседневной студенческой жизни в Нидерландах',
    heroSub: 'Поддержка с шагами переезда, подготовкой к жилью, первым месяцем после приезда и определёнными ситуациями первого года, с ясными границами без вымышленных гарантий.',
    heroPrimary: 'Выберите свою ситуацию',
    heroSecondary: 'Посмотреть варианты поддержки',
    localNote: 'Три языка. Один практический маршрут. Один локальный контакт.',
    contactNameLabel: 'Ваше имя',
    contactEmailLabel: 'Электронная почта',
    contactMessageLabel: 'Кратко опишите свою ситуацию',
    contactSubmitBtn: 'Отправить запрос',
    contactSending: 'Отправляем ваш запрос...',
    contactSuccessTitle: 'Запрос отправлен',
    contactSuccessDesc: 'Спасибо. Мы получили ваш запрос и ответим на указанный адрес электронной почты о возможных следующих шагах.',
    contactFailBtn: 'Отправить ещё один запрос',
    requestPrice: 'Запросить цену',
    recommended: 'Рекомендуется',
  },
};

export interface AudienceFocus {
  id: string;
  title: LocalizedText;
  note: LocalizedText;
  timing: LocalizedText;
}

export const AUDIENCE_FOCUS: AudienceFocus[] = [
  {
    id: 'pre_arrival',
    title: {
      en: 'Before arrival',
      uk: 'До приїзду',
      ru: 'До приезда',
    },
    note: {
      en: 'Plan the order, prepare documents, understand housing timing, and avoid preventable mistakes before the move.',
      uk: 'Сплануйте послідовність, підготуйте документи, зрозумійте таймінг житла й уникайте помилок до переїзду.',
      ru: 'Спланируйте последовательность, подготовьте документы, поймите сроки по жилью и избегайте предотвратимых ошибок до переезда.',
    },
    timing: {
      en: 'Orientation, Start, Housing Ready',
      uk: 'Орієнтація, Start, Housing Ready',
      ru: 'Ориентация, Start, Housing Ready',
    },
  },
  {
    id: 'first_year',
    title: {
      en: 'Already here',
      uk: 'Вже тут',
      ru: 'Уже здесь',
    },
    note: {
      en: 'Work through registration, letters, university administration, insurance, and defined first-year problems with visible deliverables.',
      uk: 'Опрацьовуйте реєстрацію, листи, університетську адміністрацію, страхування та визначені проблеми першого року з видимими результатами.',
      ru: 'Решайте регистрацию, письма, университетскую администрацию, страховку и определённые проблемы первого года с видимыми результатами.',
    },
    timing: {
      en: 'Start, First Year, Individual Student Services',
      uk: 'Start, First Year, Індивідуальні студентські послуги',
      ru: 'Start, First Year, Индивидуальные студенческие услуги',
    },
  },
  {
    id: 'partner',
    title: {
      en: 'Referrals and partners',
      uk: 'Реферали та партнери',
      ru: 'Рефералы и партнёры',
    },
    note: {
      en: 'Use one clean route when a university, consultant, agency, or family needs to hand over a practical student case.',
      uk: 'Використовуйте один чистий маршрут, коли університет, консультант, агенція або родина хоче передати практичний студентський кейс.',
      ru: 'Используйте один понятный маршрут, когда университет, консультант, агентство или семья хотят передать практический студенческий кейс.',
    },
    timing: {
      en: 'Partner entry and contact route',
      uk: 'Партнерський вхід і контактний маршрут',
      ru: 'Партнёрский вход и контактный маршрут',
    },
  },
];

export interface SituationOption {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  label: LocalizedText;
  targetId: 'packages' | 'housing' | 'individual-services' | 'partner-entry';
}

export const SITUATION_OPTIONS: SituationOption[] = [
  {
    id: 'moving',
    title: {
      en: 'I am moving or have just arrived',
      uk: 'Я переїжджаю або щойно приїхав(-ла)',
      ru: 'Я переезжаю или только что приехал(-а)',
    },
    description: {
      en: 'Go to Start versus First Year to choose between first-month setup and defined first-year support.',
      uk: 'Перейдіть до Start versus First Year, щоб обрати між запуском першого місяця та визначеною підтримкою на перший рік.',
      ru: 'Перейдите к Start versus First Year, чтобы выбрать между запуском первого месяца и определённой поддержкой на первый год.',
    },
    label: {
      en: 'Start versus First Year',
      uk: 'Start versus First Year',
      ru: 'Start versus First Year',
    },
    targetId: 'packages',
  },
  {
    id: 'housing',
    title: {
      en: 'I need housing now or later',
      uk: 'Мені потрібне житло зараз або пізніше',
      ru: 'Мне нужно жильё сейчас или позже',
    },
    description: {
      en: 'Go to Housing Ready versus Housing Search Campaign for preparation, applications, and campaign limits.',
      uk: 'Перейдіть до Housing Ready versus Housing Search Campaign для підготовки, заявок і меж кампанії.',
      ru: 'Перейдите к Housing Ready versus Housing Search Campaign для подготовки, заявок и ограничений кампании.',
    },
    label: {
      en: 'Housing path',
      uk: 'Житловий шлях',
      ru: 'Жилищный путь',
    },
    targetId: 'housing',
  },
  {
    id: 'problem',
    title: {
      en: 'I already live here and have a practical problem',
      uk: 'Я вже живу тут і маю практичну проблему',
      ru: 'Я уже живу здесь и у меня есть практическая проблема',
    },
    description: {
      en: 'Go to Individual Student Services for official letters, university cases, housing problems, or urgent changes.',
      uk: 'Перейдіть до Індивідуальних студентських послуг для офіційних листів, університетських кейсів, житлових проблем або термінових змін.',
      ru: 'Перейдите к Индивидуальным студенческим услугам для официальных писем, университетских кейсов, жилищных проблем или срочных изменений.',
    },
    label: {
      en: 'Individual Student Services',
      uk: 'Індивідуальні студентські послуги',
      ru: 'Индивидуальные студенческие услуги',
    },
    targetId: 'individual-services',
  },
  {
    id: 'organisation',
    title: {
      en: 'I represent an organisation',
      uk: 'Я представляю організацію',
      ru: 'Я представляю организацию',
    },
    description: {
      en: 'Go to the partner route to discuss practical student referrals and cooperation.',
      uk: 'Перейдіть до партнерського маршруту, щоб обговорити практичні студентські передачі та співпрацю.',
      ru: 'Перейдите к партнёрскому маршруту, чтобы обсудить практические студенческие передачи и сотрудничество.',
    },
    label: {
      en: 'Partner entry',
      uk: 'Партнерський вхід',
      ru: 'Партнёрский вход',
    },
    targetId: 'partner-entry',
  },
];

export interface ProcessStep {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'assess',
    title: {en: 'Assess', uk: 'Оцінити', ru: 'Оценить'},
    description: {
      en: 'Clarify the situation, what is urgent, and which support route actually fits.',
      uk: 'Уточнити ситуацію, що є терміновим і який маршрут підтримки справді підходить.',
      ru: 'Уточнить ситуацию, что срочно и какой маршрут поддержки действительно подходит.',
    },
  },
  {
    id: 'map',
    title: {en: 'Map', uk: 'Скласти карту', ru: 'Составить карту'},
    description: {
      en: 'Turn the next actions into a practical sequence with documents, deadlines, and boundaries.',
      uk: 'Перетворити наступні дії на практичну послідовність із документами, дедлайнами та межами.',
      ru: 'Превратить следующие действия в практическую последовательность с документами, сроками и границами.',
    },
  },
  {
    id: 'act',
    title: {en: 'Act & coordinate', uk: 'Діяти й координувати', ru: 'Действовать и координировать'},
    description: {
      en: 'Work through the agreed steps with defined execution limits and visible outputs.',
      uk: 'Опрацювати погоджені кроки з визначеними межами виконання та видимими результатами.',
      ru: 'Пройти согласованные шаги с определёнными пределами выполнения и видимыми результатами.',
    },
  },
  {
    id: 'verify',
    title: {en: 'Verify & continue', uk: 'Перевірити й продовжити', ru: 'Проверить и продолжить'},
    description: {
      en: 'Document what is completed, what is waiting, and whether a next route is needed.',
      uk: 'Зафіксувати, що завершено, що очікує, і чи потрібен наступний маршрут.',
      ru: 'Зафиксировать, что завершено, что ожидает, и нужен ли следующий маршрут.',
    },
  },
];

export interface PartnerAudience {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const PARTNER_AUDIENCES: PartnerAudience[] = [
  {
    id: 'universities',
    title: {en: 'Universities', uk: 'Університети', ru: 'Университеты'},
    description: {
      en: 'A practical referral route for students who need help beyond general information.',
      uk: 'Практичний маршрут передачі для студентів, яким потрібна допомога понад загальну інформацію.',
      ru: 'Практический маршрут передачи для студентов, которым нужна помощь сверх общей информации.',
    },
  },
  {
    id: 'consultants',
    title: {en: 'Education consultants', uk: 'Освітні консультанти', ru: 'Образовательные консультанты'},
    description: {
      en: 'A clean handoff when a student needs local practical follow-through in the Netherlands.',
      uk: 'Чиста передача, коли студенту потрібне локальне практичне продовження в Нідерландах.',
      ru: 'Понятная передача, когда студенту нужно локальное практическое сопровождение в Нидерландах.',
    },
  },
  {
    id: 'agencies',
    title: {en: 'Agencies and housing partners', uk: 'Агенції та житлові партнери', ru: 'Агентства и жилищные партнёры'},
    description: {
      en: 'Use one contact route instead of informal back-and-forth when a practical case needs context.',
      uk: 'Використовуйте один контактний маршрут замість неформального листування, коли практичному кейсу потрібен контекст.',
      ru: 'Используйте один контактный маршрут вместо неформальной переписки, когда практическому кейсу нужен контекст.',
    },
  },
  {
    id: 'family',
    title: {en: 'Family-supported cases', uk: 'Кейси за підтримки родини', ru: 'Кейсы при поддержке семьи'},
    description: {
      en: 'Families can open the conversation without turning the service into a parent-facing public product.',
      uk: 'Родини можуть відкрити розмову, не перетворюючи послугу на окремий батьківський публічний продукт.',
      ru: 'Семьи могут начать разговор, не превращая услугу в отдельный публичный продукт для родителей.',
    },
  },
];

export interface OfferSection {
  title: LocalizedText;
  items: LocalizedList;
}

export interface Package {
  id: 'vantam_start' | 'vantam_first_year';
  name: LocalizedText;
  shortTitle: LocalizedText;
  subtitle: LocalizedText;
  price: string;
  badge?: LocalizedText;
  audience: LocalizedText;
  outcome: LocalizedText;
  activePeriod: LocalizedText;
  reasons: LocalizedList;
  difference: LocalizedText;
  cta: LocalizedText;
  printValue: LocalizedText;
  detailSections: OfferSection[];
}

export const PREMIUM_PACKAGES: Package[] = [
  {
    id: 'vantam_start',
    name: {en: 'VANTAM Start', uk: 'VANTAM Start', ru: 'VANTAM Start'},
    shortTitle: {
      en: 'First-month execution',
      uk: 'Запуск першого місяця',
      ru: 'Запуск первого месяца',
    },
    subtitle: {
      en: 'For students who need essential setup organised and brought to a clear completion point.',
      uk: 'Для студентів, яким потрібно організувати базове налаштування й довести його до чіткої точки завершення.',
      ru: 'Для студентов, которым нужно организовать базовую настройку и довести её до понятной точки завершения.',
    },
    price: '€449',
    audience: {
      en: 'Moving soon or newly arrived students who need a defined first-month route.',
      uk: 'Студенти, які скоро переїжджають або щойно приїхали й потребують визначеного маршруту на перший місяць.',
      ru: 'Студенты, которые скоро переезжают или только что приехали и нуждаются в определённом маршруте на первый месяц.',
    },
    outcome: {
      en: 'Essential first-month setup organised and brought to a clear completion point.',
      uk: 'Базове налаштування першого місяця організоване й доведене до чіткої точки завершення.',
      ru: 'Базовая настройка первого месяца организована и доведена до понятной точки завершения.',
    },
    activePeriod: {
      en: 'Up to 35 days after arrival, including defined pre-arrival preparation.',
      uk: 'До 35 днів після приїзду, включно з визначеною підготовкою до приїзду.',
      ru: 'До 35 дней после приезда, включая определённую подготовку до приезда.',
    },
    reasons: {
      en: [
        'You need one ordered setup route instead of scattered tasks.',
        'You want registration, BSN, DigiD, bank, insurance, GP, and one defined case kept in sequence.',
        'You want visible outputs such as a Student Life Map, status overview, and next 90-day plan.',
        'You need defined support without buying a broader first-year package yet.',
      ],
      uk: [
        'Вам потрібен один впорядкований маршрут налаштування замість розрізнених завдань.',
        'Ви хочете тримати в послідовності реєстрацію, BSN, DigiD, банк, страхування, GP і один визначений кейс.',
        'Вам потрібні видимі результати: Student Life Map, огляд статусів і план на наступні 90 днів.',
        'Вам потрібна визначена підтримка без ширшого пакета на весь перший рік.',
      ],
      ru: [
        'Вам нужен один упорядоченный маршрут настройки вместо разрозненных задач.',
        'Вы хотите держать в последовательности регистрацию, BSN, DigiD, банк, страховку, GP и один определённый кейс.',
        'Вам нужны видимые результаты: Student Life Map, обзор статусов и план на следующие 90 дней.',
        'Вам нужна определённая поддержка без более широкого пакета на весь первый год.',
      ],
    },
    difference: {
      en: 'Choose Start when you need first-month execution, not the full first-year structure.',
      uk: 'Обирайте Start, коли вам потрібне виконання першого місяця, а не повна структура на перший рік.',
      ru: 'Выбирайте Start, когда вам нужно выполнение первого месяца, а не полная структура на первый год.',
    },
    cta: {
      en: 'Choose VANTAM Start',
      uk: 'Обрати VANTAM Start',
      ru: 'Выбрать VANTAM Start',
    },
    printValue: {
      en: 'First-month setup with defined pre-arrival preparation and completion deliverables.',
      uk: 'Запуск першого місяця з визначеною підготовкою до приїзду та підсумковими результатами.',
      ru: 'Запуск первого месяца с определённой подготовкой до приезда и итоговыми результатами.',
    },
    detailSections: [
      {
        title: {en: 'Your situation', uk: 'Ваша ситуація', ru: 'Ваша ситуация'},
        items: {
          en: ['You are moving soon or have just arrived.', 'You want one ordered route instead of handling registration, banking, insurance, and student admin separately.', 'You need visible completion points before deciding whether broader first-year support is necessary.'],
          uk: ['Ви скоро переїжджаєте або щойно приїхали.', 'Ви хочете один впорядкований маршрут замість окремого керування реєстрацією, банком, страхуванням і студентською адміністрацією.', 'Вам потрібні видимі точки завершення перед рішенням, чи потрібна ширша підтримка на перший рік.'],
          ru: ['Вы скоро переезжаете или только что приехали.', 'Вы хотите один упорядоченный маршрут вместо отдельного управления регистрацией, банком, страховкой и студенческой администрацией.', 'Вам нужны видимые точки завершения, прежде чем решать, нужна ли более широкая поддержка на первый год.'],
        },
      },
      {
        title: {en: 'Core outcome', uk: 'Ключовий результат', ru: 'Ключевой результат'},
        items: {
          en: ['Essential first-month setup is organised and driven toward a clear completion point.', 'The student receives one practical route covering arrival preparation, immediate registrations, and one defined follow-through case.', 'Outputs stay visible through the Student Life Map, status tracking, and a written next-step plan.'],
          uk: ['Базове налаштування першого місяця організоване й ведеться до чіткої точки завершення.', 'Студент отримує один практичний маршрут, що охоплює підготовку до приїзду, перші реєстрації та один визначений кейс продовження.', 'Результати залишаються видимими через Student Life Map, відстеження статусів і письмовий план наступних кроків.'],
          ru: ['Базовая настройка первого месяца организована и доводится до понятной точки завершения.', 'Студент получает один практический маршрут, охватывающий подготовку к приезду, первые регистрации и один определённый кейс сопровождения.', 'Результаты остаются видимыми через Student Life Map, отслеживание статусов и письменный план следующих шагов.'],
        },
      },
      {
        title: {en: 'What VANTAM does', uk: 'Що робить VANTAM', ru: 'Что делает VANTAM'},
        items: {
          en: ['Runs the intake and creates the personalised Student Life Map.', 'Prepares the ordered before-arrival and after-arrival sequence.', 'Coordinates municipality registration, BSN, DigiD, one bank process, insurance route, and GP registration.', 'Takes one university or general-administration case plus one Official Letter Action into work.', 'Maintains business-day support within the active period and records status changes clearly.'],
          uk: ['Проводить intake і створює персоналізовану Student Life Map.', 'Готує впорядковану послідовність до та після приїзду.', 'Координує муніципальну реєстрацію, BSN, DigiD, один банківський процес, страховий маршрут і реєстрацію у GP.', 'Бере в роботу один університетський або загальноадміністративний кейс плюс одну Official Letter Action.', 'Підтримує робочоденний супровід протягом активного періоду й чітко фіксує зміни статусів.'],
          ru: ['Проводит intake и создаёт персонализированную Student Life Map.', 'Готовит упорядоченную последовательность до и после приезда.', 'Координирует муниципальную регистрацию, BSN, DigiD, один банковский процесс, страховой маршрут и регистрацию у GP.', 'Берёт в работу один университетский или общий административный кейс плюс одну Official Letter Action.', 'Поддерживает сопровождение в рабочие дни в течение активного периода и чётко фиксирует изменения статусов.'],
        },
      },
      {
        title: {en: 'Delivery phases', uk: 'Етапи виконання', ru: 'Этапы выполнения'},
        items: {
          en: ['Phase 1: intake, readiness review, and ordered first sequence.', 'Phase 2: first-month execution across registrations, access, and one defined practical case.', 'Phase 3: completion view with updated statuses, retained documents, and the next 90-day route.'],
          uk: ['Етап 1: intake, перевірка готовності й упорядкована перша послідовність.', 'Етап 2: виконання першого місяця через реєстрації, доступи й один визначений практичний кейс.', 'Етап 3: підсумковий огляд з оновленими статусами, збереженими документами та маршрутом на наступні 90 днів.'],
          ru: ['Этап 1: intake, проверка готовности и упорядоченная первая последовательность.', 'Этап 2: выполнение первого месяца через регистрации, доступы и один определённый практический кейс.', 'Этап 3: итоговый обзор с обновлёнными статусами, сохранёнными документами и маршрутом на следующие 90 дней.'],
        },
      },
      {
        title: {en: 'What you receive', uk: 'Що ви отримуєте', ru: 'Что вы получаете'},
        items: {
          en: ['Updated Student Life Map', 'Completed / Pending / Waiting overview', 'Documents-to-retain list', 'Next 90-day plan', 'Completion Pack'],
          uk: ['Оновлену Student Life Map', 'Огляд статусів Завершено / У процесі / Очікує', 'Список документів, які треба зберегти', 'План на наступні 90 днів', 'Підсумковий пакет матеріалів'],
          ru: ['Обновлённую Student Life Map', 'Обзор статусов Завершено / В процессе / Ожидает', 'Список документов для сохранения', 'План на следующие 90 дней', 'Итоговый пакет материалов'],
        },
      },
      {
        title: {en: 'Scope limits', uk: 'Межі обсягу', ru: 'Границы объёма'},
        items: {
          en: ['Up to 35 days after arrival.', 'Defined execution only, not open-ended year support.', 'Statuses stay visible when a provider or authority is still processing.'],
          uk: ['До 35 днів після приїзду.', 'Лише визначене виконання, а не відкритий супровід на рік.', 'Статуси залишаються видимими, коли провайдер або орган ще обробляє справу.'],
          ru: ['До 35 дней после приезда.', 'Только определённое выполнение, а не открытое сопровождение на год.', 'Статусы остаются видимыми, когда провайдер или орган ещё обрабатывает дело.'],
        },
      },
      {
        title: {en: 'What is not included', uk: 'Що не входить', ru: 'Что не входит'},
        items: {
          en: ['Guaranteed third-party completion.', 'Unlimited support or undefined follow-up work.', 'Legal, financial, insurance, immigration, or medical advice.'],
          uk: ['Гарантоване завершення з боку третіх сторін.', 'Необмежена підтримка або невизначений подальший супровід.', 'Юридичні, фінансові, страхові, імміграційні або медичні поради.'],
          ru: ['Гарантированное завершение со стороны третьих лиц.', 'Неограниченная поддержка или неопределённое дальнейшее сопровождение.', 'Юридические, финансовые, страховые, иммиграционные или медицинские советы.'],
        },
      },
      {
        title: {en: 'Best next step', uk: 'Найкращий наступний крок', ru: 'Лучший следующий шаг'},
        items: {
          en: ['Choose VANTAM Start when you already know you need defined first-month execution.', 'Use Relocation Orientation first if you still need a practical recommendation before choosing a package.'],
          uk: ['Обирайте VANTAM Start, коли вже зрозуміло, що вам потрібне визначене виконання першого місяця.', 'Спочатку скористайтеся Relocation Orientation, якщо вам ще потрібна практична рекомендація перед вибором пакета.'],
          ru: ['Выбирайте VANTAM Start, когда уже понятно, что вам нужно определённое выполнение первого месяца.', 'Сначала используйте Relocation Orientation, если вам ещё нужна практическая рекомендация перед выбором пакета.'],
        },
      },
    ],
  },
  {
    id: 'vantam_first_year',
    name: {en: 'VANTAM First Year', uk: 'VANTAM First Year', ru: 'VANTAM First Year'},
    shortTitle: {
      en: 'Structured first-year support',
      uk: 'Структурована підтримка першого року',
      ru: 'Структурированная поддержка первого года',
    },
    subtitle: {
      en: 'For students who want first-month setup plus defined support through key practical moments of the first academic year.',
      uk: 'Для студентів, які хочуть запуск першого місяця плюс визначену підтримку через ключові практичні моменти першого академічного року.',
      ru: 'Для студентов, которые хотят запуск первого месяца плюс определённую поддержку через ключевые практические моменты первого академического года.',
    },
    price: '€899',
    badge: {en: 'Recommended', uk: 'Рекомендовано', ru: 'Рекомендуется'},
    audience: {
      en: 'Students who need the Start execution plus defined first-year follow-through.',
      uk: 'Студенти, яким потрібне виконання Start плюс визначене продовження на перший рік.',
      ru: 'Студенты, которым нужно выполнение Start плюс определённое продолжение на первый год.',
    },
    outcome: {
      en: 'Get established during the first month and stay supported through the key practical moments of the first academic year.',
      uk: 'Закріпитися протягом першого місяця та залишатися з підтримкою під час ключових практичних моментів першого академічного року.',
      ru: 'Закрепиться в течение первого месяца и оставаться с поддержкой в ключевые практические моменты первого академического года.',
    },
    activePeriod: {
      en: 'Start execution plus defined support across the first academic year.',
      uk: 'Виконання Start плюс визначена підтримка протягом першого академічного року.',
      ru: 'Выполнение Start плюс определённая поддержка в течение первого академического года.',
    },
    reasons: {
      en: [
        'You want everything in Start plus defined checkpoints during the year.',
        'You need three Action Credits and two Quick Reviews for issues that appear later.',
        'You want housing readiness and one urgent triage built into the year structure.',
        'You want documented recaps and a next activation route instead of vague “ongoing support”.',
      ],
      uk: [
        'Ви хочете все зі Start плюс визначені контрольні точки протягом року.',
        'Вам потрібні три цільові дії та два короткі перегляди для питань, які виникнуть пізніше.',
        'Вам потрібні готовність до житла й одна термінова первинна оцінка всередині річної структури.',
        'Вам потрібні задокументовані підсумки й наступний маршрут активації замість розмитої “постійної підтримки”.',
      ],
      ru: [
        'Вы хотите всё из Start плюс определённые контрольные точки в течение года.',
        'Вам нужны три целевых действия и два коротких обзора для вопросов, которые появятся позже.',
        'Вам нужны готовность к жилью и одна срочная первичная оценка внутри годовой структуры.',
        'Вам нужны задокументированные итоги и следующий маршрут активации вместо расплывчатой “постоянной поддержки”.',
      ],
    },
    difference: {
      en: 'Choose First Year when you need Start plus defined support through later first-year transitions.',
      uk: 'Обирайте First Year, коли вам потрібен Start плюс визначена підтримка для пізніших переходів першого року.',
      ru: 'Выбирайте First Year, когда вам нужен Start плюс определённая поддержка для более поздних переходов первого года.',
    },
    cta: {
      en: 'Choose VANTAM First Year',
      uk: 'Обрати VANTAM First Year',
      ru: 'Выбрать VANTAM First Year',
    },
    printValue: {
      en: 'Start execution plus checkpoints, Action Credits, Quick Reviews, housing readiness, and year-end route.',
      uk: 'Виконання Start плюс контрольні точки, цільові дії, короткі перегляди, готовність до житла й маршрут наприкінці року.',
      ru: 'Выполнение Start плюс контрольные точки, целевые действия, короткие обзоры, готовность к жилью и маршрут на конец года.',
    },
    detailSections: [
      {
        title: {en: 'Your situation', uk: 'Ваша ситуація', ru: 'Ваша ситуация'},
        items: {
          en: ['You want the first month handled and later practical issues covered by defined credits and reviews.', 'You prefer a structured year route instead of needing to restart support every time a new issue appears.', 'You want visible checkpoints, activation paths, and year-end clarity rather than vague ongoing support.'],
          uk: ['Ви хочете, щоб перший місяць був опрацьований, а пізніші практичні питання покривалися визначеними цільовими діями та короткими переглядами.', 'Ви віддаєте перевагу структурованому маршруту на рік замість повторного запуску підтримки щоразу, коли з’являється нове питання.', 'Вам потрібні видимі контрольні точки, шляхи активації та ясність наприкінці року замість розмитої постійної підтримки.'],
          ru: ['Вы хотите, чтобы первый месяц был отработан, а более поздние практические вопросы покрывались определёнными целевыми действиями и короткими обзорами.', 'Вы предпочитаете структурированный маршрут на год вместо повторного запуска поддержки каждый раз, когда появляется новый вопрос.', 'Вам нужны видимые контрольные точки, пути активации и ясность к концу года вместо расплывчатой постоянной поддержки.'],
        },
      },
      {
        title: {en: 'Core outcome', uk: 'Ключовий результат', ru: 'Ключевой результат'},
        items: {
          en: ['Everything in VANTAM Start is included.', 'Key practical moments of the first academic year stay covered through defined checkpoints, credits, and reviews.', 'The student finishes the year with documented recaps and a clear next activation route.'],
          uk: ['Усе з VANTAM Start входить.', 'Ключові практичні моменти першого академічного року залишаються покритими через визначені контрольні точки, цільові дії та короткі перегляди.', 'Студент завершує рік із задокументованими підсумками та чітким наступним маршрутом активації.'],
          ru: ['Всё из VANTAM Start включено.', 'Ключевые практические моменты первого академического года остаются покрытыми через определённые контрольные точки, целевые действия и короткие обзоры.', 'Студент завершает год с задокументированными итогами и чётким следующим маршрутом активации.'],
        },
      },
      {
        title: {en: 'What VANTAM does', uk: 'Що робить VANTAM', ru: 'Что делает VANTAM'},
        items: {
          en: ['Delivers the full Start execution first.', 'Runs the 90-Day Check, Mid-Year Check, and Year-End Check.', 'Uses three Action Credits for defined issues that appear later in the year.', 'Uses two Quick Reviews for short documents or messages that need fast practical review.', 'Includes one Housing Readiness Activation and one Urgent Triage within the year structure.', 'Provides an optional parent update only with separate written consent.'],
          uk: ['Спочатку повністю виконує Start.', 'Проводить перевірку через 90 днів, перевірку в середині року та перевірку наприкінці року.', 'Використовує три цільові дії для визначених питань, що з’являються пізніше протягом року.', 'Використовує два короткі перегляди для коротких документів або повідомлень, які потребують швидкого практичного перегляду.', 'Включає одну активацію Housing Readiness і одну термінову первинну оцінку в межах річної структури.', 'Надає необов’язкове оновлення для батьків лише за окремою письмовою згодою.'],
          ru: ['Сначала полностью выполняет Start.', 'Проводит проверку через 90 дней, проверку в середине года и проверку в конце года.', 'Использует три целевых действия для определённых вопросов, которые появляются позже в течение года.', 'Использует два коротких обзора для коротких документов или сообщений, которым нужен быстрый практический обзор.', 'Включает одну активацию Housing Readiness и одну срочную первичную оценку в рамках годовой структуры.', 'Даёт необязательное обновление для родителей только по отдельному письменному согласию.'],
        },
      },
      {
        title: {en: 'Delivery phases', uk: 'Етапи виконання', ru: 'Этапы выполнения'},
        items: {
          en: ['Phase 1: complete Start and establish the baseline route.', 'Phase 2: maintain the year through checkpoints, credits, and short reviews.', 'Phase 3: close the cycle with documented recaps, year-end planning, and the next activation path.'],
          uk: ['Етап 1: завершити Start і зафіксувати базовий маршрут.', 'Етап 2: вести рік через контрольні точки, цільові дії та короткі перегляди.', 'Етап 3: закрити цикл задокументованими підсумками, планом на кінець року й наступним шляхом активації.'],
          ru: ['Этап 1: завершить Start и зафиксировать базовый маршрут.', 'Этап 2: вести год через контрольные точки, целевые действия и короткие обзоры.', 'Этап 3: закрыть цикл задокументированными итогами, планом на конец года и следующим путём активации.'],
        },
      },
      {
        title: {en: 'What you receive', uk: 'Що ви отримуєте', ru: 'Что вы получаете'},
        items: {
          en: ['Updated Student Life Map', 'Documented case history maintained during the engagement', 'Checkpoint Recaps', 'Year-end plan', 'Next activation route'],
          uk: ['Оновлену Student Life Map', 'Задокументовану історію кейсу протягом співпраці', 'Підсумки контрольних точок', 'План наприкінці року', 'Наступний маршрут активації'],
          ru: ['Обновлённую Student Life Map', 'Задокументированную историю кейса в течение сотрудничества', 'Итоги контрольных точек', 'План на конец года', 'Следующий маршрут активации'],
        },
      },
      {
        title: {en: 'Scope limits', uk: 'Межі обсягу', ru: 'Границы объёма'},
        items: {
          en: ['Support stays within defined checkpoints, credits, and reviews.', 'Action Credits and Quick Reviews do not convert into unlimited open support.', 'Urgency and third-party timelines remain subject to real provider and authority constraints.'],
          uk: ['Підтримка залишається в межах визначених контрольних точок, цільових дій і коротких переглядів.', 'Action Credits і Quick Reviews не перетворюються на необмежену відкриту підтримку.', 'Терміновість і таймінги третіх сторін усе ще залежать від реальних обмежень провайдерів та органів.'],
          ru: ['Поддержка остаётся в пределах определённых контрольных точек, целевых действий и коротких обзоров.', 'Action Credits и Quick Reviews не превращаются в неограниченную открытую поддержку.', 'Срочность и сроки третьих сторон всё ещё зависят от реальных ограничений провайдеров и органов.'],
        },
      },
      {
        title: {en: 'Action Credit definition', uk: 'Визначення Action Credit', ru: 'Определение Action Credit'},
        items: {
          en: ['One defined problem', 'One agreed outcome', 'One document set', 'Up to two communication rounds', 'Completion Recap'],
          uk: ['Одна визначена проблема', 'Один погоджений результат', 'Один пакет документів', 'До двох раундів комунікації', 'Підсумок виконання'],
          ru: ['Одна определённая проблема', 'Один согласованный результат', 'Один пакет документов', 'До двух раундов коммуникации', 'Итог выполнения'],
        },
      },
      {
        title: {en: 'Quick Review definition', uk: 'Визначення Quick Review', ru: 'Определение Quick Review'},
        items: {
          en: ['One short letter, short contract, university message, or insurance communication', 'No drafting', 'No third-party communication', 'No multi-document case'],
          uk: ['Один короткий лист, короткий договір, університетське повідомлення або страхова комунікація', 'Без підготовки тексту з нуля', 'Без комунікації з третіми сторонами', 'Без багатодокументного кейсу'],
          ru: ['Одно короткое письмо, короткий договор, университетское сообщение или страховая коммуникация', 'Без подготовки текста с нуля', 'Без коммуникации с третьими сторонами', 'Без многодокументного кейса'],
        },
      },
      {
        title: {en: 'What is not included', uk: 'Що не входить', ru: 'Что не входит'},
        items: {
          en: ['Unlimited support implication', 'Live portal or dashboard', 'Guaranteed response time', 'Guaranteed third-party decisions'],
          uk: ['Натяк на необмежену підтримку', 'Живий портал або клієнтський кабінет', 'Гарантований час відповіді', 'Гарантовані рішення третіх сторін'],
          ru: ['Намёк на неограниченную поддержку', 'Живой портал или клиентский кабинет', 'Гарантированное время ответа', 'Гарантированные решения третьих сторон'],
        },
      },
    ],
  },
];

export interface Consultation {
  id: 'relocation_orientation';
  name: LocalizedText;
  price: string;
  duration: LocalizedText;
  summary: LocalizedText;
  deliverables: LocalizedList;
  note: LocalizedText;
  cta: LocalizedText;
}

export const CONSULTATIONS_STORE: Consultation[] = [
  {
    id: 'relocation_orientation',
    name: {en: 'Relocation Orientation', uk: 'Relocation Orientation', ru: 'Relocation Orientation'},
    price: '€59',
    duration: {
      en: '45 minutes · remote',
      uk: '45 хвилин · дистанційно',
      ru: '45 минут · удалённо',
    },
    summary: {
      en: 'A first paid step for students who need a practical assessment before choosing the right product.',
      uk: 'Перший платний крок для студентів, яким потрібна практична оцінка перед вибором правильного продукту.',
      ru: 'Первый платный шаг для студентов, которым нужна практическая оценка перед выбором правильного продукта.',
    },
    deliverables: {
      en: ['Situation assessment', 'Personalised action sequence', 'Written recap', 'Product recommendation'],
      uk: ['Оцінка ситуації', 'Персоналізована послідовність дій', 'Письмовий підсумок', 'Рекомендація продукту'],
      ru: ['Оценка ситуации', 'Персонализированная последовательность действий', 'Письменный итог', 'Рекомендация продукта'],
    },
    note: {
      en: 'The €59 may be credited toward VANTAM Start or VANTAM First Year within 14 days.',
      uk: '€59 можуть бути зараховані у VANTAM Start або VANTAM First Year протягом 14 днів.',
      ru: '€59 могут быть зачтены в VANTAM Start или VANTAM First Year в течение 14 дней.',
    },
    cta: {
      en: 'Request Relocation Orientation',
      uk: 'Запитати Relocation Orientation',
      ru: 'Запросить Relocation Orientation',
    },
  },
];

export interface HousingProduct {
  id: 'housing_ready' | 'housing_campaign';
  name: LocalizedText;
  price: string;
  outcome: LocalizedText;
  period: LocalizedText;
  limits: LocalizedList;
  optionalAdditions: LocalizedList;
  cta: LocalizedText;
}

export const HOUSING_PRODUCTS: HousingProduct[] = [
  {
    id: 'housing_ready',
    name: {en: 'Housing Ready', uk: 'Housing Ready', ru: 'Housing Ready'},
    price: '€249',
    outcome: {
      en: 'A complete application-ready housing profile and the first qualified submissions.',
      uk: 'Повний житловий профіль, готовий до заявок, і перші кваліфіковані подання.',
      ru: 'Полный жилищный профиль, готовый к заявкам, и первые квалифицированные подачи.',
    },
    period: {
      en: '30 days',
      uk: '30 днів',
      ru: '30 дней',
    },
    limits: {
      en: ['Budget and criteria review', 'Realistic housing strategy', 'Renter profile and guarantor positioning', 'Document checklist and guarantor checklist', 'Reusable introduction message', 'Application Pack', 'Up to three Qualified Applications', 'Basic fit check before each submission', 'One response/offer screen', 'Final next-step plan'],
      uk: ['Огляд бюджету та критеріїв', 'Реалістична житлова стратегія', 'Профіль орендаря й позиціонування гаранта', 'Чеклист документів і чеклист гаранта', 'Багаторазове вступне повідомлення', 'Пакет документів для подання', 'До трьох кваліфікованих заявок', 'Базова перевірка відповідності перед кожним поданням', 'Один перегляд відповіді або оферу', 'Фінальний план наступних кроків'],
      ru: ['Обзор бюджета и критериев', 'Реалистичная жилищная стратегия', 'Профиль арендатора и позиционирование гаранта', 'Чеклист документов и чеклист гаранта', 'Многоразовое вступительное сообщение', 'Пакет документов для подачи', 'До трёх квалифицированных заявок', 'Базовая проверка соответствия перед каждой подачей', 'Один разбор ответа или офера', 'Финальный план следующих шагов'],
    },
    optionalAdditions: {
      en: ['Unused application slots may remain active for another 30 days when no suitable properties were available.'],
      uk: ['Невикористані слоти подань можуть залишатися активними ще 30 днів, якщо не було відповідних об’єктів.'],
      ru: ['Неиспользованные слоты подач могут оставаться активными ещё 30 дней, если не было подходящих объектов.'],
    },
    cta: {
      en: 'Choose Housing Ready',
      uk: 'Обрати Housing Ready',
      ru: 'Выбрать Housing Ready',
    },
  },
  {
    id: 'housing_campaign',
    name: {en: 'Housing Search Campaign', uk: 'Housing Search Campaign', ru: 'Housing Search Campaign'},
    price: '€649',
    outcome: {
      en: 'A structured six-week housing campaign with a visible application pipeline and fixed execution limits.',
      uk: 'Структурована шеститижнева житлова кампанія з видимою воронкою заявок і фіксованими межами виконання.',
      ru: 'Структурированная шестинедельная жилищная кампания с видимой воронкой заявок и фиксированными пределами выполнения.',
    },
    period: {
      en: 'Six weeks',
      uk: 'Шість тижнів',
      ru: 'Шесть недель',
    },
    limits: {
      en: ['Housing strategy', 'Affordability and criteria review', 'Complete Application Pack', 'Guarantor positioning', 'Search-channel plan', 'Up to ten Qualified Applications', 'Housing Pipeline', 'Up to three Active Lead Cases', 'Up to two communication rounds per lead', 'Preparation for up to two viewings', 'Viewing checklist', 'One Housing Offer & Contract Check', 'Weekly pipeline update', 'Campaign recap', 'Check-in readiness checklist after success'],
      uk: ['Житлова стратегія', 'Огляд доступності та критеріїв', 'Повний пакет документів для подання', 'Позиціонування гаранта', 'План каналів пошуку', 'До десяти кваліфікованих заявок', 'Воронка житлових заявок', 'До трьох активних кейсів із відповіддю', 'До двох раундів комунікації на один активний кейс', 'Підготовка до двох переглядів', 'Чеклист перегляду', 'Один Housing Offer & Contract Check', 'Щотижневе оновлення воронки', 'Підсумок кампанії', 'Чеклист готовності після успішного заселення'],
      ru: ['Жилищная стратегия', 'Обзор доступности и критериев', 'Полный пакет документов для подачи', 'Позиционирование гаранта', 'План каналов поиска', 'До десяти квалифицированных заявок', 'Воронка жилищных заявок', 'До трёх активных кейсов с ответом', 'До двух раундов коммуникации на один активный кейс', 'Подготовка к двум просмотрам', 'Чеклист просмотра', 'Один Housing Offer & Contract Check', 'Еженедельное обновление воронки', 'Итог кампании', 'Чеклист готовности после успешного заселения'],
    },
    optionalAdditions: {
      en: ['Attended viewing', 'Travel supplement', 'Five additional applications', 'Campaign extension', 'In-person check-in', 'Deposit / landlord problem — Request a price'],
      uk: ['Супровід на перегляді', 'Доплата за поїздку', 'П’ять додаткових заявок', 'Продовження кампанії', 'Особиста зустріч для перевірки стану', 'Проблема з депозитом / орендодавцем — Запитати ціну'],
      ru: ['Сопровождение на просмотре', 'Доплата за поездку', 'Пять дополнительных заявок', 'Продление кампании', 'Личная встреча для проверки статуса', 'Проблема с депозитом / арендодателем — Запросить цену'],
    },
    cta: {
      en: 'Choose Housing Search Campaign',
      uk: 'Обрати Housing Search Campaign',
      ru: 'Выбрать Housing Search Campaign',
    },
  },
];

export interface IndividualService {
  slug: string;
  name: LocalizedText;
  price: string;
  summary: LocalizedText;
  boundary: LocalizedText;
}

export interface ServiceGroup {
  id: 'a' | 'b' | 'c' | 'd';
  title: LocalizedText;
  description: LocalizedText;
  services: IndividualService[];
}

export const INDIVIDUAL_SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: 'a',
    title: {
      en: 'A — Official & Administrative Problems',
      uk: 'A — Офіційні та адміністративні проблеми',
      ru: 'A — Официальные и административные проблемы',
    },
    description: {
      en: 'Letters, registration issues, lost-document sequences, and practical administrative follow-through.',
      uk: 'Листи, проблеми з реєстрацією, послідовності після втрати документів і практичне адміністративне продовження.',
      ru: 'Письма, проблемы с регистрацией, последовательности после потери документов и практическое административное сопровождение.',
    },
    services: [
      {
        slug: 'official_letter_action',
        name: {en: 'Official Letter Action', uk: 'Official Letter Action', ru: 'Official Letter Action'},
        price: '€79',
        summary: {
          en: 'Explain one official letter, the deadline, the required documents, and prepare the response or next action.',
          uk: 'Пояснити один офіційний лист, дедлайн, потрібні документи та підготувати відповідь або наступну дію.',
          ru: 'Объяснить одно официальное письмо, срок, нужные документы и подготовить ответ или следующее действие.',
        },
        boundary: {
          en: 'One letter only. Not legal representation.',
          uk: 'Лише один лист. Не юридичне представництво.',
          ru: 'Только одно письмо. Не юридическое представительство.',
        },
      },
      {
        slug: 'administration_problem_support',
        name: {en: 'Administration Problem Support', uk: 'Administration Problem Support', ru: 'Administration Problem Support'},
        price: 'Request a price',
        summary: {
          en: 'Municipality, BRP, DigiD, bank administration, registration, or repeated document-request problems.',
          uk: 'Проблеми з муніципалітетом, BRP, DigiD, банківською адміністрацією, реєстрацією або повторними запитами документів.',
          ru: 'Проблемы с муниципалитетом, BRP, DigiD, банковской администрацией, регистрацией или повторными запросами документов.',
        },
        boundary: {
          en: 'Scope depends on history, parties, and documentation.',
          uk: 'Обсяг залежить від історії, сторін і документів.',
          ru: 'Объём зависит от истории, сторон и документов.',
        },
      },
      {
        slug: 'lost_document_coordination',
        name: {en: 'Lost Document Coordination', uk: 'Lost Document Coordination', ru: 'Lost Document Coordination'},
        price: 'Request a price',
        summary: {
          en: 'Practical sequence after losing a passport, residence card, or important document across police, embassy, IND, and municipality.',
          uk: 'Практична послідовність після втрати паспорта, карти побуту або важливого документа через поліцію, посольство, IND і муніципалітет.',
          ru: 'Практическая последовательность после потери паспорта, карты проживания или важного документа через полицию, посольство, IND и муниципалитет.',
        },
        boundary: {
          en: 'No legal representation claim.',
          uk: 'Без заяв про юридичне представництво.',
          ru: 'Без заявлений о юридическом представительстве.',
        },
      },
    ],
  },
  {
    id: 'b',
    title: {
      en: 'B — University, Work & Insurance',
      uk: 'B — Університет, робота та страхування',
      ru: 'B — Университет, работа и страховка',
    },
    description: {
      en: 'Defined academic, internship, work, and insurance-related practical cases.',
      uk: 'Визначені практичні кейси, пов’язані з навчанням, стажуванням, роботою та страхуванням.',
      ru: 'Определённые практические кейсы, связанные с учёбой, стажировкой, работой и страховкой.',
    },
    services: [
      {
        slug: 'university_administration_case',
        name: {en: 'University Administration Case', uk: 'University Administration Case', ru: 'University Administration Case'},
        price: '€119',
        summary: {
          en: 'One defined enrolment, tuition, student-card, missing-document, internship-form, or department-communication issue.',
          uk: 'Одна визначена проблема з enrolment, tuition, student card, missing document, internship form або department communication.',
          ru: 'Одна определённая проблема с enrolment, tuition, student card, missing document, internship form или department communication.',
        },
        boundary: {
          en: 'One defined case.',
          uk: 'Один визначений кейс.',
          ru: 'Один определённый кейс.',
        },
      },
      {
        slug: 'academic_issue_support',
        name: {en: 'Academic Issue Support', uk: 'Academic Issue Support', ru: 'Academic Issue Support'},
        price: 'Request a price',
        summary: {
          en: 'Study delay, attendance warning, resit administration, study-progress concern, or preparation for a study-adviser meeting.',
          uk: 'Затримка в навчанні, попередження щодо відвідуваності, адміністрація перескладання, занепокоєння щодо прогресу або підготовка до зустрічі з навчальним радником.',
          ru: 'Задержка в учёбе, предупреждение по посещаемости, оформление пересдачи, беспокойство по прогрессу или подготовка к встрече с учебным консультантом.',
        },
        boundary: {
          en: 'No academic or legal representation claim.',
          uk: 'Без заяв про академічне або юридичне представництво.',
          ru: 'Без заявлений об академическом или юридическом представительстве.',
        },
      },
      {
        slug: 'internship_administration',
        name: {en: 'Internship Administration', uk: 'Internship Administration', ru: 'Internship Administration'},
        price: '€139',
        summary: {
          en: 'Documents and coordination among the student, university, and company.',
          uk: 'Документи та координація між студентом, університетом і компанією.',
          ru: 'Документы и координация между студентом, университетом и компанией.',
        },
        boundary: {
          en: 'Defined internship administration scope.',
          uk: 'Визначений обсяг internship administration.',
          ru: 'Определённый объём internship administration.',
        },
      },
      {
        slug: 'work_insurance_transition',
        name: {en: 'Work & Insurance Transition', uk: 'Work & Insurance Transition', ru: 'Work & Insurance Transition'},
        price: '€149',
        summary: {
          en: 'Employment or paid-internship documents, insurance implications, and the practical sequence.',
          uk: 'Документи щодо роботи або paid internship, наслідки для страхування та практична послідовність.',
          ru: 'Документы по работе или paid internship, последствия для страховки и практическая последовательность.',
        },
        boundary: {
          en: 'Practical sequence only. Not regulated advice.',
          uk: 'Лише практична послідовність. Не регульована порада.',
          ru: 'Только практическая последовательность. Не регулируемая консультация.',
        },
      },
      {
        slug: 'employment_administration_check',
        name: {en: 'Employment Administration Check', uk: 'Employment Administration Check', ru: 'Employment Administration Check'},
        price: '€119',
        summary: {
          en: 'One employment or internship document, payslip, or practical condition plus next actions.',
          uk: 'Один документ щодо роботи або стажування, payslip або практична умова плюс наступні дії.',
          ru: 'Один документ по работе или стажировке, payslip или практическое условие плюс следующие действия.',
        },
        boundary: {
          en: 'Not employment-law advice.',
          uk: 'Не порада з трудового права.',
          ru: 'Не совет по трудовому праву.',
        },
      },
      {
        slug: 'cak_svb_case_support',
        name: {en: 'CAK / SVB Case Support', uk: 'CAK / SVB Case Support', ru: 'CAK / SVB Case Support'},
        price: 'Request a price',
        summary: {
          en: 'Letter, documents, route, deadline, and practical communication around CAK or SVB issues.',
          uk: 'Лист, документи, маршрут, дедлайн і практична комунікація щодо питань CAK або SVB.',
          ru: 'Письмо, документы, маршрут, срок и практическая коммуникация по вопросам CAK или SVB.',
        },
        boundary: {
          en: 'Not legal or insurance advice.',
          uk: 'Не юридична чи страхова порада.',
          ru: 'Не юридическая и не страховая консультация.',
        },
      },
    ],
  },
  {
    id: 'c',
    title: {
      en: 'C — Housing Problems',
      uk: 'C — Житлові проблеми',
      ru: 'C — Жилищные проблемы',
    },
    description: {
      en: 'Offer review, landlord problems, move-out issues, and emergency housing changes.',
      uk: 'Перевірка оферу, проблеми з орендодавцем, виїзд і термінові житлові зміни.',
      ru: 'Проверка офера, проблемы с арендодателем, выезд и срочные жилищные изменения.',
    },
    services: [
      {
        slug: 'housing_offer_contract_check',
        name: {en: 'Housing Offer & Contract Check', uk: 'Housing Offer & Contract Check', ru: 'Housing Offer & Contract Check'},
        price: '€129',
        summary: {
          en: 'Review the offer, landlord or agency information, payment structure, deposit, duration, termination terms, unusual conditions, and practical questions.',
          uk: 'Перевірити офер, інформацію про орендодавця чи агенцію, структуру платежів, депозит, тривалість, умови припинення, незвичні умови та практичні питання.',
          ru: 'Проверить офер, информацию об арендодателе или агентстве, структуру платежей, депозит, длительность, условия прекращения, необычные условия и практические вопросы.',
        },
        boundary: {
          en: 'No legal-advice or legitimacy guarantee.',
          uk: 'Без юридичної поради чи гарантії легітимності.',
          ru: 'Без юридической консультации или гарантии легитимности.',
        },
      },
      {
        slug: 'landlord_problem_evidence_pack',
        name: {en: 'Landlord Problem & Evidence Pack', uk: 'Landlord Problem & Evidence Pack', ru: 'Landlord Problem & Evidence Pack'},
        price: 'Request a price',
        summary: {
          en: 'Create a chronology, organise photos and evidence, prepare communication, and map the escalation route.',
          uk: 'Скласти хронологію, впорядкувати фото й докази, підготувати комунікацію та маршрут ескалації.',
          ru: 'Составить хронологию, упорядочить фото и доказательства, подготовить коммуникацию и маршрут эскалации.',
        },
        boundary: {
          en: 'Practical evidence structure only.',
          uk: 'Лише практична структура доказів.',
          ru: 'Только практическая структура доказательств.',
        },
      },
      {
        slug: 'move_out_deposit_support',
        name: {en: 'Move-out & Deposit Support', uk: 'Move-out & Deposit Support', ru: 'Move-out & Deposit Support'},
        price: 'Request a price',
        summary: {
          en: 'Evidence plan, inspection preparation, deposit request, and communication strategy.',
          uk: 'План доказів, підготовка до огляду, запит депозиту та стратегія комунікації.',
          ru: 'План доказательств, подготовка к осмотру, запрос депозита и стратегия коммуникации.',
        },
        boundary: {
          en: 'Not legal representation.',
          uk: 'Не юридичне представництво.',
          ru: 'Не юридическое представительство.',
        },
      },
      {
        slug: 'emergency_relocation_coordination',
        name: {en: 'Emergency Relocation Coordination', uk: 'Emergency Relocation Coordination', ru: 'Emergency Relocation Coordination'},
        price: 'Request a price',
        summary: {
          en: 'Temporary-accommodation route, move sequence, documents, landlord communication, and the next housing route.',
          uk: 'Маршрут тимчасового житла, послідовність переїзду, документи, комунікація з орендодавцем і наступний житловий маршрут.',
          ru: 'Маршрут временного жилья, последовательность переезда, документы, коммуникация с арендодателем и следующий жилищный маршрут.',
        },
        boundary: {
          en: 'No accommodation guarantee.',
          uk: 'Без гарантії житла.',
          ru: 'Без гарантии жилья.',
        },
      },
    ],
  },
  {
    id: 'd',
    title: {
      en: 'D — Urgent & Major Life Changes',
      uk: 'D — Термінові та великі життєві зміни',
      ru: 'D — Срочные и крупные жизненные изменения',
    },
    description: {
      en: 'Urgent practical assessment and major transition routes for the next phase of student life.',
      uk: 'Термінова практична оцінка та маршрути великих переходів для наступного етапу студентського життя.',
      ru: 'Срочная практическая оценка и маршруты крупных переходов для следующего этапа студенческой жизни.',
    },
    services: [
      {
        slug: 'urgent_situation_assessment',
        name: {en: 'Urgent Situation Assessment', uk: 'Urgent Situation Assessment', ru: 'Urgent Situation Assessment'},
        price: '€99',
        summary: {
          en: 'Priority assessment and a written immediate-action plan.',
          uk: 'Пріоритетна оцінка та письмовий план негайних дій.',
          ru: 'Приоритетная оценка и письменный план немедленных действий.',
        },
        boundary: {
          en: 'No unapproved response-time promise.',
          uk: 'Без неузгодженої обіцянки часу відповіді.',
          ru: 'Без несогласованного обещания времени ответа.',
        },
      },
      {
        slug: 'complex_urgent_case',
        name: {en: 'Complex Urgent Case', uk: 'Complex Urgent Case', ru: 'Complex Urgent Case'},
        price: 'Request a price',
        summary: {
          en: 'Several parties, several documents, or an urgent deadline across multiple practical tracks.',
          uk: 'Кілька сторін, кілька документів або терміновий дедлайн через кілька практичних напрямів.',
          ru: 'Несколько сторон, несколько документов или срочный срок через несколько практических направлений.',
        },
        boundary: {
          en: 'Scope depends on complexity.',
          uk: 'Обсяг залежить від складності.',
          ru: 'Объём зависит от сложности.',
        },
      },
      {
        slug: 'graduation_orientation_year_roadmap',
        name: {en: 'Graduation & Orientation Year Roadmap', uk: 'Graduation & Orientation Year Roadmap', ru: 'Graduation & Orientation Year Roadmap'},
        price: '€149',
        summary: {
          en: 'Graduation timeline, orientation-year preparation, work, insurance, housing, and registration changes.',
          uk: 'Таймлайн випуску, підготовка до orientation year, зміни в роботі, страхуванні, житлі та реєстрації.',
          ru: 'Таймлайн выпуска, подготовка к orientation year, изменения в работе, страховке, жилье и регистрации.',
        },
        boundary: {
          en: 'Not immigration advice.',
          uk: 'Не імміграційна порада.',
          ru: 'Не иммиграционная консультация.',
        },
      },
      {
        slug: 'moving_leaving_netherlands',
        name: {en: 'Moving or Leaving the Netherlands', uk: 'Moving or Leaving the Netherlands', ru: 'Moving or Leaving the Netherlands'},
        price: '€149',
        summary: {
          en: 'Municipality, deregistration, housing, insurance, subscriptions, and remaining obligations.',
          uk: 'Муніципалітет, зняття з реєстрації, житло, страхування, підписки та залишкові зобов’язання.',
          ru: 'Муниципалитет, снятие с регистрации, жильё, страховка, подписки и оставшиеся обязательства.',
        },
        boundary: {
          en: 'Practical sequence only.',
          uk: 'Лише практична послідовність.',
          ru: 'Только практическая последовательность.',
        },
      },
    ],
  },
];

export interface StudentLifeArea {
  area: LocalizedText;
  status: 'completed' | 'in_progress' | 'waiting_student' | 'waiting_third_party' | 'activate_later' | 'risk_identified';
  summary: LocalizedText;
  supportRoute: LocalizedText;
}

export const STUDENT_LIFE_STATUSES: Record<StudentLifeArea['status'], LocalizedText> = {
  completed: {en: 'Completed', uk: 'Завершено', ru: 'Завершено'},
  in_progress: {en: 'In progress', uk: 'У процесі', ru: 'В процессе'},
  waiting_student: {en: 'Waiting for student', uk: 'Очікує студента', ru: 'Ожидает студента'},
  waiting_third_party: {en: 'Waiting for third party', uk: 'Очікує третю сторону', ru: 'Ожидает третью сторону'},
  activate_later: {en: 'Activate later', uk: 'Активувати пізніше', ru: 'Активировать позже'},
  risk_identified: {en: 'Risk identified', uk: 'Ризик виявлено', ru: 'Риск выявлен'},
};

export const STUDENT_LIFE_MAP_PREVIEW: StudentLifeArea[] = [
  {
    area: {en: 'Arrival & Documents', uk: 'Приїзд і документи', ru: 'Приезд и документы'},
    status: 'completed',
    summary: {
      en: 'Core arrival tasks are organised and brought to a finished state.',
      uk: 'Базові завдання прибуття організовані й доведені до завершеного стану.',
      ru: 'Базовые задачи прибытия организованы и доведены до завершённого состояния.',
    },
    supportRoute: {
      en: 'Registration, BSN, DigiD, and stored completion notes.',
      uk: 'Реєстрація, BSN, DigiD і збережені підсумкові нотатки.',
      ru: 'Регистрация, BSN, DigiD и сохранённые итоговые заметки.',
    },
  },
  {
    area: {en: 'Housing', uk: 'Житло', ru: 'Жильё'},
    status: 'in_progress',
    summary: {
      en: 'The housing route is active with visible next actions and tracked responses.',
      uk: 'Житловий маршрут активний із видимими наступними діями та відстежуваними відповідями.',
      ru: 'Жилищный маршрут активен с видимыми следующими действиями и отслеживаемыми ответами.',
    },
    supportRoute: {
      en: 'Application pack, qualified submissions, and lead handling.',
      uk: 'Пакет подання, кваліфіковані заявки та робота з активними кейсами.',
      ru: 'Пакет подачи, квалифицированные заявки и работа с активными кейсами.',
    },
  },
  {
    area: {en: 'University', uk: 'Університет', ru: 'Университет'},
    status: 'waiting_student',
    summary: {
      en: 'A next step is clear, but a student document or confirmation is still needed.',
      uk: 'Наступний крок уже зрозумілий, але ще потрібен документ або підтвердження від студента.',
      ru: 'Следующий шаг уже ясен, но ещё нужен документ или подтверждение от студента.',
    },
    supportRoute: {
      en: 'Defined checklist, deadline view, and reactivation point.',
      uk: 'Визначений чеклист, огляд дедлайну та точка повторної активації.',
      ru: 'Определённый чеклист, обзор срока и точка повторной активации.',
    },
  },
  {
    area: {en: 'Work & Internship', uk: 'Робота та стажування', ru: 'Работа и стажировка'},
    status: 'activate_later',
    summary: {
      en: 'This area is mapped now so it can be activated quickly when it becomes relevant.',
      uk: 'Ця зона вже позначена зараз, щоб її можна було швидко активувати, коли вона стане актуальною.',
      ru: 'Эта зона уже отмечена сейчас, чтобы её можно было быстро активировать, когда она станет актуальной.',
    },
    supportRoute: {
      en: 'Future checkpoint, transition preparation, and practical route notes.',
      uk: 'Майбутня контрольна точка, підготовка переходу та нотатки практичного маршруту.',
      ru: 'Будущая контрольная точка, подготовка перехода и заметки практического маршрута.',
    },
  },
  {
    area: {en: 'Insurance & Healthcare', uk: 'Страхування та медицина', ru: 'Страховка и медицина'},
    status: 'waiting_third_party',
    summary: {
      en: 'The sequence is underway, but an insurer or provider still controls the next movement.',
      uk: 'Послідовність уже триває, але наступний рух усе ще контролює страховик або провайдер.',
      ru: 'Последовательность уже идёт, но следующее движение всё ещё контролирует страховщик или провайдер.',
    },
    supportRoute: {
      en: 'Practical preparation, provider follow-up, and status visibility.',
      uk: 'Практична підготовка, супровід провайдера й видимість статусу.',
      ru: 'Практическая подготовка, сопровождение провайдера и видимость статуса.',
    },
  },
  {
    area: {en: 'Important Letters', uk: 'Важливі листи', ru: 'Важные письма'},
    status: 'risk_identified',
    summary: {
      en: 'A letter, deadline, or missing response needs attention before it becomes a larger issue.',
      uk: 'Лист, дедлайн або відсутня відповідь потребує уваги, перш ніж це стане більшою проблемою.',
      ru: 'Письмо, срок или отсутствующий ответ требуют внимания, прежде чем это станет более крупной проблемой.',
    },
    supportRoute: {
      en: 'Letter review, document readiness, and immediate next action.',
      uk: 'Перегляд листа, готовність документів і негайна наступна дія.',
      ru: 'Разбор письма, готовность документов и немедленное следующее действие.',
    },
  },
  {
    area: {en: 'Next Academic Step', uk: 'Наступний академічний крок', ru: 'Следующий академический шаг'},
    status: 'activate_later',
    summary: {
      en: 'The next transition is visible early, even if action belongs later in the year.',
      uk: 'Наступний перехід видно заздалегідь, навіть якщо дія належить пізнішому періоду року.',
      ru: 'Следующий переход виден заранее, даже если действие относится к более позднему периоду года.',
    },
    supportRoute: {
      en: 'Checkpoint recap, planning notes, and the next activation route.',
      uk: 'Підсумок контрольної точки, нотатки планування та наступний маршрут активації.',
      ru: 'Итог контрольной точки, заметки планирования и следующий маршрут активации.',
    },
  },
];

export interface TypicalSituation {
  id: string;
  title: LocalizedText;
  trigger: LocalizedText;
  risk: LocalizedText;
  action: LocalizedText;
  recommendedProduct: LocalizedText;
  boundary: LocalizedText;
}

export const TYPICAL_SITUATIONS: TypicalSituation[] = [
  {
    id: 'arrival_sequence',
    title: {en: 'Arrival in six weeks with no sequence', uk: 'Приїзд через шість тижнів без послідовності', ru: 'Приезд через шесть недель без последовательности'},
    trigger: {en: 'The student has dates, tasks, and pressure but no clear order.', uk: 'У студента є дати, завдання й тиск, але немає чіткої послідовності.', ru: 'У студента есть даты, задачи и давление, но нет понятной последовательности.'},
    risk: {en: 'Documents and registration steps may happen too late or in the wrong order.', uk: 'Документи й кроки реєстрації можуть статися занадто пізно або в неправильному порядку.', ru: 'Документы и шаги регистрации могут произойти слишком поздно или в неправильном порядке.'},
    action: {en: 'VANTAM maps the sequence, checks readiness, and prepares the first action plan.', uk: 'VANTAM складає послідовність, перевіряє готовність і готує перший план дій.', ru: 'VANTAM выстраивает последовательность, проверяет готовность и готовит первый план действий.'},
    recommendedProduct: {en: 'Relocation Orientation or VANTAM Start', uk: 'Relocation Orientation або VANTAM Start', ru: 'Relocation Orientation или VANTAM Start'},
    boundary: {en: 'No guarantee that third-party appointments or approvals will be available on a preferred timeline.', uk: 'Без гарантії, що записи чи погодження третіх сторін будуть доступні у бажаний термін.', ru: 'Без гарантии, что записи или одобрения третьих сторон будут доступны в желаемый срок.'},
  },
  {
    id: 'setup_first_year',
    title: {en: 'Setup plus first-year support', uk: 'Запуск плюс підтримка на перший рік', ru: 'Запуск плюс поддержка на первый год'},
    trigger: {en: 'The student wants the first month handled and later checkpoints built in.', uk: 'Студент хоче, щоб перший місяць був опрацьований і щоб були вбудовані подальші контрольні точки.', ru: 'Студент хочет, чтобы первый месяц был отработан и чтобы были встроены последующие контрольные точки.'},
    risk: {en: 'Important later issues can appear after the first setup is finished.', uk: 'Важливі пізніші питання можуть з’явитися після завершення першого налаштування.', ru: 'Важные более поздние вопросы могут появиться после завершения первой настройки.'},
    action: {en: 'VANTAM uses Start execution plus checkpoints, Action Credits, and Quick Reviews.', uk: 'VANTAM використовує виконання Start плюс контрольні точки, цільові дії та короткі перегляди.', ru: 'VANTAM использует выполнение Start плюс контрольные точки, целевые действия и короткие обзоры.'},
    recommendedProduct: {en: 'VANTAM First Year', uk: 'VANTAM First Year', ru: 'VANTAM First Year'},
    boundary: {en: 'Defined support only. No unlimited support implication.', uk: 'Лише визначена підтримка. Без натяку на необмежену підтримку.', ru: 'Только определённая поддержка. Без намёка на неограниченную поддержку.'},
  },
  {
    id: 'rental_profile',
    title: {en: 'Rental profile plus first applications', uk: 'Профіль орендаря плюс перші заявки', ru: 'Профиль арендатора плюс первые заявки'},
    trigger: {en: 'The student is not yet ready to apply or needs the first good submissions done properly.', uk: 'Студент ще не готовий подаватися або хоче, щоб перші хороші подання були зроблені правильно.', ru: 'Студент ещё не готов подаваться или хочет, чтобы первые хорошие подачи были сделаны правильно.'},
    risk: {en: 'Weak documents or wrong timing can waste the first housing opportunities.', uk: 'Слабкі документи або неправильний таймінг можуть змарнувати перші житлові можливості.', ru: 'Слабые документы или неправильный тайминг могут испортить первые жилищные возможности.'},
    action: {en: 'VANTAM prepares the profile, application pack, and up to three Qualified Applications.', uk: 'VANTAM готує профіль, пакет документів для подання і до трьох кваліфікованих заявок.', ru: 'VANTAM готовит профиль, пакет документов для подачи и до трёх квалифицированных заявок.'},
    recommendedProduct: {en: 'Housing Ready', uk: 'Housing Ready', ru: 'Housing Ready'},
    boundary: {en: 'No housing guarantee.', uk: 'Без гарантії житла.', ru: 'Без гарантии жилья.'},
  },
  {
    id: 'six_week_campaign',
    title: {en: 'Active six-week campaign', uk: 'Активна шеститижнева кампанія', ru: 'Активная шестинедельная кампания'},
    trigger: {en: 'The student needs a defined housing campaign with a visible pipeline and execution caps.', uk: 'Студенту потрібна визначена житлова кампанія з видимою воронкою заявок та межами виконання.', ru: 'Студенту нужна определённая жилищная кампания с видимой воронкой заявок и пределами выполнения.'},
    risk: {en: 'A housing search without limits can become expensive, chaotic, and hard to track.', uk: 'Пошук житла без меж може стати дорогим, хаотичним і важким для відстеження.', ru: 'Поиск жилья без пределов может стать дорогим, хаотичным и трудным для отслеживания.'},
    action: {en: 'VANTAM runs the strategy, applications, lead handling, and viewing preparation within fixed limits.', uk: 'VANTAM веде стратегію, подання, роботу з активними кейсами та підготовку до переглядів у фіксованих межах.', ru: 'VANTAM ведёт стратегию, подачи, работу с активными кейсами и подготовку к просмотрам в фиксированных пределах.'},
    recommendedProduct: {en: 'Housing Search Campaign', uk: 'Housing Search Campaign', ru: 'Housing Search Campaign'},
    boundary: {en: 'Lead, viewing, and communication limits stay fixed.', uk: 'Ліміти на активні кейси, перегляди та комунікацію залишаються фіксованими.', ru: 'Лимиты на активные кейсы, просмотры и коммуникацию остаются фиксированными.'},
  },
  {
    id: 'cak_svb_letter',
    title: {en: 'CAK/SVB or municipality letter', uk: 'Лист CAK/SVB або муніципалітету', ru: 'Письмо CAK/SVB или муниципалитета'},
    trigger: {en: 'A formal letter arrives and the student does not understand the deadline or response route.', uk: 'Приходить формальний лист, і студент не розуміє дедлайн чи маршрут відповіді.', ru: 'Приходит формальное письмо, и студент не понимает срок или маршрут ответа.'},
    risk: {en: 'A missed response can create extra pressure, repeat requests, or avoidable cost.', uk: 'Пропущена відповідь може створити додатковий тиск, повторні запити або зайві витрати.', ru: 'Пропущенный ответ может создать дополнительное давление, повторные запросы или лишние расходы.'},
    action: {en: 'VANTAM explains the letter, the documents, and the practical next action.', uk: 'VANTAM пояснює лист, документи та практичну наступну дію.', ru: 'VANTAM объясняет письмо, документы и практическое следующее действие.'},
    recommendedProduct: {en: 'Official Letter Action or CAK / SVB Case Support', uk: 'Official Letter Action або CAK / SVB Case Support', ru: 'Official Letter Action или CAK / SVB Case Support'},
    boundary: {en: 'No legal or insurance advice.', uk: 'Без юридичної чи страхової поради.', ru: 'Без юридической или страховой консультации.'},
  },
  {
    id: 'academic_warning',
    title: {en: 'Academic warning or internship administration', uk: 'Академічне попередження або адміністрація стажування', ru: 'Академическое предупреждение или администрация стажировки'},
    trigger: {en: 'A university or internship process becomes practical, urgent, or document-heavy.', uk: 'Університетський або internship-процес стає практичним, терміновим або важким за документами.', ru: 'Университетский или internship-процесс становится практическим, срочным или тяжёлым по документам.'},
    risk: {en: 'Missing a practical step can affect status, deadlines, or the next study/work move.', uk: 'Пропуск практичного кроку може вплинути на статус, дедлайни чи наступний крок у навчанні/роботі.', ru: 'Пропуск практического шага может повлиять на статус, сроки или следующий шаг в учёбе/работе.'},
    action: {en: 'VANTAM organises the documents, communication, and next-step sequence for the defined case.', uk: 'VANTAM організовує документи, комунікацію та послідовність наступних кроків для визначеного кейсу.', ru: 'VANTAM организует документы, коммуникацию и последовательность следующих шагов для определённого кейса.'},
    recommendedProduct: {en: 'University Administration Case or Internship Administration', uk: 'University Administration Case або Internship Administration', ru: 'University Administration Case или Internship Administration'},
    boundary: {en: 'No academic or legal representation claim.', uk: 'Без заяв про академічне чи юридичне представництво.', ru: 'Без заявлений об академическом или юридическом представительстве.'},
  },
  {
    id: 'urgent_exit',
    title: {en: 'Urgent housing exit', uk: 'Терміновий вихід із житла', ru: 'Срочный выход из жилья'},
    trigger: {en: 'The student may need to move quickly or deal with a landlord problem under time pressure.', uk: 'Студенту може знадобитися швидко переїхати або вирішувати проблему з орендодавцем під тиском часу.', ru: 'Студенту может понадобиться быстро переехать или решать проблему с арендодателем под давлением времени.'},
    risk: {en: 'Poor evidence and rushed communication can make the next steps harder.', uk: 'Слабкі докази та поспішна комунікація можуть ускладнити наступні кроки.', ru: 'Слабые доказательства и спешная коммуникация могут усложнить следующие шаги.'},
    action: {en: 'VANTAM assesses urgency, creates an immediate-action plan, and, where appropriate, coordinates the next practical route.', uk: 'VANTAM оцінює терміновість, створює план негайних дій і, де доречно, координує наступний практичний маршрут.', ru: 'VANTAM оценивает срочность, создаёт план немедленных действий и, где уместно, координирует следующий практический маршрут.'},
    recommendedProduct: {en: 'Urgent Situation Assessment or Emergency Relocation Coordination', uk: 'Urgent Situation Assessment або Emergency Relocation Coordination', ru: 'Urgent Situation Assessment или Emergency Relocation Coordination'},
    boundary: {en: 'No accommodation guarantee and no unapproved response-time promise.', uk: 'Без гарантії житла й без неузгодженої обіцянки часу відповіді.', ru: 'Без гарантии жилья и без несогласованного обещания времени ответа.'},
  },
  {
    id: 'graduation_route',
    title: {en: 'Graduation and orientation-year consideration', uk: 'Випуск і розгляд orientation year', ru: 'Выпуск и рассмотрение orientation year'},
    trigger: {en: 'The student is moving toward graduation and the practical route is changing.', uk: 'Студент наближається до випуску, і практичний маршрут змінюється.', ru: 'Студент приближается к выпуску, и практический маршрут меняется.'},
    risk: {en: 'Registration, insurance, housing, and work changes can fall out of sequence.', uk: 'Реєстрація, страхування, житло та зміни в роботі можуть вийти з послідовності.', ru: 'Регистрация, страховка, жильё и изменения в работе могут выйти из последовательности.'},
    action: {en: 'VANTAM maps the graduation timeline, practical changes, and next route.', uk: 'VANTAM складає часову карту випуску, практичні зміни та наступний маршрут.', ru: 'VANTAM выстраивает временную карту выпуска, практические изменения и следующий маршрут.'},
    recommendedProduct: {en: 'Graduation & Orientation Year Roadmap', uk: 'Graduation & Orientation Year Roadmap', ru: 'Graduation & Orientation Year Roadmap'},
    boundary: {en: 'Not immigration advice.', uk: 'Не імміграційна порада.', ru: 'Не иммиграционная консультация.'},
  },
];

export interface FaqItem {
  id: string;
  q: LocalizedText;
  a: LocalizedText;
}

export const FAQS_STORE: FaqItem[] = [
  {
    id: 'f1',
    q: {
      en: 'How do I choose between VANTAM Start and VANTAM First Year?',
      uk: 'Як обрати між VANTAM Start і VANTAM First Year?',
      ru: 'Как выбрать между VANTAM Start и VANTAM First Year?',
    },
    a: {
      en: 'Choose Start when you need first-month setup organised through a clear completion point. Choose First Year when you want Start plus checkpoints, Action Credits, Quick Reviews, housing readiness, and a defined next route later in the year.',
      uk: 'Обирайте Start, коли вам потрібно організувати перший місяць до чіткої точки завершення. Обирайте First Year, коли вам потрібен Start плюс контрольні точки, цільові дії, короткі перегляди, готовність до житла і визначений наступний маршрут пізніше протягом року.',
      ru: 'Выбирайте Start, когда вам нужно организовать первый месяц до понятной точки завершения. Выбирайте First Year, когда вам нужен Start плюс контрольные точки, целевые действия, короткие обзоры, готовность к жилью и определённый следующий маршрут позже в течение года.',
    },
  },
  {
    id: 'f2',
    q: {
      en: 'Does VANTAM guarantee housing, approvals, or responses from third parties?',
      uk: 'Чи гарантує VANTAM житло, погодження або відповіді від третіх сторін?',
      ru: 'Гарантирует ли VANTAM жильё, одобрения или ответы от третьих сторон?',
    },
    a: {
      en: 'No. VANTAM supports preparation, sequence, communication, and practical follow-through. It does not guarantee housing, approvals, response times, or other third-party outcomes.',
      uk: 'Ні. VANTAM підтримує підготовку, послідовність, комунікацію та практичне продовження. Він не гарантує житло, погодження, час відповіді або інші результати третіх сторін.',
      ru: 'Нет. VANTAM поддерживает подготовку, последовательность, коммуникацию и практическое сопровождение. Он не гарантирует жильё, одобрения, время ответа или другие результаты третьих сторон.',
    },
  },
  {
    id: 'f3',
    q: {
      en: 'What does “Request a price” mean?',
      uk: 'Що означає “Запитати ціну”?',
      ru: 'Что означает “Запросить цену”?',
    },
    a: {
      en: 'After review, the client receives written scope, deliverables, exclusions, and price before work begins. There are no hidden mandatory additions.',
      uk: 'Після перегляду клієнт отримує письмовий обсяг, результати, виключення та ціну до початку роботи. Прихованих обов’язкових доповнень немає.',
      ru: 'После рассмотрения клиент получает письменный объём, результаты, исключения и цену до начала работы. Скрытых обязательных дополнений нет.',
    },
  },
  {
    id: 'f4',
    q: {
      en: 'Is Continue still available?',
      uk: 'Чи доступний Continue?',
      ru: 'Доступен ли Continue?',
    },
    a: {
      en: 'Continue remains a returning-client route only in this cycle. It is not part of the public package comparison and does not have a published public scope or price.',
      uk: 'Continue залишається лише маршрутом для клієнтів, що повертаються, у цьому циклі. Він не входить до публічного порівняння пакетів і не має опублікованого публічного обсягу чи ціни.',
      ru: 'Continue остаётся только маршрутом для возвращающихся клиентов в этом цикле. Он не входит в публичное сравнение пакетов и не имеет опубликованного публичного объёма или цены.',
    },
  },
  {
    id: 'f5',
    q: {
      en: 'Is Student Life Map a portal or saved account area?',
      uk: 'Чи є Student Life Map порталом або збереженою зоною акаунта?',
      ru: 'Является ли Student Life Map порталом или сохранённой зоной аккаунта?',
    },
    a: {
      en: 'No. Student Life Map Preview is an illustrative working-document preview. It does not imply a portal, account, or saved progress after reload.',
      uk: 'Ні. Student Life Map Preview — це ілюстративний попередній перегляд робочого документа. Він не означає портал, акаунт або збережений прогрес після перезавантаження.',
      ru: 'Нет. Student Life Map Preview — это иллюстративный предварительный просмотр рабочего документа. Он не означает портал, аккаунт или сохранённый прогресс после перезагрузки.',
    },
  },
];

export const RETURNING_CLIENT_NOTE: LocalizedText = {
  en: 'Returning client with an already-open case? Ask about Continue through the contact form.',
  uk: 'Ви клієнт, що повертається, з уже відкритим кейсом? Запитайте про Continue через контактну форму.',
  ru: 'Вы возвращающийся клиент с уже открытым кейсом? Спросите о Continue через контактную форму.',
};

export const APPROVED_INDIVIDUAL_SERVICE_SLUGS = INDIVIDUAL_SERVICE_GROUPS.flatMap((group) =>
  group.services.map((service) => service.slug),
);
