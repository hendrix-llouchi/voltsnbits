# Volts&Bits Project Documentation

## Overview

Volts&Bits is a lightweight marketing and inquiry website for final-year project support. Its job is to explain the service clearly, reassure students that the process is structured, and send qualified prospects to a contact form.

The current site is a single-page experience built with React and Vite, and it is designed to present the offer in a clean editorial style rather than as a heavy product app.

## Product goal

The website exists to turn interest into inquiries. Visitors should quickly understand:

- who the service is for
- what support is offered
- how the process works
- why the service is credible
- where to submit a project inquiry

## Current content structure

The landing page is organized into these sections:

1. Navigation
2. Hero section
3. Who we help
4. Services
5. Process / how it works
6. Editorial statement
7. Why us
8. Final CTA
9. Footer

This structure matches the current implementation in [src/App.jsx](src/App.jsx) and the related components under [src/components](src/components).

## Brand positioning

The brand message is built around clarity, technical mentorship, and student confidence. The tone is practical and supportive rather than overly sales-driven.

Core positioning themes:

- project clarity
- technical mentorship
- realistic scope and planning
- research and implementation support
- defense readiness and understanding

## Visual direction

The visual system uses a warm editorial palette with dark neutral contrast and one accent tone for calls to action and emphasis. This is defined in [src/index.css](src/index.css), which sets the base palette, spacing, and typography tokens.

Current palette values include:

- cream background
- warm brown accents
- deep dark brown/ink text
- soft neutral surfaces
- muted supportive copy

## Inquiry flow

The main conversion action is a Google Form. The live inquiry URL is stored in [src/config.js](src/config.js).

This makes the CTA consistent and easy to update without restructuring the page.

## Technical setup

Project tooling:

- Vite for development and production builds
- React for component structure
- Tailwind CSS for layout and styling
- Lucide React icons for UI accents

Common commands:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Maintenance notes

- Keep the brand voice consistent and student-focused.
- Avoid adding product or dashboard complexity unless the business model changes.
- Update the inquiry URL in [src/config.js](src/config.js) as needed.
- Keep the public-facing copy focused on outcomes, trust, and clarity.

## Outdated material removed

Older planning-heavy content, long implementation checklists, and detailed speculative roadmap notes were removed to keep the documentation aligned with the current live site and the actual project scope.
