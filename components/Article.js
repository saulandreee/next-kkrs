import Image from "next/image";
import React from "react";
import { faker } from "@faker-js/faker";
import moment from "moment";

export default function Article({ article, variant }) {
  if (variant === "small-card") {
    return (
      <div className="flex gap-4 w-full p-2.5 rounded-lg transition-all">
        <div className="relative !aspect-[140/96] w-[140px] h-fit rounded-lg overflow-hidden shrink-0">
          <Image
            src={`https://picsum.photos/140/96?id=
            ${Math.round(Math.random() * 100)}`}
            alt="article-image"
            fill
            quality={100}
          />
        </div>
        <div>
          <div className="inline-block px-2 py-1 rounded-full mb-2.5 text-sm bg-gradient-to-r from-mandy to-mandy-400 text-pourri-500 font-semibold">
            {faker.lorem.words({ min: 1, max: 2 })}
          </div>
          <div className="flex gap-2.5">
            <div className="text-center">
              <p className="text-mandy-500 font-bold">{moment().format("MMM")}</p>
              <p className="text-3xl font-bold">{moment().format("DD")}</p>
            </div>
            <div>
              <span className="font-semibold">{faker.lorem.sentence({ min: 1, max: 8 })}</span>
              <p>{faker.lorem.lines({ min: 1, max: 1 })}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (variant === "big") {
    return (
      <div className="p-2.5">
        <div className="relative w-full aspect-[500/300] rounded-lg overflow-hidden mb-1.5">
          <Image
            src={`https://picsum.photos/500/300?id=
              ${Math.round(Math.random() * 100)}`}
            alt="article-image"
            fill
            quality={100}
            sizes="(max-width: 600px) 100vw, 500px"
          />
        </div>
        <div className="py-2.5 px-2.5">
          <div className="flex items-center justify-between mb-2.5">
            <span className="px-2.5 py-1.5 rounded-full text-sm bg-gradient-to-r from-mandy to-mandy-400 text-pourri-500 font-semibold">
              {faker.lorem.words({ min: 1, max: 2 })}
            </span>
          </div>
          <div className="flex gap-4">
            <div className="text-center px-2.5 ">
              <p className="text-lg font-semibold text-mandy-500">{moment().format("MMM")}</p>
              <p className="text-4xl font-bold">{moment().format("DD")}</p>
            </div>
            <div>
              <span className="text-lg font-semibold mb-2">{faker.lorem.sentence({ min: 5, max: 10 })}</span>
              <p>{faker.lorem.lines({ min: 2, max: 3 })}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[320px] lg:max-w-full rounded-3xl bg-pourri-100 h-fit">
      <div className="relative w-full aspect-[320/144] rounded-t-3xl overflow-hidden">
        <Image
          src={`https://picsum.photos/500/300?id=
              ${Math.round(Math.random() * 100)}`}
          alt="Article Image"
          fill
          quality={100}
        />
      </div>
      <div className="p-4">
        {/* <div className="inline-block mb-1.5 font-semibold px-2 py-1 rounded-full text-xs bg-gradient-to-r from-mandy to-mandy-400 text-pourri-500">
          {faker.lorem.words({ min: 1, max: 2 })}
        </div> */}
        <div>
          <div className="text font-bold mb-2">{faker.lorem.sentence({ min: 5, max: 10 })}</div>
          <p className="text-sm">{faker.lorem.lines({ min: 1, max: 1 })}</p>
        </div>
      </div>
    </div>
  );
}
