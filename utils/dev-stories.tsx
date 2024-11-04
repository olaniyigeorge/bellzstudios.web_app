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
        title: "ReSpace",
        tag: "real-estate",
        description: "ReSpace aims to eliminate the challenges of house hunting by providing a smooth, personalized real estate experience. We want to empower users to effortlessly search for and rent apartments or spaces online while managing their utilities—such as cleaning, waste disposal, and internet bills—through our app",
        open_source_url: "https://github.com/olaniyigeorge/raspa-client",
        product_url: "https://github.com/olaniyigeorge/raspa-client",
        status: "dev",
        inspirations: []
    },        
    {
        id: "2",
        title: "Bellz Mini",
        tag: "super-apps",
        description: "Bellz Mini is all about creating mini apps within the Telegram ecosystem. With this initiative, I’m looking to explore the upsides and downsides of super apps while evaluating the best platforms for building these mini applications on existing frameworks.",
        open_source_url: "https://github.com/olaniyigeorge/bellz-tg-mini",
        product_url: "https://github.com/olaniyigeorge/bellz-tg-mini",
        status: "dev",
        inspirations: []
    }    
]