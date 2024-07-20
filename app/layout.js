import "@/app/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Header from "@/components/Header";

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
      <body className={cn("min-h-screen bg-background font-sans antialiased text-stone-800/90 bg-[#fce7db]", fontSans.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
