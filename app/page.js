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

var eventPSKJ = [
  {
    title: "KKR Siswa",
    description: "Kebaktian Kebangunan Rohani Siswa Jakarta",
    image: faker.image.url({ width: 224, height: "232" }),
  },
  {
    title: "KKSJ",
    description: "Kamp Kepemimpinan Siswa Jakarta",
    image: faker.image.url({ width: 224, height: "232" }),
  },
  {
    title: "RKK",
    description: "Retreat Kelompok Kecil",
    image: faker.image.url({ width: 224, height: "232" }),
  },
  {
    title: "BHS",
    description: "Beyond High School",
    image: faker.image.url({ width: 224, height: "232" }),
  },
  {
    title: "KPD",
    description: "Kebaktian Pengutusan dan Doa",
    image: faker.image.url({ width: 224, height: "232" }),
  },
  {
    title: "HDSN",
    description: "Hari Doa Siswa Nasional",
    image: faker.image.url({ width: 224, height: "232" }),
  },
];

var sejarah = [
  {
    date: "29 Juni 1971",
    text: "Pelayanan Mahasiswa Perkantas dirintis oleh Soen Siregar, Jonathan Parapak, David Wang, dan Jimmy Kuswandi.",
    image: faker.image.url({ width: 240, height: 150 }),
  },
  {
    date: "1984",
    text: "Mangapul Sagala memuridkan beberapa remaja HKBP Kernolong (Sahala, siswa SMA 30, Marojahan, SMA 68, dan Daniel Tobing, SMA 1). Di tahun ini PSKJ hadir dan mulai melayani siswa dari berbagai sekolah.",
    image: faker.image.url({ width: 240, height: 150 }),
  },
  {
    date: "1985",
    text: "Diadakan Natal Siswa se-Jakarta.",
    image: faker.image.url({ width: 240, height: 150 }),
  },
  {
    date: "1987",
    text: "KKSJ (Kamp Kepemimpinan Siswa se-Jakarta) diadakan untuk pertama kalinya. KKSJ bertujuan meningkatkan kualitas pelayanan siswa di tiap sekolah.",
    image: faker.image.url({ width: 240, height: 150 }),
  },
  {
    date: "1988",
    text: "PSKJ (di Jakarta Pusat) mulai didampingi oleh TPS (Tim Pembimbing Siswa).",
    image: faker.image.url({ width: 240, height: 150 }),
  },
  {
    date: "1989",
    text: "PSKJ hadir di Jakarta Selatan.",
    image: faker.image.url({ width: 240, height: 150 }),
  },
  {
    date: "1992",
    text: "PSKJ hadir di Jakarta Barat.",
    image: faker.image.url({ width: 240, height: 150 }),
  },
  {
    date: "1994",
    text: "PSKJ hadir di Depok.",
    image: faker.image.url({ width: 240, height: 150 }),
  },
  {
    date: "2010",
    text: "PSKJ hadir di Jakarta Timur 2(jalan raya Bogor dan sekitarnya)",
    image: faker.image.url({ width: 240, height: 150 }),
  },
  {
    date: "2024",
    text: "14 sekolah terus dilayani dan 5 orang staf siswa aktif melayani serta 2 staf yang sedang melanjutkan studinya.",
    image: faker.image.url({ width: 240, height: 150 }),
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
          {eventPSKJ.map((event) => {
            console.log(event);
            return (
              <div
                className="relative rounded-xl shadow aspect-[224/232] overflow-hidden"
                key={event.title}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  quality={100}
                  width={224}
                  height={232}
                  className="object-cover w-full absolute top-0"
                />
                <div className="absolute bottom-0 text-white px-4 pb-2.5">
                  <h3 className="font-semibold mb-1.5">{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            );
          })}
        </ArticleCarousel>
      </Section>

      <Section wrapperClassName={"p-0 px-0 pb-8"}>
        <h2 className="text-lg font-semibold text-mandy text-center">Sejarah PSKJ</h2>
        <ArticleCarousel loop={false}>
          {sejarah.map((card) => {
            return (
              <div
                className="rounded-xl bg-white shadow"
                key={card.text}
              >
                <div className="!aspect-[240/150] rounded-t-xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.text}
                    quality={100}
                    width={240}
                    height={150}
                    className="object-cover w-full"
                  />
                </div>
                <div className="grid gap-0.5 p-4 py-4">
                  <h3 className="font-semibold">{card.date}</h3>
                  <p className="text-sm">{card.text}</p>
                </div>
              </div>
            );
          })}
        </ArticleCarousel>
      </Section>
    </main>
  );
}
