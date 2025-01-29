import Link from "next/link";
import { iNoteEntry } from "./note-entry-card";

export type TweetEmbeds = {
    tweetId: string;
};
export interface iDevStory{
    id: string;
    title: string;
    image: string;
    tag: string;
    description: string;
    tech_stack: {
        icon: string;
        name: string;
    }[],
    open_source_url: string;
    product_url: string;
    status: "live" | "building-in-public" | "dev" | "dropped" | "old";
    validatingTweets: TweetEmbeds[]
    notes: string[]
}


export default function DevStoryCard(data: iDevStory) {


    return ( 
    <div className="w-full p-3 gap-2 flex flex-col items-start md:p-6 bg-orange-900 bg-opacity-10 border border-black rounded-lg shadow shadow-orange-900">

            <span className="w-full flex justify-between items-center">
            <h2 className="font-bold text-2xl">
                <Link href={`/dev-stories/${data.id}`}>{data.title}</Link>
            </h2>
            <Link 
                href={data.product_url} 
                target="_blank" 
                className={`w-3 h-3 rounded-full animate-pulse 
                    ${
                        data.status === 'live' ? 'bg-green-500' :
                        data.status === 'dev' ? 'bg-blue-500' :
                        data.status === 'dropped' ? 'bg-red-600' :
                        data.status === 'building-in-public' ? 'bg-yellow-500' : 
                        'bg-gray-700'} `}>
            </Link>
            </span>    
            <span 
                className="text-[7px] w-fit border font-medium border-orange-600 p-1 rounded-full"> 
                {data.tag}
            </span>

            <p className="">
                {data.description.slice(0, 120)} {" "}....
            </p>

            <img src={data.image} className="rounded-xl min-w[30px] min-h-[30px] w-full h-full" />

    </div>
    )
}