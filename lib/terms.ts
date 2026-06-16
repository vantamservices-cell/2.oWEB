import {BUSINESS} from './business';
import type {Locale} from './locales';

const TERMS_DATE_LOCALE: Record<Locale, string> = {
  en: 'en-GB',
  uk: 'uk-UA',
  ru: 'ru-RU',
};

export const TERMS_VERSION = '1.0';
export const TERMS_EFFECTIVE_DATE = '2026-06-16';
export const TERMS_PDF_PATH = '/legal/general-terms-en-v1.0.pdf';

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalPageCopy = {
  seoTitle: string;
  seoDescription: string;
  title: string;
  summary: string;
  lastUpdatedLabel: string;
  tocLabel: string;
  backHomeLabel: string;
  themeToggleLightLabel: string;
  themeToggleDarkLabel: string;
  referencePdfLabel?: string;
  referencePdfNote?: string;
  contactLead: string;
  contactTitle: string;
  contactSummary: string;
  contactNote: string;
  footerNote: string;
  emailLabel: string;
  phoneLabel: string;
  whatsappLabel: string;
  sections: LegalSection[];
};

function formatTermsDate(locale: Locale) {
  return new Intl.DateTimeFormat(TERMS_DATE_LOCALE[locale], {dateStyle: 'long'}).format(
    new Date(`${TERMS_EFFECTIVE_DATE}T00:00:00Z`),
  );
}

export function formatTermsEffectiveDate(locale: Locale) {
  return formatTermsDate(locale);
}

