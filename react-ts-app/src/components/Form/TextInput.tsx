import { UseFormRegister } from "react-hook-form";

import "./TextInput.css";
import { ErrorElement, IFormValues } from "./Form";

interface ITextInputProps {
  register: UseFormRegister<IFormValues>;
  required: boolean;
  isError?: null | true;
}

const TextInput = ({ register, isError }: ITextInputProps) => {
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
