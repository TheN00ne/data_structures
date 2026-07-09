import React, { useState } from "react";
import SearchSVG from "../SVG/SearchSVG";
import CrossSVG from "../SVG/CrossSVG";
import { InputType } from "../../types/componentsTypes";

const Input: React.FC<InputType> = ({
  isSearch = false,
  placeholderText = "input",
  className = "inputA",
  searchFunc,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className={className}>
      <input
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          isSearch
            ? e.code == "Enter"
              ? searchFunc!(inputValue)
              : null
            : null;
        }}
        type="text"
        placeholder={`${placeholderText}...`}
        value={inputValue}
        onInput={(e: React.InputEvent<HTMLInputElement>) => {
          setInputValue(e.currentTarget.value);
        }}
      />
      <div className={isSearch ? `iconsBlock` : `iconBlock`}>
        {isSearch ? (
          <div
            className="inputIconBG"
            onClick={() => {
              searchFunc!(inputValue);
            }}
          >
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
