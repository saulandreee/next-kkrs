import Image from "next/image";
import React from "react";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("shadow overflow-hidden w-full", {
  variants: {
    variant: {
      default: "rounded-xl",
      list: "rounded-xl flex gap-2 p-2 md:gap-4 md:p-3 lg:gap-6 lg:p-4 lg:rounded-2xl",
      main: "rounded-2xl p-4 h-fit",
    },
    color: {
      white: "bg-white",
      pourri: "bg-pourri-300",
    },
  },
  defaultVariants: {
    variant: "default",
    color: "white",
  },
});
export default function Article({ article, variant, color, type, forceSize, className }) {
  return (
    <div className={cn(cardVariants({ variant, color, className }), forceSize === "sm" ? "p-2 md:p-2 lg:p-2" : "")}>
      {variant === "list" ? (
        <>
          <div
            className={cn(
              "relative aspect-[96/72] w-[96px] grow-0 shrink-0 h-fit md:w-[160px] md:aspect-[232/160] lg:w-[232px]",
              forceSize === "sm" ? "md:w-aspect-[96/72] md:w-[96px] lg:w-aspect-[96/72] lg:w-[96px] :" : ""
            )}
          >
            <Image
              src={article.image}
              alt={article.title}
              quality={100}
              fill
              className="rounded-lg w-full object-cover lg:rounded-xl"
              sizes="(min-width: 300px) 96px, (min-width: 768px) 160px, (min-width: 1080px) 232px, 232px"
            />
          </div>
          <div className="grid gap-0.5 h-fit">
            <div className={cn("text-base font-semibold line-clamp-2 md:text-xl lg:text-2xl", forceSize === "sm" ? "md:text-base lg:text-base" : "")}>
              {article.title}
            </div>
            {type === "sate" ? (
              <div className={cn("text-sm md:text-base", forceSize === "sm" ? "md:text-sm" : "")}>
                <span className="">{moment(article.date).format("D MMMM YYYY")}</span>&nbsp;&#x2022;&nbsp;
                <span className="text-mandy">{article.bible}</span>
              </div>
            ) : (
              <div className="text-sm md:text-base">
                <span>{moment(article.date).format("D MMMM YYYY")}</span>&nbsp;&#x2022;&nbsp;
                <span className="">{article.author}</span>
              </div>
            )}
            <p className={cn("text-sm line-clamp-3 md:text-base", forceSize === "sm" ? "md:text-sm lg:text-sm" : "")}>{article.description}</p>
          </div>
        </>
      ) : variant === "main" ? (
        <>
          <div className="relative aspect-[512/300] w-full mb-4">
            <Image
              src={article.image}
              alt={article.title}
              quality={100}
              fill
              className="object-cover w-full rounded-xl"
              sizes="(min-width: 1080px) 512px, 512px"
            />
          </div>
          <div className="text-2xl font-semibold line-clamp-2">{article.title}</div>
          {type === "sate" ? (
            <div className="text-base">
              <span className="">{moment(article.date).format("D MMMM YYYY")}</span>&nbsp;&#x2022;&nbsp;
              <span className="text-mandy">{article.bible}</span>&nbsp;-&nbsp;
              <p className="line-clamp-3 inline">{article.description}</p>
            </div>
          ) : (
            <div>
              <span className="">{moment(article.date).format("D MMMM YYYY")}</span>&nbsp;&#x2022;&nbsp;
              <span className="">{article.author}</span>&nbsp;-&nbsp;
              <p className="line-clamp-3 inline">{article.description}</p>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="!aspect-[240/150]">
            <Image
              src={article.image}
              alt={article.title}
              quality={100}
              width={240}
              height={150}
              className="object-cover w-full"
              sizes="(min-width: 300px) 240px, (min-width: 768px) 300px, 300px"
            />
          </div>
          <div className="grid gap-0.5 p-4 py-4">
            <div className="text-base font-semibold line-clamp-2">{article.title}</div>
            {type === "sate" ? (
              <div>
                <span className="text-sm">{moment(article.date).format("D MMMM YYYY")}</span> &#x2022;{" "}
                <span className="text-mandy">{article.bible}</span>
              </div>
            ) : (
              <div>
                <span className="text-sm">{moment(article.date).format("D MMMM YYYY")}</span> &#x2022; <span className="">{article.author}</span>
              </div>
            )}
            <p className="text-sm line-clamp-3">{article.description}</p>
          </div>
        </>
      )}
    </div>
  );
}
