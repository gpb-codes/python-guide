"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Download, Lightbulb, RefreshCw, RotateCcw, ArrowRight, X } from "lucide-react";
import { QUIZ } from "@/lib/data";
import { downloadText } from "@/lib/download";

type Phase = "setup" | "playing" | "results";
type AnswerState = "idle" | "correct" | "wrong";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const MODES = [
  { id: "short", label: "Corto", questions: 15 },
  { id: "long", label: "Completo", questions: QUIZ.length },
];

export default function QuizClient() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [mode, setMode] = useState<"short" | "long">("short");
  const [questions, setQuestions] = useState(QUIZ);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [correctCount, setCorrectCount] = useState(0);
  const [bestScore, setBestScore] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("python-guide-quiz-best");
      // eslint-disable-next-line react-hooks/set-state-in-effect -- lectura inicial de localStorage
      if (raw) setBestScore(Number(raw));
    } catch {
      // ignore
    }
  }, []);

  const current = questions[index];
  const total = questions.length;

  const start = () => {
    const pool = shuffle(QUIZ);
    const selectedQs = mode === "short" ? pool.slice(0, 15) : pool;
    setQuestions(selectedQs);
    setIndex(0);
    setSelected(null);
    setAnswerState("idle");
    setCorrectCount(0);
    setPhase("playing");
  };

  const selectOption = (i: number) => {
    if (answerState !== "idle") return;
    setSelected(i);
    const isCorrect = i === current.correct;
    setAnswerState(isCorrect ? "correct" : "wrong");
    if (isCorrect) setCorrectCount((c) => c + 1);
  };

  const next = () => {
    if (index + 1 >= total) {
      setPhase("results");
      const pct = Math.round(((correctCount) / total) * 100);
      try {
        const prev = Number(localStorage.getItem("python-guide-quiz-best") ?? "0");
        if (pct > prev) {
          localStorage.setItem("python-guide-quiz-best", String(pct));
          setBestScore(pct);
        }
      } catch {
        // ignore
      }
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setAnswerState("idle");
  };

  const results = useMemo(() => {
    if (phase !== "results") return null;
    const correct = correctCount;
    const pct = Math.round((correct / total) * 100);
    let message: string;
    let emoji: string;
    if (pct >= 90) {
      message = "¡Increíble! Dominas Python como un profesional.";
      emoji = "🏆";
    } else if (pct >= 70) {
      message = "¡Muy bien! Tienes un gran conocimiento de Python.";
      emoji = "🌟";
    } else if (pct >= 50) {
      message = "Bien, pero puedes mejorar practicando más.";
      emoji = "💪";
    } else if (pct >= 30) {
      message = "Sigue estudiando: repasa los temas básicos.";
      emoji = "📚";
    } else {
      message = "No te rindas: empieza por los temas principiante.";
      emoji = "🚀";
    }
    return { correct, pct, message, emoji };
  }, [phase, correctCount, total]);

  const downloadResults = () => {
    if (phase !== "results") return;
    const lines = [
      "Resultado Quiz Python",
      "======================",
      `Puntaje: ${results?.correct}/${total} (${results?.pct}%)`,
      `Fecha: ${new Date().toLocaleString("es-CL")}`,
      "",
      "Detalle:",
    ];
    questions.forEach((q, i) => {
      lines.push("");
      lines.push(`${i + 1}. ${q.question}`);
      lines.push(`   Respuesta correcta: ${q.options[q.correct]}`);
    });
    downloadText("resultado-quiz-python.txt", lines.join("\n"));
  };

  if (phase === "setup") {
    return (
      <div className="pt-24 px-4 sm:px-6 py-8 max-w-2xl mx-auto">
        <div className="glass-card rounded-2xl p-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl mb-4 tracking-wider">
            <span className="text-primary">Quiz de Python</span>
          </h1>
          <p className="text-on-surface-variant mb-8">
            {QUIZ.length} preguntas con explicaciones. Elige un modo para comenzar:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {MODES.map((m) => (
              <button
                key={m.id}
                onClick={() => setMode(m.id as "short" | "long")}
                className={`p-5 rounded-xl border transition-all ${
                  mode === m.id
                    ? "border-primary bg-primary/10 neon-glow-purple"
                    : "border-outline-variant hover:border-primary/50"
                }`}
              >
                <div className="font-display text-2xl text-primary tracking-wider">{m.label}</div>
                <div className="text-sm text-on-surface-variant">{m.questions} preguntas</div>
              </button>
            ))}
          </div>
          {bestScore !== null && (
            <p className="text-sm text-secondary mb-4">🏅 Mejor puntaje: {bestScore}%</p>
          )}
          <button
            onClick={start}
            className="bg-primary-container text-on-primary-container px-8 py-3 rounded-xl font-bold neon-glow-purple hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            Comenzar <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  if (phase === "results") {
    return (
      <div className="pt-24 px-4 sm:px-6 py-8 max-w-2xl mx-auto">
        <div className="glass-card rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">{results?.emoji}</div>
          <h1 className="font-display text-4xl mb-2 tracking-wider text-primary">
            Resultado Final
          </h1>
          <p className="font-display text-6xl text-secondary mb-2">
            {results?.correct}/{total}
          </p>
          <p className="text-2xl font-bold text-on-surface mb-4">{results?.pct}%</p>
          <p className="text-on-surface-variant mb-6">{results?.message}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-surface-container-low rounded-xl p-4">
              <p className="text-beginner font-display text-2xl">{results?.correct}</p>
              <p className="text-xs text-on-surface-variant">Correctas</p>
            </div>
            <div className="bg-surface-container-low rounded-xl p-4">
              <p className="text-error font-display text-2xl">{total - (results?.correct ?? 0)}</p>
              <p className="text-xs text-on-surface-variant">Incorrectas</p>
            </div>
            <div className="bg-surface-container-low rounded-xl p-4">
              <p className="text-primary font-display text-2xl">{bestScore ?? results?.pct}%</p>
              <p className="text-xs text-on-surface-variant">Mejor puntaje</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={start}
              className="px-6 py-3 rounded-lg font-bold border border-outline-variant text-on-surface-variant hover:border-tertiary hover:text-tertiary transition-all flex items-center gap-2"
            >
              <RotateCcw size={16} /> Reintentar
            </button>
            <button
              onClick={downloadResults}
              className="px-6 py-3 rounded-lg font-bold border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all flex items-center gap-2"
            >
              <Download size={16} /> Descargar resultado
            </button>
            <button
              onClick={() => setPhase("setup")}
              className="px-6 py-3 rounded-lg font-bold border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all flex items-center gap-2"
            >
              <RefreshCw size={16} /> Cambiar modo
            </button>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((index + 1) / total) * 100;

  return (
    <div className="pt-24 px-4 sm:px-6 py-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs text-primary tracking-widest uppercase font-bold">
            Pregunta {index + 1} de {total}
          </span>
          <span className="text-sm text-on-surface-variant">
            Aciertos: <span className="text-beginner font-bold">{correctCount}</span>
          </span>
        </div>
        <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden border border-outline-variant/30">
          <div
            className="h-full bg-gradient-to-r from-primary to-tertiary-container neon-glow-purple transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-tertiary/10 blur-[80px] rounded-full" />

        <div className="mb-4">
          <span className="px-3 py-1 rounded-full border border-primary/40 text-primary text-xs bg-primary/5">
            #{current.category} · {current.level}
          </span>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl text-on-surface mb-6 leading-tight">
          {current.question}
        </h1>

        <div className="space-y-3">
          {current.options.map((opt, i) => {
            const isSelected = selected === i;
            const isCorrect = i === current.correct;
            let cls = "border-outline-variant hover:border-primary/50 bg-surface-container-low/40";
            if (answerState !== "idle" && isCorrect) cls = "border-beginner bg-beginner/10";
            else if (answerState !== "idle" && isSelected) cls = "border-error bg-error/10";
            else if (isSelected) cls = "border-primary/60 bg-primary/5 neon-glow-purple";
            return (
              <button
                key={i}
                onClick={() => selectOption(i)}
                disabled={answerState !== "idle"}
                className={`w-full flex items-center p-4 rounded-lg border cursor-pointer transition-all hover:scale-[1.01] disabled:hover:scale-100 text-left ${cls}`}
              >
                <div
                  className={`w-6 h-6 border-2 rounded-full flex items-center justify-center shrink-0 mr-3 transition-all ${
                    answerState !== "idle" && isCorrect
                      ? "border-beginner bg-beginner"
                      : answerState !== "idle" && isSelected
                        ? "border-error bg-error"
                        : isSelected
                          ? "border-primary bg-primary"
                          : "border-outline"
                  }`}
                >
                  {answerState !== "idle" && (isCorrect ? (
                    <Check size={13} className="text-white" />
                  ) : isSelected ? (
                    <X size={13} className="text-white" />
                  ) : null)}
                  {answerState === "idle" && isSelected && <Check size={13} className="text-on-primary" />}
                </div>
                <span className={`text-sm sm:text-base ${isSelected ? "text-on-surface" : "text-on-surface-variant"}`}>
                  {opt}
                </span>
              </button>
            );
          })}
        </div>

        {answerState !== "idle" && (
          <div
            className={`mt-5 p-4 rounded-xl border ${
              answerState === "correct"
                ? "border-beginner/50 bg-beginner/10"
                : "border-error/50 bg-error/10"
            }`}
          >
            <p className={`font-bold mb-1 ${answerState === "correct" ? "text-beginner" : "text-error"}`}>
              {answerState === "correct" ? "¡Correcto!" : "Incorrecto"}
            </p>
            <p className="text-sm text-on-surface-variant flex items-start gap-2">
              <Lightbulb size={15} className="text-tertiary mt-0.5 shrink-0" />
              {current.explanation}
            </p>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={next}
            disabled={answerState === "idle"}
            className="px-6 py-3 rounded-lg font-bold bg-primary-container text-on-primary-container hover:bg-primary transition-all flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed neon-glow-purple"
          >
            {index + 1 >= total ? "Ver resultados" : "Siguiente"}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
