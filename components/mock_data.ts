import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { iNoteEntry } from "./note-entry-card";
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
    tech_stack: [
      {
      icon: "/assets/images/tech_stack/typescript.png",
      name: "TypeScript"
      },
      {
      icon: "/assets/images/tech_stack/next_js.png",
      name: "Next Js"
      },
      {
      icon: "/assets/images/tech_stack/mongo_db.svg",
      name: "MongoDB"
      },
      {
      icon: "/assets/images/tech_stack/cloudinary.png",
      name: "Cloudinary"
      },
      {
      icon: "/assets/images/tech_stack/zustand.png",
      name: "Zustand"
      },
      {
      icon: "/assets/images/tech_stack/vercel.svg",
      name: "Vercel"
      }
    ],
    open_source_url: "https://lockedin-app.vercel.app/", // "https://github/olaniyigeorge77/lockedin.com",
    product_url: "/i/lockedin", // "https://lockedin_api.com https://lockedin-api.onrender.com",
    status: "live",
    validatingTweets: [
      { tweetId: "1844763363533820066" },
      { tweetId: "1844778183024889857" },
      { tweetId: "1845054193783984432" },
    ],
    notes: [
        {
        _id: "5",
        author: {
          _id: "user5",
          username: "olaniyi_george",
          email: "olaniyigeorge77@gmail.com",
          image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
        },
        title: "Challenge on LockedIn",
        body: "Set up a challenge on building a habit and invite friends to lock in or hold you accountable.",
        tags: ["challenge", "accountability-partnership"],
        privacy_level: "public",
        written_at: new Date("2025-01-20T14:48:00Z")
        },

    ],
    image: "/assets/images/lockedin.png"
  },
  {
    id: "marketplace",
    title: "MarketPlace",
    tag: "e-commerce",
    description: "An e-commerce market for products ranging from physical products, food, digital products and services. Sellers and service providers track their orders and receive payments.",
    tech_stack: [
      {
      icon: "/assets/images/tech_stack/typescript.png",
      name: "TypeScript"
      }
    ],
    open_source_url: "/i/market",
    product_url: "/i/market",
    status: "dev",
    validatingTweets: [],
    notes: [],
    image: "/assets/images/marketplace.png"
  },
  {
    id: "respace",
    title: "ReSpace",
    tag: "real-estate",
    description: "ReSpace aims to eliminate the challenges of house hunting by providing a smooth, personalized real estate experience. We want to empower users to effortlessly search for and rent apartments or spaces online while managing their utilities—such as cleaning, waste disposal, and internet bills—through our app",
    tech_stack: [
      {
      icon: "/assets/images/tech_stack/typescript.png",
      name: "TypeScript"
      }
    ],
    open_source_url: "https://github.com/olaniyigeorge/raspa-client",
    product_url: "https://raspa-client.onrender.com/",
    status: "old",
    validatingTweets: [],
    notes: [],
    image: "/assets/images/respace.png"
  },        
  {
    id: "bellz-mini",
    title: "Bellz Mini",
    tag: "super-apps",
    description: "Bellz Mini is all about creating mini apps within the Telegram ecosystem. With this initiative, I’m looking to explore the upsides and downsides of super apps while evaluating the best platforms for building these mini applications on existing frameworks.",
    tech_stack: [
      {
      icon: "/assets/images/tech_stack/typescript.png",
      name: "TypeScript"
      }
    ],
    open_source_url: "https://github.com/olaniyigeorge/bellz-tg-mini",
    product_url: "https://github.com/olaniyigeorge/bellz-tg-mini",
    status: "old",
    validatingTweets: [],
    notes: [],
    image: "/assets/images/bellz-mini.png"
  },
  {
    id: "promptopia",
    title: "Promptopia",
    tag: "llm-prompts",
    description: " Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
    tech_stack: [
      {
      icon: "/assets/images/tech_stack/typescript.png",
      name: "TypeScript"
      }
    ],
    open_source_url: "https://github.com/olaniyigeorge/",
    product_url: "/i/promptopia",
    status: "live",
    validatingTweets: [],
    notes: [],
    image: "/assets/images/promptopia.png"
  },   
  {
    id: "i-scheduler",
    title: "iScheduler",
    tag: "tasks-scheduler",
    description: " Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts",
    tech_stack: [
      {
      icon: "/assets/images/tech_stack/typescript.png",
      name: "TypeScript"
      }
    ],
    open_source_url: "https://github.com/olaniyigeorge/iScheduler",
    product_url: "/ischeduler",
    status: "dev",
    validatingTweets: [],
    notes: [],
    image: "/assets/images/1c44f8914b9f20e13b6168a2c2be3586.jpg"
  },   
  {
    id: "i-hr-manager",
    title: "iHR",
    tag: "interviews",
    description: "An AI-powered platform designed to revolutionize interview preparation and feedback",
    tech_stack: [
      {
      icon: "/assets/images/tech_stack/typescript.png",
      name: "TypeScript"
      }
    ],
    open_source_url: "https://github.com/olaniyigeorge/iHR",
    product_url: "https://ihr-mfh9.onrender.com/",
    status: "live",
    validatingTweets: [],
    notes: [],
    image: "/assets/images/ihr.png"
  },   
]
export const noteEntries: iNoteEntry[] = [
  {
    _id: "1",
    author: {
    _id: "user1",
    username: "alice_01",
    email: "alice@example.com",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    body: "This is a note about web development.",
    title: "Web Dev Notes",
    tags: ["web", "development", "javascript"],
    privacy_level: "public",
    description: "Notes on the latest JavaScript trends.",
    written_at: new Date("2025-01-09T08:30:00Z"),
    updated_at: new Date("2025-01-09T09:00:00Z")
  },
  {
    _id: "2",
    author: {
    _id: "user2",
    username: "bob_02",
    email: "bob@example.com",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    body: "This is a personal note about my vacation plans.",
    title: "Vacation Plans",
    tags: ["vacation", "plans"],
    privacy_level: "private",
    written_at: new Date("2025-01-08T10:00:00Z")
  },
  {
    _id: "3",
    author: {
    _id: "user3",
    username: "charlie_03",
    email: "charlie@example.com",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    body: "Meeting notes from the project planning session.",
    title: "Project Planning",
    tags: ["project", "meeting", "planning"],
    privacy_level: "restricted",
    description: "Important notes that need approval.",
    written_at: new Date("2025-01-07T14:00:00Z"),
    updated_at: new Date("2025-01-07T15:00:00Z")
  },
  {
    _id: "4",
    author: {
    _id: "user4",
    username: "dana_04",
    email: "dana@example.com",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    title: "Team building",
    body: "This is a note about upcoming team-building activities.",
    tags: ["team-building", "activities", "work"],
    privacy_level: "public",
    written_at: new Date("2025-01-06T16:30:00Z")
  },
  {
    _id: "5",
    author: {
      _id: "user5",
      username: "olaniyi_george",
      email: "olaniyigeorge77@gmail.com",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    title: "Challenge on LockedIn",
    body: "Set up a challenge on building a habit and invite friends to lock in or hold you accountable.",
    tags: ["challenge", "accountability-partnership"],
    privacy_level: "public",
    written_at: new Date("2025-01-20T14:48:00Z")
    },
  ];