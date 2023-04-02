import { useForm, SubmitHandler } from "react-hook-form";

import "./Form.css";
import { DateInput } from "./DateInput";
import { TextInput } from "./TextInput";
import { Select } from "./Select";
import { IErrorText, IFormProps, IFormValues, INewCard } from "../../types/types";
import { RadioInput } from "./RadioInput";
import { FileInput } from "./FileInput";
import { CheckboxInput } from "./CheckboxInput";
import Button from "../Utils/Button/Button";

const ErrorElement = (props: IErrorText) => {
  return <div className="form-error">{props.errorText}</div>;
};

export const Form = (props: IFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormValues>({reValidateMode: "onSubmit"});

  const onSubmit: SubmitHandler<IFormValues> = (data) => {

    const newCard: INewCard = {
      title: data.textInput,
      year: new Date(data.dateInput).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      genre: data.select,
      popularity: data.radioInput,
      cover: URL.createObjectURL(data.fileInput[0]),
    };

    props.renderCards(newCard);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-form">
      <div>
        <TextInput register={register} required={true} isError={errors.textInput ? true : null} />
      </div>
      <div>
        <DateInput register={register} required={true} isError={errors.dateInput ? true : null} />
      </div>
      <div>
        <Select register={register} required={true} isError={errors.select ? true : null} />
      </div>
      <div>
        <RadioInput register={register} required={true} isError={errors.radioInput ? true : null} />
      </div>
      <div>
        <FileInput register={register} required={true} isError={errors.fileInput ? true : null} />
      </div>
      <CheckboxInput
        register={register}
        required={true}
        isError={errors.checkboxInput ? true : null}
      />
      <Button buttonText="Post it!" buttonType="submit" />
    </form>
  );
};

export { ErrorElement };
