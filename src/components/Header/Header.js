import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div
        onClick={() => setOpen(!open)}
        className=" md:hidden bg-teal-400 p-6 mb-3"
      >
        {open ? (
          <XIcon className="w-8 h-8 text-white" />
        ) : (
          <MenuIcon className="w-8 h-8 text-white" />
        )}
      </div>
      <div
        className={`navbar bg-teal-400 p-8 mb-8 z-30 md:flex justify-center absolute md:static duration-500 ease-in ${
          open ? " top-16 rounded-md flex flex-col " : "top-[-280px]"
        }`}
      >
        <CustomLink to="/"> Home</CustomLink>
        <CustomLink to="/reviews">Reviews</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </div>
    </nav>
  );
};

export default Header;
