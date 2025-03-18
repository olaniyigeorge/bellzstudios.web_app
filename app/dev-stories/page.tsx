import { DEV_STORIES } from "@/components/mock_data"
import DevStoryCard, { iDevStory } from "../../components/dev-story-card"
import { Metadata } from "next";
import SupportUs from "@/components/support";
import Link from "next/link";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

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
        <div className="w-full h-full flex flex-col justify-center ">
            <span className="w-full flex items-center justify-between px-3 md:px-16 lg:px-24 mx-auto">
              <h1 className="text-5xl md:text-[100px] font-irishgrover font-extrabold orange_gradient">Dev Stories</h1>
              <Link href="#support-us" className="w-auto flex gap-2 items-center">
                <CurrencyDollarIcon className="w-5 h-5"/>
                <p className="">Support Us</p>
              </Link>
            </span>
            <p className="text-center font-irishgrover text-xl">Stories behind all the solutions and systems we are building</p>
      
            <h3 className="text-center mt-4">
              The color on each story shows the status of the product:             
            </h3>
            <span className="flex flex-col md:flex-row justify-center items-center gap-2">
              
              <span className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500 ml-2"></span>
                <>In Development</>
              </span>
              <span className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-500 ml-2"></span>
                <>Live</>
              </span>
              <span className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-yellow-500 ml-2"></span>
                <>Building In Public</>
              </span>
              <span className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500 ml-2"></span>
                <>Dropped</>
              </span>
              <span className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-gray-500 ml-2"></span>
                <>Other</>
              </span>
            </span>


            <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 container px-1 md:px-8 lg:px-16 mx-auto">   
                {STORIES.map((story: iDevStory) => (
                    <DevStoryCard key={story.id} {...story}/>
                    ))
                }
            </div>

                  

            <SupportUs />
         </div>
    )
}

