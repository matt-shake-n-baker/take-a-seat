import React, { useEffect, useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [team, setTeam] = useState("");

  useEffect(() => {
    console.log("changing state");
  }, [email, password, firstName, lastName, team]);

  

  return (
    <div id="login-form">
      Email
      <input name="email" onChange={setEmail} />
      Password
      <input name="password" onChange={setPassword} />
      Email
      <input name="firstName" onChange={setFirstName} />
      Password
      <input name="lastName" onChange={setLastName} />
      Email
      <input name="team" onChange={setTeam} />
      <button onClick={() => console.log('registered')}>Register</button>
      {/* if register is successful, link to login with state
      Otherwise, return error and to reach out to HR. */}
    </div>
  );
}

export default LoginForm;