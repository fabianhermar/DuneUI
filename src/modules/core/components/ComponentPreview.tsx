"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  Eye,
  Code,
  Smartphone,
  Tablet,
  Monitor,
  Maximize,
  Check,
  Copy,
  Sun,
  Moon,
  Sparkles,
  Square,
} from "lucide-react";
import type { PreviewCanvas } from "@/data/types";
import { stripPreviewScripts } from "@/lib/htmlUtils";

interface ComponentPreviewProps {
  title: string;
  styleTag?: string;
  defaultCanvas?: PreviewCanvas;
  htmlCode: string;
  eager?: boolean;
  children?: ReactNode;
}

const FRAME_BORDERS: Record<PreviewCanvas, string> = {
  light: "border-rule-strong bg-white",
  muted: "border-slate-300 bg-slate-100",
  dark: "border-zinc-700/80 bg-[#090B10]",
  mesh: "border-white/20 bg-slate-950",
};

const CANVAS_STAGE_STYLE: Record<PreviewCanvas, string> = {
  light: "background: #ffffff; color: #0f172a;",
  muted: "background: #f1f5f9; color: #0f172a;",
  dark: "background: #090B10; color: #f4f4f5;",
  mesh: "background-color: #090B10; background-image: radial-gradient(circle at 18% 22%, rgba(56,189,248,0.34), transparent 48%), radial-gradient(circle at 82% 76%, rgba(232,121,249,0.3), transparent 46%), linear-gradient(135deg, #020617 0%, #1e1b4b 52%, #4a044e 100%); color: #ffffff;",
};

/** Update stage theme classes and attributes in-place without reloading the iframe document. */
function applyStageTheme(doc: Document, mode: PreviewCanvas) {
  const isDark = mode === "dark" || mode === "mesh";
  doc.documentElement.classList.toggle("dark", isDark);
  doc.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  const stage = doc.getElementById("dune-stage");
  if (stage) {
    stage.classList.toggle("dark", isDark);
    stage.setAttribute("data-stage", mode);
  }
}

