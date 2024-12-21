"use client"
// import { ChevronDownIcon } from "@heroicons/react/24/solid";

import React, { useEffect, useRef } from "react";

interface ScrollDownAnimationProps {
  scrollTopValue?: number;
  targetId?: string;
  child: React.ReactNode;
}

export default function ScrollDownAnimation(props: ScrollDownAnimationProps) {
  const { scrollTopValue, targetId, child }= props
  const scrollTargetRef = useRef<HTMLElement | null>(null);

  const scrollDown = () => {
    if (scrollTargetRef.current) {
    const targetPosition = scrollTargetRef.current.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
    }
  };

  useEffect(() => {
    scrollTargetRef.current = document.getElementById(targetId || "");
  }, [scrollTopValue, targetId]);

  return (
    <> 
        <button 
          onClick={scrollDown} 
          className="hover:animate-swivvleV animate-slideLt shadow-purple-700 shadow object-contain p-2 md:p-1 w-full lg:p-2 rounded-[30px] md:rounded-2xl bg-white bg-opacity-10  transition ease-in-out flex items-center justify-center px-5 hover:bg-white hover:text-purple-950 hover:font-medium dark:text-slate-300 border-2 w-full h-40 md:h-12 text-sm"
          >
          {child}
        </button>
    </>

  );
};