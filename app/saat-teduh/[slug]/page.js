import Section from "@/components/Section";
import CtfArticle from "@/lib/article";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { faker } from "@faker-js/faker";
import moment from "moment";
import Image from "next/image";

export default async function ArticleDetail({ searchParams, params }) {
  var data = await CtfArticle.getAllPosts(params.slug, undefined);
  data = data.items.map((item) => {
    console.log(item.fields.cover_image.fields.file.url);
    return { ...item.fields, image_url: "https:" + item.fields.cover_image.fields.file.url };
  });
  data = data[0];

  return (
    <Section
      className={"p-2.5 py-6 relative z-[1]"}
      wrapperClassName={"bg-white rounded-xl p-4 px-4 shadow md:max-w-[600px] lg:shadow-lg lg:max-w-[800px]"}
    >
      <div className="relative w-full aspect-[320/176] rounded-lg mb-4 md:hidden">
        <Image
          src={data.image_url}
          fill
          quality={100}
          className="object-cover w-full rounded-lg"
          priority
          loading="eager"
          alt={params.slug}
        />
      </div>
      <div className="relative w-full aspect-[1080/400] md:aspect-[800/360] rounded-lg mb-4 hidden md:block">
        <Image
          src={data.image_url}
          fill
          quality={100}
          className="object-cover w-full rounded-lg"
          priority
          loading="eager"
          alt={params.slug}
        />
      </div>
      <h1 className="text-lg font-semibold text-center mb-2.5 md:text-xl lg:text-2xl">{data.title}</h1>
      <div className="text-center font-semibold mb-2.5 lg:text-lg">
        <span>{moment(data.date).format("D MMMM YYYY")}</span>&nbsp;&#x2022;&nbsp;
        <span className="text-mandy-500">{data.bibleVerse}</span>
      </div>
      <div className="bg-mandy-100 rounded-lg text-xs p-2.5 mb-4 w-full max-w-none lg:text-base lg:p-4 prose">
        {documentToReactComponents(data.verse)}
      </div>
      <article className="text-xs md:text-base prose mb-4 lg:mb-6">{documentToReactComponents(data.html)}</article>
      <p className="text-xs lg:text-sm italic text-mandy-500">Ditulis oleh: {data.author}</p>
    </Section>
  );
}
