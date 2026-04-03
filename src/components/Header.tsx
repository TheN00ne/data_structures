import React from "react";
import Button from "./UI/Button";
import AddSVG from "../components/SVG/AddSVG";

export const Header: React.FC = () => {
  return (
    <header className="mainHeader">
      <div className="leftSide">
        <div className="logo"></div>
        <p>Data structures</p>
      </div>
      <div className="rightSide">
        <Button
          className="btnBlock"
          btnText={"Create Data Structure"}
          Icon={<AddSVG size={30} color={"#000"} />}
          eventFunc={() => {}}
        />
      </div>
    </header>
  );
};
