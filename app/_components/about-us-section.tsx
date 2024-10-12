  import Image from "next/image"


  export default function AboutUsSection() {

      return (
          <section 
          id="about-us"
          className="w-full borde flex gap-3"
      >
        <section className="w-full flex flex-col gap-4 md:gap-8 lg:gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs bg-purple-500 blur-backdrop-lg bg-opacity-40 text-slate-100 w-fit rounded-full p-1"> About Us </span>
            <h1 id="hero-title" className="dark:text-slate-100 font-bold text-5xl"> About Us</h1>
            <p className="dark:text-slate-200">
              Bellz Studio was birthed from the idea that there is a lot of good that 
              could be good that could be done from a small place when tech is applied 
              to doing what it does best; making life easier.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs bg-purple-500 blur-backdrop-lg bg-opacity-40 text-slate-100 w-fit rounded-full p-1"> Vision & Mission </span>
            <h1 id="hero-title" className="dark:text-slate-100 font-bold text-5xl"> Our Mission</h1>
            <p className="dark:text-slate-200">
              Our mission is to build solutions to as many problems as we can 
              in our immediate locale and document the journey while at it. 
              For now, that locale means Akure, Ondo State, Nigeria. We have a 
              series of pain points we are working on which you can see here 
              We consider ourselves successful when we can get at least a thousand 
              people to actually use this products to deal with the issues they address. 
            </p>
          </div>
        </section>
        
        <section className="w-full hidden md:flex px-4">
          <Image
            src="/assets/images/vision.png"
            className="w-full h-auto rounded-lg md:rounded-xl"
            height={200}
            width={200}
            priority={true}
            alt="Olaniyi George"
          />
        </section>
        
      </section>
      )
  }