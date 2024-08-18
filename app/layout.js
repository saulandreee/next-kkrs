import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Greatest Love Story | KKRS 2024",
  description: "KKRS 2024 tahun ini bertema The Greatest Love Story",
  icons: {
    icon: "/logo-nocross-sm.png",
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased text-stone-800/90 bg-[#fce7db] relative", fontSans.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
