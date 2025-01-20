import { ArrowDownIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"


export default function AboutUsSection() {

    return (
        <section 
        id="about-us"
        className="page-section orange-gradient-bg w-full flex items-center gap-3 py-5 md:py-10"
    >
      <section className="w-full flex flex-col items-center md:items-start gap-3">
        <div className="flex flex-col items-center md:items-start  gap-3">
          <h1 id="hero-title" className="text-black font-irishgrover font-extrabold text-3xl  tracking-tighter"> ABOUT US </h1>
          <p className="text-xl md:text-2xl font-medium font-irishgrover text-black text-center md:text-right">
              BellzStudio was born from an aprreciation for what open-source can achieve and a desire to make a real impact. 
              At its core, it&apos;s about teaming up to turn ideas into meaningful, impactful software. Whether refining 
              existing solutions or building something new.

              <br />
              As a developer passionate about solving real problems, I&apos;m open to collaborating 
              at any stage—brainstorming, building, or testing. I also love sharing my journey, 
              documenting my learning process to grow and create better products.

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
      
      <section className="w-full hidden px-4 py-5  font-medium  md:flex">
        <div className="flex h-full w-full justify-center rounded-lg ">
            <div className="mx-auto  flex space-x-3 space-y-6">
                <div className="space-y-3">
                    <div className="">
                        <Image
                          src="/assets/images/243465e27e2d4698d9f838d0756f23c9.jpg"
                          className="w-full h-auto rounded-lg md:rounded-xl"
                          height={300}
                          width={300}
                          priority={true}
                          alt="Olaniyi George"
                        />
                    </div>

                    <Image
                        src="/assets/images/vision.png"
                        className="w-full h-auto rounded-full"
                        height={300}
                        width={300}
                        priority={true}
                        alt="Olaniyi George"
                      />
                </div>

                <div className="space-y-3">
                    <div className="  ">
                    <Image
                        src="/assets/images/pngtree-network-earth-in-the-age-of-big-data-network-png-image_4484350-removebg-preview.png"
                        className="w-full h-auto rounded-lg md:rounded-xl"
                        height={300}
                        width={300}
                        priority={true}
                        alt="Olaniyi George"
                      />
                    </div>

                    <div className="">
                      <Image
                        src="/assets/images/1c44f8914b9f20e13b6168a2c2be3586.jpg"
                        className="w-full h-auto rounded-lg md:rounded-xl"
                        height={300}
                        width={300}
                        priority={true}
                        alt="Olaniyi George"
                      />
                    </div>
                </div>
            </div>
        </div>
      </section>

    </section>
    )
}