import React from "react";

import "./DateInput.css";

export class DateInput extends React.Component {
  render() {
    return (
      <input
        className="form-date-input"
        type="text"
        required
        placeholder="When was the last time you read it?"
        onFocus={(e) => (e.target.type = "date")}
        onBlur={(e) => (e.target.type = "text")}
      />
    );
  }
}
