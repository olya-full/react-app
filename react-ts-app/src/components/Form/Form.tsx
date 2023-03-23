import React from "react";

import "./Form.css";
import { DateInput } from "./DateInput";
import { TextInput } from "./TextInput";
import { Select } from "./Select";
import Button from "../Utils/Button";
import { IErrorText } from "../../types/types";

const ErrorElement = (props: IErrorText) => {
  return (
    <div className="form-error">{props.errorText}</div>
  )
}

export class Form extends React.Component {
  render() {
    return (
      <form className="form-form">
        <div>
          <TextInput isError={null} />
        </div>
        <div>
          <DateInput />
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