import React from "react";
import ReactDOM from "react-dom/client";
import { StaticBlockType } from "../../types/componentsTypes";

const StaticBlock: React.FC<StaticBlockType> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default StaticBlock;
