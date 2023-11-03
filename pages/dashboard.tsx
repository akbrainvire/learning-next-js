//Example of client Site Data Fetching using Effect and State   \
// we can also use SWR-StaleWhileRevalidate that is a library provided by next js for client site Data fetching - check dashboard-swr.tsx

import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    }

    fetchUserData();
  }, []);

  if (isLoading) {
    return <h1>Loading.........</h1>;
  }

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

export default Dashboard;
