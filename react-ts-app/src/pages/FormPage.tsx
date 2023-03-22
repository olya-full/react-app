import React from "react";
import { Form } from "../components/Form/Form";

export class FormPage extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h1>Your Favourite Book</h1>
        <Form />
      </>
    );
  }
}
