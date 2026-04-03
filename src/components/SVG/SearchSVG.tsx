import React from "react";

const SearchSVG: React.FC<{ size?: number; color?: string }> = ({
  size = 25,
  color = "#000000",
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle
        cx="10"
        cy="10"
        r="6"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <line
        x1="14.5"
        y1="14.5"
        x2="21"
        y2="21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SearchSVG;
