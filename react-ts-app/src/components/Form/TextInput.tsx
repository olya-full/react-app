import React from "react";

import "./TextInput.css";
import { IPropsError } from "../../types/types";
import { ErrorElement } from "./Form";

export class TextInput extends React.Component<IPropsError> {
  isError: null | true | undefined;
  //textInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: IPropsError) {
    super(props);
    this.isError = props.isError;
    //this.textInputRef = props.childRef;
  }

  render() {

    return (
      <>
        <input className="form-text-input" type="text" placeholder="What's your favourite book?" />
        {this.isError === true ? <ErrorElement errorText="Make sure the field is filled in."/> : <ErrorElement />}
      </>
    );
  }
}

