import { useRouter } from "next/router";
import React, { useState } from "react";

const ProductsStore = ({ products }: any) => {
  const router = useRouter();
  const [productsData, setProductsData] = useState(products);

  const onClickHandler = async () => {
    const response = await fetch(
      // question: why you don't filter the productsData array and shows the result to the client side?
      // you see when we are fetching the data in the getServerSideProps we may be just want to first render
      //the only 100 first data and if we apply filter on that to get this filter then we might not have the other data thing as we are only filtering in the first 100 data that we render
      // so that's the reason why we are fetching here instead of filtering.
      `https://jsonplaceholder.typicode.com/todos?completed=true`
    );
    const data = await response.json();
    setProductsData(data);
    router.push(`/store-products?completed=true`, undefined, {
      shallow: true, //Shallow routing you see when we click on the button the content is changed according to
      // the clickhandler but you see the url is not change to do that while doing client site rendering we use the shallow routing.
      // this also helps us to do SEO.

      //You see we have other option to do this like we can create the dynamic route folder and then can get the query parameter with
      //the help of useRouter and can manage with that but that thing is not feasable when we have multiple filters.
    });
  };
  return (
    <div>
      <button onClick={onClickHandler}>Show Only true</button>
      <div>
        {productsData.map((product: any, index: number) => {
          return (
            <div key={product.id}>
              <i>{index + 1} </i>
              <b>{product.title} </b>
              <i>{product.completed ? "true" : "false"}</i>
              <hr />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsStore;

export async function getServerSideProps(context: any) {
  const { query, params } = context;
  const { completed } = query;
  const queryString = completed ? "completed=true" : "";
  //   console.log(query);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?${queryString}`
  );
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
