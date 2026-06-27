"use client";

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CheckIcon from "@/core/design-system/Icons/CheckIcon";
import CopyIcon from "@/core/design-system/Icons/CopyIcon";
import { Eye, Code, Smartphone, Tablet, Monitor, Maximize } from "lucide-react";

interface ComponentPreviewProps {
  title: string;
  htmlCode: string;
}

export default function ComponentPreview({
  title,
  htmlCode,
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [viewport, setViewport] = useState<"mobile" | "sm" | "md" | "lg" | "full">("full");
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlCode);
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

  return (
    <div className="flex flex-col gap-5 mb-16">
      {/* Sleek External Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-1">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 tracking-tight">{title}</h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Viewport Segmented Control */}
          <div className="flex items-center p-0.5 bg-gray-100/80 rounded-lg border border-gray-200/60 shadow-sm">
            {(["mobile", "sm", "md", "lg", "full"] as const).map((size) => {
              const Icon = size === "mobile" ? Smartphone : size === "sm" ? Tablet : size === "md" ? Monitor : Maximize;
              return (
                <button
                  key={size}
                  onClick={() => { setViewport(size); setActiveTab("preview"); }}
                  className={`flex items-center justify-center w-8 h-7 rounded-md transition-all duration-200 ${
                    viewport === size 
                      ? "bg-white text-gray-900 shadow-sm ring-1 ring-black/5" 
                      : "text-gray-400 hover:text-gray-700 hover:bg-gray-200/50"
                  }`}
                  title={size.toUpperCase()}
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              );
            })}
          </div>

          <div className="h-5 w-px bg-gray-200 hidden sm:block"></div>

          {/* Toggle Code / Preview */}
          <div className="flex items-center p-0.5 bg-gray-100/80 rounded-lg border border-gray-200/60 shadow-sm">
             <button
                onClick={() => setActiveTab("preview")}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${activeTab === "preview" ? "bg-white text-gray-900 shadow-sm ring-1 ring-black/5" : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50"}`}
             >
                <Eye className="w-3.5 h-3.5" /> Preview
             </button>
             <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${activeTab === "code" ? "bg-white text-gray-900 shadow-sm ring-1 ring-black/5" : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50"}`}
             >
                <Code className="w-3.5 h-3.5" /> Code
             </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 h-8 text-xs font-medium text-white bg-gray-900 rounded-lg hover:bg-black transition-all duration-200 active:scale-95 shadow-sm ml-1"
          >
            {copy ? (
              <>
                <CheckIcon className="w-3.5 h-3.5" /> Copied
              </>
            ) : (
              <>
                <CopyIcon className="w-3.5 h-3.5" /> Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="rounded-2xl border border-gray-200/80 bg-[#FAFAFA] relative shadow-sm overflow-hidden" style={{ minHeight: "450px" }}>
        
        {/* Subtle grid background for the canvas */}
        {activeTab === "preview" && (
          <div className="absolute inset-0 pointer-events-none opacity-[0.25]" 
               style={{ backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          </div>
        )}

        {activeTab === "preview" ? (
          <div className="w-full flex items-stretch justify-center p-4 sm:p-8 min-h-[450px] relative z-10">
            {/* 
              The Resizable Container:
              'items-stretch' on parent guarantees this box matches the height precisely.
              Padding on parent (p-4 sm:p-8) ensures identical spacing on all 4 sides.
            */}
            <div
              className="bg-white rounded-xl shadow-md ring-1 ring-gray-900/5 transition-[width] duration-300 ease-out flex"
              style={{ width: viewportWidths[viewport] }}
            >
              {/* Perfectly centers the HTML component horizontally and vertically */}
              <div className="w-full flex items-center justify-center p-4 sm:p-8">
                <div 
                  className="w-full" 
                  dangerouslySetInnerHTML={{ __html: htmlCode }} 
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full relative z-10 text-sm h-full max-h-[600px] overflow-y-auto bg-[#09090b]">
            <SyntaxHighlighter
              language="html"
              style={nightOwl}
              customStyle={{
                padding: "2rem",
                margin: 0,
                background: "transparent",
                minHeight: "450px"
              }}
            >
              {htmlCode}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
}
