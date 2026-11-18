import { useEffect, useState } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  PackageX,
  Sparkles,
} from "lucide-react";
import CodeBlock from "./CodeBlock";
import {
  ASTRO_COMPONENT_SNIPPET,
  ASTRO_CONFIG_SNIPPET,
  ASTRO_LAYOUT_IMPORT_SNIPPET,
  CDN_SNIPPET,
  CLI_HTML_SNIPPET,
  DARK_MODE_THEME_SNIPPET,
  HTML_DROPDOWN_SNIPPET,
  NATIVE_DETAILS_SNIPPET,
  POSTCSS_CONFIG_SNIPPET,
  REACT_COMPONENT_SNIPPET,
  TAILWIND_CSS_IMPORT,
  TOC_SECTIONS,
  VANILLA_JS_INTERACTIVE_SNIPPET,
  VITE_CONFIG_SNIPPET,
  VUE_COMPONENT_SNIPPET,
  formatAstroAddCommand,
  formatExecCommand,
  formatInstallCommand,
  formatRunCommand,
  type InstallMethod,
  type PackageManager,
} from "./docsData";

const PACKAGE_MANAGERS: PackageManager[] = ["npm", "pnpm", "yarn", "bun"];

const INSTALL_METHODS: { id: InstallMethod; label: string; badge?: string }[] = [
  { id: "vite", label: "Using Vite", badge: "Recommended" },
  { id: "postcss", label: "Using PostCSS" },
  { id: "cli", label: "Tailwind CLI" },
  { id: "cdn", label: "Play CDN" },
];

const FRAMEWORK_CARDS = [
  { id: "using-html", name: "HTML5 & Vanilla JS", note: "Static · Blade · ERB", logo: "/svg/logos/html.svg" },
  { id: "using-react", name: "React & Next.js", note: "JSX / TSX · Hooks", logo: "/svg/logos/react.svg" },
  { id: "using-vue", name: "Vue 3 & Nuxt", note: "SFC · Composition API", logo: "/svg/logos/vue.svg" },
  { id: "using-astro", name: "Astro JS", note: "Zero-JS · Islands", logo: "/svg/logos/astro.svg" },
];

const JSX_CONVERSIONS = [
  { html: 'class="..."', jsx: 'className="..."' },
  { html: 'for="..."', jsx: 'htmlFor="..."' },
  { html: 'tabindex="0"', jsx: 'tabIndex={0}' },
  { html: 'stroke-width="1.5"', jsx: 'strokeWidth={1.5}' },
  { html: 'stroke-linecap="round"', jsx: 'strokeLinecap="round"' },
  { html: 'fill-rule="evenodd"', jsx: 'fillRule="evenodd"' },
  { html: 'clip-rule="evenodd"', jsx: 'clipRule="evenodd"' },
  { html: '<input ...>', jsx: '<input ... />' },
];

function SectionHeading({
  id,
  index,
  eyebrow,
  title,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div id={id} className="scroll-mt-24 border-b border-rule pb-4 mb-6">
      <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-clay mb-2">
        <span>{index}</span>
        <span className="text-rule-strong">/</span>
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-ink">
        {title}
      </h2>
    </div>
  );
}

