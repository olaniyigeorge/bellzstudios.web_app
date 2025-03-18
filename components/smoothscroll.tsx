"use client";

import React from "react";

type SmoothScrollButtonProps = {
  pixels: number;
  duration?: number; // Optional smooth scroll duration (in ms)
  children?: React.ReactNode;
  className?: string;
};

const SmoothScrollButton: React.FC<SmoothScrollButtonProps> = ({
  pixels,
  duration = 500,
  children = "Scroll Down",
  className,
}) => {
  const handleScroll = () => {
    const start = window.scrollY;
    const end = start + pixels;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, start + (pixels * ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // Easing function
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  return (
    <button onClick={handleScroll} className={className}>
      {children}
    </button>
  );
};

export default SmoothScrollButton;
