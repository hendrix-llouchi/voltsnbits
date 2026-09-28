# Volts&Bits

A single-page marketing site for final-year project support. The site is designed to introduce the service, explain the process, and convert visitors into project inquiries through a direct call-to-action.

## Project purpose

Volts&Bits helps final-year, capstone, and research students move from a rough idea to a clear, defensible project. The landing page positions the business around practical mentorship, technical direction, and project clarity rather than generic consulting language.

## Current site scope

The current implementation is a responsive React + Vite landing page with:

- a strong sticky navigation
- hero section with a clear lead form CTA
- service overview cards
- project support journey/process section
- who-it-helps section
- why-us value proposition section
- final CTA and footer

## Stack

- React 19
- Vite
- Tailwind CSS
- Lucide React icons

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## Inquiry link

The primary CTA uses the Google Form URL configured in:

- [src/config.js](src/config.js)

## Notes

- This repo is intentionally a marketing/inquiry website, not a full application dashboard.
- Detailed product and content context is kept in [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md).
- The documentation here is kept intentionally brief and current to the actual implementation.