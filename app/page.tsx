import Link from "next/link";
import Image from "next/image";
import ScrollDownAnimation from "./_components/scroll";
import ContactSection from "./_components/contact-section";
import AboutUsSection from "./_components/about-us-section";
import DevStoriesSection from "./_components/dev-stories-section";

export default function Landing() {
  const links = [
    {
      name: "About Us",
      id: "about-us"
    },
    {
      name: "Note",
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
                <div className=" ">
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

            <div className="w-full p-4 md:w-1/2  flex justify-center">
                <Link
                    href=""
                    className="text-5xl font-bold w-full flex justify-center h-auto"
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
        </section>
    
  
        <div className="w-full md:h-screen w-full container mx-auto my-6 px-2 md:px-10 lg:px-16">
          <AboutUsSection />
        </div>

        <div className="h-screen w-full container mx-auto my-6 px-2 md:px-10 lg:px-16">
          <ContactSection />
        </div>

        <div className="h-screen w-full container mx-auto my-6 px-2 md:px-10 lg:px-16">
          <DevStoriesSection />
        </div>

  
        <div className="h-screen w-full container mx-auto border p">
          <section 
              id="about-us"
              className="w-full border "
          >
            <div className="">
              <h1 id="hero-title" className="text-5xl"> About Us</h1>
            </div>
            
            
          </section>
        </div>

        <div className="h-screen w-full container mx-auto p-2 md:p-10 lg:p-16">
          <section 
              id="contact"
              className="w-full borde flex flex-col gap-2"
          >
            <section className="w-full flex flex-col gap-3">
                    
            </section>
            
            <section className="w-full flex items-center justify-center container mx-auto px-2 md:px-10 lg:px-16">
               <div className="rounded-lg w-[70%] bg-white flex justify-between items-center ">
                    {["Twitter", "Email", "LinkedIn"].map((social) => (
                      <button key={social} className="p-2 w-full flex justify-center hover:bg-purple-500 hover:text-white">
                          {social}
                      </button>
                    ))}
               </div>

            </section>
            
          </section>
        </div>

        

        <section 
          id="note"
          className="h-screen"
        >
        <span className="text-5xl"> Notes</span>

        </section>




      </div>
    );
}