import React, { useState } from "react";
import "./addingcard.css";

const Adcard = ({
  cards2,
  cardslist,
  setcardslist,
  title,
  setTitle,
  lastname,
  setlastname,
  cardnumber,
  setcardnumber,
  cvv2,
  setcvv2,
  date,
  setdate,
  email,
  setemail,
  isClicked,
  setIsClicked,
  accontMoney,
  setaccontMoney,
  accontMoney2,
  setaccontMoney2,
}) => {
  const handleDeleteCard = (index) => {
    const updatedCards2 = cardslist.filter((_, i) => i !== index);
    setcardslist(updatedCards2);
  };
  const handleAddCard = () => {
    if (
      title === "" ||
      lastname === "" ||
      cardnumber === "" ||
      cvv2 === "" ||
      date === "" ||
      email === ""
    ) {
      alert("it cant be empety");
    } else {
      const cards2 = {
        title,
        lastname,
        cardnumber,
        cvv2,
        date,
        email,
        accontMoney,
      };
      setTitle("");
      setlastname("");
      setcardnumber("");
      setcvv2("");
      setdate("");
      setemail("");
      setaccontMoney("");
      setcardslist([...cardslist, cards2]);
    }
  };

  return (
    <div className="home">
      <div className="banccard">
        <input
          type="text"
          placeholder="name"
          value={title}
          onChange={(e) =>
            e.target.value.length < 17 && setTitle(e.target.value)
          }
        />
        <input
          placeholder="last  name"
          value={lastname}
          onChange={(e) =>
            e.target.value.length < 17 && setlastname(e.target.value)
          }
        />
        <input
          placeholder="card number"
          type="number"
          id="cardnumber"
          value={cardnumber}
          onChange={(e) =>
            e.target.value.length < 17 && setcardnumber(e.target.value)
          }
        />
        <input
          placeholder="accont money"
          type="number"
          value={accontMoney}
          onChange={(e) => setaccontMoney(e.target.value)}
        />
        <div className="twopart">
          <input
            className="firstpart"
            type="number"
            onChange={(e) =>
              e.target.value.length < 4 && setcvv2(e.target.value)
            }
            placeholder="cvv2"
            value={cvv2}
          />
          <input
            className="firstpart"
            type="date"
            placeholder="expir date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>

        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) =>
            e.target.value.length < 24 && setemail(e.target.value)
          }
        />
        <button onClick={handleAddCard}>Sing In</button>
      </div>
    </div>
  );
};

export default Adcard;
