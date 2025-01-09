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


//   <div className="w-full gap-3 my-3 md:my-0 text-gray-800 md:h-screen  flex flex-col md:flex-row justify-between items-center px-6 px-20 lg:px-40 py-1 gap-4">
//   {/* Text Section */}
//   <div className="md:w-1/2">
//     {session?.user ? (
//       <h1 className="font-light text-gray-200 text-3xl">
//         Hi <span className="text-purple-300 font-medium">{session.user.name}</span>, Welcome to
//       </h1>
//     ) : (
//       <h1 className="text-gray-200 text-2xl">Hi there! Welcome to</h1>
//     )}
//     <h2 className="font-extrabold font-titillium  text-white range-gradient leading-tighter text-200 text-[60px] lg:text-[80px]">
//       Bellz Studio
//     </h2>
//     <p className="text-purple-200 text-lg">
//         Building products and services we believe should exist.
//     </p>
    
//     <div className="flex items-center text-gray-800 gap-4 mt-3">
//       {links.map((link) => (
//         <ScrollDownAnimation
//           key={link.id}
//           targetId={link.id}
//           child={
//                 <span className="hover:animate-swivvleV animate-slideLtR shadow-purple-700 shadow hover:border-orange-500 object-contain p-2 md:p-1 w-full lg:p-2 rounded-[30px] md:rounded-full bg-white bg-opacity-10  transition ease-in-out flex items-center justify-center p-3 hover:font-medium dark:text-slate-300 border-2 text-sm w-fit">
//                   <link.icon className="w-5 h-5"/>
//                 </span>
                
//               }
//         />
//       ))}
//     </div>
//   </div>
//   {/* Image Section */}
//   <a href="" className="w-full md:w-1/2 slideRtL flex justify-center">
//       <Image
//         src="/assets/images/memoji.png"
//         className="border-4 hover:animate-spin  border-purple-600 w-full h-auto rounded-full "
//         height={200}
//         width={200}
//         priority
//         alt="Bellz Studio"
//       />
//   </a>
// </div>

  return (
    <div className="w-full font-poppins flex flex-col gap-5 justify-center">
      
      <PageSection id="hero" className="bg-black">
          <div className="w-full flex flex-grow h-full flex-col items-center">
            <h1 className="font-irishgrover text-[60px] md:text-[160px] text-white font-extrabold font-titillium">bellzstudio</h1>
            <h2 className="font-irishgrover text-3xl px-4 md:px-20 text-white orange_gradient text-center ">
              Building products and services we believe should exist.
            </h2>

            <div className="w-full flex mt-10 lg:mt-12 gap-3 justify-between items-center" >
              {links.map((link) => (
                <ScrollDownAnimation 
                    key={link.id} 
                    targetId={link.id} 
                    className="w-full p-3 md:p-4 flex flex-col border rounded-xl border-orange-500 shadow shadow-orange-500  items-center"
                    child={
                  <>
                    <span className="text-white text-xs md:text-lg">{link.name}</span>
                   
                    <link.icon className="animate-bounce animate-swivvleV w-5 h-5"/>
                  </>
                } />
              ))}
            </div>

          </div> 
      </PageSection>

     
       
      {/* Sections */}

      <PageSection id="about-us" className="bg-orange-500">
        <AboutUsSection />
      </PageSection>


      <PageSection id="contact" className="bg-black">
      <ContactSection />
      </PageSection> 
      <PageSection id="dev-stories" className="bg-black">
        <DevStoriesSection />
      </PageSection>

      <PageSection id="notes" className="bg-black">
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

