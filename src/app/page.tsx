import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Download, Gamepad2, GraduationCap, Puzzle, WifiOff } from "lucide-react";
import { LEVELS, LEVEL_ORDER, TOPICS, countByLevel, totalExercises, totalQuizQuestions, totalExamples } from "@/lib/data";
import { TOPIC_ICONS, LEVEL_ICONS } from "@/components/icons";
import { levelBgLight, levelBgSoft, levelBorderLeft, levelText } from "@/components/level-styles";

const FEATURES = [
  { icon: BookOpen, title: "Temas organizados", text: "26 temas por nivel: de variables a regex y POO", color: "text-secondary" },
  { icon: Code2, title: "Ejemplos descargables", text: "Cada ejemplo con botón para descargar el .py real", color: "text-primary" },
  { icon: Puzzle, title: "Ejercicios con solución", text: "35 misiones con pistas y soluciones paso a paso", color: "text-tertiary" },
  { icon: Gamepad2, title: "Quiz con explicaciones", text: "50 preguntas con feedback inmediato", color: "text-secondary" },
  { icon: Download, title: "Instalable (PWA)", text: "Descarga la app y úsala offline desde el navegador", color: "text-primary" },
  { icon: WifiOff, title: "Funciona offline", text: "El service worker guarda todo el contenido", color: "text-tertiary" },
];

export default function Home() {
  const exerciseCount = countByLevel(TOPICS);
  const totalTopics = TOPICS.length;

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 hero-gradient">
        <div className="max-w-4xl z-10">
          <div className="inline-block px-4 py-2 rounded-full bg-surface-container-high border border-primary/30 text-primary text-xs sm:text-sm mb-6">
            GUÍA 100% GRATIS
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl mb-6 tracking-wider">
            <span className="text-primary drop-shadow-lg">PROGRAMACIÓN</span>
            <br />
            <span className="text-secondary drop-shadow-lg">PYTHON</span>
          </h1>
          <p className="text-lg sm:text-xl text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Domina Python desde cero. {totalTopics}+ temas, {totalExamples} ejemplos, {totalExercises} ejercicios y{" "}
            {totalQuizQuestions} preguntas de quiz. Descárgala como app y úsala sin internet.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/temas"
              className="bg-primary-container text-on-primary-container px-6 py-3 rounded-lg font-bold neon-glow-purple hover:scale-105 transition-all flex items-center gap-2"
            >
              Comenzar a Aprender <ArrowRight size={18} />
            </Link>
            <Link
              href="/quiz"
              className="border-2 border-tertiary text-tertiary px-6 py-3 rounded-lg font-bold hover:bg-tertiary/10 transition-all"
            >
              Probar Quiz
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
            <div className="glass-card p-4 sm:p-6 rounded-xl">
              <div className="font-display text-3xl sm:text-5xl font-bold text-beginner">{totalTopics}+</div>
              <div className="text-xs sm:text-sm text-on-surface-variant">Temas</div>
            </div>
            <div className="glass-card p-4 sm:p-6 rounded-xl">
              <div className="font-display text-3xl sm:text-5xl font-bold text-intermediate">{totalExercises}+</div>
              <div className="text-xs sm:text-sm text-on-surface-variant">Ejercicios</div>
            </div>
            <div className="glass-card p-4 sm:p-6 rounded-xl">
              <div className="font-display text-3xl sm:text-5xl font-bold text-advanced">{totalQuizQuestions}</div>
              <div className="text-xs sm:text-sm text-on-surface-variant">Preguntas</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 sm:py-20 max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl text-center mb-10 tracking-wider text-on-surface">
          Elige tu Nivel
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {LEVEL_ORDER.map((level) => {
            const info = LEVELS[level];
            const Icon = LEVEL_ICONS[level];
            return (
              <Link
                key={level}
                href={`/temas?nivel=${level}`}
                className={`glass-card p-6 rounded-xl border-l-4 ${levelBorderLeft[level]} hover:scale-[1.02] block`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${levelBgSoft[level]} flex items-center justify-center ${levelText[level]}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className={`font-display text-2xl ${levelText[level]} tracking-wider`}>{info.title}</h3>
                </div>
                <p className="text-on-surface-variant text-sm mb-4">{info.description}</p>
                <div className="text-xs text-on-surface-variant">
                  {exerciseCount[level]} temas •{" "}
                  {LEVEL_ORDER.length > 0 ? "ejemplos y ejercicios" : ""}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 bg-surface-container-lowest/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-center mb-10 tracking-wider">
            <span className="text-primary">Lo que aprenderás</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="glass-card p-6 rounded-xl">
                <f.icon size={26} className={`${f.color} mb-3`} />
                <h4 className="font-bold mb-2">{f.title}</h4>
                <p className="text-on-surface-variant text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl text-center mb-10 tracking-wider text-on-surface">
          Temas Destacados
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TOPICS.slice(0, 12).map((topic) => {
            const Icon = TOPIC_ICONS[topic.slug];
            return (
              <Link
                key={topic.slug}
                href={`/sintaxis?tema=${topic.slug}`}
                className="glass-card p-4 rounded-xl flex flex-col items-center gap-2 text-center hover:scale-[1.03]"
              >
                <div className={`w-10 h-10 rounded-lg ${levelBgLight[topic.level]} flex items-center justify-center ${levelText[topic.level]}`}>
                  {Icon && <Icon size={18} />}
                </div>
                <span className="text-xs text-on-surface">{topic.title}</span>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/recursos"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <GraduationCap size={16} /> Ver todos los temas y recursos
          </Link>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl mb-4 tracking-wider text-on-surface">
            ¿Listo para aprender?
          </h2>
          <p className="text-on-surface-variant mb-8">
            Empieza ahora gratis. No necesitas instalar nada: la guía también se puede instalar como app para usarla offline.
          </p>
          <Link
            href="/temas"
            className="inline-block bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-xl font-bold neon-glow-pink hover:scale-105 transition-all"
          >
            Comenzar Gratis
          </Link>
        </div>
      </section>
    </>
  );
}
