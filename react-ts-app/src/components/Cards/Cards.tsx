import React from "react";
import {
  ICardsProps,
  IPhotoResponse,
  IPhotoResponseJson,
  ISearchResult,
  IUnsetMaxHeight,
} from "../../types/types";
import { apiEndpoint } from "../App/App";
import { Modal } from "../Utils/Modal/Modal";
import "./Cards.css";

const Card = (props: ISearchResult & IUnsetMaxHeight) => {
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
          className={`card-img ${props.maxheight && props.maxheight}`}
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
  const [modalInfo, setModalInfo] = React.useState({
    id: "",
    title: "",
    imageUrl: "",
  });

  const getInfoPhotoReq = async (id: string) => {
    const searchParams = {
      api_key: "4b621c2314e1aacd9186e7425c899a6b",
      format: "json",
      nojsoncallback: "1",
      method: "flickr.photos.getInfo",
      photo_id: id,
    };

    const res: IPhotoResponse = await fetch(apiEndpoint + new URLSearchParams(searchParams));
    return await res.json();
  };

  const adaptResponseToCard = (resData: IPhotoResponseJson) => {
    return {
      id: resData.photo.id,
      title: resData.photo.title._content,
      imageUrl: `https://live.staticflickr.com/${resData.photo.server}/${resData.photo.id}_${resData.photo.secret}.jpg`,
      date: resData.photo.dates.posted,
      author: resData.photo.owner.realname,
      location: resData.photo.owner.location,
    };
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    event.preventDefault();

    getInfoPhotoReq(id)
      .then((data) => adaptResponseToCard(data))
      .then((data) => {
        setModalInfo(data);
        setShowModal(true);
      });
  };

  const toggleModalDisplay = () => {
    showModal && setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal modalFunc={toggleModalDisplay}>
          <Card maxheight="unset-max-height" {...modalInfo} />
        </Modal>
      )}
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