export default function ComponentPreview({
  title,
  styleTag,
  defaultCanvas = "light",
  htmlCode,
  eager = false,
  children,
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [viewport, setViewport] = useState<"mobile" | "sm" | "md" | "lg" | "full">("full");
  const [canvas, setCanvas] = useState<PreviewCanvas>(defaultCanvas);
  const [copy, setCopy] = useState(false);
  const [frameHeight, setFrameHeight] = useState(260);
  const [shouldMountFrame, setShouldMountFrame] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const initialCanvasRef = useRef<PreviewCanvas>(defaultCanvas);
  const canvasRef = useRef<PreviewCanvas>(canvas);
  canvasRef.current = canvas;

  const cleanHtmlCode = useMemo(() => stripPreviewScripts(htmlCode), [htmlCode]);

  // Defer iframe document creation and stylesheet injection until near the viewport
  useEffect(() => {
    if (shouldMountFrame) return;
    if (eager) {
      setShouldMountFrame(true);
      return;
    }

    const target = containerRef.current;
    if (!target || typeof IntersectionObserver === "undefined") {
      setShouldMountFrame(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldMountFrame(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [eager, shouldMountFrame]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard?.writeText(cleanHtmlCode);
    } catch {
      // Clipboard write may be blocked in non-secure or permission-denied contexts
    }
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  const viewportWidths = {
    mobile: "375px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    full: "100%",
  };

  const srcDoc = useMemo(() => {
    if (!shouldMountFrame || typeof document === "undefined") return "";
    const initialCanvas = initialCanvasRef.current;
    const isInitialDark = initialCanvas === "dark" || initialCanvas === "mesh";
    const styleTags = Array.from(
      document.querySelectorAll('link[rel="stylesheet"], style')
    )
      .map((node) => node.outerHTML)
      .join("\n");

    return `<!doctype html>
<html lang="en"${isInitialDark ? ' class="dark" data-theme="dark"' : ' data-theme="light"'}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${styleTags}
    <style>
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        min-height: 0 !important;
        overflow: hidden !important;
        overflow-anchor: none !important;
        background: transparent !important;
        background-color: transparent !important;
      }
      #dune-stage {
        min-height: 260px;
        width: 100%;
        box-sizing: border-box;
        padding: 28px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-anchor: none;
        transition: background-color 160ms ease, color 160ms ease;
      }
      #dune-stage[data-stage="light"] { ${CANVAS_STAGE_STYLE.light} }
      #dune-stage[data-stage="muted"] { ${CANVAS_STAGE_STYLE.muted} }
      #dune-stage[data-stage="dark"] { ${CANVAS_STAGE_STYLE.dark} }
      #dune-stage[data-stage="mesh"] { ${CANVAS_STAGE_STYLE.mesh} }
      #dune-stage:has(details, [aria-expanded], [role="menu"], [role="listbox"], [role="tabpanel"]) {
        align-items: flex-start;
      }
      @supports (interpolate-size: allow-keywords) {
        #dune-stage {
          interpolate-size: allow-keywords;
        }
        #dune-stage details:not(:has(.absolute))::details-content {
          transition: height 200ms cubic-bezier(0.22, 1, 0.36, 1), opacity 160ms ease-out, content-visibility 200ms allow-discrete;
          height: 0;
          opacity: 0;
          overflow: hidden;
        }
        #dune-stage details[open]:not(:has(.absolute))::details-content {
          height: auto;
          opacity: 1;
        }
      }
      @media (min-width: 640px) {
        #dune-stage { padding: 36px 28px; }
      }
      #dune-mount {
        width: 100%;
        min-width: 0;
        display: flex;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div id="dune-stage" data-stage="${initialCanvas}"${isInitialDark ? ' class="dark"' : ""}>
      <div id="dune-mount">${htmlCode}</div>
    </div>
  </body>
</html>`;
  }, [htmlCode, shouldMountFrame]);

  // Switch between light/muted/dark/mesh strictly via DOM classes/attributes (zero iframe reload)
  useEffect(() => {
    const doc = iframeRef.current?.contentDocument;
    if (doc) {
      applyStageTheme(doc, canvas);
    }
  }, [canvas]);

  useEffect(() => {
    if (!shouldMountFrame) return;
    const iframe = iframeRef.current;
    if (!iframe) return;

    let observer: ResizeObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    let rafId = 0;
    let stateTimer: ReturnType<typeof setTimeout> | null = null;
    let mountedDoc: Document | null = null;

    const measure = () => {
      try {
        const doc = iframe.contentDocument;
        const stage = doc?.getElementById("dune-stage");
        if (!stage) return;
        const rect = stage.getBoundingClientRect();
        if (rect.width === 0) return;
        const nextHeight = Math.max(
          260,
          Math.ceil(rect.height),
          Math.ceil(stage.scrollHeight)
        );
        const nextPx = `${nextHeight}px`;
        if (iframe.style.height !== nextPx) {
          iframe.style.height = nextPx;
        }
        if (doc?.defaultView && doc.defaultView.scrollY !== 0) {
          doc.defaultView.scrollTo(0, 0);
        }
        if (stateTimer) clearTimeout(stateTimer);
        stateTimer = setTimeout(() => {
          setFrameHeight((prev) => (prev === nextHeight ? prev : nextHeight));
        }, 60);
      } catch {
        // Ignore transient document states
      }
    };

    const scheduleMicroMeasure = () => {
      queueMicrotask(measure);
    };

    const handleLoad = () => {
      const doc = iframe.contentDocument;
      if (doc) {
        applyStageTheme(doc, canvasRef.current);
      }
      measure();
      rafId = requestAnimationFrame(measure);
      try {
        const stage = doc?.getElementById("dune-stage");
        const mount = doc?.getElementById("dune-mount");
        if (doc && mountedDoc !== doc) {
          mountedDoc?.removeEventListener("toggle", measure, true);
          mountedDoc?.removeEventListener("click", scheduleMicroMeasure, true);
          doc.addEventListener("toggle", measure, true);
          doc.addEventListener("click", scheduleMicroMeasure, true);
          mountedDoc = doc;
        }
        if (mount && "MutationObserver" in window) {
          mutationObserver?.disconnect();
          mutationObserver = new MutationObserver(measure);
          mutationObserver.observe(mount, {
            attributes: true,
            attributeFilter: ["open", "aria-expanded", "class", "style", "hidden"],
            childList: true,
            subtree: true,
          });
        }
        if (stage && "ResizeObserver" in window) {
          observer?.disconnect();
          observer = new ResizeObserver(measure);
          observer.observe(stage);
          if (mount) observer.observe(mount);
        }
      } catch {
        // Ignore
      }
    };

    iframe.addEventListener("load", handleLoad);
    const t = setTimeout(measure, 120);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      mountedDoc?.removeEventListener("toggle", measure, true);
      mountedDoc?.removeEventListener("click", scheduleMicroMeasure, true);
      if (mutationObserver) mutationObserver.disconnect();
      if (observer) observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      if (stateTimer) clearTimeout(stateTimer);
      clearTimeout(t);
    };
  }, [srcDoc, shouldMountFrame]);

  useEffect(() => {
    if (activeTab !== "preview") return;
    const raf = requestAnimationFrame(() => {
      const doc = iframeRef.current?.contentDocument;
      const stage = doc?.getElementById("dune-stage");
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      if (rect.width === 0) return;
      const nextHeight = Math.max(
        260,
        Math.ceil(rect.height),
        Math.ceil(stage.scrollHeight)
      );
      setFrameHeight((prev) => (prev === nextHeight ? prev : nextHeight));
    });
    return () => cancelAnimationFrame(raf);
  }, [viewport, activeTab]);

  return (
    <div ref={containerRef} className="flex flex-col gap-5 mb-14">
      {/* Architectural Workbench Header */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 lg:gap-4 border-b border-rule pb-4">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-2.5 min-w-0 flex-1">
          <span className="size-2 bg-clay shrink-0" aria-hidden="true" />
          <h2
            className="font-heading text-lg xl:text-xl font-bold text-ink tracking-tight lg:truncate min-w-0"
            title={title}
          >
            {title}
          </h2>
          {styleTag && (
            <span className="border border-rule bg-paper-elevated px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-clay shrink-0 whitespace-nowrap">
              {styleTag}
            </span>
          )}
        </div>

        <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 shrink-0">
          {/* Backdrop Surface Switcher */}
          <div className="flex items-center border border-rule bg-paper-elevated p-0.5" title="Stage Backdrop">
            {(
              [
                { id: "light", label: "Light stage", Icon: Sun },
                { id: "muted", label: "Muted stage", Icon: Square },
                { id: "dark", label: "Dark stage", Icon: Moon },
                { id: "mesh", label: "Aurora mesh stage", Icon: Sparkles },
              ] as const
            ).map(({ id, label, Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setCanvas(id);
                  setActiveTab("preview");
                }}
                className={`flex items-center justify-center w-7 h-7 cursor-pointer transition-colors ${
                  canvas === id
                    ? "bg-ink text-paper-elevated"
                    : "text-ink-muted hover:text-ink hover:bg-paper-recessed"
                }`}
                title={label}
                aria-label={label}
              >
                <Icon className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>

          {/* Viewport Segmented Control */}
          <div className="flex items-center border border-rule bg-paper-elevated p-0.5">
            {(["mobile", "sm", "md", "lg", "full"] as const).map((size) => {
              const Icon =
                size === "mobile"
                  ? Smartphone
                  : size === "sm"
                    ? Tablet
                    : size === "md"
                      ? Monitor
                      : Maximize;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    setViewport(size);
                    setActiveTab("preview");
                  }}
                  className={`flex items-center justify-center w-7 h-7 cursor-pointer transition-colors ${
                    viewport === size
                      ? "bg-ink text-paper-elevated"
                      : "text-ink-muted hover:text-ink hover:bg-paper-recessed"
                  }`}
                  title={size.toUpperCase()}
                  aria-label={size.toUpperCase()}
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              );
            })}
          </div>

          {/* Toggle Code / Preview */}
          <div className="flex items-center border border-rule bg-paper-elevated p-0.5">
            <button
              type="button"
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === "preview"
                  ? "bg-ink text-paper-elevated"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <Eye className="w-3.5 h-3.5" /> Preview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === "code"
                  ? "bg-ink text-paper-elevated"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <Code className="w-3.5 h-3.5" /> Code
            </button>
          </div>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-paper-elevated bg-clay hover:bg-clay-deep transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {copy ? (
              <>
                <Check className="w-3.5 h-3.5" /> Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Specimen Canvas */}
      <div
        className="border border-rule bg-paper-elevated relative overflow-hidden shadow-[4px_4px_0_0_#DDD5C7]"
        style={{ minHeight: "300px", overflowAnchor: "none" }}
      >
        {activeTab === "preview" && (
          <div className="arch-dots-bg absolute inset-0 pointer-events-none opacity-65" />
        )}

        <div
          className={
            activeTab === "preview"
              ? "w-full flex items-stretch justify-center p-3 sm:p-7 min-h-[300px] relative z-10 overflow-x-auto"
              : "hidden"
          }
          aria-hidden={activeTab !== "preview"}
        >
          <div
            className={`border transition-[width] duration-300 ease-out flex shadow-sm relative overflow-hidden max-w-full ${FRAME_BORDERS[canvas]}`}
            style={{ width: viewportWidths[viewport] }}
          >
            {shouldMountFrame ? (
              <iframe
                ref={iframeRef}
                title={title}
                srcDoc={srcDoc}
                sandbox="allow-scripts allow-same-origin allow-forms"
                className="w-full border-0 block"
                style={{ height: `${frameHeight}px` }}
              />
            ) : (
              <div
                aria-label={`${title} preview loading`}
                className="w-full flex items-center justify-center font-mono text-[11px] uppercase tracking-widest opacity-50"
                style={{ height: `${frameHeight}px` }}
              >
                Loading preview…
              </div>
            )}
          </div>
        </div>

        <div
          className={
            activeTab === "code"
              ? "w-full relative z-10 text-sm h-full max-h-[600px] overflow-y-auto bg-obsidian"
              : "hidden"
          }
          aria-hidden={activeTab !== "code"}
        >
          {children ? (
            <div className="dune-code-slot">{children}</div>
          ) : (
            <pre className="p-7 font-mono text-[13px] leading-relaxed text-slate-100 overflow-x-auto min-h-[300px] m-0">
              <code>{cleanHtmlCode}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
