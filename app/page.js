import Article from "@/components/Article";
import ArticleCarousel from "@/components/ArticleCarousel";
import Button from "@/components/Button";
import Section from "@/components/Section";
import TimelinePerkantas from "@/components/TimelinePerkantas";
import { cn } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import { Title } from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";

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
var bigListArticle = [
  {
    image: faker.image.url(240, 150),
    title: faker.lorem.sentences(1),
    date: faker.date.recent(),
    author: faker.person.fullName(),
    description: faker.lorem.sentences(2),
    bible: "Yohanes 3 : 16",
  },
  {
    image: faker.image.url(240, 150),
    title: faker.lorem.sentences(1),
    date: faker.date.recent(),
    author: faker.person.fullName(),
    description: faker.lorem.sentences(2),
    bible: "Yohanes 3 : 16",
  },
  {
    image: faker.image.url(240, 150),
    title: faker.lorem.sentences(1),
    date: faker.date.recent(),
    author: faker.person.fullName(),
    description: faker.lorem.sentences(2),
    bible: "Yohanes 3 : 16",
  },
  {
    image: faker.image.url(240, 150),
    title: faker.lorem.sentences(1),
    date: faker.date.recent(),
    author: faker.person.fullName(),
    description: faker.lorem.sentences(2),
    bible: "Yohanes 3 : 16",
  },
  {
    image: faker.image.url(240, 120),
    title: faker.lorem.sentences(1),
    date: faker.date.recent(),
    author: faker.person.fullName(),
    description: faker.lorem.sentences(2),
    bible: "Yohanes 3 : 16",
  },
  {
    image: faker.image.url(240, 150),
    title: faker.lorem.sentences(1),
    date: faker.date.recent(),
    author: faker.person.fullName(),
    description: faker.lorem.sentences(2),
    bible: "Yohanes 3 : 16",
  },
];

