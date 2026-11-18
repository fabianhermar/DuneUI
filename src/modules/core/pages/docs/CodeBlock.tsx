import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
  step?: string;
}

const SHELL_KEYWORDS = new Set(["npm", "pnpm", "yarn", "bun", "npx", "bunx", "install", "add", "run", "create", "dlx", "cd"]);
const CODE_KEYWORDS = new Set([
  "import",
  "from",
  "export",
  "default",
  "const",
  "let",
  "function",
  "return",
  "interface",
  "if",
  "true",
  "false",
  "null",
]);

function highlightLine(line: string, language?: string) {
  const trimmed = line.trimStart();
  if (
    trimmed.startsWith("//") ||
    trimmed.startsWith("/*") ||
    trimmed.startsWith("<!--") ||
    trimmed.startsWith("#")
  ) {
    return <span className="text-[#8E8376] italic">{line}</span>;
  }

  if (language === "bash" || language === "sh") {
    const parts = line.split(/(\s+)/);
    return parts.map((part, idx) => {
      if (SHELL_KEYWORDS.has(part)) {
        return (
          <span key={idx} className="text-[#C9955B] font-medium">
            {part}
          </span>
        );
      }
      if (part.startsWith("-") || part.startsWith("@tailwindcss/")) {
        return (
          <span key={idx} className="text-[#7DD3FC]">
            {part}
          </span>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  }

  // Tokenize strings, CSS at-rules, HTML tags, and JS/TS keywords safely as React nodes
  const tokenRegex = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|@[a-zA-Z-]+|<\/?[a-zA-Z0-9-]+|\b(?:import|from|export|default|const|let|function|return|interface|if|true|false|null)\b)/g;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(line.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('"') || token.startsWith("'")) {
      nodes.push(
        <span key={match.index} className="text-[#A7F3D0]">
          {token}
        </span>
      );
    } else if (token.startsWith("@")) {
      nodes.push(
        <span key={match.index} className="text-[#FDBA74] font-medium">
          {token}
        </span>
      );
    } else if (token.startsWith("<")) {
      nodes.push(
        <span key={match.index} className="text-[#7DD3FC]">
          {token}
        </span>
      );
    } else if (CODE_KEYWORDS.has(token)) {
      nodes.push(
        <span key={match.index} className="text-[#C9955B]">
          {token}
        </span>
      );
    } else {
      nodes.push(token);
    }
    lastIndex = match.index + token.length;
  }

  if (lastIndex < line.length) {
    nodes.push(line.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : line;
}

export default function CodeBlock({ code, filename, language = "text", step }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard?.writeText(code);
    } catch {
      // Clipboard API may be unavailable in restricted contexts
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const lines = code.split("\n");
  const isShell = language === "bash" || language === "sh";

  return (
    <div className="border border-ink bg-obsidian text-paper-elevated shadow-[4px_4px_0_0_#DDD5C7]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-obsidian-soft px-4 py-2.5">
        <div className="flex items-center gap-2.5 min-w-0">
          {step && (
            <span className="border border-sand/40 bg-sand/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-sand">
              {step}
            </span>
          )}
          {isShell && !step && <Terminal className="size-3.5 shrink-0 text-sand" aria-hidden="true" />}
          <span className="truncate font-mono text-xs text-paper-elevated/85">
            {filename ?? language}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-white/40">
            {language}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copy ${filename ?? language} code`}
            className="inline-flex cursor-pointer items-center gap-1.5 border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-paper-elevated transition-colors hover:border-sand/60 hover:bg-white/10"
          >
            {copied ? (
              <>
                <Check className="size-3 text-emerald-400" />
                <span className="text-emerald-300">Copied</span>
              </>
            ) : (
              <>
                <Copy className="size-3 text-sand" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      <pre className="overflow-x-auto p-4 sm:p-5 font-mono text-[13px] leading-relaxed text-[#EFE7DA]">
        <code>
          {lines.map((line, i) => (
            <span key={i} className="block">
              {isShell && line.trim() !== "" && !line.trimStart().startsWith("#") ? (
                <>
                  <span className="select-none text-white/35 mr-2.5">$</span>
                  {highlightLine(line, language)}
                </>
              ) : (
                highlightLine(line, language)
              )}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
