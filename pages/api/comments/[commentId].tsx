import { comments } from "@/data/comments";

export default function handler(req: any, res: any) {
  const { commentId } = req.query;

  if (req.method === "GET") {
    let comment = comments.find(
      (comment: any) => comment.id === parseInt(commentId)
    );

    res.status(200).json({ comment });
  } else if (req.method === "DELETE") {
    let deletedComment = comments.find(
      (comment: any) => comment.id === parseInt(commentId)
    );

    const index = comments.findIndex(
      (comment: any) => comment.id === parseInt(commentId)
    );

    comments.splice(index, 1);
    // console.log(index);

    res.status(200).json({ deletedComment });
  }
}
