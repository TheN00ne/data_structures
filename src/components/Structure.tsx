import React from "react";
import { arrayI } from "../types/dataTypes";

export const Structure: React.FC<arrayI> = (props) => {
  return (
    <div key={props.id}>
      <h3>Array {props.id}</h3>
      <div>
        {props.data.map((el) => (
          <div>{el}</div>
        ))}
      </div>
      <span>
        {props.length}/{props.maxSize}
      </span>
    </div>
  );
};
