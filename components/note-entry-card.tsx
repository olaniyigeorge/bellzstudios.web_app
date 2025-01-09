"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

interface User {
  _id: string;
  username: string;
  email: string;
  image: string;
}
export interface iNoteEntry {
  _id: string;
  author: User;
  body: string;
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
  handleTagClick?: (tag: string) => void; // Optional callback
}

const NoteEntryCard = (props: NoteEntryCardProps) => {
  const { post, handleEdit, handleDelete, handleTagClick } = props;
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState<string | null>(null);

  const handleProfileClick = () => {
    if (post.author._id === session?.user?.id) return router.push("/profile");

    router.push(`/profile/${post.author._id}?name=${post.author.username}`);
  };

  const handleCopy = () => {
    setCopied(post.body);
    navigator.clipboard.writeText(post.body);
    setTimeout(() => setCopied(null), 3000);
  };

  const timeAgo = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };

  return (
    <div className="orange-gradient-bg  rounded-lg p-3">
      <div className="flex justify-between items-start gap-5">
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleProfileClick}
        >
          <Image
            src={post.author.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-black">
              {post.title}
            </h3>
            <p className="font-satochi text-xs text-gray-700">
              Posted {timeAgo(post.written_at)}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.body
                ? "/assets/icons/share.svg"
                : "/assets/icons/shared.svg"
            }
            alt={copied === post.body ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-irishgrover text-lg md:text-xl text-black font-medium">{post.body}</p>

      <span className="flex items-wrap gap-1"> 
        {post.tags.map((tag) => (
        <p
          className="font-inter text-xs text-slate-700 cursor-pointer"
          onClick={() => handleTagClick && handleTagClick(tag)}
        >
          #{tag}
        </p>
      ))}
      </span>
      
     

      {session?.user?.id === post.author._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default NoteEntryCard;
