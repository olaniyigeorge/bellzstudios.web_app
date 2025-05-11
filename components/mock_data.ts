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
    open_source_url: "https://github.com/olaniyigeorge/lockedin",
    product_url: "https://lockedin-seven.vercel.app/", // "https://lockedin-app.vercel.app/", // "https://lockedin-seven.vercel.app/",
    status: "building-in-public",
    validatingTweets: [
      { tweetId: "1844763363533820066" },
      { tweetId: "1844778183024889857" },
      { tweetId: "1845054193783984432" }
    ],
    notes: ["5", "2", "1"],
    image: "/assets/images/lockedIn.png"
  },
  {
    id: "ihr",
    title: "Truefit AI",
    tag: "interviews",
    description: `Truefit is an AI powered interview intelligence platform 
    helping companies and jobseekers discover their perfect fit. By powering
    live, AI-enhanced interview experiences and delivering tailored, data driven 
    feedback. Truefit revolutionizes how talent is matched - making hiring faster, 
    smarter, more cost-effective and driven by data, not bias`,
    tech_stack: [
      { icon: "/assets/images/tech_stack/python.png", name: "Python" },
      { icon: "/assets/images/tech_stack/fastapi.png", name: "FastAPI" },
      { icon: "/assets/images/tech_stack/postgres.png", name: "PostGres" },
      { icon: "/assets/images/tech_stack/langchain.png", name: "LangChain" },
      { icon: "/assets/images/tech_stack/websockets.png", name: "WebSockets" }
    ],
    open_source_url: "https://github.com/olaniyigeorge/iHR",
    product_url: "https://truefitai.vercel.app/",  // "https://ihr-mfh9.onrender.com/",
    status: "dev",
    validatingTweets: [],
    notes: ["6","7", "4"],
    image: "/assets/images/truefitai.png"  //"/assets/images/ihr.png"
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
    description: `Bellz Mini is my first attempt at building a mini app on 
    the Telegram ecosystem, exploring the benefits and drawbacks of Super 
    Apps while evaluating the best platforms for building these mini 
    applications.`,
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
    body: "Vercel keeps throwing a 504-Timeout error when I try to authenticate users with AuthJs. Apparently, free serverless instances on Vercel are capped at 10 secs per request but the whole auth flow with Google provider (my choice) isn't even up to 2.5 secs on my machine and according to Vercel logs 5 secs on Vercel. I've tried everything, but nothing seems to work.",
    title: "AuthJs with Vercel",
    tags: ["E504", "authjs", "vercel"],
    privacy_level: "public",
    description: "Issues I've encountered on Vercel.",
    written_at: new Date("2025-01-09T08:30:00Z"),
    updated_at: new Date("2025-01-09T09:00:00Z")
  },
  {
    _id: "2",
    author: {
      _id: "user2",
      username: "olaniyi_george",
      email: "olaniyigeorge@example.com",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    body: "Invite a UI/UX designer to help with the design of my products.",
    title: "Proper UI/UX on my products",
    tags: ["ui", "product", "design"],
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
    body: "Communicate with potential users about pain points, interests and how to build features around them. Starting by creating a survey form and reaching out to those who fill these forms.",
    title: "Speak with your users",
    tags: ["planning"],
    privacy_level: "restricted",
    description: "Important notes that need approval.",
    written_at: new Date("2025-01-07T14:00:00Z"),
    updated_at: new Date("2025-01-07T15:00:00Z")
  },
  {
    _id: "4",
    author: {
      _id: "user4",
      username: "olaniyi_george",
      email: "olaniyigeorge@example.com",
      image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
    },
    title: "Cheap LLM Models",
    body: "Looking for cost-effective strategies to build and maintain iHR, including optimizing the interview simulation workflow to minimize token usage without compromising response quality and researching affordable LLM models.",
    tags: ["llms", "cheap-models", "ihr"],
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
    body: "Note to future self. This is one of my first snippets of Rust code. What are the ways in which I can make this snippet more efficient, cleaner, more concise? What am I doing wrong?",
    tags: ["rust", "DSA", "efficient-code", "clean-code"],
    privacy_level: "public",
    image: "/assets/images/notes/first_rust.png",
    written_at: new Date("2025-02-01T00:00:00Z")
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
    body: "Exploring how AI can aid education as a teaching assistant, extending beyond text to include speech. This can help schools in Nigeria that can't afford quality teachers and assist schools with good teachers by providing AI-powered assistants to answer follow-up questions, hold teaching/class sessions based on preset curriculum/plan and test students. \n\n Users would also be able to upload books or specify topics, and the AI assistant will create a teaching plan and deliver it through audio or video. By leveraging AI, we can bridge the educational gap, ensuring that every student has access to quality education, regardless of their location or financial situation. \n\n School boards can reduce costs on hiring additional assistant teachers. This technology can revolutionize the way we approach teaching, making it more interactive, personalized, efficient and in places like rural Nigeria, help school owners spend less on hiring more teachers. \n The AI assistant can also provide real-time feedback, helping students to understand complex concepts and improve their learning outcomes. This could be a game-changer, especially for the rural Nigerian educational sector, offering a scalable solution to the shortage of qualified teachers and enhancing the overall learning experience.",
    tags: ["education", "thinking-out-loud", "ai", "ai-tutor", "teaching-assistant"],
    privacy_level: "public",
    image: "/assets/images/ai-tutor.png",
    written_at: new Date("2025-02-11T12:28:17Z")
  },
  // {
  //   _id: "10",
  //   author: {
  //     _id: "user",
  //     username: "olaniyi_george",
  //     email: "olaniyigeorge77@gmail.com",
  //     image: "https://lh3.googleusercontent.com/a/ACg8ocKMGmRvm7nzT-dv4uGOduWFj6GCFfy3H7MZFcfSxGgaZwtHD8hR=s96-c"
  //   },
  //   title: "",
  //   body: "",
  //   tags: ["bellzstudio"],
  //   privacy_level: "public",
  //   image: "",
  //   written_at: new Date("2025-02-11T12:28:17Z")
  // },
];


