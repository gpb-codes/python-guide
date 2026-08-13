"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { BASE_PATH } from "@/lib/config";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/temas", label: "Temas" },
  { href: "/sintaxis", label: "Sintaxis" },
  { href: "/ejercicios", label: "Ejercicios" },
  { href: "/quiz", label: "Quiz" },
  { href: "/recursos", label: "Recursos" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-lg border-b border-primary/20">
        <nav className="flex justify-between items-center px-4 sm:px-6 max-w-7xl mx-auto h-16">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src={`${BASE_PATH}/python.png`}
              alt="Python"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
              unoptimized
            />
            <span className="text-primary text-xl sm:text-2xl font-bold">Python</span>
          </Link>
          <div className="hidden md:flex items-center gap-4 sm:gap-5">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    active
                      ? "text-secondary font-bold border-b-2 border-secondary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 text-on-surface-variant"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-2 text-on-surface-variant"
            aria-label="Cerrar menú"
          >
            <X size={24} />
          </button>
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-2xl ${pathname === link.href ? "text-secondary" : "text-on-surface"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
