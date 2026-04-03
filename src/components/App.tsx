import React, { useState } from "react";

import { Header } from "./Header";

import Button from "./UI/Button";
import Input from "./UI/Input";
import Switcher from "./UI/Switcher";
import StructExamp from "./StructExamp";
import InfoBlock from "./UI/InfoBlock";
import Confirm from "./UI/Confirm";

import AddSVG from "../components/SVG/AddSVG";
import MinusSVG from "./SVG/MinusSVG";
import EditSVG from "./SVG/EditSVG";
import DotsMoreSVG from "./SVG/DotsMoreSVG";
import BurgerSVG from "./SVG/BurgerSVG";
import ArrowRightSVG from "./SVG/ArrowRightSVG";
import ArrowCircleSVG from "./SVG/ArrowCircleSVG";
import CrossSVG from "./SVG/CrossSVG";
import CheckSVG from "./SVG/CheckSVG";
import InfoSVG from "./SVG/InfoSVG";
import TrashSVG from "./SVG/TrashSVG";
import ArrowLeftSVG from "./SVG/ArrowLeftSVG";
import SearchSVG from "./SVG/SearchSVG";
import SortSVG from "./SVG/SortSVG";

import arrImg from "../asset/resource/arrayImg.png";
import listImg from "../asset/resource/listImg.png";
import stackImg from "../asset/resource/stackImg.png";
import queueImg from "../asset/resource/queueImg.png";
import treeImg from "../asset/resource/treeImg.png";
import graphImg from "../asset/resource/graphImg.png";
import hashTableImg from "../asset/resource/hash_tableImg.png";

//У масиві - ключі, а у списку - вузли (у вузлів є посилання наадресу наступний елементу)
//AVL дерево, Б дерево, 2-3 дерево, червоно-чорні дерева ???

//Напиши у всіх компонентів alias для пропсів і винеси їх у types

//Зроби Code Splitting

export const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const configFuncExamp = () => {
    console.log("Config");
    setIsOpen(false);
  };

  const denyFuncExamp = () => {
    console.log("Deny");
    setIsOpen(false);
  };

  return (
    <div>
      <Header />
      <div className="block1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel?
      </div>
      <div className="block2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel?
      </div>
      <div className="block3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel?
      </div>
      <div className="block4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel?
      </div>
      <div className="block5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel?
      </div>
      <div className="block6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel?
      </div>
      <div className="block7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel?
      </div>
      <div className="block8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vel?
      </div>
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<AddSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<MinusSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<DotsMoreSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<BurgerSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<CrossSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<CheckSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<InfoSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<ArrowCircleSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<EditSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<ArrowRightSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<ArrowLeftSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<SearchSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<SortSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />
      <Button
        className="btnBlock"
        btnText={"Some sort of text"}
        Icon={<TrashSVG size={30} color={"#000"} />}
        eventFunc={() => {}}
      />

      <Input isSearch={false} placeholderText="AAA" className="inputA" />
      <Input isSearch={true} placeholderText="AAA" className="inputA" />
      <Switcher className="switcherA" />

      <InfoBlock className="infoBlockA">
        <h2>Main Header</h2>
        <h3>Header</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          dolores distinctio reprehenderit delectus recusandae minus, impedit
          est error velit molestiae temporibus sint cumque hic praesentium,
          nihil, sunt saepe corporis. Cumque quisquam aspernatur dicta
          cupiditate obcaecati, deleniti labore exercitationem dolorem esse rem
          similique qui quam ducimus maxime fuga veniam, ipsum asperiores!
        </p>
        <ol>
          <li>Hello</li>
          <li>world</li>
          <li>I</li>
          <li>am</li>
          <li>Dima</li>
        </ol>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
        <dl>
          <dt>Title 1</dt>
          <dd>Description 1</dd>

          <dt>Title 2</dt>
          <dd>Description 2</dd>
        </dl>
      </InfoBlock>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
        }}
      >
        <StructExamp title="Array" imgURL={arrImg} className="structExampA" />
        <StructExamp title="List" imgURL={listImg} className="structExampA" />
        <StructExamp title="Stack" imgURL={stackImg} className="structExampA" />
        <StructExamp title="Queue" imgURL={queueImg} className="structExampA" />
        <StructExamp title="Tree" imgURL={treeImg} className="structExampA" />
        <StructExamp title="Graph" imgURL={graphImg} className="structExampA" />
        <StructExamp
          title="Hash Table"
          imgURL={hashTableImg}
          className="structExampA"
        />
      </div>
      {isOpen ? (
        <Confirm
          title="Title"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium odio minima deserunt. Cum quaerat, doloremque nisi nostrum saepe, enim pariatur nihil amet hic odit officiis voluptate "
          confirmIcon={<CheckSVG size={30} color={"#000"} />}
          confirmTxt="Ok"
          denyIcon={<TrashSVG size={30} color={"#000"} />}
          denyTxt="Cancel"
          className="confirmA"
          onConfirm={configFuncExamp}
          onDeny={denyFuncExamp}
        />
      ) : null}
    </div>
  );
};

//Напиши у всіх компонентів alias для пропсів і винеси їх у types

//Зроби Code Splitting

//Повтори чат про border radius

//МОЖЕ ЩОСЬ МОЖНА ПЕРЕМІСТИТИ В dev-dependences

//У масиві - ключі, а у списку - вузли (у вузлів є посилання наадресу наступний елементу)
//AVL дерево, Б дерево, 2-3 дерево, червоно-чорні дерева ???
