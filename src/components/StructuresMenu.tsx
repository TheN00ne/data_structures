import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { StructureMenuType } from "../types/componentsTypes";
import Input from "./UI/Input";
import Button from "./UI/Button";
import StructExamp from "./StructExamp";
import { miniStructureI, structureType } from "../types/dataTypes";
import Background from "./UI/Background";

import arrayImg from "../asset/resource/arrayImg.png";
import listImg from "../asset/resource/listImg.png";
import stackImg from "../asset/resource/stackImg.png";
import queueImg from "../asset/resource/queueImg.png";
import treeImg from "../asset/resource/treeImg.png";
import graphImg from "../asset/resource/graphImg.png";
import hash_tableImg from "../asset/resource/hash_tableImg.png";

import CrossSVG from "./SVG/CrossSVG";
import CheckSVG from "./SVG/CheckSVG";

const StructuresMenu: React.FC<StructureMenuType> = ({
  openMenuFunc,
  openInitFunc,
  selectedType,
}) => {
  const [chosenName, setChosenName] = useState<structureType | null>(null);

  const miniStructuresData: miniStructureI[] = [
    {
      type: "Array",
      imgURL: arrayImg,
    },
    {
      type: "List",
      imgURL: listImg,
    },
    {
      type: "Stack",
      imgURL: stackImg,
    },
    {
      type: "Queue",
      imgURL: queueImg,
    },
    {
      type: "Tree",
      imgURL: treeImg,
    },
    {
      type: "Graph",
      imgURL: graphImg,
    },
    {
      type: "Hash_Table",
      imgURL: hash_tableImg,
    },
  ];

  const [validStructures, setValidStructures] =
    useState<miniStructureI[]>(miniStructuresData);

  const search = (type: string) => {
    let newArr: miniStructureI[] = [];
    for (const struct of miniStructuresData) {
      if (
        struct.type.toLowerCase().trim().includes(type.toLowerCase().trim())
      ) {
        newArr.push(struct);
      }
    }
    setValidStructures(newArr);
    setChosenName(null);
  };

  return (
    <>
      <Background />
      <div className="structuresMenuContainer">
        <div className="structuresMenu">
          <header>
            <Input
              className="inputA"
              placeholderText="Structure search..."
              isSearch={true}
              searchFunc={search}
            />
          </header>
          <div className="structMenuBody">
            {validStructures.length == 0 ? (
              <div className="nothing">Nothing found</div>
            ) : (
              <div className="structs">
                {validStructures.map((struct) => (
                  <StructExamp
                    key={struct.type}
                    className={
                      chosenName == struct.type
                        ? "structExampA-active"
                        : "structExampA"
                    }
                    type={struct.type}
                    imgURL={struct.imgURL}
                    onChoose={setChosenName}
                  />
                ))}
              </div>
            )}
          </div>
          <footer>
            <Button
              enable={true}
              className="btnBlock"
              btnText="Cancel"
              Icon={<CrossSVG size={20} color={"#000"} />}
              eventFunc={() => {
                openMenuFunc(false);
                openInitFunc(false);
              }}
            />
            <Button
              enable={chosenName ? true : false}
              className="btnBlock"
              btnText="Choose"
              Icon={<CheckSVG size={20} color={"#000"} />}
              eventFunc={() => {
                openMenuFunc(false);
                openInitFunc(true);
                selectedType(chosenName);
              }}
            />
          </footer>
        </div>
      </div>
    </>
  );
};

export default StructuresMenu;
