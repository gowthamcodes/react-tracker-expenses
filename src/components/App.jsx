import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionHistory from "./TransactionHistory";
import AddTransaction from "./AddTransaction";
import GlobalProvider from "../context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
