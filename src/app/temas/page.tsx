import type { Metadata } from "next";
import { Suspense } from "react";
import TemasClient from "./TemasClient";

export const metadata: Metadata = {
  title: "Temas",
  description: "Todos los temas de Python organizados por nivel: principiante, intermedio y avanzado.",
};

export default function TemasPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-24 px-4 text-center text-on-surface-variant">Cargando temas...</div>
      }
    >
      <TemasClient />
    </Suspense>
  );
}
