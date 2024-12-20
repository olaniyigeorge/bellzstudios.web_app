import { DEV_STORIES } from "@/services/dev-stories"
import DevStoryCard, { iDevStory } from "../../components/dev-story-card"




export default function Note() {
    const STORIES = DEV_STORIES
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 container px-2 md:px-8 lg:px-16 mx-auto">   
            {STORIES.map((story: iDevStory) => (
                <DevStoryCard key={story.id} {...story}/>
                ))
            }
        </div>
    )
}

