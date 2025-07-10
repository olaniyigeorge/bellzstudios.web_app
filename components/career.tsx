import Link from "next/link";

type Experience = {
    company: string;
    role: string;
    techStack: string[];
    responsibilities: string[];
    keyLearnings: string[];
    date: string;
    link: string;
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Winnov8",
    role: "Backend Developer",
    techStack: ["React", "TypeScript", "NodeJS", "Redux", "MongoDB", "Redis", "TailwindCSS"],
    responsibilities: [
      "Implementing key features across both frontend and backend, including AI recommendation systems, API integrations.",
      "Collaborating closely with the team to ship production-ready code and improve system architecture."
    ],
    keyLearnings: [
      "Improved skills in fullstack development, real-time systems, and clean architectural patterns."
    ],
    date: "2025",
    link: "https://winnov8hq.com"
  },
  {
    company: "ECO Africa",
    role: "Backend Engineer",
    techStack: ["Django", "Redis", "Render", "REST API"],
    responsibilities: [
      "Optimized and refactored key parts of the backend infrastructure to improve performance and scalability.",
      "Set up and deployed the entire backend architecture on Render, ensuring a reliable and maintainable PAAS environment.",
      "Collaborated with the product team to implement stable RESTful APIs that support ECO Africas sustainability platform."
    ],
    keyLearnings: [
      "Deepened experience in backend performance tuning, scalable deployments, and production-grade Django setups on PAAS."
    ],
    date: "Mar - Jul 2025",
    link: "https://www.theecoplatform.com"
  },
  {
    company: "WispTalkAfrica",
    role: "Software Engineer",
    techStack: ["Django", "REST API", "AWS (S3, RDS)", "Next.js", "Zustand", "Redux"],
    responsibilities: [
      "Designed and developed a REST API catering to all organizational product needs.",
      "Utilized AWS S3 for object storage and RDS for a scalable PostgreSQL database.",
      "Collaborated with the team to transition the system seamlessly from development to production.",
      "Built a frontend app with Next.js and integrated global state management using Zustand and Redux."
    ],
    keyLearnings: [
      "Advanced experience in REST API design, cloud integration, and building scalable web solutions."
    ],
    date: "July 2023 - October 2024",
    link: "https://wisptalkafrica.com"
  },
  {
    company: "iScheduler",
    role: "Backend Developer",
    techStack: ["Django", "Celery", "Python", "PostgreSQL", "Docker"],
    responsibilities: [
      "Built an intelligent scheduling app powered by AI and LLMs to dynamically organize user tasks.",
      "Designed workflows that prioritize tasks based on deadlines, user preferences, and duration.",
      "Optimized performance using Celery for task processing and concurrency, ensuring scalability and responsiveness."
    ],
    keyLearnings: [
      "Improved skills in concurrency management, workflow optimization, and AI integration with Django-based systems."
    ],
    date: "2024",
    link: "/dev-stories/i-scheduler"
  },
  {
    company: "truefit.ai",
    role: "Backend Developer",
    techStack: ["FastAPI", "Alembic", "Python", "PostgreSQL", "OpenAI API"],
    responsibilities: [
      "Developed a FastAPI backend for an AI-driven HR platform with advanced language model integration.",
      "Optimized API endpoints to improve performance and support scalable operations.",
      "Managed database migrations with Alembic and implemented logging for debugging and monitoring."
    ],
    keyLearnings: [
      "Picked up FastAPI and Alembic during the project and applied them effectively to deliver core features.",
      "Gained foundational experience in FastAPI development, database migrations, and implementing real-time monitoring."
    ],
    date: "2024",
    link: "/dev-stories/ihr"
  },
  {
    company: "LockedIn",
    role: "Backend",
    techStack: ["Next.js", "MongoDB", "TypeScript", "Postman"],
    responsibilities: [
      "Built backend features for a habit-tracking app, converting business logic into robust, testable code.",
      "Designed a data pipeline to efficiently react to user activities on the web app."
    ],
    keyLearnings: [
      "Strengthened skills in building reactive web applications and handling real-time user interactions."
    ],
    date: "2024",
    link: "https://lockedin-seven.vercel.app/"
  }
];


