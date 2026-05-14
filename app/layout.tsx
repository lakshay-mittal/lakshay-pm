import type { Metadata } from "next";
import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";
// Correct: No curly braces because you used 'export default'
import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import MouseSpotlight from "@/components/MouseSpotlight";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Lakshay Mittal — Product Manager",
  description:
    "PM portfolio of Lakshay Mittal. IIM Indore MBA, ex-JPMorgan SE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        <AmbientBackground />
        <MouseSpotlight />
        <Navbar />
        <main className="relative z-10 pt-24">{children}</main>
      </body>
    </html>
  );
}
