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
        description: "LockedIn is a habit-tracking app that enables users to set habit-forming tasks and track their progress in real-time as they strive to build lasting habits. It allows them to invite accountability partners for support, fostering a community-driven approach to personal growth and habit development.",
        open_source_url: "https://lockedin_api.com",
        product_url: "https://lockedin-api.onrender.com",
        inspirations: [
            { tweetId: "1844763363533820066" },
            { tweetId: "1844778183024889857" },
            { tweetId: "1845054193783984432" },
        ]
    },
    {
        id: "1",
        title: "LockedIn",
        tag: "habit-tracking",
        description: "A habit tracking app  tracking tracking tracking  tracking tracking tracking tracking trackin",
        open_source_url: "https://lockedin_api.com",
        product_url: "https://lockedin-api.onrender.com",
        inspirations: []
    },        
    {
        id: "2",
        title: "LockedIn",
        tag: "habit-tracking",
        description: "A habit tracking app tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking tracking",
        open_source_url: "https://lockedin_api.com",
        product_url: "https://lockedin-api.onrender.com",
        inspirations: []
    }, 
    {
        id: "3",
        title: "LockedIn",
        tag: "habit-tracking",
        description: "A habit tracking app",
        open_source_url: "https://lockedin_api.com",
        product_url: "https://lockedin-api.onrender.com",
        inspirations: []
    },
    
]
console.log(DEV_STORIES)
console.log(DISCOVERY_LOCATION)
export default function Note() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 container px-2 md:px-8 lg:px-16 mx-auto">   
            {DEV_STORIES.map((story) => (
                <DevStoryCard key={story.id} {...story}/>
                ))
            }
        </div>
    )
}

