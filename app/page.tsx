import ScrollDownAnimation from "../components/scroll";
import ContactSection from "@/sections/contact-section";
import AboutUsSection from "@/sections/about-us-section";
import DevStoriesSection from "@/sections/dev-stories-section";
import NotesSection from "@/sections/notes-section";
import { auth } from "@/services/auth";
import { BookOpenIcon, EnvelopeIcon, PencilIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Typer from "@/components/typer";
import PageSection from "@/components/page-section";


export default async function Landing() {
  const session = await auth();
  console.log(session)
  const links = [
    { name: "About Us", id: "about-us", icon: UserGroupIcon },
    { name: "Contact", id: "contact", icon: EnvelopeIcon  },
    { name: "Stories", id: "dev-stories", icon: BookOpenIcon  },
    { name: "Notes", id: "notes", icon: PencilIcon  },
  ];




  return (
    <div className="w-full flex flex-col justify-center">
      
      <section className="page-section w-full flex flex-col items-center py-4 md:py-6">
        <Typer 
          id='hero' 
          delay={90}
          loop={true}
          className="font-irishgrover text-[60px] md:text-[160px] text-white font-extrabold " 
          words={["bellzstudio", "bellzstudio"]}
        /> 
        <span
          id='hero-mini' 
          className="font-irishgrover text-3xl px-4 md:px-20 orange_gradient text-center" 
        >
            Building and contributing to open-source products we believe should exist.
        </span> 

        <div className="w-full flex my-6 lg:my-8 gap-3 justify-between items-center" >
          {links.map((link) => (
            <ScrollDownAnimation 
                key={link.id} 
                targetId={link.id} 
                className="w-full p-3 md:p-4 flex hover:animate-swivvleV  flex-col  rounded-2xl md:rounded-[50px] border-orange-900 shadow shadow-orange-600 gap-3 shadow shadow-orange-500  items-center"
                child={
              <>
                <span className="text-white text-xs md:text-lg font-irishgrover">{link.name}</span>
                
                <link.icon className="hover:animate-swivvleV text-orange-500 w-5 h-5"/>
              </>
            } />
          ))}
        </div>
      </section> 


      <AboutUsSection />
      <ContactSection />
      <DevStoriesSection />
      <NotesSection />  

    </div>
  );
}





