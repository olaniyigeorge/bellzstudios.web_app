import Link from "next/link";
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
    status: "live" | "building-in-public" | "dev" | "paused" | "old";
    validatingTweets: TweetEmbeds[]
    notes: string[]
}


export default function DevStoryCard(data: iDevStory) {


    return ( 
    <div className="w-full p-3 gap-2 flex font-poppins flex-col items-start md:p-6 bg-[#0e0b01]  rounded-lg shadow ">

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
                        data.status === 'paused' ? 'bg-red-600' :
                        data.status === 'building-in-public' ? 'bg-yellow-500' : 
                        'bg-gray-700'} `}>
            </Link>
            </span>    
            <span 
                className="text-[7px] w-fit border font-medium border-orange-900 p-1 rounded-full"> 
                {data.tag}
            </span>

            <p className="text-orange-100 font-normal">
                {data.description.slice(0, 155)} {" "}....
            </p>

            <img src={data.image} className="rounded-xl min-w[30px] min-h-[30px] w-full h-full" />

    </div>
    )
}