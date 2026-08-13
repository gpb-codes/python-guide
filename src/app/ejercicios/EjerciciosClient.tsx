"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, ChevronDown, Circle, Eye, Lightbulb, Search, Trophy } from "lucide-react";
import { EXERCISES } from "@/lib/data";
import type { Level } from "@/lib/data";
import { levelBorder, levelBorderLeft, levelChip, levelText } from "@/components/level-styles";
import CodeBlock from "@/components/CodeBlock";

const FILTERS: { key: "all" | Level; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "beginner", label: "Principiante" },
  { key: "intermediate", label: "Intermedio" },
  { key: "advanced", label: "Avanzado" },
];

const CATEGORIES = Array.from(new Set(EXERCISES.map((e) => e.category))).sort();

const STORAGE_KEY = "python-guide-done";

function loadDone(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function EjerciciosClient() {
  const [filter, setFilter] = useState<"all" | Level>("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [done, setDone] = useState<number[]>(loadDone);
  const [showSolution, setShowSolution] = useState<number | null>(null);
  const [showHint, setShowHint] = useState<number | null>(null);

  const toggleDone = (id: number) => {
    setDone((prev) => {
      const next = prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const exercises = useMemo(() => {
    let list = EXERCISES;
    if (filter !== "all") list = list.filter((e) => e.difficulty === filter);
    if (category !== "all") list = list.filter((e) => e.category === category);
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [filter, category, search]);

  const progress = Math.round((done.length / EXERCISES.length) * 100);

  return (
    <div className="pt-24 px-4 sm:px-6 py-8 max-w-6xl mx-auto">
      <h1 className="font-display text-4xl sm:text-5xl text-center mb-4 tracking-wider">
        <span className="text-secondary">Misiones de Entrenamiento</span>
      </h1>
      <p className="text-center text-on-surface-variant mb-6">
        {EXERCISES.length} ejercicios prácticos con pistas y soluciones
      </p>

      <div className="max-w-md mx-auto mb-6 glass-card rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold flex items-center gap-2">
            <Trophy size={16} className="text-secondary" /> Tu progreso
          </span>
          <span className="text-sm text-primary font-bold">
            {done.length}/{EXERCISES.length} ({progress}%)
          </span>
        </div>
        <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-tertiary-container transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full border text-sm transition-colors ${
              filter === f.key
                ? f.key === "all"
                  ? "border-primary bg-primary/20 text-primary"
                  : `${levelBorder[f.key]} ${levelChip[f.key]}`
                : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-full border border-outline-variant bg-surface-container-low text-on-surface text-sm focus:border-primary focus:outline-none"
          aria-label="Filtrar por categoría"
        >
          <option value="all">Todas las categorías</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <div className="relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar misión, tag..."
            className="pl-9 pr-3 py-2 rounded-full border border-outline-variant bg-surface-container-low text-on-surface placeholder:text-on-surface-variant text-sm focus:border-primary focus:outline-none"
            aria-label="Buscar ejercicios"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((ex) => (
          <div key={ex.id} className={`glass-card p-6 rounded-xl border-l-4 ${levelBorderLeft[ex.difficulty]}`}>
            <div className="flex justify-between items-start mb-3">
              <span className={`font-display text-lg ${levelText[ex.difficulty]} tracking-wider`}>
                Nivel {ex.id}
              </span>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded text-xs ${levelChip[ex.difficulty]}`}>
                  {ex.difficulty}
                </span>
                <button
                  onClick={() => toggleDone(ex.id)}
                  className="text-on-surface-variant hover:text-beginner transition-colors"
                  aria-label={done.includes(ex.id) ? "Marcar como pendiente" : "Marcar como completado"}
                  title={done.includes(ex.id) ? "Completado" : "Marcar completado"}
                >
                  {done.includes(ex.id) ? (
                    <CheckCircle2 size={20} className="text-beginner" />
                  ) : (
                    <Circle size={20} />
                  )}
                </button>
              </div>
            </div>
            <h4 className={`font-display text-xl mb-2 tracking-wider ${done.includes(ex.id) ? "text-on-surface-variant line-through" : "text-on-surface"}`}>
              {ex.title}
            </h4>
            <p className="text-on-surface-variant text-sm mb-3">{ex.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {ex.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-2 py-1 rounded bg-surface-container-high text-[10px] text-on-surface-variant">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setShowHint(showHint === ex.id ? null : ex.id)}
                className="w-full flex items-center gap-2 text-xs text-on-surface-variant hover:text-secondary transition-colors"
              >
                <Lightbulb size={13} />
                {showHint === ex.id ? "Ocultar pista" : "Mostrar pista"}
              </button>
              {showHint === ex.id && (
                <p className="text-xs text-on-surface-variant bg-surface-container-low rounded-lg p-3">
                  {ex.hint}
                </p>
              )}

              <button
                onClick={() => setShowSolution(showSolution === ex.id ? null : ex.id)}
                className="w-full flex items-center justify-center gap-2 text-xs font-bold px-3 py-2 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
              >
                <Eye size={13} />
                {showSolution === ex.id ? "Ocultar solución" : "Ver solución"}
                <ChevronDown size={13} className={showSolution === ex.id ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>
              {showSolution === ex.id && (
                <CodeBlock code={ex.solution} filename={`ejercicio_${ex.id}.py`} />
              )}
            </div>
          </div>
        ))}
      </div>

      {exercises.length === 0 && (
        <p className="text-center text-on-surface-variant py-10">
          No hay misiones que coincidan con los filtros.
        </p>
      )}
    </div>
  );
}
