"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { BASE_PATH } from "@/lib/config";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function ServiceWorkerRegister() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register(`${BASE_PATH}/sw.js`).catch(() => {
        // El SW falla en algunos navegadores con file:// - no es crítico
      });
    }

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  const install = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    setDeferredPrompt(null);
  };

  if (!deferredPrompt) return null;

  return (
    <button
      onClick={install}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-xl bg-primary-container text-on-primary-container font-bold neon-glow-purple hover:scale-105 transition-all"
    >
      <Download size={18} />
      Instalar App
    </button>
  );
}
