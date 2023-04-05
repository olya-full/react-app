import { IInputProps } from "../../types/types";
import "./DateInput.css";
import { ErrorElement } from "./Form";

const DateInput = ({ register, isError }: IInputProps) => (
  <>
    <input
      {...register("dateInput", { required: true })}
      className="form-date-input"
      type="text"
      placeholder="When was the last time you read it?"
      onFocus={(e) => (e.target.type = "date")}
      onBlur={(e) => (e.target.type = "text")}
    />
    {isError ? (
      <ErrorElement errorText="Please make sure the field is filled in." />
    ) : (
      <ErrorElement />
    )}
  </>
);

export { DateInput };
