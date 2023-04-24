import "./RadioInput.css";
import { ErrorElement } from "./Form";
import { IInputProps } from "../../types/types";

const RadioInput = ({ register, isError }: IInputProps) => {
  const radioOptions = ["Very popular book", "Moderately popular book", "Not so popular book"];

  return (
    <>
      <fieldset className="fieldset-radio">
        <legend>Is it a well-known book?</legend>
        {radioOptions.map((option, i) => {
          return (
            <label key={i} className="fieldset-label">
              <input
                {...register("radioInput", { required: true })}
                type="radio"
                className="fieldset-input"
                value={option}
              />
              {option}
            </label>
          );
        })}
      </fieldset>
      {isError ? (
        <ErrorElement errorText="Please choose how popular this book is." />
      ) : (
        <ErrorElement />
      )}
    </>
  );
};

export { RadioInput };
