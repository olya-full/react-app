import "./FileInput.css";
import { IPropsInput } from "../../types/types";
import { ErrorElement } from "./Form";

export const FileInput = (props: IPropsInput) => {
  return (
    <>
      <label className="form-file-input-label">
        Please upload the cover of your favourite book.
        <input
          ref={props.forwardedRef}
          type="file"
          accept=".jpg, .jpeg, .png"
          name="bookcover"
          className="form-file-input"
        />
      </label>
      {props.isError === true ? (
        <ErrorElement errorText="Please select the book cover in JP(E)G or PNG." />
      ) : (
        <ErrorElement />
      )}
    </>
  );
};
