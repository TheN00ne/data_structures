import React from "react";

const EditSVG: React.FC<{ size?: number; color?: string }> = ({
  size = 25,
  color = "#000000",
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="#000000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5L2 22l1.5-5.5Z"
      />
    </svg>
  );
};

export default EditSVG;
