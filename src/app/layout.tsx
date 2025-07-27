import type { Metadata } from "next";
import "./globals.css";
import { TopBar } from "@/components/TopBar";


export const metadata: Metadata = {
  title: "Modos de renderizado",
  description: "Curso de renderizado con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <TopBar/>
        {children}
      </body>
    </html>
  );
}
