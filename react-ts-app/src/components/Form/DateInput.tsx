import { UseFormRegister } from "react-hook-form";

import "./DateInput.css";
import { ErrorElement, IFormValues } from "./Form";

interface IDateInputProps {
  register: UseFormRegister<IFormValues>;
  required: boolean;
  isError?: null | true;
}

const DateInput = ({register, isError}: IDateInputProps) => (
  <>
    <input
      {...register("dateInput", {required: true})}
      className="form-date-input"
      type="text"
      placeholder="When was the last time you read it?"
      onFocus={(e) => (e.target.type = "date")}
      onBlur={(e) => (e.target.type = "text")}
    />
    {isError === true ? (
      <ErrorElement errorText="Please make sure the field is filled in." />
    ) : (
      <ErrorElement />
    )}
  </>
)

export { DateInput };
