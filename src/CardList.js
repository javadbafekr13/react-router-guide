// CardList.js

import React, { useState } from "react";
import Card from "./component/Card";

const CardList = () => {
  const [cards, setCards] = useState([
    {
      title: "dssdsd",
      lastName: "sdsdds",
      cardNumber: 2382893293,
      cvv2: 3283,
      date: 23233,
      email: "ksbhadbs@gmail",
    },
  ]);

  const handleDelete = (index) => {
    // Remove the card at the specified index
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card key={index} {...card} onDelete={() => handleDelete(index)} />
      ))}
    </div>
  );
};

export default CardList;
