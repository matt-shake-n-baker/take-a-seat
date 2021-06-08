import React, { useEffect } from "react";
import BurgerMenu from "./BurgerMenu";
import axios from 'axios'
import * as Constants from '../'

const Workspaces = () => {
    const [users, setUsers] = setState( { users: [] })

    useEffect(() => {
        const fetchData = async () => {
            const queryResult = await axios.get(''
                
            )
        }
    })

  return (
    <div>
      <BurgerMenu />

    </div>
  );
};

export default Workspaces;
