import React from "react";
import Button from "./Button";
import { ConfigType } from "../../types/componentsTypes";
import Background from "./Background";

const Confirm: React.FC<ConfigType> = ({
  title,
  description,
  confirmIcon,
  denyIcon,
  confirmTxt,
  denyTxt,
  className,
  onConfirm,
  onDeny,
}) => {
  return (
    <>
      <Background />
      <div className={`${className}-container`}>
        <div className={className}>
          <div className={`${className}-titleBlock`}>
            <h2>{title}</h2>
          </div>

          <p className={`${className}-descBlock`}>{description}</p>

          <div className={`${className}-btnBlock`}>
            <Button
              enable={true}
              Icon={denyIcon}
              btnText={denyTxt}
              className={`${className}-deny`}
              eventFunc={onDeny}
            />
            <Button
              enable={true}
              Icon={confirmIcon}
              btnText={confirmTxt}
              className={`${className}-confirm`}
              eventFunc={onConfirm}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
