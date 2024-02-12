import React, { useContext, useEffect, useState } from "react";
import "./BalanceSheet.css";
import { DataContext, StateContext } from "./StateContext";
import History from "./History";
// import { DataContext } from "./StateContext";

export default function BalanceSheet() {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    let totalBalance = income + expense;

    function onUpdate(value) {
        let income = 0;
        let expense = 0;
        value.map((transcation, index) => {
            if (transcation.amount < 0) {
                expense += transcation.amount;
            } else {
                income += transcation.amount;
            }
            setIncome(income);
            setExpense(expense);
        });
    }

    return (
        <div id="balanceDiv">
            <h3>YOUR BALANCE</h3>
            <h1>${totalBalance.toFixed(2)}</h1>
            <div id="balanceSheet">
                <div id="income">
                    <h6 id="h6color">INCOME</h6>
                    <h3> {`$ ${income.toFixed(2)}`} </h3>
                </div>
                <hr />
                <div id="expense">
                    <h6 id="h6color">EXPENSE</h6>
                    <h3>{`$ ${expense.toFixed(2)}`} </h3>
                </div>
            </div>

            <History onUpdate={onUpdate}></History>
        </div>
    );
}
