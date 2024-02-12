import { useReducer, useState } from 'react';
import './App.css';
import AdminPanel from './components/AdminPanel';
import LoginForm from './components/LoginForm';
import Gallery from './image-gallery/Gallery';
import BucketList from './updating-object-inside-arrays/BucketList';
import TravelPlan from './choosing-the-state-strucuture/TravelPlan';
import Panel from './sharing-state-between-components/Panel';
import ParentDiv from './sharing-state-between-components/ParentDiv';
import Counter from './useReducer/Counter';
import Page from './useContext/useContext Example/Page';
import ForwardRef from './useRef/forwardRef/ForwardRef';
import ExpenseTracker from './12feb_test/ExpenseTracker';




function App() {


    return (
        <>
            {/* <Gallery></Gallery> */}

            {/* <BucketList/> */}

            {/* <TravelPlan></TravelPlan> */}

            {/* <ParentDiv/> */}

            {/* <Counter/> */}

            {/* <Page/>  */}

            {/* <ForwardRef/> */}


            <ExpenseTracker></ExpenseTracker>

           </>
    )




    
}

export default App;



