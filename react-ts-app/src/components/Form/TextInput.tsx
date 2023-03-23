import React from "react";

import "./TextInput.css";
import { IPropsError } from "../../types/types";
import { ErrorElement } from "./Form";

const TextInput = React.forwardRef(
  (props: IPropsError, ref: React.ForwardedRef<HTMLInputElement>) => (
    <>
      <input
        ref={ref}
        className="form-text-input"
        type="text"
        placeholder="What's your favourite book?"
      />
      {props.isError === true ? (
        <ErrorElement errorText="Make sure the field is filled in." />
      ) : (
        <ErrorElement />
      )}
    </>
  )
);

export { TextInput };
