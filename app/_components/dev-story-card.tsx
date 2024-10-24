import Link from "next/link";
// import Image from "next/image"

type Inspiration = {
    tweetId: string;
};
export interface iDevStory{
    id: string;
    title: string;
    tag: string;
    description: string;
    open_source_url: string;
    product_url: string;
    inspirations: Inspiration[]
}


export default function DevStoryCard(data: iDevStory) {


    return ( 
        <div className="w-full p-3 gap-2 flex flex-col md:p-6 rounded-md shadow-md bg-gray-900">
            
            <div className="flex items-center justify-between ">
                <h2 className="text-bold text-2xl">
                    <Link href={`/dev-stories/${data.id}`}>{data.title}</Link>
                </h2>
                <Link href={data.product_url} target="_blank" className="w-4 h-4 animate-pulse bg-green-500 rounded-full">
                    {/* <Image
                        src="/assets/images/notes.png"
                        className="object-contain rounded-full"
                        height={20}
                        width={20}
                        priority={true}
                        alt="product-link"
                    /> */}
                </Link>
            </div>

            <span className="text-xs w-fit border border-purple-600 p-1 rounded-full"> {data.tag}</span>

            <p className="line-clamp-3">
                {data.description}
            </p>          

            
        </div>
    )
}