function Callout({
  tone = "note",
  title,
  children,
}: {
  tone?: "note" | "warning";
  title: string;
  children: React.ReactNode;
}) {
  const isWarning = tone === "warning";
  return (
    <div
      className={`border p-5 ${
        isWarning
          ? "border-clay/50 bg-clay/5"
          : "border-ink bg-paper-elevated shadow-[4px_4px_0_0_#DDD5C7]"
      }`}
    >
      <div className="flex items-start gap-3">
        {isWarning ? (
          <AlertTriangle className="size-4 shrink-0 text-clay mt-0.5" aria-hidden="true" />
        ) : (
          <BookOpen className="size-4 shrink-0 text-clay mt-0.5" aria-hidden="true" />
        )}
        <div className="min-w-0">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-clay">
            {title}
          </p>
          <div className="mt-1.5 font-accent text-sm leading-relaxed text-ink-secondary">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function StepBadge({ step, title }: { step: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="inline-flex size-6 shrink-0 items-center justify-center border border-ink bg-ink font-mono text-[11px] font-bold text-paper-elevated">
        {step}
      </span>
      <h3 className="font-heading text-lg font-bold text-ink">{title}</h3>
    </div>
  );
}

export default function DocsContent() {
  const [pm, setPm] = useState<PackageManager>("npm");
  const [installMethod, setInstallMethod] = useState<InstallMethod>("vite");
  const [astroSetupMode, setAstroSetupMode] = useState<"automatic" | "manual">("automatic");
  const [activeSection, setActiveSection] = useState<string>(TOC_SECTIONS[0].id);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const elements = TOC_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0.01 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      {/* Sticky Sidebar TOC */}
      <aside className="lg:col-span-3">
        <div className="lg:sticky lg:top-24 space-y-6">
          <nav
            aria-label="Documentation sections"
            className="border border-rule bg-paper-elevated p-5"
          >
            <div className="flex items-center justify-between border-b border-rule pb-3 mb-3">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-clay">
                ON THIS PAGE
              </span>
              <span className="font-mono text-[10px] text-ink-muted">9 SECTIONS</span>
            </div>

            <ul className="flex flex-col gap-1">
              {TOC_SECTIONS.map((section) => {
                const active = activeSection === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => setActiveSection(section.id)}
                      className={`group flex items-center gap-2.5 px-2.5 py-1.5 font-accent text-xs transition-colors ${
                        active
                          ? "bg-ink font-semibold text-paper-elevated"
                          : "text-ink-secondary hover:bg-paper-recessed hover:text-ink"
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] ${
                          active ? "text-sand" : "text-ink-muted group-hover:text-clay"
                        }`}
                      >
                        {section.index}
                      </span>
                      <span className="truncate">{section.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Quick Jump Box */}
          <div className="hidden lg:block border border-rule bg-paper-elevated p-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-clay">
              READY TO BUILD?
            </p>
            <p className="mt-2 font-accent text-xs leading-relaxed text-ink-secondary">
              Browse 590 responsive Tailwind CSS v4 components or zero-dependency Pure CSS specimens.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href="/components"
                className="inline-flex items-center justify-between border border-ink bg-ink px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider text-paper-elevated transition-colors hover:bg-clay hover:border-clay"
              >
                <span>Browse Components</span>
                <ArrowUpRight className="size-3.5" />
              </a>
              <a
                href="/css"
                className="inline-flex items-center justify-between border border-rule-strong bg-paper px-3.5 py-2 font-mono text-[11px] uppercase tracking-wider text-ink transition-colors hover:border-ink"
              >
                <span>Pure CSS Kit</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Documentation Content */}
      <div className="lg:col-span-9 space-y-16 min-w-0">
        {/* 01. NO-PACKAGE PHILOSOPHY */}
        <section>
          <SectionHeading
            id="overview"
            index="01"
            eyebrow="PHILOSOPHY"
            title="No npm package. Copy, paste, and own the code."
          />

          <div className="space-y-5 font-accent text-sm sm:text-base leading-relaxed text-ink-secondary">
            <p>
              Unlike traditional UI component libraries, <strong className="text-ink">DuneUI is not distributed as an npm package</strong>. There is no <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">npm install duneui</code> command, no proprietary runtime, and no abstracted wrapper components hiding your markup inside <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">node_modules</code>.
            </p>
            <p>
              Every component, template, and icon on DuneUI is authored as clean, transparent markup powered by standard <strong className="text-ink">Tailwind CSS v4</strong> utilities (or standalone Pure CSS). Copy the specimen you need directly into your codebase, adapt the tokens or layout to match your brand, and ship zero unnecessary dependencies.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 border-l border-t border-rule sm:grid-cols-3">
            {[
              {
                Icon: PackageX,
                tag: "ZERO INSTALL",
                title: "No Library Lock-In",
                desc: "No version conflicts or breaking library upgrades. Once copied, the HTML and classes belong entirely to your repository.",
              },
              {
                Icon: Code2,
                tag: "TRANSPARENT",
                title: "Full Markup Control",
                desc: "Inspect and modify every spacing utility, breakpoint, color token, and ARIA attribute directly in your own editor.",
              },
              {
                Icon: Layers,
                tag: "PORTABLE",
                title: "Works In Any Stack",
                desc: "Paste into plain HTML, React, Next.js, Vue, Nuxt, Astro, Svelte, Laravel Blade, Rails, or Django templates.",
              },
            ].map(({ Icon, tag, title, desc }) => (
              <div key={title} className="border-b border-r border-rule bg-paper-elevated p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-clay">
                    {tag}
                  </span>
                  <Icon className="size-4 text-ink-muted" aria-hidden="true" />
                </div>
                <p className="mt-3 font-heading text-base font-bold text-ink">{title}</p>
                <p className="mt-1.5 font-accent text-xs leading-relaxed text-ink-secondary">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 02. REQUIREMENTS */}
        <section>
          <SectionHeading
            id="requirements"
            index="02"
            eyebrow="PREREQUISITES"
            title="Requirements"
          />

          <div className="space-y-5 font-accent text-sm sm:text-base leading-relaxed text-ink-secondary">
            <p>
              Because DuneUI uses modern utility patterns and CSS-first tokens, make sure your project meets these baseline requirements before pasting Tailwind components:
            </p>
          </div>

          <div className="mt-6 divide-y divide-rule border border-rule bg-paper-elevated">
            {[
              {
                badge: "REQUIRED",
                title: "Tailwind CSS v4.0 or newer",
                desc: "All Tailwind-based DuneUI blocks are built for Tailwind CSS v4 (tested against v4.3+). They rely on v4 utilities like size-*, modern opacity modifiers, group-open:, data-* variants, and CSS-first @theme configuration. Projects still on Tailwind v3 should upgrade to v4 first or use our Pure CSS specimens.",
              },
              {
                badge: "PER COMPONENT",
                title: "JavaScript for interactive specimens",
                desc: "Layout and typographic blocks (cards, badges, heroes, footers, pricing) require zero JavaScript. However, one or more interactive components—such as dismissible alerts, dropdown menus, modals, drawers, tabs, toasts, and mobile navigation—require JavaScript logic to toggle state as shown in the live preview.",
              },
              {
                badge: "INCLUDED",
                title: "Inline SVG icons & system-friendly typography",
                desc: "Icons are embedded directly as inline <svg> markup inside each snippet, so no external icon package is mandatory. You can swap them for lucide-react, lucide-vue-next, or Heroicons anytime.",
              },
            ].map((req) => (
              <div key={req.title} className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-clay shrink-0" aria-hidden="true" />
                  <h3 className="font-heading text-base sm:text-lg font-bold text-ink">
                    {req.title}
                  </h3>
                  <span className="border border-rule bg-paper px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-clay">
                    {req.badge}
                  </span>
                </div>
                <p className="mt-2 font-accent text-sm leading-relaxed text-ink-secondary pl-6">
                  {req.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 03. INSTALLING TAILWIND CSS (OFFICIAL V4 FLOW) */}
        <section>
          <SectionHeading
            id="installing-tailwind"
            index="03"
            eyebrow="OFFICIAL SETUP"
            title="Installing Tailwind CSS"
          />

          <p className="font-accent text-sm sm:text-base leading-relaxed text-ink-secondary mb-6">
            Follow the official <strong className="text-ink">Tailwind CSS v4</strong> installation workflow for your build tool. Choose your package manager and setup method below:
          </p>

          {/* Controls Bar: Install Method Tabs + Package Manager Switcher */}
          <div className="mb-6 flex flex-col gap-3 border border-rule bg-paper-elevated p-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-1" role="tablist" aria-label="Tailwind installation method">
              {INSTALL_METHODS.map((method) => {
                const active = installMethod === method.id;
                return (
                  <button
                    key={method.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setInstallMethod(method.id)}
                    className={`cursor-pointer px-3 py-1.5 font-mono text-xs transition-colors flex items-center gap-1.5 ${
                      active
                        ? "bg-ink text-paper-elevated font-semibold"
                        : "text-ink-secondary hover:bg-paper-recessed hover:text-ink"
                    }`}
                  >
                    <span>{method.label}</span>
                    {method.badge && (
                      <span
                        className={`hidden md:inline px-1.5 py-0.5 text-[9px] uppercase tracking-wider ${
                          active ? "bg-clay text-paper-elevated" : "bg-paper text-clay border border-rule"
                        }`}
                      >
                        {method.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {installMethod !== "cdn" && (
              <div className="flex items-center gap-1 border border-rule bg-paper p-0.5 self-start sm:self-auto">
                {PACKAGE_MANAGERS.map((pkgMgr) => (
                  <button
                    key={pkgMgr}
                    type="button"
                    onClick={() => setPm(pkgMgr)}
                    className={`cursor-pointer px-2.5 py-1 font-mono text-[11px] uppercase transition-colors ${
                      pm === pkgMgr
                        ? "bg-clay text-paper-elevated font-semibold"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {pkgMgr}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Method 1: Vite */}
          {installMethod === "vite" && (
            <div className="space-y-8">
              <p className="font-accent text-sm text-ink-secondary leading-relaxed">
                Installing Tailwind CSS as a Vite plugin is the fastest, most seamless setup for <strong className="text-ink">React, Vue, SvelteKit, Astro, Nuxt, and React Router</strong>.
              </p>

              <div>
                <StepBadge step="1" title="Install Tailwind CSS and the Vite plugin" />
                <p className="font-accent text-sm text-ink-secondary mb-3">
                  Install <code className="font-mono text-xs text-ink">tailwindcss</code> and <code className="font-mono text-xs text-ink">@tailwindcss/vite</code> via your package manager:
                </p>
                <CodeBlock
                  language="bash"
                  filename="Terminal"
                  step="STEP 01"
                  code={formatInstallCommand(pm, ["tailwindcss", "@tailwindcss/vite"])}
                />
              </div>

              <div>
                <StepBadge step="2" title="Configure the Vite plugin" />
                <p className="font-accent text-sm text-ink-secondary mb-3">
                  Add the <code className="font-mono text-xs text-ink">@tailwindcss/vite</code> plugin to your Vite configuration:
                </p>
                <CodeBlock
                  language="ts"
                  filename="vite.config.ts"
                  step="STEP 02"
                  code={VITE_CONFIG_SNIPPET}
                />
              </div>

              <div>
                <StepBadge step="3" title="Import Tailwind CSS" />
                <p className="font-accent text-sm text-ink-secondary mb-3">
                  Add an <code className="font-mono text-xs text-ink">@import</code> directive to your main CSS file. Tailwind v4 automatically scans your project templates—no <code className="font-mono text-xs text-ink">tailwind.config.js</code> content array needed:
                </p>
                <CodeBlock
                  language="css"
                  filename="src/style.css"
                  step="STEP 03"
                  code={TAILWIND_CSS_IMPORT}
                />
              </div>

              <div>
                <StepBadge step="4" title="Start your build process" />
                <CodeBlock
                  language="bash"
                  filename="Terminal"
                  step="STEP 04"
                  code={formatRunCommand(pm, "dev")}
                />
              </div>
            </div>
          )}

          {/* Method 2: PostCSS */}
          {installMethod === "postcss" && (
            <div className="space-y-8">
              <p className="font-accent text-sm text-ink-secondary leading-relaxed">
                Installing Tailwind CSS as a PostCSS plugin works seamlessly with <strong className="text-ink">Next.js, Angular, Remix, and custom webpack/PostCSS builds</strong>.
              </p>

              <div>
                <StepBadge step="1" title="Install Tailwind CSS and PostCSS" />
                <CodeBlock
                  language="bash"
                  filename="Terminal"
                  step="STEP 01"
                  code={formatInstallCommand(pm, ["tailwindcss", "@tailwindcss/postcss", "postcss"])}
                />
              </div>

              <div>
                <StepBadge step="2" title="Add Tailwind to your PostCSS configuration" />
                <CodeBlock
                  language="js"
                  filename="postcss.config.mjs"
                  step="STEP 02"
                  code={POSTCSS_CONFIG_SNIPPET}
                />
              </div>

              <div>
                <StepBadge step="3" title="Import Tailwind CSS in your global stylesheet" />
                <CodeBlock
                  language="css"
                  filename="src/app/globals.css"
                  step="STEP 03"
                  code={TAILWIND_CSS_IMPORT}
                />
              </div>

              <div>
                <StepBadge step="4" title="Run your development server" />
                <CodeBlock
                  language="bash"
                  filename="Terminal"
                  step="STEP 04"
                  code={formatRunCommand(pm, "dev")}
                />
              </div>
            </div>
          )}

          {/* Method 3: Tailwind CLI */}
          {installMethod === "cli" && (
            <div className="space-y-8">
              <p className="font-accent text-sm text-ink-secondary leading-relaxed">
                The <strong className="text-ink">Tailwind CLI</strong> is the simplest way to compile CSS for static HTML sites or server-rendered apps without configuring a JS bundler.
              </p>

              <div>
                <StepBadge step="1" title="Install Tailwind CSS and the CLI package" />
                <CodeBlock
                  language="bash"
                  filename="Terminal"
                  step="STEP 01"
                  code={formatInstallCommand(pm, ["tailwindcss", "@tailwindcss/cli"])}
                />
              </div>

              <div>
                <StepBadge step="2" title="Import Tailwind in your input CSS file" />
                <CodeBlock
                  language="css"
                  filename="src/input.css"
                  step="STEP 02"
                  code={TAILWIND_CSS_IMPORT}
                />
              </div>

              <div>
                <StepBadge step="3" title="Start the Tailwind CLI watcher" />
                <CodeBlock
                  language="bash"
                  filename="Terminal"
                  step="STEP 03"
                  code={formatExecCommand(pm, "@tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch")}
                />
              </div>

              <div>
                <StepBadge step="4" title="Link the compiled CSS in your HTML" />
                <CodeBlock
                  language="html"
                  filename="src/index.html"
                  step="STEP 04"
                  code={CLI_HTML_SNIPPET}
                />
              </div>
            </div>
          )}

          {/* Method 4: Play CDN */}
          {installMethod === "cdn" && (
            <div className="space-y-6">
              <Callout tone="warning" title="PROTOTYPING ONLY">
                The Play CDN runs Tailwind CSS directly in the browser without a build step. Use it to test DuneUI snippets quickly in an HTML file, and switch to Vite, PostCSS, or Tailwind CLI before deploying to production.
              </Callout>

              <CodeBlock
                language="html"
                filename="index.html"
                step="QUICK TEST"
                code={CDN_SNIPPET}
              />
            </div>
          )}
        </section>

        {/* 04. JAVASCRIPT & INTERACTIVITY */}
        <section>
          <SectionHeading
            id="javascript-interactivity"
            index="04"
            eyebrow="BEHAVIOR & STATE"
            title="JavaScript & Interactive Components"
          />

          <div className="space-y-4 font-accent text-sm sm:text-base leading-relaxed text-ink-secondary mb-6">
            <p>
              While most DuneUI specimens are purely presentational HTML &amp; CSS, <strong className="text-ink">several interactive components require JavaScript logic</strong> to behave identically to their live preview—such as <strong className="text-ink">dismissible alerts, dropdown menus, modals, drawers, tabs, command palettes, select menus, and toast notifications</strong>.
            </p>
            <p>
              In our live specimen workbench, interactive previews execute scoped demo scripts inside an isolated iframe. When you switch to the <strong className="text-ink">Code</strong> tab or click <strong className="text-ink">Copy</strong>, preview-only <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">&lt;script&gt;</code> tags are automatically stripped so you receive clean markup ready for your application&apos;s own state management or event handlers.
            </p>
          </div>

          {/* 3 Interactivity Tiers */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
            <div className="border border-rule bg-paper-elevated p-5">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
                TIER 01 · ZERO JS
              </span>
              <h3 className="mt-2 font-heading text-base font-bold text-ink">
                Native HTML Primitives
              </h3>
              <p className="mt-1.5 font-accent text-xs leading-relaxed text-ink-secondary">
                Accordions built with <code className="font-mono text-[11px] text-ink">&lt;details&gt;</code> &amp; <code className="font-mono text-[11px] text-ink">&lt;summary&gt;</code>, CSS <code className="font-mono text-[11px] text-ink">peer-checked:</code> toggles, and native Popover API work with zero JS.
              </p>
            </div>

            <div className="border border-rule bg-paper-elevated p-5">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-clay">
                TIER 02 · VANILLA JS
              </span>
              <h3 className="mt-2 font-heading text-base font-bold text-ink">
                data-* &amp; ARIA Hooks
              </h3>
              <p className="mt-1.5 font-accent text-xs leading-relaxed text-ink-secondary">
                Interactive HTML snippets include semantic <code className="font-mono text-[11px] text-ink">data-*</code> hooks and <code className="font-mono text-[11px] text-ink">aria-expanded</code> attributes you can bind in ~10 lines of vanilla JS.
              </p>
            </div>

            <div className="border border-rule bg-paper-elevated p-5">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-ink">
                TIER 03 · FRAMEWORKS
              </span>
              <h3 className="mt-2 font-heading text-base font-bold text-ink">
                State or Headless UI
              </h3>
              <p className="mt-1.5 font-accent text-xs leading-relaxed text-ink-secondary">
                In React, Vue, or Svelte, drive visibility with <code className="font-mono text-[11px] text-ink">useState</code> / <code className="font-mono text-[11px] text-ink">ref</code>, or pair with Headless UI for focus trapping &amp; portals.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-ink-muted mb-2">
                EXAMPLE A — ZERO-JS NATIVE DISCLOSURE
              </p>
              <CodeBlock
                language="html"
                filename="accordion.html"
                code={NATIVE_DETAILS_SNIPPET}
              />
            </div>

            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-ink-muted mb-2">
                EXAMPLE B — WIRING A DISMISSIBLE COMPONENT WITH VANILLA JS
              </p>
              <CodeBlock
                language="html"
                filename="alert-interactive.html"
                code={VANILLA_JS_INTERACTIVE_SNIPPET}
              />
            </div>
          </div>
        </section>

        {/* FRAMEWORK QUICK JUMP BAR */}
        <div className="border-t border-b border-rule py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
            <div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-clay">
                FRAMEWORK GUIDES
              </span>
              <h3 className="font-heading text-xl font-bold text-ink mt-1">
                Choose your target stack
              </h3>
            </div>
            <span className="font-mono text-xs text-ink-muted">
              Jump directly to your workflow ↓
            </span>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
            {FRAMEWORK_CARDS.map((fw) => (
              <a
                key={fw.id}
                href={`#${fw.id}`}
                className="group flex flex-col justify-between gap-4 border-b border-r border-rule bg-paper-elevated p-4 transition-colors hover:bg-paper"
              >
                <div className="flex items-center justify-between">
                  <img
                    src={fw.logo}
                    alt={fw.name}
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                  <span className="font-mono text-xs text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-clay">
                    →
                  </span>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-ink group-hover:text-clay transition-colors">
                    {fw.name}
                  </p>
                  <p className="font-mono text-[10px] text-ink-muted mt-0.5">{fw.note}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 05. USING HTML */}
        <section>
          <SectionHeading
            id="using-html"
            index="05"
            eyebrow="VANILLA & SERVER TEMPLATES"
            title="Using HTML"
          />

          <div className="space-y-4 font-accent text-sm sm:text-base leading-relaxed text-ink-secondary mb-6">
            <p>
              DuneUI snippets are written in standard HTML5, so they drop straight into static sites, <strong className="text-ink">Laravel Blade</strong>, <strong className="text-ink">Rails ERB</strong>, <strong className="text-ink">Django/Jinja</strong>, or <strong className="text-ink">HTMX</strong> partials without translation.
            </p>
            <p>
              For interactive widgets like dropdowns, modals, or drawers, toggle the <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">hidden</code> attribute and <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">aria-expanded</code> state from a small module script, and always bind <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">Escape</code> and outside-click handlers for accessibility:
            </p>
          </div>

          <CodeBlock
            language="html"
            filename="dropdown.html"
            code={HTML_DROPDOWN_SNIPPET}
          />

          <div className="mt-5">
            <Callout title="TIP // OPTIONAL HTML HELPERS">
              Prefer declarative attributes in server-rendered HTML? You can keep DuneUI&apos;s exact utility classes and wire interactivity with lightweight helpers like <strong className="text-ink">Alpine.js</strong> (<code className="font-mono text-xs text-ink">x-data</code> / <code className="font-mono text-xs text-ink">x-show</code>) or native HTML <code className="font-mono text-xs text-ink">popovertarget</code> attributes.
            </Callout>
          </div>
        </section>

        {/* 06. USING REACT */}
        <section>
          <SectionHeading
            id="using-react"
            index="06"
            eyebrow="VITE · NEXT.JS · REMIX"
            title="Using React"
          />

          <div className="space-y-4 font-accent text-sm sm:text-base leading-relaxed text-ink-secondary mb-6">
            <p>
              To use DuneUI inside <strong className="text-ink">React 18/19</strong> or <strong className="text-ink">Next.js</strong>, paste the markup into a JSX/TSX component and adjust standard HTML attributes to React&apos;s JSX equivalents. Replace any inline <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">data-*</code> script logic with React state hooks (<code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">useState</code>, <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">useEffect</code>, <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">useRef</code>).
            </p>
          </div>

          {/* HTML -> JSX Quick Conversion Table */}
          <div className="mb-7 border border-rule bg-paper-elevated">
            <div className="border-b border-rule px-4 py-2.5 flex items-center justify-between">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-clay">
                HTML → JSX ATTRIBUTE CHECKLIST
              </span>
              <span className="font-mono text-[10px] text-ink-muted">QUICK REFERENCE</span>
            </div>
            <div className="grid grid-cols-1 divide-y divide-rule sm:grid-cols-2 sm:divide-x">
              {JSX_CONVERSIONS.map((pair) => (
                <div key={pair.html} className="flex items-center justify-between gap-3 px-4 py-2.5 font-mono text-xs">
                  <span className="text-ink-muted">{pair.html}</span>
                  <span className="text-clay">→</span>
                  <span className="font-semibold text-ink">{pair.jsx}</span>
                </div>
              ))}
            </div>
          </div>

          <CodeBlock
            language="tsx"
            filename="src/components/OptionsDropdown.tsx"
            code={REACT_COMPONENT_SNIPPET}
          />

          <div className="mt-5 space-y-4">
            <p className="font-accent text-sm text-ink-secondary leading-relaxed">
              For production overlays (accessible Dialogs, Listboxes, Comboboxes, and Popovers with automatic focus trapping and keyboard navigation), you can optionally pair DuneUI&apos;s Tailwind classes with <strong className="text-ink">Headless UI</strong> or <strong className="text-ink">Lucide React</strong>:
            </p>
            <CodeBlock
              language="bash"
              filename="Terminal (Optional)"
              code={formatInstallCommand(pm, ["@headlessui/react", "lucide-react"])}
            />
          </div>
        </section>

        {/* 07. USING VUE */}
        <section>
          <SectionHeading
            id="using-vue"
            index="07"
            eyebrow="VUE 3 · NUXT"
            title="Using Vue"
          />

          <div className="space-y-4 font-accent text-sm sm:text-base leading-relaxed text-ink-secondary mb-6">
            <p>
              Vue Single File Components (<code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">.vue</code>) require almost zero markup conversion: standard <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">class</code>, <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">for</code>, and SVG kebab-case attributes (<code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">fill-rule</code>, <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">stroke-width</code>) work unchanged inside <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">&lt;template&gt;</code>.
            </p>
            <p>
              Bind interactive visibility with <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">ref()</code>, <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">v-if</code>, and <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">@click</code>:
            </p>
          </div>

          <CodeBlock
            language="vue"
            filename="src/components/OptionsDropdown.vue"
            code={VUE_COMPONENT_SNIPPET}
          />

          <div className="mt-5 space-y-4">
            <p className="font-accent text-sm text-ink-secondary leading-relaxed">
              Building complex accessible menus or modals in Vue 3 or Nuxt? Optionally install <strong className="text-ink">@headlessui/vue</strong> alongside Tailwind CSS v4:
            </p>
            <CodeBlock
              language="bash"
              filename="Terminal (Optional)"
              code={formatInstallCommand(pm, ["@headlessui/vue", "lucide-vue-next"])}
            />
          </div>
        </section>

        {/* 08. USING ASTRO JS */}
        <section>
          <SectionHeading
            id="using-astro"
            index="08"
            eyebrow="OFFICIAL ASTRO STYLING GUIDE"
            title="Using Astro JS"
          />

          <div className="space-y-4 font-accent text-sm sm:text-base leading-relaxed text-ink-secondary mb-6">
            <p>
              DuneUI itself is built with <strong className="text-ink">Astro</strong> and <strong className="text-ink">Tailwind CSS v4</strong>. Following Astro&apos;s official styling guide, Tailwind v4 integrates directly via the Vite plugin (<code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">@tailwindcss/vite</code>) rather than the legacy <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">@astrojs/tailwind</code> v3 integration. Static <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">.astro</code> templates ship <strong className="text-ink">0 kB of client JavaScript</strong> by default.
            </p>
          </div>

          {/* Astro Setup Mode Switcher (Automatic vs Manual) */}
          <div className="mb-6 flex flex-col gap-3 border border-rule bg-paper-elevated p-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-1" role="tablist" aria-label="Astro Tailwind setup mode">
              <button
                type="button"
                role="tab"
                aria-selected={astroSetupMode === "automatic"}
                onClick={() => setAstroSetupMode("automatic")}
                className={`cursor-pointer px-3 py-1.5 font-mono text-xs transition-colors flex items-center gap-1.5 ${
                  astroSetupMode === "automatic"
                    ? "bg-ink text-paper-elevated font-semibold"
                    : "text-ink-secondary hover:bg-paper-recessed hover:text-ink"
                }`}
              >
                <span>Automatic CLI</span>
                <span
                  className={`hidden md:inline px-1.5 py-0.5 text-[9px] uppercase tracking-wider ${
                    astroSetupMode === "automatic"
                      ? "bg-clay text-paper-elevated"
                      : "bg-paper text-clay border border-rule"
                  }`}
                >
                  Recommended
                </span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={astroSetupMode === "manual"}
                onClick={() => setAstroSetupMode("manual")}
                className={`cursor-pointer px-3 py-1.5 font-mono text-xs transition-colors ${
                  astroSetupMode === "manual"
                    ? "bg-ink text-paper-elevated font-semibold"
                    : "text-ink-secondary hover:bg-paper-recessed hover:text-ink"
                }`}
              >
                Manual Setup
              </button>
            </div>

            <div className="flex items-center gap-1 border border-rule bg-paper p-0.5 self-start sm:self-auto">
              {PACKAGE_MANAGERS.map((pkgMgr) => (
                <button
                  key={pkgMgr}
                  type="button"
                  onClick={() => setPm(pkgMgr)}
                  className={`cursor-pointer px-2.5 py-1 font-mono text-[11px] uppercase transition-colors ${
                    pm === pkgMgr
                      ? "bg-clay text-paper-elevated font-semibold"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {pkgMgr}
                </button>
              ))}
            </div>
          </div>

          {astroSetupMode === "automatic" ? (
            <div className="space-y-6 mb-8">
              <div>
                <StepBadge step="1" title="Run the official Astro CLI integration command" />
                <p className="font-accent text-sm text-ink-secondary leading-relaxed mb-3">
                  Astro&apos;s <code className="font-mono text-xs text-ink">astro add tailwind</code> wizard automatically installs <code className="font-mono text-xs text-ink">tailwindcss</code> and <code className="font-mono text-xs text-ink">@tailwindcss/vite</code>, registers the Vite plugin in <code className="font-mono text-xs text-ink">astro.config.mjs</code>, and generates <code className="font-mono text-xs text-ink">src/styles/global.css</code> with <code className="font-mono text-xs text-ink">@import &quot;tailwindcss&quot;;</code>:
                </p>
                <CodeBlock
                  language="bash"
                  filename="Terminal"
                  step="STEP 01"
                  code={formatAstroAddCommand(pm)}
                />
              </div>

              <div>
                <StepBadge step="2" title="Import src/styles/global.css in your Layout or pages" />
                <p className="font-accent text-sm text-ink-secondary leading-relaxed mb-3">
                  Import your global stylesheet inside the Astro frontmatter of your shared layout (e.g. <code className="font-mono text-xs text-ink">src/layouts/Layout.astro</code>) or individual <code className="font-mono text-xs text-ink">.astro</code> pages so Tailwind utilities are available everywhere:
                </p>
                <CodeBlock
                  language="astro"
                  filename="src/layouts/Layout.astro"
                  step="STEP 02"
                  code={ASTRO_LAYOUT_IMPORT_SNIPPET}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6 mb-8">
              <div>
                <StepBadge step="1" title="Install tailwindcss and @tailwindcss/vite" />
                <CodeBlock
                  language="bash"
                  filename="Terminal"
                  step="STEP 01"
                  code={formatInstallCommand(pm, ["tailwindcss", "@tailwindcss/vite"])}
                />
              </div>

              <div>
                <StepBadge step="2" title="Add the Vite plugin to astro.config.mjs" />
                <CodeBlock
                  language="js"
                  filename="astro.config.mjs"
                  step="STEP 02"
                  code={ASTRO_CONFIG_SNIPPET}
                />
              </div>

              <div>
                <StepBadge step="3" title="Create src/styles/global.css and import Tailwind" />
                <CodeBlock
                  language="css"
                  filename="src/styles/global.css"
                  step="STEP 03"
                  code={TAILWIND_CSS_IMPORT}
                />
              </div>

              <div>
                <StepBadge step="4" title="Import global.css in your Layout or Astro page" />
                <CodeBlock
                  language="astro"
                  filename="src/layouts/Layout.astro"
                  step="STEP 04"
                  code={ASTRO_LAYOUT_IMPORT_SNIPPET}
                />
              </div>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <StepBadge step="JS" title="Handle interactive DuneUI scripts & View Transitions" />
              <p className="font-accent text-sm text-ink-secondary leading-relaxed mb-3">
                Once Tailwind CSS is imported, paste any DuneUI HTML block into your <code className="font-mono text-xs text-ink">.astro</code> files. For components requiring JavaScript when <code className="font-mono text-xs text-ink">&lt;ClientRouter /&gt;</code> (View Transitions) is enabled, re-run setup on <code className="font-mono text-xs text-ink">astro:page-load</code> with a <code className="font-mono text-xs text-ink">data-bound</code> guard so listeners don&apos;t bind twice—or hydrate a React/Vue island using <code className="font-mono text-xs text-ink">client:load</code>:
              </p>
              <CodeBlock
                language="astro"
                filename="src/components/AlertBanner.astro"
                code={ASTRO_COMPONENT_SNIPPET}
              />
            </div>

            <Callout title="NOTE // LEGACY @ASTROJS/TAILWIND">
              Astro projects using Tailwind CSS v4 should use <code className="font-mono text-xs text-ink">@tailwindcss/vite</code> (installed automatically by <code className="font-mono text-xs text-ink">astro add tailwind</code>). The older <code className="font-mono text-xs text-ink">@astrojs/tailwind</code> integration only supports Tailwind v3 and is deprecated for Tailwind v4 setups.
            </Callout>
          </div>
        </section>

        {/* 09. DARK MODE, TYPOGRAPHY & PURE CSS */}
        <section>
          <SectionHeading
            id="theming-pure-css"
            index="09"
            eyebrow="CUSTOMIZATION"
            title="Dark Mode, Typography & Pure CSS"
          />

          <div className="space-y-5 font-accent text-sm sm:text-base leading-relaxed text-ink-secondary mb-6">
            <p>
              Every DuneUI component supports Light, Muted, Dark, and Aurora Mesh preview stages. By default, Tailwind v4&apos;s <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">dark:</code> variant follows the user&apos;s OS preference (<code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">prefers-color-scheme</code>). If your app uses a manual <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">.dark</code> class toggle on <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">&lt;html&gt;</code>, add <code className="border border-rule bg-paper-elevated px-1.5 py-0.5 font-mono text-xs text-ink">@custom-variant dark</code> right after your Tailwind import:
            </p>
          </div>

          <CodeBlock
            language="css"
            filename="src/styles/globals.css"
            code={DARK_MODE_THEME_SNIPPET}
          />

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="border border-rule bg-paper-elevated p-6">
              <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-clay">
                <Sparkles className="size-3.5" />
                <span>NO BUILD STEP?</span>
              </div>
              <h3 className="mt-2 font-heading text-xl font-bold text-ink">
                Pure CSS Specimens
              </h3>
              <p className="mt-2 font-accent text-sm leading-relaxed text-ink-secondary">
                Working on a project without Tailwind CSS or Node tooling? Our Pure CSS suite ships standalone CSS rules and semantic HTML you can paste anywhere.
              </p>
              <a
                href="/css"
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-clay hover:underline"
              >
                <span>Open Pure CSS Kit</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="border border-ink bg-obsidian p-6 text-paper-elevated">
              <div className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-sand">
                <Cpu className="size-3.5" />
                <span>STILL HAVE QUESTIONS?</span>
              </div>
              <h3 className="mt-2 font-heading text-xl font-bold">
                Licensing &amp; FAQs
              </h3>
              <p className="mt-2 font-accent text-sm leading-relaxed text-white/70">
                Free for unlimited personal, client, and commercial products with zero attribution required.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-wider">
                <a href="/faqs" className="text-sand hover:underline">
                  Read FAQs →
                </a>
                <a href="/license" className="text-paper-elevated/80 hover:text-paper-elevated hover:underline">
                  View License →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
