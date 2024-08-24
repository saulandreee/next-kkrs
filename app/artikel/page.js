import Section from "@/components/Section";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Article from "@/components/Article";
import { faker } from "@faker-js/faker";
import Pagination from "@/components/Pagination";

var listArticle = [
  {
    image: faker.image.url(80, 64),
    title: faker.lorem.sentences(1),
    date: faker.date.recent(),
    author: faker.person.fullName(),
    description: faker.lorem.sentences(2),
    bible: "Yohanes 3 : 16",
  },
  {
    image: faker.image.url(80, 64),
    title: faker.lorem.sentences(1),
    date: faker.date.recent(),
    author: faker.person.fullName(),
    description: faker.lorem.sentences(2),
    bible: "Yohanes 3 : 16",
  },
  {
    image: faker.image.url(80, 64),
    title: faker.lorem.sentences(1),
    date: faker.date.recent(),
    author: faker.person.fullName(),
    description: faker.lorem.sentences(2),
    bible: "Yohanes 3 : 16",
  },
  {
    image: faker.image.url(80, 64),
    title: faker.lorem.sentences(1),
    date: faker.date.recent(),
    author: faker.person.fullName(),
    description: faker.lorem.sentences(2),
    bible: "Yohanes 3 : 16",
  },
  {
    image: faker.image.url(80, 64),
    title: faker.lorem.sentences(1),
    date: faker.date.recent(),
    author: faker.person.fullName(),
    description: faker.lorem.sentences(2),
    bible: "Yohanes 3 : 16",
  },
  {
    image: faker.image.url(80, 64),
    title: faker.lorem.sentences(1),
    date: faker.date.recent(),
    author: faker.person.fullName(),
    description: faker.lorem.sentences(2),
    bible: "Yohanes 3 : 16",
  },
];

export default function ArticleListPage({ searchParams }) {
  console.log(searchParams);
  return (
    <>
      <Section
        className={"py-6 relative z-[1] lg:py-10"}
        wrapperClassName={"grid gap-6 px-4"}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mb-4">
          <h1 className="text-xl text-center font-semibold lg:text-3xl">Artikel Rohani</h1>
          <div className="px-8 lg:px-0 lg:w-[300px]">
            <Input
              placeholder="Cari Artikel"
              icon={<Search />}

              // value={""}
            />
          </div>
        </div>
        <div className="grid gap-2.5">
          {listArticle.map((article) => {
            return (
              <Article
                variant={"list"}
                article={article}
                key={article.date}
              />
            );
          })}
        </div>
        <div>
          <Pagination
            count={2}
            page={parseInt(searchParams.page) || 1}
          />
        </div>
      </Section>
    </>
  );
}
