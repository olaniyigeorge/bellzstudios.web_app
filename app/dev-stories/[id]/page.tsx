import { iDevStory } from "@/components/dev-story-card";
import DevStoryPage from "@/components/dev-story-page";
import { DEV_STORIES } from "@/services/dev-stories";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: `Dev Stories | Bellz Studios`,
    description: "Stories behind al the solutions we build",
    openGraph: {
      title: "Dev Stories",
      description: "Stories behind al the solutions we build",
      url: "https://Bellz Studio.vercel.app/", // "https://www.bellzstudio.com",  // Replace with your actual site URL
      siteName: "Bellz Studios",
      images: [
        {
          url: "/assets/images/bellzstudio.png",  // Replace with the correct image path
          width: 1200,
          height: 630,
          alt: "ibellzstudio",  // Image description for accessibility
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: "/assets/images/bellzstudio.png",
  },
  }; 

  
export default async function DevStoryyy({ params }: { params: { id: string } }) {
  const STORY: iDevStory | undefined = DEV_STORIES.find(story => story.id === params.id);

  // Check if the story exists to handle any potential errors
  if (!STORY) {
      return <div className="w-full">Story not found</div>;
  }

  return (
      <div className="w-full">
          <DevStoryPage id={params.id} />
      </div>
  );
}