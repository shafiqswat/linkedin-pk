/** @format */

"use client";
import Link from "next/link";
import React from "react";
import AuthButton from "./AuthButton";
import { useForm } from "react-hook-form";
import {
  formSchemaLogin,
  FormSchemaLogin,
  formSchemaSignUp,
  FormSchemaSignUp,
  InputFieldType,
} from "@/types/formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthInput from "./AuthInput";
import { useAuth } from "@/context/AuthContext";

interface AuthContainerProps {
  inputFields: InputFieldType[];
  heading: string;
  signup?: boolean;
}

const AuthContainer: React.FC<AuthContainerProps> = ({
  inputFields,
  heading,
  signup,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaLogin | FormSchemaSignUp>({
    resolver: zodResolver(signup ? formSchemaSignUp : formSchemaLogin),
  });
  const { signUp, signIn } = useAuth()!;
  const onSubmit = (data: FormSchemaLogin | FormSchemaSignUp) => {
    if (signup) {
      signUp(data as FormSchemaSignUp);
    } else {
      signIn({ ...data } as FormSchemaSignUp);
    }
  };
  return (
    <div className='md:w-[30%] sm:w-[60%] mx-auto rounded-lg shadow shadow-gray-400 px-5 py-3'>
      <h1 className='text-3xl font-medium my-5'>{heading}</h1>
      <form
        className='flex flex-col gap-3'
        onSubmit={handleSubmit(onSubmit)}>
        {inputFields.map((item) => (
          <AuthInput
            key={item.name}
            type={item.type}
            placeholder={item.placeholder}
            register={register(
              item.name as keyof (FormSchemaLogin | FormSchemaSignUp)
            )}
            error={
              (errors as Record<string, { message?: string }>)[item.name]
                ?.message
            }
          />
        ))}
        {signup ? (
          <p className='text-center text-sm text-gray-600'>
            By clicking Agree & Join or Continue, you agree to the LinkedIn User
            Agreement, Privacy Policy, and Cookie Policy.
          </p>
        ) : (
          <Link
            href='/'
            className='text-[#0A66C2] hover:underline hover:bg-[#D0E8FF] transition-all duration-200 rounded-full w-fit p-0.5'>
            Forgot Password?
          </Link>
        )}

        <AuthButton />
      </form>
    </div>
  );
};

export default AuthContainer;
