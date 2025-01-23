import { DEV_STORIES } from "@/components/mock_data"
import DevStoryCard, { iDevStory } from "../../components/dev-story-card"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Dev Stories | Bellz Studios`,
    description: "Stories behind all the solutions and systems we build",
    openGraph: {
      title: "Dev Stories",
      description: "Stories behind all the solutions we build",
      url: "https://Bellz Studio.vercel.app/", 
      siteName: "Bellz Studios",
      images: [
        {
          url: "/assets/images/bellzstudio.png",  
          width: 1200,
          height: 630,
          alt: "ibellzstudio",  
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: "/assets/images/bellzstudio.png",
  },
  }; 



export default function Note() {
    const STORIES = DEV_STORIES
    return (
        <div className="flex flex-col justify-center gap-5">
            <h1 className="hero_title orange_gradient">Dev Stories</h1>

            <div className="grid grid-cols-1 pb-24 md:grid-cols-2 gap-3 md:gap-4 container px-2 md:px-8 lg:px-16 mx-auto">   
                {STORIES.map((story: iDevStory) => (
                    <DevStoryCard key={story.id} {...story}/>
                    ))
                }
            </div>
         </div>
    )
}

