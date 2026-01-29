# Zhiyuan – Software Development Website

A marketing website for a software development business, built with **Next.js 14** and **Tailwind CSS**, inspired by [Boutir](https://www.boutir.com/en).

## Features

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **TypeScript**
- Responsive layout with mobile navigation
- Sections: Hero, Value Props, Features, Services, Solutions, Testimonials, Client Logos, CTA, Footer

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Run ESLint

## Customization

- **Brand name**: Search for "Zhiyuan" in `app/layout.tsx`, `components/Header.tsx`, `components/Footer.tsx`, and metadata.
- **Contact email**: Update `hello@zhiyuan.dev` in `components/CTA.tsx` and `components/Footer.tsx`.
- **Colors**: Edit `tailwind.config.ts` and `app/globals.css` for primary/accent colors.
- **Content**: Edit copy in each component under `components/`.
