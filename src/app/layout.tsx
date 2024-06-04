import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import TopNav from "./_components/topnav";
import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { TracingBeam } from "./_components/tracing-beam";
export const metadata = {
  title: " T3-Gallery ",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} `}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <body className={` dark flex flex-col gap-4`}>
          <TopNav className=" " />
          <TracingBeam>
            <div className="p-8 pt-28">
              {children}
              {modal}
              <div id="modal-root" />
            </div>
          </TracingBeam>
        </body>
      </html>
    </ClerkProvider>
  );
}
