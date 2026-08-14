import type { Metadata, Viewport } from "next";
import { Bangers, Poppins, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import { BASE_PATH, SITE } from "@/lib/config";

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.title} - ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "python",
    "programación",
    "aprender python",
    "tutorial python",
    "ejercicios python",
    "quiz python",
    "DuocUC",
    "gratis",
  ],
  authors: [{ name: SITE.author }],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.title} - ${SITE.name}`,
    description: SITE.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Guía de Python - Aprende Python gratis desde cero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.title} - ${SITE.name}`,
    description: SITE.description,
    images: ["/og.png"],
  },
  icons: {
    icon: `${BASE_PATH}/icons/icon-192.png`,
    apple: `${BASE_PATH}/icons/apple-touch-icon.png`,
  },
  manifest: `${BASE_PATH}/manifest.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: "#0f1417",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${bangers.variable} ${poppins.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Starfield />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ServiceWorkerRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
