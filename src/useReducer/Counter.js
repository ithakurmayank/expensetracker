import React, { useReducer } from "react";

export default function Counter() {
    const [state,dispatch] = useReducer(reducer,0);
    console.log(state)
  return <>
    <p>{state}</p>
    <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
    <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>

  </>;
}



function reducer(state,action){
    if(action.type === 'increment'){
        return state + 1;
    }
    else{
        return state -= 1;
    }
    return state;
}

