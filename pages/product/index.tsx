// To create the link in the next js we can use the Link tag in the 'next/link' and provide the href attribute where we want to go
// if you are thinking that why we should not use just <a> tag just like in the html so the reason is that when we use the <a> tag then
// the content of the page is rendered again that is all the js file and every module like for css and many more so we use Link tag
// to prevent this and it will only render the component for us without downloading again and again of the modules

//Example of Dynamically Nested Routes
import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <>
      <Link href="/product/1">Product 1</Link>
      <Link href="/product/2">Product 2</Link>
      <Link href="/product/3">Product 3</Link>
    </>
  );
};

export default Product;
