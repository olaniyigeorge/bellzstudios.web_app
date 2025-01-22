"use client";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { DEV_STORIES, DISCOVERY_LOCATION } from "./mock_data";
import NoteEntryCard, { iNoteEntry } from "./note-entry-card";
import { TweetEmbeds } from "./dev-story-card";
import { motion } from "framer-motion";

interface DevStoryPageProps {
    id: string;
}

export default function DevStoryPage({ id }: DevStoryPageProps) {
    const [email, setEmail] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const story = DEV_STORIES.find((story) => story.id === id);
    if (!story) {
        return <div className="w-full">Story not found</div>;
    }
    const [product, setProduct] = useState<string>(story!.title.toLocaleLowerCase());

    async function joinWaitlist(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const location = selectedLocation || "friends_family";

        const response = await fetch("/api/waitlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                product,
                discovery_location: location,
            }),
        });

        const res = await response.json();
        if (response.ok) {
            console.log(res);
            toast.success("Thanks for joining our waitlist");
        } else if (response.status == 409) {
            console.error(res);
            toast.success("You've joined the waitlist for this product.");
        } else {
            console.error(res);
            toast.error("An error occurred while attempting to join our waitlist");
        }
        setIsSubmitting(false);
    }

    return (
        <div className="font-irishgrover flex flex-col gap-2 md:gap-4 container px-2 md:px-8 lg:px-16 mx-auto">
            <section className="flex flex-col gap-3 bg-orange-500 bg-white/5 shadow-[inset_10px_-80px_94px_0_rgb(199,199,199,0.1)] backdrop-blur-lg p-5 rounded-lg p-2 bg-opacity-10">
                <span className="flex justify-between items-start">
                    <span className="items-start">
                        <h1 className="text-3xl md:text-5xl font-bold">{story.title}</h1>
                        <p className="text-[8px] w-fit rounded-full p-1 border border-orange-900">{story.tag}</p>
                    </span>
                    <Link
                        target="_blank"
                        href={story.product_url}
                        className="font-bold items-center flex gap-2 p-2 font-medium transition-all duration-500 ease-in-out text-[12px] orange-gradient border light-btn"
                    >
                        Try {story.title}
                        <ArrowLongRightIcon className="w-6 h-6 text-orange-500" />
                    </Link>
                </span>

                <section className="">
                    <p className="text-md md:text-xl lg:text-3xl text-pretty">{story.description}</p>

                    <section className="w-full flex gap-3 mt-4">
                        {story.tech_stack.map((comp) => (
                            <span className="w-full p-2 border border-slate-800 text-white flex gap-2 items-center justify-center">
                                <Image src={comp.icon} alt={comp.name} width={100} height={100} className="object-fill rounded-full bg-white flex items-center w-8 h-8 "/>
                                <p className="text-sm font-inter">{comp.name}</p>
                            </span>
                        ))}
                    </section>
                </section>
            </section>

            <form onSubmit={joinWaitlist} className="my-3 flex flex-col items-center gap-3 md:gap-6 justify-center">
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="w-[90%] md:w-[70%] lg:w-[60] shadow shadow-orange-500 border-orange-500 text-white bg-transparent border outline-none px-4 py-2 rounded-full"
                />
                <input
                    type="text"
                    name="product"
                    hidden
                    value={story.title.toLowerCase()}
                    required
                    className="w-[90%] md:w-[70%] lg:w-[60] shadow shadow-orange-500 border-orange-500 text-white bg-transparent border outline-none px-4 py-2 rounded-full"
                />
                <span className="w-full flex items-center justify-center gap-3">
                    <span className="p-2 gap-2 flex items-center rounded-md italics">
                        <select
                            className="flex gap-2 border-none ring-0 outline-none bg-transparent justify-center text-orange-500"
                            onChange={(e) => setSelectedLocation(e.target.value)}
                        >
                            <option className="bg-transparent text-slate-900" value="friends_family">
                                How did you hear about us?
                            </option>
                            {DISCOVERY_LOCATION.map((location: string) => (
                                <option key={location} className="bg-transparent text-slate-900" value={location}>
                                    {location.toUpperCase().replace("_", " ")}
                                </option>
                            ))}
                        </select>
                    </span>
                    <button type="submit" className="w-full md:w-fit orange-gradient-bg font-kanit text-sm text-white px-6 py-2 rounded-full text-white font-medium transition-all duration-300">
                        {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </button>
                </span>
            </form>

            <section className="w-full flex object-contain flex-col mt-4 items-center bg-black bg-white/10 shadow-[inset_10px_-80px_94px_0_rgb(199,199,199,0.1)] backdrop-blur-lg rounded-xl p-2">
                <h1 className="text-3xl text-center font-medium py-2">
                    Join the conversation on
                    <span className="orange-gradient">{" "}{story.title}</span>
                </h1>
                {/* <SliderAd /> */}

                <div className="grid md:grid-cols-2 gap-6 pb-6 overflow-auto w-full">
                     {story.notes.map((note: iNoteEntry) => (
                        <NoteEntryCard key={note._id} post={note} handleEdit={function (): void {
                            throw new Error("Function not implemented.");
                        } } handleDelete={function (): void {
                            throw new Error("Function not implemented.");
                        } } />
                    ))}
                    </div>
                <section className="grid grid-cols-1 md:grid-cols-2 w-full">
                   
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 w-full">
                    {story.validatingTweets.map((inspo: TweetEmbeds) => (
                    <TwitterTweetEmbed key={inspo.tweetId} tweetId={inspo.tweetId} />
                ))}
                </section>
                
            </section>
        </div>
    );
}
