// To {{{prerender}}} the dynamic data we use getStaticProps in that component and we have to return the object and can have any
// key value pair and that object will have props key which is also an object and there we can pass down the data that we want
// in the component as a prop

import React from "react";
import User from "../../components/user";

const Users = ({ users }: any) => {
  return (
    <div>
      {users.map((user: any) => {
        return (
          <>
            <User user={user} />
          </>
        );
      })}
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await data.json();

  return {
    props: {
      users: response,
    },
  };
}
