import React from "react";
import { BellIcon, SearchIcon } from "../Icons";
import Image from "next/image";
import { getServerSession } from "next-auth";

async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="flex flex-row items-center justify-between mt-2">
      <h1 className="font-bold text-2xl">Dashboard</h1>
      <div className="flex items-center ">
        <label
          className="w-[180px] flex items-center bg-white justify-between px-2 py-[6px] border rounded-xl mr-5  "
          htmlFor="search "
        >
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="px-2 w-[85%] outline-none placeholder:text-secondary "
          />
          <SearchIcon className="text-secondary w-4 h-4" />
        </label>
        <BellIcon className="text-black text-lg mr-[30px]" />
        <Image
          width={32}
          height={32}
          className="inline-block h-8 w-8 rounded-full"
          src={session?.user?.image as string}
          alt="Image Description"
        />
      </div>
    </nav>
  );
}

export default Navbar;
