/** @format */
"use client";
import { AuthProvider } from "@/context/AuthContext";
import React, { ReactNode } from "react";
import Header from "../universal-components/Header";
import { usePathname } from "next/navigation";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  const hideHeader = ["/login", "/signup"].some((path) =>
    pathname.includes(path)
  );

  return (
    <div>
      {!hideHeader && <Header />}
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};

export default Layout;
