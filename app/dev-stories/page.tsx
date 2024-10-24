import DevStoryCard, { iDevStory } from "../_components/dev-story-card"

export const DISCOVERY_LOCATION: string[] = [
    'telegram_bot',
    'twitter',
    'friends_family'
]
export const DEV_STORIES: iDevStory[] = [
    {
        id: "lockedin-api",
        title: "LockedIn",
        tag: "habit-tracking",
        description: "A habit tracking app tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking",
        open_source_url: "https://lockedin_api.com",
        product_url: "https://lockedin-api.onrender.com"
    },
    {
        id: "1",
        title: "LockedIn",
        tag: "habit-tracking",
        description: "A habit tracking app  tracking tracking tracking  tracking tracking tracking tracking trackin",
        open_source_url: "https://lockedin_api.com",
        product_url: "https://lockedin-api.onrender.com"
    },        {
        id: "2",
        title: "LockedIn",
        tag: "habit-tracking",
        description: "A habit tracking app tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking",
        open_source_url: "https://lockedin_api.com",
        product_url: "https://lockedin-api.onrender.com"
    },        {
        id: "3",
        title: "LockedIn",
        tag: "habit-tracking",
        description: "A habit tracking app",
        open_source_url: "https://lockedin_api.com",
        product_url: "https://lockedin-api.onrender.com"
    },
    
]

export default function Note() {

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 container px-2 md:px-8 lg:px-16 mx-auto">   
            {DEV_STORIES.map((story) => (
                <DevStoryCard key={story.id} {...story}/>
                ))
            }
        </div>
    )
}

