import React from "react";
import { ICardsProps, ISearchResult, IUnsetMaxHeight } from "../../types/types";
import { Modal } from "../Utils/Modal/Modal";
import "./Cards.css";

export const Card = (props: ISearchResult & IUnsetMaxHeight) => {
  const date = props.date
    ? new Date(+props.date * 1000).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <>
      <div className="card-title">{props.title || "Unnamed Picture"}</div>
      <div className="card-img-wrap">
        <img
          className={`card-img${props.maxheight ? " " + props.maxheight : ""}`}
          alt="Picture."
          src={props.imageUrl}
        />
      </div>
      {date && <div className="card-date">Picture posted on {date && date}</div>}
      {props.author && <div className="card-author">By {props.author}</div>}
      {props.location && <div className="card-location">At {props.location}</div>}
    </>
  );
};

export const Cards = (props: ICardsProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState("");

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    event.preventDefault();
    setModalInfo(id);
    setShowModal(true);
  };

  const toggleModalDisplay = () => {
    showModal && setShowModal(false);
  };

  return (
    <>
      {showModal && <Modal modalFunc={toggleModalDisplay} id={modalInfo} />}
      <div className="cards">
        {props.images.map((card) => {
          return (
            <div className="card" key={card.id} onClick={(event) => handleClick(event, card.id)}>
              <Card {...card} />
            </div>
          );
        })}
      </div>
    </>
  );
};
