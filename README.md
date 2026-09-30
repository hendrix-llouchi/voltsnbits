# Volts&Bits

[![React 19](https://img.shields.io/badge/React-19.0.0-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Vite 6](https://img.shields.io/badge/Vite-6.2.0-646cff?style=flat-square&logo=vite)](https://vite.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

An editorial, conversion-focused single-page marketing website for **Volts&Bits**, a specialized project mentorship service for final-year engineering, computer science, and capstone students.

The platform is designed to introduce the mentorship model, showcase practical service offerings, guide students through the structured 4-step process, and convert inquiries via an integrated intake funnel.

---

## Table of Contents

- [Overview](#overview)
- [Core Philosophy](#core-philosophy)
- [Landing Page Architecture](#landing-page-architecture)
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

Final-year engineering and computing projects often stall due to ambiguous problem statements, scope creep, implementation roadblocks, or difficulty defending technical decisions before an academic panel.

**Volts&Bits** bridges this gap with practical, high-touch technical direction:
- **Scope & Direction**: Defining clear, achievable project questions and deliverables.
- **Deep Technical Support**: Unblocking architecture, software development, AI/ML integration, and hardware-software interfacing.
- **Defense Readiness**: Ensuring the student understands every architectural decision, tool, and algorithm so they can defend their project with genuine confidence.

The website reflects this philosophy through a refined editorial aesthetic (warm paper surfaces, classic serif typography, minimal distraction) rather than generic corporate agency templates.

---

## Core Philosophy

> **"BUILD IT. UNDERSTAND IT."**

Volts&Bits is intentionally positioned around **comprehension and ownership**, not passive code dumping. The landing page copy, visual hierarchy, and process stages emphasize student empowerment and academic defensibility.

---

## Landing Page Architecture

The single-page site (`src/App.jsx`) is organized into dedicated, accessible sections:

| Section | Component | Description |
| :--- | :--- | :--- |
| **Header / Nav** | [`Navigation.jsx`](src/components/Navigation.jsx) | Sticky navigation bar with anchor links (`#services`, `#process`, `#about`), accessible mobile slide-out drawer, `Escape` key listener, and direct CTA. |
| **Hero** | [`Hero.jsx`](src/components/Hero.jsx) | High-impact headline, mission summary, primary intake CTA, smooth anchor link to the process section, and framed editorial visual. |
| **Who We Help** | [`WhoWeHelp.jsx`](src/components/WhoWeHelp.jsx) | Five critical student journey scenarios (Idea phase, Research gap, Unblocking build, IoT/hardware integration, Defense prep) with alternating layouts. |
| **Services** | [`Services.jsx`](src/components/Services.jsx) | Five core service offerings: Machine Learning & AI, Gap Analysis, Software & IoT, System Integration, and Discovery Mentorship. |
| **Process** | [`Process.jsx`](src/components/Process.jsx) | The 4-step Volts&Bits method: **01 Discover** &rarr; **02 Plan** &rarr; **03 Build** &rarr; **04 Document**, paired with a branded editorial media block. |
| **Why Us** | [`WhyUs.jsx`](src/components/WhyUs.jsx) | Value proposition cards focusing on Clarity, Technical Depth, Guided Building, and Confident Defense. |
| **Final CTA** | [`FinalCTA.jsx`](src/components/FinalCTA.jsx) | Bottom conversion card prompting students to submit their project details. |
| **Footer** | [`Footer.jsx`](src/components/Footer.jsx) | Brand identity, site navigation, direct inquiry link, and official Gmail contact link with stylized SVG branding. |

---

## Tech Stack

- **UI Library**: [React 19](https://react.dev) (`react` ^19.0.0, `react-dom` ^19.0.0)
- **Bundler & Dev Server**: [Vite 6](https://vite.dev) (`vite` ^6.2.0, `@vitejs/plugin-react` ^4.3.4)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (`tailwindcss` ^4.0.0, `@tailwindcss/vite` ^4.0.0)
- **Icons**: [Lucide React](https://lucide.dev) (`lucide-react` ^1.48.0)
- **Typography**: Google Fonts loaded in `index.html`:
  - *Libre Baskerville* (Editorial serifs & headlines)
  - *Bodoni Moda* (Display italics & accents)
  - *Manrope* (Clean, legible modern sans-serif body text)

---

## Project Directory Structure

```text
vitsnbolt/
├── .agents/                    # Custom agent skills and workflow definitions
├── dist/                       # Production build output (generated by vite build)
├── public/                     # Static assets served as-is
├── src/
│   ├── components/             # Page section components
│   │   ├── ui/                 # Reusable atomic UI components
│   │   │   ├── Button.jsx          # Polymorphic button/anchor supporting primary/secondary styles
│   │   │   ├── CircularButton.jsx  # Rounded icon action button
│   │   │   ├── Divider.jsx         # Thin hairline horizontal rule
│   │   │   ├── Eyebrow.jsx         # Section category badge / uppercase subtitle
│   │   │   ├── MediaBlock.jsx      # Framed image container with meta tag and caption
│   │   │   └── PlayButton.jsx      # Styled video/media action button
│   │   ├── EditorialStatement.jsx  # Standalone editorial quote section
│   │   ├── FinalCTA.jsx            # Closing call-to-action block
│   │   ├── Footer.jsx              # Footer with links, copyright & Gmail contact
│   │   ├── Hero.jsx                # Landing page hero banner
│   │   ├── Navigation.jsx          # Sticky header & mobile drawer
│   │   ├── PrincipleItem.jsx       # Single core principle row item
│   │   ├── Process.jsx             # 4-stage Volts&Bits method section
│   │   ├── ProcessStep.jsx         # Individual process step component
│   │   ├── ServiceItem.jsx         # Individual service card item
│   │   ├── Services.jsx            # Services overview section
│   │   ├── WhoWeHelp.jsx           # Journey situations & milestones section
│   │   └── WhyUs.jsx               # Value proposition & principles section
│   ├── App.jsx                 # Main application layout composing sections
│   ├── config.js               # Central configuration (e.g. INQUIRY_URL)
│   ├── index.css               # Tailwind v4 setup, CSS custom properties & theme tokens
│   └── main.jsx                # React root mount entrypoint
├── index.html                  # HTML5 template, SEO meta tags, font preconnects
├── LICENSE                     # MIT License
├── package.json                # Project dependencies and npm scripts
├── PROJECT_DOCUMENTATION.md    # Detailed brand guidelines and product context
├── README.md                   # Project overview and developer instructions
└── vite.config.js              # Vite build tool and plugin configuration
```

---

## Design System & Palette

The design language uses a calm, warm editorial palette defined in `src/index.css`:

| Token | Hex / Value | Usage |
| :--- | :--- | :--- |
| `--color-cream` | `#f3efe7` | Main page background, subtle paper texture tone |
| `--color-white` | `#ffffff` | Clean card surfaces and contrasting media plates |
| `--color-brown` | `#5a3825` | Primary brand accent, button backgrounds, selection |
| `--color-brown-deep` | `#43291c` | Deep hover state for buttons and prominent accents |
| `--color-ink` | `#171512` | Primary body text and deep headings |
| `--color-muted` | `#625d57` | Secondary text, captions, and supporting copy |
| `--color-hairline` | `#cfc9c0` | Subtle borders, dividers, and card outlines |
| `--color-focus` | `#8d5b3d` | Accessible `:focus-visible` focus ring |

Fluid spacing and typography curves are implemented with CSS `clamp()` to ensure natural scaling across mobile, tablet, and widescreen viewports.

---

## Configuration & Links

### Project Inquiry Form

All primary and secondary call-to-action links point to an external Google Form for intake qualification. The URL is centralized in [`src/config.js`](src/config.js):

```javascript
export const INQUIRY_URL = 'https://forms.gle/QDLfpz8xmsbYBs4f8'
```

### Contact Email

The site footer includes an official contact link in [`src/components/Footer.jsx`](src/components/Footer.jsx):
- **Email**: [voltsnbits26@gmail.com](mailto:voltsnbits26@gmail.com)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com) (v9.0.0 or higher)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/hendrix-llouchi/vitsnbolt.git
cd vitsnbolt
npm install
```

### Development Server

Start Vite's fast local development server with hot module replacement (HMR):

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production Build

Compile and bundle optimized static assets for production:

```bash
npm run build
```

The compiled bundles and assets will be output to the `dist/` directory.

### Preview Build

Locally preview the generated production build before deploying:

```bash
npm run preview
```

### Windows PowerShell Troubleshooting

If running `npm run build` or `npm run dev` in Windows PowerShell throws:
```text
PSSecurityException: File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system
```

Run via Windows Command Prompt, or bypass the execution policy for your current session:

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

The project builds to a fully static single-page application (`dist/`). It can be hosted on any static hosting platform:

- **Vercel**: Connect the repository; Vite build settings will be automatically detected (`npm run build` &rarr; `dist`).
- **Netlify**: Set build command to `npm run build` and publish directory to `dist`.
- **Firebase Hosting**: Run `firebase init hosting` targeting `dist` as public root.
- **Cloudflare Pages / GitHub Pages**: Deploy the `dist` directory with appropriate SPA rewrite rules if routing is added.

---

## License

This project is licensed under the [MIT License](LICENSE) &copy; 2026 Henry Cobbinah.