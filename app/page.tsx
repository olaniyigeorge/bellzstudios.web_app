  import Link from "next/link";
  import Image from "next/image";
  import ScrollDownAnimation from "./_components/scroll";
  import ContactSection from "./_components/contact-section";
  import AboutUsSection from "./_components/about-us-section";
  import DevStoriesSection from "./_components/dev-stories-section";
import NotesSection from "./_components/notes-section";

  export default function Landing() {
    const links = [
      {
        name: "About Us",
        id: "about-us"
      },
      {
        name: "Notes",
        id: "notes"
      },
      {
        name: "Stories",
        id: "dev-stories"
      },
      {
        name: "Contact",
        id: "contact"
      },
    ]
      return (
        <div className="dark:bg-gray-950">
          <section className=" w-full flex flex-col md:gap-4 lg:gap-6 md:flex-row md:justify-between md:items-center px-2 md:px-20 lg:px-30 h-full md:h-screen">
              <div className="w-full p-4 md:w-1/2 flex flex-col gap-2">
                  <div className="z-10 mt-5 ">
                      <h1 className=" text-white text-xl font-light md:text-2xl">
                          Hi there! This is
                      </h1>
                      <Link
                          href=""
                          className="font-extrabold text-purple-600 text-7xl w-full text-start "
                      >
                          Bellz Studio
                      </Link>
                  </div>

                  <p className="font-medium text-white ">
                      {" "}
                      Building micro services & products we believe should exist{" "}
                  </p>

                  <div className="w-full flex flex-col md:flex-row text-gray-800 gap-2 mt-10 md:flex justify-between items-center">
                      {links.map((lk) => (
                          <ScrollDownAnimation 
                            key={lk.id + lk.name}
                            targetId={lk.id} 
                            child={<>{lk.name}</>} 
                          />
                        )
                      )}
                  </div>
              </div>

              <div className="w-full animate-slideBtT md:animate-[slideRtL_1.5s_ease-in-out] p-4 md:w-1/2  flex justify-center">
                  <Link
                      href=""
                      className="text-5xl z-10 mb-5 md:mb-0  font-bold w-full flex justify-center h-auto"
                  >
                      <Image
                          src="/assets/images/memoji.png"
                          className="border-4 border-purple-600 w-full h-full rounded-full"
                          height={200}
                          width={200}
                          priority={true}
                          alt="Olaniyi George"
                      />
                  </Link>
              </div>
              <Image
                  src="/assets/images/curlyVectorTop.svg"
                  className="absolute top-0 left-0"
                  height={200}
                  width={200}
                  priority={true}
                alt="curlyV"
              />
              <Image
                  src="/assets/images/curlyVectorBottom.svg"
                  className=" absolute  -bottom-16 md:-bottom-1 right-0 "
                  height={300}
                  width={300}
                  priority={true}
                alt="curlyV"
              />
          </section>
      
    
          <div className="w-full md:h-screen w-full container mx-auto my-10 px-2 md:px-10 lg:px-16">
            <AboutUsSection />
          </div>

          <div className="h-screen w-full container mx-auto my-10 px-2 md:px-10 lg:px-16">
            <ContactSection />
          </div>

          <div className="h-screen w-full container mx-auto my-10 px-2 md:px-10 lg:px-16">
            <DevStoriesSection />
          </div>
          
          <div className="h-screen w-full container mx-auto mt-10 px-2 md:px-10 lg:px-16">
            <NotesSection />
          </div>





        </div>
      );
  }