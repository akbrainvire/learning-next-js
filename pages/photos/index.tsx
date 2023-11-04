//Example of SERVER SIDE RENDERING

//In server side rendering the page will not get created in the build even after by request .
import Image from "next/image";
import React from "react";

const Photos = ({ photos }: any) => {
  return (
    <div>
      {photos.map((photo: any) => {
        return (
          <>
            {/* <b>{photo.userId} </b> */}
            <i>{photo.title}</i>
            <img
              src={`${photo.url}.jpg`}
              alt="photos"
              width="600"
              height="600"
            />
            {/* <Image                 //This will improve performance and lazy loading also convert the image to more optimized way
              src={`${photo.url}.jpg`} // for showing blur image untill the photo is loaded we can use placeholder attribute to blur and place the
              alt="photos"             // also we have to use the import img from folder to get this functionality we cannot use dynamic src in image tag
              width="600"               //This avoids layout shift  // and if you want to work with dynamic image then use blueDataURL prop.
              // placeholder="blur"
              height="600"
            /> */}
            <br />
          </>
        );
      })}
    </div>
  );
};

export default Photos;

export async function getServerSideProps() {
  //IMPORTANT POINT TO NOTE : the use of this form of pre-rendering are slower than the Static Generation as the server must compute
  // the result on every request because of this slower performance use server-side-rendering only if absolutely necessary

  /*  getServerSideProps run only on the server side  
      The function will never run Client Side
      The code you write inside getServerSideProps won't even be included in the JS bundle that is sent to the browser

      You can write server-side code directly into the getServerSideProps 
      Accessing the file system using the fs module or quering a database can be done inside the getServerSideProps
      You also don't have to worry about including API keys in getServerSideProps as that won't make it to the browser.

      getServerSideProps is allowed only in a page and cannot be run from a regular component file.
      It is used for pre-rendering and not client side data fetching 

      getServerSideProps should return an object and object should contain a props key that is also an object*

      getServerSideProps will run at request time 
  */

  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

  return {
    props: {
      photos: data.slice(0, 50),
    },
  };
}
