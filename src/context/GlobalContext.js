import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

let lastID = 0;
// initial state
const initialState = {
  transactions: [],
};

// global context
const GlobalContext = createContext(initialState);

// provider component
function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: {
        id,
      },
    });
  }

  function addTransaction(text, amount) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        id: ++lastID,
        text,
        amount: +amount,
      },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext };
export default GlobalProvider;
