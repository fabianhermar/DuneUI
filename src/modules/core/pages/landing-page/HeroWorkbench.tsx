import { useState } from "react";
import { Check, Copy, Code2, Eye, Search, ArrowUpRight, SlidersHorizontal, Layers, Sparkles } from "lucide-react";

type SpecimenId = "command" | "controls" | "pricing";
type SurfaceTheme = "paper" | "obsidian";

const SNIPPETS: Record<SpecimenId, string> = {
  command: `<div class="border border-[#DDD5C7] bg-[#FAF7F2] p-2">
  <div class="flex items-center gap-2 border-b border-[#DDD5C7] px-3 py-2">
    <input placeholder="Jump to specimen..." class="w-full bg-transparent text-sm outline-none" />
    <kbd class="border border-[#DDD5C7] px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
  </div>
  <button class="mt-1 flex w-full items-center justify-between px-3 py-2 text-left hover:bg-[#EAE3D7]">
    <span class="text-sm font-medium">Accordion / Native Disclosure</span>
    <span class="font-mono text-[11px] text-[#B5542D]">01 →</span>
  </button>
</div>`,
  controls: `<div class="border border-[#DDD5C7] bg-[#FAF7F2] p-5 space-y-4">
  <div class="flex items-center justify-between">
    <span class="font-mono text-xs uppercase tracking-widest">Density</span>
    <div class="inline-flex border border-[#DDD5C7] bg-[#F5F1EA] p-0.5">
      <button class="bg-[#161412] px-3 py-1 font-mono text-xs text-[#FAF7F2]">Compact</button>
      <button class="px-3 py-1 font-mono text-xs text-[#574F47]">Editorial</button>
    </div>
  </div>
</div>`,
  pricing: `<article class="border border-[#161412] bg-[#151311] p-6 text-[#FAF7F2]">
  <span class="font-mono text-[10px] uppercase tracking-widest text-[#C9955B]">STUDIO TIER</span>
  <div class="mt-3 flex items-baseline gap-1">
    <span class="font-heading text-4xl font-bold">$0</span>
    <span class="font-mono text-xs text-[#857B70]">/ forever</span>
  </div>
</article>`,
};

const COMMAND_ITEMS = [
  { id: "01", title: "Accordion Disclosure", tag: "HTML + TW4", href: "/components/accordion" },
  { id: "02", title: "Contextual Alerts", tag: "Feedback", href: "/components/alerts" },
  { id: "03", title: "Tactile Buttons", tag: "Actions", href: "/components/buttons" },
  { id: "04", title: "Editorial Cards", tag: "Containers", href: "/components/cards" },
];

