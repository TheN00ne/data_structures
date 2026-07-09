import React from "react";
import { ButtonType } from "../../types/componentsTypes";

const Button: React.FC<ButtonType> = ({
  className = "btnBlock",
  btnText,
  Icon,
  eventFunc,
  enable,
}) => {
  return (
    <div
      onClick={(e) => {
        if (enable) eventFunc(e);
      }}
      className={className}
      style={{ filter: `grayscale(${!enable ? 50 : 0}%)` }}
    >
      <p>{btnText}</p>
      <div className="btnIconBG">{Icon}</div>
    </div>
  );
};

export default Button;
