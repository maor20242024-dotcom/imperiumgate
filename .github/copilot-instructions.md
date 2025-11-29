# Copilot Instructions for Imperium Gate

This document provides context and guidelines for GitHub Copilot when working on this repository.

## Project Overview

Imperium Gate is a luxury real estate platform showcasing premium properties in Dubai from top developers including DAMAC, Emaar, Nakheel, Sobha, and Binghatti. The platform supports both Arabic and English languages.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Maps:** Leaflet.js with OpenStreetMap
- **Carousel:** Swiper.js
- **Linting:** ESLint with next/core-web-vitals config

## Project Structure

```
imperiumgate/
├── app/                    # Next.js App Router pages
│   ├── [locale]/          # Localized routes (ar/en)
│   └── api/               # API routes
├── components/            # React components
├── lib/                   # Utilities, services, and types
│   ├── dictionaries/     # i18n translation dictionaries
│   ├── i18n*.ts          # Internationalization utilities
│   └── *Service.ts       # Data services
├── public/
│   └── data/             # Project data (JSON files)
│       ├── damac/
│       ├── emaar/
│       ├── nakheel/
│       ├── sobha/
│       └── binghatti/
├── scripts/              # Build and utility scripts
└── DOCUMENTATION/        # Project documentation
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Check data integrity
npm run check:data

# Build project data
npm run build:data
```

## Code Style Guidelines

### TypeScript

- Use strict TypeScript - `strict: true` is enabled in tsconfig.json
- No JavaScript files allowed (`allowJs: false`)
- Use ES2022 target features
- Use path aliases with `@/*` for imports

### React/Next.js

- Use React Server Components where appropriate (App Router)
- Use the `app/[locale]/` directory for localized pages
- Follow the App Router conventions for layouts, pages, and routes
- Use the `next/image` component for optimized images

### Styling

- Use Tailwind CSS utility classes
- Follow responsive design patterns (mobile-first)
- Support RTL layouts for Arabic locale

### Internationalization

- All user-facing text must support both Arabic (ar) and English (en)
- Use the translation dictionaries in `lib/dictionaries/`
- The locale is determined by the `[locale]` route parameter

## Data Structure

Project data is stored as JSON files in `public/data/[developer]/[project-slug]/`. Each project includes:

- `data.json` - Project metadata and details
- Images and media assets

## Testing

When adding new features, ensure:

1. The feature works in both Arabic and English
2. The feature is responsive across devices
3. ESLint passes with no errors

## Security Considerations

- Do not commit API keys or secrets
- Use environment variables for sensitive configuration
- Sanitize user inputs appropriately

## Pull Request Guidelines

When creating pull requests:

1. Ensure `npm run lint` passes with no errors
2. Ensure `npm run build` completes successfully
3. Test changes in both Arabic and English locales
4. Verify responsive design on mobile and desktop
