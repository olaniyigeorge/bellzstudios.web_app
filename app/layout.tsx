import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Provider from "@/components/Provider";
import { auth } from "@/services/auth";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Load the OpenSans font
const opensans = localFont({
  src: "./fonts/opensans.ttf",
  display: "swap",
  variable: "--opensans",
});

export const metadata: Metadata = {
  title: "Bellz Studio",
  description: "Building products we believe should exist to make life simpler.",
  openGraph: {
    title: "Bellz Studio",
    description: "Building products and services we believe should exist to make life simpler.",
    url: "https://bellzstudios.vercel.app/",
    siteName: "Bellz Studio",
    images: [
      {
        url: "/assets/images/bellzstudios_banner.png",
        width: 1200,
        height: 630,
        alt: "BellzStudio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: "/assets/images/bellzstudios_banner.png",
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
        className={`min-h-screen relative bg-black  text-white font-opensans antialiased max-w-[1440px] mx-auto ${opensans.className}`}
      >
        <Provider session={session}>
          <Header />

          <main className="max-w-9xl flex ">{children}</main>
          
          <Footer />
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
