import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Provider from "@/components/Provider";
import { auth } from "@/utils/auth";

// Load the OpenSans font
const opensans = localFont({
  src: "./fonts/opensans.ttf",
  display: "swap",
  variable: "--opensans",
});

export const metadata: Metadata = {
  title: "Bellz Studio",
  description: "Proferring solutions one product at a time",
  openGraph: {
    title: "Bellz Studio",
    description: "Proferring solutions one product at a time",
    url: "https://Bellz Studio.vercel.app/",
    siteName: "Bellz Studio",
    images: [
      {
        url: "/assets/images/bellzstudio.png",
        width: 1200,
        height: 630,
        alt: "Bellz Studio Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: "/assets/images/bellzstudio.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body
        className={`min-h-screen relative bg-gradient-to-br from-purple-800 via-black to-black text-white font-opensans antialiased max-w-[1440px] mx-auto ${opensans.className}`}
      >
        <Provider session={session}>
          <header className="px-6 py-2 w-full bg-purple-950 bg-opacity-60 blur-backdrop-lg shadow sticky top-0 right-0 z-3000 ">
            <div className="flex justify-between items-center max-w-7xl z-200 mx-auto">
              <h1 className="text-2xl text-white font-bold">B-Stdio</h1>
              <a
                href="mailto:olaniyigeorge77@gmail.com"
                className="bg-white text-black px-6 py-2 rounded-full hover:bg-purple-700 hover:text-white transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </header>

          <main className=" max-w-9xl">{children}</main>
          
          <footer className="p-6 w-full text-center blur-backdrop-lg  bg-opacity-20 bg-black absolute bottom-0 right-0 text-white">
            © {new Date().getFullYear()} Bellz Studio. All Rights Reserved.
          </footer>
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
