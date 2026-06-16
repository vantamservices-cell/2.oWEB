import 'server-only';

import type {Locale} from '../locales';
import {BUSINESS} from '../business';

type GmailAuthConfig = {
  googleClientId: string;
  googleClientSecret: string;
  googleRefreshToken: string;
  gmailSenderAddress: string;
};

type WithdrawalAcknowledgementEmail = GmailAuthConfig & {
  to: string;
  locale: Locale;
  publicReference: string;
  submittedAt: string;
  contractReference: string;
};

const ACKNOWLEDGEMENT_DATE_LOCALE: Record<Locale, string> = {
  en: 'en-GB',
  uk: 'uk-UA',
  ru: 'ru-RU',
};

function formatSubmittedAt(locale: Locale, submittedAt: string) {
  return new Intl.DateTimeFormat(ACKNOWLEDGEMENT_DATE_LOCALE[locale], {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'UTC',
  }).format(new Date(submittedAt));
}

function buildMessageBody(params: WithdrawalAcknowledgementEmail) {
  const submittedAt = formatSubmittedAt(params.locale, params.submittedAt);

  if (params.locale === 'uk') {
    return [
      'VANTAM',
      '',
      `Публічний номер: ${params.publicReference}`,
      `Час подання: ${submittedAt}`,
      `Посилання на договір або послугу: ${params.contractReference}`,
      'VANTAM отримав ваш запит на відмову.',
      'Отримання цього запиту ще не визначає, чи застосовується законне право на відмову.',
      `Контакт VANTAM: ${BUSINESS.publicEmail}`,
    ].join('\n');
  }

  if (params.locale === 'ru') {
    return [
      'VANTAM',
      '',
      `Публичный номер: ${params.publicReference}`,
      `Время отправки: ${submittedAt}`,
      `Ссылка на договор или услугу: ${params.contractReference}`,
      'VANTAM получил ваш запрос на отказ.',
      'Получение этого запроса ещё не определяет, применяется ли законное право на отказ.',
      `Контакт VANTAM: ${BUSINESS.publicEmail}`,
    ].join('\n');
  }

  return [
    'VANTAM',
    '',
    `Public reference: ${params.publicReference}`,
    `Submission timestamp: ${submittedAt}`,
    `Contract or service reference: ${params.contractReference}`,
    'VANTAM received your withdrawal request.',
    'Receipt of this request does not yet determine whether the statutory withdrawal right applies.',
    `VANTAM contact email: ${BUSINESS.publicEmail}`,
  ].join('\n');
}

function buildSubject(locale: Locale) {
  if (locale === 'uk') return 'VANTAM: запит на відмову отримано';
  if (locale === 'ru') return 'VANTAM: запрос на отказ получен';
  return 'VANTAM withdrawal request received';
}

async function exchangeAccessToken({
  googleClientId,
  googleClientSecret,
  googleRefreshToken,
}: GmailAuthConfig) {
  const body = new URLSearchParams({
    client_id: googleClientId,
    client_secret: googleClientSecret,
    refresh_token: googleRefreshToken,
    grant_type: 'refresh_token',
  });

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body,
  });

  if (!response.ok) return null;
  const data = await response.json() as {access_token?: unknown};
  return typeof data.access_token === 'string' ? data.access_token : null;
}

function toBase64Url(value: string) {
  return Buffer.from(value, 'utf8').toString('base64url');
}

export async function sendWithdrawalAcknowledgementEmail(params: WithdrawalAcknowledgementEmail) {
  const accessToken = await exchangeAccessToken(params);
  if (!accessToken) return false;

  const body = buildMessageBody(params);
  const rawMessage = [
    `From: VANTAM <${params.gmailSenderAddress}>`,
    `To: ${params.to}`,
    `Reply-To: VANTAM <${params.gmailSenderAddress}>`,
    `Subject: ${buildSubject(params.locale)}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset="UTF-8"',
    '',
    body,
  ].join('\r\n');

  const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({raw: toBase64Url(rawMessage)}),
  });

  return response.ok;
}
