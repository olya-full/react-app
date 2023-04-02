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
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log("DATA:", data);

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
      <Button buttonText="Post it!" buttonType="submit" />
    </form>
  );
};
/*
export class Form2 extends React.Component<IFormProps> {
  state: IFormState;
  textInputRef: React.RefObject<HTMLInputElement>;
  dateInputRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  radioInputRefs: React.RefObject<HTMLInputElement>[];
  fileInputRef: React.RefObject<HTMLInputElement>;
  checkboxInputRef: React.RefObject<HTMLInputElement>;
  uniqueID: number;

  constructor(props: IFormProps) {
    super(props);

    this.state = {
      errors: {
        textInputError: null,
        dateInputError: null,
        selectError: null,
        radioInputError: null,
        fileInputError: null,
        checkboxInputError: null,
      },
    };

    this.textInputRef = React.createRef();
    this.dateInputRef = React.createRef();
    this.selectRef = React.createRef();
    this.radioInputRefs = [
      React.createRef<HTMLInputElement>(),
      React.createRef<HTMLInputElement>(),
      React.createRef<HTMLInputElement>(),
    ];
    this.fileInputRef = React.createRef();
    this.checkboxInputRef = React.createRef();
    this.uniqueID = 123;
  }

  validateForm = () => {
    const newCard: INewCard = {};
    const currentErrors = {
      textInputError: null,
      dateInputError: null,
      selectError: null,
      radioInputError: null,
      fileInputError: null,
      checkboxInputError: null,
    } as typeof this.state.errors;

    this.textInputRef.current?.value
      ? (newCard.title = this.textInputRef.current?.value)
      : (currentErrors.textInputError = true);
    this.dateInputRef.current?.value
      ? (newCard.year = new Date(this.dateInputRef.current?.value).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }))
      : (currentErrors.dateInputError = true);
    this.selectRef.current?.value !== "choose"
      ? (newCard.genre = this.selectRef.current?.value)
      : (currentErrors.selectError = true);

    const popularity = this.radioInputRefs.reduce((prev, next) => {
      if (next.current?.checked) {
        prev = next.current.value;
      }
      return prev;
    }, "");
    popularity ? (newCard.popularity = popularity) : (currentErrors.radioInputError = true);

    this.fileInputRef.current?.value && this.fileInputRef.current.files![0].type.startsWith("image")
      ? (newCard.cover = URL.createObjectURL(this.fileInputRef.current?.files![0]))
      : (currentErrors.fileInputError = true);
    this.checkboxInputRef.current?.checked ? "" : (currentErrors.checkboxInputError = true);

    this.setState({
      errors: currentErrors,
    });

    if (Object.values(currentErrors).find((err) => err === true)) {
      return null;
    }

    return newCard;
  };

  handleSumbit = (event: React.FormEvent) => {
    event.preventDefault();
    const newCard = this.validateForm();

    if (!newCard) return;

    this.props.renderCards(newCard);
    this.uniqueID++;
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit} className="form-form" key={this.uniqueID}>
        <div>
          <DateInput ref={this.dateInputRef} isError={this.state.errors.dateInputError} />
        </div>
        <div>
          <Select ref={this.selectRef} isError={this.state.errors.selectError} />
        </div>
        <div>
          <RadioInput
            forwardedRefs={this.radioInputRefs}
            isError={this.state.errors.radioInputError}
          />
        </div>
        <div>
          <FileInput forwardedRef={this.fileInputRef} isError={this.state.errors.fileInputError} />
        </div>
        <CheckboxInput
          forwardedRef={this.checkboxInputRef}
          isError={this.state.errors.checkboxInputError}
        />
        <Button buttonText="Post it!" buttonType="submit" />
      </form>
    );
  }
}
*/
export { ErrorElement };
