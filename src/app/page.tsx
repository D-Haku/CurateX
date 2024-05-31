import Link from "next/link";
import Image from "next/image";
const mockUrls = [
  "https://utfs.io/f/468be4de-f8cc-4363-91b8-8fd16fe7ccb7-1xcfdl.png",
  "https://utfs.io/f/abb93033-624c-48ba-9873-4b33b672769e-1qer2i.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div
            key={image.id}
            className="w-48 rounded-xl border-4 border-white p-2"
          >
            <img className="rounded-md" src={image.url} alt="Image" />
          </div>
        ))}
      </div>
      <h1 className="mt-12  flex items-center justify-center text-4xl font-semibold">
        Hello World
      </h1>
    </div>
  );
}
