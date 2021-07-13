import React from 'react';
// style
import './Bank.css';

const Bank = () => {
  return (
    <main className="main-bank">
      <div className="balance">
        <div>
          <p className="balance__label">Current Balance</p>
          <p className="balance__date">
            As of <span className="date">05/03/2037</span>
          </p>
        </div>
        <p className="balance__value">0000€</p>
      </div>
    </main>
  );
};

export default Bank;
