/** @format */

import Link from "next/link";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io";

const AuthHeader: React.FC = () => {
  return (
    <nav className='md-mx-12 mx-5'>
      <Link
        href='/'
        className='flex w-fit items-center text-[#0A66C2] font-bold text-2xl'>
        Linked <IoLogoLinkedin className='text-4xl' />
      </Link>
    </nav>
  );
};

export default AuthHeader;
