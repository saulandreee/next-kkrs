import Article from "@/components/Article";
import Button from "@/components/Button";
import Section from "@/components/Section";
import TimelinePerkantas from "@/components/TimelinePerkantas";

export default function Home() {
  return (
    <main className="">
      <Section className={"py-16"}>
        <h1 className="text-center text-7xl font-bold p-6 leading-[120%] ">
          Lorem ipsum dolor sit amet, consectetur{" "}
          <span className="backdrop-blur">
            <span className="bg-gradient-to-r from-mandy-600 via-mandy-500 to-mandy-400 inline-block text-transparent bg-clip-text">
              adipiscing elit
            </span>
          </span>
        </h1>
        <div className="max-w-[750px] px-6 mx-auto">
          <p className="text-center text-2xl">
            Suspendisse sit amet purus laoreet, pharetra nulla id, fermentum velit.{" "}
            <span className="font-semibold bg-gradient-to-r from-mandy-600 via-mandy-500 to-mandy-400 text-transparent bg-clip-text">
              Donec blandit vehicula semper.
            </span>{" "}
            Suspendisse at turpis a metus venenatis ultrices vitae blandit quam.
          </p>
        </div>
      </Section>

      <Section className={"bg-gradient-to-b from-pourri-500 via-mandy-500 to-pourri-500 py-12"}>
        <h2 className="text-4xl font-bold text-center mb-8">Memulai hari dengan Saat Teduh!</h2>
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
          <h2 className="text-4xl font-bold text-center mb-8">Mengisi hari dengan Bacaan Rohani!</h2>
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
        <div className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 leading-[120%]">
            Kenalan Sama <br />
            <span className="inline-block px-4 py-1.5 rounded-lg bg-mandy-500 shadow-xl shadow-pourri-500/80">
              <span className="text-pourri-500">Persekutuan Siswa Kristen Jakarta&nbsp;(PSKJ)!</span>
            </span>
          </h2>
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
