export default function Handler(req: any, res: any) {
  return res.status(200).json({ name: "Blog API Route" });
}
