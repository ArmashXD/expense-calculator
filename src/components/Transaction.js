import React, { useContext } from "react";
import { GlobalContexx } from "../context/GlobalState";

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContexx);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li
      key={transaction.id}
      className={transaction.amount < 0 ? "minus" : "plus"}
    >
      {transaction.text}
      <span>
        {sign} {Math.abs(transaction.amount)}Rs
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        {" "}
        X
      </button>
    </li>
  );
}

export default Transaction;
