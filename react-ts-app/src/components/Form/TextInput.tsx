import React from "react";
import { UseFormRegister } from "react-hook-form";


import "./TextInput.css";
import { IPropsError } from "../../types/types";
import { ErrorElement, IFormValues } from "./Form";

interface ITextInputProps {
  register: UseFormRegister<IFormValues>;
  required: boolean;
  isError?: null | true;
}

const TextInput = ( {register, required, isError}: ITextInputProps) => {

  return (
    <>
      <input
        {...register("textInput", {required: true})}
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
  )

}

const TextInput2 = React.forwardRef(
  (props: IPropsError, ref: React.ForwardedRef<HTMLInputElement>) => (
    <>
      <input
        ref={ref}
        className="form-text-input"
        type="text"
        placeholder="What's your favourite book?"
      />
      {props.isError === true ? (
        <ErrorElement errorText="Please make sure the field is filled in." />
      ) : (
        <ErrorElement />
      )}
    </>
  )
);

export { TextInput };
