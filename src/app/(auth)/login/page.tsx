/** @format */

import AuthContainer from "@/components/auth/AuthContainer";
import AuthFooter from "@/components/auth/AuthFooter";
import AuthHeader from "@/components/auth/AuthHeader";
import { InputFieldType } from "@/types/formTypes";
import Link from "next/link";
import React from "react";
// import { IoLogoLinkedin } from "react-icons/io";

const Login: React.FC = () => {
  const inputFields: InputFieldType[] = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  return (
    <div className='min-h-screen flex flex-col justify-between p-5'>
      <AuthHeader />
      <section>
        <AuthContainer
          inputFields={inputFields}
          heading='Sign in'
        />
        <div className='flex items-center justify-center gap-2 mt-10'>
          <p>New to LinkedIn?</p>
          <Link
            href='/signup'
            className='text-[#0A66C2] text-lg p-0.5 rounded-full hover:underline hover:bg-[#D0E8FF] transition-all duration-200'>
            Join now
          </Link>
        </div>
      </section>
      <AuthFooter />
    </div>
  );
};

export default Login;
