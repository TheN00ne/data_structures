import React from "react";

const MinusSVG: React.FC<{ size?: number; color?: string }> = ({
  size = 25,
  color = "#000000",
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 448 512">
      <path
        fill={color}
        d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
      />
    </svg>
  );
};

export default MinusSVG;
