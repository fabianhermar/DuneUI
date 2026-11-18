export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";
export type InstallMethod = "vite" | "postcss" | "cli" | "cdn";
export type FrameworkTab = "html" | "react" | "vue" | "astro";

export interface TocSection {
  id: string;
  index: string;
  label: string;
}

export const TOC_SECTIONS: TocSection[] = [
  { id: "overview", index: "01", label: "No-Package Philosophy" },
  { id: "requirements", index: "02", label: "Requirements" },
  { id: "installing-tailwind", index: "03", label: "Installing Tailwind CSS" },
  { id: "javascript-interactivity", index: "04", label: "JavaScript & Interactivity" },
  { id: "using-html", index: "05", label: "Using HTML" },
  { id: "using-react", index: "06", label: "Using React" },
  { id: "using-vue", index: "07", label: "Using Vue" },
  { id: "using-astro", index: "08", label: "Using Astro JS" },
  { id: "theming-pure-css", index: "09", label: "Dark Mode & Pure CSS" },
];

export function formatInstallCommand(pm: PackageManager, packages: string[], dev = false): string {
  const pkgList = packages.join(" ");
  switch (pm) {
    case "npm":
      return `npm install ${dev ? "-D " : ""}${pkgList}`;
    case "pnpm":
      return `pnpm add ${dev ? "-D " : ""}${pkgList}`;
    case "yarn":
      return `yarn add ${dev ? "-D " : ""}${pkgList}`;
    case "bun":
      return `bun add ${dev ? "-d " : ""}${pkgList}`;
  }
}

export function formatRunCommand(pm: PackageManager, script: string): string {
  switch (pm) {
    case "npm":
      return `npm run ${script}`;
    case "pnpm":
      return `pnpm ${script}`;
    case "yarn":
      return `yarn ${script}`;
    case "bun":
      return `bun run ${script}`;
  }
}

export function formatExecCommand(pm: PackageManager, command: string): string {
  switch (pm) {
    case "npm":
      return `npx ${command}`;
    case "pnpm":
      return `pnpm dlx ${command}`;
    case "yarn":
      return `yarn dlx ${command}`;
    case "bun":
      return `bunx ${command}`;
  }
}

export function formatAstroAddCommand(pm: PackageManager): string {
  switch (pm) {
    case "npm":
      return "npx astro add tailwind";
    case "pnpm":
      return "pnpm astro add tailwind";
    case "yarn":
      return "yarn astro add tailwind";
    case "bun":
      return "bunx astro add tailwind";
  }
}

export const VITE_CONFIG_SNIPPET = `import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})`;

export const POSTCSS_CONFIG_SNIPPET = `export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}`;

export const TAILWIND_CSS_IMPORT = `@import "tailwindcss";`;

export const CLI_HTML_SNIPPET = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="./output.css" rel="stylesheet" />
  </head>
  <body>
    <!-- Paste any DuneUI component here -->
  </body>
</html>`;

export const CDN_SNIPPET = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body>
    <!-- Quick prototyping only — paste DuneUI markup here -->
  </body>
</html>`;

export const NATIVE_DETAILS_SNIPPET = `<details class="group border-b border-slate-200 pb-4">
  <summary class="flex cursor-pointer items-center justify-between font-semibold">
    <span>Do I need JavaScript for this accordion?</span>
    <span class="transition-transform duration-200 group-open:rotate-180">↓</span>
  </summary>
  <p class="mt-3 text-sm text-slate-600">
    No. Native HTML disclosure works out of the box with Tailwind's group-open variant.
  </p>
</details>`;

export const VANILLA_JS_INTERACTIVE_SNIPPET = `<!-- 1. Paste the clean DuneUI HTML markup -->
<div role="alert" data-alert-root class="rounded-xl border border-slate-200 bg-white p-4">
  <div data-alert-body class="flex items-start justify-between gap-4">
    <div>
      <strong class="text-sm font-semibold text-slate-900">Deployment ready</strong>
      <p class="mt-1 text-xs text-slate-600">Edge build propagated in 1.4s.</p>
    </div>
    <button type="button" data-alert-dismiss aria-label="Dismiss alert" class="text-xs font-medium text-slate-500 hover:text-slate-900">
      Dismiss
    </button>
  </div>
</div>

<!-- 2. Wire behavior in your app script (e.g. main.js) -->
<script type="module">
  document.querySelectorAll('[data-alert-root]').forEach((root) => {
    const dismiss = root.querySelector('[data-alert-dismiss]');
    dismiss?.addEventListener('click', () => {
      root.setAttribute('hidden', '');
    });
  });
</script>`;

