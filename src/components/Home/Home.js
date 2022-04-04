import React from "react";
import NikonD780 from "../Assets/NikonD780.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 max-w-7xl mx-auto justify-evenly items-center">
      <div className="ml-8 flex flex-col items-center lg:items-start sm:items-center md:items-center">
        <h1 className=" col text-5xl font-bold mb-6 text-left text-teal-600">
          Select Your Best Camera
        </h1>
        <p className="text-xl font-semibold text-left w-11/12 mb-6">
          The D780 boasts a 24.5MP backside illuminated FX full frame sensor,
          capable of remarkable light gathering for highly detailed photos and
          videos with ultra shallow depth of field and sharp, clean low light
          shots. Welcome to the brilliance of full frame.
        </p>
        <button className=" bg-teal-600 py-2 mb-10 sm:mb-10 rounded-md text-white text-xl font-semibold w-36">
          Live Demo
        </button>
      </div>
      <div>
        <img className=" w-3/4 mx-auto" src={NikonD780} alt="" />
      </div>
    </div>
  );
};

export default Home;
