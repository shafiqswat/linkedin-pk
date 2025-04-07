/** @format */

import AuthContainer from "@/components/auth/AuthContainer";
import AuthFooter from "@/components/auth/AuthFooter";
import AuthHeader from "@/components/auth/AuthHeader";
import { InputFieldType } from "@/types/formTypes";
import Link from "next/link";
import React from "react";

const SignUp: React.FC = () => {
  const inputFields: InputFieldType[] = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "userName", type: "text", placeholder: "Username" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  return (
    <div className='min-h-screen flex flex-col justify-between p-5'>
      <AuthHeader />
      <section>
        <AuthContainer
          inputFields={inputFields}
          heading='Sign up'
          signup={true}
        />
      </section>
      <div className='flex items-center justify-center gap-2 mt-10'>
        <p>Already on LinkedIn?</p>
        <Link
          href='/login'
          className='text-[#0A66C2] text-lg p-0.5 rounded-full hover:underline hover:bg-[#D0E8FF] transition-all duration-200'>
          Sign in
        </Link>
      </div>
      <AuthFooter />
    </div>
  );
};

export default SignUp;