export const HTML_DROPDOWN_SNIPPET = `<!-- Dropdown markup + accessible toggle script for plain HTML / Blade / ERB -->
<div class="relative inline-block text-left" data-dropdown>
  <button
    type="button"
    data-dropdown-trigger
    aria-expanded="false"
    aria-haspopup="menu"
    class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-900 shadow-xs hover:bg-slate-50"
  >
    <span>Options</span>
    <svg class="size-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
    </svg>
  </button>

  <div
    data-dropdown-menu
    role="menu"
    hidden
    class="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-slate-200 bg-white p-1 shadow-lg"
  >
    <a href="#edit" role="menuitem" class="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Edit</a>
    <a href="#duplicate" role="menuitem" class="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Duplicate</a>
  </div>
</div>

<script type="module">
  document.querySelectorAll('[data-dropdown]').forEach((root) => {
    const trigger = root.querySelector('[data-dropdown-trigger]');
    const menu = root.querySelector('[data-dropdown-menu]');
    if (!trigger || !menu) return;

    const setOpen = (open) => {
      trigger.setAttribute('aria-expanded', String(open));
      menu.toggleAttribute('hidden', !open);
    };

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(menu.hasAttribute('hidden'));
    });

    document.addEventListener('click', (e) => {
      if (!root.contains(e.target)) setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  });
</script>`;

export const REACT_COMPONENT_SNIPPET = `import { useEffect, useRef, useState } from "react";

export function OptionsDropdown() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative inline-block text-left">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-900 shadow-xs hover:bg-slate-50"
      >
        <span>Options</span>
        <svg className="size-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-slate-200 bg-white p-1 shadow-lg"
        >
          <a href="#edit" role="menuitem" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
            Edit
          </a>
          <a href="#duplicate" role="menuitem" className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
            Duplicate
          </a>
        </div>
      )}
    </div>
  );
}`;

export const VUE_COMPONENT_SNIPPET = `<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const open = ref(false)
const rootRef = ref<HTMLElement | null>(null)

function onDocumentClick(event: MouseEvent) {
  if (rootRef.value && !rootRef.value.contains(event.target as Node)) {
    open.value = false
  }
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeyDown)
})
</script>

<template>
  <div ref="rootRef" class="relative inline-block text-left">
    <button
      type="button"
      :aria-expanded="open"
      aria-haspopup="menu"
      @click="open = !open"
      class="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-900 shadow-xs hover:bg-slate-50"
    >
      <span>Options</span>
      <svg class="size-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div
      v-if="open"
      role="menu"
      class="absolute right-0 z-20 mt-2 w-48 rounded-lg border border-slate-200 bg-white p-1 shadow-lg"
    >
      <a href="#edit" role="menuitem" class="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Edit</a>
      <a href="#duplicate" role="menuitem" class="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">Duplicate</a>
    </div>
  </div>
</template>`;

export const ASTRO_CONFIG_SNIPPET = `// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});`;

export const ASTRO_LAYOUT_IMPORT_SNIPPET = `---
// src/layouts/Layout.astro (or src/pages/index.astro)
import "../styles/global.css";
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Astro + DuneUI</title>
  </head>
  <body>
    <slot />
  </body>
</html>`;

export const ASTRO_COMPONENT_SNIPPET = `---
// src/components/AlertBanner.astro — zero JS shipped until needed
interface Props {
  title?: string;
  message?: string;
}

const {
  title = 'Environment synced',
  message = '12 keys propagated across 4 edge regions.',
} = Astro.props;
---

<div role="alert" data-alert-root class="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
  <div class="flex items-start justify-between gap-4">
    <div>
      <strong class="text-sm font-semibold text-slate-900">{title}</strong>
      <p class="mt-1 text-xs text-slate-600">{message}</p>
    </div>
    <button
      type="button"
      data-alert-dismiss
      aria-label="Dismiss alert"
      class="rounded-lg px-2 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-900"
    >
      Dismiss
    </button>
  </div>
</div>

<script>
  function initAlerts() {
    document.querySelectorAll<HTMLElement>('[data-alert-root]').forEach((root) => {
      if (root.dataset.bound === 'true') return;
      root.dataset.bound = 'true';

      root.querySelector('[data-alert-dismiss]')?.addEventListener('click', () => {
        root.setAttribute('hidden', '');
      });
    });
  }

  initAlerts();
  document.addEventListener('astro:page-load', initAlerts);
</script>`;

export const DARK_MODE_THEME_SNIPPET = `@import "tailwindcss";

/* Optional: enable class-based dark mode (.dark on <html>) */
@custom-variant dark (&:where(.dark, .dark *));

/* Optional: define custom typography & color tokens */
@theme {
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}`;
