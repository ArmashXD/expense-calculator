//Context is designed to share data that can be considered “global” for a tree of React components
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  transactions: [],
};

//Create context

export const GlobalContexx = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContexx.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContexx.Provider>
  );
};
