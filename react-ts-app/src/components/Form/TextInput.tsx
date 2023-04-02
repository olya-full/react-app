import "./TextInput.css";
import { ErrorElement } from "./Form";
import { IInputProps } from "../../types/types";

const TextInput = ({ register, isError }: IInputProps) => {
  return (
    <>
      <input
        {...register("textInput", { required: true })}
        className="form-text-input"
        type="text"
        placeholder="What's your favourite book?"
      />
      {isError === true ? (
        <ErrorElement errorText="Please make sure the field is filled in." />
      ) : (
        <ErrorElement />
      )}
    </>
  );
};

export { TextInput };
