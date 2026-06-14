# VANTAM website

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and configure the contact form variables described below.
3. Run the app with `npm run dev`.

## Contact form

The form sends `POST /api/contact`. The server validates the request and sends an email through [Resend](https://resend.com) to the private `CONTACT_TO_EMAIL` recipient configured in the deployment environment. The visitor's email is used as Reply-To, so replying to the delivered message replies directly to the visitor.
The form also includes a required privacy acknowledgement that links to the locale-specific Privacy Policy page.

Environment variables:

```env
RESEND_API_KEY=re_replace_with_your_key
# Required; configure privately in the deployment environment.
CONTACT_TO_EMAIL=recipient@example.com
CONTACT_FROM_EMAIL="VANTAM Website <website@updates.your-domain.com>"
```

Setup:

1. Create a Resend account and API key.
2. Add a domain or sending subdomain to Resend and add the DNS records Resend provides.
3. Wait until the domain status is `verified`.
4. Use an address on that verified domain for `CONTACT_FROM_EMAIL`.
5. Add the same variables to the hosting provider's production environment and redeploy.
6. Submit one test request and confirm it arrives at the private `CONTACT_TO_EMAIL` recipient. Check the Resend Logs page if it does not arrive.

The API key must never use a `NEXT_PUBLIC_` prefix and must not be committed to Git.
