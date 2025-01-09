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
    <div className="w-full font-poppins flex flex-col gap-5 justify-center">
      
      <PageSection id="hero" className="bg-black">
          <section className="w-full flex flex-col items-center gap-2 py-4 md:py-6">
            <h1 className="font-irishgrover text-[60px] md:text-[160px] text-white font-extrabold font-titillium">bellzstudio</h1>
            <h2 className="font-irishgrover text-3xl px-4 md:px-20 text-white orange_gradient text-center ">
              Building products and services we believe should exist.
            </h2>

            <div className="w-full flex mt-8 lg:mt-10 gap-3 justify-between items-center" >
              {links.map((link) => (
                <ScrollDownAnimation 
                    key={link.id} 
                    targetId={link.id} 
                    className="w-full p-3 md:p-4 flex hover:animate-swivvleV  flex-col border rounded-xl border-orange-500 gap-3 shadow shadow-orange-500  items-center"
                    child={
                  <>
                    <span className="text-white text-xs md:text-lg font-irishgrover">{link.name}</span>
                   
                    <link.icon className="text-white hover:animate-swivvleV w-5 h-5"/>
                  </>
                } />
              ))}
            </div>

          </section> 
      </PageSection>

      <PageSection id="about-us" className="bg-orange-500">
        <AboutUsSection />
      </PageSection>

      <PageSection id="contact" className="bg-black">
        <ContactSection />
      </PageSection> 
     
      <PageSection id="dev-stories" className="bg-black">
        <DevStoriesSection />
      </PageSection>

      <PageSection id="notes" className="bg-orange-500">
        <NotesSection />  
      </PageSection>
    </div>
  );
}




export function PageSection({ id, children, className, bg }: { children: React.ReactNode; className?: string; id: string, bg?: string }) {
  return (
    <div
      id={id}
      className={`xs:min-w-100px sm:max-w-400 md:max-w-1200px lg:max-w-1440px w-full gap-3 my-3 md:my-0 text-gray-800  flex flex-col md:flex-row justify-between items-center px-6 px-20 lg:px-40 gap-1 ${className} my-5`}

      >
    
        {children}
    </div>
  );
};

