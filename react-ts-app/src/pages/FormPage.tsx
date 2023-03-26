import React from "react";

import { CreatedCards } from "../components/CreatedCards/CreatedCards";
import { Form } from "../components/Form/Form";
import { PopUp } from "../components/Utils/PopUp/PopUp";
import { IEmptyProps, IFormPageState, INewCard } from "../types/types";

export class FormPage extends React.Component {
  state: IFormPageState;

  constructor(props: IEmptyProps) {
    super(props);
    this.state = {
      cards: [],
      showPopup: false,
    };
  }

  togglePopup = () => {
    if (this.state.showPopup === true) {
      setTimeout(() => {
        this.setState({
          showPopup: false,
        });
      }, 1500);
    }
  };

  renderCards = (newCard: INewCard) => {
    this.setState({
      cards: [...this.state.cards, newCard],
      showPopup: true,
    });
  };

  render(): React.ReactNode {
    return (
      <>
        <h1>Your Favourite Book</h1>
        <Form renderCards={this.renderCards} />
        {this.state.showPopup ? (
          <PopUp popUpText="Your input has beed saved!" popUpFunc={this.togglePopup} />
        ) : null}
        <CreatedCards cards={this.state.cards} />
      </>
    );
  }
}
