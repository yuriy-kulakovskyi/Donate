import React, { useState } from 'react';

const buttons = [
  100,
  500,
  1000
];

const SetPrice = () => {
  let [count, setCount] = useState(0);

  const add = (e) => {
    setCount(count + parseFloat(e.target.innerText));
  }

  return (
    <div className='setPrice'>
      {/* Input to hold price */}
      <input 
        type="text" 
        className='setPrice__input'
        value={count + "$"}
        onChange={null}
      />

      {/* Quick donate buttons */}
      <div className="setPrice__row">
        {buttons.map(button => {
          return <button className='setPrice__row__button' onClick={add}>{button}</button>
        })}
      </div>
    </div>
  );
}

export default SetPrice;
