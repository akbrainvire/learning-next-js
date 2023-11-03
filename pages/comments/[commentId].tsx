//Pre-rendering the single comment

import { comments } from "@/data/comments";
import React from "react";

const SingleComment = ({ comment }: any) => {
  return (
    <div>
      {comment.id} {comment.body}
    </div>
  );
};

export default SingleComment;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { commentId: "1" },
      },
      {
        params: { commentId: "2" },
      },
      {
        params: { commentId: "3" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { commentId } = params;

  const comment = comments.find(
    (comment: any) => comment.id === parseInt(commentId)
  );
  //   console.log(comment);

  /*Don't Do this
    const response = await fetch(`/api/comments/${commentId}`)
    const data = response.json();                     //Calling your own api routes are not recommended , you can call the external api
                                                //Calling it via  a url introduces an additional round trip which is just not neccessary
                                    //IMPORTANT POINT: You should not call an Api route in prerendering
    */

  return {
    props: {
      comment: comment,
    },
  };
}
