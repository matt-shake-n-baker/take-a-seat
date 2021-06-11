import { useQuery, gql, useMutation } from "@apollo/client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Navigation from "../components/Navigation";
import NewWorkplace from "../components/newWorkplace";

const GET_WORKSPACES = gql`
  query GetWorkspaces($id: ID!) {
    user (id: $id) {
      workspaces {
        spaceName
        imageUrl
        id
      }
    }
  }
`;

const Workspaces = (props) => {
  const workspaceQuery = useQuery(GET_WORKSPACES, {
    variables:{
      id: localStorage.getItem('user-id')
    }
  });

  const [workplaceForm, setWorkplaceForm] = useState(false);
  
  if (workspaceQuery.loading) return "loading...";
  if (workspaceQuery.error) return "error...";
  return (
    <Fragment>
      <Navigation />
      <div className="workspaces">
        {workspaceQuery.data.user.workspaces &&
          workspaceQuery.data.user.workspaces.map((workspace) => (
            <div className="workspace-profile" key={workspace.spaceName}>
              <img src={workspace.imageUrl} />
              <div>{workspace.spaceName}</div>
            </div>
          ))}
        <div className="workspace-profile" onClick={() => setWorkplaceForm(true)}>
          <img src="/add-button.png" />
          Create Workspace
          {workplaceForm && <NewWorkplace refetch={workspaceQuery.refetch}/>}
        </div>
      </div>
    </Fragment>
  );
};

export default Workspaces;
