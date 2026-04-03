import React from "react";

const SortSVG: React.FC<{ size?: number; color?: string }> = ({
  size = 25,
  color = "#000000",
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="1" y="16" width="6" height="6" fill={color} />
      <rect x="9" y="10" width="6" height="12" fill={color} />
      <rect x="17" y="4" width="6" height="18" fill={color} />
    </svg>
  );
};

export default SortSVG;
