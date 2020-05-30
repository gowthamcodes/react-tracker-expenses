import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  function handleSubmit(event) {
    event.preventDefault();

    addTransaction(text, amount);
    setText("");
    setAmount(0);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            placeholder="Enter text..."
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            placeholder="Enter Amount..."
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add Transaction
        </button>
      </form>
    </>
  );
}

export default AddTransaction;
