import {expect, test} from '@playwright/test';

import {LOCALES, type Locale} from '../../lib/locales';
import {WITHDRAWAL_REQUEST_COPY} from '../../lib/withdrawal-request';

const viewports = [
  {name: 'desktop', options: {}},
  {name: 'mobile', options: {viewport: {width: 390, height: 844}, isMobile: true}},
] as const;

async function fillWithdrawalForm(page, lang: Locale) {
  const copy = WITHDRAWAL_REQUEST_COPY[lang];

  await page.getByLabel(copy.nameLabel).fill('Maria Smith');
  await page.getByLabel(copy.emailLabel).fill('maria@example.com');
  await page.getByLabel(copy.contractReferenceLabel).fill('WR-TEST-123');
  await page.getByLabel(copy.serviceDescriptionLabel).fill('Housing support consultation');
}

for (const viewport of viewports) {
  test.describe(`withdrawal flow ${viewport.name}`, () => {
    test.use(viewport.options);

    test('loads each locale and handles acknowledged and pending responses', async ({page}) => {
      for (const lang of LOCALES) {
        const copy = WITHDRAWAL_REQUEST_COPY[lang];

        await page.goto(`/${lang}/withdraw`);
        await expect(page.getByRole('heading', {level: 1, name: copy.title})).toBeVisible();
        await expect(page.getByRole('link', {name: copy.infoButtonText})).toHaveAttribute('href', `/${lang}/withdrawal`);
      }
    });

    test('requires explicit confirmation before submission', async ({page}) => {
      const copy = WITHDRAWAL_REQUEST_COPY.en;

      await page.goto('/en/withdraw');
      await fillWithdrawalForm(page, 'en');
      await page.getByRole('button', {name: copy.reviewButtonLabel}).click();

      const confirmation = page.getByLabel(copy.confirmLabel);
      const submitButton = page.getByRole('button', {name: copy.submitButtonLabel});

      await expect(confirmation).not.toBeChecked();
      await expect(submitButton).toBeDisabled();

      await confirmation.check();
      await expect(submitButton).toBeEnabled();
    });

    test('shows acknowledged and pending-acknowledgement success states', async ({page}) => {
      const copy = WITHDRAWAL_REQUEST_COPY.en;

      await page.goto('/en/withdraw');
      await page.route('**/api/withdrawal', async (route) => {
        const request = route.request().postDataJSON() as {contractReference?: string};
        const status = request.contractReference === 'WR-PENDING-123'
          ? 'received_pending_acknowledgement'
          : 'acknowledged';

        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            status,
            publicReference: `WR-${status === 'acknowledged' ? 'OK' : 'WAIT'}-12345678`,
            submittedAt: new Date().toISOString(),
          }),
        });
      });

      await fillWithdrawalForm(page, 'en');
      await page.getByRole('button', {name: copy.reviewButtonLabel}).click();
      await page.getByLabel(copy.confirmLabel).check();
      await page.getByRole('button', {name: copy.submitButtonLabel}).click();
      await expect(page.getByRole('status')).toContainText(copy.successText);
      await expect(page.getByText(copy.publicReferenceLabel)).toBeVisible();

      await page.goto('/en/withdraw');
      await fillWithdrawalForm(page, 'en');
      await page.getByLabel(copy.contractReferenceLabel).fill('WR-PENDING-123');
      await page.getByRole('button', {name: copy.reviewButtonLabel}).click();
      await page.getByLabel(copy.confirmLabel).check();
      await page.getByRole('button', {name: copy.submitButtonLabel}).click();
      await expect(page.getByRole('status')).toContainText(copy.successPendingText);
      await expect(page.getByText(copy.pendingAckNote)).toBeVisible();
    });
  });
}
