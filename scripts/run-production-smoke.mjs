import {spawnSync} from 'node:child_process';

const requiredEnv = [
  'RUN_PRODUCTION_SMOKE',
  'PLAYWRIGHT_BASE_URL',
  'VANTAM_SMOKE_TEST_EMAIL',
];

const missing = requiredEnv.filter((key) => !process.env[key]);

if (process.env.RUN_PRODUCTION_SMOKE !== '1') {
  console.error('Set RUN_PRODUCTION_SMOKE=1 to run the production smoke test.');
  process.exit(1);
}

if (process.env.PLAYWRIGHT_BASE_URL !== 'https://www.vantam.xyz') {
  console.error('Set PLAYWRIGHT_BASE_URL=https://www.vantam.xyz to run the production smoke test.');
  process.exit(1);
}

if (missing.length) {
  console.error(`Missing required environment variables: ${missing.join(', ')}`);
  process.exit(1);
}

const result = spawnSync(
  'npx',
  ['playwright', 'test', 'tests/e2e/production-smoke.spec.ts', '--config=playwright.config.ts'],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
      RUN_PRODUCTION_SMOKE: '1',
    },
  },
);

process.exit(result.status ?? 1);
