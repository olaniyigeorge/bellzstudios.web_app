"use client";
import { FormEvent, useState } from "react";
import { DEV_STORIES, DISCOVERY_LOCATION } from "../page";
import { toast } from "react-toastify";
import { TwitterTweetEmbed } from "react-twitter-embed";


export default function DevStoryPage({ params }: { params: { id: string } }) {
    const [email, setEmail] = useState<string>("");
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const story = DEV_STORIES.find((story) => story.id === params.id);

    if (!story) {
        return <div className="w-full">Story not found</div>;
    }

    async function joinWaitlist(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const response = await fetch("/api/waitlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                discovery_location: selectedLocation,
            }),
        });

        const res = await response.json();
        if (response.ok) {
            console.log(res);
            toast.success("Thanks for joining our waitlist")
        } else {
            console.error(res);
            toast.error("An error occured while attempting to join our waitlist")
        }
    }


    return (
        <div className="flex flex-col gap-2 md:gap-4 container px-2 md:px-8 lg:px-16 mx-auto">
            <span className="flex justify-between items-center">
                <h1 className="text-3xl md:text-5xl font-bold">{story.title}</h1>
                <p className="text-xs w-fit rounded-full p-1 border border-purple-500">{story.tag}</p>
            </span>
            <p className="text-sm">{story.description}</p>
            <form onSubmit={joinWaitlist} className="flex flex-col items-center gap-3 justify-center">
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-[90%] md:w-[70%] lg:w-[60] text-white bg-transparent border outline-none px-4 py-2 rounded-full"
                />
                <span className="flex items-center gap-3">
                    <span className="p-2 gap-2 flex items-center  rounded-md italics">
                        <select
                            className="flex gap-2 border-none ring-0 outline-none bg-transparent justify-center text-purple-600"
                            defaultValue=""
                            onChange={(e) => setSelectedLocation(e.target.value)}
                        >
                            <option className="bg-transparent  text-slate-900" value="">
                                How did you hear about us?
                            </option>
                            {DISCOVERY_LOCATION.map((location) => (
                                <option key={location} className="bg-transparent   text-slate-900" value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>
                    </span>
                    <button className="p-2 border hover:text-purple-200 hover:bg-purple-950 border-purple-600 rounded-md">
                        Join Waitlist
                    </button>
                </span>
            </form>
            
            <section className="flex flex-col items-center">
                <h1 className="text-3xl font-medium">
                    Join the conversion on 
                    <span className="text-purple-600">{" "}{story.title}</span> 
                </h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 lg:gap-8 p-2">
                    {story.inspirations.map((tweet) => (
                        <TwitterTweetEmbed key={tweet.tweetId} tweetId={tweet.tweetId} />
                    ))}
                </div>
            </section>

        </div>
    );
}
