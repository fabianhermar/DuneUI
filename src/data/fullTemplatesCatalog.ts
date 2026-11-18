import type { PreviewCanvas } from '@/data/types'

export interface FullTemplateSpec {
	id: string
	title: string
	category: 'SaaS' | 'Editorial' | 'Fintech' | 'AI & DevTools' | 'E-Commerce' | 'Spatial Glass'
	styleTag: string
	canvas: PreviewCanvas
	summary: string
	html: string
}

export const FULL_TEMPLATES_CATALOG: FullTemplateSpec[] = [
	{
		id: 'tpl-cloudpulse-saas',
		title: 'CloudPulse — Complete SaaS Platform Site',
		category: 'SaaS',
		styleTag: 'Vercel · Complete Site',
		canvas: 'light',
		summary: 'Full end-to-end SaaS landing template: navbar, double-bezel console hero, SVG brand cloud, 3-column Bento capabilities, 2-tier pricing strip, testimonial, and full footer.',
		html: `<div class="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#090B10] shadow-2xl text-slate-900 dark:text-white">
  <header class="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#090B10]/80 backdrop-blur-md px-6 py-4 text-xs">
    <div class="flex items-center gap-2"><span class="flex size-7 items-center justify-center rounded-lg bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black">C</span><span class="font-bold text-sm tracking-tight">CloudPulse</span></div>
    <nav class="hidden sm:flex gap-6 font-medium text-slate-600 dark:text-zinc-400"><a href="#features">Platform</a><a href="#pricing">Pricing</a><a href="#customers">Customers</a><a href="#docs">Docs</a></nav>
    <div class="flex items-center gap-2.5"><a href="#" class="hidden sm:inline font-semibold text-slate-600 dark:text-zinc-300">Log in</a><a href="#" class="rounded-full bg-indigo-600 px-4 py-1.5 font-semibold text-white">Start Free</a></div>
  </header>

  <section class="relative px-6 pt-12 pb-10 text-center sm:px-10">
    <div class="pointer-events-none absolute -top-24 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl"></div>
    <span class="relative inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/15 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-300">Edge v4.2 &bull; 34 Global Regions</span>
    <h1 class="relative mx-auto mt-4 max-w-2xl text-4xl font-bold tracking-[-0.03em] leading-[1.03] sm:text-5xl">Ship global apps at instant edge speed.</h1>
    <p class="relative mx-auto mt-3.5 max-w-lg text-sm text-slate-600 dark:text-zinc-400">Preview URLs on every pull request, instant rollbacks, and OpenTelemetry tracing zero-config out of the box.</p>
    <div class="relative mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold">
      <a href="#" class="rounded-full bg-slate-950 dark:bg-white px-6 py-2.5 text-white dark:text-slate-950">Deploy App &rarr;</a>
      <a href="#" class="rounded-full border border-slate-200 dark:border-white/15 px-5 py-2.5">Book Demo</a>
    </div>

    <div class="relative mx-auto mt-8 max-w-3xl rounded-[22px] border border-slate-200 dark:border-white/15 bg-slate-100/80 dark:bg-white/[0.04] p-2 text-left shadow-xl">
      <div class="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10131C] p-4 space-y-3 text-xs">
        <div class="flex items-center justify-between font-mono text-[11px]"><span class="font-bold">main &larr; feat/edge-streaming</span><span class="rounded bg-emerald-500/15 px-2 py-0.5 text-emerald-700 dark:text-emerald-300 font-bold">READY 1.4s</span></div>
        <div class="grid grid-cols-3 gap-2 font-mono text-[10px]">
          <div class="rounded-lg border border-slate-200 dark:border-white/10 p-2.5"><p class="text-slate-400">P95 LATENCY</p><p class="mt-0.5 text-sm font-bold">12ms</p></div>
          <div class="rounded-lg border border-slate-200 dark:border-white/10 p-2.5"><p class="text-slate-400">CACHE HIT</p><p class="mt-0.5 text-sm font-bold text-indigo-600 dark:text-indigo-400">99.4%</p></div>
          <div class="rounded-lg border border-slate-200 dark:border-white/10 p-2.5"><p class="text-slate-400">UPTIME</p><p class="mt-0.5 text-sm font-bold text-emerald-600 dark:text-emerald-400">99.99%</p></div>
        </div>
      </div>
    </div>
  </section>

  <section id="features" class="grid grid-cols-1 gap-4 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.02] p-6 sm:grid-cols-3 sm:p-9 text-xs">
    <div class="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10131C] p-5"><p class="font-bold text-sm">Push to Deploy</p><p class="mt-1.5 text-slate-600 dark:text-zinc-400">Immutable preview URLs built automatically for every branch.</p></div>
    <div class="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10131C] p-5"><p class="font-bold text-sm">Distributed KV</p><p class="mt-1.5 text-slate-600 dark:text-zinc-400">Sub-millisecond edge reads replicated across 34 continental regions.</p></div>
    <div class="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#10131C] p-5"><p class="font-bold text-sm">SOC2 Type II</p><p class="mt-1.5 text-slate-600 dark:text-zinc-400">Audit streams, KMS secret rotation, and Okta SAML included.</p></div>
  </section>

  <section id="customers" class="flex flex-col items-center justify-between gap-6 border-t border-slate-200/80 dark:border-white/10 p-6 sm:flex-row sm:p-9 text-xs">
    <div class="flex items-center gap-3.5 max-w-lg">
      <img src="/images/testimonials/elena.jpg" alt="Elena Rostova" class="size-11 rounded-full object-cover" />
      <div><p class="italic text-slate-700 dark:text-zinc-300">&ldquo;Cut our cold-start p95 latency from 410ms to 12ms in one sprint.&rdquo;</p><p class="mt-1 font-bold">Elena Rostova &bull; <span class="font-normal text-slate-500">VP Engineering</span></p></div>
    </div>
    <div id="pricing" class="rounded-2xl border border-indigo-500/40 bg-indigo-50/50 dark:bg-indigo-500/10 px-5 py-4 text-right">
      <p class="font-mono text-[10px] font-bold uppercase text-indigo-600 dark:text-indigo-300">Pro Team Tier</p>
      <p class="mt-1 text-2xl font-bold">$29 <span class="text-xs font-normal text-slate-500">/ seat</span></p>
    </div>
  </section>

  <footer class="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 dark:border-white/10 bg-slate-50 dark:bg-black/40 px-6 py-4 text-[11px] text-slate-500 dark:text-zinc-400">
    <span>&copy; 2026 CloudPulse Inc.</span>
    <div class="flex gap-5"><a href="#">Privacy</a><a href="#">Security</a><a href="#">Status 99.99%</a></div>
  </footer>
</div>`
	},
	{
		id: 'tpl-koma-studio',
		title: 'KOMA® — Architectural Atelier Portfolio Site',
		category: 'Editorial',
		styleTag: 'Awwwards · Editorial Site',
		canvas: 'light',
		summary: 'Full architectural studio website: editorial masthead, asymmetric serif hero, dual photo commission gallery, practice ledger metrics, and inquiry footer.',
		html: `<div class="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-stone-200 dark:border-zinc-800 bg-[#FAF8F4] dark:bg-[#111110] text-stone-900 dark:text-zinc-100 shadow-2xl">
  <header class="flex items-center justify-between border-b border-stone-200 dark:border-zinc-800 px-6 py-4 text-xs">
    <span class="font-mono font-bold uppercase tracking-[0.22em]">KOMA&reg; ARCHITEKTUR</span>
    <nav class="hidden sm:flex gap-6 font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400"><a href="#">Commissions</a><a href="#">Monographs</a><a href="#">Practice</a></nav>
    <a href="#inquire" class="rounded-full bg-stone-950 dark:bg-white px-4 py-1.5 font-mono text-[10px] font-bold uppercase text-white dark:text-stone-950">Commission &rarr;</a>
  </header>

  <section class="p-6 sm:p-10">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
      <div class="lg:col-span-8">
        <p class="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-rose-700 dark:text-rose-300">Z&uuml;rich &bull; Kyoto &bull; Oslo</p>
        <h1 class="mt-2 font-serif text-4xl leading-[1.02] sm:text-6xl">Timeless architecture shaped by <em class="italic font-normal text-stone-600 dark:text-stone-300">climate</em> &amp; light.</h1>
      </div>
      <p class="lg:col-span-4 text-xs leading-relaxed text-stone-600 dark:text-stone-300">Passive-solar timber residences, limestone cultural halls, and civic commissions built for generational permanence.</p>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-12">
      <div class="relative overflow-hidden rounded-2xl border border-stone-300/70 dark:border-zinc-700 sm:col-span-8">
        <img src="/images/heroes/staircase-sunlight.jpg" alt="Limestone atrium" class="aspect-[16/10] w-full object-cover" />
        <div class="absolute bottom-3 left-4 rounded bg-black/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur-sm">01 // Kyoto Atrium</div>
      </div>
      <div class="relative overflow-hidden rounded-2xl border border-stone-300/70 dark:border-zinc-700 sm:col-span-4">
        <img src="/images/heroes/concrete-pavilion.jpg" alt="Concrete pavilion" class="aspect-[4/5] sm:aspect-auto sm:h-full w-full object-cover" />
        <div class="absolute bottom-3 left-3 rounded bg-black/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white backdrop-blur-sm">02 // Lake Pavilion</div>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-3 border-y border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-center text-xs">
    <div class="border-r border-stone-200 dark:border-zinc-800 p-5"><p class="font-serif text-3xl">48</p><p class="mt-1 font-mono text-[10px] uppercase text-stone-500">Built Works</p></div>
    <div class="border-r border-stone-200 dark:border-zinc-800 p-5"><p class="font-serif text-3xl">14</p><p class="mt-1 font-mono text-[10px] uppercase text-stone-500">Global Honors</p></div>
    <div class="p-5"><p class="font-serif text-3xl text-emerald-700 dark:text-emerald-400">Net-0</p><p class="mt-1 font-mono text-[10px] uppercase text-stone-500">Carbon Balance</p></div>
  </section>

  <section id="inquire" class="flex flex-wrap items-center justify-between gap-4 p-6 sm:p-10 text-xs">
    <div><h2 class="font-serif text-2xl">Start a 2027 Commission Brief</h2><p class="mt-1 text-stone-500">Residential, cultural, and hospitality inquiries reviewed monthly.</p></div>
    <a href="#" class="border border-stone-900 dark:border-white bg-stone-900 dark:bg-white px-5 py-2.5 font-mono text-[11px] font-bold uppercase text-white dark:text-stone-950">Schedule Consultation &rarr;</a>
  </section>
</div>`
	},
	{
		id: 'tpl-verge-fintech',
		title: 'Verge Treasury — Fintech Banking Complete Site',
		category: 'Fintech',
		styleTag: 'Stripe · Fintech Site',
		canvas: 'muted',
		summary: 'Full corporate treasury template: navigation, hero with layered metallic Visa card and 6-month yield bars, account tiers, FDIC coverage strip, and footer.',
		html: `<div class="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 dark:border-white/15 bg-white dark:bg-[#0B0E14] shadow-2xl text-slate-900 dark:text-white">
  <header class="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 px-6 py-4 text-xs">
    <div class="flex items-center gap-2"><span class="flex size-6 items-center justify-center rounded-md bg-[#635BFF] text-white font-black">V</span><span class="font-bold text-sm">Verge Treasury</span></div>
    <nav class="hidden sm:flex gap-6 text-slate-600 dark:text-zinc-400"><a href="#">Yield Vaults</a><a href="#">Wires</a><a href="#">Spend Cards</a></nav>
    <a href="#" class="rounded-full bg-[#635BFF] px-4 py-1.5 font-semibold text-white">Open Account</a>
  </header>

  <section class="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
    <div class="lg:col-span-6">
      <p class="font-mono text-[10px] font-bold uppercase tracking-widest text-[#635BFF] dark:text-indigo-400">Corporate Liquidity Platform</p>
      <h1 class="mt-2.5 text-3xl font-bold tracking-[-0.03em] sm:text-5xl leading-[1.04]">Corporate reserves earning <span class="text-emerald-600 dark:text-emerald-400">5.12% APY</span>.</h1>
      <p class="mt-3 text-sm text-slate-600 dark:text-zinc-300">Same-day FedNow and SEPA wires, programmable corporate Visa cards, and automated tax sweeps.</p>
      <div class="mt-6 flex flex-wrap gap-3 text-xs font-semibold">
        <a href="#" class="rounded-full bg-slate-950 dark:bg-white px-5 py-2.5 text-white dark:text-slate-950">Open Treasury &rarr;</a>
        <a href="#" class="rounded-full border border-slate-200 dark:border-white/15 px-5 py-2.5">Compare Rates</a>
      </div>
    </div>

    <div class="lg:col-span-6 rounded-2xl border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-[#121622] p-5 space-y-4">
      <div class="rounded-xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-4 text-white shadow-lg">
        <div class="flex justify-between font-mono text-[10px] text-zinc-300"><span>VERGE CORPORATE</span><span>VISA INFINITE</span></div>
        <p class="mt-3 font-mono text-2xl font-bold">$4,280,910.40</p>
        <div class="mt-2 flex justify-between font-mono text-[10px] text-emerald-300"><span>&bull;&bull;&bull;&bull; 4829</span><span>+$592.40 / day</span></div>
      </div>
      <div class="flex h-14 items-end gap-1.5">
        <div class="flex-1 rounded-t bg-indigo-300/60 h-5"></div><div class="flex-1 rounded-t bg-indigo-400/70 h-7"></div>
        <div class="flex-1 rounded-t bg-indigo-500 h-10"></div><div class="flex-1 rounded-t bg-emerald-500 h-12"></div><div class="flex-1 rounded-t bg-emerald-400 h-14"></div>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 gap-4 border-t border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.02] p-6 sm:grid-cols-3 text-xs">
    <div class="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121622] p-4"><p class="font-bold">$20M FDIC Sweep</p><p class="mt-1 text-slate-500 dark:text-zinc-400">Partner-bank sweep coverage with daily liquidity.</p></div>
    <div class="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121622] p-4"><p class="font-bold">Zero Wire Fees</p><p class="mt-1 text-slate-500 dark:text-zinc-400">Free domestic ACH, FedNow, and SWIFT payouts.</p></div>
    <div class="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#121622] p-4"><p class="font-bold">NetSuite &amp; QuickBooks</p><p class="mt-1 text-slate-500 dark:text-zinc-400">Two-way ledger reconciliation in real time.</p></div>
  </section>

  <footer class="flex justify-between border-t border-slate-200 dark:border-white/10 px-6 py-4 font-mono text-[10px] text-slate-500">
    <span>VERGE FINANCIAL TECH INC.</span><span>MEMBER FDIC PARTNER BANKS</span>
  </footer>
</div>`
	},
	{
		id: 'tpl-maison-ecommerce',
		title: 'Maison Solis — Luxury Lookbook Storefront Site',
		category: 'E-Commerce',
		styleTag: 'Storefront · Complete Site',
		canvas: 'light',
		summary: 'Complete DTC craft e-commerce landing template: shipping announcement, storefront header, lookbook hero, 4-product catalog grid with prices, atelier quote, and footer.',
		html: `<div class="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-[#111110] text-stone-900 dark:text-zinc-100 shadow-2xl">
  <div class="bg-[#FAF8F4] dark:bg-zinc-950 border-b border-stone-200 dark:border-zinc-800 py-2 text-center font-mono text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-200">Autumn Edition &bull; Complimentary Express Courier</div>
  <header class="flex items-center justify-between border-b border-stone-100 dark:border-zinc-800 px-6 py-4 text-xs">
    <span class="font-serif text-xl">Maison Solis</span>
    <nav class="hidden sm:flex gap-6 font-mono text-[10px] uppercase tracking-widest text-stone-500"><a href="#">Ceramics</a><a href="#">Lighting</a><a href="#">Seating</a></nav>
    <a href="#" class="font-mono font-bold">Bag (2)</a>
  </header>

  <section class="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
    <div class="lg:col-span-6 space-y-4">
      <p class="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Kyoto &amp; Copenhagen</p>
      <h1 class="font-serif text-4xl leading-[1.04] sm:text-5xl">Ceramics &amp; lighting sculpted in numbered editions.</h1>
      <p class="text-sm text-stone-600 dark:text-stone-300">Matte stoneware carafes, brushed brass desk lamps, and solid white-oak chairs built to age gracefully.</p>
      <a href="#catalog" class="inline-block rounded-full bg-stone-950 dark:bg-white px-6 py-2.5 text-xs font-semibold text-white dark:text-stone-950">Explore Collection &rarr;</a>
    </div>
    <div class="lg:col-span-6 overflow-hidden rounded-2xl border border-stone-200 dark:border-zinc-800">
      <img src="/images/ecommerce/lamp.jpg" alt="Studio brass lamp" class="aspect-[4/3] w-full object-cover" />
    </div>
  </section>

  <section id="catalog" class="grid grid-cols-2 gap-4 border-t border-stone-200 dark:border-zinc-800 p-6 sm:grid-cols-4 sm:p-9 text-xs">
    <div class="space-y-2"><img src="/images/ecommerce/carafe.jpg" alt="Carafe" class="aspect-square w-full rounded-xl object-cover" /><div class="flex justify-between font-medium"><span>Stone Carafe</span><span class="font-mono">$85</span></div></div>
    <div class="space-y-2"><img src="/images/ecommerce/lamp.jpg" alt="Lamp" class="aspect-square w-full rounded-xl object-cover" /><div class="flex justify-between font-medium"><span>Arc Lamp</span><span class="font-mono">$240</span></div></div>
    <div class="space-y-2"><img src="/images/ecommerce/chair.jpg" alt="Chair" class="aspect-square w-full rounded-xl object-cover" /><div class="flex justify-between font-medium"><span>Oak Chair</span><span class="font-mono">$680</span></div></div>
    <div class="space-y-2"><img src="/images/ecommerce/tote.jpg" alt="Tote" class="aspect-square w-full rounded-xl object-cover" /><div class="flex justify-between font-medium"><span>Canvas Tote</span><span class="font-mono">$115</span></div></div>
  </section>

  <footer class="flex flex-wrap justify-between gap-2 border-t border-stone-200 dark:border-zinc-800 bg-[#FAF8F4] dark:bg-zinc-950 px-6 py-4 text-[11px] text-stone-500">
    <span>&copy; 2026 Maison Solis Studio</span><span>Kyoto &bull; Copenhagen &bull; New York</span>
  </footer>
</div>`
	},
	{
		id: 'tpl-nova-ai',
		title: 'Nova Copilot — AI Developer Platform Site',
		category: 'AI & DevTools',
		styleTag: 'AI · Complete Site',
		canvas: 'dark',
		summary: 'Full dark-first AI engineering site: security-first nav, asymmetric AST code-diff hero, 3 cryptographic guarantees, CLI install tabs, customer quote, and footer.',
		html: `<div class="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-indigo-500/25 bg-white dark:bg-[#070811] text-slate-900 dark:text-white shadow-2xl">
  <header class="flex items-center justify-between border-b border-slate-200 dark:border-white/10 px-6 py-4 text-xs">
    <span class="font-bold text-sm">Nova Copilot</span>
    <nav class="hidden sm:flex gap-6 text-slate-500 dark:text-zinc-400"><a href="#">Security</a><a href="#">Benchmarks</a><a href="#">Docs</a></nav>
    <a href="#" class="rounded-full bg-indigo-600 px-4 py-1.5 font-semibold text-white">Install CLI</a>
  </header>

  <section class="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
    <div class="lg:col-span-6">
      <span class="inline-flex rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 font-mono text-[10px] font-bold uppercase text-indigo-700 dark:text-indigo-300">Zero-Retention VPC</span>
      <h1 class="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-5xl leading-[1.04]">Ship audited TypeScript in half the time.</h1>
      <p class="mt-3 text-sm text-slate-600 dark:text-zinc-400">Repo-wide AST reasoning, Playwright synthesis, and inline PR security patches before code merges.</p>
      <div class="mt-6 flex flex-wrap gap-3 text-xs font-bold">
        <a href="#" class="rounded-full bg-indigo-600 px-5 py-2.5 text-white">Start Free Trial &rarr;</a>
        <a href="#" class="rounded-full border border-slate-200 dark:border-white/15 px-5 py-2.5">Read SOC2 Report</a>
      </div>
    </div>
    <div class="lg:col-span-6 rounded-2xl border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-[#0E111B] p-4 font-mono text-[11px] space-y-2 shadow-xl">
      <div class="flex justify-between border-b border-slate-200 dark:border-white/10 pb-2 text-slate-500"><span>src/api/checkout.ts</span><span class="text-emerald-500 font-bold">99/100 SAFE</span></div>
      <p class="rounded bg-rose-500/12 px-2 py-1 text-rose-600 dark:text-rose-300">- const q = db.raw("SELECT * FROM orders");</p>
      <p class="rounded bg-emerald-500/12 px-2 py-1 text-emerald-600 dark:text-emerald-300">+ const q = db.select().from(orders).where(eq(orders.id, id));</p>
    </div>
  </section>

  <section class="grid grid-cols-1 gap-4 border-t border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.02] p-6 sm:grid-cols-3 text-xs">
    <div class="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E111B] p-4"><p class="font-bold">Full Repo AST</p><p class="mt-1 text-slate-500 dark:text-zinc-400">Understands Astro routes, Drizzle schemas, and API boundaries.</p></div>
    <div class="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E111B] p-4"><p class="font-bold">0% Prompt Training</p><p class="mt-1 text-slate-500 dark:text-zinc-400">Isolated EU/US enclaves verified under HIPAA &amp; SOC2.</p></div>
    <div class="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E111B] p-4"><p class="font-bold">Instant Rollbacks</p><p class="mt-1 text-slate-500 dark:text-zinc-400">Every AI patch ships with generated unit &amp; E2E assertions.</p></div>
  </section>

  <footer class="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 dark:border-white/10 px-6 py-4 text-[11px] text-slate-500 dark:text-zinc-400">
    <span>&copy; 2026 Nova Copilot Systems</span><span>SOC2 Type II &bull; HIPAA Ready</span>
  </footer>
</div>`
	},
	{
		id: 'tpl-aether-glass',
		title: 'Aether OS — Spatial Glass App Website',
		category: 'Spatial Glass',
		styleTag: 'Liquid Glass · Complete Site',
		canvas: 'mesh',
		summary: 'Complete Liquid Glass product site: floating pill navbar, ambient workspace showcase, translucent feature stack, two-tier membership strip, and footer.',
		html: `<div class="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/20 bg-gradient-to-br from-sky-50 via-white to-indigo-100/80 dark:from-[#0B1221] dark:via-[#1B1744] dark:to-[#3B0764] p-6 sm:p-10 text-slate-900 dark:text-white shadow-2xl">
  <header class="flex items-center justify-between rounded-full border border-slate-900/10 dark:border-white/20 bg-white/75 dark:bg-white/10 px-5 py-2.5 text-xs backdrop-blur-xl">
    <span class="font-bold text-sm">Aether OS 2.0</span>
    <nav class="hidden sm:flex gap-6 text-slate-600 dark:text-white/80"><a href="#">Flow Timer</a><a href="#">Studio Rooms</a><a href="#">Pricing</a></nav>
    <a href="#" class="rounded-full bg-slate-900 dark:bg-white px-4 py-1.5 font-semibold text-white dark:text-slate-950">Download Beta</a>
  </header>

  <section class="py-10 text-center">
    <h1 class="mx-auto max-w-2xl text-4xl font-bold tracking-[-0.03em] leading-[1.03] sm:text-5xl">The ambient workspace crafted for deep flow.</h1>
    <p class="mx-auto mt-3 max-w-md text-sm text-slate-700 dark:text-white/80">Translucent surfaces, calm notification silencing, and 120 Hz spring physics across macOS &amp; VisionOS.</p>
    <div class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 rounded-2xl border border-white/80 dark:border-white/20 bg-white/60 dark:bg-white/10 p-4 text-left backdrop-blur-2xl sm:grid-cols-3 text-xs">
      <div class="rounded-xl bg-white/80 dark:bg-white/10 p-4"><p class="font-mono text-[10px] font-bold text-cyan-700 dark:text-cyan-300">FOCUS TIMER</p><p class="mt-1 text-2xl font-bold">42:00</p><p class="text-[11px] opacity-75">Notifications paused</p></div>
      <div class="rounded-xl bg-white/80 dark:bg-white/10 p-4"><p class="font-mono text-[10px] font-bold text-indigo-700 dark:text-indigo-200">DISPLAY</p><p class="mt-1 text-2xl font-bold">120 Hz</p><p class="text-[11px] opacity-75">Spring physics engine</p></div>
      <div class="rounded-xl bg-white/80 dark:bg-white/10 p-4"><p class="font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-300">VAULT</p><p class="mt-1 text-2xl font-bold">E2EE</p><p class="text-[11px] opacity-75">Zero-knowledge sync</p></div>
    </div>
  </section>

  <footer class="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/75 dark:border-white/15 bg-white/50 dark:bg-white/[0.06] px-5 py-4 text-xs backdrop-blur-xl">
    <span class="font-semibold">Free Personal Edition &bull; Pro $9/mo</span>
    <a href="#" class="font-mono font-bold underline">Download macOS Universal &rarr;</a>
  </footer>
</div>`
	}
]
