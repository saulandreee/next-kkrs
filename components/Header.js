// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <header className="bg-white h-14 lg:h-[88px] flex items-center py-3 px-4 sticky top-0 z-10 shadow-sm">
      <nav className="w-full max-w-[1280px] mx-auto flex gap-2 items-center">
        <MobileHeader />
        <Link
          href={"/"}
          className="flex gap-2.5 items-center flex-1"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={48}
            height={48}
            quality={100}
            sizes="(min-width:300px) 28px, (min-width: 600px) 48px"
          />
          <span className="text-mandy-500 text-sm font-extrabold">KKRS 2024</span>
        </Link>
        <Button
          className=""
          size="sm"
        >
          Saat Teduh Yuk!
        </Button>
      </nav>
    </header>
  );
}
