import React from "react";
import { VisualPanel } from "./VisualPanel";
import { ControlPanel } from "./ControlPalen";

export const StructuresPanels: React.FC<{ clasName: string }> = (props) => {
  return (
    <div className={`${props.clasName}`}>
      <VisualPanel />
      <ControlPanel />
    </div>
  );
};
