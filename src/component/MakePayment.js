
import "./Transaction.css";
import React, { useState } from 'react';
const MakePayment = () => {
  const [cards2, setCards2] = useState(
    JSON.parse(localStorage.getItem("cards2"))
  );

  const handleDeleteCard = (index) => {
    // Remove the card at the specified index
    const updatedCards2 = cards2.filter((_, i) => i !== index);
    setCards2(updatedCards2);

    // Update localStorage
    localStorage.setItem("cards2", JSON.stringify(updatedCards2));
  };
  const [paymentData, setPaymentData] = useState({
    title: "",
    lastname: "",
    cardnumber: "",
    cvv2: "",
    date: "",
    email: "",
  });
  // const [title1, setTitle1] = useState("");
  // const [lastname1, setlastname1] = useState("");
  // const [cardnumber1, setcardnumber1] = useState("");
  // const [cvv21, setcvv21] = useState("");
  // const [date1, setdate1] = useState("");
  // const [email1, setemail1] = useState("");

  const ChosingShop = (card) => {
    // setTitle1(card.title);
    // setlastname1(card.lastname);
    // setcardnumber1(card.cardnumber);
    // setcvv21(card.cvv2);
    // setdate1(card.date);
    // setemail1(card.email);
    setPaymentData(card);
  };



  return (
    <div>
      <br></br>
      <br></br>
      <br></br>

    


      <div className="banccard">
        <input
          type="text"
          placeholder="name"
          value={paymentData.title}
        
          readonly
        />
        <input
          placeholder="last  name"
          value={paymentData.lastname}
          readonly
        />
        <input
          placeholder="card number"
          value={paymentData.cardnumber}
          readonly
        />
        <input
          placeholder="cvv2"
          value={paymentData.cvv2}
          readonly
        />
        <input
          placeholder="expir date"
          value={paymentData.date}
         readonly
        />
        <input
          placeholder="email"
          value={paymentData.email}
          readonly
        />

        <button>send</button>
      </div>
    </div>
  );
};

export default MakePayment;




