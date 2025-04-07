/** @format */

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";

const SearchINput: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='flex items-center gap-2'>
      <Link
        href='/'
        className='flex w-fit items-center text-[#0A66C2] font-bold text-2xl'>
        <IoLogoLinkedin className='text-[2.8rem]' />
      </Link>

      {/* Input wrapper to avoid shifting layout */}
      <div className='relative w-96'>
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoFocus={false}
          type='text'
          className={`bg-gray-200 border-none rounded-sm ps-10 h-8 placeholder:text-sm focus:outline-2 transition-all duration-500 ease-in-out ${
            isFocused ? "w-96" : "w-72"
          }`}
          placeholder='Search'
        />
        <BiSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 z-10' />
      </div>
    </div>
  );
};

export default SearchINput;
