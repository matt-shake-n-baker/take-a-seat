import React from "react";
import { useQuery } from "@apollo/client";
import OfficeLayout from '../pages/OfficeLayout'
import ToolKit from './Toolkit'

const Sandbox = () => {
  return (
    <div className="sandbox">
      <ToolKit />
      <OfficeLayout />
    </div>
  )
};
export default Sandbox;
