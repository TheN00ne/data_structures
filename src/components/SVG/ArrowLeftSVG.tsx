import React from "react";

const ArrowLeftSVG: React.FC<{ size?: number; color?: string }> = ({
  size = 25,
  color = "#000000",
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16">
      <path
        fill={color}
        d="M7.707 13.707a1 1 0 0 1-1.414 0l-4.5-4.5a1 1 0 0 1 0-1.414l4.5-4.5a1 1 0 1 1 1.414 1.414L5 7.5h9.5a1 1 0 0 1 0 2H5l2.707 2.707a1 1 0 0 1 0 1.414Z"
      />
    </svg>
  );
};

export default ArrowLeftSVG;
