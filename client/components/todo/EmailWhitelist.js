import React from "react";
import { getQuery } from "@apollo/client";
import { GET_WHITELIST } from "../../queries/users";

const EmailWhitelist = () => {
  const { loading, error, data } = getQuery(GET_WHITELIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
        test
      <ul>{data.users.map(user => <li key={user.id}>{user.email}</li>)}</ul>
    </div>
  );
};

export default EmailWhitelist;
