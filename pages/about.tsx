import Footer from "@/components/Footer";
import styled from "../styles/About.module.scss";

import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About File</title>
        <meta name="description" content="this is the demo about app" />
      </Head>
      <div className={styled.highlightscss}>About</div>
    </>
  );
};

export default About;

// About.getLayout = function PageLayout(page: any) {
//   // IF we want the about page to only have the footer after this go to
//   // _app.tsx file and check if getLayout .
//   return (
//     <>
//       {page}
//       <Footer />
//     </>
//   );
// };
