import React, { useState } from "react";
import './aboat.css';
const About = () => {
  // Retrieve cards from localStorage
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) 
  );

  const handleDeleteCard = (index) => {
    // Remove the card at the specified index
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);

    // Update localStorage
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };

  return (
    <div className="">
      <h1>About Page</h1>
      <div className="cards">
        {cards.map((card, index) => (
          <div className="cardResult" key={index}>
            <div className="names">
              {" "}
              <h3>name:</h3>
              <h3>{card.title}</h3>
            </div>
            <div className="names">
              {" "}
              <p>last name:</p>
              <p>{card.content}</p>
            </div>

            <button onClick={() => handleDeleteCard(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
