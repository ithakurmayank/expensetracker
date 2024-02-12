import React, { useRef, useState } from "react";
import "./AddTransaction.css";

export default function AddTransaction({dispatch}) {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);
    let inputRef1 = useRef('');
    let inputRef2 = useRef('');


    return (
        <div id="transaction-main">
            <h3>Add new transaction</h3>  <hr />
            <form id="form">
                <label htmlFor=""> <p>Text</p> </label>
                <input type="text" ref={inputRef1} placeholder="Enter text..." onChange={(e) => setText(e.target.value)}/>
                <label htmlFor="">
                    <p>Amount <br /> (negative-expense, positive-income) </p>
                </label>
                <input type="number" ref={inputRef2} placeholder="Enter amount..." onChange={(e) => setAmount(+(e.target.value))}/>
                <button onClick={(e) => {
                    e.preventDefault();
                    dispatch({type: 'add' , text:text, amount:amount})
                    inputRef1.current.value = '';
                    inputRef2.current.value = '';
                }}>Add Transaction</button>
            </form>
        </div>
    );
}
