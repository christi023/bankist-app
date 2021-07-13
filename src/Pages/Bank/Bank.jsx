import React from 'react';
// Components
import Movements from '../../Components/BankMovements/Movements';
import Summary from '../../Components/BankSummary/Summary';
import Transfers from '../../Components/BankTransfers/Transfers';
import Loan from '../../Components/BankLoan/Loan';
import Close from '../../Components/CloseAccount/Close';

// style
import './Bank.css';

const Bank = () => {
  return (
    <>
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
        <Movements />
        <Summary />
        <Transfers />
        <Loan />
        <Close />

        <p className="logout-timer">
          You will be logged out in <span class="timer">05:00</span>
        </p>
      </main>
    </>
  );
};

export default Bank;