export const TERMS_COPY: Record<Locale, LegalPageCopy> = {
  en: {
    seoTitle: 'General Terms | VANTAM',
    seoDescription:
      'VANTAM General Terms for English contractual use, with the public identity block, consultation rules, withdrawal framework, payment rules, and service limits.',
    title: 'General Terms',
    summary:
      'English is the contractual reference version. Ukrainian and Russian are convenience translations. This page sets the public legal reference for VANTAM Services version 1.0, effective 16 June 2026.',
    lastUpdatedLabel: 'Version 1.0',
    tocLabel: 'On this page',
    backHomeLabel: 'Back to home',
    themeToggleLightLabel: 'Use light theme',
    themeToggleDarkLabel: 'Use dark theme',
    referencePdfLabel: 'Download English PDF',
    referencePdfNote: 'Reference copy for download',
    contactLead: 'Need the written contract pack before acceptance?',
    contactTitle: 'Contact VANTAM',
    contactSummary:
      `Email ${BUSINESS.publicEmail} if you need the current written contract pack, a clarification before acceptance, or a copy of the applicable documents that carry the complete trader address.`,
    contactNote:
      'The public website contact form is enquiry-only. It does not create a contract, accept Terms, start work, or create a payment obligation. The full trader address is supplied only in the written contract pack before acceptance.',
    footerNote:
      'This page is the English contractual reference version. Ukrainian and Russian pages are convenience translations.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp Business',
    sections: [
      {
        id: 'identity',
        title: 'Identity and contact details',
        paragraphs: [
          `VANTAM is the public brand used by VANTAM Services, a Dutch eenmanszaak registered with the Dutch Chamber of Commerce under KvK ${BUSINESS.kvkNumber}.`,
          `Public contact email: ${BUSINESS.publicEmail}. Public telephone and WhatsApp Business: ${BUSINESS.phoneDisplayNumber}. Public BTW ID: ${BUSINESS.publicBtwId}.`,
          'The trader’s complete written address is supplied in the applicable written contract pack before acceptance. It is not published on this page.',
        ],
      },
      {
        id: 'version',
        title: 'Version and language',
        paragraphs: [
          `Version: ${TERMS_VERSION}. Effective date: ${formatTermsDate('en')}. English is the contractual reference version.`,
          'Ukrainian and Russian pages are convenience translations only. If a discrepancy appears, the English version governs the public reference pack.',
        ],
      },
      {
        id: 'scope',
        title: 'Scope and document hierarchy',
        paragraphs: [
          'These Terms apply only when VANTAM and the Client formally accept the same written Offer, service appendix, agreement, consultation confirmation, or other written contract pack that identifies this version.',
          'If documents conflict, the order of priority is the individually agreed written amendment, the accepted Offer or appendix, these Terms, and then general website descriptions.',
          'Website descriptions are informational. They do not replace the written contract pack and do not by themselves create a contract or payment obligation.',
        ],
      },
      {
        id: 'enquiries',
        title: 'Enquiries and contract formation',
        paragraphs: [
          'The ordinary website contact form is for enquiries only. It does not form a contract, accept these Terms, request work to begin, or waive any right.',
          'A contract exists only after VANTAM and the Client both accept the same written document on a durable medium, such as email with attachments or a downloadable PDF.',
        ],
      },
      {
        id: 'consultations',
        title: 'Consultations',
        paragraphs: [
          'Consultations are normally the first step. Before a consultation is formally booked, VANTAM must communicate the consultation type, scope, duration, price, VAT treatment, timing, and applicable Terms version.',
          'The consultation invoice is due within 3 calendar days. The consultation normally occurs after payment is received. Earlier performance is only possible through a separate valid early-start request where consumer withdrawal rules apply.',
          'One consultation rescheduling is permitted without an additional fee when the Client gives at least 24 hours’ notice. This Terms page does not create an automatic no-show fee or late-cancellation penalty.',
        ],
      },
      {
        id: 'services',
        title: 'Services and packages',
        paragraphs: [
          'VANTAM provides practical support, not guaranteed outcomes. Public services may include relocation preparation, registration support, DigiD support, bank-account setup guidance, insurance setup support, official-letter support, university administration support, rental-contract explanation, housing scam checks, deposit-return support, insurance-claim support, and package-based coordination.',
          'The accepted Offer defines the actual scope. Services may be remote, local, or hybrid only where the written contract pack says so.',
        ],
      },
      {
        id: 'responsibilities',
        title: 'Client responsibilities',
        paragraphs: [
          'The Client must provide truthful, complete, current, and timely information. The Client remains responsible for checking important documents, making final decisions, meeting official deadlines, and choosing whether to submit applications, sign contracts, pay third parties, or accept third-party terms.',
          'A person accepting for an organisation confirms authority to bind that organisation. A person acting for another individual confirms proper authority.',
        ],
      },
      {
        id: 'prices',
        title: 'Prices, VAT, invoices, and payment',
        paragraphs: [
          'Prices must be stated in the accepted Offer. No service fee is payable before work begins except an agreed consultation fee or another express upfront amount stated in the accepted Offer.',
          'After work begins, only pre-agreed work actually performed and pre-approved third-party costs may become payable. VANTAM must not charge unspecified hours, open-ended expenses, hidden administration fees, arbitrary cancellation fees, or unapproved third-party costs.',
          'VAT must be handled according to applicable law and the accepted Offer. The public BTW ID shown above is the one to use where a trader-information block is legally necessary.',
        ],
      },
      {
        id: 'withdrawal',
        title: 'Consumer withdrawal rights',
        paragraphs: [
          'For consumer distance service contracts, the statutory withdrawal framework may apply. The consumer normally has 14 days to withdraw from the contract, starting from the day the contract is concluded, unless a statutory exception applies.',
          'The consumer must receive withdrawal information and the model withdrawal form before being bound. If legally required information is omitted, the withdrawal period may be extended under applicable law.',
          'Not every service always carries a withdrawal right, and not every service automatically loses it. Any exception must be assessed for the specific service and the statutory conditions that apply to that service.',
        ],
      },
      {
        id: 'early-start',
        title: 'Early commencement',
        paragraphs: [
          'Beginning during the withdrawal period requires a separate express consumer request. The early-start request must not be bundled into general Terms acceptance.',
          'Before early commencement, the consumer must acknowledge that proportional payment may be due for properly performed work if the consumer withdraws after VANTAM has begun work at the consumer’s request.',
          'Possible loss of the withdrawal right after complete performance applies only where all statutory conditions are met, including the required prior request, acknowledgement, and durable-medium confirmation.',
        ],
      },
      {
        id: 'cancellation',
        title: 'Cancellation and termination',
        paragraphs: [
          'Statutory withdrawal, cancellation before work begins, client termination after work begins, VANTAM termination, consultation rescheduling, termination for non-payment, and termination for lack of cooperation are separate concepts.',
          'Before work begins, no service fee is payable except an already agreed consultation fee or another lawful agreed amount stated in the accepted Offer.',
          'After work begins, VANTAM may charge only pre-agreed work actually performed and pre-approved third-party costs. Any required refund must be made according to applicable law and the accepted written agreement.',
        ],
      },
      {
        id: 'housing',
        title: 'Housing support limits',
        paragraphs: [
          'VANTAM may provide practical housing-search support, communication support, preparation support, rental-application support, rental-contract explanation, scam-risk awareness, and landlord-message support within the accepted scope.',
          'VANTAM does not guarantee housing, does not provide regulated legal representation, and does not act as a landlord-side agent, tenant-side broker, or licensed intermediary unless a future specialist Dutch legal review approves a different model in writing.',
          'No housing success fee is included in these Terms. Tenant-side brokerage, mediation remuneration, and any result-linked housing fee remain excluded.',
        ],
      },
      {
        id: 'guarantees',
        title: 'No guarantees',
        paragraphs: [
          'VANTAM does not guarantee housing, approvals, appointments, visas, permits, contracts, bank decisions, insurance decisions, municipal decisions, university decisions, landlord decisions, third-party outcomes, or results.',
          'VANTAM may help prepare, explain, organise, and coordinate, but the Client and third parties remain responsible for their own decisions.',
        ],
      },
      {
        id: 'complaints',
        title: 'Complaints',
        paragraphs: [
          `Complaints may be submitted to ${BUSINESS.publicEmail}. VANTAM should acknowledge receipt and aims to provide a substantive response within 14 calendar days.`,
          'This is a service target, not an absolute guarantee where the matter reasonably requires longer investigation. The complaint process does not remove statutory rights or court access.',
        ],
      },
      {
        id: 'liability',
        title: 'Liability and mandatory rights',
        paragraphs: [
          'VANTAM does not exclude liability where exclusion is prohibited by law. These Terms preserve mandatory consumer rights.',
          'VANTAM is responsible for performing agreed Services with reasonable care and skill, within the agreed practical support scope. VANTAM is not responsible for third-party decisions, Client choices, false or incomplete Client information, or matters outside the accepted scope, except where mandatory law provides otherwise.',
          'No fixed monetary liability cap is introduced on this public reference page.',
        ],
      },
      {
        id: 'communication',
        title: 'Communication and notices',
        paragraphs: [
          `Written communication may take place by email unless the accepted Offer requires another method. Formal notices to VANTAM must be sent to ${BUSINESS.publicEmail} unless VANTAM later confirms another official notice channel.`,
          'The Client must keep contact details current. VANTAM may rely on the last email address or contact details provided by the Client unless VANTAM knows they are no longer valid.',
        ],
      },
      {
        id: 'law',
        title: 'Governing law and changes',
        paragraphs: [
          'Dutch law is intended to govern the contract. Mandatory consumer protections and mandatory jurisdiction rules remain unaffected.',
          'VANTAM may create new Terms versions for future contracts. A new version applies to an existing accepted contract only where the law and the written agreement allow it.',
        ],
      },
    ],
  },
  uk: {
    seoTitle: 'Загальні умови | VANTAM',
    seoDescription:
      'Загальні умови VANTAM для англійської договірної версії з публічним блоком даних, правилами консультацій, відмови, оплати та межами послуг.',
    title: 'Загальні умови',
    summary:
      'Англійська версія є договірною базою. Українська та російська версії є зручними перекладами. Ця сторінка встановлює публічний правовий орієнтир для VANTAM Services, версія 1.0, чинна з 16 червня 2026 року.',
    lastUpdatedLabel: 'Версія 1.0',
    tocLabel: 'На цій сторінці',
    backHomeLabel: 'Повернутися на головну',
    themeToggleLightLabel: 'Увімкнути світлу тему',
    themeToggleDarkLabel: 'Увімкнути темну тему',
    contactLead: 'Потрібен письмовий пакет договору до прийняття?',
    contactTitle: 'Зв’яжіться з VANTAM',
    contactSummary:
      `Напишіть на ${BUSINESS.publicEmail}, якщо вам потрібен чинний письмовий пакет договору, уточнення до прийняття або копія документів, де вказано повну адресу продавця.`,
    contactNote:
      'Відкрита форма на сайті призначена лише для запитів. Вона не створює договір, не приймає умови, не запускає роботу і не створює платіжного зобов’язання. Повна адреса продавця надається лише у письмовому пакеті договору до прийняття.',
    footerNote:
      'Ця сторінка є англійською договірною базою. Українська та російська сторінки є лише зручними перекладами.',
    emailLabel: 'Електронна пошта',
    phoneLabel: 'Телефон',
    whatsappLabel: 'WhatsApp Business',
    sections: [
      {
        id: 'identity',
        title: 'Хто ми і як зв’язатися',
        paragraphs: [
          `VANTAM - це публічний бренд VANTAM Services, нідерландської eenmanszaak, зареєстрованої в Торговій палаті Нідерландів за номером KvK ${BUSINESS.kvkNumber}.`,
          `Публічна електронна пошта: ${BUSINESS.publicEmail}. Публічний телефон і WhatsApp Business: ${BUSINESS.phoneDisplayNumber}. Публічний BTW ID: ${BUSINESS.publicBtwId}.`,
          'Повна письмова адреса продавця надається у відповідному письмовому пакеті договору до прийняття. На цій сторінці вона не публікується.',
        ],
      },
      {
        id: 'version',
        title: 'Версія та мова',
        paragraphs: [
          `Версія: ${TERMS_VERSION}. Дата набуття чинності: ${formatTermsDate('uk')}. Англійська версія є договірною базою.`,
          'Українська та російська сторінки є лише зручними перекладами. Якщо з’являється розбіжність, для публічного пакета орієнтиром є англійська версія.',
        ],
      },
      {
        id: 'scope',
        title: 'Сфера дії та пріоритет документів',
        paragraphs: [
          'Ці Умови діють лише тоді, коли VANTAM і Клієнт офіційно прийняли один і той самий письмовий Offer, додаток до послуг, угоду, підтвердження консультації або інший письмовий пакет договору, у якому зазначено цю версію.',
          'Якщо документи суперечать один одному, пріоритет має окремо погоджена письмова зміна, далі прийнятий Offer або додаток, потім ці Умови, а потім загальний опис на сайті.',
          'Опис на сайті має інформаційний характер. Він не замінює письмовий пакет договору і сам по собі не створює договір або платіжне зобов’язання.',
        ],
      },
      {
        id: 'enquiries',
        title: 'Запити та укладення договору',
        paragraphs: [
          'Звичайна контактна форма на сайті призначена лише для запитів. Вона не створює договір, не приймає ці Умови, не просить розпочати роботу і не відмовляє від будь-яких прав.',
          'Договір існує лише після того, як VANTAM і Клієнт обидва прийняли один і той самий письмовий документ на довготривалому носії, наприклад електронною поштою з вкладеннями або у форматі PDF для завантаження.',
        ],
      },
      {
        id: 'consultations',
        title: 'Консультації',
        paragraphs: [
          'Консультація зазвичай є першим кроком. До офіційного бронювання VANTAM має повідомити тип консультації, обсяг, тривалість, ціну, ПДВ, строки та відповідну версію Умов.',
          'Рахунок за консультацію підлягає оплаті протягом 3 календарних днів. Зазвичай консультація відбувається після надходження оплати. Раніший початок можливий лише через окремий дійсний запит на ранній старт, якщо застосовуються правила про відмову споживача.',
          'Одне перенесення консультації допускається без додаткової плати, якщо Клієнт повідомить щонайменше за 24 години. Ця сторінка не створює автоматичний штраф за неявку або пізнє скасування.',
        ],
      },
      {
        id: 'services',
        title: 'Послуги та пакети',
        paragraphs: [
          'VANTAM надає практичну підтримку, а не гарантований результат. Публічні послуги можуть включати підготовку до переїзду, підтримку реєстрації, допомогу з DigiD, пояснення відкриття банківського рахунку, допомогу з оформленням страхування, підтримку офіційних листів, допомогу з університетською адміністрацією, пояснення договору оренди, перевірку ризиків шахрайства з житлом, підтримку повернення депозиту, допомогу зі страховими випадками та координацію за пакетами.',
          'Фактичний обсяг визначає прийнятий Offer. Послуги можуть бути дистанційними, локальними або змішаними лише тоді, коли це прямо зазначено у письмовому пакеті договору.',
        ],
      },
      {
        id: 'responsibilities',
        title: 'Обов’язки Клієнта',
        paragraphs: [
          'Клієнт має надавати правдиву, повну, актуальну і своєчасну інформацію. Клієнт сам відповідає за перевірку важливих документів, остаточні рішення, дотримання офіційних строків і вибір, чи подавати заявки, підписувати договори, платити третім сторонам або погоджувати їх умови.',
          'Особа, яка приймає умови від імені організації, підтверджує повноваження зв’язати цю організацію. Особа, яка діє від імені іншої людини, підтверджує належні повноваження.',
        ],
      },
      {
        id: 'prices',
        title: 'Ціни, ПДВ, рахунки та оплата',
        paragraphs: [
          'Ціни мають бути зазначені в прийнятому Offer. Послуга не підлягає оплаті до початку роботи, крім погодженої консультаційної плати або іншої прямо погодженої авансової суми в прийнятому Offer.',
          'Після початку роботи можна вимагати лише заздалегідь погоджену фактично виконану роботу та попередньо схвалені витрати третіх сторін. VANTAM не має права виставляти неузгоджені години, відкриті витрати, приховані адміністративні збори, довільні штрафи за скасування або не погоджені витрати третіх сторін.',
          'ПДВ має оброблятися відповідно до чинного права та прийнятого Offer. Публічний BTW ID, наведений вище, використовується там, де юридично потрібен блок реквізитів продавця.',
        ],
      },
      {
        id: 'withdrawal',
        title: 'Право споживача на відмову',
        paragraphs: [
          'Для споживчих дистанційних договорів про послуги може застосовуватися законодавчий режим відмови. Зазвичай споживач має 14 днів, щоб відмовитися від договору, починаючи з дня його укладення, якщо не застосовується законодавчий виняток.',
          'Споживач повинен отримати інформацію про відмову та модельну форму відмови до моменту, коли він стає зобов’язаним. Якщо обов’язкову інформацію не надали, строк відмови може бути продовжений відповідно до закону.',
          'Не кожна послуга завжди має право на відмову, і не кожна послуга автоматично його втрачає. Будь-який виняток треба оцінювати для конкретної послуги та для тих законодавчих умов, які до неї застосовуються.',
        ],
      },
      {
        id: 'early-start',
        title: 'Ранній початок',
        paragraphs: [
          'Початок роботи під час строку відмови потребує окремого прямого запиту споживача. Запит на ранній старт не можна вбудовувати в загальне прийняття Умов.',
          'Перед раннім початком споживач має підтвердити, що може бути зобов’язаний сплатити пропорційну суму за належно виконану роботу, якщо він відмовиться після того, як VANTAM уже почав роботу за його запитом.',
          'Можлива втрата права на відмову після повного виконання виникає лише тоді, коли виконано всі законодавчі умови, включно з попереднім запитом, підтвердженням і підтвердженням на довготривалому носії.',
        ],
      },
      {
        id: 'cancellation',
        title: 'Скасування та припинення',
        paragraphs: [
          'Законна відмова, скасування до початку роботи, припинення з боку Клієнта після початку роботи, припинення з боку VANTAM, перенесення консультації, припинення через несплату та припинення через відсутність співпраці - це окремі поняття.',
          'До початку роботи послуга не підлягає оплаті, крім уже погодженої консультаційної плати або іншої законно погодженої суми в прийнятому Offer.',
          'Після початку роботи VANTAM може стягувати лише заздалегідь погоджену фактично виконану роботу та попередньо схвалені витрати третіх сторін. Будь-яке необхідне повернення коштів має здійснюватися згідно з чинним правом і прийнятою письмовою угодою.',
        ],
      },
      {
        id: 'housing',
        title: 'Межі житлової підтримки',
        paragraphs: [
          'VANTAM може надавати практичну допомогу з пошуку житла, комунікації, підготовки, орендних заявок, пояснення договору оренди, усвідомлення ризиків шахрайства та повідомлень орендодавцю в межах прийнятого обсягу.',
          'VANTAM не гарантує житло, не надає регульованого юридичного представництва і не діє як агент орендодавця, брокер для орендаря чи ліцензований посередник, якщо у майбутньому спеціалізований нідерландський юридичний огляд не затвердить іншу модель письмово.',
          'У цих Умовах немає успішного житлового збору. Комісія орендаря, посередницька винагорода та будь-яка плата, прив’язана до результату пошуку житла, не передбачені.',
        ],
      },
      {
        id: 'guarantees',
        title: 'Без гарантій',
        paragraphs: [
          'VANTAM не гарантує житло, схвалення, зустрічі, візи, дозволи, договори, рішення банків, страхових компаній, муніципалітетів, університетів, орендодавців, третіх сторін або будь-який результат.',
          'VANTAM може допомагати готувати, пояснювати, організовувати і координувати, але Клієнт і треті сторони залишаються відповідальними за власні рішення.',
        ],
      },
      {
        id: 'complaints',
        title: 'Скарги',
        paragraphs: [
          `Скарги можна надсилати на ${BUSINESS.publicEmail}. VANTAM має підтвердити отримання і прагне надати змістовну відповідь протягом 14 календарних днів.`,
          'Це цільовий строк послуги, а не абсолютна гарантія, якщо питання обґрунтовано потребує довшого розгляду. Процедура скарг не забирає законних прав і доступу до суду.',
        ],
      },
      {
        id: 'liability',
        title: 'Відповідальність і обов’язкові права',
        paragraphs: [
          'VANTAM не виключає відповідальність там, де це заборонено законом. Ці Умови зберігають обов’язкові права споживача.',
          'VANTAM відповідає за виконання погоджених послуг із належною турботою і навичками в межах погодженої практичної підтримки. VANTAM не відповідає за рішення третіх сторін, вибір Клієнта, неправдиву або неповну інформацію Клієнта чи питання поза прийнятим обсягом, якщо інше не вимагає обов’язкове право.',
          'На цій публічній сторінці не встановлено фіксованої грошової межі відповідальності.',
        ],
      },
      {
        id: 'communication',
        title: 'Комунікація та повідомлення',
        paragraphs: [
          `Письмова комунікація може відбуватися електронною поштою, якщо прийнятий Offer не вимагає іншого способу. Формальні повідомлення VANTAM треба надсилати на ${BUSINESS.publicEmail}, якщо VANTAM пізніше не підтвердить інший офіційний канал повідомлень.`,
          'Клієнт повинен підтримувати контактні дані актуальними. VANTAM може покладатися на останню електронну адресу або контактні дані, надані Клієнтом, якщо VANTAM не знає, що вони вже недійсні.',
        ],
      },
      {
        id: 'law',
        title: 'Право та зміни',
        paragraphs: [
          'Передбачається, що договір регулюється нідерландським правом. Обов’язкові права споживача та обов’язкові правила підсудності залишаються чинними.',
          'VANTAM може створювати нові версії Умов для майбутніх договорів. Нова версія застосовується до вже прийнятого договору лише тоді, коли це дозволяє право та письмова угода.',
        ],
      },
    ],
  },
  ru: {
    seoTitle: 'Общие условия | VANTAM',
    seoDescription:
      'Общие условия VANTAM для английской договорной версии с публичным блоком данных, правилами консультаций, отказа, оплаты и границами услуг.',
    title: 'Общие условия',
    summary:
      'Английская версия является договорной базой. Украинская и русская версии являются удобными переводами. Эта страница задаёт публичную правовую основу для VANTAM Services, версия 1.0, действует с 16 июня 2026 года.',
    lastUpdatedLabel: 'Версия 1.0',
    tocLabel: 'На этой странице',
    backHomeLabel: 'Вернуться на главную',
    themeToggleLightLabel: 'Включить светлую тему',
    themeToggleDarkLabel: 'Включить тёмную тему',
    contactLead: 'Нужен письменный пакет договора до принятия?',
    contactTitle: 'Свяжитесь с VANTAM',
    contactSummary:
      `Напишите на ${BUSINESS.publicEmail}, если вам нужен действующий письменный пакет договора, уточнение до принятия или копия документов с полным адресом продавца.`,
    contactNote:
      'Открытая форма на сайте предназначена только для запросов. Она не создаёт договор, не принимает условия, не запускает работу и не создаёт платёжного обязательства. Полный адрес продавца предоставляется только в письменном пакете договора до принятия.',
    footerNote:
      'Эта страница является английской договорной базой. Украинская и русская страницы являются только удобными переводами.',
    emailLabel: 'Электронная почта',
    phoneLabel: 'Телефон',
    whatsappLabel: 'WhatsApp Business',
    sections: [
      {
        id: 'identity',
        title: 'Кто мы и как связаться',
        paragraphs: [
          `VANTAM - это публичный бренд VANTAM Services, нидерландской eenmanszaak, зарегистрированной в Торговой палате Нидерландов под номером KvK ${BUSINESS.kvkNumber}.`,
          `Публичная электронная почта: ${BUSINESS.publicEmail}. Публичный телефон и WhatsApp Business: ${BUSINESS.phoneDisplayNumber}. Публичный BTW ID: ${BUSINESS.publicBtwId}.`,
          'Полный письменный адрес продавца предоставляется в соответствующем письменном пакете договора до принятия. На этой странице он не публикуется.',
        ],
      },
      {
        id: 'version',
        title: 'Версия и язык',
        paragraphs: [
          `Версия: ${TERMS_VERSION}. Дата вступления в силу: ${formatTermsDate('ru')}. Английская версия является договорной базой.`,
          'Украинская и русская страницы являются только удобными переводами. Если появляется расхождение, для публичного пакета ориентиром служит английская версия.',
        ],
      },
      {
        id: 'scope',
        title: 'Область действия и приоритет документов',
        paragraphs: [
          'Эти Условия действуют только тогда, когда VANTAM и Клиент официально приняли одно и то же письменное Offer, приложение к услугам, соглашение, подтверждение консультации или другой письменный пакет договора, где указана эта версия.',
          'Если документы противоречат друг другу, приоритет имеет отдельно согласованное письменное изменение, затем принятый Offer или приложение, затем эти Условия, а затем общее описание на сайте.',
          'Описание на сайте носит информационный характер. Оно не заменяет письменный пакет договора и само по себе не создаёт договор или платёжное обязательство.',
        ],
      },
      {
        id: 'enquiries',
        title: 'Запросы и заключение договора',
        paragraphs: [
          'Обычная контактная форма на сайте предназначена только для запросов. Она не создаёт договор, не принимает эти Условия, не просит начать работу и не отказывается от каких-либо прав.',
          'Договор существует только после того, как VANTAM и Клиент оба приняли один и тот же письменный документ на долговечном носителе, например по электронной почте с вложениями или в PDF для загрузки.',
        ],
      },
      {
        id: 'consultations',
        title: 'Консультации',
        paragraphs: [
          'Консультация обычно является первым шагом. До официального бронирования VANTAM должен сообщить тип консультации, объём, продолжительность, цену, НДС, сроки и применимую версию Условий.',
          'Счёт за консультацию подлежит оплате в течение 3 календарных дней. Обычно консультация проходит после получения оплаты. Более раннее начало возможно только через отдельный действительный запрос на ранний старт, если применяются правила об отказе потребителя.',
          'Одно перенесение консультации допускается без дополнительной платы, если Клиент уведомит не менее чем за 24 часа. Эта страница не создаёт автоматический штраф за неявку или позднюю отмену.',
        ],
      },
      {
        id: 'services',
        title: 'Услуги и пакеты',
        paragraphs: [
          'VANTAM оказывает практическую поддержку, а не гарантированный результат. Публичные услуги могут включать подготовку к переезду, поддержку регистрации, помощь с DigiD, объяснение открытия банковского счёта, помощь с оформлением страхования, поддержку официальных писем, помощь с университетской администрацией, объяснение договора аренды, проверку рисков мошенничества с жильём, поддержку возврата депозита, помощь по страховым случаям и координацию по пакетам.',
          'Фактический объём определяет принятый Offer. Услуги могут быть дистанционными, локальными или смешанными только тогда, когда это прямо указано в письменном пакете договора.',
        ],
      },
      {
        id: 'responsibilities',
        title: 'Обязанности Клиента',
        paragraphs: [
          'Клиент должен предоставлять правдивую, полную, актуальную и своевременную информацию. Клиент сам отвечает за проверку важных документов, окончательные решения, соблюдение официальных сроков и выбор, подавать ли заявки, подписывать ли договоры, платить ли третьим лицам или принимать ли их условия.',
          'Лицо, принимающее условия от имени организации, подтверждает полномочия связать эту организацию. Лицо, действующее от имени другого человека, подтверждает надлежащие полномочия.',
        ],
      },
      {
        id: 'prices',
        title: 'Цены, НДС, счета и оплата',
        paragraphs: [
          'Цены должны быть указаны в принятом Offer. Услуга не подлежит оплате до начала работы, кроме согласованной консультационной платы или другой прямо согласованной авансовой суммы в принятом Offer.',
          'После начала работы можно требовать только заранее согласованную фактически выполненную работу и предварительно одобренные расходы третьих сторон. VANTAM не вправе выставлять несогласованные часы, открытые расходы, скрытые административные сборы, произвольные штрафы за отмену или не одобренные расходы третьих сторон.',
          'НДС должен обрабатываться в соответствии с действующим правом и принятым Offer. Публичный BTW ID, указанный выше, используется там, где юридически нужен блок реквизитов продавца.',
        ],
      },
      {
        id: 'withdrawal',
        title: 'Право потребителя на отказ',
        paragraphs: [
          'Для потребительских дистанционных договоров на услуги может применяться законный режим отказа. Обычно у потребителя есть 14 дней, чтобы отказаться от договора, начиная со дня его заключения, если не применимо законное исключение.',
          'Потребитель должен получить информацию об отказе и модельную форму отказа до того, как он станет связан договором. Если обязательную информацию не предоставили, срок отказа может быть продлён по закону.',
          'Не каждая услуга всегда имеет право на отказ, и не каждая услуга автоматически его теряет. Любое исключение нужно оценивать для конкретной услуги и для тех законных условий, которые к ней применяются.',
        ],
      },
      {
        id: 'early-start',
        title: 'Ранний старт',
        paragraphs: [
          'Начало работы в течение срока отказа требует отдельного прямого запроса потребителя. Запрос на ранний старт нельзя встраивать в общее принятие Условий.',
          'Перед ранним стартом потребитель должен подтвердить, что может быть обязан оплатить пропорциональную сумму за надлежащим образом выполненную работу, если он откажется после того, как VANTAM уже начал работу по его запросу.',
          'Возможная потеря права на отказ после полного исполнения возникает только тогда, когда выполнены все законодательные условия, включая предварительный запрос, подтверждение и подтверждение на долговечном носителе.',
        ],
      },
      {
        id: 'cancellation',
        title: 'Отмена и прекращение',
        paragraphs: [
          'Законный отказ, отмена до начала работы, прекращение со стороны Клиента после начала работы, прекращение со стороны VANTAM, перенос консультации, прекращение из-за неоплаты и прекращение из-за отсутствия сотрудничества - это отдельные понятия.',
          'До начала работы услуга не подлежит оплате, кроме уже согласованной консультационной платы или другой законно согласованной суммы в принятом Offer.',
          'После начала работы VANTAM может взимать только заранее согласованную фактически выполненную работу и предварительно одобренные расходы третьих сторон. Любой необходимый возврат средств должен осуществляться согласно действующему праву и принятому письменному соглашению.',
        ],
      },
      {
        id: 'housing',
        title: 'Границы помощи с жильём',
        paragraphs: [
          'VANTAM может оказывать практическую помощь с поиском жилья, коммуникацией, подготовкой, арендными заявками, объяснением договора аренды, пониманием рисков мошенничества и сообщениями арендодателю в пределах принятого объёма.',
          'VANTAM не гарантирует жильё, не предоставляет регулируемое юридическое представительство и не действует как агент арендодателя, брокер для арендатора или лицензированный посредник, если в будущем специализированный нидерландский юридический обзор письменно не одобрит другую модель.',
          'В этих Условиях нет успешного жилищного сбора. Комиссия арендатора, посредническое вознаграждение и любая плата, привязанная к результату поиска жилья, не предусмотрены.',
        ],
      },
      {
        id: 'guarantees',
        title: 'Без гарантий',
        paragraphs: [
          'VANTAM не гарантирует жильё, одобрения, встречи, визы, разрешения, договоры, решения банков, страховых компаний, муниципалитетов, университетов, арендодателей, третьих лиц или какой-либо результат.',
          'VANTAM может помогать готовить, объяснять, организовывать и координировать, но Клиент и третьи стороны остаются ответственными за собственные решения.',
        ],
      },
      {
        id: 'complaints',
        title: 'Жалобы',
        paragraphs: [
          `Жалобы можно направлять на ${BUSINESS.publicEmail}. VANTAM должен подтвердить получение и стремится дать содержательный ответ в течение 14 календарных дней.`,
          'Это целевой срок услуги, а не абсолютная гарантия, если вопрос обоснованно требует более долгого рассмотрения. Процедура жалоб не лишает законных прав и доступа в суд.',
        ],
      },
      {
        id: 'liability',
        title: 'Ответственность и обязательные права',
        paragraphs: [
          'VANTAM не исключает ответственность там, где это запрещено законом. Эти Условия сохраняют обязательные права потребителя.',
          'VANTAM отвечает за выполнение согласованных услуг с разумной заботой и навыками в пределах согласованной практической поддержки. VANTAM не отвечает за решения третьих лиц, выбор Клиента, ложную или неполную информацию Клиента или вопросы вне принятого объёма, если иное не требует обязательное право.',
          'На этой публичной странице не установлено фиксированное денежное ограничение ответственности.',
        ],
      },
      {
        id: 'communication',
        title: 'Коммуникация и уведомления',
        paragraphs: [
          `Письменная коммуникация может происходить по электронной почте, если принятый Offer не требует иного способа. Формальные уведомления VANTAM следует направлять на ${BUSINESS.publicEmail}, если VANTAM позже не подтвердит другой официальный канал.`,
          'Клиент должен поддерживать контактные данные актуальными. VANTAM может полагаться на последний адрес электронной почты или контактные данные, предоставленные Клиентом, если VANTAM не знает, что они больше не действуют.',
        ],
      },
      {
        id: 'law',
        title: 'Право и изменения',
        paragraphs: [
          'Предполагается, что договор регулируется нидерландским правом. Обязательные права потребителя и обязательные правила подсудности сохраняют силу.',
          'VANTAM может создавать новые версии Условий для будущих договоров. Новая версия применяется к уже принятому договору только тогда, когда это допускают право и письменное соглашение.',
        ],
      },
    ],
  },
};
