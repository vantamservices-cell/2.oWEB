import {BUSINESS} from './business';
import {localePath, type Locale} from './locales';

const WITHDRAWAL_REQUEST_DATE_LOCALE: Record<Locale, string> = {
  en: 'en-GB',
  uk: 'uk-UA',
  ru: 'ru-RU',
};

export const WITHDRAWAL_REQUEST_ROUTE_LABELS: Record<Locale, string> = {
  en: 'Withdraw from a contract',
  uk: 'Відмовитися від договору',
  ru: 'Отказаться от договора',
};

export type WithdrawalRequestCopy = {
  seoTitle: string;
  seoDescription: string;
  title: string;
  summary: string;
  footerNote: string;
  backHomeLabel: string;
  themeToggleLightLabel: string;
  themeToggleDarkLabel: string;
  introTitle: string;
  introText: string;
  formTitle: string;
  formText: string;
  reviewTitle: string;
  reviewText: string;
  successTitle: string;
  successText: string;
  successPendingText: string;
  publicReferenceLabel: string;
  submittedAtLabel: string;
  receiptNote: string;
  keepEmailNote: string;
  pendingAckNote: string;
  errorMessage: string;
  retryLabel: string;
  infoButtonLabel: string;
  infoButtonText: string;
  stepOneLabel: string;
  stepTwoLabel: string;
  backButtonLabel: string;
  reviewButtonLabel: string;
  submitButtonLabel: string;
  editButtonLabel: string;
  nameLabel: string;
  emailLabel: string;
  contractReferenceLabel: string;
  serviceDescriptionLabel: string;
  localeLabel: string;
  confirmLabel: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  contractReferencePlaceholder: string;
  serviceDescriptionPlaceholder: string;
  confirmationNotice: string;
  reviewNameLabel: string;
  reviewEmailLabel: string;
  reviewContractReferenceLabel: string;
  reviewServiceDescriptionLabel: string;
  reviewLocaleLabel: string;
  reviewConfirmationLabel: string;
  reviewTimestampLabel: string;
};

function formatDate(locale: Locale, value: string) {
  return new Intl.DateTimeFormat(WITHDRAWAL_REQUEST_DATE_LOCALE[locale], {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'UTC',
  }).format(new Date(value));
}

export function formatWithdrawalRequestTimestamp(locale: Locale, value: string) {
  return formatDate(locale, value);
}

export function withdrawalRequestPath(locale: Locale) {
  return localePath(locale, '/withdraw');
}

