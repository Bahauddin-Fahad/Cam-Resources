import React from "react";
import { StarIcon } from "@heroicons/react/solid";
const Review = ({ review }) => {
  const { reviewerImg, reviewerName, description, ratings } = review;
  return (
    <div className=" flex flex-col justify-between border-2 py-6 px-10 h-full shadow-lg rounded-2xl ">
      <div className="">
        <img
          className="mx-auto w-24 h-24 border-2 border-teal-500 rounded-full"
          src={reviewerImg}
          alt=""
        />
        <h1 className="text-2xl font-bold font-mono mt-4 mb-4">
          {reviewerName}
        </h1>
      </div>
      <div>
        <p className=" font-medium text-justify mb-4">{description}</p>

        <p className="font-bold flex items-center">
          Ratings : {ratings}
          <StarIcon className="w-5 h-5 ml-1  text-amber-500" />
        </p>
      </div>
    </div>
  );
};

export default Review;
