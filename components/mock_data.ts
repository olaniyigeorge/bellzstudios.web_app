import { iNoteEntry } from "./note-entry-card";
import { iDevStory } from "@/components/dev-story-card"

export const DISCOVERY_LOCATION: string[] = [
  'telegram_bot',
  'twitter',
  'friends_&_family',
  'linkedin'

]
export const DEV_STORIES: iDevStory[] = [
  {
    id: "lockedin",
    title: "LockedIn",
    tag: "habit-tracking",
    description: "LockedIn is a habit-tracking app that helps users set and track habit-forming tasks in real-time, fostering a community-driven approach to personal growth by allowing them to invite accountability partners for support.",
    tech_stack: [
      { icon: "/assets/images/tech_stack/typescript.png", name: "TypeScript" },
      { icon: "/assets/images/tech_stack/next_js.png", name: "Next Js" },
      { icon: "/assets/images/tech_stack/mongo_db.svg", name: "MongoDB" },
      { icon: "/assets/images/tech_stack/cloudinary.png", name: "Cloudinary" },
      { icon: "/assets/images/tech_stack/zustand.png", name: "Zustand" },
      { icon: "/assets/images/tech_stack/vercel.svg", name: "Vercel" }
    ],
    open_source_url: "https://github/olaniyigeorge/lockedin",
    product_url: "https://lockedin-app.vercel.app/", // "https://lockedin-seven.vercel.app/",
    status: "live",
    validatingTweets: [
      { tweetId: "1844763363533820066" },
      { tweetId: "1844778183024889857" },
      { tweetId: "1845054193783984432" }
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
        body: "Set up a challenge on building a habit and invite friends to join or hold you accountable.",
        tags: ["challenge", "accountability-partnership"],
        privacy_level: "public",
        written_at: new Date("2025-01-20T14:48:00Z")
      }
    ],
    image: "/assets/images/lockedin.png"
  },
  {
    id: "ihr",
    title: "iHR",
    tag: "interviews",
    description: "Intelligent HR Manager is an AI-powered platform designed to revolutionize interview preparation and feedback by simulating realistic interview experiences and providing actionable insights.",
    tech_stack: [
      { icon: "/assets/images/tech_stack/python.png", name: "Python" },
      { icon: "/assets/images/tech_stack/fastapi.png", name: "FastAPI" },
      { icon: "/assets/images/tech_stack/postgres.png", name: "PostGres" },
      { icon: "/assets/images/tech_stack/langchain.png", name: "LangChain" },
      { icon: "/assets/images/tech_stack/websockets.png", name: "WebSockets" }
    ],
    open_source_url: "https://github.com/olaniyigeorge/iHR",
    product_url: "https://github.com/ola~niyigeorge/iHR", // "https://ihr-mfh9.onrender.com/",
    status: "live",
    validatingTweets: [],
    notes: [
      {
        _id: "6",
        author: {
          _id: "user5",
          username: "olaniyi_george",
          email: "olaniyigeorge77@gmail.com",
          image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
        },
        title: "Goals with iHR",
        body: "The goal is to bridge the gap between job seekers and career success by providing a realistic, feedback-driven interview experience.",
        tags: ["interview-feedback"],
        privacy_level: "public",
        written_at: new Date("2025-01-24T09:29:00Z")
      },
      {
        _id: "7",
        author: {
          _id: "user5",
          username: "olaniyi_george",
          email: "olaniyigeorge77@gmail.com",
          image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
        },
        title: "iHR for Hirer",
        body: "I aim to allow hirers to delegate most, if not all, HR-related operations to iHR by simply specifying the technical and non-technical requirements in the job description.",
        tags: ["interview-feedback"],
        privacy_level: "public",
        written_at: new Date("2025-01-24T09:29:00Z")
      }
    ],
    image: "/assets/images/ihr.png"
  },
  {
    id: "marketplace",
    title: "MarketPlace",
    tag: "e-commerce",
    description: "An e-commerce market for products ranging from physical goods, food, digital products, and services. Sellers and service providers can track their orders and receive payments.",
    tech_stack: [
      { icon: "/assets/images/tech_stack/typescript.png", name: "TypeScript" },
      { icon: "/assets/images/tech_stack/next_js.png", name: "Next Js" },
      { icon: "/assets/images/tech_stack/cloudinary.png", name: "Cloudinary" }
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
    description: "ReSpace aims to eliminate the challenges of house hunting by providing a smooth, personalized real estate experience. Users can effortlessly search for and rent apartments or spaces online while managing their utilities through our app.",
    tech_stack: [
      { icon: "/assets/images/tech_stack/typescript.png", name: "TypeScript" },
      { icon: "/assets/images/tech_stack/remix_js.png", name: "Remix Js" }
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
    description: "Bellz Mini focuses on creating mini apps within the Telegram ecosystem, exploring the benefits and drawbacks of super apps while evaluating the best platforms for building these mini applications.",
    tech_stack: [
      { icon: "/assets/images/tech_stack/typescript.png", name: "TypeScript" },
      { icon: "/assets/images/tech_stack/telegram.png", name: "Telegram" }
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
    description: "Promptopia is an open-source AI prompting tool for discovering, creating, and sharing creative prompts.",
    tech_stack: [
      { icon: "/assets/images/tech_stack/typescript.png", name: "TypeScript" },
      { icon: "/assets/images/tech_stack/next_js.png", name: "Next Js" }
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
    description: "iScheduler is an open-source AI prompting tool for discovering, creating, and sharing creative prompts.",
    tech_stack: [
      { icon: "/assets/images/tech_stack/python.png", name: "Python" },
      { icon: "/assets/images/tech_stack/django.png", name: "Django" },
      { icon: "/assets/images/tech_stack/celery.png", name: "Celery" },
      { icon: "/assets/images/tech_stack/docker.png", name: "Docker" },
      { icon: "/assets/images/tech_stack/redis.png", name: "Redis" }
    ],
    open_source_url: "https://github.com/olaniyigeorge/iScheduler",
    product_url: "/ischeduler",
    status: "dev",
    validatingTweets: [],
    notes: [],
    image: "/assets/images/1c44f8914b9f20e13b6168a2c2be3586.jpg"
  }
];
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