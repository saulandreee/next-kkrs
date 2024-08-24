import "@/app/globals.css";

import { cn } from "@/lib/utils";
import Image from "next/image";

export const metadata = {
  title: "Saat Teduh Yuk | KKRS 2024",
  description: "KKRS 2024 tahun ini bertema The Greatest Love Story",
};

export default function SateLayout({ children }) {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute -top-1 !h-auto max-h-full overflow-hidden md:hidden">
        <Image
          className="object-cover w-full aspect-[435/1966]"
          src={"/images/article/article-bg.svg"}
          width={435}
          height={1966}
          quality={100}
          alt="article-page-background"
        />
      </div>
      <div className="absolute top-20 w-[115%] aspect-[1650/1721] overflow-hidden hidden md:inline-block left-1/2 -translate-x-1/2">
        <Image
          src={"/images/article/artikel-bg-desktop.svg"}
          fill
          className="object-cover w-full"
          quality={100}
          alt="article-page-background"
        />
      </div>
      {children}
    </main>
  );
}
