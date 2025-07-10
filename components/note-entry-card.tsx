"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export interface User {
  _id: string;
  username: string;
  email: string;
  image: string;
}

export interface iNoteEntry {
  _id: string;
  author: User;
  body: string;
  image?: string;
  title?: string;
  tags: string[];
  privacy_level: "public" | "private" | "restricted";
  description?: string;
  written_at: Date;
  updated_at?: Date;
}

interface NoteEntryCardProps {
  post: iNoteEntry;
  handleEdit: () => void;
  handleDelete: () => void;
  handleTagClick?: (tag: string) => void;
}

const NoteEntryCard = ({
  post,
  handleEdit,
  handleDelete,
  handleTagClick
}: NoteEntryCardProps) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState<string | null>(null);

  const handleProfileClick = () => {
    const isCurrentUser = post.author._id === session?.user?.id;
    router.push(isCurrentUser ? "/profile" : `/profile/${post.author._id}?name=${post.author.username}`);
  };

  const handleCopy = async () => {
    setCopied(post.body);
    await navigator.clipboard.writeText(post.body);
    setTimeout(() => setCopied(null), 3000);
  };

  const timeAgo = (date: Date) => {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
    return `${Math.floor(seconds / 86400)} days ago`;
  };

  return (
    <div className="tbbstd_orange-gradient-bg w-full rounded-lg p-3 h-full">
      {/* Top Section: Author Info + Copy */}
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex gap-3 items-start cursor-pointer" onClick={handleProfileClick}>
          <Image
            src={post.author?.image || "/assets/icons/default-user.png"}
            alt={`${post.author?.username || "User"}'s profile picture`}
            width={40}
            height={40}
            unoptimized
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              <Link href={`/notes/${post._id}`} className="hover:underline">
                {post.title || "Untitled"}
              </Link>
            </h3>
            <p className="text-xs text-gray-500">
              Posted {timeAgo(post.written_at)}
            </p>
          </div>
        </div>

        <div className="copy_btn cursor-pointer" onClick={handleCopy}>
          <Image
            src={copied === post.body ? "/assets/icons/shared.svg" : "/assets/icons/share.svg"}
            alt={copied === post.body ? "copied" : "copy to clipboard"}
            width={12}
            height={12}
            unoptimized
          />
        </div>
      </div>

      {/* Thumbnail */}
      {!pathname.startsWith("/dev-stories") && (
        <Image
          src={post.image || "/assets/images/note_thumb.png"}
          alt={`Thumbnail for ${post.title || "note"}`}
          width={400}
          height={200}
          unoptimized
          className="rounded-md my-2 w-full max-h-[200px] object-cover"
        />
      )}

      {/* Body Text */}
      <p className="my-4 font-kanit text-lg md:text-xl text-orange-200 font-light line-clamp-4">
        {post.body}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <p
            key={tag}
            className="font-inter text-xs text-slate-700 cursor-pointer hover:underline"
            onClick={() => handleTagClick?.(tag)}
          >
            #{tag}
          </p>
        ))}
      </div>

      {/* Edit/Delete Actions (only for profile owner on profile page) */}
      {session?.user?.id === post.author._id && pathname === "/profile" && (
        <div className="mt-4 flex gap-4 border-t border-gray-100 pt-3">
          <p className="text-sm green_gradient cursor-pointer" onClick={handleEdit}>
            Edit
          </p>
          <p className="text-sm orange_gradient cursor-pointer" onClick={handleDelete}>
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default NoteEntryCard;
