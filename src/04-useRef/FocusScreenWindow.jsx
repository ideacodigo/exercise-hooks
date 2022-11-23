import React from 'react'
import { useRef } from 'react';

export const FocusScreenWindow = () => {

   const inputRef = useRef();

   const handleOnClick = ()=> {
      inputRef.current.select();
   }

   return (
      <>
         <h1>Focus Screen</h1>
         <hr />

         <input 
         ref={inputRef}
         type='text' className='form-control' />
         <button className='btn btn-primary mt-3' onClick={handleOnClick}>Focus Input</button>
      </>
   )
}
