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
        className={"py-6 relative z-[1]"}
        wrapperClassName={"grid gap-6 px-4"}
      >
        <h1 className="text-xl text-center font-semibold">Renungan Saat Teduh</h1>
        <div className="px-8">
          <Input
            placeholder="Cari Renungan"
            icon={<Search />}
            // value={""}
          />
        </div>
        <div className="grid gap-2.5">
          {listArticle.map((article) => {
            return (
              <Article
                type={"sate"}
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
