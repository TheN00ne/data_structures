import React, { useEffect, useState } from "react";

import { StructureInitType } from "../types/componentsTypes";
import { structureConfig } from "../types/dataTypes";

import Background from "./UI/Background";
import Button from "./UI/Button";
import DynamicBlock from "./UI/DynamicBlock";
import StaticBlock from "./UI/StaticBlock";

import CrossSVG from "./SVG/CrossSVG";
import CheckSVG from "./SVG/CheckSVG";

import { structureSubType, structureType } from "../types/dataTypes";
import { Settings } from "./UI/Settings";

const StructureInit = <T extends structureType>({
  className,
  openInitFunc,
  structData,
  sub,
}: StructureInitType<T>) => {
  const [subType, setSubType] = useState<structureSubType[T]>(sub);

  useEffect(() => {
    const nextSubType =
      sub in structData.subType
        ? sub
        : (Object.keys(structData.subType)[0] as structureSubType[T]);

    setSubType(nextSubType);
  }, [sub, structData.type]);

  const safeSubType =
    subType in structData.subType
      ? subType
      : (Object.keys(structData.subType)[0] as structureSubType[T]);

  const currentSubTypeData = structData.subType[safeSubType];

  if (!currentSubTypeData) return null;

  return (
    <div className={className}>
      <Background />
      <div className={`${className}-container`}>
        <header>{structData.type}</header>
        <div className={`${className}-main`}>
          <img src={structData.imgURL} alt={structData.type} />
          <DynamicBlock className="infoBlockA">
            {structData.description}
          </DynamicBlock>
          <StaticBlock className="staticBlockA">
            <Settings
              className=""
              structData={structData}
              sub={subType}
              subChange={setSubType}
            />
          </StaticBlock>
          <DynamicBlock className="infoBlockA">
            <h2>Властивості</h2>
            {currentSubTypeData.properties.map((prop) => (
              <div key={prop.id}>
                <dl>
                  <dt>{prop.property}</dt>
                  <dd>{prop.description}</dd>
                </dl>
              </div>
            ))}
          </DynamicBlock>
          {currentSubTypeData.nodeProps ? (
            <DynamicBlock className="infoBlockA">
              <h2>Вузол</h2>
              {currentSubTypeData.nodeProps?.map((node) => (
                <div key={node.id}>
                  <dl>
                    <dt>{node.nodeProp}</dt>
                    <dd>{node.description}</dd>
                  </dl>
                </div>
              ))}
            </DynamicBlock>
          ) : null}
          <DynamicBlock className="infoBlockA">
            <h2>Методи</h2>
            {currentSubTypeData.algorithms.map((el) => (
              <div key={el.id}>
                <h3>{el.block}</h3>
                <div>
                  {el.methods.map((meth) => (
                    <dl key={meth.id}>
                      <dt>{meth.method}</dt>
                      <dd>{meth.description}</dd>
                    </dl>
                  ))}
                </div>
              </div>
            ))}
          </DynamicBlock>
          <StaticBlock className="staticBlockA">Default</StaticBlock>
        </div>
        <footer>
          <Button
            enable={true}
            className={`${className}-cancel`}
            btnText="Cancel"
            Icon={<CrossSVG size={20} color={"#000"} />}
            eventFunc={() => {
              openInitFunc(false);
            }}
          />
          <Button
            enable={true}
            className={`${className}-create`}
            btnText="Create"
            Icon={<CheckSVG size={20} color={"#000"} />}
            eventFunc={() => {
              openInitFunc(false);
            }}
          />
        </footer>
      </div>
    </div>
  );
};

export default StructureInit;
