import "./CreatedCards.css";
import { INewCard } from "../../types/types";

const CreatedCard = (props: INewCard) => (
  <>
    <div className="created-card-title">{props.title}</div>
    <div className="created-card-img-wrap">
      <img className="created-card-cover" alt="Book cover." src={props.cover} />
    </div>
    <div className="created-card-year">Read in {props.year}</div>
    <div className="created-card-genre">{props.genre}</div>
    <div className="created-card-popularity">{props.popularity}</div>
  </>
);

interface ICreateCardsProps {
  cards: Array<INewCard>;
}

export const CreatedCards = (props: ICreateCardsProps) => (
  <div className="created-cards">
    {props.cards.map((cardInfo, index) => {
      return (
        <div className="created-card" key={index}>
          <CreatedCard {...cardInfo} />
        </div>
      );
    })}
  </div>
);
