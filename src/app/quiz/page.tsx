import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "Quiz de Python",
  description:
    "Pon a prueba tus conocimientos con 50 preguntas de Python con explicaciones, niveles y descarga de resultados.",
};

export default function QuizPage() {
  return <QuizClient />;
}
