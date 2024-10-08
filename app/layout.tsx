import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";

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
  twitter: {
    card: "summary_large_image",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={cn(
        //     "min-h-screen bg-[#F9FAFB] text-[#18181b] font-opensans antialiased max-w-[1440px] mx-auto",
        //     opensans.className
        // )}
        className={
          `min-h-screen bg-[#F9FAFB] text-[#18181b] font-opensans antialiased max-w-[1440px] mx-auto",
          ${opensans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
 