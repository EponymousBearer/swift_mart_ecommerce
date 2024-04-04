"use client";
import { useAuth } from "@clerk/nextjs";
import { SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";

const SignInOrOutButton = () => {
  const { isSignedIn, userId } = useAuth();
  
  return (
    <div className="">
      {!isSignedIn && (
        <SignInButton mode="modal">
          <button className="bg-black rounded-md text-white px-6 py-2">Sign In</button>
        </SignInButton>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default SignInOrOutButton;
