import { ICardsProps, ISearchResult } from "../../types/types";
import "./Cards.css";

const Card = (props: ISearchResult) => {
  const date = props.date
    ? new Date(props.date * 1000).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <>
      <div className="card-title">{props.title}</div>
      <div className="card-img-wrap">
        <img className="card-img" alt="Picture." src={props.imageUrl} />
      </div>
      <div className="card-date">Picture taken on {date && date}</div>
      <div className="card-author">By {props.author}</div>
      <div className="card-location">At {props.location}</div>
    </>
  );
};

export const Cards = (props: ICardsProps) => (
  <div className="cards">
    {props.images.map((card) => {
      return (
        <div className="card" key={card.id}>
          <Card {...card} />
        </div>
      );
    })}
  </div>
);
