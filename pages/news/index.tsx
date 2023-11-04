function News({ data }: any) {
  return <h1 className="content">{data}</h1>;
}

export default News;

export async function getStaticProps(context: any) {
  console.log("Running getStaticProps", context.previewData);
  return {
    props: {
      data: context.preview
        ? "List of draft articles"
        : "List of published articles",
    },
  };
}
