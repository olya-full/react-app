import "./Select.css";
import { ErrorElement } from "./Form";
import { IInputProps } from "../../types/types";

const Select = ({ register, isError }: IInputProps) => {
  return (
    <>
      <select
        {...register("select", {
          validate: {
            notDefault: (value) => value.length > 0,
          },
        })}
        name="select"
        defaultValue=""
        className="form-select"
      >
        <option disabled value="">
          What is the genre of your favourite book?
        </option>
        <option value="Fantasy">Fantasy</option>
        <option value="Romance">Romance</option>
        <option value="Detective">Detective</option>
        <option value="Sci-fi">Science Fiction</option>
        <option value="Other Genre">Other Genre</option>
      </select>
      {isError === true ? (
        <ErrorElement errorText="Please pick your favourite genre." />
      ) : (
        <ErrorElement />
      )}
    </>
  );
};

export { Select };
