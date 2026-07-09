import { structureSubType, structureType, subTypeI } from "./dataTypes";
import { structureConfig } from "./dataTypes";

export interface HeaderType {
  openMenuFunc: (arg: boolean) => void;
}

export interface ButtonType {
  btnText: string;
  Icon: React.ReactNode;
  className: string;
  eventFunc: (e: React.MouseEvent<HTMLDivElement>) => void;
  enable: boolean;
}

export interface InputType {
  isSearch?: boolean;
  placeholderText: string;
  className: string;
  searchFunc?: (arg: string) => void;
}

export interface SwitcherType {
  className: string;
}

export interface DynamicBlockType {
  children: React.ReactNode;
  className: string;
}

export interface StaticBlockType {
  children: React.ReactNode;
  className: string;
}

export interface ConfigType {
  title: string;
  description: string;
  confirmIcon: React.ReactNode;
  denyIcon: React.ReactNode;
  confirmTxt: string;
  denyTxt: string;
  className: string;
  onConfirm: () => void;
  onDeny: () => void;
}

export interface StructExampType {
  type: structureType;
  imgURL: string;
  className: string;
  onChoose: (arg: structureType) => void;
}

export interface StructureMenuType {
  openMenuFunc: (arg: boolean) => void;
  openInitFunc: (arg: boolean) => void;
  selectedType: (arg: structureType | null) => void;
}

export interface StructureInitType<T extends structureType> {
  className: string;
  structData: structureConfig<T>;
  openInitFunc: (arg: boolean) => void;
  sub: structureSubType[T];
}

export interface SettingsType<T extends structureType> {
  className: string;
  structData: structureConfig<T>;
  sub: structureSubType[T];
  subChange: (v: structureSubType[T]) => void;
}
