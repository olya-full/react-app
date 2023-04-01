import React from "react";

import "./PopUp.css";

interface IPopUpProps {
  popUpText: string;
  popUpFunc?: () => void;
}

export const PopUp = (props: IPopUpProps) => {
  React.useEffect(() => {
    props.popUpFunc ? props.popUpFunc() : null;
  });

  return (
    <div className="popup-container">
      <div className="popup-text">{props.popUpText}</div>
    </div>
  );
};
