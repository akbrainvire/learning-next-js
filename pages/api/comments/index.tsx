//access at /api/comments
import { comments } from "@/data/comments";

export default function handler(req: any, res: any) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const index = comment.indexOf(" ");
    const newComment = {
      id: Date.now(),
      name: comment.slice(0, index),
      body: comment,
    };
    comments.push(newComment);
    res.status(201).json({ newComment });
  }
}
