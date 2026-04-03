import React from "react";

const DotsMoreSVG: React.FC<{ size?: number; color?: string }> = ({
  size = 25,
  color = "#000000",
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 128 512">
      <path
        fill={color}
        d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96a56 56 0 1 0 -112 0 56 56 0 1 0 112 0z"
      />
    </svg>
  );
};

export default DotsMoreSVG;
