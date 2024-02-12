// In this two separate artwork lists have same intial state but when changed they act differently because of spread operator u

import React, { useState } from "react";

export default function BucketList() {
    const initialList = [
        { id: 0, title: 'Big Bellies', seen: false },
        { id: 1, title: 'Lunar Landscape', seen: false },
        { id: 2, title: 'Terracotta Army', seen: true },
    ];

    const [myList, setMyLIst] = useState(initialList);
    const [yourList, setYourList] = useState(initialList);


    
    function updateMyList(inputId,isChecked){
        let listToUpdate = [...myList];
        let listToEnter = listToUpdate.map(key => {
            if(key.id === inputId) {return {...key,seen:isChecked}}
            else{return key}
        })
        setMyLIst(listToEnter);
    }

    function updateYourList(inputId,isChecked){
        let listToUpdate = [...yourList];
        let listToEnter = listToUpdate.map(key => {
            if(key.id === inputId) {return {...key,seen:isChecked}}
            else{return key}
        })
        setYourList(listToEnter);
    }

  return( <>
    <h1>Art BucketList</h1>
    <h3>My list of art to see: </h3>
    <ItemList artwork={myList} handleToggle={updateMyList} />
    <h3>Your list of art to see: </h3>
    <ItemList artwork={yourList} handleToggle={updateYourList} />
    
  </>)
}




function ItemList({artwork, handleToggle}){
    return (
        <ul>
            {artwork.map((key) => {
                return <li key={key.id} >
                    <label>
                        <input 
                            type="checkbox" 
                            checked={key.seen}
                            onClick={(e) => handleToggle(key.id,e.target.checked)}
                        />
                        {key.title}
                    </label>
                </li>
            })}
        </ul>
    )
}