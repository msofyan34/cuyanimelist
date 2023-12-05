"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;

    router.push(`/search/${keyword}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="relative">
        <input
          type="text"
          placeholder="Cari anime..."
          className="w-full p-2 rounded"
          ref={searchRef}
        />
        <button type="submit" className="absolute top-2 end-2">
          <MagnifyingGlass size={24} />
        </button>
      </div>
    </form>
  );
};

export default InputSearch;
