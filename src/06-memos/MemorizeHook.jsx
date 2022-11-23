import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';

const heavyStuff = (iterationNumber = 100) => {

   for (let index = 0; index < iterationNumber; index++) {
      console.log('Come on');

   }

   return `${iterationNumber} made`;

}

export const MemorizeHook = () => {

   const { counter, increment } = useCounter(500);
   const [show, setShow] = useState(false);

   const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

   return (
      <>
         <h1>Counter: <small>{counter}</small></h1>
         <hr />

         <h4>
            {memorizedValue}
         </h4>

         <button className='btn btn-primary' onClick={() => { increment(1) }}>
            +1
         </button>

         <button className='btn btn-outline-primary mx-3' onClick={() => { setShow(!show) }}>

            Show/Hide {JSON.stringify(show)}

         </button>
      </>
   )
}
