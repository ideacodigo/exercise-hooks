import React, { useState } from 'react';

export const CounterApp = () => {

   const [{ counter_1, counter_2, counter_3 }, setCounter] = useState({
      counter_1: 10,
      counter_2: 20,
      counter_3: 30,
   });

   return (


      <>
         <h1>Counter one: {counter_1}</h1>
         <h1>Counter two: {counter_2}</h1>
         <h1>Counter three: {counter_3}</h1>
         <hr />
         <button className='btn btn-primary' onClick={() => { setCounter(state => ({ ...state, counter_1: counter_1 + 1 })) }}>+ 1</button>
         <span className='mx-3'>|</span>
         <button className='btn btn-warning'>- 1</button>
      </>
   )
}
