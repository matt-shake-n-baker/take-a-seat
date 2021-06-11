
import { useQuery, gql, useMutation } from "@apollo/client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Navigation from "../components/Navigation";

const CREATE_WORKSPACE = gql`
  mutation CreateWorkspace($spaceName: String!, $creator: String!) {
    createWorkspace(spaceName: $spaceName, creator: $creator) {
      spaceName
      creator
    }
  }
`;

const NewWorkplace = (props) => {
  const [newWorkspace, setNewWorkspace] = useState({
    spaceName: "",
    id: localStorage.getItem("user-id"),
  });

  const [createWorkspace, { data }] = useMutation(CREATE_WORKSPACE, {
    onCompleted: () => {
      console.log("test");
      props.refetch()
    }
  });
  return (
    <form
      className="workplace-form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(newWorkspace);
        createWorkspace({
          variables: {
            creator: newWorkspace.id,
            spaceName: newWorkspace.spaceName,
          },
        });
      }}
    >
      <input
        value={newWorkspace.spaceName}
        onChange={(e) =>
          setNewWorkspace({ ...newWorkspace, spaceName: e.target.value })
        }
        type="text"
        placeholder="Space Name"
      />
      <button
        type="submit"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Create Workspace
      </button>
    </form>
  );
};
export default NewWorkplace;
