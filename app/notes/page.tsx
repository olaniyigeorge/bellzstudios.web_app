
export default function Note() {
    
    const note = {
        "_id": "hellworld",
        "body": "Hello World!",
        "tags": ["software", ],
        "title": "datetime",
        "privacy_level": "privacy_level", 
        "written_at": "datetime",
        "updated_at": "datetime",
    }
    const notes = [
        note,
        note,
        note,
        note,
        note,
        note,
        note,
        note,
        note,
        note,        note,
        note,
        note,
        note,
        note,
        note,
    ]
    return (
        <div className="max-w-[1440px] h-full flex flex-col justify-center items-center  text-slate-200"> 
            <h1 className="w-1/2 p-2 md:p-4 text-5xl md:text-7xl tracking-tight font-extrabold items-center text-center ">
                Look into my mind and read my thoughts... 
            </h1>

            <section className="w-full border-y h-full border-purple-800 grid gap-3 md:gap-4 grid-cols-3 p-2 md:p-4 w-2/3 ">
                {notes.map((letter) => (
                    <div className="border p-2 rounded-xl ">
                        <p className="font-medium">{letter.body}</p>
                        <span className="w-full text-sm flex justify-end">
                            
                            {letter.written_at}
                        </span>
                    </div>
                ))}
            </section>
        </div>
    )
}