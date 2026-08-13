import { LEVELS, TOPICS } from "./types";
import type { CodeExample, Level, Topic } from "./types";
import { EXAMPLES_BASICOS } from "./examples-basicos";
import { EXAMPLES_ESTRUCTURAS } from "./examples-estructuras";
import { EXAMPLES_COLECCIONES } from "./examples-colecciones";
import { EXAMPLES_MODULOS } from "./examples-modulos";
import { EXAMPLES_AVANZADOS } from "./examples-avanzados";
import { EXERCISES } from "./exercises";
import { QUIZ } from "./quiz";

export { LEVELS, TOPICS, EXERCISES, QUIZ };
export type { Level, Topic, CodeExample };

export const CODE_EXAMPLES: Record<string, CodeExample[]> = {
  ...EXAMPLES_BASICOS,
  ...EXAMPLES_ESTRUCTURAS,
  ...EXAMPLES_COLECCIONES,
  ...EXAMPLES_MODULOS,
  ...EXAMPLES_AVANZADOS,
};

export const CODE_CATEGORIES = Object.keys(CODE_EXAMPLES);

export const LEVEL_ORDER: Level[] = ["beginner", "intermediate", "advanced"];

export function topicsByLevel(level: Level): Topic[] {
  return TOPICS.filter((t) => t.level === level);
}

export function countByLevel<T extends { level: Level }>(items: T[]): Record<Level, number> {
  return {
    beginner: items.filter((i) => i.level === "beginner").length,
    intermediate: items.filter((i) => i.level === "intermediate").length,
    advanced: items.filter((i) => i.level === "advanced").length,
  };
}

export const totalExamples = Object.values(CODE_EXAMPLES).reduce((acc, list) => acc + list.length, 0);
export const totalExercises = EXERCISES.length;
export const totalQuizQuestions = QUIZ.length;
