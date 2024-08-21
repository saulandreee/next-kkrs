import Image from "next/image";
import React from "react";
import { faker } from "@faker-js/faker";
import moment from "moment";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("", {
  variants: {
    variant: {
      default: "rounded-xl",
      list: "rounded-xl flex gap-2 p-2 shadow",
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
export default function Article({ article, variant, color, type, className }) {
  return (
    <div className={cn(cardVariants({ variant, color, className }))}>
      {variant === "list" ? (
        <>
          <Image
            src={article.image}
            alt={article.title}
            quality={100}
            width={80}
            height={64}
            className="rounded-lg grow-0 shrink-0 h-fit"
          />
          <div className="grid gap-0.5">
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
      ) : (
        <>
          <Image
            src={article.image}
            alt={article.title}
            quality={100}
            width={240}
            height={150}
          />
          <div className="grid gap-0.5">
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
            <p className="text-sm line-clamp-2">{article.description}</p>
          </div>
        </>
      )}
    </div>
  );
}
