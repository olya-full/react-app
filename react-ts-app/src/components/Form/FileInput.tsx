import "./FileInput.css";
import { IInputProps } from "../../types/types";
import { ErrorElement } from "./Form";

export const FileInput = ({ register, isError }: IInputProps) => (
  <>
    <label className="form-file-input-label">
      Please upload the cover of your favourite book.
      <input
        {...register("fileInput", {
          validate: {
            isChosen: (file) => file.length > 0,
            isImage: (file) => file[0].type.startsWith("image"),
          },
        })}
        type="file"
        accept=".jpg, .jpeg, .png"
        className="form-file-input"
      />
    </label>
    {isError === true ? (
      <ErrorElement errorText="Please select the book cover in JP(E)G or PNG." />
    ) : (
      <ErrorElement />
    )}
  </>
);
