/** @format */
"use client";
import React from "react";
import SearchINput from "../search/SearchINput";
import { AiFillHome } from "react-icons/ai";
import {
  BsBellFill,
  BsBriefcaseFill,
  BsChatDotsFill,
  BsGrid3X3GapFill,
  BsPeopleFill,
  BsSquareFill,
} from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header: React.FC = () => {
  const NavigationMenu = [
    { icon: <AiFillHome />, text: "Home" },
    { icon: <BsPeopleFill />, text: "My Network" },
    { icon: <BsBriefcaseFill />, text: "Jobs" },
    { icon: <BsChatDotsFill />, text: "Messaging" },
    { icon: <BsBellFill />, text: "Notifications" },
    { icon: <FaUserCircle />, text: "Me" },
    { icon: <BsGrid3X3GapFill />, text: "For Business" },
    {
      icon: <BsSquareFill className='text-yellow-600' />,
      text: "Try Premium",
    },
  ];

  return (
    <div className='bg-white shadow-xl border-b border-gray-200'>
      <nav className='w-[85%] mx-auto  flex items-center gap-10'>
        <SearchINput />
        <div className='flex gap-6'>
          {NavigationMenu.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-gray-700 hover:text-black cursor-pointer py-2 ${
                item.text === "Me" && "border-r pe-6 border-gray-300"
              }`}>
              <div className='text-2xl'>{item.icon}</div>
              <p className='text-[11px] leading-3 mt-1'>
                {item.text}{" "}
                <span className='inline-flex '>
                  {(item.text === "Me" || item.text === "For Business") && (
                    <IoIosArrowDown />
                  )}
                </span>
              </p>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
