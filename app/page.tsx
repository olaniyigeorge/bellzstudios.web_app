import Image from "next/image";
import ScrollDownAnimation from "../components/scroll";
import ContactSection from "../components/contact-section";
import AboutUsSection from "../components/about-us-section";
import DevStoriesSection from "../components/dev-stories-section";
import NotesSection from "../components/notes-section";
import { auth } from "@/services/auth";
import { BookOpenIcon, EnvelopeIcon, PencilIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default async function Landing() {
  const session = await auth();

  const links = [
    { name: "About Us", id: "about-us", icon: UserGroupIcon },
    { name: "Contact", id: "contact", icon: EnvelopeIcon  },
    { name: "Stories", id: "dev-stories", icon: BookOpenIcon  },
    { name: "Notes", id: "notes", icon: PencilIcon  },
  ];


  return (
    <div className="w-full font-poppins">
      <div className="w-full gap-3 my-3 md:my-0 text-gray-800 md:h-screen  flex flex-col md:flex-row justify-between items-center px-6 px-20 lg:px-40 py-1 gap-4">
          {/* Text Section */}
          <div className="md:w-1/2">
            {session?.user ? (
              <h1 className="font-light text-gray-200 text-3xl">
                Hi <span className="text-purple-300 font-medium">{session.user.name}</span>, Welcome to
              </h1>
            ) : (
              <h1 className="text-gray-200 text-2xl">Hi there! Welcome to</h1>
            )}
            <h2 className="font-extrabold font-titillium  text-white range-gradient leading-tighter text-200 text-[60px] lg:text-[80px]">
              Bellz Studio
            </h2>
            <p className="text-purple-200 text-lg">
                Building products and services we believe should exist.
            </p>
            
            <div className="flex items-center text-gray-800 gap-4 mt-3">
              {links.map((link) => (
                <ScrollDownAnimation
                  key={link.id}
                  targetId={link.id}
                  child={
                        <span className="hover:animate-swivvleV animate-slideLtR shadow-purple-700 shadow hover:border-orange-500 object-contain p-2 md:p-1 w-full lg:p-2 rounded-[30px] md:rounded-full bg-white bg-opacity-10  transition ease-in-out flex items-center justify-center p-3 hover:font-medium dark:text-slate-300 border-2 text-sm w-fit">
                          <link.icon className="w-5 h-5"/>
                        </span>
                        
                      }
                />
              ))}
            </div>
          </div>
          {/* Image Section */}
          <a href="" className="w-full md:w-1/2 slideRtL flex justify-center">
              <Image
                src="/assets/images/memoji.png"
                className="border-4 hover:animate-spin  border-purple-600 w-full h-auto rounded-full "
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

