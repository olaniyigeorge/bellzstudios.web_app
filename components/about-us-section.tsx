import { ArrowDownIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"


export default function AboutUsSection() {

    return (
        <section 
        id="about-us"
        className="w-full flex items-center gap-3"
    >
      <section className="w-full flex flex-col items-center md:items-start   gap-4">
        <div className="flex flex-col items-center md:items-start  gap-3">
          <h1 id="hero-title" className="orange_gradient font-bebas-neue-bold font-extrabold text-3xl  tracking-tighter"> ABOUT US </h1>
          <p className="text-xl md:text-2xl font-medium font-poppins dark:text-purple-100 text-center md:text-right">
            Bellz Studio was birthed from the idea that there is a lot of good that 
            could be done from a small place when tech is applied 
            to doing what it does best; making life easier.
            <br/>
            Our mission is to build solutions to as many problems as we can 
            in our immediate locale and document the journey while at it. 
            We would consider ourselves successful when we can get at least a thousand 
            people to actually use this products to deal with the issues they address. 
          </p>
        </div>

        <span className="flex gap-4 item-center">
          <Link href="/about-me" className="w-fit font-medium p-4 rounded-full border text-purple-900 light_btn">
              Resume
            </Link>        
            <span className="">
              <Link href={"#contact"} className="w-fit flex gap-2 font-medium items-center px-4 py-2 ">
                <>Contact</>
                <ArrowDownIcon className="w-4 h-5 text-white font-medium" />
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