import React, { useContext } from "react";
import { GlobalContexx } from "../context/GlobalState";
import Transaction from "./Transaction";
function TransactionList() {
  const { transactions } = useContext(GlobalContexx);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
