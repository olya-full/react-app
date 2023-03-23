import React from "react";
import { IPropsError } from "../../types/types";

import "./DateInput.css";
import { ErrorElement } from "./Form";

const DateInput = React.forwardRef(
  (props: IPropsError, ref: React.ForwardedRef<HTMLInputElement>) => (
    <>
      <input
          ref={ref}
          className="form-date-input"
          type="text"
          placeholder="When was the last time you read it?"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
        {props.isError === true ? (
        <ErrorElement errorText="Make sure the field is filled in." />
      ) : (
        <ErrorElement />
      )}
    </>
  )
) 

export { DateInput }