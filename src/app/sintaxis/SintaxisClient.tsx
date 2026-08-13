"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Download, Package } from "lucide-react";
import { CODE_CATEGORIES, CODE_EXAMPLES, TOPICS } from "@/lib/data";
import { levelChip } from "@/components/level-styles";
import CodeBlock from "@/components/CodeBlock";
import { downloadText, downloadZip } from "@/lib/download";

export default function SintaxisClient() {
  const params = useSearchParams();
  const initialTab = params.get("tema") ?? "variables";
  const [activeTab, setActiveTab] = useState(
    CODE_CATEGORIES.includes(initialTab) ? initialTab : "variables"
  );
  const [zipping, setZipping] = useState(false);

  const examples = useMemo(() => CODE_EXAMPLES[activeTab] ?? [], [activeTab]);
  const topic = TOPICS.find((t) => t.slug === activeTab);
  const allFiles = useMemo(
    () =>
      CODE_CATEGORIES.flatMap((cat) =>
        CODE_EXAMPLES[cat].map((ex) => ({ name: ex.filename, content: ex.code }))
      ),
    []
  );

  const downloadAll = async () => {
    setZipping(true);
    try {
      await downloadZip("ejemplos-python.zip", allFiles);
    } finally {
      setZipping(false);
    }
  };

  const downloadGuide = () => {
    const content = [
      "# Guía de Python - Ejemplos de Sintaxis",
      "",
      ...CODE_CATEGORIES.map(
        (cat) =>
          `## ${cat}\n\n` +
          CODE_EXAMPLES[cat]
            .map((ex) => `### ${ex.title} (${ex.filename})\n\n\`\`\`python\n${ex.code}\n\`\`\``)
            .join("\n\n")
      ),
    ].join("\n\n");
    downloadText("guia-python.md", content, "text/markdown");
  };

  return (
    <div className="pt-24 px-4 sm:px-6 py-8 max-w-6xl mx-auto">
      <h1 className="font-display text-4xl sm:text-5xl text-center mb-4 tracking-wider">
        <span className="text-primary">Laboratorio de Sintaxis</span>
      </h1>
      <p className="text-center text-on-surface-variant mb-4">
        {Object.values(CODE_EXAMPLES).flat().length} ejemplos con resaltado de sintaxis, copiar y descargar
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={downloadAll}
          disabled={zipping}
          className="px-4 py-2 rounded-full bg-primary-container text-on-primary-container font-bold text-sm neon-glow-purple hover:scale-105 transition-all disabled:opacity-60 flex items-center gap-2"
        >
          <Package size={14} /> {zipping ? "Generando..." : "Descargar todos (.zip)"}
        </button>
        <button
          onClick={downloadGuide}
          className="px-4 py-2 rounded-full border-2 border-tertiary text-tertiary font-bold text-sm hover:bg-tertiary/10 transition-all flex items-center gap-2"
        >
          <Download size={14} /> Guía completa (.md)
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CODE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full border text-sm transition-colors ${
              activeTab === cat
                ? "bg-primary-container text-on-primary-container border-primary-container"
                : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
            }`}
          >
            {topic && activeTab === cat ? topic.title : cat}
          </button>
        ))}
      </div>

      {topic && (
        <div className="flex items-center justify-center gap-2 mb-8 text-sm text-on-surface-variant">
          <span>{topic.description}</span>
          <Link href={`/temas`} className="text-primary hover:underline">
            Ver en temas
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {examples.map((ex) => (
          <div key={ex.filename} className="glass-card rounded-xl overflow-hidden">
            <div className="bg-surface-container-high px-4 py-2.5 flex items-center justify-between border-b border-outline-variant">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${levelChip[ex.level]}`}>
                  {ex.level}
                </span>
                <span className="text-on-surface-variant text-xs font-mono">{ex.filename}</span>
              </div>
            </div>
            <CodeBlock code={ex.code} filename={ex.filename} />
            {ex.explanation && (
              <p className="px-4 py-3 text-xs text-on-surface-variant border-t border-outline-variant/40">
                💡 {ex.explanation}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
