import { useState } from 'react';
import React from "react";
import Panel from "./Panel";

export default function ParentDiv() {
    const [isActive, setIsActive]  = useState(0);
  return <>
    <Panel isActiveProp={isActive === 0} onShow = {() => {console.log(isActive);setIsActive(0)}} title='About'><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, incidunt! Earum perspiciatis officiis, velit repellendus unde natus perferendis? Nulla laudantium hic ea placeat itaque quas facere exercitationem laborum eius dolorum.</p></Panel>
    <Panel isActiveProp={isActive === 1} onShow = {() => {console.log(isActive);setIsActive(1)}} title='NotAbout'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugit a animi? Minus fugit ad, dolor corrupti recusandae amet necessitatibus accusantium aperiam molestiae non ab eaque omnis corporis, temporibus nesciunt.</Panel>

  </>;
}
