
  // return (
  //   <div className="w-full">
  //          {/* Hero Section */}
  //          <div className="relative w-full h-full bg-slate-950 text-gray-800">
  //       <div className="md:h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 lg:px-40 space-y-4 md:space-y-0">
  //         {/* Text Section */}
  //         <div className="space-y-4 md:w-1/2 mt-8 md:mt-0">
  //           <h1 className="font-medium text-gray-200 text-2xl">
  //             {session?.user ? (
  //               <>
  //                 Hi <span className="text-purple-700">{session.user.name}</span>, Welcome to
  //               </>
  //             ) : (
  //               <>Hi there! Welcome to</>
  //             )}
  //           </h1>
  //           <h2 className="font-extrabold text-purple-600 text-[60px]">
  //             <a href="/home">Bellz Studio</a>
  //           </h2>
  //           <p className="text-gray-400">
  //             Building microservices and products that make life easier.
  //           </p>
  //           <div className="space-y-3 md:space-y-0 flex flex-col md:flex-row gap-4">
  //             <Link href="/hire">
  //               <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full shadow">
  //                 Hire Me/Us
  //               </button>
  //             </Link>
  //             <a
  //               href="/assets/docs/Bellz_CV.pdf"
  //               download
  //               className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-6 rounded-full shadow"
  //             >
  //               Download CV
  //             </a>
  //           </div>
  //           <div className="flex flex-col text-gray-800 gap-2">
  //             {links.map((link) => (
  //               <ScrollDownAnimation
  //                 key={link.id}
  //                 targetId={link.id}
  //                 child={<>{link.name}</>}
  //               />
  //             ))}
  //           </div>
  //         </div>
  //         {/* Image Section */}
  //         <div className="md:w-1/2 flex justify-center">
  //           <a href="/auth">
  //             <Image
  //               src="/assets/images/memoji.png"
  //               className="border-4 border-purple-600 rounded-full"
  //               height={200}
  //               width={200}
  //               priority
  //               alt="bellzstudios"
  //             />
  //           </a>
  //         </div>
  //       </div>
  //     </div>



  //     {/* Sections */}
  //     <div id="about-us" className="w-full px-4 md:px-20 lg:px-40 py-16">
  //       <AboutUsSection />
  //     </div>
  //     <div id="contact" className="w-full bg-gray-900 text-white py-16">
  //       <ContactSection />
  //     </div>
  //     <div id="dev-stories" className="w-full px-4 md:px-20 lg:px-40 py-16">
  //       <DevStoriesSection />
  //     </div>
  //     <div id="notes" className="w-full px-4 md:px-20 lg:px-40 py-16 bg-gray-800 text-white">
  //       <NotesSection />
  //     </div>
  //   </div>
  // );





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
    { name: "Notes", id: "notes" },
    { name: "Stories", id: "dev-stories" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="w-full">
      <div className="w-full  gap-3 text-gray-800 md:h-screen  flex flex-col md:flex-row justify-between items-center px-6 px-20 lg:px-40 py-3 space-y-4 md:space-y-0">
          {/* Text Section */}
          <div className="space-y-1 md:w-1/2">
            {session?.user ? (
              <h1 className="font-medium text-gray-200 text-2xl">
                Hi <span className="text-purple-700">{session.user.name}</span>, Welcome to
              </h1>
            ) : (
              <h1 className="font-medium text-gray-200 text-2xl">Hi there! Welcome to</h1>
            )}
            <h2 className="font-extrabold text-purple-300 text-[60px]">
              BellzStudios
            </h2>
            <p className="text-purple-400">
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
                className="border-4 border-purple-600 w-[90%] h-auto rounded-full "
                height={200}
                width={200}
                priority
                alt="bellzstudios"
              />
          </a>
      </div>
       
      {/* Sections */}
      <section id="about-us" className="py-16text-gray-100">
        <div className="px-6 lg:px-40">
          <AboutUsSection />
        </div>
      </section>
      <section id="contact" className="py-16 bg-purple-100 text-gray-100">
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

