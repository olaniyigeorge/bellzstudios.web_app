  import React from "react";
import Auth from "./sign-in";

  interface HeroSectionProps {
    message: string;
    image: string;
  }

  export default function HeroSection(props: HeroSectionProps) {
      const { message, image } = props;
    return (
      <div className="relative w-full h-[350px] bg-purple-600 overflow-hidden rounded-lg md:rounded-xl shadow-lg flex items-center justify-center text-white px-2 md:px-4 lg:px-6">
        {/* Hero Image */}
        <img
          src={image || "https://via.placeholder.com/1500x400"} // Fallback image
          alt="Hero Image"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center flex flex-col items-center p-5">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{message}</h1>
          <p className="text-lg sm:text-xl">
            Explore the best products and services curated just for you. 
          </p>
          <span id="get-started" className="w-fit hidden my-3 p-2 flex gap-3 items-center border rounded-full">
            <>Get Started</>
            <Auth />
          </span>
        </div>
      </div>
    );
  };


