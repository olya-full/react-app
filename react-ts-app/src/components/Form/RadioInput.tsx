import "./RadioInput.css";
import { IRadioInput } from "../../types/types";
import { ErrorElement } from "./Form";

const RadioInput: IRadioInput = (props) => {
  const radioOptions = ["Very popular book", "Moderately popular book", "Not so popular book"];

  return (
    <>
      <fieldset className="fieldset-radio">
        <legend>Is it a well-known book?</legend>
        {radioOptions.map((option, i) => {
          return (
            <label key={i} className="fieldset-label">
              <input
                ref={props.forwardedRefs[i]}
                type="radio"
                name="popularity"
                className="fieldset-input"
                value={option}
              />
              {option}
            </label>
          );
        })}
      </fieldset>
      {props.isError === true ? (
        <ErrorElement errorText="Please choose how popular this book is." />
      ) : (
        <ErrorElement />
      )}
    </>
  );
};

export { RadioInput };
