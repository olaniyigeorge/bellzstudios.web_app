import { noteEntries } from "@/components/mock_data"

export default async function NotePage({params }: { params: { id: string } })  {

    const note = noteEntries.find((note) => note._id === params.id)

    if (!note) {
        return <div className="w-full hero_title text-red-500">Note not found!!!</div>;
    }
    
    return (
        <div className="font-irishgrover my-2 relative md:my-8 flex flex-col gap-2 md:gap-4 container px-2 md:px-8 lg:px-16 mx-auto">
              <span className="flex flex-col  items-center">
                <h1 className="text-3xl md:text-5xl font-bold orange-gradient text-center">{note?.title}</h1>
                <p className="text-md md:text-xl lg:text-3xl text-center">{note.description}</p>
            </span>

            <section className="w-full flex justify-center items-center flex-wrap gap-2 mt-4">
                {note.tags.map((tag) => (
                    <span key={tag} className="w-fit px-2 py-1 border border-orange-500 text-white flex gap-2 items-center justify-center">
                        <p className="text-[8px] font-inter">{tag}</p>
                    </span>
                ))}
            </section>

        

            <section className="w-full flex object-contain flex-col mt-4 items-center bg-black bg-white/2 shadow-[inset_10px_-80px_94px_0_rgb(199,199,199,0.1)] backdrop-blur-lg rounded-xl p-4">               
                <p className="text-pretty p-2 tracking-loose leading-loose text-xl md:text-2xl lg:text-3xl font-sans font-light">
                    {note.body}
                </p>
            </section>
        </div>
    )
}
