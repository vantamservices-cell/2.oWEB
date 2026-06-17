import {defineConfig} from '@playwright/test';

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:3000';
const useLocalServer = !process.env.PLAYWRIGHT_BASE_URL
  || baseURL.includes('localhost')
  || baseURL.includes('127.0.0.1');

export default defineConfig({
  testDir: './tests/e2e',
  reporter: 'list',
  fullyParallel: false,
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  testIgnore: process.env.RUN_PRODUCTION_SMOKE === '1'
    ? []
    : ['**/production-smoke.spec.ts'],
  webServer: useLocalServer
    ? {
        command: 'npm run dev -- --hostname 127.0.0.1 --port 3000',
        url: 'http://127.0.0.1:3000',
        reuseExistingServer: true,
        timeout: 120000,
      }
    : undefined,
});
