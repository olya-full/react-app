import React from "react";

import "./Form.css";
import { DateInput } from "./DateInput";
import { TextInput } from "./TextInput";
import { Select } from "./Select";
import Button from "../Utils/Button";
import { IErrorText, IFormProps, IFormState, INewCard } from "../../types/types";
import { RadioInput } from "./RadioInput";
import { FileInput } from "./FileInput";
import { CheckboxInput } from "./CheckboxInput";

const ErrorElement = (props: IErrorText) => {
  return <div className="form-error">{props.errorText}</div>;
};

export class Form extends React.Component<IFormProps> {
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
          <TextInput ref={this.textInputRef} isError={this.state.errors.textInputError} />
        </div>
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

export { ErrorElement };
