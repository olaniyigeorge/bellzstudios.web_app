
import SmoothScrollButton from "@/components/smoothscroll"
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"


export default function AboutUsSection() {

    return (
        <section 
        id="about-us"
        className="page-section font-irishgrover  border-[#513F01] bstd_orange-gradient-bg w-full flex items-center gap-3 py-5 md:py-10"
    >
      <section className="w-full flex flex-col items-center md:items-start gap-3">
        <div className="flex flex-col items-center md:items-start  gap-3">
        <h1 id="hero-title" className="text-black font-extrabold text-3xl tracking-tighter">
          ABOUT US
        </h1>

        <p 
          className="text-xl md:text-[20px] font-poppins text-orange-950 text-center md:text-right"
        >
          BellzStudio was founded on the belief that meaningful collaboration and efficient engineering can drive real-world change. 
          We specialize in building systems that empower communities and support data-intensive applications, solutions shaped through iteration, feedback, and real stakeholder needs.
          
          <br />
          Whether it&apos;s architecting scalable backends, refining complex workflows, or bringing bold ideas to life, we thrive at the intersection of problem-solving and precision. 
          Our work is driven by a deep curiosity, a commitment to clarity, and a mindset rooted in growth and real impact.
          
          <br />
          Got an idea or a technical challenge? Let&apos;s build something powerful together.
        </p>


        </div>

        <span className="w-full flex gap-6 md:gap-20 item-center">
                   
          <span className=" shadow-lg border border-black bg-black hover:bg-white/20 hover:scale-105 hover:text-black rounded-full w-fit flex gap-2 font-medium items-center px-4 py-2 text-white">
            <Link href="/about-me" target="_blank" className=" ">
              Resume
            </Link> 
              <ArrowRightIcon className=" h-4 w-4" />
          </span>    
          <SmoothScrollButton pixels={500} className="text-black px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-700 ease-in-out font-medium">
            Contact
          </SmoothScrollButton>
            

        </span>
            
      </section>
      
      <section className="w-full md:justify-center z-10 md:items-center hidden px-2 py-5  md:flex">
        <div className="w-full flex flex-col  h-full relative items-center ">
           
                  <Image
                      src="/assets/images/ab_vector1.png"
                      className="w-[380px] h-[220px]  hover:animate-wiggle absolute bottom-0 right-2"
                      height={3000}
                      width={3000}
                      priority={true}
                      alt="Olaniyi George"
                    />
                  
                    <Image
                      src="/assets/images/ab_vector.png"
                      className="w-[380px] h-[280px] hover:animate-wiggle  absolute -top-12  left-2"
                      height={3000}
                      width={3000}
                      priority={true}
                      alt="Olaniyi George"
                    />
           
          </div>
        {/* <div className="flex h-full w-full gap-2 justify-center">
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
        </div> */}
      </section>

    </section>
    )
}