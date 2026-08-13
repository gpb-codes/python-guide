"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { LEVELS, TOPICS } from "@/lib/data";
import type { Level } from "@/lib/data";
import { TOPIC_ICONS } from "@/components/icons";
import { levelBgSoft, levelBorder, levelBorderLeft, levelChip, levelText } from "@/components/level-styles";

const FILTERS: { key: "all" | Level; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "beginner", label: "Principiante" },
  { key: "intermediate", label: "Intermedio" },
  { key: "advanced", label: "Avanzado" },
];

export default function TemasClient() {
  const params = useSearchParams();
  const initial = (params.get("nivel") as Level | null) ?? "all";
  const [filter, setFilter] = useState<"all" | Level>(initial);
  const [search, setSearch] = useState("");

  const topics = useMemo(() => {
    let list = TOPICS;
    if (filter !== "all") list = list.filter((t) => t.level === filter);
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }
    return list;
  }, [filter, search]);

  return (
    <div className="pt-24 px-4 sm:px-6 py-8 max-w-6xl mx-auto">
      <h1 className="font-display text-4xl sm:text-5xl text-center mb-4 tracking-wider">
        <span className="text-primary">Temas de Python</span>
      </h1>
      <p className="text-center text-on-surface-variant mb-8">{TOPICS.length} temas organizados por nivel</p>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full border text-sm transition-colors ${
              filter === f.key
                ? f.key === "all"
                  ? "border-primary bg-primary/20 text-primary"
                  : `${levelBorder[f.key]} ${levelBgSoft[f.key]} ${levelText[f.key]}`
                : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="max-w-md mx-auto mb-10 relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar tema, tag..."
          className="w-full pl-9 pr-3 py-2.5 rounded-full border border-outline-variant bg-surface-container-low text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none"
          aria-label="Buscar temas"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => {
          const Icon = TOPIC_ICONS[topic.slug];
          return (
            <Link
              key={topic.slug}
              href={`/sintaxis?tema=${topic.slug}`}
              className={`glass-card p-6 rounded-xl border-l-4 ${levelBorderLeft[topic.level]} hover:scale-[1.02] block`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg ${levelBgSoft[topic.level]} flex items-center justify-center ${levelText[topic.level]}`}
                >
                  {Icon && <Icon size={18} />}
                </div>
                <div>
                  <h3 className={`font-display text-xl ${levelText[topic.level]} tracking-wider`}>
                    {topic.title}
                  </h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${levelChip[topic.level]}`}>
                    {LEVELS[topic.level].title}
                  </span>
                </div>
              </div>
              <p className="text-on-surface-variant text-sm mb-3">{topic.description}</p>
              <div className="flex flex-wrap gap-2">
                {topic.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded bg-surface-container-high text-[10px] text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>

      {topics.length === 0 && (
        <p className="text-center text-on-surface-variant py-10">
          No hay temas que coincidan con tu búsqueda.
        </p>
      )}
    </div>
  );
}
