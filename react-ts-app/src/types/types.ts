import { UseFormRegister } from "react-hook-form";

export type IEmptyProps = Record<string, never>

export interface IInputValue {
  inputValue: string;
}

export interface IBook {
  title: string;
  author: string;
  img: string;
  year: number;
  desc: string;
  genre: string;
}

export interface IButtonProps {
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
}

export interface IErrorText {
  errorText?: string;
}

export interface IPropsRadioInput {
  isError?: null | true;
  forwardedRefs: React.RefObject<HTMLInputElement>[];
}

export interface IPropsInput {
  isError?: null | true;
  forwardedRef: React.RefObject<HTMLInputElement>;
}

export interface IRadioInput {
  (props: IPropsRadioInput): JSX.Element
}

export interface INewCard {
  title?: string;
  year?: string;
  genre?: string;
  popularity?: string;
  cover?: string;
}

export interface IFormPageState {
  cards: Array<INewCard>;
  showPopup: boolean;
}

export interface IFormProps {
  renderCards: (newCard: INewCard) => void;
}

export interface IFormValues {
  textInput: string;
  dateInput: string;
  select: string;
  radioInput: string;
  fileInput: string;
  checkboxInput: boolean;
}

export interface IInputProps {
  register: UseFormRegister<IFormValues>;
  required: boolean;
  isError?: null | true;
}