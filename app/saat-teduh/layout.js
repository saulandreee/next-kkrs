import "@/app/globals.css";

import { cn } from "@/lib/utils";
import Image from "next/image";

export const metadata = {
  title: "Saat Teduh Yuk | KKRS 2024",
  description: "KKRS 2024 tahun ini bertema The Greatest Love Story",
};

export default function SateLayout({ children }) {
  return (
    <main className="relative">
      <div className="absolute -top-1 !h-auto max-h-full overflow-hidden">
        <Image
          className="object-cover w-full aspect-[435/1966]"
          src={"/images/article/article-bg.svg"}
          width={435}
          height={1966}
          quality={100}
          alt="article-page-background"
        />
      </div>
      {children}
    </main>
  );
}
