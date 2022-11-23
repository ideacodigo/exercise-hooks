import React from 'react'
import { useCounter, useFetch } from '../hooks/';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {

   const { counter, increment } = useCounter(1);

   const { data, isLoading } = useFetch('https://www.breakingbadapi.com/api/quotes/' + counter);

   const { author, quote } = !!data && data[0];

   return (
      <>
         <div>Breaking bad quotes </div>
         <hr />
         {
            (isLoading)
               ? (
                  <LoadingQuote />
               ) : (
                  <Quote quote={quote} author={author} />
               )
         }

         <button className='btn btn-primary'
            disabled={isLoading}
            onClick={() => { increment() }}>Next quote</button>
      </>
   )
}
