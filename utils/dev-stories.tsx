import { iDevStory } from "@/components/dev-story-card"

export const DISCOVERY_LOCATION: string[] = [
    'telegram_bot',
    'twitter',
    'friends_family'
]
export const DEV_STORIES: iDevStory[] = [
    {
        id: "lockedin",
        title: "LockedIn",
        tag: "habit-tracking",
        description: "LockedIn is a habit-tracking app that enables users to set habit-forming tasks and track their progress in real-time as they strive to build lasting habits. It allows them to invite accountability partners for support, fostering a community-driven approach to personal growth and habit development.",
        open_source_url: "/i/lockedin", // "https://github/olaniyigeorge77/lockedin.com",
        product_url: "/i/lockedin", // "https://lockedin_api.com https://lockedin-api.onrender.com",
        status: "live",
        inspirations: [
            { tweetId: "1844763363533820066" },
            { tweetId: "1844778183024889857" },
            { tweetId: "1845054193783984432" },
        ]
    },
    {
        id: "1",
        title: "Story 2",
        tag: "habit-tracking",
        description: "Story, story telling, story telling",
        open_source_url: "https://lockedin_api.com",
        product_url: "https://lockedin-api.onrender.com",
        status: "dev",
        inspirations: []
    },        
    {
        id: "2",
        title: "Story 3",
        tag: "habit-tracking",
        description: "Story, story telling, story telling",
        open_source_url: "https://lockedin_api.com",
        product_url: "https://lockedin-api.onrender.com",
        status: "dev",
        inspirations: []
    }, 
    {
        id: "3",
        title: "Story 4",
        tag: "habit-tracking",
        description: "Story, story telling, story telling",
        open_source_url: "https://lockedin_api.com",
        product_url: "https://lockedin-api.onrender.com",
        status: "dropped",
        inspirations: []
    },
    
]