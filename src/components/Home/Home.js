import React from "react";
import { useNavigate } from "react-router-dom";
import UseReviewData from "../../Hooks/UseReviewData";
import NikonD780 from "../Assets/NikonD780.jpg";
import Review from "../Review/Review";
import "./Home.css";
const Home = () => {
  const [reviews] = UseReviewData();
  const navigate = useNavigate();
  return (
    <div>
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
          <button
            onClick={() => navigate("/about")}
            className=" bg-teal-600 py-2 mb-10 sm:mb-10 rounded-md text-white text-xl font-semibold w-36"
          >
            Full Specs
          </button>
        </div>
        <div>
          <img className=" w-3/4 mx-auto" src={NikonD780} alt="" />
        </div>
      </div>
      <div className=" mt-14">
        <h1 className=" text-5xl font-bold">Customer Reviews (3)</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 m-6">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <button
          onClick={() => navigate("/reviews")}
          className=" bg-teal-600 py-2 mb-10 sm:mb-10 rounded-md text-white text-xl font-semibold w-40"
        >
          More Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
