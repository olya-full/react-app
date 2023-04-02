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

export interface IPropsError {
  isError?: null | true;
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

export interface IFormState {
  errors: {
    textInputError: true | null;
    dateInputError: true | null;
    selectError: true | null;
    radioInputError: true | null;
    fileInputError: true | null;
    checkboxInputError: true | null;
  };
}
