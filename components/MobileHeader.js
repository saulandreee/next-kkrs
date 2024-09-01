"use client";

import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Button from "./Button";
import { ArrowLeft, Building2, House, LibraryBig, MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export default function MobileHeader({ className }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleLinkClick = (href) => {
    router.push(href);
    setOpen(false);
  };
  const currentPath = usePathname();
  return (
    <Drawer
      direction="left"
      className={className}
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className={className}
        >
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent wrapperClassName={className}>
        <div className="px-3 py-1 flex gap-2 items-center mb-6 border-b border-mandy-500">
          <DrawerClose asChild>
            <Button
              size="icon"
              variant="ghost"
            >
              <ArrowLeft />
            </Button>
          </DrawerClose>
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
              sizes="(min-width: 300px) 28px, (min-width: 600px) 48px"
            />
            <span className="text-mandy-500 font-extrabold">KKRS 2024</span>
          </Link>
        </div>
        <div className="px-2 grid gap-2">
          <DrawerClose asChild>
            <Button
              variant={"ghost"}
              onClick={() => handleLinkClick("/")}
              className={cn("w-full justify-start rounded-lg px-4 gap-2.5", currentPath === "/" ? "bg-mandy-100" : "")}
              size="lg"
            >
              <House className="w-6 h-6" />
              Beranda
            </Button>
          </DrawerClose>
          {/* <DrawerClose asChild>
            <Button
              variant={"ghost"}
              onClick={() => handleLinkClick("/artikel")}
              className={cn("w-full justify-start rounded-lg px-4 gap-2.5", currentPath.includes("/artikel") ? "bg-mandy-100" : "")}
              size="lg"
            >
              <LibraryBig className="w-6 h-6" />
              Artikel
            </Button>
          </DrawerClose> */}
          <DrawerClose asChild>
            <Button
              variant={"ghost"}
              onClick={() => handleLinkClick("/?#about-pskj")}
              className={cn("w-full justify-start rounded-lg px-4 gap-2.5", currentPath.includes("#about-pskj") ? "bg-mandy-100" : "")}
              size="lg"
            >
              <Building2 className="w-6 h-6" />
              Tentang PSKJ
            </Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
