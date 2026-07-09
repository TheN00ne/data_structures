export interface structureSubType {
  Array: "static" | "dynamic";
  List: "singly" | "doubly" | "singly-circular" | "doubly-circular";
  Stack: "array-stack" | "list-stack";
  Queue: "simple" | "circular";
  Tree: "arbitrary" | "binary" | "binarySearch" | "AVL" | "2-3" | "Red-Black";
  Graph:
    | "unweighted-undirected"
    | "unweighted-directed"
    | "weighted-undirected"
    | "weighted-directed";
  Hash_Table: "hashTable";
}

export type structureType = keyof structureSubType;

export interface miniStructureI {
  type: structureType;
  imgURL: string;
}

interface propType {
  id: number;
  property: string;
  description: string;
}

interface methType {
  id: number;
  method: string;
  description: string;
}

interface nodeType {
  id: number;
  nodeProp: string;
  description: string;
}

interface algorBlockType {
  id: number;
  block: string;
  methods: methType[];
}

export interface subTypeI {
  nodeProps?: nodeType[];
  properties: propType[];
  algorithms: algorBlockType[];
}

export interface structureConfig<T extends structureType> {
  type: T;
  imgURL: string;
  description: React.ReactNode;
  settings: React.ReactNode;
  subType: Record<structureSubType[T], subTypeI>;
}
