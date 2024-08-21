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
import { ArrowLeft, MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MobileHeader() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
        >
          <MenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="px-3 py-1 flex gap-2 items-center">
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
        <div className="px-3"></div>
      </DrawerContent>
    </Drawer>
  );
}
