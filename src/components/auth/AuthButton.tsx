/** @format */

import React from "react";

const AuthButton: React.FC = () => {
  return (
    <button
      className='bg-[#0A66C2] text-white rounded-full p-3  text-[18px] hover:bg-[#004182] transition-all duration-200 cursor-pointer'
      type='submit'>
      Sign in
    </button>
  );
};

export default AuthButton;
