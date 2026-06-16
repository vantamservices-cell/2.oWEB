import {BUSINESS} from './business';
import type {Locale} from './locales';

const WITHDRAWAL_DATE_LOCALE: Record<Locale, string> = {
  en: 'en-GB',
  uk: 'uk-UA',
  ru: 'ru-RU',
};

export const WITHDRAWAL_VERSION = '1.0';
export const WITHDRAWAL_EFFECTIVE_DATE = '2026-06-16';

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

function formatWithdrawalDate(locale: Locale) {
  return new Intl.DateTimeFormat(WITHDRAWAL_DATE_LOCALE[locale], {dateStyle: 'long'}).format(
    new Date(`${WITHDRAWAL_EFFECTIVE_DATE}T00:00:00Z`),
  );
}

export const WITHDRAWAL_COPY: Record<Locale, LegalPageCopy> = {
  en: {
    seoTitle: 'Withdrawal Information | VANTAM',
    seoDescription:
      'Consumer withdrawal information for VANTAM distance service contracts, including the 14 day framework, early-start payment rules, and the written withdrawal channel.',
    title: 'Withdrawal Information',
    summary:
      'This page explains the ordinary consumer withdrawal framework for distance service contracts. It uses version 1.0 and becomes effective on 16 June 2026.',
    lastUpdatedLabel: 'Version 1.0',
    tocLabel: 'On this page',
    backHomeLabel: 'Back to home',
    themeToggleLightLabel: 'Use light theme',
    themeToggleDarkLabel: 'Use dark theme',
    contactLead: 'Need to send a withdrawal notice?',
    contactTitle: 'Withdrawal channel',
    contactSummary:
      `Send written withdrawal notices to ${BUSINESS.publicEmail}. The model withdrawal form is included in the client contract pack supplied before acceptance.`,
    contactNote:
      'The online withdrawal function is being implemented. This page does not claim that it is already active. Phone and WhatsApp are for general questions only; withdrawal notices must be sent in writing.',
    footerNote:
      'The withdrawal channel is written email. The model form is supplied in the contract pack before acceptance.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp Business',
    sections: [
      {
        id: 'general',
        title: 'When the withdrawal right generally applies',
        paragraphs: [
          'If you are a consumer and you conclude a service contract with VANTAM at a distance, for example by email or another remote written acceptance process, you may have a statutory right to withdraw from the contract.',
          'Some statutory exceptions may apply. VANTAM must not assume an exception unless it fits the specific service and all legal conditions are satisfied.',
        ],
      },
      {
        id: 'period',
        title: 'Withdrawal period and starting point',
        paragraphs: [
          'The usual withdrawal period for a consumer distance service contract is 14 days. The period normally starts on the day the service contract is concluded.',
          'If legally required withdrawal information is not supplied correctly, the withdrawal period may be extended under applicable law.',
        ],
      },
      {
        id: 'how',
        title: 'How to exercise the right',
        paragraphs: [
          'To withdraw, you must inform VANTAM of your decision by an unambiguous written statement.',
          'You may use the model withdrawal form, but you do not have to use it. The form is included in the client contract pack supplied before acceptance.',
          `Current written withdrawal channel: ${BUSINESS.publicEmail}.`,
        ],
      },
      {
        id: 'online-function',
        title: 'Online withdrawal function',
        paragraphs: [
          'A separate online withdrawal function is being implemented. This page does not state that the function is already live.',
          'When the function becomes available and the law requires it for a specific online contract flow, it will be an additional way to submit a withdrawal notice. The written channel and the model form remain available.',
        ],
      },
      {
        id: 'effect',
        title: 'Effect of withdrawal',
        paragraphs: [
          'If you validly withdraw, VANTAM must repay payments received for the withdrawn contract where required by law.',
          'If VANTAM has not yet started work and no lawful agreed consultation fee or other lawful upfront amount is payable, no service fee should be charged.',
        ],
      },
      {
        id: 'early-start',
        title: 'Work performed after a valid early-start request',
        paragraphs: [
          'If you expressly asked VANTAM to begin performance during the withdrawal period and acknowledged that proportional payment may be due, VANTAM may charge a lawful proportion of the agreed total price for properly performed work before you withdrew.',
          'The amount must stay proportionate and may not exceed what applicable law allows. Pre-approved third-party costs may be payable only where legally and contractually allowed.',
        ],
      },
      {
        id: 'full-performance',
        title: 'Possible loss of the withdrawal right after complete performance',
        paragraphs: [
          'For a service fully performed during the withdrawal period, possible loss of the withdrawal right applies only where all statutory conditions are satisfied.',
          'Those conditions may include your prior express request to start before the withdrawal period expires, your acknowledgement that the withdrawal right may be lost after full performance, and durable-medium confirmation.',
          'General Terms acceptance alone is not enough for early start or loss of the withdrawal right.',
        ],
      },
      {
        id: 'omitted-information',
        title: 'If required information is omitted',
        paragraphs: [
          'If VANTAM fails to provide legally required information about the withdrawal right, the withdrawal period may be extended under applicable law.',
          'VANTAM does not use contract wording to remove that consequence.',
        ],
      },
      {
        id: 'relationship',
        title: 'Relationship to cancellation and termination',
        paragraphs: [
          'Statutory withdrawal is separate from cancellation before work begins, client termination after work begins, consultation rescheduling, and VANTAM termination for non-payment, lack of cooperation, false information, illegality, safety, abuse, or conflict.',
          'Mandatory consumer rights override any commercial wording that conflicts with them.',
        ],
      },
    ],
  },
  uk: {
    seoTitle: 'Інформація про відмову | VANTAM',
    seoDescription:
      'Інформація для споживачів щодо права відмови для дистанційних договорів VANTAM, включно з 14-денним режимом, правилами раннього старту та письмовим каналом.',
    title: 'Інформація про відмову',
    summary:
      'Ця сторінка пояснює звичайний споживчий режим відмови для дистанційних договорів про послуги. Вона використовує версію 1.0 і набуває чинності 16 червня 2026 року.',
    lastUpdatedLabel: 'Версія 1.0',
    tocLabel: 'На цій сторінці',
    backHomeLabel: 'Повернутися на головну',
    themeToggleLightLabel: 'Увімкнути світлу тему',
    themeToggleDarkLabel: 'Увімкнути темну тему',
    contactLead: 'Потрібно надіслати повідомлення про відмову?',
    contactTitle: 'Канал для відмови',
    contactSummary:
      `Надсилайте письмові повідомлення про відмову на ${BUSINESS.publicEmail}. Модельна форма відмови входить до контрактного пакета клієнта, який надається до прийняття.`,
    contactNote:
      'Онлайн-функція відмови ще впроваджується. Ця сторінка не стверджує, що вона вже активна. Телефон і WhatsApp призначені лише для загальних питань; повідомлення про відмову треба надсилати письмово.',
    footerNote:
      'Канал відмови - письмова електронна пошта. Модельна форма надається в пакеті договору до прийняття.',
    emailLabel: 'Електронна пошта',
    phoneLabel: 'Телефон',
    whatsappLabel: 'WhatsApp Business',
    sections: [
      {
        id: 'general',
        title: 'Коли право на відмову зазвичай застосовується',
        paragraphs: [
          'Якщо ви є споживачем і укладаєте з VANTAM дистанційний договір на послуги, наприклад електронною поштою або іншим віддаленим письмовим способом прийняття, у вас може бути законне право відмовитися від договору.',
          'Деякі законодавчі винятки можуть застосовуватися. VANTAM не повинен припускати виняток, якщо він не підходить до конкретної послуги і якщо не виконано всі законні умови.',
        ],
      },
      {
        id: 'period',
        title: 'Строк відмови і початок',
        paragraphs: [
          'Звичайний строк відмови для споживчого дистанційного договору на послуги становить 14 днів. Строк зазвичай починається в день укладення договору.',
          'Якщо обов’язкову інформацію про відмову не надали належним чином, строк може бути продовжений відповідно до закону.',
        ],
      },
      {
        id: 'how',
        title: 'Як скористатися правом',
        paragraphs: [
          'Щоб відмовитися, ви повинні повідомити VANTAM про своє рішення однозначною письмовою заявою.',
          'Ви можете використати модельну форму відмови, але не зобов’язані. Форма входить до контрактного пакета клієнта, який надається до прийняття.',
          `Поточний письмовий канал для відмови: ${BUSINESS.publicEmail}.`,
        ],
      },
      {
        id: 'online-function',
        title: 'Онлайн-функція відмови',
        paragraphs: [
          'Окрема онлайн-функція відмови ще впроваджується. Ця сторінка не стверджує, що функція вже працює.',
          'Коли функція стане доступною і закон вимагатиме її для конкретного онлайн-потоку договору, вона буде додатковим способом подати повідомлення про відмову. Письмовий канал і модельна форма залишаться доступними.',
        ],
      },
      {
        id: 'effect',
        title: 'Наслідки відмови',
        paragraphs: [
          'Якщо ви дійсно відмовитеся, VANTAM має повернути отримані платежі за відмовлений договір, якщо це вимагає закон.',
          'Якщо VANTAM ще не почав роботу і жодна законно погоджена консультаційна плата чи інша законна авансова сума не підлягає оплаті, плата за послугу не повинна стягуватися.',
        ],
      },
      {
        id: 'early-start',
        title: 'Робота після дійсного запиту на ранній старт',
        paragraphs: [
          'Якщо ви прямо попросили VANTAM розпочати виконання під час строку відмови і підтвердили, що може бути потрібна пропорційна оплата, VANTAM може стягнути законну пропорцію від погодженої загальної ціни за належно виконану роботу до вашої відмови.',
          'Сума має залишатися пропорційною і не може перевищувати те, що дозволяє закон. Попередньо схвалені витрати третіх сторін можуть підлягати оплаті лише тоді, коли це дозволено законом і договором.',
        ],
      },
      {
        id: 'full-performance',
        title: 'Можлива втрата права на відмову після повного виконання',
        paragraphs: [
          'Для послуги, повністю виконаної під час строку відмови, можлива втрата права на відмову застосовується лише тоді, коли виконано всі законодавчі умови.',
          'Ці умови можуть включати ваш попередній прямий запит на початок до закінчення строку відмови, ваше підтвердження, що право на відмову може бути втрачено після повного виконання, і підтвердження на довготривалому носії.',
          'Самого прийняття Загальних умов недостатньо для раннього старту або втрати права на відмову.',
        ],
      },
      {
        id: 'omitted-information',
        title: 'Якщо обов’язкову інформацію не надали',
        paragraphs: [
          'Якщо VANTAM не надасть обов’язкову інформацію про право на відмову, строк відмови може бути продовжений відповідно до закону.',
          'VANTAM не використовує формулювання договору, щоб прибрати цей наслідок.',
        ],
      },
      {
        id: 'relationship',
        title: 'Зв’язок із скасуванням і припиненням',
        paragraphs: [
          'Законна відмова є окремою від скасування до початку роботи, припинення з боку Клієнта після початку роботи, перенесення консультації та припинення з боку VANTAM через неоплату, відсутність співпраці, неправдиву інформацію, незаконність, безпеку, зловживання або конфлікт.',
          'Обов’язкові права споживача мають перевагу над будь-якими комерційними формулюваннями, що з ними не узгоджуються.',
        ],
      },
    ],
  },
  ru: {
    seoTitle: 'Информация об отказе | VANTAM',
    seoDescription:
      'Информация для потребителей о праве отказа для дистанционных договоров VANTAM, включая 14-дневный режим, правила раннего старта и письменный канал.',
    title: 'Информация об отказе',
    summary:
      'Эта страница объясняет обычный потребительский режим отказа для дистанционных договоров на услуги. Она использует версию 1.0 и вступает в силу 16 июня 2026 года.',
    lastUpdatedLabel: 'Версия 1.0',
    tocLabel: 'На этой странице',
    backHomeLabel: 'Вернуться на главную',
    themeToggleLightLabel: 'Включить светлую тему',
    themeToggleDarkLabel: 'Включить тёмную тему',
    contactLead: 'Нужно отправить уведомление об отказе?',
    contactTitle: 'Канал для отказа',
    contactSummary:
      `Отправляйте письменные уведомления об отказе на ${BUSINESS.publicEmail}. Модельная форма отказа входит в контрактный пакет клиента, который предоставляется до принятия.`,
    contactNote:
      'Онлайн-функция отказа ещё внедряется. Эта страница не утверждает, что она уже активна. Телефон и WhatsApp предназначены только для общих вопросов; уведомления об отказе нужно отправлять письменно.',
    footerNote:
      'Канал отказа - письменная электронная почта. Модельная форма предоставляется в пакете договора до принятия.',
    emailLabel: 'Электронная почта',
    phoneLabel: 'Телефон',
    whatsappLabel: 'WhatsApp Business',
    sections: [
      {
        id: 'general',
        title: 'Когда право на отказ обычно применяется',
        paragraphs: [
          'Если вы являетесь потребителем и заключаете с VANTAM дистанционный договор на услуги, например по электронной почте или через другой удалённый письменный способ принятия, у вас может быть законное право отказаться от договора.',
          'Некоторые законодательные исключения могут применяться. VANTAM не должен предполагать исключение, если оно не подходит к конкретной услуге и если не выполнены все законные условия.',
        ],
      },
      {
        id: 'period',
        title: 'Срок отказа и начало',
        paragraphs: [
          'Обычный срок отказа для потребительского дистанционного договора на услуги составляет 14 дней. Срок обычно начинается в день заключения договора.',
          'Если обязательную информацию об отказе не предоставили должным образом, срок может быть продлён по закону.',
        ],
      },
      {
        id: 'how',
        title: 'Как воспользоваться правом',
        paragraphs: [
          'Чтобы отказаться, вы должны сообщить VANTAM о своём решении однозначным письменным заявлением.',
          'Вы можете использовать модельную форму отказа, но не обязаны. Форма входит в контрактный пакет клиента, который предоставляется до принятия.',
          `Текущий письменный канал для отказа: ${BUSINESS.publicEmail}.`,
        ],
      },
      {
        id: 'online-function',
        title: 'Онлайн-функция отказа',
        paragraphs: [
          'Отдельная онлайн-функция отказа ещё внедряется. Эта страница не утверждает, что функция уже работает.',
          'Когда функция станет доступной и закон потребует её для конкретного онлайн-потока договора, она будет дополнительным способом подать уведомление об отказе. Письменный канал и модельная форма останутся доступными.',
        ],
      },
      {
        id: 'effect',
        title: 'Последствия отказа',
        paragraphs: [
          'Если вы действительным образом откажетесь, VANTAM должен вернуть полученные платежи по отказанному договору, если этого требует закон.',
          'Если VANTAM ещё не начал работу и никакая законно согласованная консультационная плата или иная законная авансовая сумма не подлежит оплате, плата за услугу взиматься не должна.',
        ],
      },
      {
        id: 'early-start',
        title: 'Работа после действительного запроса на ранний старт',
        paragraphs: [
          'Если вы прямо попросили VANTAM начать исполнение в течение срока отказа и подтвердили, что может потребоваться пропорциональная оплата, VANTAM может взыскать законную пропорцию от согласованной общей цены за надлежащим образом выполненную работу до вашего отказа.',
          'Сумма должна оставаться пропорциональной и не может превышать то, что допускает закон. Предварительно одобренные расходы третьих сторон могут подлежать оплате только тогда, когда это разрешено законом и договором.',
        ],
      },
      {
        id: 'full-performance',
        title: 'Возможная потеря права на отказ после полного исполнения',
        paragraphs: [
          'Для услуги, полностью выполненной в течение срока отказа, возможная потеря права на отказ применяется только тогда, когда выполнены все законодательные условия.',
          'Эти условия могут включать ваш предварительный прямой запрос на начало до истечения срока отказа, ваше подтверждение того, что право на отказ может быть потеряно после полного исполнения, и подтверждение на долговечном носителе.',
          'Самого принятия Общих условий недостаточно для раннего старта или потери права на отказ.',
        ],
      },
      {
        id: 'omitted-information',
        title: 'Если обязательную информацию не предоставили',
        paragraphs: [
          'Если VANTAM не предоставит обязательную информацию о праве на отказ, срок отказа может быть продлён по закону.',
          'VANTAM не использует формулировки договора, чтобы убрать это последствие.',
        ],
      },
      {
        id: 'relationship',
        title: 'Связь с отменой и прекращением',
        paragraphs: [
          'Законный отказ является отдельным от отмены до начала работы, прекращения со стороны Клиента после начала работы, переноса консультации и прекращения со стороны VANTAM из-за неоплаты, отсутствия сотрудничества, ложной информации, незаконности, безопасности, злоупотребления или конфликта.',
          'Обязательные права потребителя имеют приоритет над любыми коммерческими формулировками, которые им не соответствуют.',
        ],
      },
    ],
  },
};

export function formatWithdrawalEffectiveDate(locale: Locale) {
  return formatWithdrawalDate(locale);
}
