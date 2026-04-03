import React, { useState } from "react";
import { InfoBlockType } from "../../types/componentsTypes";

const InfoBlock: React.FC<InfoBlockType> = ({ children, className }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className={className}>
      <div className={isOpened ? `${className}-opened` : `${className}-closed`}>
        {children}
      </div>
      <div
        className="moreOrLess"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          if (e.target == e.currentTarget) {
            setIsOpened(!isOpened);
          }
        }}
      >
        ...
      </div>
    </div>
  );
};

export default InfoBlock;
