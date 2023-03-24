import "./CheckboxInput.css";
import { IPropsInput } from "../../types/types";
import { ErrorElement } from "./Form";

export const CheckboxInput = (props: IPropsInput) => {
  return (
    <>
      <label className="form-checkbox-input-label">
        Would you like to post your favourite book here?
        <input ref={props.forwardedRef} type="checkbox" name="postit" />
      </label>
      {props.isError === true ? (
        <ErrorElement errorText="Please agree to post your book." />
      ) : (
        <ErrorElement />
      )}
    </>
  );
};
