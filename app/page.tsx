import HeaderComponent from "@/components/main/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Img from "@/public/logo.jpg";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] w-full">
      <main className="flex flex-col gap-8 items-center justify-center justify-items-center w-full h-full">
        <Image src={Img} alt="logo" width={350} />
        <h2 className="font-bold text-6xl text-center">
          We help you in finding the best movies
        </h2>
        <p className="text-xl text-center">Want Some? Come get some</p>
        <div className="flex flex-row gap-4">
          <Link href="/genres">
            <Button variant={"outline"}>Genres</Button>
          </Link>
          <Link href="/movies">
            <Button>Movies</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
