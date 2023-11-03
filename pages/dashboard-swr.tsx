// we can also use SWR-StaleWhileRevalidate that is a library provided by next js for client site Data fetching - check dashboard-swr.tsx
//if data is change in the database then the swr will automatically refreshes the page and have the updated data whereas
// with using effect and state we have to refresh the page

import React from "react";
import useSWR from "swr";

const fetchFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

const DashboardSWR = () => {
  const { data, error } = useSWR("key", fetchFunction);

  if (error) return `error occurred -> ${error.message}`;
  if (!data) return "Loading.....";

  return (
    <div>
      <h2>Users Data With using Client Side Data Fetching</h2>
      <br />
      {data?.map((user: any) => {
        return (
          <div key={user.id}>
            <b>UserID: {user.id} </b>
            <b>Name: {user.name} </b>
            <i>
              address: {user.address.suite} {user.address.street}{" "}
              {user.address.city}
            </i>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default DashboardSWR;
