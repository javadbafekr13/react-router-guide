
import "./history.css";

// src/components/PaymentHistory.js

// import React from 'react';

// const PaymentHistory = () => {
//   // Your payment history rendering logic here
//   return (
//     <div>
//       <h2>Payment History</h2>
//       {/* Display payment history */}
//     </div>
//   );
// };

// export default PaymentHistory;


// const History =()=>{
//     return(

//         <div className="main">

//   <h4>history</h4>



//         </div>
      
//     )
// }
// export default History;


import React from 'react';

const PaymentHistory = () => {
  const paymentHistory = [
    { date: '2024-04-29', amount: 100, card: 'Visa ****1234' },
    // Add more payment objects here
  ];
  return (
    <div className="paymenthistory">
      <h2>Payment History</h2>
      <ul>
        {paymentHistory.map((payment, index) => (
          <li key={index}>
            Date: {payment.date} | Amount: ${payment.amount} | Card: {payment.card}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistory;
