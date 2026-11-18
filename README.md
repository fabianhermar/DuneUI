<div align="center">
  <a href="https://duneui.dev" target="_blank" rel="noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/FabianHermar/DuneUI/refs/heads/main/public/svg/DuneUI-logo-white.svg" />
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/FabianHermar/DuneUI/refs/heads/main/public/svg/DuneUI-logo-black.svg" />
      <img alt="DuneUI" src="https://raw.githubusercontent.com/FabianHermar/DuneUI/refs/heads/main/public/svg/DuneUI-logo-black.svg" width="460" style="max-width: 100%;" />
    </picture>
  </a>

  <p><strong>Architectural interface primitives for Tailwind CSS v4.</strong></p>
  <p>
    An open-source collection of <strong>600 responsive UI components</strong> across <strong>60 categories</strong> and <strong>606 geometric SVG icons</strong>—crafted for developers who reject generic templates. Zero runtime lock-in, strict semantic markup, copy and paste ready.
  </p>

  <p>
    <a href="https://duneui.dev">Website</a>
    &nbsp;·&nbsp;
    <a href="https://duneui.dev/components">Components</a>
    &nbsp;·&nbsp;
    <a href="https://duneui.dev/icons">SVG Icons</a>
    &nbsp;·&nbsp;
    <a href="https://duneui.dev/docs">Documentation</a>
    &nbsp;·&nbsp;
    <a href="https://duneui.dev/changelog">Changelog</a>
  </p>
</div>

---

## ✨ Highlights

- **60 Component Families · 600 Responsive Specs** — Every category ships with 10 distinct, mobile-first visual styles (from Apple Liquid Glass and Linear dark ops to Neo-Brutalism, Stripe fintech, Editorial print, and clean SaaS).
- **606 Geometric SVG Icons (`/icons`)** — Precision `24×24` glyphs across 16 categories with live **Stroke**, **Duotone**, and **Two-Tone** switching, custom size & stroke width controls, `.svg` download, and one-click SVG or React JSX copy.
- **Interactive Specimen Workbench** — Live iframe previews with viewport breakpoints (`375px` mobile, `sm`, `md`, `lg`, `full`), stage backdrop modes (`light`, `muted`, `dark`, `mesh`), syntax-highlighted code, and instant clipboard copy.
- **Stack Agnostic** — Built on clean HTML5 and **Tailwind CSS v4**. Works seamlessly in HTML, React, Next.js, Vue, Nuxt, Svelte, Astro, or any template engine.
- **Zero Package Lock-In** — No npm library to install or maintain. Copy the markup you need and customize it directly in your codebase.

---

## 📚 Component Library Overview

DuneUI organizes **60 component categories** (`10` distinct specs each) across three domains:

| Domain | Categories | Specs | Examples |
| :--- | :---: | :---: | :--- |
| **Application UI** | 38 | 380 | Accordion, Action Panels, Alerts, Avatar, Badges, Bento, Breadcrumb, Button Group, Buttons, Calendars, Cards, Command, Description Lists, Drawers, Dropdown, Empty States, Feeds, File Upload, Footer, Forms, List Group, Loaders, Modals, Navbars, Page Headings, Pagination, Progress, Select Menus, Sidebars, Skeletons, Stats, Steps, Tables, Tabs, Toasts, Toggles, Tooltips, Typography |
| **E-Commerce** | 7 | 70 | Category Filters, Category Previews, Checkout Forms, Ecommerce, Order Summaries, Product Overviews, Shopping Carts |
| **Marketing** | 15 | 150 | 404 Pages, Auth, Banners, Blog Sections, Contact, CTA, FAQ Sections, Feature Grids, Heroes, Landing Pages, Logo Clouds, Newsletter, Pricing Pages, Team, Testimonials |

### Ecosystem & Roadmap

- **Tailwind CSS Components (`/components`)** — **Live** (60 categories / 600 specs).
- **NeoIcons SVG Library (`/icons`)** — **Live** (606 icons across 16 categories).
- **Pure CSS Kit (`/css`)** — *Coming Soon* — Zero-compiler CSS modules powered by custom properties and modern selectors.
- **Full-Page Templates (`/templates`)** — *Coming Soon* — End-to-end website blueprints for SaaS, AI, Fintech, Editorial, and E-Commerce.

---

## 🛠 Using Components in Your Project

