import React, { useContext, useEffect, useReducer, useState } from "react";
import AddTransaction from "./AddTransaction";
import './History.css';
import { StateContext } from "./StateContext";

export default function History({onUpdate}) {

    const initialList = useContext(StateContext);
    const [state, dispatch] = useReducer(reducer, initialList);
    onUpdate(state);

    return (
        <div id="history-main">
            <h4>HISTORY</h4> <hr />
                {state.map((transcation,index) => {
                    return <li key={index}>
                        <p>{transcation.text}</p>
                        <p>{transcation.amount < 0 ? transcation.amount : '+' + transcation.amount}</p>
                    </li>
                }
                )}


            <AddTransaction state={state} dispatch={dispatch}></AddTransaction>
        </div>
    );
}

function reducer(state, action) {
    if (action.type === "add") {
        let newState = [...state,{ text:action.text, amount:action.amount }]
        return newState;
    }
}
