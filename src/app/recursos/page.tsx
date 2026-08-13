import type { Metadata } from "next";
import RecursosClient from "./RecursosClient";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Recursos para aprender Python: documentación oficial, cursos gratis, libros, hojas de ruta y descargas.",
};

export default function RecursosPage() {
  return <RecursosClient />;
}
