import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";
import { headers } from "next/headers";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { DirectionAwareHover } from "./_components/direction-aware-hover";
import { getMyImages } from "~/server/queries";
import { WobbleCard } from "./_components/wobble-card";
async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap  justify-center gap-4 p-4">
      {[...images, ...images].map((image) => (
        <div key={image.id} className=" rounded-xl border-4 border-white p-2">
          <Link href={`/img/${image.id}`}>
            <DirectionAwareHover imageUrl={image.url}>
              <p className="text-xl font-bold">{image.name}</p>
            </DirectionAwareHover>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <div className="">
      <SignedOut>
        <div className="mt-6 h-full w-full text-center text-3xl">
          <h1 className="font-semibold text-white">Please sign in above</h1>
        </div>
      </SignedOut>

      <SignedIn>
        <Images />
      </SignedIn>
    </div>
  );
}
