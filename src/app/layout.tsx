import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import "./globals.css";

import Navbar from "../components/layout/Navbar";

export const metadata: Metadata = {
  title: "BookHive | E-commerce de Livros",
  description:
    "Bookly é um e-commerce moderno de livros, com foco em experiência do usuário, performance e interface profissional.",
  keywords: [
    "e-commerce de livros",
    "livraria online",
    "books store",
    "frontend portfolio",
    "web development"
  ],
  authors: [{ name: "Dryelle Ebelin" }],
  creator: "Dryelle Ebelin",
  metadataBase: new URL("https://bookhive-web.vercel.app"),
  icons: {
    icon: "/favicon.jpeg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="antialiased"
      >
        <Navbar />

        {children}

        <Toaster richColors position="top-right" expand={false} />
        <Analytics />
      </body>
    </html>
  );
}
