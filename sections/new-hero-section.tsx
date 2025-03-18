"use client"

import ScrollDownAnimation from "@/components/scroll"
import { BookOpenIcon, EnvelopeIcon, PencilIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Typer from "@/components/typer";
import Image from "next/image";

export const NewHeroSection= () => {

    const links = [
        { name: "About Us", id: "about-us", icon: UserGroupIcon },
        { name: "Contact", id: "contact", icon: EnvelopeIcon  },
        { name: "Stories", id: "dev-stories", icon: BookOpenIcon  },
        { name: "Notes", id: "notes", icon: PencilIcon  },
    ];

    

    return (
        <section className="page-section bg-black w-full flex flex-col items-center py-4">
          <Typer 
            id='hero' 
            delay={90}
            loop={true}
            className="font-irishgrover text-[60px] md:text-[160px] text-white font-extrabold " 
            words={["bellzstudio", "bellzstudio"]}
          /> 
          <span
            id='hero-mini' 
            className="font-kanit font-light text-xl md:text-2xl px-4 md:px-36 orange_gradient text-center" 
          >
              Building and contributing to open-source products we believe should exist.
          </span> 
  
          <div className="w-full flex my-6 gap-3 justify-between items-center" >
            {links.map((link) => (
              <ScrollDownAnimation 
                  key={link.id} 
                  targetId={link.id} 
                  className="w-full p-3 md:p-4 flex hover:animate-swivvleV  flex-col  rounded-[20px] border-[#F9890A] gap-3 shadow shadow-orange-500  items-center"
                  child={
                <>
                  <span className="text-white text-xs md:text-lg font-irishgrover">{link.name}</span>
                  
                  {/* <link.icon className="hover:animate-swivvleV text-[#F9890A] w-5 h-5"/> */}
                  <Image 
                      src="/assets/icons/down_line_orange.png" 
                      className="w-[100px] h-[15px] font-medium"
                      width={4000}
                      height={4000}
                      alt="down" 
                  />
                </>
              } />
            ))}
          </div>
        </section> 
    )
}