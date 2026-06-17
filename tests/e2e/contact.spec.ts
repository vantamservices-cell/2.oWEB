import {expect, test} from '@playwright/test';

import {DICTIONARY} from '../../data';
import {LOCALES, type Locale} from '../../lib/locales';
import {PRIVACY_ROUTE_LABELS} from '../../lib/privacy';

const warningText: Record<Locale, string> = {
  en: 'Do not submit passports, bank statements, medical information, guarantor files or other sensitive documents through this open form.',
  uk: 'Не надсилайте через цю відкриту форму паспорти, банківські виписки, медичні дані, файли поручителя чи інші чутливі документи.',
  ru: 'Не отправляйте через эту открытую форму паспорта, банковские выписки, медицинские данные, файлы поручителя или другие чувствительные документы.',
};

const errorSnippet: Record<Locale, string> = {
  en: 'could not be sent',
  uk: 'Не вдалося надіслати запит',
  ru: 'Не удалось отправить запрос',
};

const viewports = [
  {name: 'desktop', options: {}},
  {name: 'mobile', options: {viewport: {width: 390, height: 844}, isMobile: true}},
] as const;

async function fillContactForm(page, lang: Locale) {
  const copy = DICTIONARY[lang];

  await page.locator('#contact').scrollIntoViewIfNeeded();
  await page.getByLabel(copy.contactNameLabel).fill('Maria Smith');
  await page.getByLabel(copy.contactEmailLabel).fill('maria@example.com');
  await page.getByLabel(copy.contactMessageLabel).fill('Need help with housing support.');
  await page.locator('#privacy-consent').check();
}

for (const viewport of viewports) {
  test.describe(`contact flow ${viewport.name}`, () => {
    test.use(viewport.options);

    test('loads each locale, shows the warning, and completes the contact flow', async ({page}) => {
      await page.route('**/api/contact', async (route) => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ok: true}),
        });
      });

      for (const lang of LOCALES) {
        const copy = DICTIONARY[lang];

        await page.goto(`/${lang}`);
        await expect(page.getByRole('heading', {level: 1, name: copy.heroHeadline})).toBeVisible();
        await expect(page.locator('a.consent-link')).toHaveAttribute('href', `/${lang}/privacy`);
        await expect(page.getByText(warningText[lang])).toBeVisible();
        await fillContactForm(page, lang);

        const submitButton = page.getByRole('button', {name: copy.contactSubmitBtn});
        await submitButton.click();
        await expect(page.getByRole('button', {name: copy.contactSending})).toBeVisible();
        await expect(page.getByRole('status').getByRole('heading', {level: 3, name: copy.contactSuccessTitle})).toBeVisible();
        await expect(page.getByRole('status').getByText(copy.contactSuccessDesc)).toBeVisible();

        await page.getByRole('button', {name: copy.contactFailBtn}).click();
        await expect(page.getByRole('button', {name: copy.contactSubmitBtn})).toBeVisible();
      }
    });
  });
}

test.describe('contact validation and error handling', () => {
  test('shows required-field validation and a generic error state', async ({page}) => {
    const copy = DICTIONARY.en;

    await page.goto('/en');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.getByLabel('I have read the').check();

    const submitButton = page.getByRole('button', {name: copy.contactSubmitBtn});
    await submitButton.click();
    await expect(page.locator('#contact-name')).toBeInvalid();
    await expect(page.locator('#contact-email')).toBeInvalid();
    await expect(page.locator('#contact-message')).toBeInvalid();

    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 503,
        contentType: 'application/json',
        body: JSON.stringify({error: 'temporary failure'}),
      });
    });

    await fillContactForm(page, 'en');
    await submitButton.click();
    await expect(page.getByRole('alert')).toContainText(errorSnippet.en);
  });
});
