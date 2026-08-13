"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Download } from "lucide-react";
import { downloadText } from "@/lib/download";

interface CodeBlockProps {
  code: string;
  filename?: string;
  showButtons?: boolean;
}

export default function CodeBlock({ code, filename, showButtons = true }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function highlight() {
      const Prism = await import("prismjs");
      await import("prismjs/components/prism-python");
      if (!cancelled && codeRef.current) {
        Prism.highlightElement(codeRef.current);
      }
    }
    highlight();
    return () => {
      cancelled = true;
    };
  }, [code]);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const download = () => {
    downloadText(filename ?? "ejemplo.py", code, "text/x-python");
  };

  return (
    <div className="relative group">
      {showButtons && (
        <div className="absolute top-2 right-2 flex gap-2 z-10">
          <button
            onClick={copy}
            className="p-1.5 rounded-md bg-surface-container-highest/80 hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Copiar código"
            title="Copiar"
          >
            {copied ? <Check size={14} className="text-beginner" /> : <Copy size={14} />}
          </button>
          <button
            onClick={download}
            className="p-1.5 rounded-md bg-surface-container-highest/80 hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Descargar .py"
            title="Descargar .py"
          >
            <Download size={14} />
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto rounded-lg border border-outline-variant/40 max-h-[480px] overflow-y-auto">
        <code ref={codeRef} className="language-python">
          {code}
        </code>
      </pre>
    </div>
  );
}
