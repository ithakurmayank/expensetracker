import React, { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Section({level,children}) {
    // Since context lets you read information from a component above, each Section could read  the level from the Section above, and pass level + 1 down automatically.
    // Below line allows Section to read 'level' from its parent section
    let levelFromAboveSection = useContext(LevelContext);

  return <>
    <section style={{border: '2px solid black', margin:'10px'}}>
        <LevelContext.Provider value={levelFromAboveSection + 1}>
            {children}
        </LevelContext.Provider>
    </section>
  </>;
}
