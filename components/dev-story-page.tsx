"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import { DEV_STORIES, DISCOVERY_LOCATION, noteEntries } from "./mock_data";
import NoteEntryCard, { iNoteEntry } from "./note-entry-card";
import { TweetEmbeds } from "./dev-story-card";

interface DevStoryPageProps {
  id: string;
}

export default function DevStoryPage({ id }: DevStoryPageProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [notes, setNotes] = useState<iNoteEntry[]>([]);

  const story = DEV_STORIES.find((s) => s.id === id);
  const product = story ? story.title.toLowerCase() : "";

  useEffect(() => {
    if (story) {
      const extractedNotes = story.notes
        .map((noteId) => noteEntries.find((note) => note._id === noteId))
        .filter(Boolean) as iNoteEntry[];

      const sortedNotes = extractedNotes.sort(
        (a, b) => new Date(b.written_at ?? 0).getTime() - new Date(a.written_at ?? 0).getTime()
      );

      setNotes(sortedNotes);
    }
  }, [story]);

  async function joinWaitlist(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const location = selectedLocation || "friends_&_family";

    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, product, discovery_location: location }),
    });

    const res = await response.json();
    if (response.ok) {
      toast.success("Thanks for joining our waitlist");
    } else if (response.status === 409) {
      toast.success("You've joined the waitlist for this product.");
    } else {
      toast.error("An error occurred while attempting to join our waitlist");
    }
    setIsSubmitting(false);
  }

  if (!story) return <div className="w-full text-center py-8">Story not found</div>;

  return (
    <div className="font-poppins flex flex-col gap-4 container px-4 md:px-8 lg:px-16 mx-auto">
      <section className="p-5 rounded-lg bg-black/10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl md:text-5xl font-irishgrover font-bold">{story.title}</h1>
            <p className="text-xs w-fit rounded-full p-1 border border-orange-900 mt-2">{story.tag}</p>
          </div>
          <Link
            href={story.product_url}
            target="_blank"
            className="flex items-center gap-2 text-xs font-bold p-2 orange-gradient"
          >
            Try {story.title}
            <ArrowLongRightIcon className="w-5 h-5 text-orange-500" />
          </Link>
        </div>

        <p className="mt-4 text-lg md:text-xl font-light">{story.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {story.tech_stack.map((comp) => (
            <span
              key={comp.name}
              className="flex items-center gap-2 px-3 py-2 border border-slate-800 rounded-md"
            >
              <Image
                src={comp.icon}
                alt={comp.name}
                width={24}
                height={24}
                className="w-4 md:w-8 h-4 md:h-8 object-contain rounded-full bg-white"
              />
              <span className="text-sm font-inter">{comp.name}</span>
            </span>
          ))}

          <Link
            href={story.open_source_url}
            className="flex items-center gap-2 px-3 py-2 border border-slate-700 rounded-md bg-slate-500/30 hover:bg-black"
          >
            <Image
              src="/assets/icons/github-icon.png"
              alt="GitHub"
              width={24}
              height={24}
              className="w-4 md:w-8 h-4 md:h-8 object-contain rounded-full bg-white"
            />
            <span className="text-sm font-inter">GitHub</span>
          </Link>
        </div>
      </section>

      <form
        onSubmit={joinWaitlist}
        className="flex flex-col items-center gap-4 mt-6"
      >
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-full md:w-3/4 lg:w-1/2 px-4 py-2 border border-orange-500 text-white bg-transparent focus:bg-opacity-30 rounded-full shadow"
        />

        <select
          className="px-4 py-2 text-orange-500  bg-transparent rounded-md"
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="friends_&_family">
            How did you hear about {story.title.toLowerCase()}?
          </option>
          {DISCOVERY_LOCATION.map((location) => (
            <option key={location} value={location} className="text-black">
              {location.replaceAll("_", " ").toUpperCase()}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="orange-gradient-bg text-white font-kanit px-6 py-2 rounded-full transition-all"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </button>
      </form>

      <section className="mt-6 p-4 rounded-xl backdrop-blur-lg bg-white/5 shadow-inner">
        <h2 className="text-2xl text-center font-medium mb-2">
          Join the conversation on <span className="orange-gradient">{story.title}</span>
        </h2>
        <p className="text-center font-inter mb-4">
          DM on <Link href="https://x.com/imoctborn" target="_blank" className="underline">Twitter</Link> or post with
          <Link
            href={`https://x.com/intent/post?text=%23${story.id}%20%23bellzstudio`}
            target="_blank"
            className="orange-gradient underline ml-1"
          >
            #{story.title.toLowerCase()}
          </Link>
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {notes.map((note) => (
            <NoteEntryCard
              key={note._id}
              post={note}
              handleEdit={() => {}}
              handleDelete={() => {}}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {story.validatingTweets.map((tweet: TweetEmbeds) => (
            <TwitterTweetEmbed key={tweet.tweetId} tweetId={tweet.tweetId} />
          ))}
        </div>
      </section>
    </div>
  );
}
