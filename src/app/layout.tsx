import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Atri - Fiat",
  description: "Concessionária Atri Fiat Ribeirão Preto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-[#15212a]",
          fontSans.variable
        )}
      >
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
