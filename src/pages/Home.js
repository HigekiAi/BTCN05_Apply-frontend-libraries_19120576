import React from "react";
import { useQuery } from "react-query";
import { API_URL } from "../config";

const getAccounts = async () => {
  try {
    let result = await fetch(API_URL);
    result = await result.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

function Home(props) {
  const { data, error, isError, isLoading } = useQuery("users", getAccounts);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <div>
      <div className="account-list">
        <h3 className="title-list">Registration Success List</h3>
        <ul className="body-list">
          {data.map((item) => (
            <li key={item.username}>{item.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
