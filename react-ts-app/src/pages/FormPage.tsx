import React from "react";
import { Form } from "../components/Form/Form";
import { IEmptyProps, IFormPageState, INewCard } from "../types/types";

export class FormPage extends React.Component {
  state: IFormPageState;

  constructor(props: IEmptyProps) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  renderCards = (newCard: INewCard) => {
    console.log("new card created using state!")
  };

  render(): React.ReactNode {
    return (
      <>
        <h1>Your Favourite Book</h1>
        <Form renderCards={this.renderCards} />
      </>
    );
  }
}
