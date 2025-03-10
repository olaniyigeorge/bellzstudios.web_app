import ScrollDownAnimation, { ScrollDownALittleAnimation } from "@/components/scroll"
import { ArrowDownIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"


export default function AboutUsSection() {

    return (
        <section 
        id="about-us"
        className="page-section font-irishgrover  orange-gradient-bg w-full flex items-center gap-3 py-5 md:py-10"
    >
      <section className="w-full flex flex-col items-center md:items-start gap-3">
        <div className="flex flex-col items-center md:items-start  gap-3">
          <h1 id="hero-title" className="text-black font-extrabold text-3xl  tracking-tighter"> ABOUT US </h1>
          {/* <p className="text-xl md:text-2xl  font-kanit text-black text-center md:text-right">
              BellzStudio was born from an appreciation for what open-source can achieve and a desire to make a real impact. 
              At its core, it&apos;s about teaming up to turn ideas into impactful software. Whether refining 
              existing solutions or building something new.

              <br />
              As a developer passionate about solving real problems, I&apos;m open to collaborating 
              at any stage - brainstorming, system design, development, or testing. I also love sharing my journey, 
              documenting my learning process to grow and create better products.

              <br />
              Got an idea or a challenge? Let&apos;s bring it to life together!
          </p> */}
            <p className="text-xl md:text-2xl font-kanit text-black text-center md:text-right">
              BellzStudio was born from an appreciation for what true collaboration can achieve and a desire to make a real impact.
              At its core, it&apos;s about teaming up to turn ideas into impactful software — whether refining existing solutions or building something new.

              <br />
              As a developer passionate about solving real problems, I&apos;m open to collaborating at any stage — brainstorming, system design, development, or testing.
              I also love sharing my journey, documenting my learning process to grow and create better products.

              <br />
              Got an idea or a challenge? Let&apos;s bring it to life together!
          </p>

        </div>

        <span className="w-full justify-between flex gap-4 item-center">
          <Link href="/about-me" className="w-fit font-medium p-4 rounded-full border text- black_btn">
              Resume
            </Link>        
            <span className="">
              <Link href={"#contact"} className=" text-black shadow-lg border border-black rounded-full w-fit flex gap-2 font-medium items-center px-4 py-2 ">
                <>Contact</>
                <ArrowDownIcon className="w-4 h-8 hover:animate-swivvleV text-white font-medium" />
              </Link>
            </span>  
        </span>
            
      </section>
      
      <section className="w-full hidden px-2 py-5  md:flex">
        <div className="flex h-full w-full gap-2 justify-center">
            <div className="w-full flex flex-col h-full justify-between gap-3">
                
                <Image
                  src="/assets/images/vision.png"
                  className="w-[280px] h-[200px] -skew-y-3"
                  height={3000}
                  width={3000}
                  priority={true}
                  alt="Olaniyi George"
                />
                

                <Image
                    src="/assets/images/fastapi_code.png"
                    className="w-[280px] h-[200px] -skew-y-3"
                    height={12000}
                    width={12000}
                    priority={true}
                    alt="Olaniyi George"
                  />
            </div>

            <div className="w-full flex flex-col h-full justify-between gap-3 ">
                
                <Image
                    src="/assets/images/iHR_code.png"
                    className="w-[280px] h-[200px]  -skew-y-3"
                    height={3000}
                    width={3000}
                    priority={true}
                    alt="Olaniyi George"
                  />
                
                  <Image
                    src="/assets/images/1c44f8914b9f20e13b6168a2c2be3586.jpg"
                    className="w-[280px] h-[200px] -skew-y-3 "
                    height={3000}
                    width={3000}
                    priority={true}
                    alt="Olaniyi George"
                  />
                
            </div>
        </div>
      </section>

    </section>
    )
}