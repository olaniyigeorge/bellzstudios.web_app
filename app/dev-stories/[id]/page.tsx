import { iDevStory } from "@/components/dev-story-card";
import DevStoryPage from "@/components/dev-story-page";
import { DEV_STORIES } from "@/components/mock_data"

export async function generateMetadata( {params }: { params: { id: string } }) {
  const STORY: iDevStory | undefined = DEV_STORIES.find(story => story.id === params.id);

  // Check if the story exists to handle any potential errors
  if (!STORY) {
      return <div className="w-full">Story not found</div>;
  }
  
  return {
    title: `${STORY.title} | Dev Stories | Bellz Studios`,
    description: `${STORY.description.slice(0, 120)}`,
    openGraph: {
      title: `${STORY.title}`,
      description: `${STORY.description.slice(0, 80)}`,
      url: `https://Bellz Studio.vercel.app/dev-stories/${STORY.title.toLowerCase()}`, // "https://www.bellzstudio.com",  // Replace with your actual site URL
      siteName: "Bellz Studios",
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