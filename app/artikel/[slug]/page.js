import Section from "@/components/Section";
import { faker } from "@faker-js/faker";
import moment from "moment";
import Image from "next/image";

export default function ArticleDetail({ searchParams, params }) {
  console.log(params.slug);
  return (
    <Section
      className={"p-2.5 py-6 relative z-[1]"}
      wrapperClassName={"bg-white rounded-xl p-4 px-4 shadow md:max-w-[600px] lg:shadow-lg lg:max-w-[800px]"}
    >
      <div className="relative w-full aspect-[320/176] rounded-lg mb-4 md:hidden">
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
      <div className="relative w-full aspect-[1080/400] md:aspect-[800/360] rounded-lg mb-4 hidden md:block">
        <Image
          src={faker.image.url({ width: 1080, height: 400 })}
          fill
          quality={""}
          className="object-cover w-full rounded-lg"
          priority
          loading="eager"
          alt={params.slug}
        />
      </div>
      <h1 className="text-lg font-semibold text-center mb-2.5 md:text-xl lg:text-2xl">{faker.lorem.sentence({ min: 6, max: 12 })}</h1>
      <div className="text-center font-semibold mb-2.5 lg:text-lg">
        <span>{moment(faker.date.recent()).format("D MMMM YYYY")}</span>&nbsp;&#x2022;&nbsp;
        <span className="text-mandy-500">{faker.lorem.sentence(3)}</span>
      </div>
      <article className="text-xs md:text-base">{faker.lorem.paragraphs({ min: 6, max: 8 })}</article>
    </Section>
  );
}