1. **Ensure Tailwind CSS v4+ is configured** in your project (Vite, PostCSS, Tailwind CLI, or Play CDN). See the [DuneUI Docs](https://duneui.dev/docs) for setup snippets across HTML, React/Next.js, Vue/Nuxt, and Astro.
2. **Browse a category** at [duneui.dev/components](https://duneui.dev/components) and test breakpoints or light/dark stage modes live.
3. **Copy & adapt** the HTML snippet into your project. When pasting into React/JSX, convert standard HTML attributes (`class` → `className`, `for` → `htmlFor`, `stroke-width` → `strokeWidth`, self-closing tags).

> [!NOTE]
> Components use Tailwind CSS v4 `@custom-variant dark` / `.dark` class conventions for dark mode variants and semantic HTML5 elements (`<details>`, `<summary>`, ARIA attributes) where appropriate.

---

## 🧰 Tech Stack (Documentation & Showcase App)

- **Framework:** [Astro](https://astro.build/) (`output: 'static'` with `@astrojs/vercel`)
- **Interactive Islands:** [React 19](https://react.dev/) (`@astrojs/react`) + [Lucide React](https://lucide.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`, `@tailwindcss/typography`, `tailwindcss-animate`)
- **Content:** MDX (`@astrojs/mdx`), RSS (`@astrojs/rss`), Sitemap (`@astrojs/sitemap`)
- **Testing:** [Playwright](https://playwright.dev/) (Chromium, Firefox, WebKit)

---

## 💻 Local Development

### Prerequisites

- **Node.js** `>= 24.0.0`
- **pnpm** (recommended; configured via `pnpm-lock.yaml` and `pnpm-workspace.yaml`)

### Setup & Commands

```bash
# 1. Clone the repository
git clone https://github.com/FabianHermar/DuneUI.git
cd DuneUI

# 2. Install dependencies
pnpm install

# 3. Start the Astro dev server (http://localhost:4321)
pnpm dev
```

Available scripts in [`package.json`](package.json):

| Command | Description |
| :--- | :--- |
| `pnpm dev` / `pnpm start` | Start local Astro development server |
| `pnpm build` | Run `astro check` (type-checking) and build the static site |
| `pnpm preview` | Preview the production build locally |
| `pnpm test` | Run the Playwright end-to-end test suite |

To install Playwright browsers locally before running `pnpm test`:

```bash
pnpm exec playwright install --with-deps
```

---

## 🗂 Project Structure

```text
├── .github/workflows/       # CI workflow (Playwright tests)
├── public/                  # Static assets (SVGs, logos, fonts, images, favicons)
├── src/
│   ├── constants/           # Directory card metadata (Card.ts) & FAQs (FAQ.ts)
│   ├── content/             # MDX / Markdown collections (changelog)
│   ├── data/
│   │   ├── icons/           # 606 SVG icon definitions grouped by domain
│   │   ├── snippets/        # Component specs organized by <domain>/<category>/
│   │   │   ├── application-ui/
│   │   │   ├── ecommerce/
│   │   │   └── marketing/
│   │   ├── componentSnippets.ts  # Auto-discovers category.json & .html snippets
│   │   └── svgIconsCatalog.ts    # Aggregates all SVG icon packs
│   ├── layouts/             # Astro page, blog, and changelog layouts
│   ├── lib/                 # HTML sanitization and utility helpers
│   ├── modules/             # Core UI islands (ComponentPreview, Header, Footer, Docs)
│   ├── pages/               # Astro routes (/components, /icons, /docs, /css, /templates, etc.)
│   └── styles/globals.css   # Tailwind CSS v4 entry, @theme tokens, and utilities
└── tests/                   # Playwright specs (navigation, preview, mobile nav, icons)
```

---

## 🤝 Contributing

Contributions are welcome! Each component category under `src/data/snippets/<domain>/<category>/` is driven by a `category.json` manifest and individual `.html` snippet files, which are automatically discovered at build time by `src/data/componentSnippets.ts`.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feat/new-component-spec`).
3. Make your changes and verify type-checking and tests pass:
   ```bash
   pnpm build
   pnpm test
   ```
4. Submit a pull request describing your additions or improvements.

---

## 📄 License & Usage Terms

DuneUI is **free and open** for personal, client, SaaS, commercial, and open-source projects—with **no attribution required**.

- **Allowed:** Personal sites, commercial products, client deliverables, open-source repositories, and full customization of copied snippets.
- **Not allowed:** Repackaging or reselling DuneUI components as a competing UI kit, standalone asset pack, or marketplace theme.

See the full plain-language terms on the [License page](https://duneui.dev/license) ([`src/pages/license/index.astro`](src/pages/license/index.astro)).
