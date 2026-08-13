export type Level = "beginner" | "intermediate" | "advanced";

export interface LevelInfo {
  title: string;
  description: string;
  icon: string;
}

export interface Topic {
  slug: string;
  title: string;
  level: Level;
  description: string;
  tags: string[];
}

export interface CodeExample {
  title: string;
  filename: string;
  level: Level;
  code: string;
  explanation?: string;
}

export interface Exercise {
  id: number;
  title: string;
  description: string;
  difficulty: Level;
  category: string;
  tags: string[];
  hint: string;
  solution: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  level: Level;
  category: string;
  explanation: string;
}

export const LEVELS: Record<Level, LevelInfo> = {
  beginner: { title: "Principiante", description: "Aprende lo básico de Python", icon: "Seedling" },
  intermediate: { title: "Intermedio", description: "Profundiza en estructuras y funciones", icon: "Code" },
  advanced: { title: "Avanzado", description: "Domina POO y técnicas avanzadas", icon: "Rocket" },
};

export const TOPICS: Topic[] = [
  { slug: "variables", title: "Variables y Tipos", level: "beginner", description: "Almacena y manipula datos en tu programa", tags: ["Tipos", "Datos", "int", "str", "float", "bool"] },
  { slug: "strings", title: "Métodos de Strings", level: "beginner", description: "Manipula texto con los métodos más usados", tags: ["upper", "split", "strip", "replace"] },
  { slug: "fstrings", title: "F-Strings", level: "beginner", description: "Interpola variables de forma elegante y legible", tags: ["f''", "formato", "alineación"] },
  { slug: "operadores", title: "Operadores", level: "beginner", description: "Operaciones matemáticas y lógicas", tags: ["Aritméticos", "Comparación", "Lógicos"] },
  { slug: "condicionales", title: "Condicionales", level: "beginner", description: "Toma decisiones en tu código", tags: ["if", "else", "elif", "match"] },
  { slug: "for", title: "Bucles FOR", level: "beginner", description: "Itera sobre secuencias", tags: ["range", "enumerate", "zip"] },
  { slug: "while", title: "Bucles WHILE", level: "beginner", description: "Repetición controlada con condiciones", tags: ["break", "continue", "else"] },
  { slug: "funciones", title: "Funciones", level: "beginner", description: "Bloques de código reutilizables", tags: ["def", "return", "args", "kwargs"] },
  { slug: "listas", title: "Listas", level: "intermediate", description: "Colecciones ordenadas y mutables", tags: ["append", "remove", "sort", "slice"] },
  { slug: "tuplas", title: "Tuplas", level: "intermediate", description: "Secuencias inmutables", tags: ["inmutable", "desempaquetar"] },
  { slug: "diccionarios", title: "Diccionarios", level: "intermediate", description: "Pares clave-valor", tags: ["keys", "values", "items", "get"] },
  { slug: "sets", title: "Conjuntos (Sets)", level: "intermediate", description: "Colecciones sin duplicados", tags: ["union", "intersection", "difference"] },
  { slug: "comprehension", title: "Comprensión de Listas", level: "intermediate", description: "Sintaxis eficiente para crear listas", tags: ["list comprehension", "dict comprehension"] },
  { slug: "random_math", title: "Random y Math", level: "intermediate", description: "Números aleatorios y funciones matemáticas", tags: ["random", "math", "randint"] },
  { slug: "modulos", title: "Módulos y Paquetes", level: "intermediate", description: "Organiza y reutiliza código", tags: ["import", "from", "pip", "venv"] },
  { slug: "pip_venv", title: "Pip y Entornos Virtuales", level: "intermediate", description: "Instala paquetes y aísla dependencias", tags: ["pip install", "venv", "requirements"] },
  { slug: "datetime", title: "Fechas y Hora", level: "intermediate", description: "Trabaja con fechas, horas y timezones", tags: ["datetime", "strftime", "timedelta"] },
  { slug: "typing", title: "Type Hints", level: "intermediate", description: "Anota tipos para código más claro y seguro", tags: ["-> int", "Optional", "List[str]"] },
  { slug: "itertools", title: "Itertools", level: "intermediate", description: "Iteradores avanzados de la librería estándar", tags: ["chain", "product", "count"] },
  { slug: "json_api", title: "JSON y APIs", level: "advanced", description: "Intercambia datos JSON y consume APIs", tags: ["json", "urllib", "requests"] },
  { slug: "poo", title: "POO - Clases", level: "advanced", description: "Programación orientada a objetos", tags: ["class", "__init__", "self", "objeto"] },
  { slug: "excepciones", title: "Excepciones", level: "advanced", description: "Manejo de errores", tags: ["try", "except", "finally", "raise"] },
  { slug: "archivos", title: "Archivos", level: "advanced", description: "Lectura y escritura de archivos", tags: ["open", "read", "write", "with"] },
  { slug: "decoradores", title: "Decoradores", level: "advanced", description: "Modifican el comportamiento de funciones", tags: ["@decorator", "wrapper", "functools"] },
  { slug: "generadores", title: "Generadores", level: "advanced", description: "Iteradores eficientes con yield", tags: ["yield", "next", "StopIteration"] },
  { slug: "regex", title: "Regex", level: "advanced", description: "Expresiones regulares", tags: ["re", "match", "search", "findall"] },
];

export type CodeCategory = (typeof TOPICS)[number]["slug"];
