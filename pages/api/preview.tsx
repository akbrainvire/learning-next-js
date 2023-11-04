export default function handler(req: any, res: any) {
  res.setPreviewData({
    // When we use preview mode the getStaticProps will rebuilt every time we refresh instead of only just one time that is at build
    user: "Ak", // used with CMS
  });
  res.redirect(req.query.redirect);
}
