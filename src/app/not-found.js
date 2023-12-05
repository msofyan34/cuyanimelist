"use client";

import { FileSearch } from "@phosphor-icons/react";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <FileSearch size={44} className="text-color-accent" />
        <h3 className="text-color-accent text-4xl font-bold">
          404 | NOT FOUND!
        </h3>
      </div>
    </div>
  );
};

export default Page;
