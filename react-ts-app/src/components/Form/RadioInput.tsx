import React from "react";

import "./RadioInput.css";
import { IPropsError } from "../../types/types";
import { ErrorElement } from "./Form";

const RadioInput = React.forwardRef(
  (props: IPropsError, ref: React.ForwardedRef<HTMLFieldSetElement>) => {

    const radioOptions = ["Very popular book", "Moderately popular book", "Not so popular book"];

    return (
      <>
        <fieldset ref={ref} className="fieldset-radio">
          <legend>Is it a well-known book?</legend>
          {radioOptions.map((option, i) => {
            return (
              <label key={i} className="fieldset-label">
                <input type="radio" name="popularity" className="fieldset-input" value={option}/>
                {option}
              </label>
            )
          })}
  
        </fieldset>
        {props.isError === true ? (
          <ErrorElement errorText="Please choose how popular this book is." />
        ) : (
          <ErrorElement />
        )}
      </>
    )
  }
);

export { RadioInput };
