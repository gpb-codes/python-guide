import Link from "next/link";
import { Globe, Download } from "lucide-react";
import { SITE } from "@/lib/config";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 py-12 bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-2xl sm:text-3xl text-primary font-display tracking-wider">Python</h3>
          <p className="text-on-surface-variant">
            Guía de Python 100% gratis para aprender programación. Instálala como app en tu navegador.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <a
              href="https://instagram.com/gabrielpedreros"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://gpb-codes.github.io/gabrielPedreros/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all text-sm flex items-center gap-2"
            >
              <Globe size={14} /> Portfolio
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all text-sm flex items-center gap-2"
            >
              <GithubIcon /> Código fuente
            </a>
            <Link
              href="/recursos#descargas"
              className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all text-sm flex items-center gap-2"
            >
              <Download size={14} /> Descargas
            </Link>
          </div>
          <p className="text-sm text-on-surface-variant mt-2">
            © {new Date().getFullYear()} Python Guide - Hecho por{" "}
            <span className="text-secondary font-bold">{SITE.author}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
