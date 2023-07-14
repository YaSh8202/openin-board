"use client";

import React from "react";
import { Lato } from "next/font/google";
import Link from "next/link";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

function SignInForm() {
  return (
    <form
      onClick={(e) => e.preventDefault()}
      className={`${lato.className} p-[30px] flex flex-col bg-white rounded-[20px]`}
    >
      <div className="flex flex-col mb-7">
        <label htmlFor="email" className="pb-2">
          Email address
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          className="bg-[#F5F5F5] rounded-lg px-4 py-2"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="pb-2">
          Password
        </label>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          className="bg-[#F5F5F5] rounded-lg px-4 py-2"
        />
      </div>
      <Link className="text-link my-5" href="#">
        Forgot password?
      </Link>
      <button className="bg-black hover:scale-[1.02] text-white rounded-[10px] py-2 transition-transform duration-150 focus:scale-[0.98] ">
        Sign In
      </button>
    </form>
  );
}

export default SignInForm;
