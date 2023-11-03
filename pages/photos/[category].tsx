import React from "react";

const PhotosByUserId = ({ photos, category }: any) => {
  return (
    <div>
      <h1>
        Showing the result for USERID <i>{category}</i>
      </h1>
      <br />
      {photos.map((photo: any) => {
        return (
          <>
            <b>{photo.userId} </b>
            <i>{photo.title}</i>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default PhotosByUserId;

export async function getServerSideProps(context: any) {
  const { params, req, res, query } = context; //req contains the HTTP IncomingMessage object
  const { category } = params; // res The HTTP response object query object representing the query string if you have multiple query in url then you can use the query object
  // console.log(req.headers.cookie)
  //   res.setHeader("Set-Cookie", ["name=Ashwani"]);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${category}`
  );
  const data = await response.json();

  return {
    props: {
      photos: data,
      category: category,
    },
  };
}
