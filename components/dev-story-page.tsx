"use client";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { DEV_STORIES, DISCOVERY_LOCATION, noteEntries } from "./mock_data";
import NoteEntryCard, { iNoteEntry } from "./note-entry-card";
import { TweetEmbeds } from "./dev-story-card";

interface DevStoryPageProps {
    id: string;
}

export default function DevStoryPage({ id }: DevStoryPageProps) {
    const [email, setEmail] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
    const story = DEV_STORIES.find((story) => story.id === id);
    const [notes, setNotes] = useState<iNoteEntry[]>([])

    const product = story ? story.title.toLocaleLowerCase() : "";

    useEffect(() => {
        if (story) {
            const extractedNotes = story.notes.map((id) => noteEntries.find(note => note._id === id)).filter(Boolean) as iNoteEntry[];            
            const sortedData = extractedNotes.sort((a, b) => new Date(b.written_at ?? 0).getTime() - new Date(a.written_at ?? 0).getTime());

            setNotes(sortedData);
            console.log(notes);
        }
    }, [story]);

    if (!story) {
        return <div className="w-full">Story not found</div>;
    }

    
    // console.log(setProduct)
    async function joinWaitlist(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const location = selectedLocation || "friends_&_family";

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
            <section className="flex flex-col gap-3 bg-orange-500 z-0 bg-white/5 shadow-[inset_10px_-80px_94px_0_rgb(199,199,199,0.1)] backdrop-blur-lg p-5 rounded-lg bg-opacity-10">
                <span className="flex justify-between items-start">
                    <span className="items-start">
                        <h1 className="text-3xl md:text-5xl font-bold">{story.title}</h1>
                        <p className="text-[8px] w-fit rounded-full p-1 border border-orange-900">{story.tag}</p>
                    </span>
                    <Link
                        target="_blank"
                        href={story.product_url}
                        className="font-bold items-center flex gap-2 p-2 transition-all duration-500 ease-in-out text-[12px] orange-gradient border light-btn"
                    >
                        Try {story.title}
                        <ArrowLongRightIcon className="w-6 h-6 text-orange-500" />
                    </Link>
                </span>

                <section className="">
                    <p className="text-md md:text-xl lg:text-3xl text-pretty">{story.description}</p>

                    <section className="w-full flex flex-wrap gap-2 mt-4">
                        {story.tech_stack.map((comp) => (
                            <span key={comp.name} className="w-fit px-3 py-2 border border-slate-800 text-white flex gap-2 items-center justify-center">
                                <Image src={comp.icon} alt={comp.name} width={100} height={100} className="object-fill rounded-full bg-white flex items-center w-8 h-8 "/>
                                <p className="text-sm font-inter">{comp.name}</p>
                            </span>
                        ))}
                        <Link href={story.open_source_url} className="w-fit px-3 py-2 border border-slate-700 text-white flex gap-2 items-center justify-center bg-slate-500 hover:bg-black bg-opacity-30">
                            <Image 
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAZlBMVEX///8AAAB7e3v7+/v29vbt7e3h4eHw8PDOzs61tbXe3t4dHR3l5eXZ2dkvLy+FhYVWVlY0NDScnJyUlJRtbW0YGBijo6PDw8NDQ0MPDw+tra1cXFy8vLwpKSlkZGSLi4s8PDxMTExmGCz5AAAKOUlEQVR4nNVd6aKyIBAt0dTcSs02s3z/l/yuefuyYjkgS/f81uIIDMPMYVgstIBk1+1SEdtrRvS0QgNIGHmJKpMRiReF30AoyJrDPCYjDk0WuGVCstjTwWSEFzscbyQqe31UBvRl5IjOvtAyvl5xKPYOqLSesvniY+u1lqlEXm6GyoDciyxSSU1SGemktrhUO7NUBuwqK1T25pmMMG4JSFDb4rJc1oFROx2eLIywJ3an0BgVklnslhG1KZ/AP91sc1kubyffBJdVMdM1VkNSrPRzac8uqAw4a/cIroaXSR7yq14u1mf+K2qNVILeLZefvYG2jdve4RB7INfkD5ycWLF3JCcNVIjdRZ+N3Wn2+uk3rkk80cxcP/3KNYMpqnlsCtftf0Uxh4vGOJIeeOpcrq7b/gllZ+Cr5ssDitvp8kts8it2pQqX5iu5/LBp5Lm0X+DD0JFLbwmyjes2s7HJ5Likjn1+PmqpEKH/ZYvlOwoZV+CLHDI6JIzA/iucfh4SeHvjG0pW6MQWHWjcyV9FWRTFppIzI87VPsqyiOsZgmGBE/ePxh0S8dNSa/uf6OPQH/8k4D4H7Twz7oSZfhAD0drddTp8uGtdAqw2pOf+22tOKywPGp2eZBO/tiXmPt6Lt9F89zJ5n3f+qdPk92zrj+Qff5yJXc6s5/6ARzEi+1oDnQstj+nzQ8K9YKD5gr1lTH0r9i7zqCQ19YeJYPGmfdppswStYnyLMKbZguNt09Veca3KH1TXwqu7ze1IebCLGQHLiN+aC/3b/mItCPVvmR5eWk7HWt4VTdv+LBarNPg1tMQPg3SVRfu2bYqXeZaXzF9dCczLec3mIurWZc0O+ZJo7JykK+MoS3kiJRKmWRSX3bgG1ByFSdAJGtSw312L1nVu4CqML+cySgPQ0fCDNCrPl5iXtvRFIZUts2vEET/BHs/3JSOoxOczJ3xvhPd516I3zafm3yEWHTDmGxGH/L6QjEcfDJnwxaVNgc4dAts8gL5aiDOwx28kc6a9l4rf+8qeoc4axJ//SjKUbRrSMd9J5vi5kkPBpS+0ZktKZiCFdDHz04pyEC+aA27vXVPSvNnPb2BElcOG0J254yOUjiljzpZF4QHYrNe39mDoiONym4DYwbpj+zqX0eSlZXOGGLMBL4nbFaq/KqxaAILG789TTRqsKNlZnTQBGseaalEkMhiSeZ55AFzfX0xGDJ4m88zJWSkIYR3CJJnWot0pl7KajxSdy7v/e2CCxsAP9n0z9FRL+RhncAKTG6YyA364+Yn/Ywa15lcHp44IKnl5DBrIm3sz5tYgiks+8GucQ8ww73ToChXQQC7wshjt7ApTxdeWPeYHfGxG38Zxg02Zi+2TYP/RYimGcdJgBoMaBLEDbNbcTS3myxwdmOUHYmjW3FUbIbQubd1xWSygzdZhsAAr5MmlkmRNFzAPZbAA2Py36mC+I4SaOFiAFnkwd8llsYAywIO5hfwFp6MMHGdD+EyUabvDiSfzBDSvux9PDlqSHK3+D/hIGy8Ee27jlotARfP84pClsHPQmANILx5iQQOHy/8IyOXKMMvsonrCC6BsQIvtzCxHZT8BxWlPmAl3XERFJNb6RQklmSi5KdtkEMe5gIye3aAslQwS2dsskA3AxT0ZZGk/LJAAQO6eDOJq3iCH9I/0TL5Ankrck0FyLpcFMrP+iDXbLaBggXsySCuPC+SpP0JmifXM33Bnjgsom2k9L/MOKOqSYLGCv+E159Ci+Uf2MzfInVE/UawL0E6zx3bXnWsyUFrjjEWato6LXBJoMtSgasZpdBaNz3rgOXnHCw0m1ajA7KyjfOYDaCOh6IzW+kIKwNKaLZieWbolg7VxhYVnHU8aUBDoo2Sc5jTAc+MEzAIsby7JYGqgCwED7MudwwxNiukUh1QFKFBzmAjANNf3AjugCGrjzqMBdYqDaw8KtHRVS5NHBGquhx1kCmoaZ5RJmgdQDbsb5HNhjz1sX9M4IgOVjf3gDGOHB5bOdmhoxaj7oQvsWMdSfMjbDGCZ8ngcBpVoOtFo4qW8xlmwRo/zbx0YtAgt3puP3iOo0Vza1pvf2wZrzn81mqh6dsk95G0E8Hx+bh8juADQxfb5Gbi8TfJo2QqK0NyxsXoYIMXrknUPR1imWKZNFQ2RqLH2PEqPKTp/P4E9MhJcJnrYqMdfs8dGpnR3/5zMcrXZzlbEZ4HUFSrT6m1yVYwPFvwaeLG8I5mmKeATRCPy2HDn+JI1os8vRla2MOvVaOfwK5vRmvPyeitbfK0/GUvapo1sY96cRl++bGbNrRijDHqlJD7Ob15WJbHU/CLxWu1TJ4g9+YYc3yNHKW0f4MX7KK7YnZZ3em+6CJtOpRxX/uFjUZaa6L4R9YOsZNqWpL9qi0JnhWIZu8/62pQaGv8JE06c4Hg5NxomT1pulIt3UkzRp+vcTeZV2vN+7la0M4xb0M660IrmX1HkKS/lHISn8uomC32J2lPk5+Ewa/D9BwPUz0jxAsrp/EaqORw3ddVCoy6Iq7qfy2MA/TAcLQtarCcfeo/5S9gdZStdRTjpvgih/fx2utJDfYPet6bpXq6aMayptU2PxaRxJ/EysIETOYIqlxiYdU4ZR+m9Z9+IS6DxCyi+QlQaEkHJtDeMGPUkXCaU5HYSwSgy25Bxt1aMMFX1bKFANoBUt30Cj3GxwBNbsIJOk3AZ372+yXBZYGI3DjruBGXEaY7PruGn2iVVdpg8hAnBGWVWaGPiMnCTBnJcUOkFC6Ii9Cx7OdnLcfwa6TDUrKsUxAkjxhVNE/mcz74cVFrHMae2OFA6grGUHKcFhErWAiEdV4cTXRQwKmi+gFGDrp+4j37MiNBJb2wwJTkVN8htopuY13vGMpqh6OXVQkS9RDpYBoM+0F4LgoTvsa28aNcKqSjl+wVQWUJI/Yf3a1/CdVPnyTG55NuuOkWp2t5Z1Zxt4b+jqwM/dADED8Mg/IFsZeMJVN0zCZEVVXpvRAeguKmRyXvT64ObkGio3aQmlygOaH9iQgegRMaTDAWtaTPTQK02FTIb6bgjNdtTaI+VK5C5KeTvqfebXnUnMuTJqKn4Yto+sNYscJYmkygeTKJuot+vVbFNRvlUApXNpda53siSmXHCgh78zz9virFFZtZSx0plXOr406EIFITccmRmLtvcrWDvVeWpHS4uOVVDVkLhYIoUmbkHEojMTZQKamEJMrv5ajcCxJetkLnoKLBOYjitZZLMNtajQmxRTY5BMgdtTm4EbqHMGYBOo54yxTRcxshctbrr2JXnpsjMveT8HWQPmGgzZHZ7/QLklTiQYoQMnleUAWlEuSEF+aaITGJMF54JrJp+Mp1BkZ5fcSOQuslsufeqzce+5qhOFCoHc8gca+OnQsKGLU7VSkaLWEqIdcNybxS09Swyh8bSaWqSVXS7po1MUmX2Drf4dLGuLjJeZLeiqk9LN/Xyv0MhU2QOisN+Hu9S8AA+tuVSd7K/4R8pmphRT60QIAAAAABJRU5ErkJggg==" 
                                alt="github" 
                                width={100} 
                                height={100} 
                                className="object-fill rounded-full bg-white flex items-center w-8 h-8 "
                            />
                            <p className="text-sm font-inter">GitHub</p>
                        </Link>
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
                <span className="w-full flex items-center justify-center gap-1 md:gap-3">
                    <span className="p-2 gap-2 flex items-center rounded-md italics">
                        <select
                            className="flex gap-2 border-none ring-0 outline-none bg-transparent justify-center text-orange-500"
                            onChange={(e) => setSelectedLocation(e.target.value)}
                        >
                            <option className="bg-transparent  text-slate-900" value="friends_&_family">
                                How did you hear about {story.title.toLocaleLowerCase()}?
                            </option>
                            {DISCOVERY_LOCATION.map((location: string) => (
                                <option key={location} className="bg-transparent text-slate-900" value={location}>
                                    {location.toLocaleUpperCase().replaceAll("_", " ")}
                                </option>
                            ))}
                        </select>
                    </span>
                    <button type="submit" className="w-fit orange-gradient-bg font-kanit text-sm text-white px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300">
                        {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </button>
                </span>
            </form>

            <section className="w-full flex object-contain flex-col mt-4 items-center bg-black bg-white/10 shadow-[inset_10px_-80px_94px_0_rgb(199,199,199,0.1)] backdrop-blur-lg rounded-xl p-2">
                <h1 className="text-3xl text-center font-medium py-2">
                    Join the conversation on
                    <span className="orange-gradient">{" "}{story.title}</span>
                </h1>
                <h1 className="font-inter text-center font-medium pb-2">
                    Send a DM on  {" "} 
                    <Link 
                        href={"https://x.com/imoctborn"} 
                        target="_blank"
                        className="underline">
                           twitter 
                    </Link> 
                    {" "}or use the hashtag 
                    <Link 
                        href={`https://x.com/intent/post?text=%23${story.id}%20%23bellzstudio`} 
                        target="_blank"
                        className="orange-gradient underline"
                    >
                            {" #"}{story.title.toLowerCase()}
                    </Link>
                </h1>
                {/* <SliderAd /> */}

                    <div className="grid md:grid-cols-2 gap-3 md:gap-6 pb-6 h-full w-full">
                        {notes.map((note: iNoteEntry) => (
                            <NoteEntryCard 
                                key={note._id}
                                post={note} 
                                handleEdit={function (): void {
                                    throw new Error("Function not implemented.");} } 
                                handleDelete={function (): void {
                                    throw new Error("Function not implemented.");
                                } }
                            />                    
                        ))}
                    </div>
 
                <section className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 w-full">
                    {story.validatingTweets.map((inspo: TweetEmbeds) => (
                    <TwitterTweetEmbed key={inspo.tweetId} tweetId={inspo.tweetId} />
                ))}
                </section>
                
            </section>
        </div>
    );
}
