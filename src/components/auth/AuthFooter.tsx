/** @format */

import Link from "next/link";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io";

type FooterItem = {
  title: string;
  href: string;
};

const AuthFooter: React.FC = () => {
  const footerItems: FooterItem[] = [
    { title: "User Agreement", href: "/user-agreement" },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Community Guidelines", href: "/community-guidelines" },
    { title: "Cookie Policy", href: "/cookie-policy" },
    { title: "Copyright Policy", href: "/copyright-policy" },
    { title: "Send Feedback", href: "/send-feedback" },
  ];

  return (
    <footer className='flex flex-wrap  justify-center items-center gap-2'>
      <h2 className='flex items-center text-lg text-[#0A66C2] '>
        Linked <IoLogoLinkedin className='text-2xl' />
      </h2>
      <p className='text-xs text-gray-600'>© 2025</p>
      <nav className='flex flex-wrap gap-3'>
        {footerItems.map((item, index) => (
          <Link
            className='text-xs text-gray-600 hover:underline'
            key={index}
            href={item.href}>
            {item.title}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default AuthFooter;
