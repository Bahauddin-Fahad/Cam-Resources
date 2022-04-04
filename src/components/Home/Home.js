import React from "react";
import NikonD780 from "../Assets/NikonD780.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto justify-evenly items-center">
      <div className="ml-8">
        <h1 className=" col text-5xl font-bold mb-6 text-left text-teal-600">
          Select Your Best Camera
        </h1>
        <p className="text-xl font-semibold text-left w-11/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis
          magnam voluptas! Vel ex illum nesciunt quo repellat similique qui
          perferendis recusandae blanditiis nisi quam id eveniet fugiat, sed
          iusto.
        </p>
      </div>
      <div>
        <img className=" w-3/4 mx-auto" src={NikonD780} alt="" />
      </div>
    </div>
  );
};

export default Home;
