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
      <div className="absolute w-full">
        <div className="relative aspect-[435/1966]">
          <Image
            className="object-cover w-full "
            src={"/images/article/article-bg.svg"}
            fill
            quality={100}
            alt="article-page-background"
          />
        </div>
      </div>
      {children}
    </main>
  );
}
