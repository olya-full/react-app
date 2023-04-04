import React from "react";

import { CreatedCards } from "../components/CreatedCards/CreatedCards";
import { Form } from "../components/Form/Form";
import { PopUp } from "../components/Utils/PopUp/PopUp";
import { INewCard } from "../types/types";

export const FormPage = () => {
  const [cards, setCards] = React.useState<INewCard[]>([]);
  const [showPopup, setShowPopup] = React.useState(false);

  const togglePopup = () => {
    if (showPopup === true) {
      setTimeout(() => {
        setShowPopup(false);
      }, 1500);
    }
  };

  const renderCards = (newCard: INewCard) => {
    setCards([...cards, newCard]);
    setShowPopup(true);
  };

  return (
    <>
      <h1>Your Favourite Book</h1>
      <Form renderCards={renderCards} />
      {showPopup && <PopUp popUpText="Your input has beed saved!" popUpFunc={togglePopup} />}
      <CreatedCards cards={cards} />
    </>
  );
};
