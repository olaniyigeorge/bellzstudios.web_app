import { DEV_STORIES } from "@/components/mock_data"
import DevStoryCard, { iDevStory } from "../../components/dev-story-card"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Dev Stories`,
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



export default function DevStoriesHome() {
    const STORIES = DEV_STORIES
    return (
        <div className="flex flex-col justify-center ">
            <h1 className="hero_title orange_gradient">Dev Stories</h1>
            <p className="text-center font-irishgrover text-xl">Stories behind all the solutions and systems we build</p>
            
            <h3 className="text-center mt-4">
              The color on each story shows the status of the product:             
            </h3>
            <span className="flex justify-center items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-blue-500 ml-2"></span> In Development
              <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span> Live
              <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 ml-2"></span> Building in Public
              <span className="inline-block w-3 h-3 rounded-full bg-red-600 ml-2"></span> Dropped
              <span className="inline-block w-3 h-3 rounded-full bg-gray-700 ml-2"></span> Unknown
            </span>

            <div className="mt-4 grid grid-cols-1 pb-24 md:grid-cols-2 gap-3 md:gap-4 container px-2 md:px-8 lg:px-16 mx-auto">   
                {STORIES.map((story: iDevStory) => (
                    <DevStoryCard key={story.id} {...story}/>
                    ))
                }
            </div>
         </div>
    )
}

