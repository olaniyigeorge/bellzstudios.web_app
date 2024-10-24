import { DEV_STORIES } from "@/utils/dev-stories"
import DevStoryCard, { iDevStory } from "../_components/dev-story-card"




export default function Note() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 container px-2 md:px-8 lg:px-16 mx-auto">   
            {DEV_STORIES.map((story: iDevStory) => (
                <DevStoryCard key={story.id} {...story}/>
                ))
            }
        </div>
    )
}