export default function HeroWorkbench() {
  const [activeTab, setActiveTab] = useState<SpecimenId>("command");
  const [viewMode, setViewMode] = useState<"live" | "code">("live");
  const [surface, setSurface] = useState<SurfaceTheme>("paper");
  const [copied, setCopied] = useState(false);

  // Interactive specimen states
  const [query, setQuery] = useState("");
  const [selectedCmd, setSelectedCmd] = useState("01");
  const [density, setDensity] = useState<"compact" | "editorial">("editorial");
  const [autoTokens, setAutoTokens] = useState(true);
  const [strictGrid, setStrictGrid] = useState(true);
  const [billing, setBilling] = useState<"annual" | "monthly">("annual");

  const filteredCommands = COMMAND_ITEMS.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.tag.toLowerCase().includes(query.toLowerCase())
  );

  const handleCopy = () => {
    navigator.clipboard?.writeText(SNIPPETS[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const isDark = surface === "obsidian";

  return (
    <div className="relative border border-rule bg-paper-elevated shadow-[6px_6px_0_0_#DDD5C7]">
      {/* Architectural Crosshair Corners */}
      <span aria-hidden="true" className="pointer-events-none absolute -left-2 -top-2 font-mono text-xs text-clay">+</span>
      <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-2 font-mono text-xs text-clay">+</span>
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-2 -left-2 font-mono text-xs text-clay">+</span>
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-2 -right-2 font-mono text-xs text-clay">+</span>

      {/* Top Drafting Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule bg-paper px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="size-2 bg-clay" aria-hidden="true" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink">
            SPECIMEN WORKBENCH
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
          <span>TW v4.3</span>
          <span>/</span>
          <button
            type="button"
            onClick={() => setSurface(isDark ? "paper" : "obsidian")}
            className="cursor-pointer border border-rule bg-paper-elevated px-2 py-0.5 text-ink transition-colors hover:border-ink"
          >
            SURFACE: {isDark ? "OBSIDIAN" : "LIMESTONE"}
          </button>
        </div>
      </div>

      {/* Specimen Selector Tabs */}
      <div className="flex items-center justify-between border-b border-rule bg-paper-elevated px-3 pt-2.5">
        <div className="flex items-center gap-1 overflow-x-auto">
          {[
            { id: "command" as const, num: "01", label: "Command" },
            { id: "controls" as const, num: "02", label: "Controls" },
            { id: "pricing" as const, num: "03", label: "Card" },
          ].map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer border-b-2 px-3 pb-2.5 pt-1 font-mono text-xs transition-colors ${
                  active
                    ? "border-clay font-semibold text-ink"
                    : "border-transparent text-ink-muted hover:text-ink"
                }`}
              >
                <span className="mr-1.5 text-[10px] text-clay">{tab.num}</span>
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mb-2 flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setViewMode(viewMode === "live" ? "code" : "live")}
            className="inline-flex cursor-pointer items-center gap-1.5 border border-rule bg-paper px-2.5 py-1 font-mono text-[11px] text-ink-secondary transition-colors hover:border-ink hover:text-ink"
          >
            {viewMode === "live" ? (
              <>
                <Code2 className="size-3.5" />
                <span>Code</span>
              </>
            ) : (
              <>
                <Eye className="size-3.5" />
                <span>Live</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex cursor-pointer items-center gap-1 border border-ink bg-ink px-2.5 py-1 font-mono text-[11px] text-paper-elevated transition-colors hover:bg-clay hover:border-clay"
          >
            {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>

      {/* Interactive Canvas */}
      <div
        className={`relative min-h-[340px] p-5 sm:p-7 transition-colors duration-300 ${
          isDark
            ? "bg-obsidian text-paper-elevated"
            : "arch-dots-bg bg-paper text-ink"
        }`}
      >
        {viewMode === "code" ? (
          <pre className="overflow-x-auto border border-rule/30 bg-obsidian p-4 font-mono text-xs leading-relaxed text-[#E9DFD1]">
            <code>{SNIPPETS[activeTab]}</code>
          </pre>
        ) : (
          <>
            {activeTab === "command" && (
              <div
                className={`border transition-colors ${
                  isDark
                    ? "border-white/15 bg-obsidian-soft text-paper-elevated"
                    : "border-rule-strong bg-paper-elevated text-ink shadow-sm"
                }`}
              >
                <div
                  className={`flex items-center gap-2.5 border-b px-3.5 py-3 ${
                    isDark ? "border-white/10" : "border-rule"
                  }`}
                >
                  <Search className="size-4 shrink-0 text-clay" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Filter live components..."
                    aria-label="Filter live components"
                    className="w-full bg-transparent font-accent text-sm outline-none placeholder:text-ink-muted"
                  />
                  <kbd
                    className={`border px-1.5 py-0.5 font-mono text-[10px] ${
                      isDark ? "border-white/15 text-sand" : "border-rule text-ink-muted"
                    }`}
                  >
                    ⌘K
                  </kbd>
                </div>

                <div className="divide-y divide-rule/60 p-1.5">
                  {filteredCommands.length > 0 ? (
                    filteredCommands.map((item) => {
                      const isSelected = selectedCmd === item.id;
                      return (
                        <a
                          key={item.id}
                          href={item.href}
                          onMouseEnter={() => setSelectedCmd(item.id)}
                          className={`flex items-center justify-between px-3 py-2.5 transition-colors ${
                            isSelected
                              ? isDark
                                ? "bg-white/10 text-paper-elevated"
                                : "bg-paper-recessed/80 text-ink"
                              : "hover:bg-paper-recessed/40"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[10px] text-clay">{item.id}</span>
                            <span className="font-accent text-sm font-medium">{item.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`border px-2 py-0.5 font-mono text-[10px] uppercase ${
                                isDark
                                  ? "border-white/15 text-sand"
                                  : "border-rule bg-paper text-ink-muted"
                              }`}
                            >
                              {item.tag}
                            </span>
                            <ArrowUpRight className="size-3.5 text-clay" />
                          </div>
                        </a>
                      );
                    })
                  ) : (
                    <div className="px-3 py-6 text-center font-mono text-xs text-ink-muted">
                      No specimen matches "{query}"
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "controls" && (
              <div
                className={`space-y-5 border p-5 ${
                  isDark
                    ? "border-white/15 bg-obsidian-soft"
                    : "border-rule-strong bg-paper-elevated"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="size-4 text-clay" />
                    <span className="font-heading text-base font-semibold">
                      Grid & Token Calibration
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-clay">
                    LIVE STATE
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-rule/40 pt-4">
                  <div>
                    <p className="font-accent text-sm font-medium">Layout Rhythm</p>
                    <p className="font-mono text-[11px] text-ink-muted">
                      --spacing-unit: {density === "compact" ? "4px" : "8px"}
                    </p>
                  </div>
                  <div className="inline-flex border border-rule bg-paper p-0.5 text-ink">
                    {(["compact", "editorial"] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setDensity(mode)}
                        className={`cursor-pointer px-3 py-1 font-mono text-[11px] uppercase transition-colors ${
                          density === mode
                            ? "bg-ink text-paper-elevated"
                            : "text-ink-muted hover:text-ink"
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 border-t border-rule/40 pt-4">
                  {[
                    {
                      label: "CSS Custom Properties",
                      meta: "Zero JS runtime",
                      value: autoTokens,
                      toggle: () => setAutoTokens(!autoTokens),
                    },
                    {
                      label: "Architectural 1px Rules",
                      meta: "Swiss hairline borders",
                      value: strictGrid,
                      toggle: () => setStrictGrid(!strictGrid),
                    },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between">
                      <div>
                        <p className="font-accent text-sm font-medium">{row.label}</p>
                        <p className="font-mono text-[11px] text-ink-muted">{row.meta}</p>
                      </div>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={row.value}
                        onClick={row.toggle}
                        className={`relative h-6 w-11 cursor-pointer border transition-colors ${
                          row.value
                            ? "border-clay bg-clay"
                            : "border-rule-strong bg-paper-recessed"
                        }`}
                      >
                        <span
                          className={`block size-4 bg-paper-elevated transition-transform ${
                            row.value ? "translate-x-5.5" : "translate-x-0.5"
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "pricing" && (
              <div
                className={`border p-6 transition-all ${
                  isDark
                    ? "border-sand/30 bg-obsidian-soft text-paper-elevated"
                    : "border-ink bg-obsidian text-paper-elevated"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-sand">
                    <Sparkles className="size-3" />
                    COMMERCIAL & PERSONAL
                  </span>
                  <div className="inline-flex border border-white/15 p-0.5">
                    {(["annual", "monthly"] as const).map((cycle) => (
                      <button
                        key={cycle}
                        type="button"
                        onClick={() => setBilling(cycle)}
                        className={`cursor-pointer px-2 py-0.5 font-mono text-[10px] uppercase ${
                          billing === cycle
                            ? "bg-clay text-paper-elevated"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        {cycle}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-heading text-5xl font-bold tracking-tight">
                    $0
                  </span>
                  <span className="font-mono text-xs text-white/60">
                    / {billing === "annual" ? "year · forever" : "month · forever"}
                  </span>
                </div>

                <p className="mt-3 font-accent text-sm leading-relaxed text-white/75">
                  Copy raw Tailwind v4 or Pure CSS blocks directly into client, SaaS, or open-source builds.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-4 font-mono text-[11px] text-white/80">
                  <span className="flex items-center gap-1.5">
                    <Layers className="size-3.5 text-sand" /> 12+ Categories
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="size-3.5 text-sand" /> Zero Attribution
                  </span>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Bottom Coordinate Ruler */}
      <div className="flex items-center justify-between border-t border-rule bg-paper px-4 py-2 font-mono text-[10px] text-ink-muted">
        <span>FIG. 00 — INTERACTIVE SPECIMEN</span>
        <span>CLICK TO TEST LIVE STATES</span>
      </div>
    </div>
  );
}
