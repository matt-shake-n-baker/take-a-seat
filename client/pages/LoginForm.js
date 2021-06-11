import React, { useState } from "react";
// import { useHistory } from "react-router";
import { gql, useMutation } from "@apollo/client";

const SIGNUP_MUTATION = gql`
  mutation CreateUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $team: String!
  ) {
    createUser(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      team: $team
    ) {
      id
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      token
    }
  }
`;

function LoginForm() {
  // const history = useHistory()
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    team: "",
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: (token) => {
      console.log(token)
      // localStorage.setItem(AUTH_TOKEN, login.token);
      // history.push('/');
    },
  });

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      password: formState.password,
      team: formState.team,
    },
    onCompleted: ({ signup }) => {
      // localStorage.setItem(AUTH_TOKEN, signup.token);
      // history.push('/');
      console.log("signup");
    },
  });

  return (
    <div className="form">
      <h4>{formState.login ? "Login" : "Sign Up"}</h4>
      <form
        onSubmit={
          formState.login
            ? (e) => {
                e.preventDefault();
                login;
              }
            : (e) => {
                e.preventDefault();
                signup;
              }
        }
      >
        {!formState.login && (
          <div>
            <input
              value={formState.firstName}
              onChange={(e) =>
                setFormState({ ...formState, firstName: e.target.value })
              }
              type="text"
              placeholder="First Name"
            />
            <input
              value={formState.lastName}
              onChange={(e) =>
                setFormState({ ...formState, lastName: e.target.value })
              }
              type="text"
              placeholder="Last Name"
            />
            <input
              value={formState.team}
              onChange={(e) =>
                setFormState({ ...formState, team: e.target.value })
              }
              type="text"
              placeholder="Team"
            />
          </div>
        )}
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          type="text"
          placeholder="Email"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value,
            })
          }
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={formState.login ? login : signup}>
          {formState.login ? "Login" : "Register"}
        </button>
      </form>
      <div>
        <button
          onClick={() =>
            setFormState({
              ...formState,
              login: !formState.login,
            })
          }
        >
          {formState.login ? "Register" : "Already Registered? Log in!"}
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
