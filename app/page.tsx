import Link from "next/link";
import Image from "next/image";
import ScrollDownAnimation from "../components/scroll";
import ContactSection from "../components/contact-section";
import AboutUsSection from "../components/about-us-section";
import DevStoriesSection from "../components/dev-stories-section";
import NotesSection from "../components/notes-section";
import { auth } from "@/utils/auth";

export default async  function Landing() {
  const session = await auth()
  const user = {
    first_name: "Olaniyi",
    last_name: "George"
  }
  const links = [
    {
      name: "About Us",
      id: "about-us"
    },
    {
      name: "Notes",
      id: "notes"
    },
    {
      name: "Stories",
      id: "dev-stories"
    },
    {
      name: "Contact",
      id: "contact"
    },
  ]
    return (
      <div className="w-full dark:bg-black">
        
        <div className="relative w-full h-full">
    
            <div className="bg-slate- w-full text-gray-800  md:h-screen   flex flex-col md:space-x-4 lg:space-x-8 md:flex-row md:justify-between md:items-center px-2 md:px-20 lg:px-40 space-y-2 md:space-y-0 ">
                
                <div className="w-full  p-4 md:w-1/2 mt-8 md:mt-0 space-y-3">
                    <div className="mt-4">
                        <h1 
                            className="font-medium text-gray-200 text-xl md:text-2xl"
                            >
                            {session?.user ? 
                              <> Hi <span className="text-purple-700"> {session?.user.name}</span>! Welcome to </>
                            : 
                              <> Hi there! This is </>
                            }
                        </h1>
                        <h2 className="font-extrabold text-purple-600 text-[60px]">
                            <a href="/home" className="w-full text-start ">Bellz Studio </a> 
                        </h2>
                    </div>
                    
                    <p className="text-gray-400"> Building micro services & products we believe should exist  </p>

                    <div className="w-full flex flex-col  text-gray-800 gap-2  md:flex justify-between items-center">
                        {links.map((lk) => (
                            <ScrollDownAnimation 
                              key={lk.id + lk.name}
                              targetId={lk.id} 
                              child={<>{lk.name}</>} 
                            />
                          )
                        )}
                    </div>

                </div>    
                
                <div className="w-full  md:flex-1 mb-5 md:mb-0 flex justify-center">
                    <a 
                        href="/auth" 
                        className="text-5xl  animate-slideBtT md:animate-[slideRtL_1.5s_ease-in-out] font-bold w-full flex justify-center h-auto"
                    > 
                    
                        <Image 
                          src="/assets/images/memoji.png" 
                          className=" animate-rollIn border-4 border-purple-600 w-full h-auto rounded-full"
                          height={200}
                          width={200}
                          priority={true}
                          alt="bellzstudios"
                        />

                    </a>
                    
                </div>  
            </div>
            <Image
                src="/assets/images/curlyVectorTop.svg"
                className="absolute top-0 left-0 "
                height={200}
                width={200}
                priority={true}
              alt="curlyV"
            />
            <Image
                src="/assets/images/curlyVectorBottom.svg"
                className="absolute  -bottom-16 md:-bottom-1 right-0"
                height={300}
                width={300}
                priority={true}
                alt="curlyV"
            />
        </div>
          
        <div id="about-us"
            className="w-full md:min-h-screen container mx-auto px-2 md:px-10 lg:px-16">
          <AboutUsSection />
        </div>

        <div className="md:h-screen  w-full container mx-auto my-10 px-2 md:px-10 lg:px-16">
          <ContactSection />
        </div>

        <div className="md:h-screen  w-full container mx-auto my-10 px-2 md:px-10 lg:px-16">
          <DevStoriesSection />
        </div>
        
        <div className="md:h-screen bg-[url('/assets/images/ddb7d26375807f772c47b7df57a15395.gif')] bg-cover bg-center w-full container mx-auto mt-10 px-2 md:px-10 lg:px-16">
          <NotesSection />
        </div>
      </div>
    );
}