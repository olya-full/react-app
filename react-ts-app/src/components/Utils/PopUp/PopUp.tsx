import React from "react";

import "./PopUp.css";

interface IPopUpProps {
  popUpText: string;
  popUpFunc?: () => void;
}

export class PopUp extends React.Component<IPopUpProps> {
  componentDidMount() {
    this.props.popUpFunc ? this.props.popUpFunc() : null;
  }

  render() {
    return (
      <div className="popup-container">
        <div className="popup-text">{this.props.popUpText}</div>
      </div>
    );
  }
}
