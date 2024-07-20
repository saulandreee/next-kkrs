import Image from "next/image";
import React from "react";
import { faker } from "@faker-js/faker";
import moment from "moment";

export default function Article({ article, variant }) {
  if (variant === "small-card") {
    return (
      <div className="flex gap-4 w-full p-2.5 rounded-lg transition-all hover:scale-[1.005] hover:shadow-lg hover:shadow-mandy-500/50">
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
          <div className="flex gap-2 items-center mb-2">
            <span className="px-2 py-1 rounded-full text-sm bg-gradient-to-r from-mandy to-mandy-400 text-pourri-500 font-semibold">
              {faker.lorem.words({ min: 1, max: 2 })}
            </span>
            <span className="bg-mandy-500/30 p-0.5 px-1.5 rounded-full text-sm font-medium">{moment(faker.date.soon()).format("D/MM/YYYY")}</span>
          </div>
          <span className="font-semibold">{faker.lorem.sentence({ min: 5, max: 10 })}</span>
          <p>{faker.lorem.lines({ min: 1, max: 2 })}</p>
        </div>
      </div>
    );
  }

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
          <span className="bg-mandy-500/30 p-0.5 px-1.5 rounded-full text-sm font-medium">{moment(faker.date.soon()).format("D/MM/YYYY")}</span>
        </div>
        <span className="text-lg font-semibold mb-2">{faker.lorem.sentence({ min: 5, max: 10 })}</span>
        <p>{faker.lorem.lines({ min: 2, max: 3 })}</p>
      </div>
    </div>
  );
}
