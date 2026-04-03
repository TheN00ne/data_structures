import React from "react";
import { StructExampType } from "../types/componentsTypes";

const StructExamp: React.FC<StructExampType> = ({
  title,
  imgURL,
  className,
}) => {
  return (
    <div className={className}>
      <div className="imgBlock">
        <img src={imgURL} alt={title} />
      </div>
      <div className="textBlock">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default StructExamp;
