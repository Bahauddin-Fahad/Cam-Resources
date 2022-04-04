import React from "react";
// import { CustomLink } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  return (
    <div className="navbar bg-teal-400 p-8 mb-8">
      <CustomLink to="/"> Home</CustomLink>
      <CustomLink to="/reviews">Reviews</CustomLink>
      <CustomLink to="/dashboard">Dashboard</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </div>
  );
};

export default Header;
