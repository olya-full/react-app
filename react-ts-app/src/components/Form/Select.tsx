import React from "react";

import "./Select.css";

export class Select extends React.Component {
  render(): React.ReactNode {
    return (
      <select name="favouriteGenre" defaultValue="choose" className="form-select">
        <option disabled value="choose">
          What is the genre of your favourite book?
        </option>
        <option value="fantasy">Fantasy</option>
        <option value="romance">Romance</option>
        <option value="detective">Detective</option>
        <option value="sci-fi">Science Fiction</option>
        <option value="other">Other</option>
      </select>
    );
  }
}
