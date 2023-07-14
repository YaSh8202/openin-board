"use client";

import React from "react";
import { AppleIcon, GoogleIcon } from "./Icons";
import { signIn } from "next-auth/react";

function OAuthButtons() {
  return (
    <div className=" self-stretch flex items-center gap-6">
      <button
        onClick={() => signIn("google")}
        className="bg-white flex items-center text-secondary gap-2.5 text-sm px-5 py-2 rounded-[10px] transition-all hover:shadow-lg hover:-translate-y-1 duration-200"
      >
        <GoogleIcon />
        <span>Sign in with Google</span>
      </button>
      <button className="bg-white flex items-center text-secondary gap-2.5  px-5 py-2 rounded-[10px] transition-all hover:shadow-lg hover:-translate-y-1 duration-200">
        <AppleIcon className="text-lg" />
        <span className="text-sm">Sign in with Apple</span>
      </button>
    </div>
  );
}

export default OAuthButtons;
