import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Provider from "@/components/Provider";
import { auth } from "@/utils/auth";
  


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
    url: "https://bellzstudios.vercel.app/", // "https://www.bellzstudio.com",  // Replace with your actual site URL
    siteName: "Bellz Studio",
    images: [
      {
        url: "/assets/images/bellzstudio.png",  // Replace with the correct image path
        width: 1200,
        height: 630,
        alt: "Bellz Studio Logo",  // Image description for accessibility
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
  const session = await auth()

  return (
    <html lang="en">
      <body
        // className={cn(
        //     "min-h-screen bg-[#F9FAFB] text-[#18181b] font-opensans antialiased max-w-[1440px] mx-auto",
        //     opensans.className
        // )}
        className={
          `min-h-screen bg-slate-100 text-[#18181b] dark:bg-black font-opensans antialiased max-w-[1440px] mx-auto",
          ${opensans.className}`}
      >
        <Provider session={session}>
          <ToastContainer />
          {children}
        </Provider>
      </body>
    </html>
  );
}
 