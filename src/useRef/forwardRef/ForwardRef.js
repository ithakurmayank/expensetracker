// Here forwardRef is used because  React does not let a component access the DOM nodes of other components. Not even for its own children!. 
// That's why forwardRef is used.

import SearchButton from './SearchButton.js';
import {SearchInput} from './SearchInput.js';
import {useRef} from 'react';

export default function ForwardRef() {
  const ref = useRef(0);
  function handleClick(){
    ref.current.focus();
  }
  
  return (
    <>
      <nav>
        <SearchButton toHandleClick={handleClick} />
      </nav>
      <SearchInput ref={ref} />
    </>
  );
}
