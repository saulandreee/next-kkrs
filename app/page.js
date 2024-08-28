import Article from "@/components/Article";
import CustomCarousel from "@/components/CustomCarousel";
import Button from "@/components/Button";
import Section from "@/components/Section";
import TimelinePerkantas from "@/components/TimelinePerkantas";
import { cn } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import Link from "next/link";
import { WPArticle } from "@/lib/wpgraphql";
import CtfArticle from "@/lib/article";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

export default async function Home() {
  var data = await CtfArticle.getAllPosts();
  data = data.items.map((item) => item.fields);

  return (
    <>
      <div className="prose list-disc">
        {/* <pre>{JSON.stringify(data, false, 2)}</pre> */}
        <div className="p-4 rounded border">{data.map((post) => documentToReactComponents(post.html))}</div>
      </div>
      <main className="relative overflow-hidden">
        <div className="absolute top-[420px] w-full aspect-[368/3368] md:hidden">
          <Image
            src={"/images/landing/bg-landing.svg"}
            alt="bg-landing"
            fill
            className="w-full object-cover"
            priority
            loading="eager"
          />
        </div>
        <div className="absolute top-[380px] max-w-none w-[135%] aspect-[1912/3502] hidden left-1/2 -translate-x-1/2 md:inline-block">
          <Image
            src={"/images/landing/bg-landing-desktop.svg"}
            alt="bg-landing"
            fill
            className="w-full object-cover"
          />
        </div>
        <Section
          className={"py-12"}
          wrapperClassName={"flex relative px-4 justify-between md:items-center"}
        >
          <div className="min-w-[200px] max-w-[300px] md:max-w-[440px] lg:max-w-none">
            <div className="grid gap-1 mb-4 md:gap-2 lg:gap-4">
              <h2 className="text-base font-semibold md:text-xl lg:text-3xl">KKR SISWA 2024</h2>
              <h1 className="text-3xl font-bold text-mandy-500 md:text-4xl lg:text-5xl">The Greatest Love Story</h1>
              <h3 className="text-base font-semibold md:text-lg lg:text-2xl">For God so LOVED YOU that He gave HIS ONLY SON</h3>
            </div>
            <p className="text-sm md:text-base lg:text-lg">
              Mari kembali menghayati bahwa kita semua adalah bagian dari kisah kasih Allah yang begitu besar dalam dunia, serta senantiasa mengingat
              bahwa hanya Kristus yang mampu memberikan hidup yang penuh makna dan keselamatan yang kekal.
            </p>
          </div>
          <div className="shrink-0 grow-0 relative top-4 h-fit aspect-square w-[120px] md:w-[240px] md:top-0 lg:!w-[320px]">
            <Image
              src="/logo-nocross-lg.png"
              quality={100}
              fill
              sizes="(min-width: 300px) 40vw, (min-width: 768px) 20vw, (min-width: 1080px) 20vw, 15vw"
              alt="logo"
              priority={true}
              loading="eager"
            />
          </div>
        </Section>
        <Section className={cn("relative min-h-[468px] overflow-y-hidden")}>
          <div className="relative z-[1] grid gap-4 py-16 pb-4 lg:gap-6">
            <h1 className="text-xl text-center font-semibold max-w-[300px] mx-auto md:max-w-none md:text-2xl lg:text-3xl">
              Yuk Mulai Hari dengan Saat Teduh!
            </h1>
            <div className="grid gap-4 grid-cols-2 md:mx-auto md:gap-6 lg:grid-cols-4 lg:w-fit lg:gap-8">
              <div className="flex-1">
                <Image
                  src="/images/landing/sate-list-1.svg"
                  alt="sate-list-1"
                  quality={100}
                  width={120}
                  height={120}
                  sizes="(min-width: 600px) 140px, (min-width: 1024px) 160px"
                  className="w-30 mx-auto md:w-32 lg:w-36"
                />

                <div className="rounded-full text-sm lg:text-lg bg-white p-2 text-center text-mandy font-semibold w-full md:p-3 md:px-4">
                  <p className="">Sediakan waktu yang tepat</p>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  src="/images/landing/sate-list-2.svg"
                  alt="sate-list-1"
                  quality={100}
                  width={120}
                  height={120}
                  sizes="(min-width: 600px) 140px, (min-width: 1024px) 160px"
                  className="w-30 mx-auto md:w-32 lg:w-36"
                />

                <div className="rounded-full text-sm lg:text-lg bg-white p-2 text-center text-mandy font-semibold w-full md:p-3 md:px-4">
                  <p className="">Berdoalah dan mohon pimpinan Tuhan</p>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  src="/images/landing/sate-list-3.svg"
                  alt="sate-list-1"
                  quality={100}
                  width={120}
                  height={120}
                  sizes="(min-width: 600px) 140px, (min-width: 1024px) 160px"
                  className="w-30 mx-auto md:w-32 lg:w-36"
                />

                <div className="rounded-full text-sm lg:text-lg bg-white p-2 text-center text-mandy font-semibold w-full md:p-3 md:px-4">
                  <p className="">Baca dan renungkan Firman Tuhan</p>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  src="/images/landing/sate-list-4.svg"
                  alt="sate-list-1"
                  quality={100}
                  width={120}
                  height={120}
                  sizes="(min-width: 600px) 140px, (min-width: 1024px) 160px"
                  className="w-30 mx-auto md:w-32 lg:w-36"
                />

                <div className="rounded-full text-sm lg:text-lg bg-white p-2 text-center text-mandy font-semibold w-full md:p-3 md:px-4">
                  <p className="">Tutup kembali dengan doa</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section
          className=""
          wrapperClassName={"grid gap-4 py-8 lg:gap-8"}
        >
          <h1 className="text-xl font-semibold text-center mx-auto md:text-2xl lg:text-3xl">Renungan Saat Teduh</h1>
          <div className="grid gap-2 w-full lg:grid-cols-2 lg:gap-6">
            <Article
              article={listArticle[0]}
              variant={"list"}
              type={"sate"}
              color={"white"}
              className={"lg:hidden"}
            />
            <Article
              article={listArticle[0]}
              variant={"main"}
              type={"sate"}
              color={"white"}
              className={"hidden lg:block"}
            />
            <div className="grid gap-2 w-full lg:hidden">
              {listArticle.slice(1).map((article, index) => {
                return (
                  <Article
                    key={index}
                    article={article}
                    variant={"list"}
                    type={"sate"}
                    color={"pourri"}
                  />
                );
              })}
            </div>
            <div className="gap-2 w-full hidden lg:grid">
              {listArticle.slice(1).map((article, index) => {
                return (
                  <Article
                    key={index}
                    article={article}
                    forceSize="sm"
                    variant={"list"}
                    type={"sate"}
                    color={"pourri"}
                  />
                );
              })}
            </div>
          </div>
          <Link
            href={"/"}
            className="mx-auto"
          >
            <Button variant="ghost">Lihat Renungan lainnya</Button>
          </Link>
        </Section>
        <Section wrapperClassName={"p-0 px-0 pb-8"}>
          <h1 className="text-xl font-semibold text-center mx-auto md:text-2xl lg:text-3xl lg:mb-6">Artikel Rohani Lainnya</h1>
          <CustomCarousel>
            {bigListArticle.map((article, index) => (
              <Article
                className={"max-w-full"}
                article={article}
                color={"white"}
                key={index}
              />
            ))}
          </CustomCarousel>
        </Section>
        <Section
          className={"py-8 scroll-mt-8 lg:scroll-mt-16 "}
          wrapperClassName={"px-3 grid gap-6 lg:gap-8"}
          id="about-pskj"
        >
          <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">Yuk Kenalan Sama Persekutuan Siswa Kristen Jakarta (PSKJ)! </h1>
          <p className="text-sm md:text-base">
            Remaja merupakan masa mencari identitas diri. Maka dari itu, pelayanan siswa Perkantas berfokus pada penginjilan dan pemuridan kepada
            siswa, sehingga siswa dapat mempertuhankan Kristus dalam setiap aspek hidupnya, serta menangkap identitasnya sebagai yang murid Kristus,
            menjadi garam dan terang bagi lingkungan sekitar, gereja, bangsa, dan dunia.
          </p>
          <h2 className="text-lg font-semibold text-mandy text-center md:text-xl lg:text-2xl">Kegiatan Rutin PSKJ</h2>
          <div className="grid gap-2 lg:grid-cols-3 lg:mb-6">
            <div className="grid gap-1 p-4 text-center">
              <div className="relative aspect-square w-[120px] md:w-[132px] lg:w-[144px] mx-auto">
                <Image
                  src={"/images/landing/event-1.svg"}
                  alt="Student Fellowship"
                  quality={100}
                  fill
                />
              </div>
              <h3 className="font-semibold md:text-lg lg:text-xl">Student Fellowship</h3>
              <p className="text-sm md:max-w-[480px] md:mx-auto md:text-base">
                Diadakan di wilayah masing-masing setiap bulan (minggu ke 1 dan 3), dengan tujuan membina siswa khususnya pengurus Rohkris dalam
                melayani.
              </p>
            </div>
            <div className="grid gap-1 p-4 text-center">
              <div className="relative aspect-square w-[120px] md:w-[132px] lg:w-[144px] mx-auto">
                <Image
                  src={"/images/landing/event-2.svg"}
                  alt="Kelompok Kecil"
                  quality={100}
                  fill
                />
              </div>
              <h3 className="font-semibold md:text-lg lg:text-xl">Kelompok Kecil</h3>
              <p className="text-sm md:max-w-[480px] md:mx-auto md:text-base">
                Terdiri dari pengurus atau siswa yang aktif dalam kegiatan Rohkris dan dipimpin oleh TPS (Tim Pembimbing siswa) serta Staf Siswa..
              </p>
            </div>
            <div className="grid gap-1 p-4 text-center">
              <div className="relative aspect-square w-[120px] md:w-[132px] lg:w-[144px] mx-auto">
                <Image
                  src={"/images/landing/event-1.svg"}
                  alt="Student Fellowship"
                  quality={100}
                  fill
                />
              </div>
              <h3 className="font-semibold md:text-lg lg:text-xl">Visitasi Sekolah</h3>
              <p className="text-sm md:max-w-[480px] md:mx-auto md:text-base">Pendampingan dan kunjungan Rohkris yang dikerjakan oleh TPS.</p>
            </div>
          </div>
        </Section>
        <Section wrapperClassName={"p-0 px-0 pb-8 lg:mb-6"}>
          <h2 className="text-lg font-semibold text-mandy text-center md:text-xl md:mb-6 lg:text-2xl lg:mb-8">Kegiatan Non-Rutin PSKJ</h2>
          <div className="lg:hidden">
            <CustomCarousel>
              {eventPSKJ.map((event) => {
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
                      <h3 className="font-semibold mb-1.5 md:text-lg ">{event.title}</h3>
                      <p className="h-12">{event.description}</p>
                    </div>
                  </div>
                );
              })}
            </CustomCarousel>
          </div>
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
            {eventPSKJ.map((event) => {
              return (
                <div
                  className="relative rounded-xl shadow aspect-[360/232] overflow-hidden"
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
                    <h3 className="font-semibold mb-1.5 text-xl">{event.title}</h3>
                    <p className="text-lg h-10 leading-[120%]">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        <Section wrapperClassName={"p-0 px-0 pb-8"}>
          <h2 className="text-lg font-semibold text-mandy text-center md:text-xl md:mb-6 lg:text-2xl lg:mb-6">Sejarah PSKJ</h2>
          <CustomCarousel>
            {sejarah.map((card, index) => {
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
                    <h3 className="font-semibold lg:text-lg">{card.date}</h3>
                    <p className="text-sm lg:text-base">{card.text}</p>
                  </div>
                </div>
              );
            })}
          </CustomCarousel>
        </Section>
      </main>
    </>
  );
}
