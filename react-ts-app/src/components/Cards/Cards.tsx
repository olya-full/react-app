import React from "react";

import { IBook } from "../../types/types";
import books from "../../../books";

export class Card extends React.Component<IBook> {
  constructor(props: IBook) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <>
        <div className="card-img-wrap">
          <img className="card-img" alt="Book cover." src={this.props.img} />
        </div>
        <div className="card-title">{this.props.title}</div>
        <div className="card-author">Author: {this.props.author}</div>
        <div className="card-year">{this.props.year}</div>
        <div className="card-genre">Genre: {this.props.genre}</div>
      </>
    );
  }
}

export class Cards extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="cards">
        {books.map((book, index) => {
          return (
            <div key={index}>
              <Card {...book} />
            </div>
          );
        })}
      </div>
    );
  }
}
