import Image from "next/image";

type Experience = {
    company: string;
    role: string;
    techStack: string[];
    responsibilities: string[];
    keyLearnings: string[];
    date: string;
};

export const EXPERIENCES: Experience[] = [
    {
        company: "WispTalkAfrica",
        role: "Software Developer",
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
        date: "July 2023 - October 2024"
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
        date: "2024"
    },
    {
        company: "iHR",
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
        date: "2024"
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
        date: "2024"
    },
    {
        company: "WispTalkAfrica",
        role: "Software Developer",
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
        date: "July 2023 - October 2024"
    }
];


export function ExperienceCard(experience: Experience ) {
    return (
        <div className="rounded-2xl bg-white w-full px-5 py-3 mb-3">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-medium text-gray-800">{experience.role}</h2>
                {/* <div className="rounded-full bg-blue-500 h-4 w-4"></div> */}
            </div>
            <div className="flex justify-between items-start">
                <p className="text-black">{experience.company}</p>
                <p className="text-black">{experience.date}</p>
            </div>
            <p className="text-sm text-gray-600 mt-3">
                <strong>Tech Stack:</strong> {experience.techStack.join(", ")}
            </p>
            <ul className="text-sm text-gray-600 mt-2 list-disc pl-5">
                {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
            <p className="text-sm text-gray-600 mt-3">
                <strong>Key Learnings:</strong>
            </p>
            <ul className="text-sm text-gray-600 mt-2 list-disc pl-5">
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
      id: "mindstream",
      title: "Mindstream",
      description:
        "Mindstream is a secure journaling web app enabling users to document thoughts and create memory stamps (tags) for quick and efficient thought recall.",
      link: "https://mindstream-journal.onrender.com",
      image: "https://olaniyigeorge.github.io/images/mindstream-inspo.jpeg",
      started: "Apr 2023",
      status: ["blue", "gray"],
    },
    {
      id: "poll-y",
      title: "Poll-y",
      description:
        "A poll app with some of the functionalities of a social media app built with the Django web framework.",
      link: "/dev-stories",
      image: "https://olaniyigeorge.github.io/images/poll-y.jpeg",
      started: "Apr 2023",
      status: ["", "gray"],
    },
    {
      id: "cup-a-coffee",
      title: "Cup-a-coffee",
      description:
        "Cup-a-coffee is a specialized API designed for coffee shop ordering applications. Whether you're creating a management app or delving into coffee-related data, this API is tailored to meet your needs.",
      link: "",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/002/412/377/small/coffee-cup-logo-coffee-shop-icon-design-free-vector.jpg",
      started: "Sept 2023",
      status: ["", "gray"],
    },
    {
      id: "lockedin",
      title: "LockedIn",
      description:
        "A NextJS full-stack habit-tracking application that helps users to track daily habits and view insights on their progress.",
      link: "/i/lockedin", // Replace with your actual link
      image: "/assets/images/lockedin.jpeg", // Replace with actual image
      started: "Jan 2024",
      status: ["blue", "green"],
    },
    {
      id: "respace-api",
      title: "Respace API",
      description:
        "A REST API that serves as the data provider and authentication backend for a real estate company's web app.",
      link: "/dev-stories", // Replace with your actual link
      image: "/assets/images/respace-api.jpeg", // Replace with actual image
      started: "Oct 2023",
      status: ["blue", "gray"],
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
      <div className="w-full rounded-2xl gap-2 flex justify-between shadow-sm shadow-blue-400 items-start bg-white w-full h-36 p-2">
        <div className="w-full flex flex-col h-full gap-1">
          <a href={link} className="text-2xl font-bold">
            {title}
          </a>
          <p className="font-medium line-clamp-3">{description}</p>
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
  