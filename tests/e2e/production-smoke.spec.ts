import {expect, test} from '@playwright/test';

import {DICTIONARY} from '../../data';
import {WITHDRAWAL_REQUEST_COPY} from '../../lib/withdrawal-request';

const marker = `CYCLE1-SMOKE-${Date.now()}`;
const mailbox = process.env.VANTAM_SMOKE_TEST_EMAIL;

test.describe('production smoke', () => {
  test('submits a contact enquiry and a withdrawal request', async ({page}) => {
    test.skip(
      process.env.RUN_PRODUCTION_SMOKE !== '1'
      || process.env.PLAYWRIGHT_BASE_URL !== 'https://www.vantam.xyz'
      || !mailbox,
      'Production smoke test is gated by explicit environment variables.',
    );

    const contactCopy = DICTIONARY.en;
    const withdrawalCopy = WITHDRAWAL_REQUEST_COPY.en;

    await page.goto('/en');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.getByLabel(contactCopy.contactNameLabel).fill(`VANTAM Smoke ${marker}`);
    await page.getByLabel(contactCopy.contactEmailLabel).fill(mailbox as string);
    await page.getByLabel(contactCopy.contactMessageLabel).fill(`Production smoke marker: ${marker}`);
    await page.locator('#privacy-consent').check();
    await page.getByRole('button', {name: contactCopy.contactSubmitBtn}).click();
    await expect(page.getByRole('status')).toContainText(contactCopy.contactSuccessTitle);

    await page.goto('/en/withdraw');
    await page.getByLabel(withdrawalCopy.nameLabel).fill(`VANTAM Smoke ${marker}`);
    await page.getByLabel(withdrawalCopy.emailLabel).fill(mailbox as string);
    await page.getByLabel(withdrawalCopy.contractReferenceLabel).fill(`SMOKE-CONTRACT-${marker}`);
    await page.getByLabel(withdrawalCopy.serviceDescriptionLabel).fill('Synthetic production smoke check');
    await page.getByRole('button', {name: withdrawalCopy.reviewButtonLabel}).click();
    await page.getByLabel(withdrawalCopy.confirmLabel).check();
    await page.getByRole('button', {name: withdrawalCopy.submitButtonLabel}).click();

    const status = page.getByRole('status');
    await expect(status).toBeVisible();
    await expect(status).toContainText(withdrawalCopy.publicReferenceLabel);
    await expect(status).toContainText(withdrawalCopy.submittedAtLabel);

    const publicReference = await status.getByText(/WR-/).textContent();
    console.log(`Production smoke withdrawal public reference: ${publicReference ?? 'unavailable'}`);
  });
});
