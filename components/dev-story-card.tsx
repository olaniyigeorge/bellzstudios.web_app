import Link from "next/link";
// import Image from "next/image"

export type Inspiration = {
    tweetId: string;
};
export interface iDevStory{
    id: string;
    title: string;
    tag: string;
    description: string;
    open_source_url: string;
    product_url: string;
    status: "live" | "dev" | "dropped";
    inspirations: Inspiration[]
}


export default function DevStoryCard(data: iDevStory) {


    return ( 
        <div className="w-full p-3 gap-2 flex flex-col md:p-6 rounded-lg shadow-md bg-gray-900">
            
            <div className="flex items-center justify-between ">
                <h2 className="text-bold text-2xl">
                    <Link href={`/dev-stories/${data.id}`}>{data.title}</Link>
                </h2>
                <Link href={data.product_url} target="_blank" className={`w-3 h-3 animate-pulse ${
                        data.status === 'live' ? 'bg-green-500' :
                        data.status === 'dev' ? 'bg-orange-500' :
                        data.status === 'dropped' ? 'bg-red-700' : ''
                        } rounded-full`}>
                </Link>
            </div>

            <span className="text-[10px] w-fit border border-purple-600 p-1 rounded-full"> {data.tag}</span>

            <p className="line-clamp-3">
                {data.description}
            </p>          

            
        </div>
    )
}