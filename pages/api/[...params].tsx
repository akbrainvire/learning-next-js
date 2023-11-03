//when we save the file with double square brackets then we don't need the api folder's index.js we can manage the '/api/' route too in the
// this file.

export default function handler(req: any, res: any) {
  const params = req.query.params;

  console.log(params);

  res.status(200).json(params);
}
