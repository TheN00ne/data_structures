import React from "react";

import { SettingsType } from "../../types/componentsTypes";
import { structureSubType, structureType } from "../../types/dataTypes";

export const Settings = <T extends structureType>({
  className,
  structData,
  sub,
  subChange,
}: SettingsType<T>) => {
  return (
    <div className={className}>
      <h1>{`${structData.type} ${sub}`} settings</h1>

      {Object.keys(structData.subType).length > 1 ? (
        <select
          name={structData.type}
          value={sub}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            subChange(e.target.value as structureSubType[T]);
          }}
        >
          {Object.keys(structData.subType).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
};
