import Link from "next/link";
import React from "react";

const MainSection = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-extrabold text-black">Mission Game</h1>
      <button className="rounded-md bg-blue-400 px-5 py-2 hover:cursor-pointer hover:bg-blue-400/90">
        <Link href={"/quiz/1"}> Start Game</Link>
      </button>
    </div>
  );
};

export default MainSection;
