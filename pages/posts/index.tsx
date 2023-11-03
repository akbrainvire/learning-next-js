/*Pre-rendering Summary
Pre-rendering refers to the process of generating HTML with the necessary data for a page in our application.
Pre-rendering can result in better performance and SEO.


Next Js supports two type of pre-rendering
-> static Generation
-> Server-Side Rendering
*/

import Link from "next/link";
import React from "react";

const Posts = ({ posts }: any) => {
  return (
    <div>
      <h1>List of Posts</h1>

      {posts.map((post: any) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <p>
                {post.id} {post.title}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      //   posts: data.slice(0, 3),
      posts: data, //if the whole data and in the postId file we have done only the 3 id in the paths(getStaticPaths) so while we
      // we scroll the data will automatically get json file fetched and store inside the build file and also generate html.
      // All this happens when we set the fallback in the getStaticPaths to true
    },

    revalidate: 10, // we are asking next js to revalidate this post list page every 10 seconds this will ensure the updated posts
    // this will ensure the updated posts data is served almost immediately without having to rebuild the entire app
    // this is called INCREMENTAL STATIC REGENERATION (STALE WHILE REVALIDATE)
  };
}
