'use client';

import { useEffect, useState } from "react";
import ScrollDownAnimation from "@/components/scroll";
import { BookOpenIcon, EnvelopeIcon, PencilIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Typer from "@/components/typer";
import Image from "next/image";

interface LinkItem {
  name: string;
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const NewHeroSection = () => {
  const links: LinkItem[] = [
    { name: "About Us", id: "about-us", icon: UserGroupIcon },
    { name: "Contact", id: "contact", icon: EnvelopeIcon },
    { name: "Stories", id: "dev-stories", icon: BookOpenIcon },
    { name: "Notes", id: "notes", icon: PencilIcon },
  ];

  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);
  const [currentLink, setCurrentLink] = useState(links[0]);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLinkIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % links.length;
        setCurrentLink(links[newIndex]);
        return newIndex;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [links]);

  return (
    <section className="page-section bg-black w-full flex flex-col items-center py-1">
      <Typer
        id="hero"
        delay={90}
        loop={true}
        className="font-irishgrover text-[60px] md:text-[160px] text-white font-extrabold"
        words={["bellzstudio", "bellzstudio"]}
      />

      <span
        id="hero-mini"
        className="font-poppins font-light text-xl md:text-[24px] px-4 md:px-36 orange_gradient ext-orange-400 text-center"
      >
      Building systems that empower communities and support data-intensive applications through efficient engineering and stakeholder-driven iteration
      </span>

      <div className="w-full flex my-3 gap-3 justify-center items-center flex-col md:flex-row">
        <ScrollDownAnimation
          targetId={currentLink.id}
          className="w-fit py-4 px-4 md:px-14 flex hover:animate-swivvleV flex-col rounded-[40px] border-[#110a02] gap-3 shadow shadow-orange-950 items-center transition-all duration-300"
          child={
            <>
              <span className="text-white text-xs md:text-lg font-irishgrover">
                {currentLink.name}
              </span>
              <Image
                src="/assets/icons/down_line_orange.png"
                className="w-[100px] h-[15px] font-medium"
                width={100}
                height={15}
                alt="scroll down indicator"
                priority
              />
            </>
          }
        />
      </div>
    </section>
  );
};