import { Metadata } from "next";
import Link from "next/link";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

import { DEV_STORIES } from "@/components/mock_data";
import DevStoryCard, { iDevStory } from "@/components/dev-story-card";
import SupportUs from "@/components/support";

export const metadata: Metadata = {
  title: "Dev Stories",
  description: "Stories behind all the solutions and systems we build",
  openGraph: {
    title: "Dev Stories",
    description: "Stories behind all the solutions we build",
    url: "https://bellzstudios.vercel.app/",
    siteName: "Bellz Studios",
    images: [
      {
        url: "/assets/images/bellzstudio.png",
        width: 1200,
        height: 630,
        alt: "bellzstudio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: "/assets/images/bellzstudio.png",
  },
};

const STATUS_TAGS = [
  { label: "In Development", color: "bg-blue-500" },
  { label: "Building In Public", color: "bg-green-500" },
  { label: "Live", color: "bg-yellow-500" },
  { label: "Others", color: "bg-red-500" },
];

export default function DevStoriesHome() {
  return (
    <main className="w-full min-h-screen flex flex-col px-4 md:px-16 lg:px-24 mx-auto">
      {/* Header Section */}
      <section className="flex items-center justify-between mt-8">
        <h1 className="text-5xl md:text-[100px] font-irishgrover font-extrabold orange_gradient">
          Dev Stories
        </h1>
        <Link
          href="#support-us"
          className="flex items-center gap-1 text-sm font-poppins underline"
        >
          <CurrencyDollarIcon className="w-5 h-5" />
          <span>Support Us</span>
        </Link>
      </section>

      <p className="mt-2 font-poppins md:text-lg">
        Stories behind all the solutions and systems we are building.
      </p>

      {/* Status Tags */}
      <section className="flex flex-col md:flex-row gap-1 md:gap-2 mt-4 md:mt-10 font-poppins text-sm md:text-base orange_gradient justify-center items-center">
        {STATUS_TAGS.map(({ label, color }) => (
          <div key={label} className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full opacity-50 ${color} md:ml-2`} />
            <span>{label}</span>
          </div>
        ))}
      </section>

      {/* Stories Grid */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 px-1 md:px-8 lg:px-16">
        {DEV_STORIES.map((story: iDevStory) => (
          <DevStoryCard key={story.id} {...story} />
        ))}
      </section>

      {/* Support Section */}
      <SupportUs />
    </main>
  );
}
