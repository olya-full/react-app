import { UseFormRegister } from "react-hook-form";

export type IEmptyProps = Record<string, never>

export interface IInputValue {
  inputValue: string;
}

export interface IButtonProps {
  buttonText: string;
  buttonType: "button" | "submit" | "reset" | undefined;
}

export interface IErrorText {
  errorText?: string;
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
  fileInput: FileList;
  checkboxInput: boolean;
}

export interface IInputProps {
  register: UseFormRegister<IFormValues>;
  required: boolean;
  isError?: null | true;
}

export interface ISearchElemProps {
  renderResults: (result: ISearchResult[]) => void;
}

export interface ICardsProps {
  images: ISearchResult[];
}

export interface ISearchResult {
  id: string;
  title: string;
  imageUrl: string;
  date?: EpochTimeStamp;
  author?: string;
  location?: string;
}

export interface IRequestParams {
  method?: string;
  text?: string;
  photo_id?: string;
  api_key: string;
  per_page: string;
  page: string;
  format: string;
  nojsoncallback: string;
}

interface IPhoto {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

export type IPhotosResponseJson = Promise<{
    photos: {
      page: number;
      pages: number;
      perpage: number;
      total: number;
      photo: IPhoto[];
    };
    stat: string;
  }>


export interface IPhotosResponse {
  json(): IPhotosResponseJson
}