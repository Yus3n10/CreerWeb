# Security audit — Creer website

Static React/Vite site, no backend, no database, no user accounts. That
shrinks the attack surface a lot; here's what was checked and what's
actually applicable.

## Secrets

- Scanned the full codebase for API keys, tokens, passwords, and common key
  patterns (`AKIA...`, `sk-...`, private key headers, etc.) — none found.
- No `.env` file exists or is needed: the site calls no third-party API
  that requires a key. `.gitignore` blocks `.env` / `.env.*` / `*.local`
  regardless, so nothing leaks if one gets added later.
- `npm audit` — 0 vulnerabilities (production and dev dependencies).

## "Rate limiting on all endpoints"

There are no custom API endpoints in this project — no server, no
serverless functions. The only write path is the Contact page's inquiry
form, which posts to Netlify Forms (a static-detected form, not code we
run). Netlify handles spam/abuse filtering and throughput limits on their
infrastructure for that submission path; there's nothing for me to rate-limit
on our side because there's no server we operate. If a real backend gets
added later (e.g. a booking system), rate limiting would apply then.

## Input handling (contact form)

- Client-side: required fields, `maxLength` on all inputs (name 100,
  reach-back 150, message 1000 chars), trimmed and re-validated on submit
  (not just relying on the HTML attribute).
- Honeypot field (`company`) — hidden from real visitors via CSS, not
  `display:none`; if it's filled, the submission is silently dropped
  without a network call.
- No `dangerouslySetInnerHTML` anywhere in the codebase — React escapes all
  rendered text by default, so there's no stored/reflected XSS vector even
  though submitted messages aren't currently echoed back into any page.
- Real protection against abuse (beyond the honeypot) is Netlify's own spam
  filtering on the Forms product — this only takes effect once deployed,
  not in local dev.

## Headers (`netlify.toml`)

Added on deploy: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`,
`Referrer-Policy: strict-origin-when-cross-origin`, a restrictive
`Permissions-Policy`, and a `Content-Security-Policy` scoped to `'self'`
plus Google Fonts for styles/fonts. No inline scripts anywhere, so
`script-src 'self'` holds without `unsafe-inline`.

## What's left / can't be verified locally

- The Netlify Forms submission itself can only be confirmed once the site
  is actually deployed to Netlify — locally it correctly falls back to an
  error message pointing to Instagram, which was verified.
- If a real backend, login, or payment flow gets added later (none exist
  today), this audit should be re-run — it does not apply to code that
  doesn't exist yet.
