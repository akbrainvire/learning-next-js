import { useRouter } from "next/router";
import React from "react";

const PostDetails = ({ post }: any) => {
  //   const router = useRouter();

  //   if (router.isFallback) {
  //     return <h1>Loading...</h1>; //This will set the fallback ui and untill the data is come it shows the ui
  //   } //and when data has come it sets it in the build file and set it to statically rendered so that
  //   //next time it won't load that data it just take the data from the build file in the server->pages->html and json file
  //   //used when getStaticPaths fallback is true
  return (
    <>
      <h2>
        {post.name} {post.title}
      </h2>
      <br />
      <p>{post.body}</p>
    </>
  );
};

export default PostDetails;

//WE use getStaticPaths because we want to inform the next js that how much post/postId values must be statically generated
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  //   const paths = data.map((post: any) => {
  //     return {
  //       params: { postId: `${post.id}` },
  //     };
  //   });
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],

    // paths: paths,
    fallback: "blocking" /*
        1. The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps.
        2. The paths that have not been generated at build time will not result in a 404 page. Instead, on the first request, Next.js will render the page on the server and return the generated HTML.
        3. When that's done, the browser receives the HTML for the generated path. From the user's perspective, it will transition from "the browser is requesting the page" to "the full page is loaded". There is no flash of loading/fallback state.
        4.. At the same time, Next.js keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.

        When?
        On a UX level, sometimes, people prefer the page to be loaded without a loading indicator if the wait time is a few milli seconds. This helps avoid the layout shift.
        Some crawlers did not support JavaScript. The loading page would be rendered and then the full page would be loaded which was causing a problem.
     */,

    //     fallback: true /*  true  {{{Recommended way by next js unless you benefits something from other values}}}
    // 	1. The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps.
    // 	2. The paths that have not been generated at build time will not result in a 404 page. Instead, Next.js will serve a "fallback" version of the page on the first
    // 	request to such path.
    // 	3. In the background , Next.js will statically generate the requested path HTML and JSON. This includes running getStaticProps.
    // 	4. When that's done , the browser recieves the JSON for the generated path. This will be used to automatically render the page with the require props. From the user's perspective
    // 	 , the page will be swapped from the fallback page to the full page.
    // 	5. At the same time , Next.js keeps track of the new list of prerendered pages. Subsequent requests to the same path will serve the generated page, just like other pages
    // 	pre-rendered at build time.
    // When?
    // 1. The true value is most suitable if your app has a very large number of static pages that depend on data.
    // 2. A large e-commerce site.
    // 3. You want all the product pages to be pre-rendered but if you have a few thousand products, builds can take a really long time.
    // 4. You may statically generate a small subset of products that are popular and use fallback: true for the rest. When someone requests a page that's not generated yet, the user will see the page with a loading indicator.
    // 5. Shortly after, getStatic Props finishes and the page will be rendered with the requested data. From then onwards, everyone who requests the same page will get the statically pre-rendered page
    // 6. This ensures that users always have a fast experience while preserving fast builds and the benefits of Static Generation
    //   */,

    //     fallback: false,     /*1. The paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps.
    // 	2. If fallback is set to false, then any paths not returned by getStaticPaths will result in a 404 page
    // When:
    // The false value is most suitable if you have an application with a small number of paths to pre-render.
    // When new pages are not added often.
    // A blog site with a few articles is a good examples for fallback set to false.
    // */
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true, //if the data id is not there then we want to show 404 error this will make it.
    };
  }

  return {
    props: {
      post: data,
    },
    revalidate: 10, // we are asking next js to revalidate this post list page every 10 seconds this will ensure the updated posts
    // this will ensure the updated posts data is served almost immediately without having to rebuild the entire app
    // this is called INCREMENT STATIC REGENERATION (STALE WHILE REVALIDATE)

    // Important Point to be note on RE-generation:
    // A re-generation is initiated only if a user makes a request after the revalidate time
    // If a user visits out product details page but there is no other user hitting that page the entire day, the
    // re-generation does not happen
    // revalidate does not mean the page automatically re-generates every 10 seconds
    // It simply denotes the time after which , if a user makes a request , a regenration has to be initiated
    // The re-generation can also fail and previously cached HTML could  be served till the subsequent re-generations succeed.
  };
}
