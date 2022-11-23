import React, { useState } from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {


   const [counter, setCounter] = useState(0);

   const incrementCounter = useCallback(
      (value) => {
         setCounter(counter => (counter + value));
      },
      [],
   )

   useEffect(() => {
   //   incrementCounter();
   }, [incrementCounter])
   

   // const incrementCounter = ()=> {
   //    setCounter(counter + 1);
   // }

   return (
      <>
         <h1>UseCallback Hook: {counter}</h1>
         <ShowIncrement increment={incrementCounter} />
      </>
   )
}