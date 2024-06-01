import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";
import { headers } from "next/headers";
import { SignedOut, SignedIn } from "@clerk/nextjs";
//1:02:35
async function Images() {
  const images = await db.query.image.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <div className="flex flex-wrap  justify-center gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="w-48 rounded-xl border-4 border-white p-2"
        >
          <img className="rounded-md" src={image.url} alt="Image" />
          <div className="text-white">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  headers();

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
