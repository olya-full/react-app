import { IBook } from "../../types/types";
import books from "../../../books";
import "./Cards.css";

const Card = (props: IBook) => (
  <>
    <div className="card-img-wrap">
      <img className="card-img" alt="Book cover." src={props.img} />
    </div>
    <div className="card-title">{props.title}</div>
    <div className="card-author">Author: {props.author}</div>
    <div className="card-year">{props.year}</div>
    <div className="card-genre">Genre: {props.genre}</div>
  </>
);

export const Cards = () => (
  <div className="cards">
    {books.map((card, index) => {
      return (
        <div className="card" key={index}>
          <Card {...card} />
        </div>
      );
    })}
  </div>
);
