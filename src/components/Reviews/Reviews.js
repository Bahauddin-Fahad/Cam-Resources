import React from "react";
import UseReviewData from "../../Hooks/UseReviewData";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = UseReviewData();
  return (
    <div>
      <h2 className=" text-4xl font-bold">Customer Reviews</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 m-6">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};
<h2>Reviews</h2>;
export default Reviews;
