import Link from "next/link";
// import Image from "next/image"

export type Inspiration = {
    tweetId: string;
};
export interface iDevStory{
    id: string;
    title: string;
    image: string;
    tag: string;
    description: string;
    open_source_url: string;
    product_url: string;
    status: "live" | "dev" | "dropped" | "old";
    inspirations: Inspiration[]
}


export default function DevStoryCard(data: iDevStory) {


    return ( 
    <div className="w-full p-3 gap-2 flex flex-col items-start md:p-6 rounded-lg shadow-md bg-black bg-opacity-20 hover:bg-opacity-30">

            <span className="w-full flex justify-between items-center">
            <h2 className="text-bold text-2xl">
                <Link href={`/dev-stories/${data.id}`}>{data.title}</Link>
            </h2>
            <Link href={data.product_url} target="_blank" className={`w-3 h-3 animate-pulse ${data.status === 'live' ? 'bg-green-500' :
                    data.status === 'dev' ? 'bg-blue-500' :
                        data.status === 'dropped' ? 'bg-red-600' : 'bg-gray-700'} rounded-full`}>
            </Link>
            </span>    
            <span 
                className="text-[8px] w-fit border font-medium border-purple-600 p-1 rounded-full"> 
                {data.tag}
            </span>

            <p className="line-clamp-3">
                {data.description}
            </p>

            <img src={data.image} className="rounded-xl min-w[30px] min-h-[30px] w-full h-full" />

    </div>
    )
}