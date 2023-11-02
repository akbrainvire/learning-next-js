// We created the [productId] folder to create the nested Dynamic route and the index.tsx represent the root of the route
// '/product/any-id' and if we want to more dynamic route inside this id like 'product/id/review/review-number' then we have to perform
//the same procedure like we have to create the review folder then inside that we create [reviewNumber] folder and then we can perform
//the task and we can get the value of the ID or Number from the url with the help of useRouter like used in this file

import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h2>Details about the Product {router.query.productId}</h2>
    </div>
  );
};

export default ProductDetails;
