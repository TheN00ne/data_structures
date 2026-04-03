import React from "react";

const TrashSVG: React.FC<{ size?: number; color?: string }> = ({
  size = 25,
  color = "#000000",
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
      />
    </svg>
  );
};

export default TrashSVG;
