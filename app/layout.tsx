// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Melivan — Motion design portfolio",
  description: "Portfolio of Melivan, motion designer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-transparent text-zinc-50">
        <Header />
        <main className="pt-20 pb-10">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}