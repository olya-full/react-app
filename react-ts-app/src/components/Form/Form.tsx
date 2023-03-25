import React from "react";

import "./Form.css";
import { DateInput } from "./DateInput";
import { TextInput } from "./TextInput";
import { Select } from "./Select";
import Button from "../Utils/Button";
import { IErrorText } from "../../types/types";
import { RadioInput } from "./RadioInput";
import { FileInput } from "./FileInput";
import { CheckboxInput } from "./CheckboxInput";
import { INewCard } from "../../pages/FormPage";

const ErrorElement = (props: IErrorText) => {
  return <div className="form-error">{props.errorText}</div>;
};

interface IFormProps {
  renderCards: (newCard: INewCard) => void;
}

interface IFormState {
  errors: {
    textInputError: true | null;
    dateInputError: true | null;
    selectError: true | null;
    radioInputError: true | null;
    fileInputError: true | null;
    checkboxInputError: true | null;
  };
}

export class Form extends React.Component<IFormProps> {
  state: IFormState;
  textInputRef: React.RefObject<HTMLInputElement>;
  dateInputRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  radioInputRefs: React.RefObject<HTMLInputElement>[];
  fileInputRef: React.RefObject<HTMLInputElement>;
  checkboxInputRef: React.RefObject<HTMLInputElement>;

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
  }

  validateForm = () => {
    this.setState({
      errors: {
        textInputError: null,
        dateInputError: null,
        selectError: null,
        radioInputError: null,
        fileInputError: null,
        checkboxInputError: null,
      },
    })

    const newCard = {};
    const currentErrors = {};



    return null;
  }

  handleSumbit = (event: React.FormEvent) => {
    event.preventDefault();

    const newCard = this.validateForm();


    

    console.log(
      this.textInputRef.current?.value,
      this.dateInputRef.current?.value,
      this.selectRef.current?.value,
      this.radioInputRefs[0].current?.checked,
      this.radioInputRefs[0].current?.value,
      this.radioInputRefs[1].current?.checked,
      this.radioInputRefs[2].current?.checked,
      this.fileInputRef.current?.files![0],
      this.fileInputRef.current?.value,
      this.checkboxInputRef.current?.checked
    );

    this.props.renderCards({
      title: "meow1",
      year: "meow2",
      genre: "meow3",
      popularity: "meow4",
      cover: "meow5",
    });

    if (!newCard) return;
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit} className="form-form">
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
          <RadioInput forwardedRefs={this.radioInputRefs} isError={this.state.errors.radioInputError} />
        </div>
        <div>
          <FileInput forwardedRef={this.fileInputRef} isError={this.state.errors.fileInputError} />
        </div>
        <CheckboxInput forwardedRef={this.checkboxInputRef} isError={this.state.errors.checkboxInputError} />
        <Button buttonText="Post it!" buttonType="submit" />
      </form>
    );
  }
}

export { ErrorElement };
