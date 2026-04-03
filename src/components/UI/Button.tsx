import React from "react";
import { ButtonType } from "../../types/componentsTypes";

const Button: React.FC<ButtonType> = ({
  btnText,
  Icon,
  className = "btnBlock",
  eventFunc,
}) => {
  return (
    <div onClick={eventFunc} className={className}>
      <p>{btnText}</p>
      <div className="btnIconBG">{Icon}</div>
    </div>
  );
};

export default Button;
