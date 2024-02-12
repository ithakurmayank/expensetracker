import { useState } from 'react';
import React from "react";
import { initialTravelPlan } from './places';

export default function TravelPlan() {
    const [plan, setPlan] = useState(initialTravelPlan);
    const root = plan[0];
    const planetIds = root.childIds;
  return(
    <div>
        <h1>Places to visit:</h1>
        <ol>
            {
                planetIds.map(id => {
                    return <PlaceTree key={id} id={id} placesById = {plan} />
                })
            }
        </ol>

    </div>
  )



function PlaceTree({ id , placesById }){
    let place = placesById[id];
    let childIds = place.childIds;
    return (
        <li>
            {place}
            <ol>
                {
                    childIds.length > 0 && (
                        <ol>
                            {
                                childIds.map(key => {
                                    return <PlaceTree key={key} id={key} placesById={placesById} />
                                })
                            }
                        </ol>
                    )
                }
            </ol>
        </li>
    )

}


}