"use client";

import { useState, useEffect } from "react";

import NoteEntryCard, { iNoteEntry } from "./note-entry-card";

interface NoteEntryCardListProps {
    data: iNoteEntry[];
    handleTagClick: (tag: string) => void;
  }

const NoteEntryCardList = (props: NoteEntryCardListProps) => {
    const {data, handleTagClick} = props
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((entry: iNoteEntry) => (
        <NoteEntryCard
          key={entry._id}
          post={entry}
          handleTagClick={handleTagClick}
          handleEdit={() => console.log("Edit", entry._id)} // Replace with actual edit logic
          handleDelete={() => console.log("Delete", entry._id)} // Replace with actual delete logic
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null); // const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState<iNoteEntry[]>([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/notes/");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext: string): iNoteEntry[] => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item: iNoteEntry) =>
        regex.test(item.author.username) ||
        regex.test(item.tags[0]) ||
        regex.test(item.body)
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchTimeout) clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
        setTimeout(() => {
          const searchResult = filterPrompts(e.target.value);
          setSearchedResults(searchResult);
        }, 500)
      );
    };  
    
  const handleTagClick = (tagName: string) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <NoteEntryCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <NoteEntryCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
