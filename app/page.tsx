import Link from "next/link";
import Image from "next/image";
import ScrollDownAnimation from "./_components/scroll";

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
        <section className=" w-full flex flex-col md:gap-4 lg:gap-6 md:flex-row md:justify-between md:items-center px-2 md:px-20 lg:px-30 h-screen">
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
    
        <section 
            id="about-us"
            className="h-screen"
        >
          <span className="text-5xl"> About Us</span>
          
        </section>

        <section 
          id="contact"
          className="h-screen"
        >
        <span className="text-5xl"> Contact</span>

        </section>

        <section 
          id="note"
          className="h-screen"
        >
        <span className="text-5xl"> Notes</span>

        </section>

        <section 
          id="dev-stories"
          className="h-screen"
        >
        <span className="text-5xl"> Stories</span>

        </section>


      </div>
    );
}