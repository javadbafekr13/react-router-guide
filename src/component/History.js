// History.js

import React from 'react';

const History = ({ history }) => {
  return (
    <div className="history">
      
      <ul>
        {history.map((change, index) => (
          <li key={index}>
            <p>Timestamp: {change.timestamp}</p>
            <p>Previous Title: {change.previousCard.title}</p>
            {/* Display other properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
