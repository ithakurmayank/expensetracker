import { createContext } from "react";


const intialList =  [
    {
        text:'Cash',
        amount: 500
    },
    {
        text:"Book",
        amount:-40
    },
    {
        text:"Camera",
        amount:-200
    },
];
export const StateContext = createContext(intialList);

export const DataContext = createContext(0);