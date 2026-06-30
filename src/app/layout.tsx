import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Abhishek Jujjuvarapu | Portfolio",
  description: "Full-Stack Engineer, Cybersecurity Professional, and Founder @ CodeLoom. Architecting secure, scalable, and high-performance applications.",
  keywords: ["Abhishek Jujjuvarapu", "Full-Stack Engineer", "Cybersecurity", "CodeLoom Founder", "Next.js Portfolio", "Software Engineer"],
  authors: [{ name: "Abhishek Jujjuvarapu" }],
  openGraph: {
    title: "Abhishek Jujjuvarapu | Portfolio",
    description: "Full-Stack Engineer, Cybersecurity Professional, and Founder @ CodeLoom.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${jetBrainsMono.variable} ${playfair.variable} font-sans ${inter.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
