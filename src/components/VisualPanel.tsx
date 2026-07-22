import React from "react";
import { RootState } from "..";
import { useSelector } from "react-redux";
import { Structure } from "./Structure";

export const VisualPanel: React.FC = () => {
  const structures = useSelector((state: RootState) => state.structuresReducer);

  return (
    <div>
      {/* {structures.map((str) => (
        <Structure
          id={str.id}
          subtype={str.subtype}
          data={str.data}
          length={str.length}
          maxSize={str.maxSize}
          isSorted={str.isSorted}
        />
      ))} */}
    </div>
  );
};
