# INHABY

INHABY is a modern React/Vite frontend for a verified rental marketplace that emphasizes trust, clarity, and direct owner connections.

## What this project is about

This repository is the web experience for a rental platform built around verified homes and transparent listings. It showcases a landing site and marketing flow for renters and property owners, with dedicated pages for browsing listings, viewing trusted owners, and verifying listing authenticity.

The app is structured around a content-driven homepage and a verification-focused workflow, communicating the brand promise of no hidden charges, no fake listings, and a rigorous property verification process.

## Role model and architecture

- `App.tsx` is the root application shell. It wraps the site in theme state and routing, provides the shared navigation and footer, and ensures page transitions scroll to the top.
- `ThemeContext.tsx` defines the global theme model. It manages light/dark mode, accent color state, and persists preferences through browser storage.
- Page components under `src/pages/` represent the main routes of the product:
  - `HomePage.tsx` — the marketing homepage with trust, benefits, and call-to-action sections
  - `ListingsPage.tsx` — a route for browsing rental inventory
  - `PhotosPage.tsx` — a gallery or property media display route
  - `PricingPage.tsx` — pricing and plan details
  - `VerificationPage.tsx` — listing verification workflow and trust center
  - `VerifiedOwnersPage.tsx` — a page focused on authenticated property owners
- Reusable UI modules under `src/components/` provide the visual building blocks:
  - `Navbar.tsx` and `Footer.tsx` handle navigation and site chrome
  - `Hero.tsx`, `TrustBanner.tsx`, `HowItWorks.tsx`, `VerificationSection.tsx`, and `Benefits.tsx` express the product story and verification promise
  - `ThemeSwitcher.tsx` enables runtime theme interaction
  - `AppPreview.tsx` and `UserJourneys.tsx` help present the product experience visually

The design separates pages from components and keeps theme state centralized, which makes the interface easy to compose and extend.

## Core product intent

INHABY is positioned as a rental gateway for verified listings. The experience is built to:

- highlight verified homes and owner-backed listings
- explain a multi-step verification process for properties
- present a direct connection between renters and verified landlords
- reinforce trust through documented workflows, verification badges, and proof points
- support both renter-facing discovery and owner-facing listing actions

## Key technologies

- React 19
- Vite for frontend build and development
- TypeScript for type-safe component composition
- Tailwind CSS for utility-first styling
- React Router DOM for page routing
- `motion/react` for animated transitions and visual polish
- `lucide-react` for iconography

## Notes on current code state

The current source tree includes a polished page structure and reusable component library. Some files also contain unresolved merge markers, so the project may require cleanup before it is fully stable.
