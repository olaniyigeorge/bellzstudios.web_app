import { iDevStory } from "@/components/dev-story-card";
import DevStoryPage from "@/components/dev-story-page";
import { DEV_STORIES } from "@/components/mock_data"

export async function generateMetadata( {params }: { params: { id: string } }) {
  const STORY: iDevStory | undefined = DEV_STORIES.find(story => story.id === params.id);

  if (!STORY) {
      return <div className="w-full hero_title text-red-500">Story not found</div>;
  }
  
  return {
    title: `${STORY.title} | Dev Stories | Bellz Studio`,
    description: `${STORY.description.slice(0, 120)}`,
    openGraph: {
      title: `${STORY.title}`,
      description: `${STORY.description.slice(0, 80)}`,
      url: `https://bellzstudios.vercel.app/dev-stories/${STORY.title.toLowerCase()}`, // "https://www.bellzstudio.com", 
      siteName: "BellzStudio",
      images: [
        {
          url: `${STORY.image}`,
          width: 1200,
          height: 630,
          alt: `${STORY.title}`,  
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: `${STORY.image}`,
  },
    }
}
  
export default async function DevStoryyy({ params }: { params: { id: string } }) {
  const STORY: iDevStory | undefined = DEV_STORIES.find(story => story.id === params.id);

  if (!STORY) {
      return <div className="w-full hero_title text-red-500">Story not found!!!</div>;
  }

  return <DevStoryPage id={params.id} />;
}