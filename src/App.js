import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./component/Card";
import "./component/list.css";
import MakePayment from "./component/MakePayment";
// Import your Card, UpdateCard, and History components here
// import Card from './component/Card'; // Assuming you have a Card component
import History from "./component/History"; // Assuming you have a History component
import Header from "./header";
import "./index.css";
import Foter from "./foooter";
import CardList from "./CardList";
import UpdateCard from "./component/UpdateCard";
import Adcard from "./component/AddCard";

const App = () => {
  const [cardslist, setcardslist] = useState([]);
  const [title, setTitle] = useState("");
  const [lastname, setlastname] = useState("");
  const [cardnumber, setcardnumber] = useState("");
  const [cvv2, setcvv2] = useState("");
  const [date, setdate] = useState("");
  const [email, setemail] = useState("");

  const [title2, setTitle2] = useState("");
  const [lastname2, setlastname2] = useState("");
  const [cardnumber2, setcardnumber2] = useState("");
  const [cvv22, setcvv22] = useState("");
  const [date2, setdate2] = useState("");
  const [email2, setemail2] = useState("");

  const [accontMoney, setaccontMoney] = useState("");
  const [accontMoney2, setaccontMoney2] = useState("");

  const [isClicked, setIsClicked] = useState(false);
  const [cards2, setCards2] = useState([]);
  const [cardforupdate, setcardforupdate] = useState({});
  const [cardforupdate2, setcardforupdate2] = useState([]);
  const handleCardUpdate = (index, updatedCard) => {
    // Update the card at the specified index
    const updatedCards = cardslist.map((cards2, i) =>
      i === index ? updatedCard : cards2
    );
    setcardslist(updatedCards); // Update the state with the modified cards array
  };

  const handleDeleteCard = (index) => {
    const updatedCards2 = cardslist.filter((_, i) => i !== index);
    setcardslist(updatedCards2);
  };
  // Assuming you have a history array with appropriate properties
  const cardChangeHistory = [
    {
      timestamp: "2022-05-01 10:30 AM",
      previousCard: { title: "Card 1" /* other properties */ },
    },
  ];
  const handleClick = (index) => {
    const selectedCard = cardslist[index];
    if (selectedCard) {
      setTitle2(selectedCard.title);
      setlastname2(selectedCard.lastname);
      setcardnumber2(selectedCard.cardnumber);
      setdate2(selectedCard.date);
      setemail2(selectedCard.email);
      setcvv22(selectedCard.cvv2);
      setaccontMoney2(selectedCard.accontMoney);
    }
  };

  return (
    <main>
      <div className="app">
        <Header />
        <div className="cards2">
          {cardslist.map((cards2, index) => (
            <div
              onClick={() => handleClick(index)}
              className="cardResult"
              key={index}
            >
              <div className="names">
                {" "}
                <h3>name:</h3>
                <h3>{cards2.title}</h3>
              </div>

              <div className="names">
                {" "}
                <p>lastname:</p>
                <p>{cards2.lastname}</p>
              </div>

              <div className="names">
                {" "}
                <p>cardnumber:</p>
                <p>{cards2.cardnumber}</p>
              </div>
              <div className="names">
                {""}
                <p>accont values:</p>
                <p>{cards2.accontMoney}</p>
              </div>
              <div className="names">
                {" "}
                <p>cvv2:</p>
                <p>{cards2.cvv2}</p>
              </div>

              <div className="names">
                {" "}
                <p>date:</p>
                <p>{cards2.date}</p>
              </div>

              <div className="names">
                {" "}
                <p>email:</p>
                <p>{cards2.email}</p>
              </div>
              <button onClick={() => handleDeleteCard(index)}>Delete</button>
            </div>
          ))}
        </div>
        <Routes>
          <Route
            path="/UpdateCard"
            element={
              <UpdateCard
                accontMoney2={accontMoney2}
                setaccontMoney2={setaccontMoney2}
                accontMoney={accontMoney}
                setaccontMoney={setaccontMoney}
                cardslist={cardslist}
                setcardslist={setcardslist}
                cardnumber={cardnumber}
                cvv2={cvv2}
                date={date}
                email={email}
                lastname={lastname}
                setTitle={setTitle}
                setcardnumber={setcardnumber}
                setcvv2={setcvv2}
                setdate={setdate}
                setemail={setemail}
                setlastname={setlastname}
                title={title}
                cards2={cards2}
                cardforupdate2={cardforupdate2}
                onUpdate={handleCardUpdate}
                title2={title2}
                setTitle2={setTitle2}
                setlastname2={setlastname2}
                lastname2={lastname2}
                cardnumber2={cardnumber2}
                setcardnumber2={setcardnumber2}
                cvv22={cvv22}
                setcvv22={cvv22}
                date2={date2}
                setdate2={setdate2}
                email2={email2}
                setemail2={setemail2}
              />
            }
          />

          {/* <Route
            path="/Addcard"
            element={
              <Adcard
              h={h}
              seth={seth}
              accontMoney2={accontMoney2}
              setaccontMoney2={setaccontMoney2}
              
                cardslist={cardslist}
                cards2={cards2}
                setcardslist={setcardslist}
                cardnumber={cardnumber}
                cvv2={cvv2}
                date={date}
                email={email}
                lastname={lastname}
                setTitle={setTitle}
                setcardnumber={setcardnumber}
                setcvv2={setcvv2}
                setdate={setdate}
                setemail={setemail}
                setlastname={setlastname}
                title={title}
                onUpdate={handleCardUpdate}
                isClicked={isClicked}
                setisClicked={setIsClicked}
              />
            }
          /> */}
          <Route
            path="/History"
            element={<History history={cardChangeHistory} />}
          />
          <Route
            path="/transection"
            element={<MakePayment history={cardChangeHistory} />}
          />
          <Route
            path="/add-card"
            element={
              <Adcard
                accontMoney={accontMoney}
                setaccontMoney={setaccontMoney}
                accontMoney2={accontMoney2}
                setaccontMoney2={setaccontMoney2}
                cardslist={cardslist}
                cards2={cards2}
                setcardslist={setcardslist}
                cardnumber={cardnumber}
                cvv2={cvv2}
                date={date}
                email={email}
                lastname={lastname}
                setTitle={setTitle}
                setcardnumber={setcardnumber}
                setcvv2={setcvv2}
                setdate={setdate}
                setemail={setemail}
                setlastname={setlastname}
                title={title}
                onUpdate={handleCardUpdate}
                isClicked={isClicked}
                setisClicked={setIsClicked}
              />
            }
          />
        </Routes>
        <Foter />
      </div>
    </main>
  );
};

export default App;
