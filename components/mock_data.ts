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
    product_url: "https://lockedin-seven.vercel.app/", // "https://lockedin-app.vercel.app/", // "https://lockedin-seven.vercel.app/",
    status: "building-in-public",
    validatingTweets: [
      { tweetId: "1844763363533820066" },
      { tweetId: "1844778183024889857" },
      { tweetId: "1845054193783984432" }
    ],
    notes: ["5", "2", "1"],
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
    status: "dev",
    validatingTweets: [],
    notes: ["6","7", "4"],
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
    status: "paused",
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
    status: "live",
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
      username: "olaniyi_george",
      email: "olaniyigeorge@example.com",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    body: "Vercel keeps throwing a 504-Timeout error when I try to authenticate users with AuthJs. Free serverless instances on Vercel are capped at 10 seconds per request, but the entire auth flow with Google provider takes less than 2.5 seconds on my machine and about 5 seconds according to Vercel logs. I've tried various solutions, but nothing seems to work.",
    title: "AuthJs with Vercel",
    tags: ["timeout", "authjs", "vercel"],
    privacy_level: "public",
    description: "Issues encountered with Vercel.",
    written_at: new Date(),
    updated_at: new Date()
  },
  {
    _id: "2",
    author: {
      _id: "user2",
      username: "olaniyi_george",
      email: "olaniyigeorge@example.com",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    body: "Invite a UI/UX designer to help improve the design of my products.",
    title: "Enhancing UI/UX",
    tags: ["ui", "ux", "design"],
    privacy_level: "private",
    written_at: new Date()
  },
  {
    _id: "3",
    author: {
      _id: "user3",
      username: "charlie_03",
      email: "charlie@example.com",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    body: "Engage with potential users to understand their pain points and interests. Start by creating a survey form and reaching out to those who respond.",
    title: "User Engagement",
    tags: ["user-research", "survey", "feedback"],
    privacy_level: "restricted",
    description: "Important notes requiring approval.",
    written_at: new Date(),
    updated_at: new Date()
  },
  {
    _id: "4",
    author: {
      _id: "user4",
      username: "olaniyi_george",
      email: "olaniyigeorge@example.com",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    title: "Cost-Effective LLM Models",
    body: "Researching cost-effective strategies for building and maintaining iHR, including optimizing the interview simulation workflow to minimize token usage without compromising response quality and finding affordable LLM models.",
    tags: ["llms", "cost-optimization", "ihr"],
    privacy_level: "public",
    written_at: new Date()
  },
  {
    _id: "5",
    author: {
      _id: "user5",
      username: "olaniyi_george",
      email: "olaniyigeorge77@gmail.com",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    title: "LockedIn Challenge",
    body: "Set up a challenge to build a habit and invite friends to join or hold you accountable.",
    tags: ["challenge", "habit-tracking", "accountability"],
    privacy_level: "public",
    written_at: new Date()
  },
  {
    _id: "6",
    author: {
      _id: "user5",
      username: "olaniyi_george",
      email: "olaniyigeorge77@gmail.com",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    title: "Goals with iHR",
    body: "Bridge the gap between job seekers and career success by providing a realistic, feedback-driven interview experience.",
    tags: ["interview", "feedback", "career"],
    privacy_level: "public",
    written_at: new Date()
  },
  {
    _id: "7",
    author: {
      _id: "user5",
      username: "olaniyi_george",
      email: "olaniyigeorge77@gmail.com",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    title: "iHR for Hirers",
    body: "Enable hirers to delegate HR-related operations to iHR by specifying technical and non-technical requirements in the job description.",
    tags: ["hr", "automation", "interview"],
    privacy_level: "public",
    written_at: new Date()
  },
  {
    _id: "8",
    author: {
      _id: "user5",
      username: "olaniyi_george",
      email: "olaniyigeorge77@gmail.com",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    title: "Learning Rust",
    body: "Note to future self: This is one of my first Rust code snippets. How can I make this snippet more efficient, cleaner, and concise? What am I doing wrong?",
    tags: ["rust", "code-efficiency", "clean-code"],
    privacy_level: "public",
    image: "/assets/images/notes/first_rust.png",
    written_at: new Date()
  },
  {
    _id: "9",
    author: {
      _id: "user5",
      username: "olaniyi_george",
      email: "olaniyigeorge77@gmail.com",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    title: "AI-Powered Teaching Assistant",
    body: "Exploring how AI can aid education as a teaching assistant, extending beyond text to include speech. This can help schools in Nigeria that can't afford quality teachers and assist schools with good teachers by providing AI-powered assistants to answer follow-up questions, hold teaching/class sessions based on preset curriculum/plan and test students. Users would also be able to upload books or specify topics, and the AI assistant will create a teaching plan and deliver it through audio or video. By leveraging AI, we can bridge the educational gap, ensuring that every student has access to quality education, regardless of their location or financial situation. School boards can reduce costs on hiring additional assistant teachers. This technology can revolutionize the way we approach teaching, making it more interactive, personalized, efficient and in places like rural Nigeria, help school owners spend less on hiring more teachers. The AI assistant can also provide real-time feedback, helping students to understand complex concepts and improve their learning outcomes. This could be a game-changer, especially for the rural Nigerian educational sector, offering a scalable solution to the shortage of qualified teachers and enhancing the overall learning experience.",
    tags: ["education", "thinking-out-loud", "ai", "teaching-assistant"],
    privacy_level: "public",
    image: "/assets/images/notes/first_rust.png",
    written_at: new Date()
  }
];