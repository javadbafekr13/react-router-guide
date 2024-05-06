// UpdateCard.js

import React, { useState } from "react";

const UpdateCard = ({
  accontMoney,
  setaccontMoney,
  accontMoney2,
  setaccontMoney2,
  cardslist,
  setcardslist,
  title,
  cardforupdate2,
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
  cards2,
  setemail,
  onUpdate,
  title2,
  setTitle2,
  setlastname2,
  lastname2,
  cardnumber2,
  setcardnumber2,
  cvv22,
  setcvv22,
  date2,
  setdate2,
  email2,
  setemail2,
}) => {

  const [paying, setpaying] = useState("");


  const handleSave = (accontMoney2, paying) => {
    const selectedCard = cardslist.find(
      (item) => item.cardnumber === cardnumber2
    );
    const cardIndex = cardslist.findIndex(
      (item) => item.cardnumber === cardnumber
    );
   
    if (accontMoney2 < paying) {
      alert("your money is not enough");
    } else {
      selectedCard.accontMoney= selectedCard.accontMoney - paying;
      accontMoney2= accontMoney2 - paying;
      setcardslist(cardslist);
    }
  };

  return (
    <div className="update-card">
      <div className="banccard">
        <input
          type="text"
          placeholder="name"
          value={title2}
          onChange={(e) =>
            e.target.value.length < 17 && setTitle(e.target.value)
          }
        />
        <input
          placeholder="last  name"
          value={lastname2}
          onChange={(e) =>
            e.target.value.length < 17 && setlastname(e.target.value)
          }
        />
        <input
          placeholder="card number"
          type="number"
          id="cardnumber"
          value={cardnumber2}
          onChange={(e) =>
            e.target.value.length < 17 && setcardnumber(e.target.value)
          }
        />
        <input
          placeholder="accont money"
          type="number"
          id="accontmoney"
          value={accontMoney2}
          onChange={(e) =>
            e.target.value.length < 17 && setaccontMoney2(e.target.value)
          }
        />
        <div className="twopart">
          <input
            className="firstpart"
            type="number"
            onChange={(e) =>
              e.target.value.length < 4 && setcvv2(e.target.value)
            }
            placeholder="cvv2"
            value={cvv22}
          />
          <input
            className="firstpart"
            type="date"
            placeholder="expir date"
            value={date2}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>

        <input
          type="email"
          placeholder="email"
          value={email2}
          onChange={(e) =>
            e.target.value.length < 24 && setemail(e.target.value)
          }
        />
        <input
          type="number"
          placeholder="paying"
          value={paying}
          onChange={(e) => setpaying(e.target.value)}
        />

        <button onClick={() => handleSave(paying, accontMoney2)}>save</button>
      </div>
    </div>
  );
};

export default UpdateCard;