export default function Home() {
  return (
    <main className="">
      <Section
        className={"pt-16 pb-8"}
        wrapperClassName={"flex relative px-4 justify-between"}
      >
        <div className="min-w-[200px] max-w-[300px]">
          <div className="grid gap-1 mb-4">
            <h2 className="text-base font-semibold">KKR SISWA 2024</h2>
            <h1 className="text-3xl font-bold text-mandy-500">The Greatest Love Story</h1>
            <h3 className="text-base font-semibold">For God so LOVED YOU that He gave HIS ONLY SON</h3>
          </div>
          <p className="text-sm">
            Mari kembali menghayati bahwa kita semua adalah bagian dari kisah kasih Allah yang begitu besar dalam dunia, serta senantiasa mengingat
            bahwa hanya Kristus yang mampu memberikan hidup yang penuh makna dan keselamatan yang kekal.
          </p>
        </div>
        <div className="shrink-0 grow-0 relative top-4">
          <Image
            src="/logo-nocross-lg.png"
            quality={100}
            width={120}
            height={120}
            alt="logo"
          />
        </div>
      </Section>
      <Section className={cn("relative min-h-[468px]")}>
        <div className="relative z-[1] grid gap-4 py-16">
          <h1 className="text-2xl text-center font-semibold max-w-[300px] mx-auto">Yuk Mulai Hari dengan Saat Teduh!</h1>
          <div className="grid gap-4">
            <div className="flex justify-center gap-4">
              <div className="flex-1 min-w-40 max-w-48">
                <Image
                  src="/images/landing/sate-list-1.svg"
                  alt="sate-list-1"
                  quality={100}
                  width={120}
                  height={120}
                  className="mx-auto"
                />
                <div className="rounded-full text-sm bg-white p-2 text-center text-mandy font-semibold w-full">
                  <p>Sediakan waktu yang tepat</p>
                </div>
              </div>
              <div className="flex-1 min-w-40 max-w-48">
                <Image
                  src="/images/landing/sate-list-2.svg"
                  alt="sate-list-1"
                  quality={100}
                  width={120}
                  height={120}
                  className="mx-auto"
                />
                <div className="rounded-full text-sm bg-white p-2 text-center text-mandy font-semibold w-full">
                  <p>Berdoalah dan mohon pimpinan Tuhan</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <div className="flex-1 min-w-40 max-w-48">
                <Image
                  src="/images/landing/sate-list-3.svg"
                  alt="sate-list-1"
                  quality={100}
                  width={120}
                  height={120}
                  className="mx-auto"
                />
                <div className="rounded-full text-sm bg-white p-2 text-center text-mandy font-semibold w-full">
                  <p>Baca dan renungkan Firman Tuhan</p>
                </div>
              </div>
              <div className="flex-1 min-w-40 max-w-48">
                <Image
                  src="/images/landing/sate-list-4.svg"
                  alt="sate-list-1"
                  quality={100}
                  width={120}
                  height={120}
                  className="mx-auto"
                />
                <div className="rounded-full text-sm bg-white p-2 text-center text-mandy font-semibold w-full">
                  <p>Tutup kembali dengan doa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/landing/sate-bg.svg"
          alt="sate-bg"
          fill
          quality={100}
          className="object-cover w-full absolute !top-0"
        />
      </Section>
      <Section
        className=""
        wrapperClassName={"grid gap-4 py-8"}
      >
        <h1 className="text-2xl font-semibold text-center mx-auto">Renungan Saat Teduh</h1>
        <div className="grid gap-2">
          {listArticle.map((article, index) => {
            return (
              <Article
                key={index}
                article={article}
                variant={"list"}
                type={"sate"}
                color={index === 0 ? "white" : "pourri"}
              />
            );
          })}
        </div>
        <Link
          href={"/"}
          className="mx-auto"
        >
          <Button variant="ghost">Lihat Renungan lainnya</Button>
        </Link>
      </Section>
      <Section
        className={"py-8"}
        wrapperClassName={"grid gap-4 px-0"}
      >
        <h1 className="text-2xl font-semibold text-center mx-auto">Artikel Rohani Lainnya</h1>
        <ArticleCarousel>
          {bigListArticle.map((article, index) => (
            <Article
              article={article}
              color={"white"}
              key={index}
            />
          ))}
        </ArticleCarousel>
      </Section>
      <Section
        className={"py-8"}
        wrapperClassName={"px-3 grid gap-6"}
      >
        <h1 className="text-2xl font-semibold">Yuk Kenalan Sama Persekutuan Siswa Kristen Jakarta (PSKJ)! </h1>
        <p className="text-sm">
          Remaja merupakan masa mencari identitas diri. Maka dari itu, pelayanan siswa Perkantas berfokus pada penginjilan dan pemuridan kepada siswa,
          sehingga siswa dapat mempertuhankan Kristus dalam setiap aspek hidupnya, serta menangkap identitasnya sebagai yang murid Kristus, menjadi
          garam dan terang bagi lingkungan sekitar, gereja, bangsa, dan dunia.
        </p>
        <h2 className="text-lg font-semibold text-mandy text-center">Kegiatan Rutin PSKJ</h2>
        <div className="">
          <div className="grid gap-1 p-4 text-center">
            <Image
              src={"/images/landing/event-1.svg"}
              alt="Student Fellowship"
              quality={100}
              width={120}
              height={120}
              className="mx-auto"
            />
            <h3 className="font-semibold">Student Fellowship</h3>
            <p className="text-sm">
              Diadakan di wilayah masing-masing setiap bulan (minggu ke 1 dan 3), dengan tujuan membina siswa khususnya pengurus Rohkris dalam
              melayani.
            </p>
          </div>
          <div className="grid gap-1 p-4 text-center">
            <Image
              src={"/images/landing/event-2.svg"}
              alt="Kelompok Kecil"
              quality={100}
              width={120}
              height={120}
              className="mx-auto"
            />
            <h3 className="font-semibold">Kelompok Kecil</h3>
            <p className="text-sm">
              Terdiri dari pengurus atau siswa yang aktif dalam kegiatan Rohkris dan dipimpin oleh TPS (Tim Pembimbing siswa) serta Staf Siswa..
            </p>
          </div>
          <div className="grid gap-1 p-4 text-center">
            <Image
              src={"/images/landing/event-1.svg"}
              alt="Student Fellowship"
              quality={100}
              width={120}
              height={120}
              className="mx-auto"
            />
            <h3 className="font-semibold">Visitasi Sekolah</h3>
            <p className="text-sm">Pendampingan dan kunjungan Rohkris yang dikerjakan oleh TPS.</p>
          </div>
        </div>
      </Section>
      <Section wrapperClassName={"p-0 px-0 pb-8"}>
        <h2 className="text-lg font-semibold text-mandy text-center">Kegiatan Non-Rutin PSKJ</h2>
        <ArticleCarousel>
          <div className="relative rounded-xl shadow aspect-[224/232] overflow-hidden">
            <Image
              src={"/images/landing/event-kkrs.png"}
              alt="KKRS"
              quality={100}
              width={224}
              height={232}
              className="object-cover w-full absolute top-0"
            />
            <div className="absolute bottom-0 text-white px-4 pb-2.5">
              <h3 className="font-semibold mb-1.5">KKR Siswa</h3>
              <p>Kebaktian Kebangunan Rohani Siswa Jakarta</p>
            </div>
          </div>
          <div className="relative rounded-xl shadow aspect-[224/232] overflow-hidden">
            <Image
              src={"/images/landing/event-kkrs.png"}
              alt="KKRS"
              quality={100}
              width={224}
              height={232}
              className="object-cover w-full absolute top-0"
            />
            <div className="absolute bottom-0 text-white px-4 pb-2.5">
              <h3 className="font-semibold mb-1.5">KKR Siswa</h3>
              <p>Kebaktian Kebangunan Rohani Siswa Jakarta</p>
            </div>
          </div>
          <div className="relative rounded-xl shadow aspect-[224/232] overflow-hidden">
            <Image
              src={"/images/landing/event-kkrs.png"}
              alt="KKRS"
              quality={100}
              width={224}
              height={232}
              className="object-cover w-full absolute top-0"
            />
            <div className="absolute bottom-0 text-white px-4 pb-2.5">
              <h3 className="font-semibold mb-1.5">KKR Siswa</h3>
              <p>Kebaktian Kebangunan Rohani Siswa Jakarta</p>
            </div>
          </div>
          <div className="relative rounded-xl shadow aspect-[224/232] overflow-hidden">
            <div className="relative">
              <Image
                src={"/images/landing/event-kkrs.png"}
                alt="KKRS"
                quality={100}
                fill
                className="object-cover h-full absolute top-0"
              />
            </div>
            <div className="absolute bottom-0 t1.5xt-white px-4 z-[1]">
              <h3 className="font-semibold mb-4">KKR Siswa</h3>
              <p className="text-sm">Kebaktian Kebangunan Rohani Siswa Jakarta</p>
            </div>
          </div>
        </ArticleCarousel>
      </Section>
    </main>
  );
}