export function ExperienceCard(experience: Experience ) {
    return (
        <div className="rounded-2xl bg-black w-full px-5 py-3 mb-3">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium text-orange-200">{experience.role}</h2>
                {/* <div className="rounded-full bg-blue-500 h-4 w-4"></div> */}
            </div>
            <div className="flex justify-between items-start">
                <Link href={experience.link} target="_blank" className="text-orange-400 font-bold">{experience.company}</Link>
                <p className="text-black">{experience.date}</p>
            </div>
            <p className="text-sm  mt-3">
                <strong>Tech Stack:</strong> {experience.techStack.join(", ")}
            </p>
            <ul className="text-sm font-light  mt-2 list-disc pl-5">
                {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
            <p className="text-sm mt-3">
                <strong>Key Learnings:</strong>
            </p>
            <ul className="text-sm font-light mt-2 list-disc pl-5">
                {experience.keyLearnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                ))}
            </ul>
        </div>
    );
};



interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
    image: string;
    started: string;
    status: string[];
  }
  
  export const PROJECTS: Project[] = [
        {
      id: "coopwise",
      title: "CoopWise",
      description:
        "CoopWise is a full-stack financial tool for African cooperatives (Ajo, Esusu, Chama), helping groups save, contribute, and manage funds transparently. Built with FastAPI, PostgreSQL, Next.js, and integrated with stablecoin escrows, CoopWise bridges traditional savings with modern tools.",
      link: "https://coopwise-seven.vercel.app/",
      image: "/assets/images/coopwise.png", // Optional: update with your actual image
      started: "May 2025",
      status: ["blue", "green"],
    },
    {
      id: "lockedin",
      title: "LockedIn",
      description:
        "A NextJS full-stack habit-tracking application that helps users to track daily habits and view insights on their progress.",
      link: "https://lockedin-seven.vercel.app/",
      image: "/assets/images/lockedin.png",
      started: "Jan 2024",
      status: ["blue", "green"],
    },
    // {
    //   id: "respace-api",
    //   title: "Respace API",
    //   description:
    //     "A REST API that serves as the data provider and authentication backend for a real estate company&apos;s web app.",
    //   link: "#",
    //   image: "/assets/images/respace.png",
    //   started: "Oct 2023",
    //   status: ["blue", "gray"],
    // },
    // {
    //   id: "mindstream",
    //   title: "Mindstream",
    //   description:
    //     "Mindstream is a secure journaling web app built with Django to demonstrate a multi-factor authentication system. It features a three-step identity verification flow, ensuring users securely document their thoughts and create memory stamps (tags) for fast and efficient thought recall.",
    //   link: "https://mindstream-journal.onrender.com",
    //   image: "https://olaniyigeorge.github.io/images/mindstream-inspo.jpeg",
    //   started: "Apr 2023",
    //   status: ["blue", "gray"],
    // },

    {
      id: "truefit-ai",
      title: "Truefit.ai",
      description:
        "Truefit.ai is an AI-powered interview assistant that runs automated mock interviews at scale. Using FastAPI, WebRTC, OpenAI, and real-time voice interaction, it provides candidates with smart interview simulations, scoring, and tailored feedback.",
      link: "https://truefitai.vercel.app/",
      image: "/assets/images/truefitai.png", // Optional: update with your actual image
      started: "June 2025",
      status: ["blue", "green"],
    },
  ];
  
interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    image: string;
    started: string;
    status: string[];
  }
  
export function ProjectCard(props: ProjectCardProps){
    const { title, description, link, image, started, status } = props
    return (
      <div className="w-full text-[#090700] bg-orange-100 rounded-2xl gap-2 flex justify-between shadow-sm shadow-orange-400 items-start min-h-36 p-2">
        <div className="w-full flex flex-col h-full gap-1">
          <a href={link} className="text-2xl font-bold">
            {title}
          </a>
          <p className="font- line-clamp-3">{description}</p>
          <div className="flex justify-between items-center">
            <p className="font-light">Started: {started}</p>
            <span className="flex gap-1">
              {status.map((color, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 bg-${color}-700 rounded-full`}
                ></div>
              ))}
            </span>
          </div>
        </div>
        <div className="w-32  h-32">
          <img
            alt={title}
            src={image}
            width={32}
            height={32}
            className="shadow bg-black w-full h-full object-fill rounded-2xl"
          />
        </div>
      </div>
    );
  };
  