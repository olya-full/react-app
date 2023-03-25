import React from "react";
import { CreatedCards } from "../components/CreatedCards/CreatedCards";
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
    this.setState({
      cards: [...this.state.cards, newCard],
    });
  };

  render(): React.ReactNode {
    return (
      <>
        <h1>Your Favourite Book</h1>
        <Form renderCards={this.renderCards} />
        <CreatedCards cards={this.state.cards} />
      </>
    );
  }
}
