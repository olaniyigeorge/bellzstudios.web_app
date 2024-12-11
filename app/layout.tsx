import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Provider from "@/components/Provider";
import { auth } from "@/utils/auth";
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
        className={`min-h-screen relative bg-gradient-to-br from-purple-700 via-purple-950 to-black text-white font-opensans antialiased max-w-[1440px] mx-auto ${opensans.className}`}
      >
        <Provider session={session}>
          <Header />

          <main className="font-titillium max-w-9xl">{children}</main>
          
          <Footer />
          <ToastContainer />
        </Provider>
      </body>
    </html>
  );
}
