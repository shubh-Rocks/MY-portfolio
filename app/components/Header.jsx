"use client";
import React from "react";
import Image from "next/image";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="">
      <header className="flex justify-between px-3 pt-3 w-full max-w-screen-lg mx-auto">
        <Image
        className="md:w-15 w-10"  
          src="/images/logo.png"
          alt="Logo"
          width={50}
          height={50}
          priority
        />

        <Profile />
      </header>
    </div>
  );
};

export default Header;
