import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, value) => (acc += value), 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance}</h1>
    </>
  );
}

export default Balance;