export const WITHDRAWAL_REQUEST_COPY: Record<Locale, WithdrawalRequestCopy> = {
  en: {
    seoTitle: 'Withdraw from a contract | VANTAM',
    seoDescription:
      'Use VANTAM’s dedicated online withdrawal function to submit a contract withdrawal request, review the details, and receive an acknowledgement by email.',
    title: 'Withdraw from a contract',
    summary:
      'Use this page to submit a withdrawal request in a separate step from the information pages. The form is designed for a single, focused notice and does not ask for reasons.',
    footerNote: 'This dedicated withdrawal workflow is separate from the general enquiry form.',
    backHomeLabel: 'Back to home',
    themeToggleLightLabel: 'Use light theme',
    themeToggleDarkLabel: 'Use dark theme',
    introTitle: 'Before you submit',
    introText:
      'Check the contract or service reference carefully, then review the details before the final confirmation step. The receipt confirms that VANTAM received the request, but it does not by itself decide whether the statutory withdrawal right applies.',
    formTitle: 'Step 1. Enter the request details',
    formText:
      'Provide the minimum details needed to identify the contract and the service. No reason is required.',
    reviewTitle: 'Step 2. Review your details',
    reviewText:
      'Confirm the request only after checking the details below. You can go back and edit them before the final submission.',
    successTitle: 'Withdrawal request received',
    successText:
      'VANTAM received your request and stored it for processing.',
    successPendingText:
      'VANTAM received your request and stored it, but the acknowledgement email still needs manual follow-up.',
    publicReferenceLabel: 'Public reference',
    submittedAtLabel: 'Submission timestamp',
    receiptNote:
      'Receipt of this request does not itself decide whether the statutory withdrawal right applies.',
    keepEmailNote:
      'Keep the acknowledgement email for your records.',
    pendingAckNote:
      'An acknowledgement email could not be delivered automatically. VANTAM will follow up manually.',
    errorMessage: 'The withdrawal request could not be sent. Please check the details and try again.',
    retryLabel: 'Try again',
    infoButtonLabel: 'Learn about withdrawal rights',
    infoButtonText: 'View withdrawal information',
    stepOneLabel: 'Request details',
    stepTwoLabel: 'Review and confirm',
    backButtonLabel: 'Back',
    reviewButtonLabel: 'Review details',
    submitButtonLabel: 'Withdraw from a contract',
    editButtonLabel: 'Edit details',
    nameLabel: 'Your name',
    emailLabel: 'Email address',
    contractReferenceLabel: 'Contract or service reference',
    serviceDescriptionLabel: 'Short service identification',
    localeLabel: 'Language',
    confirmLabel: 'I confirm that I intend to withdraw from the contract identified above.',
    namePlaceholder: 'Maria Smith',
    emailPlaceholder: 'maria@example.com',
    contractReferencePlaceholder: 'Offer, invoice, consultation, or file reference',
    serviceDescriptionPlaceholder: 'Example: housing support consultation',
    confirmationNotice:
      'This is a separate confirmation step. The request is sent only after you press the final button.',
    reviewNameLabel: 'Name',
    reviewEmailLabel: 'Email',
    reviewContractReferenceLabel: 'Contract or service reference',
    reviewServiceDescriptionLabel: 'Short service identification',
    reviewLocaleLabel: 'Language',
    reviewConfirmationLabel: 'Withdrawal confirmation',
    reviewTimestampLabel: 'Review timestamp',
  },
  uk: {
    seoTitle: 'Відмовитися від договору | VANTAM',
    seoDescription:
      'Скористайтеся окремою онлайн-функцією VANTAM для подання заяви про відмову від договору, перевірте дані та отримайте підтвердження електронною поштою.',
    title: 'Відмовитися від договору',
    summary:
      'Ця сторінка використовується для подання заяви про відмову окремим кроком від інформаційних сторінок. Форма призначена для одного короткого повідомлення і не запитує причини.',
    footerNote: 'Цей окремий потік відмови не пов’язаний із загальною формою запиту.',
    backHomeLabel: 'Повернутися на головну',
    themeToggleLightLabel: 'Увімкнути світлу тему',
    themeToggleDarkLabel: 'Увімкнути темну тему',
    introTitle: 'Перед надсиланням',
    introText:
      'Уважно перевірте посилання на договір або послугу, а потім перегляньте дані перед фінальним підтвердженням. Отримання підтвердження означає, що VANTAM отримав запит, але само по собі не вирішує, чи застосовується законне право на відмову.',
    formTitle: 'Крок 1. Введіть дані запиту',
    formText:
      'Надайте мінімальні дані, потрібні для ідентифікації договору та послуги. Причина не потрібна.',
    reviewTitle: 'Крок 2. Перевірте дані',
    reviewText:
      'Підтвердіть запит лише після перевірки наведених нижче даних. Ви можете повернутися назад і відредагувати їх перед фінальним надсиланням.',
    successTitle: 'Запит на відмову отримано',
    successText:
      'VANTAM отримав ваш запит і зберіг його для обробки.',
    successPendingText:
      'VANTAM отримав ваш запит і зберіг його, але підтвердження електронною поштою ще потребує ручного доопрацювання.',
    publicReferenceLabel: 'Публічний номер',
    submittedAtLabel: 'Час подання',
    receiptNote:
      'Отримання цього запиту саме по собі не визначає, чи застосовується законне право на відмову.',
    keepEmailNote:
      'Збережіть електронний лист із підтвердженням для своїх записів.',
    pendingAckNote:
      'Автоматично надіслати підтвердження не вдалося. VANTAM виконає ручну перевірку.',
    errorMessage: 'Запит на відмову не вдалося надіслати. Перевірте дані та спробуйте ще раз.',
    retryLabel: 'Спробувати ще раз',
    infoButtonLabel: 'Дізнатися про право на відмову',
    infoButtonText: 'Переглянути інформацію про відмову',
    stepOneLabel: 'Дані запиту',
    stepTwoLabel: 'Перевірка і підтвердження',
    backButtonLabel: 'Назад',
    reviewButtonLabel: 'Перевірити дані',
    submitButtonLabel: 'Відмовитися від договору',
    editButtonLabel: 'Редагувати дані',
    nameLabel: 'Ваше ім’я',
    emailLabel: 'Адреса електронної пошти',
    contractReferenceLabel: 'Посилання на договір або послугу',
    serviceDescriptionLabel: 'Коротка ідентифікація послуги',
    localeLabel: 'Мова',
    confirmLabel: 'Я підтверджую, що маю намір відмовитися від договору, зазначеного вище.',
    namePlaceholder: 'Марія Шевченко',
    emailPlaceholder: 'maria@example.com',
    contractReferencePlaceholder: 'Пропозиція, рахунок, консультація або номер файлу',
    serviceDescriptionPlaceholder: 'Наприклад: консультація щодо житла',
    confirmationNotice:
      'Це окремий крок підтвердження. Запит буде надіслано лише після натискання фінальної кнопки.',
    reviewNameLabel: 'Ім’я',
    reviewEmailLabel: 'Електронна пошта',
    reviewContractReferenceLabel: 'Посилання на договір або послугу',
    reviewServiceDescriptionLabel: 'Коротка ідентифікація послуги',
    reviewLocaleLabel: 'Мова',
    reviewConfirmationLabel: 'Підтвердження відмови',
    reviewTimestampLabel: 'Час перевірки',
  },
  ru: {
    seoTitle: 'Отказаться от договора | VANTAM',
    seoDescription:
      'Используйте отдельную онлайн-функцию VANTAM для подачи заявления об отказе от договора, проверьте данные и получите подтверждение по электронной почте.',
    title: 'Отказаться от договора',
    summary:
      'Эта страница используется для подачи заявления об отказе отдельным шагом от информационных страниц. Форма предназначена для одного короткого уведомления и не запрашивает причины.',
    footerNote: 'Этот отдельный поток отказа не связан с общей формой запроса.',
    backHomeLabel: 'Вернуться на главную',
    themeToggleLightLabel: 'Включить светлую тему',
    themeToggleDarkLabel: 'Включить тёмную тему',
    introTitle: 'Перед отправкой',
    introText:
      'Внимательно проверьте ссылку на договор или услугу, затем просмотрите данные перед финальным подтверждением. Получение подтверждения означает, что VANTAM получил запрос, но само по себе не решает, применяется ли законное право на отказ.',
    formTitle: 'Шаг 1. Введите данные запроса',
    formText:
      'Укажите минимальные данные, необходимые для идентификации договора и услуги. Причина не требуется.',
    reviewTitle: 'Шаг 2. Проверьте данные',
    reviewText:
      'Подтверждайте запрос только после проверки данных ниже. Вы можете вернуться назад и отредактировать их перед финальной отправкой.',
    successTitle: 'Запрос на отказ получен',
    successText:
      'VANTAM получил ваш запрос и сохранил его для обработки.',
    successPendingText:
      'VANTAM получил ваш запрос и сохранил его, но подтверждение по электронной почте ещё требует ручной обработки.',
    publicReferenceLabel: 'Публичный номер',
    submittedAtLabel: 'Время отправки',
    receiptNote:
      'Получение этого запроса само по себе не определяет, применяется ли законное право на отказ.',
    keepEmailNote:
      'Сохраните письмо с подтверждением для своих записей.',
    pendingAckNote:
      'Автоматически отправить подтверждение не удалось. VANTAM выполнит ручную проверку.',
    errorMessage: 'Не удалось отправить запрос на отказ. Проверьте данные и попробуйте снова.',
    retryLabel: 'Попробовать снова',
    infoButtonLabel: 'Узнать о праве на отказ',
    infoButtonText: 'Посмотреть информацию об отказе',
    stepOneLabel: 'Данные запроса',
    stepTwoLabel: 'Проверка и подтверждение',
    backButtonLabel: 'Назад',
    reviewButtonLabel: 'Проверить данные',
    submitButtonLabel: 'Отказаться от договора',
    editButtonLabel: 'Редактировать данные',
    nameLabel: 'Ваше имя',
    emailLabel: 'Адрес электронной почты',
    contractReferenceLabel: 'Ссылка на договор или услугу',
    serviceDescriptionLabel: 'Краткая идентификация услуги',
    localeLabel: 'Язык',
    confirmLabel: 'Я подтверждаю, что намерен(а) отказаться от договора, указанного выше.',
    namePlaceholder: 'Мария Иванова',
    emailPlaceholder: 'maria@example.com',
    contractReferencePlaceholder: 'Предложение, счёт, консультация или номер файла',
    serviceDescriptionPlaceholder: 'Например: консультация по жилью',
    confirmationNotice:
      'Это отдельный шаг подтверждения. Запрос будет отправлен только после нажатия финальной кнопки.',
    reviewNameLabel: 'Имя',
    reviewEmailLabel: 'Электронная почта',
    reviewContractReferenceLabel: 'Ссылка на договор или услугу',
    reviewServiceDescriptionLabel: 'Краткая идентификация услуги',
    reviewLocaleLabel: 'Язык',
    reviewConfirmationLabel: 'Подтверждение отказа',
    reviewTimestampLabel: 'Время проверки',
  },
};

export function formatWithdrawalRequestReviewTimestamp(locale: Locale, date: string) {
  return new Intl.DateTimeFormat(WITHDRAWAL_REQUEST_DATE_LOCALE[locale], {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(new Date(date));
}

export const WITHDRAWAL_CONTACT_EMAIL = BUSINESS.publicEmail;
