import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementByAmount } from '../counter/counterSlice';

const buttons = [
  100,
  500,
  1000
];

const SetPrice = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='setPrice'>
      {/* Input to hold price */}
      <input 
        type="text" 
        className='setPrice__input'
        value={count + "$"}
      />

      {/* Quick donate buttons */}
      <div className="setPrice__row">
        {buttons.map((button, key) => {
          return <button key={key} className='setPrice__row__button' onClick={() => dispatch(incrementByAmount(button))}>{button}</button>
        })}
      </div>
    </div>
  );
}

export default SetPrice;
