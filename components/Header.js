// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

export default function Header() {
  return (
    <header className="bg-pourri-500 border-b border-mandy-300/50 h-16 flex items-center sticky top-0 z-10">
      <nav className="w-full max-w-[1280px] px-10 mx-auto flex justify-between">
        <Link
          href={"/"}
          className="flex gap-2.5 items-center"
        >
          <Image
            src="/images/logo-nocross@4x.png"
            alt="logo"
            width={48}
            height={48}
            quality={100}
          />
          <span className="text-2xl font-bold">KKRS 2024</span>
        </Link>
        <Button
          size="lg"
          className=""
        >
          Saat Teduh Yuk!
        </Button>
      </nav>
    </header>
  );
}
