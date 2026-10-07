# Volts&Bits

[![React 19](https://img.shields.io/badge/React-19.0.0-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Vite 6](https://img.shields.io/badge/Vite-6.2.0-646cff?style=flat-square&logo=vite)](https://vite.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Version: 2.1](https://img.shields.io/badge/Version-2.1-5a3825?style=flat-square)](https://github.com/hendrix-llouchi/voltsnbits)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

An editorial, conversion-focused marketing and inquiry website for **Volts&Bits**, a technical mentorship service assisting final-year engineering, computer science, and capstone students with research formulation, software development, IoT integration, and viva defense preparation.

---

## Table of Contents

- [Overview](#overview)
- [Core Philosophy](#core-philosophy)
- [Version 2 (v2) Release & Changelog](#version-2-v2-release--changelog)
  - [1. Hero Section Redesign](#1-hero-section-redesign)
  - [2. Who We Help 6-Column Bento Grid](#2-who-we-help-6-column-bento-grid)
  - [3. Conversion-Focused Flow & Content Tightening](#3-conversion-focused-flow--content-tightening)
  - [4. Direct Contact & Communication Channels](#4-direct-contact--communication-channels)
  - [5. Legal Pages & Lightweight Routing (v2.1)](#5-legal-pages--lightweight-routing-v21)
  - [6. Visual & Editorial Scale Enhancements](#6-visual--editorial-scale-enhancements)
- [Site Architecture & Routing](#site-architecture--routing)
  - [Landing Page Sections](#landing-page-sections)
  - [Legal & Policy Routes](#legal--policy-routes)
- [Tech Stack](#tech-stack)
- [Project Directory Structure](#project-directory-structure)
- [Design System & Palette](#design-system--palette)
- [Configuration & Links](#configuration--links)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
  - [Preview Build](#preview-build)
  - [Windows PowerShell Troubleshooting](#windows-powershell-troubleshooting)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

Final-year engineering and computing projects often encounter hurdles: ambiguous research questions, scope creep, implementation blockers, hardware-software integration challenges, or difficulty explaining design decisions before academic panels.

**Volts&Bits** provides structured, hands-on technical guidance:
- **Scope & Direction**: Defining clear, feasible research questions and milestone roadmaps.
- **Deep Technical Support**: Unblocking architecture, software development, AI/ML pipelines, and connected IoT systems.
- **Defense Readiness**: Ensuring students understand the decisions behind their project so they can defend their implementation with clarity and confidence.

The website delivers this message through a warm editorial design language inspired by print aesthetics (warm paper tones, classic serifs, and high-contrast typography) instead of generic agency templates.

---

## Core Philosophy

> **"BUILD IT. UNDERSTAND IT."**

Volts&Bits is built around **comprehension and ownership**, not passive code dumping. The service acts as a technical partner, helping students understand every algorithm, tool, and architectural trade-off so they own their work during academic defenses and reviews.

---

## Version 2 (v2) Release & Changelog

Version 2 represents a comprehensive evolution from the initial release (v1), refining visual aesthetics, streamlining conversion pathways, modernizing grid layouts, and introducing formal legal infrastructure.

### 1. Hero Section Redesign
- **Full-Bleed Media Scrim**: Replaced the original framed box with a full-bleed media card featuring a smooth gradient scrim overlay (`linear-gradient(0deg, rgba(23, 21, 18, 0.76), ...)`), enhancing text readability over imagery.
- **Refined Typography Scale**: Tuned the main headline (`hero__heading`) to `clamp(3rem, 5.5vw, 5.25rem)` with tighter letter-spacing (`-0.06em`) and balanced text wrapping (`max-width: 12ch`).
- **High-Contrast Subtitle**: Updated the hero description font weight to semi-bold (`600`) and deep ink color (`--color-ink`) for immediate visual impact and legibility.
- **Brand Brown CTA**: Elevated the primary action button from neutral ink to brand warm brown (`--color-brown` with `--color-brown-deep` hover) and expanded touch targets (`min-height: 3.25rem`).

### 2. Who We Help 6-Column Bento Grid
- **Modern Bento Grid**: Transitioned from the v1 alternating left-right stacked rows to a responsive 6-column bento grid layout:
  - Top 2 milestone cards span **3 columns each** on widescreen.
  - Remaining 3 milestone cards span **2 columns each**, creating a clean visual rhythm.
- **Standardized Visual Flow**: Each card follows an intuitive vertical sequence: milestone index (`01`–`05`), framed image plate, and bold headline.
- **Seamless Mobile Stacking**: Automatically collapses to a clean single-column card list on mobile screens without layout shifts.

### 3. Conversion-Focused Flow & Content Tightening
- **Streamlined Landing Page Flow**: Removed the standalone `EditorialStatement` quote block from the active render flow in [`App.jsx`](src/App.jsx) to eliminate scroll fatigue and direct visitors toward the intake funnel.
- **Copy Tightening Across Sections**:
  - **Services**: Descriptions simplified to concise, high-impact summaries (AI integration, gap analysis, IoT, software, mentorship).
  - **Process**: Refined the 4 steps (Discover, Plan, Build, Document) into crisp, actionable milestones.
  - **Why Us**: Principles focused on outcomes (Clarity, Technical Depth, Guided Building, Confident Defense).

### 4. Direct Contact & Communication Channels
- **Gmail Direct Link**: Integrated an official contact link (`voltsnbits26@gmail.com`) directly into the footer alongside the Google Form link.
- **Stylized Brand SVG**: Added a handcrafted 4-color Google/Gmail SVG mark matching Google's brand colors (`#EA4335`, `#4285F4`, `#FBBC04`, `#34A853`).

### 5. Legal Pages & Lightweight Routing (v2.1)
- **Built-in Client-Side Routing**: Implemented lightweight pathname detection in [`src/App.jsx`](src/App.jsx) (`window.location.pathname`), rendering dedicated legal views without heavy router dependencies:
  - `/terms-and-conditions` &rarr; [`TermsAndConditions.jsx`](src/components/TermsAndConditions.jsx)
  - `/privacy-policy` &rarr; [`PrivacyPolicy.jsx`](src/components/PrivacyPolicy.jsx)
- **Reusable Legal Template**: Built [`LegalPage.jsx`](src/components/LegalPage.jsx) featuring a clean back-navigation link (`← Back to Volts&Bits`), header metadata, and styled article layout.
- **Legal Compliance & Academic Integrity**:
  - Full terms defining service scope, student responsibility, and strict anti-plagiarism / academic integrity policies.
  - Comprehensive privacy policy aligned with the **Ghana Data Protection Act**, detailing Google Forms data handling and student confidentiality.
- **Footer Navigation**: Added direct links to Terms and Privacy in the footer.

### 6. Visual & Editorial Scale Enhancements
- **Heroic Section Headings**: Enabled large display scale for `WhoWeHelp` and `WhyUs` section titles, scaling up to `6.5rem` (`clamp(3.5rem, 8vw, 6.5rem)`) on desktop displays.
- **Enhanced CSS Variables**: Consolidated custom property tokens in [`src/index.css`](src/index.css) for consistent spacing, colors, and transitions.

---

## Site Architecture & Routing

### Landing Page Sections

When visiting the root path (`/`), [`src/App.jsx`](src/App.jsx) renders the core marketing and inquiry funnel:

| Section | Component | Description |
| :--- | :--- | :--- |
| **Header / Nav** | [`Navigation.jsx`](src/components/Navigation.jsx) | Sticky navigation bar with anchor links (`#services`, `#process`, `#about`), accessible mobile drawer, keyboard `Escape` support, and CTA button. |
| **Hero** | [`Hero.jsx`](src/components/Hero.jsx) | Headline, value proposition, primary intake CTA, anchor scroll link to process, and full-bleed editorial imagery. |
| **Who We Help** | [`WhoWeHelp.jsx`](src/components/WhoWeHelp.jsx) | 6-column bento grid illustrating 5 student journey stages (idea phase, research gap, unblocking build, IoT integration, defense prep). |
| **Services** | [`Services.jsx`](src/components/Services.jsx) | 5 core service offerings: AI & ML Integration, Gap Analysis, Software & IoT, Systems Integration, and Discovery Mentorship. |
| **Process** | [`Process.jsx`](src/components/Process.jsx) | The 4-step Volts&Bits method: **01 Discover** &rarr; **02 Plan** &rarr; **03 Build** &rarr; **04 Document**, paired with a branded editorial showcase. |
| **Why Us** | [`WhyUs.jsx`](src/components/WhyUs.jsx) | Value proposition cards focusing on Clarity, Technical Depth, Guided Building, and Confident Defense. |
| **Final CTA** | [`FinalCTA.jsx`](src/components/FinalCTA.jsx) | High-contrast conversion block driving inquiries to the intake form. |
| **Footer** | [`Footer.jsx`](src/components/Footer.jsx) | Brand wordmark, site links, legal links, Google Form action, and official Gmail contact. |

### Legal & Policy Routes

The application handles dedicated views via lightweight pathname switching:

| Path | Component | Purpose |
| :--- | :--- | :--- |
| `/terms-and-conditions` | [`TermsAndConditions.jsx`](src/components/TermsAndConditions.jsx) | Terms of service, mentorship scope, fees, payment guidelines, academic integrity policies, and governing law (Ghana). |
| `/privacy-policy` | [`PrivacyPolicy.jsx`](src/components/PrivacyPolicy.jsx) | Data collection practices, Google Forms processing, confidentiality, and data subject rights under the Data Protection Act. |

---

## Tech Stack

- **UI Library**: [React 19](https://react.dev) (`react` ^19.0.0, `react-dom` ^19.0.0)
- **Bundler & Dev Server**: [Vite 6](https://vite.dev) (`vite` ^6.2.0, `@vitejs/plugin-react` ^4.3.4)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (`tailwindcss` ^4.0.0, `@tailwindcss/vite` ^4.0.0)
- **Icons**: [Lucide React](https://lucide.dev) (`lucide-react` ^1.48.0)
- **Typography**: Google Fonts loaded via `index.html`:
  - *Libre Baskerville* (Editorial serifs & section headings)
  - *Bodoni Moda* (Display italics & accents)
  - *Manrope* (Clean, modern sans-serif body text)

---

## Project Directory Structure

```text
vitsnbolt/
├── .agents/                    # Custom agent skills and workflow definitions
├── dist/                       # Optimized production build artifacts
├── public/                     # Static assets served at root
├── src/
│   ├── components/             # Section & page components
│   │   ├── ui/                 # Reusable atomic UI elements
│   │   │   ├── Button.jsx          # Polymorphic button/anchor with variant styling
│   │   │   ├── CircularButton.jsx  # Rounded icon action button
│   │   │   ├── Divider.jsx         # Hairline rule divider
│   │   │   ├── Eyebrow.jsx         # Uppercase category tracking badge
│   │   │   ├── MediaBlock.jsx      # Framed image container with label & meta overlay
│   │   │   └── PlayButton.jsx      # Interactive media action trigger
│   │   ├── EditorialStatement.jsx  # Standalone editorial quote component
│   │   ├── FinalCTA.jsx            # Conversion intake section
│   │   ├── Footer.jsx              # Footer with links, copyright, legal & email
│   │   ├── Hero.jsx                # Full-bleed landing page hero banner
│   │   ├── LegalPage.jsx           # Reusable legal view layout wrapper
│   │   ├── Navigation.jsx          # Sticky header & responsive mobile drawer
│   │   ├── PrincipleItem.jsx       # Individual principle item card
│   │   ├── PrivacyPolicy.jsx       # Complete privacy policy page
│   │   ├── Process.jsx             # 4-stage Volts&Bits method section
│   │   ├── ProcessStep.jsx         # Individual process step component
│   │   ├── ServiceItem.jsx         # Individual service card item
│   │   ├── Services.jsx            # Services overview section
│   │   ├── TermsAndConditions.jsx  # Complete terms & conditions page
│   │   ├── WhoWeHelp.jsx           # 6-column bento grid student situations
│   │   └── WhyUs.jsx               # Value proposition cards section
│   ├── App.jsx                 # Application layout & lightweight path router
│   ├── config.js               # Central configuration (e.g. INQUIRY_URL)
│   ├── index.css               # Tailwind v4 setup, design tokens & custom styling
│   └── main.jsx                # React root mount entrypoint
├── index.html                  # HTML template, font preconnects & SEO tags
├── LICENSE                     # MIT License
├── package.json                # Dependencies and build scripts
├── PROJECT_DOCUMENTATION.md    # Product documentation and brand guidelines
├── README.md                   # Project overview, v2 changelog, and developer guide
└── vite.config.js              # Vite build tool and plugin configuration
```

---

## Design System & Palette

Defined in `src/index.css`, the color system delivers a calm, tactile aesthetic:

| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--color-cream` | `#f3efe7` | Page background, warm paper foundation |
| `--color-white` | `#ffffff` | Elevated cards, media frames, and contrasting containers |
| `--color-brown` | `#5a3825` | Primary brand action color, button fill, text highlight |
| `--color-brown-deep` | `#43291c` | Active/hover states for primary actions |
| `--color-ink` | `#171512` | Main body text and primary headlines |
| `--color-muted` | `#625d57` | Supporting descriptions, captions, and secondary copy |
| `--color-hairline` | `#cfc9c0` | Subtle hairline dividers and card borders |
| `--color-focus` | `#8d5b3d` | Accessible `:focus-visible` outline indicator |

Spacing, headings, and margins utilize CSS `clamp()` for smooth, viewport-adaptive scaling across mobile, tablet, and ultra-wide screens.

---

## Configuration & Links

### Project Inquiry Form

Primary and secondary conversion buttons point to an external Google Form. The URL is configured in [`src/config.js`](src/config.js):

```javascript
export const INQUIRY_URL = 'https://forms.gle/QDLfpz8xmsbYBs4f8'
```

### Direct Contact Email

Direct contact inquiries point to the official inbox in [`src/components/Footer.jsx`](src/components/Footer.jsx):
- **Email**: [voltsnbits26@gmail.com](mailto:voltsnbits26@gmail.com)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com) (v9.0.0 or higher)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/hendrix-llouchi/voltsnbits.git
cd voltsnbits
npm install
```

### Development Server

Launch Vite's development server with hot module replacement (HMR):

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production Build

Compile and optimize the project for production:

```bash
npm run build
```

Assets are output to the `dist/` directory.

### Preview Build

Preview the production build locally before deploying:

```bash
npm run preview
```

### Windows PowerShell Troubleshooting

If running `npm run ...` in Windows PowerShell throws:
```text
PSSecurityException: File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system
```

Run using the `cmd` wrapper or adjust the session execution policy:

```powershell
# Option A: Run via cmd wrapper
cmd /c npm run dev
cmd /c npm run build

# Option B: Set process-scoped execution policy
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run dev
```

---

## Deployment

The application compiles to static HTML, CSS, and JavaScript in `dist/`. It can be deployed to any static host:

- **Vercel**: Link repository; build command is `npm run build` and output directory is `dist`. Add an SPA rewrite rule (`/*` &rarr; `/index.html`) if deep linking to legal pages.
- **Netlify**: Set build command to `npm run build` and publish directory to `dist`.
- **Firebase Hosting**: Run `firebase init hosting` targeting `dist` as public directory.
- **Cloudflare Pages / GitHub Pages**: Deploy the `dist` directory.

---

## License

This project is licensed under the [MIT License](LICENSE) &copy; 2026 Henry Cobbinah.