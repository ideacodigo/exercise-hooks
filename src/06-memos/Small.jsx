import {memo} from 'react';

export const Small = memo (({ value }) => {

   console.log('regenerate');

   return (
      <small>{value}</small>
   )
})
