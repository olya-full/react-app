import React from "react";
import { Form } from "../components/Form/Form";
import { IEmptyProps } from "../types/types";

export interface INewCard {
  title: string;
  year: string;
  genre: string;
  popularity: string;
  cover: string;
}

interface IFormPageState {
  cards: Array<INewCard>;
}

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
