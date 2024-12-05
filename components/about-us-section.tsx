  import Image from "next/image"


  export default function AboutUsSection() {

      return (
          <section 
          id="about-us"
          className="w-full flex items-center gap-3"
      >
        <section className="w-full flex flex-col  gap-4 md:gap-8 lg:gap-12">
          <div className="flex flex-col gap-3">
            <h1 id="hero-title" className="dark:text-purple-300 font-bold text-5xl"> About Us</h1>
            <p className="text-lg md:text-xl dark:text-purple-100">
              Bellz Studio was birthed from the idea that there is a lot of good that 
              could be done from a small place when tech is applied 
              to doing what it does best; making life easier.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 id="hero-title" className="dark:text-purple-300 font-bold text-5xl"> Our Mission</h1>
            <p className="text-lg md:text-xl dark:text-purple-100">
              Our mission is to build solutions to as many problems as we can 
              in our immediate locale and document the journey while at it. 
              We would consider ourselves successful when we can get at least a thousand 
              people to actually use this products to deal with the issues they address. 
            </p>
          </div>
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