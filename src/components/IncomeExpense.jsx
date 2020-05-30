import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, value) => (acc += value), 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter((amount) => amount < 0)
      .reduce((acc, value) => (acc += value), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div className="">
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>

      <div className="">
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
