import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'
import { useLayoutEffect } from 'react'

export const Quote = ({ quote, author }) => {

   const pReft = useRef();

   const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

   useLayoutEffect(() => {

      const { width, height } = pReft.current.getBoundingClientRect();

      setBoxSize({
         width,
         height
      })


   }, [quote])

   return (
      <>
         <blockquote
            style={{ display: 'flex' }}
            className='blockquote text-end'>
            <p
               ref={pReft}
               className='mb-3'>{quote}</p>
            <footer className='blockquote-footer'>
               {author}
            </footer>

         </blockquote>
         <code>{JSON.stringify(boxSize)}</code>
      </>
   )
}
