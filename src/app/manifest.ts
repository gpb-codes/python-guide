import type { MetadataRoute } from "next";
import { BASE_PATH } from "@/lib/config";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Python Guide - Aprende Python",
    short_name: "Python Guide",
    description:
      "Guía interactiva de Python: temas, ejemplos de código, ejercicios y quiz. Funciona offline.",
    lang: "es",
    start_url: `${BASE_PATH}/`,
    scope: `${BASE_PATH}/`,
    display: "standalone",
    background_color: "#0f1417",
    theme_color: "#0f1417",
    icons: [
      {
        src: `${BASE_PATH}/icons/icon-192.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${BASE_PATH}/icons/icon-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: `${BASE_PATH}/icons/icon-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
