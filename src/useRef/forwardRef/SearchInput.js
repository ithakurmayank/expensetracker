import {forwardRef} from 'react';

export const SearchInput = forwardRef((props, something) => {
  return (
    <input ref={something}
      placeholder="Looking for something?"
    />
  ); 
});
