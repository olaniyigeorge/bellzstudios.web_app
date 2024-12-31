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
          className=""
          >
          {child}
        </button>
    </>

  );
};