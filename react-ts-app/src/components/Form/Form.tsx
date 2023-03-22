import React from "react";

import "./Form.css";
import { DateInput } from "./DateInput";
import { TextInput } from "./TextInput";
import { Select } from "./Select";

export class Form extends React.Component {
  render() {
    return (
      <form className="form-form">
        <div>
          <TextInput />
        </div>
        <div>
          <DateInput />
        </div>
        <div>
          <Select />
        </div>
      </form>
    );
  }
}
