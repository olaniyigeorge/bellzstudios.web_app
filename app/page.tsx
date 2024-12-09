import Image from "next/image";
import ScrollDownAnimation from "../components/scroll";
import ContactSection from "../components/contact-section";
import AboutUsSection from "../components/about-us-section";
import DevStoriesSection from "../components/dev-stories-section";
import NotesSection from "../components/notes-section";
import Link from "next/link";
import { auth } from "@/utils/auth";

export default async function Landing() {
  const session = await auth();

  const links = [
    { name: "About Us", id: "about-us" },
    { name: "Contact", id: "contact" },
    { name: "Stories", id: "dev-stories" },
    { name: "Notes", id: "notes" },
  ];

  return (
    <div className="w-full">
      <div className="w-full  gap-3 text-gray-800 md:h-screen  flex flex-col md:flex-row justify-between items-center px-6 px-20 lg:px-40 py-3 space-y-4 md:space-y-0">
          {/* Text Section */}
          <div className="md:w-1/2">
            {session?.user ? (
              <h1 className="font-medium text-gray-200 text-3xl">
                Hi <span className="text-purple-700">{session.user.name}</span>, Welcome to
              </h1>
            ) : (
              <h1 className="font-medium  text-gray-200 text-2xl">Hi there! Welcome to</h1>
            )}
            <h2 className="font-extrabold text-purple-200 text-[80px]">
              Bellz Studio
            </h2>
            <p className="text-purple-400 text-lg">
              Building microservices and products that make life easier.
            </p>
            
            <div className="flex justify-between text-gray-800 gap-2 mt-3">
              {links.map((link) => (
                <ScrollDownAnimation
                  key={link.id}
                  targetId={link.id}
                  child={<>{link.name}</>}
                />
              ))}
            </div>
          </div>
          {/* Image Section */}
          <a href="/auth" className="md:w-1/2 hidden md:flex justify-center">
              <Image
                src="/assets/images/memoji.png"
                className="border-4 swivvle border-purple-600 w-[90%] h-auto rounded-full "
                height={200}
                width={200}
                priority
                alt="Bellz Studio"
              />
          </a>
      </div>
       
      {/* Sections */}
      <section id="about-us" className="py-16 text-gray-100">
        <div className="px-6 lg:px-40">
          <AboutUsSection />
        </div>
      </section>
      <section id="contact" className="py-16  text-gray-100">
        <div className="px-6 lg:px-40">
          <ContactSection />
        </div>
      </section>
      <section id="dev-stories" className="py-16 text-gray-100">
        <div className="px-6 lg:px-40">
          <DevStoriesSection />
        </div>
      </section>
      <section id="notes" className="py-20 text-gray-100">
        <div className="px-6 lg:px-40">
          <NotesSection />
        </div>
      </section>
    </div>
  );
}

