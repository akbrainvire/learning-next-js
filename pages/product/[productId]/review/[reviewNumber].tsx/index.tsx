import { useRouter } from "next/router";
import React from "react";

const Review = () => {
  const router = useRouter();

  const reviewNumber = router.query.reviewNumber;
  const productId = router.query.productId;

  return (
    <div>
      Product ID {productId} Review Number {reviewNumber}
    </div>
  );
};

export default Review;
