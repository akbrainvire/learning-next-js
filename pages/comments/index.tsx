import React, { useState } from "react";

const CommentsPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();

    setData(data);
  };

  const sumbitCommentHandler = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment: comment }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  };

  const deleteComment = async (commentId: any) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <div>
      <input
        type="text"
        name="comment"
        id="comment"
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={sumbitCommentHandler}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>

      {data.map((comment) => {
        return (
          <div key={comment.id}>
            <h2>{comment.name}</h2>
            <h3>{comment.email}</h3>
            <p>{comment.body}</p>
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default CommentsPage;
