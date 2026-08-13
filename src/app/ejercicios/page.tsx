import type { Metadata } from "next";
import EjerciciosClient from "./EjerciciosClient";

export const metadata: Metadata = {
  title: "Misiones de Entrenamiento",
  description:
    "Ejercicios prácticos de Python con pistas y soluciones, organizados por nivel y categoría.",
};

export default function EjerciciosPage() {
  return <EjerciciosClient />;
}
