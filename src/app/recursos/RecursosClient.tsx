"use client";

import { useState } from "react";
import {
  BookOpen,
  Download,
  ExternalLink,
  FileDown,
  FileText,
  GraduationCap,
  Map,
  Package,
  Terminal,
} from "lucide-react";
import { EXERCISES, QUIZ, TOPICS, CODE_EXAMPLES, totalQuizQuestions } from "@/lib/data";
import { downloadText, downloadZip } from "@/lib/download";

const DOCS = [
  {
    icon: BookOpen,
    title: "Documentación oficial",
    text: "La referencia completa y el tutorial oficial de Python (en español).",
    href: "https://docs.python.org/es/3/tutorial/",
  },
  {
    icon: GraduationCap,
    title: "Python para Principiantes",
    text: "Tutorial del sitio oficial orientado a quien empieza desde cero.",
    href: "https://www.python.org/about/gettingstarted/",
  },
  {
    icon: Terminal,
    title: "W3Schools - Python",
    text: "Guía interactiva con editor en línea para probar código sin instalar nada.",
    href: "https://www.w3schools.com/python/",
  },
  {
    icon: Package,
    title: "PyPI - Índice de paquetes",
    text: "Más de 500.000 paquetes de Python listos para instalar con pip.",
    href: "https://pypi.org/",
  },
  {
    icon: Map,
    title: "Roadmap Python",
    text: "Mapa visual de todo lo que puedes aprender: de básico a especialista.",
    href: "https://roadmap.sh/python",
  },
  {
    icon: FileText,
    title: "Cheatsheet de Python",
    text: "Referencia rápida imprimible con la sintaxis esencial de Python.",
    href: "https://quickref.me/python",
  },
];

const BOOKS = [
  {
    title: "Automate the Boring Stuff with Python",
    author: "Al Sweigart",
    note: "Gratis en la web. Automatiza tareas reales: archivos, web, correos.",
    href: "https://automatetheboringstuff.com/",
  },
  {
    title: "Think Python",
    author: "Allen B. Downey",
    note: "Gratis. Introducción a la programación con enfoque científico.",
    href: "https://greenteapress.com/wp/think-python-2e/",
  },
  {
    title: "Python Crash Course",
    author: "Eric Matthes",
    note: "El clásico para principiantes: teoría + proyectos (juegos, web, datos).",
    href: "https://ehmatthes.github.io/pcc_3e/",
  },
  {
    title: "Ejercicios de Python (ESP)",
    author: "ejerciciosdepython.com",
    note: "Decenas de ejercicios en español con soluciones comentadas.",
    href: "https://ejerciciosdepython.com/",
  },
];

const ROADMAP = [
  {
    step: "1",
    title: "Bases (1-2 semanas)",
    color: "text-beginner",
    items: ["Variables y tipos", "Entrada/salida (input, print)", "Condicionales", "Bucles for y while"],
  },
  {
    step: "2",
    title: "Estructuras de datos (2-3 semanas)",
    color: "text-intermediate",
    items: ["Listas, tuplas, diccionarios y sets", "Strings y f-strings", "Funciones", "Módulos y pip"],
  },
  {
    step: "3",
    title: "Intermedio (3-4 semanas)",
    color: "text-advanced",
    items: ["POO: clases y herencia", "Excepciones", "Archivos y JSON", "Comprehensions y generadores"],
  },
  {
    step: "4",
    title: "Avanzado y proyectos",
    color: "text-secondary",
    items: ["APIs y web scraping", "Entornos virtuales", "Proyecto final: app CLI o web", "Contribuir a open source"],
  },
];

const INSTALL_STEPS = [
  { cmd: "python --version", note: "Verifica si Python ya está instalado (necesitas 3.10+)" },
  { cmd: "winget install Python.Python.3.12", note: "Windows: instala desde la Microsoft Store con winget" },
  { cmd: "python -m pip install --upgrade pip", note: "Actualiza pip (el instalador de paquetes)" },
  { cmd: "python -m venv .venv", note: "Crea un entorno virtual para tu primer proyecto" },
  { cmd: "python archivo.py", note: "Ejecuta tu primer script" },
];

