import React from "react";
import { StructExampType } from "../types/componentsTypes";

const StructExamp: React.FC<StructExampType> = ({
  type,
  imgURL,
  className,
  onChoose,
}) => {
  return (
    <div onClick={() => onChoose(type)} className={className}>
      <div className="imgBlock">
        <img src={imgURL} alt={type} />
      </div>
      <div className="textBlock">
        <p>{type}</p>
      </div>
    </div>
  );
};

export default StructExamp;
