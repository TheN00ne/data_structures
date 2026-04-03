import React, { useState } from "react";
import { SwitcherType } from "../../types/componentsTypes";

const Switcher: React.FC<SwitcherType> = ({ className }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      className={className}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        setIsActive(!isActive);
      }}
    >
      <div className={isActive ? "switchActive" : "switchPassive"}></div>
    </div>
  );
};

export default Switcher;
