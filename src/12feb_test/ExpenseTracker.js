import React from "react";
import './ExpenseTracker.css';
// import BalanceSheet from "./BalanceSheet";
import History from "./History";
import BalanceSheet from "./BalanceSheet";
import { StateContext } from "./StateContext";
import { useContext } from "react";

export default function ExpenseTracker() {
    let stateContext = useContext(StateContext);



  return (
    <div id="main">
        <h1>Expense Tracker</h1>
        <StateContext.Provider value={stateContext}></StateContext.Provider>
        <BalanceSheet/>
    </div>
  )
}
