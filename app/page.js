import Article from "@/components/Article";
import Button from "@/components/Button";
import Section from "@/components/Section";
import TimelinePerkantas from "@/components/TimelinePerkantas";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Section
        className={"py-16"}
        wrapperClassName={"flex items-center flex-row gap-2 justify-between"}
      >
        <div className="max-w-[750px]">
          <h1 className="text-6xl font-bold p-6 leading-[120%] ">
            Lorem ipsum dolor sit amet, consectetur&nbsp;
            <span className="backdrop-blur">
              <span className="bg-gradient-to-r from-mandy-600 via-mandy-500 to-mandy-400 inline-block text-transparent bg-clip-text">
                adipiscing elit
              </span>
            </span>
          </h1>
          <div className="max-w-[600px] px-6">
            <p className="text-2xl">
              Suspendisse sit amet purus laoreet, pharetra nulla id, fermentum velit.{" "}
              <span className="font-semibold bg-gradient-to-r from-mandy-600 via-mandy-500 to-mandy-400 text-transparent bg-clip-text">
                Donec blandit vehicula semper.
              </span>{" "}
              Suspendisse at turpis a metus venenatis ultrices vitae blandit quam.
            </p>
          </div>
        </div>
        <div className="bg-mandy-500 h-[550px] rounded-3xl xl:w-[350px]">a</div>
      </Section>

      {/* <Section className={"bg-gradient-to-b from-pourri-500 via-mandy-500 to-pourri-500 py-12"}> */}
      <Section className={"bg-mandy-500 py-12 w-[calc(100%-32px)] mx-auto rounded-[64px]"}>
        <h2 className="text-4xl text-pourri-500 font-bold text-center mb-8">Memulai hari dengan Saat Teduh!</h2>
        <div className="flex gap-8 py-8">
          <div className="flex-1 bg-pourri-500 rounded-xl p-2.5 transition-all hover:shadow-lg hover:shadow-pourri-500">
            <h3 className="text-2xl pt-1.5 font-bold mb-2 px-2.5">Saat Teduh Hari Ini!</h3>
            <Article
              article={{}}
              variant={"big"}
            />
          </div>
          <div className="flex-1 bg-pourri-500 rounded-xl h-fit p-2.5 pb-4">
            <h3 className="text-2xl pt-1.5 font-bold mb-2 px-2.5">Artikel Lainnya</h3>
            <div className=" grid gap-4">
              {new Array(3).fill(0).map((_, index) => {
                return (
                  <Article
                    key={index}
                    article={{}}
                    variant={"small-card"}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full text-center py-8">
          <Button
            variant="outline"
            size="lg"
            className=""
          >
            Baca Saat Teduh Sebelumnya!
          </Button>
        </div>
        <div className="py-12">
          <h2 className="text-4xl text-pourri-500 font-bold text-center mb-8">Mengisi hari dengan Bacaan Rohani!</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {new Array(6).fill(0).map((_, index) => {
              return (
                <Article
                  key={index}
                  article={{}}
                />
              );
            })}
          </div>
        </div>
      </Section>
      <Section>
        <div className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 leading-[120%]">
            Kenalan Sama <br />
            <span className="inline-block px-4 py-1.5 rounded-lg bg-mandy-500 shadow-xl shadow-pourri-500/80">
              <span className="text-pourri-500">Persekutuan Siswa Kristen Jakarta&nbsp;(PSKJ)!</span>
            </span>
          </h2>

          <h3 className="text-3xl font-bold mb-4 text-mandy-500">Kegiatan Rutin</h3>
          <div className="grid gap-4 mb-4 lg:mb-6 lg:grid-cols-3 lg:gap-6">
            <div className="bg-pourri-600/50 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4">Student Fellowship</h3>
              <p className="text-sm leading-[200%%]">
                Diadakan di wilayah masing-masing setiap bulan di minggu ke 1 dan 3 dengan tujuan membina siswa khususnya pengurus Rohkris dalam
                melayani
              </p>
            </div>
            <div className="bg-mandy-500 text-pourri-500 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4">Kelompok Kecil</h3>
              <p className="text-sm leading-[200%%]">
                Terdiri dari pengurus/aktivis Rohkris yang dipimpin oleh TPS (Tim Pembimbing siswa) dan Staf Siswa
              </p>
            </div>
            <div className="bg-mandy-500/30 border-2 border-mandy-500 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4">Visitasi</h3>
              <p className="text-sm leading-[200%%]">Pendampingan dan kunjungan Rohkris yang dikerjakan oleh TPS</p>
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4 text-mandy-500">Kegiatan Non-rutin</h3>
          <div className="flex gap-2.5 flex-wrap justify mb-6">
            <span className="border-2 border-mandy-500 rounded-xl flex items-center overflow-hidden">
              <Image
                src={`https://picsum.photos/124/100?id=
            ${Math.round(Math.random() * 100)}`}
                alt="Event Image"
                quality={100}
                width={124}
                height={100}
              />
              <span className="px-4">
                <p className="font-semibold text-xl">KKRS</p>
                <p className="text-sm">(Kebaktian Kebangunan Rohani Siswa)</p>
              </span>
            </span>
            <span className="border-2 border-mandy-500 rounded-xl flex items-center overflow-hidden">
              <Image
                src={`https://picsum.photos/124/100?id=
            ${Math.round(Math.random() * 100)}`}
                alt="Event Image"
                quality={100}
                width={124}
                height={100}
              />
              <span className="px-4">
                <p className="font-semibold text-xl">KKSJ</p>
                <p className="text-sm">(Kamp Kepemimpinan Siswa Jakarta)</p>
              </span>
            </span>
            <span className="border-2 border-mandy-500 rounded-xl flex items-center overflow-hidden">
              <Image
                src={`https://picsum.photos/124/100?id=
            ${Math.round(Math.random() * 100)}`}
                alt="Event Image"
                quality={100}
                width={124}
                height={100}
              />
              <span className="px-4">
                <p className="font-semibold text-xl">RKK</p>
                <p className="text-sm">(Retreat Kelompok Kecil)</p>
              </span>
            </span>
            <span className="border-2 border-mandy-500 rounded-xl flex items-center overflow-hidden">
              <Image
                src={`https://picsum.photos/124/100?id=
            ${Math.round(Math.random() * 100)}`}
                alt="Event Image"
                quality={100}
                width={124}
                height={100}
              />
              <span className="px-4">
                <p className="font-semibold text-xl">BHS</p>
                <p className="text-sm">(Beyond High School)</p>
              </span>
            </span>
            <span className="border-2 border-mandy-500 rounded-xl flex items-center overflow-hidden">
              <Image
                src={`https://picsum.photos/124/100?id=
            ${Math.round(Math.random() * 100)}`}
                alt="Event Image"
                quality={100}
                width={124}
                height={100}
              />
              <span className="px-4">
                <p className="font-semibold text-xl">KPD</p>
                <p className="text-sm">(Kebaktian Pengutusan dan Doa)</p>
              </span>
            </span>
            <span className="border-2 border-mandy-500 rounded-xl flex items-center overflow-hidden">
              <Image
                src={`https://picsum.photos/124/100?id=
            ${Math.round(Math.random() * 100)}`}
                alt="Event Image"
                quality={100}
                width={124}
                height={100}
              />
              <span className="px-4">
                <p className="font-semibold text-xl">HDSN</p>
                <p className="text-sm">(Hari Doa Siswa Nasional)</p>
              </span>
            </span>
          </div>
          <TimelinePerkantas />
        </div>
      </Section>

      {/* <Button isLoading>Hey</Button>
      <Button variant="secondary">Hey</Button>
      <Button variant="destructive">Hey</Button>
      <Button variant="outline">Hey</Button>
      <Button variant="ghost">Hey</Button>
      <Button variant="link">Hey</Button>
      <p>hey</p> */}
    </main>
  );
}
