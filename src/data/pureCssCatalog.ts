import type { PreviewCanvas } from '@/data/types'

export interface PureCssSpec {
	id: string
	title: string
	category: 'Cards' | 'Pricing' | 'Forms' | 'Navigation' | 'Disclosure'
	styleTag: string
	canvas: PreviewCanvas
	html: string
}

export const PURE_CSS_SPECS: PureCssSpec[] = [
	{
		id: 'css-product-card',
		title: 'Architectural Product Card',
		category: 'Cards',
		styleTag: 'Pure CSS · Custom Properties',
		canvas: 'light',
		html: `<style>
  .dcss-prod {
    --dune-bg: #ffffff;
    --dune-surface: #faf7f2;
    --dune-ink: #161412;
    --dune-muted: #6b6259;
    --dune-border: #ddd5c7;
    --dune-accent: #b5542d;
    width: 100%;
    max-width: 620px;
    background: var(--dune-bg);
    color: var(--dune-ink);
    border: 1px solid var(--dune-border);
    box-shadow: 6px 6px 0 0 var(--dune-border);
    font-family: system-ui, -apple-system, sans-serif;
  }
  .dark .dcss-prod {
    --dune-bg: #111318;
    --dune-surface: #181b22;
    --dune-ink: #f4f4f5;
    --dune-muted: #a1a1aa;
    --dune-border: rgba(255, 255, 255, 0.14);
    box-shadow: 6px 6px 0 0 rgba(255, 255, 255, 0.08);
  }
  .dcss-prod__bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    border-bottom: 1px solid var(--dune-border);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--dune-muted);
  }
  .dcss-prod__grid {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (min-width: 540px) {
    .dcss-prod__grid {
      grid-template-columns: 5fr 7fr;
    }
  }
  .dcss-prod__media {
    background: var(--dune-surface);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--dune-border);
  }
  @media (min-width: 540px) {
    .dcss-prod__media {
      border-bottom: 0;
      border-right: 1px solid var(--dune-border);
    }
  }
  .dcss-prod__media img {
    width: 100%;
    max-width: 210px;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 6px;
    display: block;
  }
  .dcss-prod__body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;
  }
  .dcss-prod__kicker {
    margin: 0;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--dune-accent);
    font-weight: 700;
  }
  .dcss-prod__title {
    margin: 6px 0 0;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  .dcss-prod__price {
    margin: 8px 0 0;
    font-size: 24px;
    font-weight: 800;
    color: var(--dune-ink);
  }
  .dcss-prod__desc {
    margin: 10px 0 0;
    font-size: 13px;
    line-height: 1.6;
    color: var(--dune-muted);
  }
  .dcss-prod__actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .dcss-prod__btn {
    flex: 1;
    min-width: 120px;
    padding: 10px 14px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border: 1px solid var(--dune-ink);
    background: var(--dune-ink);
    color: var(--dune-bg);
    cursor: pointer;
    transition: opacity 0.18s ease;
  }
  .dcss-prod__btn:hover { opacity: 0.86; }
  .dcss-prod__btn--ghost {
    background: transparent;
    color: var(--dune-ink);
    border-color: var(--dune-border);
  }
  .dcss-prod__btn--ghost:hover { border-color: var(--dune-ink); }
</style>

<article class="dcss-prod">
  <header class="dcss-prod__bar">
    <span>&larr; Edition 04</span>
    <span>Stoneware Carafe</span>
  </header>
  <div class="dcss-prod__grid">
    <div class="dcss-prod__media">
      <img src="/images/ecommerce/carafe.jpg" alt="Hand-thrown ceramic carafe" />
    </div>
    <div class="dcss-prod__body">
      <div>
        <p class="dcss-prod__kicker">Kyoto Studio</p>
        <h2 class="dcss-prod__title">Matte Glaze Carafe</h2>
        <p class="dcss-prod__price">$85.00</p>
        <p class="dcss-prod__desc">Wheel-thrown high-fire stoneware carafe finished with raw iron-speckled matte glaze and balanced pour spout.</p>
      </div>
      <div class="dcss-prod__actions">
        <button type="button" class="dcss-prod__btn">Add to Bag</button>
        <button type="button" class="dcss-prod__btn dcss-prod__btn--ghost">Save Item</button>
      </div>
    </div>
  </div>
</article>`
	},
	{
		id: 'css-segmented-toggle',
		title: 'Zero-JS CSS Billing Switcher (:has)',
		category: 'Pricing',
		styleTag: 'Pure CSS · :has() Selector',
		canvas: 'light',
		html: `<style>
  .dcss-bill {
    --bg: #ffffff;
    --card: #f8fafc;
    --ink: #0f172a;
    --muted: #64748b;
    --border: #e2e8f0;
    --accent: #4f46e5;
    width: 100%;
    max-width: 680px;
    padding: 28px;
    border-radius: 20px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--ink);
    font-family: system-ui, -apple-system, sans-serif;
  }
  .dark .dcss-bill {
    --bg: #0c0f16;
    --card: #131722;
    --ink: #f8fafc;
    --muted: #94a3b8;
    --border: rgba(255, 255, 255, 0.14);
  }
  .dcss-bill__top {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 22px;
  }
  .dcss-bill__heading {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  .dcss-bill__switch {
    display: inline-flex;
    border: 1px solid var(--border);
    background: var(--card);
    border-radius: 999px;
    padding: 4px;
    gap: 4px;
  }
  .dcss-bill__switch label {
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    color: var(--muted);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .dcss-bill__switch input { display: none; }
  .dcss-bill__switch label:has(input:checked) {
    background: var(--accent);
    color: #ffffff;
  }
  .dcss-bill__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 14px;
  }
  .dcss-bill__tier {
    padding: 20px;
    border-radius: 14px;
    border: 1px solid var(--border);
    background: var(--card);
  }
  .dcss-bill__tier--pro {
    border-color: var(--accent);
    border-width: 2px;
  }
  .dcss-bill__name { margin: 0; font-size: 13px; font-weight: 700; }
  .dcss-bill__price { margin: 10px 0 4px; font-size: 32px; font-weight: 800; letter-spacing: -0.03em; }
  .dcss-bill__price .is-annual { display: none; }
  .dcss-bill:has(input[value="annual"]:checked) .dcss-bill__price .is-monthly { display: none; }
  .dcss-bill:has(input[value="annual"]:checked) .dcss-bill__price .is-annual { display: inline; }
  .dcss-bill__note { margin: 0; font-size: 12px; color: var(--muted); }
</style>

<section class="dcss-bill">
  <div class="dcss-bill__top">
    <h2 class="dcss-bill__heading">Pure CSS Pricing Toggle</h2>
    <div class="dcss-bill__switch">
      <label><input type="radio" name="dcss-cycle" value="monthly" checked />Monthly</label>
      <label><input type="radio" name="dcss-cycle" value="annual" />Annual (-20%)</label>
    </div>
  </div>
  <div class="dcss-bill__grid">
    <div class="dcss-bill__tier">
      <p class="dcss-bill__name">Starter</p>
      <p class="dcss-bill__price"><span class="is-monthly">$19</span><span class="is-annual">$15</span></p>
      <p class="dcss-bill__note">Per workspace / month &bull; 5 sites</p>
    </div>
    <div class="dcss-bill__tier dcss-bill__tier--pro">
      <p class="dcss-bill__name">Studio Pro</p>
      <p class="dcss-bill__price"><span class="is-monthly">$49</span><span class="is-annual">$39</span></p>
      <p class="dcss-bill__note">Per workspace / month &bull; Unlimited</p>
    </div>
  </div>
</section>`
	},
	{
		id: 'css-details-accordion',
		title: 'Accessible Native <details> Accordion',
		category: 'Disclosure',
		styleTag: 'Pure CSS · Zero JS',
		canvas: 'muted',
		html: `<style>
  .dcss-acc {
    --bg: #ffffff;
    --ink: #0f172a;
    --muted: #475569;
    --border: #e2e8f0;
    --hover: #f8fafc;
    width: 100%;
    max-width: 600px;
    border-radius: 16px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--ink);
    overflow: hidden;
    font-family: system-ui, -apple-system, sans-serif;
  }
  .dark .dcss-acc {
    --bg: #11141d;
    --ink: #f8fafc;
    --muted: #94a3b8;
    --border: rgba(255, 255, 255, 0.12);
    --hover: rgba(255, 255, 255, 0.04);
  }
  .dcss-acc details {
    border-bottom: 1px solid var(--border);
  }
  .dcss-acc details:last-child { border-bottom: 0; }
  .dcss-acc summary {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 22px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s ease;
  }
  .dcss-acc summary:hover { background: var(--hover); }
  .dcss-acc summary::-webkit-details-marker { display: none; }
  .dcss-acc__icon {
    font-family: monospace;
    font-size: 18px;
    line-height: 1;
    transition: transform 0.2s ease;
  }
  .dcss-acc details[open] .dcss-acc__icon {
    transform: rotate(45deg);
  }
  .dcss-acc__panel {
    margin: 0;
    padding: 0 22px 18px;
    font-size: 13px;
    line-height: 1.65;
    color: var(--muted);
  }
</style>

<div class="dcss-acc">
  <details open>
    <summary><span>Does Pure CSS work without Node or build tools?</span><span class="dcss-acc__icon">+</span></summary>
    <p class="dcss-acc__panel">Yes. Drop the stylesheet block into any static HTML page, Astro layout, Hugo template, or legacy PHP/Rails app with zero dependencies.</p>
  </details>
  <details>
    <summary><span>How do dark mode tokens adapt automatically?</span><span class="dcss-acc__icon">+</span></summary>
    <p class="dcss-acc__panel">Every rule reads local custom properties overridden by <code>.dark</code> or <code>@media (prefers-color-scheme: dark)</code>.</p>
  </details>
  <details>
    <summary><span>Are animations smooth without JavaScript?</span><span class="dcss-acc__icon">+</span></summary>
    <p class="dcss-acc__panel">Modern CSS transitions handle summary indicators, hover elevation, and state toggles at native 60/120fps.</p>
  </details>
</div>`
	},
	{
		id: 'css-glass-pricing',
		title: 'Liquid Glass Subscription Card',
		category: 'Pricing',
		styleTag: 'Pure CSS · Glassmorphism',
		canvas: 'mesh',
		html: `<style>
  .dcss-glass {
    width: 100%;
    max-width: 390px;
    padding: 28px;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.28);
    background: rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);
    color: #ffffff;
    box-shadow: 0 24px 48px -12px rgba(2, 6, 23, 0.45);
    font-family: system-ui, -apple-system, sans-serif;
  }
  [data-theme="light"] .dcss-glass {
    color: #0f172a;
    border-color: rgba(15, 23, 42, 0.14);
    background: rgba(255, 255, 255, 0.72);
  }
  .dcss-glass__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .dcss-glass__badge {
    padding: 4px 10px;
    border-radius: 999px;
    background: rgba(34, 211, 238, 0.2);
    border: 1px solid rgba(34, 211, 238, 0.45);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .dcss-glass__price {
    margin: 18px 0 6px;
    font-size: 42px;
    font-weight: 800;
    letter-spacing: -0.03em;
  }
  .dcss-glass__price span { font-size: 13px; font-weight: 500; opacity: 0.75; }
  .dcss-glass__list {
    list-style: none;
    padding: 18px 0 0;
    margin: 18px 0 22px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    display: grid;
    gap: 10px;
    font-size: 13px;
  }
  [data-theme="light"] .dcss-glass__list { border-top-color: rgba(15, 23, 42, 0.1); }
  .dcss-glass__cta {
    display: block;
    width: 100%;
    padding: 12px;
    border-radius: 999px;
    border: 0;
    background: #ffffff;
    color: #090d16;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.15s ease;
  }
  [data-theme="light"] .dcss-glass__cta { background: #0f172a; color: #ffffff; }
  .dcss-glass__cta:hover { transform: translateY(-1px); }
</style>

<div class="dcss-glass">
  <div class="dcss-glass__top">
    <strong>Spatial Pro</strong>
    <span class="dcss-glass__badge">Most Popular</span>
  </div>
  <p class="dcss-glass__price">$29 <span>/ month</span></p>
  <p style="margin:0;font-size:13px;opacity:0.8;">End-to-end encrypted edge workspace with unlimited deployments.</p>
  <ul class="dcss-glass__list">
    <li>&#10003; Unlimited private repositories</li>
    <li>&#10003; 1 TB global CDN egress</li>
    <li>&#10003; Custom SSL &amp; SAML Single Sign-On</li>
  </ul>
  <a href="#" class="dcss-glass__cta">Start 14-Day Trial &rarr;</a>
</div>`
	},
	{
		id: 'css-command-search',
		title: 'CSS Command Search Input (:focus-within)',
		category: 'Navigation',
		styleTag: 'Pure CSS · Focus Ring',
		canvas: 'light',
		html: `<style>
  .dcss-cmd {
    --bg: #ffffff;
    --ink: #0f172a;
    --muted: #64748b;
    --border: #cbd5e1;
    --kbd: #f1f5f9;
    --ring: rgba(79, 70, 229, 0.22);
    width: 100%;
    max-width: 480px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    border-radius: 14px;
    border: 1.5px solid var(--border);
    background: var(--bg);
    color: var(--ink);
    font-family: system-ui, -apple-system, sans-serif;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }
  .dark .dcss-cmd {
    --bg: #11151f;
    --ink: #f8fafc;
    --muted: #94a3b8;
    --border: rgba(255, 255, 255, 0.18);
    --kbd: rgba(255, 255, 255, 0.1);
  }
  .dcss-cmd:focus-within {
    border-color: #6366f1;
    box-shadow: 0 0 0 4px var(--ring);
  }
  .dcss-cmd input {
    flex: 1;
    border: 0;
    background: transparent;
    color: inherit;
    font-size: 14px;
    outline: none;
  }
  .dcss-cmd input::placeholder { color: var(--muted); }
  .dcss-cmd kbd {
    padding: 3px 8px;
    border-radius: 6px;
    background: var(--kbd);
    color: var(--muted);
    font-family: ui-monospace, monospace;
    font-size: 11px;
    font-weight: 700;
  }
</style>

<label class="dcss-cmd">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
  <input type="search" placeholder="Search pure CSS tokens, cards, buttons..." />
  <kbd>&#8984;K</kbd>
</label>`
	},
	{
		id: 'css-container-profile',
		title: 'Container-Query Author & KPI Card',
		category: 'Cards',
		styleTag: 'Pure CSS · @container',
		canvas: 'dark',
		html: `<style>
  .dcss-cq-wrap {
    container-type: inline-size;
    width: 100%;
    max-width: 520px;
  }
  .dcss-cq {
    --bg: #ffffff;
    --ink: #0f172a;
    --muted: #64748b;
    --border: #e2e8f0;
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 22px;
    border-radius: 18px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--ink);
    font-family: system-ui, -apple-system, sans-serif;
  }
  .dark .dcss-cq {
    --bg: #12151f;
    --ink: #f8fafc;
    --muted: #a1a1aa;
    --border: rgba(255, 255, 255, 0.14);
  }
  @container (min-width: 420px) {
    .dcss-cq {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  .dcss-cq__user { display: flex; align-items: center; gap: 14px; }
  .dcss-cq__user img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
  .dcss-cq__name { margin: 0; font-size: 15px; font-weight: 700; }
  .dcss-cq__role { margin: 2px 0 0; font-size: 12px; color: var(--muted); }
  .dcss-cq__stats { display: flex; gap: 20px; }
  .dcss-cq__num { margin: 0; font-size: 18px; font-weight: 800; font-family: ui-monospace, monospace; }
  .dcss-cq__lbl { margin: 0; font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); }
</style>

<div class="dcss-cq-wrap">
  <article class="dcss-cq">
    <div class="dcss-cq__user">
      <img src="/images/avatars/sofia.jpg" alt="Sofia Lindholm" />
      <div>
        <h3 class="dcss-cq__name">Sofia Lindholm</h3>
        <p class="dcss-cq__role">Design Systems Lead</p>
      </div>
    </div>
    <div class="dcss-cq__stats">
      <div><p class="dcss-cq__num">142</p><p class="dcss-cq__lbl">PRs</p></div>
      <div><p class="dcss-cq__num" style="color:#10b981;">99.8%</p><p class="dcss-cq__lbl">Uptime</p></div>
    </div>
  </article>
</div>`
	},
	{
		id: 'css-newsletter-form',
		title: 'Validated CSS Waitlist Form (:user-invalid)',
		category: 'Forms',
		styleTag: 'Pure CSS · Native Validation',
		canvas: 'light',
		html: `<style>
  .dcss-form {
    --bg: #ffffff;
    --ink: #0f172a;
    --muted: #64748b;
    --border: #cbd5e1;
    width: 100%;
    max-width: 440px;
    padding: 24px;
    border-radius: 18px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--ink);
    font-family: system-ui, -apple-system, sans-serif;
  }
  .dark .dcss-form {
    --bg: #11141c;
    --ink: #f8fafc;
    --muted: #94a3b8;
    --border: rgba(255, 255, 255, 0.16);
  }
  .dcss-form h3 { margin: 0 0 6px; font-size: 17px; font-weight: 700; }
  .dcss-form p { margin: 0 0 16px; font-size: 13px; color: var(--muted); }
  .dcss-form__row { display: flex; flex-wrap: wrap; gap: 8px; }
  .dcss-form__input {
    flex: 1;
    min-width: 180px;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: transparent;
    color: inherit;
    font-size: 13px;
    outline: none;
  }
  .dcss-form__input:focus { border-color: #4f46e5; }
  .dcss-form__input:user-invalid { border-color: #e11d48; }
  .dcss-form__btn {
    padding: 10px 18px;
    border-radius: 10px;
    border: 0;
    background: var(--ink);
    color: var(--bg);
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  }
</style>

<form class="dcss-form">
  <h3>Release Notes Digest</h3>
  <p>Zero fluff &mdash; bi-weekly CSS &amp; architecture tokens straight to your inbox.</p>
  <div class="dcss-form__row">
    <input type="email" required placeholder="engineer@studio.dev" class="dcss-form__input" />
    <button type="submit" class="dcss-form__btn">Subscribe</button>
  </div>
</form>`
	},
	{
		id: 'css-status-toast',
		title: 'Semantic Notification Toast Banner',
		category: 'Disclosure',
		styleTag: 'Pure CSS · Status Tokens',
		canvas: 'muted',
		html: `<style>
  .dcss-toast {
    --bg: #ffffff;
    --ink: #0f172a;
    --muted: #475569;
    --border: #e2e8f0;
    width: 100%;
    max-width: 460px;
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 16px 18px;
    border-radius: 14px;
    border: 1px solid var(--border);
    border-left: 4px solid #10b981;
    background: var(--bg);
    color: var(--ink);
    box-shadow: 0 14px 30px -12px rgba(15, 23, 42, 0.14);
    font-family: system-ui, -apple-system, sans-serif;
  }
  .dark .dcss-toast {
    --bg: #131722;
    --ink: #f8fafc;
    --muted: #94a3b8;
    --border: rgba(255, 255, 255, 0.14);
  }
  .dcss-toast__dot {
    margin-top: 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #10b981;
    flex-shrink: 0;
  }
  .dcss-toast__title { margin: 0; font-size: 13px; font-weight: 700; }
  .dcss-toast__msg { margin: 3px 0 0; font-size: 12px; color: var(--muted); line-height: 1.5; }
</style>

<div role="status" class="dcss-toast">
  <span class="dcss-toast__dot"></span>
  <div>
    <p class="dcss-toast__title">Production build deployed to 34 regions</p>
    <p class="dcss-toast__msg">Commit <code>a94f21c</code> passed 148 Playwright checks with 0 KB runtime overhead.</p>
  </div>
</div>`
	}
]
