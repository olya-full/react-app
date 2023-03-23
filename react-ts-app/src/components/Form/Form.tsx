import React from "react";

import "./Form.css";
import { DateInput } from "./DateInput";
import { TextInput } from "./TextInput";
import { Select } from "./Select";
import Button from "../Utils/Button";
import { IEmptyProps, IErrorText } from "../../types/types";

const ErrorElement = (props: IErrorText) => {
  return <div className="form-error">{props.errorText}</div>;
};

export class Form extends React.Component {
  textInputRef: React.RefObject<HTMLInputElement>;
  dateInputRef: React.RefObject<HTMLInputElement>;

  constructor(props: IEmptyProps) {
    super(props);
    this.textInputRef = React.createRef();
    this.dateInputRef = React.createRef();
  }

  handleSumbit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(this.textInputRef.current?.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit} className="form-form">
        <div>
          <TextInput ref={this.textInputRef} isError={null} />
        </div>
        <div>
          <DateInput ref={this.dateInputRef} isError={null}/>
        </div>
        <div>
          <Select />
        </div>
        <Button buttonText="Submit" buttonType="submit" />
      </form>
    );
  }
}

export { ErrorElement };
