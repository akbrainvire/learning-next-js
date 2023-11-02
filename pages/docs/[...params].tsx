// with using the tripple dot operator while creating the folder it becomes the catch all nested route so whenever there is more route
// query in the url other than docs then it will route to this component like '/docs/other/this' and if docs then it will go to
// index.tsx in the docs folder

import { useRouter } from "next/router";
import React from "react";

const Others = () => {
  const router = useRouter();
  const queryParams = router?.query?.params;
  //   console.log(queryParams);
  return <div>{queryParams}</div>;
};

export default Others;
