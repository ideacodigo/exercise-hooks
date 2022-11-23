import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

   const [formState, setFormState] = useState({
      userName: 'myUserName',
      email: 'emailTest@gmail.com'
   });

   const { userName, email } = formState;

   const onInputChange = ({target}) => {
      const { name, value } = target;
      setFormState({
         ...formState, [ name ]: value,
      })
   }

   useEffect(() => {
     console.log('call');
   }, []);  
   
   useEffect(() => {
     console.log('form state change');
   }, [formState]);  
   
   useEffect(() => {
     console.log('email change');
   }, [email]);  

   return (
      <>

         <h1>
            Simple form
         </h1>

         <span className=''><hr /></span>

         <input type='text'
            onChange={onInputChange}
            value={userName} name='userName' className='form-control mb-3' />
            
         <input type='email'
            onChange={onInputChange}
            value={email} name='email' className='form-control' />

            {userName === 'userAlreadyExists' && <Message />}

      </>
   )
}
