import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen w-full h-full bg-[#fce7db]">
      <Button isLoading>Hey</Button>
      <Button variant="secondary">Hey</Button>
      <Button variant="destructive">Hey</Button>
      <Button variant="outline">Hey</Button>
      <Button variant="ghost">Hey</Button>
      <Button variant="link">Hey</Button>
      <p>hey</p>
    </main>
  );
}
