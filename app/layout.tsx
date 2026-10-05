import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "./site";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const sans = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Noted — Reviews",
  description: "Twenty short reviews of restaurants, schools, universities, hospitals, and hotels.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full bg-[#f7f4ef] font-[family-name:var(--font-sans)] text-[#1b1714] antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
