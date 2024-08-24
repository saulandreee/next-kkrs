import Section from "@/components/Section";
import { faker } from "@faker-js/faker";
import moment from "moment";
import Image from "next/image";

export default function ArticleDetail({ searchParams, params }) {
  console.log(params.slug);
  return (
    <Section
      className={"p-2.5 py-6 relative z-[1]"}
      wrapperClassName={"bg-white rounded-xl p-4 px-4 shadow"}
    >
      <div className="relative w-full aspect-[320/176] rounded-lg mb-4">
        <Image
          src={faker.image.url({ width: 320, height: 176 })}
          fill
          quality={""}
          className="object-cover w-full rounded-lg"
          priority
          loading="eager"
          alt={params.slug}
        />
      </div>
      <h1 className="text-lg font-semibold text-center mb-2.5">{faker.lorem.sentence({ min: 6, max: 12 })}</h1>
      <div className="text-center font-semibold mb-2.5">
        <span>{moment(faker.date.recent()).format("D MMMM YYYY")}</span>&nbsp;&#x2022;&nbsp;
        <span className="text-mandy-500">{faker.lorem.sentence(3)}</span>
      </div>
      <article className="text-xs">{faker.lorem.paragraphs({ min: 6, max: 8 })}</article>
    </Section>
  );
}
