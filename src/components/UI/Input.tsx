import React, { useState } from "react";
import SearchSVG from "../SVG/SearchSVG";
import CrossSVG from "../SVG/CrossSVG";
import { InputType } from "../../types/componentsTypes";

//Якщо що зроби для пошуку через useMemo

const Input: React.FC<InputType> = ({
  isSearch = false,
  placeholderText = "input",
  className = "inputA",
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className={className}>
      <input
        type="text"
        placeholder={`${placeholderText}...`}
        value={inputValue}
        onInput={(e: React.InputEvent<HTMLInputElement>) => {
          setInputValue(e.currentTarget.value);
        }}
      />
      <div className={isSearch ? `iconsBlock` : `iconBlock`}>
        {isSearch ? (
          <div className="inputIconBG">
            <SearchSVG size={30} color={"#000"} />
          </div>
        ) : null}
        <div
          className="inputIconBG"
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            setInputValue("");
          }}
        >
          <CrossSVG size={30} color={"#000"} />
        </div>
      </div>
    </div>
  );
};

export default Input;
