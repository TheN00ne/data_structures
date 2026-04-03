export interface ButtonType {
  btnText: string;
  Icon: React.ReactNode;
  className: string;
  eventFunc: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface InputType {
  isSearch?: boolean;
  placeholderText: string;
  className: string;
}

export interface SwitcherType {
  className: string;
}

export interface InfoBlockType {
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
  title: string;
  imgURL: string;
  className: string;
}
