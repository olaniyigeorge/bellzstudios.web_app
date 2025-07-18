import { ExperienceCard, EXPERIENCES, ProjectCard, PROJECTS } from "@/components/career";
import Image from "next/image";
import Link from "next/link";


export default function AboutMe() {
  const socialLinks =[
      { href: "https://github.com/olaniyigeorge", label: "Github", icon: "data:image/png;base64,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" },
      { href: "https://www.linkedin.com/in/abeleje-olaniyi/", label: "LinkedIn", icon: "data:image/png;base64,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" },
      { href: "/#dev-stories", label: "Bellz Blog", icon: "https://t4.ftcdn.net/jpg/01/64/84/81/360_F_164848164_eDLcO5LcnBapZls7Kh8u8kCmhL1izZoU.jpg" },
      { href: "mailto:olaniyigeorge77@gmail.com", label: "E-mail", icon: "https://icons.veryicon.com/png/o/internet--web/billion-square-cloud/mail-213.png" },
      { href: "https://docs.google.com/document/d/1OuLSJf_qQ5R0jk2jJgMU25r2TS3EMz89cOD0k1ioteQ/edit?usp=sharing", label: "My Resume", icon: "data:image/png;base64,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" },  //"https://drive.google.com/file/d/1wpeGRVWHmjFeHeF7b9kItyHBBGkV4tHO/view"
      ]

  const frontendTech = [
    "Next.js",
    "Remix.js",
    "React",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Styled Components",
  ];

  const backendTech = [
    "Python",
    "Django",
    "Django REST Framework",
    "Node.js",
    "FastAPI",
    "Celery",
    "Alembic",
  ];

  const dbTech = ["PostgreSQL", "MongoDB", "SQLite3"];
  const devopsTech = ["AWS (S3, RDS, SES)", "Docker", "Render", "Vercel"];
  const otherTech = ["OAuth", "TypeScript", "Postman", "GitHub", "Performance Optimization"];
  const softSkills = [
    "Good Communication",
    "Problem-solving attitude",
    "Effective collaboration",
    "Quick iteration cycles",
  ];

  return (
    <main className="font-poppins bg-black text-white space-y-12 py-10 px-6 md:px-24">
      {/* BIO SECTION */}
      <section id="bio" className="flex flex-col md:flex-row gap-3 items-center md:items-start">
      <div className="md:w-1/4 flex-shrink-0 flex flex-col items-center gap-2">
        <Link href="/">
          <Image
            src="/assets/images/bellz.png"
            alt="Bellz Avatar"
            width={180}
            height={180}
            className="rounded-full border-4 w-full h-full border-orange-500"
          />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#382e07] rounded-md hover:text-black bg-[#090700] bg- hover:bg-orange-300 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Back to Home
        </Link>
      </div>

        <div className="md:w-3/4 bg-[#090700] rounded-xl p-6 shadow-lg space-y-4">
          <h1 className="text-4xl font-extrabold orange-gradient">Software Developer</h1>
          <p className="text-gray-300 leading-relaxed">
            I&apos;m a software developer with a strong focus on backend systems. I enjoy 
            designing and building scalable, reliable software that solves real problems. 
            I specialize in writing clean, tested, and maintainable code with a strong 
            emphasis on performance, security, and long-term scalability. 
            With experience in backend architecture, AI-driven solutions, and automation 
            workflows, I build systems that are efficient, user-focused, and built to 
            last. I thrive in fast-paced environments, adapt quickly, and am always 
            learning and evolving.

          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ href, label, icon }) => (
              <Link key={label} href={href} target="_blank" className="flex items-center gap-2">
                <Image src={icon} alt={`${label} icon`} unoptimized width={24} height={24} className="rounded-full bg-gray-200 w-5 h-5" />
                <span className="text-orange-400 hidden md:inline">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="space-y-4 bg-[#090700] border border-[#201a04] py-3 px-2 rounded-lg">
        <h2 className="text-2xl font-semibold orange_gradient">Experience</h2>
        <div className="space-y-3">
          {EXPERIENCES.map((exp, index) => <ExperienceCard key={index} {...exp} />)}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="space-y-4 border border-[#090700] p-3">
        <h2 className="text-2xl font-semibold orange_gradient text-center">Skills</h2>
        {([
          ["Backend Technologies", backendTech],
          ["Frontend Technologies", frontendTech],
          ["Databases", dbTech],
          ["DevOps & Cloud", devopsTech],
          ["Other Skills", otherTech],
        ] as [string, string[]][]).map(([title, techList], index) => (
          <div key={index}>
            <h3 className="text-xl font-medium text-orange-200">{title}</h3>
            <div className="space-y-2 mt-2">
              {techList.map((skill) => (
                <SkillBar key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}

        <div>
          <h3 className="text-xl font-medium">Soft Skills</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            {softSkills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="space-y-4 p-2 bg-[#090700] rounded-lg">
        <h2 className="text-2xl font-semibold orange_gradient">Projects</h2>
        <div className="space-y-3 ">
          {PROJECTS.map((project) => <ProjectCard key={project.id} {...project} />)}
        </div>
        <StatusLegend />
      </section>

      {/* EDUCATION */}
      <section id="education" className="space-y-4">
        <h2 className="text-2xl font-semibold orange_gradient">Education</h2>
        <EducationCard
          title="BSc in Computer Science"
          institution="National Open University, Lagos"
          dates="Feb 2022 - Dec 2025"
        />
        <EducationCard
          title="ALX Software Engineering Program"
          institution="ALX Africa"
          dates="Mar 2025 - Nov 2025"
          href="https://www.alxafrica.com/programme/prodev-backend/"
        />
        {/* Add more EducationCard entries as needed */}
      </section>

      {/* FOOTER */}
      <footer className="text-center text-orange-400 mt-10">
        <p className="font-medium">© 2025 Abeleje Olaniyi George</p>
        <Link href="https://x.com/imoctborn" target="_blank" className="inline-flex items-center gap-2 mt-2">
          <Image src="/assets/images/socials/twit.png" alt="Twitter" width={20} height={20} className="rounded-full bg-gray-200" />
          abeleje_olaniyi
        </Link>
      </footer>
    </main>
  );
}

// Reusable components below:

function SkillBar({ skill }: { skill: string }) {
  const level = 8; // Replace with dynamic if needed
  return (
    <div className="flex justify-between items-center">
      <span>{skill}</span>
      <div className="flex space-x-1">
        {[...Array(level)].map((_, i) => <span key={i} className="text-green-500">●</span>)}
        {[...Array(10 - level)].map((_, i) => <span key={i} className="text-gray-700">●</span>)}
      </div>
    </div>
  );
}

function StatusLegend() {
  const statuses = [
    { color: "bg-blue-500", label: "In development" },
    { color: "bg-green-500", label: "Live" },
    { color: "bg-gray-500", label: "Offline" },
  ];
  return (
    <div className="flex space-x-4 justify-end mt-4">
      {statuses.map(({ label, color }) => (
        <div key={label} className="flex items-center space-x-2">
          <span className={`w-3 h-3 rounded-full ${color}`} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function EducationCard({ title, institution, dates, href }: { title: string; institution: string; dates: string; href?: string }) {
  return (
    <div className="rounded-xl bg-opacity-50 border border-1 border-[#382e08] p-4 space-y-2 shadow-md">
      {href ? (
        <Link href={href} target="_blank" className="text-xl font-medium underline">
          {title}
        </Link>
      ) : (
        <p className="text-xl font-medium">{title}</p>
      )}
      <p>{institution}</p>
      <p>{dates}</p>
    </div>
  );
}

