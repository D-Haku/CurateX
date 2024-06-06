import { clerkClient } from "@clerk/nextjs/server";
import { DeleteImage, getImage } from "~/server/queries";
import { Button } from "~/components/ui/button";

import Image from "next/image";
export async function FullPageImageView(props: { photoId: string }) {
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="xs:flex-col flex h-full w-screen min-w-0 items-center justify-center text-white  ">
      <div className="flex flex-shrink px-10">
        <Image
          className="rounded-md"
          src={image.url}
          style={{ objectFit: "contain" }}
          alt={image.name}
          width={480}
          height={480}
        />
      </div>
      <div className=" flex h-full flex-shrink-0 flex-col border-l">
        <div className="text-wrap border-b p-2 text-center text-xl">
          {image.name}
        </div>

        <div className="p-2">
          <div>Uploaded By:</div>
          <div>{userInfo.fullName}</div>
        </div>

        <div className="p-2">
          <div>Created On:</div>
          <div>{image.createdAt.toLocaleDateString()}</div>
        </div>

        <div className="p-2">
          <form
            action={async () => {
              "use server";

              await DeleteImage(idAsNumber);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
