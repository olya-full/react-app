import React from "react";

import "./Select.css";
import { IPropsError } from "../../types/types";
import { ErrorElement } from "./Form";

const Select = React.forwardRef(
  (props: IPropsError, ref: React.ForwardedRef<HTMLSelectElement>) => (
    <>
      <select ref={ref} name="favouriteGenre" defaultValue="choose" className="form-select">
        <option disabled value="choose">
          What is the genre of your favourite book?
        </option>
        <option value="Fantasy">Fantasy</option>
        <option value="Romance">Romance</option>
        <option value="Detective">Detective</option>
        <option value="Sci-fi">Science Fiction</option>
        <option value="Other Genre">Other Genre</option>
      </select>
      {props.isError === true ? (
        <ErrorElement errorText="Please pick your favourite genre." />
      ) : (
        <ErrorElement />
      )}
    </>
  )
);

export { Select };
