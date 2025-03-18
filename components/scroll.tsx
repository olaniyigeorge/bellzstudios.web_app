"use client"
// import { ChevronDownIcon } from "@heroicons/react/24/solid";

import React, { useEffect, useRef } from "react";

interface ScrollDownAnimationProps {
  scrollTopValue?: number;
  targetId?: string;
  className: string;
  child: React.ReactNode;
}

export default function ScrollDownAnimation(props: ScrollDownAnimationProps) {
  const { scrollTopValue, targetId, className, child }= props
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
    <button 
          onClick={scrollDown} 
          className={className}
          >
          {child}
        </button>


  );
};


interface ScrollDownALittleAnimationProps {
  scrollTopValue?: number;
  className: string;
  child: React.ReactNode;
}

export function ScrollDownALittleAnimation(props: ScrollDownALittleAnimationProps) {
  const { scrollTopValue = 0, className, child } = props;

  const scrollDown = () => {
    window.scrollBy({
      top: scrollTopValue,
      behavior: "smooth",
    });
  };

  return (
    <button 
      onClick={scrollDown} 
      className={className}
    >
      {child}
    </button>
  );
};
