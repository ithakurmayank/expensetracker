import React, { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery() {
    const [index,setIndex] = useState(0);
    let sculpture = sculptureList[index];
    let [showDet,setShowDet] = useState(false);

    function handleOnClick(){
        index < sculptureList.length -1 ? setIndex(index+1) : setIndex(0);
    }

    function showDetails(){
        setShowDet(!showDet);
    }

  return (
    <>
        <button onClick={handleOnClick}>Next</button>
        <h3>{sculpture.name}</h3>
        <p>( {index+1} of {sculptureList.length} )</p>
        <button onClick={showDetails}>Show Details</button> 
        <p>{showDet && sculpture.description}</p>
        <img src={sculpture.url} alt={sculpture.alt} style={{height:'100px', width:"100px"}} />
    </>
  )
}
