import { IInputProps } from "../../types/types";
import "./CheckboxInput.css";
import { ErrorElement } from "./Form";

export const CheckboxInput = ({ register, isError }: IInputProps) => {
  return (
    <div>
      <div className="form-checkbox">
        <label className="form-checkbox-input-label">
          Would you like to post your favourite book here?
          <input
            {...register("checkboxInput", { required: true })}
            type="checkbox"
            className="form-chechbox-input"
          />
        </label>
      </div>
      {isError === true ? (
        <ErrorElement errorText="Please agree to post your book." />
      ) : (
        <ErrorElement />
      )}
    </div>
  );
};
