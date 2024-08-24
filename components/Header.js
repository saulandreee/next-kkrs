// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <header className="bg-white h-14 lg:h-[72px] flex items-center py-3 px-4 sticky top-0 z-10 shadow-sm">
      <nav className="w-full max-w-[1280px] mx-auto flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <MobileHeader className={"lg:hidden"} />
          <Link
            href={"/"}
            className="flex gap-2.5 items-center"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={48}
              height={48}
              quality={100}
              sizes="(min-width: 600px) 48px, (min-width: 1000px) 100px, 200px"
            />
            <span className="text-mandy-500 text-sm md:text-lg lg:text-2xl font-extrabold">KKRS 2024</span>
          </Link>
        </div>
        <div className="flex gap-2.5">
          <div className="hidden lg:flex lg:items-center lg:gap-2.5">
            <Link href={"/"}>
              <Button variant="ghost">Beranda</Button>
            </Link>

            <Link href={"/artikel"}>
              <Button variant="ghost">Artikel</Button>
            </Link>

            <Link href={"/#about-pskj"}>
              <Button variant="ghost">Tentang PSKJ</Button>
            </Link>
          </div>
          <Link
            href={"/saat-teduh"}
            className="lg:hidden"
          >
            <Button
              className=""
              size="sm"
            >
              Saat Teduh Yuk!
            </Button>
          </Link>
          <Link
            href={"/saat-teduh"}
            className="hidden lg:inline"
          >
            <Button className="">Saat Teduh Yuk!</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
