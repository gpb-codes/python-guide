import type { Metadata } from "next";
import { Suspense } from "react";
import SintaxisClient from "./SintaxisClient";

export const metadata: Metadata = {
  title: "Laboratorio de Sintaxis",
  description:
    "Ejemplos de código Python con resaltado de sintaxis, botón de copiar y descarga de archivos .py.",
};

export default function SintaxisPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-24 px-4 text-center text-on-surface-variant">Cargando ejemplos...</div>
      }
    >
      <SintaxisClient />
    </Suspense>
  );
}
