/** @format */

import React from "react";

interface AuthInputProps {
  type: string;
  placeholder: string;
  register: any;
  error?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <div>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className='border p-3 rounded-md w-full'
      />
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
};

export default AuthInput;
