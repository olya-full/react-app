import React from "react";
import { IEmptyProps } from "../../types/types";

import "./TextInput.css";



export class TextInput extends React.Component<IEmptyProps>{
  constructor(props: IEmptyProps){
    super(props);

  }

  render() {
    return (

      <>
        <input
          className="form-text-input"
          type="text"
          placeholder="What's your favourite book?"
        />
        <div></div>
      </>
    );
  }
}
