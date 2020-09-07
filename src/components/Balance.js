import React, { useContext } from "react";
import { GlobalContexx } from "../context/GlobalState";

export const Balance = () => {
  //using global context
  const { transactions } = useContext(GlobalContexx);
  //amount
  const amounts = transactions.map((transaction) => transaction.amount);
  //total
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{Math.round(total)} Rs</h1>
    </>
  );
};

export default Balance;