export default function RecursosClient() {
  const [zipping, setZipping] = useState(false);
  const [downloadingGuide, setDownloadingGuide] = useState(false);

  const examples = Object.values(CODE_EXAMPLES).flat();

  const downloadAllCode = async () => {
    setZipping(true);
    try {
      await downloadZip(
        "ejemplos-python.zip",
        examples.map((ex) => ({ name: ex.filename, content: ex.code }))
      );
    } finally {
      setZipping(false);
    }
  };

  const downloadExercises = async () => {
    setZipping(true);
    try {
      await downloadZip(
        "ejercicios-python.zip",
        EXERCISES.map((ex) => ({
          name: `ejercicio_${String(ex.id).padStart(2, "0")}_solucion.py`,
          content: ex.solution,
        }))
      );
    } finally {
      setZipping(false);
    }
  };

  const downloadGuide = () => {
    setDownloadingGuide(true);
    const header = [
      "# Guía de Python - DuocUC",
      "",
      `Temas: ${TOPICS.length} | Ejemplos: ${examples.length} | Ejercicios: ${EXERCISES.length} | Quiz: ${totalQuizQuestions}`,
      "",
    ].join("\n");
    const topicsSection = [
      "## Temas",
      "",
      ...TOPICS.map((t) => `- **${t.title}** (${t.level}): ${t.description}`),
      "",
    ].join("\n");
    const examplesSection = [
      "## Ejemplos de código",
      "",
      ...Object.entries(CODE_EXAMPLES).flatMap(([cat, list]) => [
        `### ${cat}`,
        "",
        ...list.map((ex) => `- ${ex.title} (\`${ex.filename}\`)`),
        "",
      ]),
    ].join("\n");
    const exercisesSection = [
      "## Ejercicios",
      "",
      ...EXERCISES.map((ex) => `- **Nivel ${ex.id}** ${ex.title}: ${ex.description}`),
      "",
    ].join("\n");
    const quizSection = [
      "## Quiz",
      "",
      ...QUIZ.map((q, i) => `- ${i + 1}. ${q.question} → ${q.options[q.correct]}`),
      "",
    ].join("\n");
    downloadText("guia-python-completa.md", [header, topicsSection, examplesSection, exercisesSection, quizSection].join("\n\n"), "text/markdown");
    setTimeout(() => setDownloadingGuide(false), 300);
  };

  return (
    <div className="pt-24 px-4 sm:px-6 py-8 max-w-6xl mx-auto">
      <h1 className="font-display text-4xl sm:text-5xl text-center mb-4 tracking-wider">
        <span className="text-tertiary">Recursos y Descargas</span>
      </h1>
      <p className="text-center text-on-surface-variant mb-10">
        Todo para complementar tu aprendizaje: guías descargables, instalación, libros y enlaces oficiales
      </p>

      <section id="descargas" className="mb-16">
        <h2 className="font-display text-2xl sm:text-3xl mb-6 tracking-wider text-primary">
          Descarga la guía completa
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={downloadAllCode}
            disabled={zipping}
            className="glass-card p-6 rounded-xl text-left hover:scale-[1.02] disabled:opacity-60"
          >
            <FileDown size={24} className="text-primary mb-3" />
            <h3 className="font-bold mb-1">Todos los ejemplos (.zip)</h3>
            <p className="text-sm text-on-surface-variant">
              {examples.length} archivos .py listos para ejecutar
            </p>
          </button>
          <button
            onClick={downloadExercises}
            disabled={zipping}
            className="glass-card p-6 rounded-xl text-left hover:scale-[1.02] disabled:opacity-60"
          >
            <Download size={24} className="text-secondary mb-3" />
            <h3 className="font-bold mb-1">Ejercicios con solución (.zip)</h3>
            <p className="text-sm text-on-surface-variant">
              {EXERCISES.length} scripts .py con las soluciones implementadas
            </p>
          </button>
          <button
            onClick={downloadGuide}
            disabled={downloadingGuide}
            className="glass-card p-6 rounded-xl text-left hover:scale-[1.02] disabled:opacity-60"
          >
            <FileText size={24} className="text-tertiary mb-3" />
            <h3 className="font-bold mb-1">Guía completa (.md)</h3>
            <p className="text-sm text-on-surface-variant">
              Temas, ejemplos, ejercicios y quiz en un solo archivo Markdown
            </p>
          </button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl sm:text-3xl mb-6 tracking-wider text-primary">
          Instalar Python
        </h2>
        <div className="glass-card rounded-2xl p-6">
          <ol className="space-y-3">
            {INSTALL_STEPS.map((s, i) => (
              <li key={s.cmd} className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="flex items-center gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <code className="font-mono text-sm bg-surface-container-high px-3 py-1.5 rounded-md text-primary">
                    {s.cmd}
                  </code>
                </span>
                <span className="text-xs text-on-surface-variant sm:ml-2">{s.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl sm:text-3xl mb-6 tracking-wider text-primary">
          Hoja de ruta
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROADMAP.map((r) => (
            <div key={r.step} className="glass-card p-5 rounded-xl">
              <div className={`font-display text-4xl ${r.color} mb-2`}>{r.step}</div>
              <h3 className="font-bold mb-3">{r.title}</h3>
              <ul className="space-y-1.5">
                {r.items.map((item) => (
                  <li key={item} className="text-xs text-on-surface-variant flex items-start gap-2">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 bg-current ${r.color}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-display text-2xl sm:text-3xl mb-6 tracking-wider text-primary">
          Documentación y sitios oficiales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DOCS.map((d) => (
            <a
              key={d.title}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-xl block hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-3">
                <d.icon size={24} className="text-primary" />
                <ExternalLink size={14} className="text-on-surface-variant" />
              </div>
              <h3 className="font-bold mb-1">{d.title}</h3>
              <p className="text-sm text-on-surface-variant">{d.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl sm:text-3xl mb-6 tracking-wider text-primary">
          Libros y ejercicios gratuitos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BOOKS.map((b) => (
            <a
              key={b.title}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-xl block hover:scale-[1.02]"
            >
              <h3 className="font-bold mb-1">{b.title}</h3>
              <p className="text-xs text-secondary mb-2">{b.author}</p>
              <p className="text-sm text-on-surface-variant">{b.note}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
