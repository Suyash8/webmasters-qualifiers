import Img from "@/public/vercel.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const genres: { name: string; image: any }[] = [
  {
    name: "Comedy",
    image: Img,
  },
  {
    name: "Horror",
    image: Img,
  },
  {
    name: "Drama",
    image: Img,
  },
  {
    name: "Crime",
    image: Img,
  },
  {
    name: "Action",
    image: Img,
  },
];

export default function GenresPage() {
  return (
    <main className="w-full h-full min-h-[100vh] flex items-center justify-center">
      <Carousel className="flex flex-row gap-4 w-full max-w-lg border-2 rounded-xl">
        <CarouselPrevious />
        <CarouselContent>
          {genres.map((genre) => (
            <Genre name={genre.name} image={genre.image} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}

const Genre = ({ name, image }: { name: string; image: any }) => {
  return (
    <CarouselItem className="flex aspect-square items-center justify-center p-6">
      <Link href={`/genres/${name.toLowerCase()}`}>
        <span className="w-full h-full align-center font-bold text-4xl">
          {name}
        </span>
      </Link>
    </CarouselItem>
  );
};
