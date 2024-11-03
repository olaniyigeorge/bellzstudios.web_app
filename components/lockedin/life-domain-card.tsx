import Link from "next/link";

interface iLifeDomain{
    _id: string;
    name: string;
    description: string;
}




export default function LifeDomainCard(lfd: iLifeDomain) {


    return (
        <div className="border p-2  hover:border-purple-500 rounded-md">
            <h1 className="font-medium hover:text-purple-500  w-fit ">
                        <Link href={`/i/lockedin/life-domains/${lfd._id}`}>
                        {lfd.name}
                        </Link>
            </h1>
            <span className="">{lfd.description}</span>
        </div>
    )
}

