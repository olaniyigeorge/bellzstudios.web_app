import Link from "next/link";



interface iHabitTask{
    _id: string;
    aspect: string;
    owner: string;
    title: string;
    description: string;
    accessibility: "public" | "private" | "partnership";
    start_date: Date;
    end_date: Date;

}

export default function HabitTaskCard(hbtk: iHabitTask) {
    
    return (
        <div className="border p-2  hover:border-purple-500 rounded-md">
        <h1 className="font-medium hover:text-purple-500  w-fit ">
                    <Link href={`/i/lockedin/life-domains/${hbtk._id}`}>
                        {hbtk.title}
                    </Link>
        </h1>
        <span className="">{hbtk.description}</span>
    </div>
    )
}

