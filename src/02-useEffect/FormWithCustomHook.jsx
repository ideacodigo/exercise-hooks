import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

   const { userName, email, password, onInputChange, onClickReset } = useForm({
      userName:   'myUserName',
      email:      'emailTest@gmail.com',
      password:   '*****'
   });

   return (
      <>

         <h1>
            Form with custom hook
         </h1>

         <span className=''><hr /></span>

         <input type='text'
            onChange={onInputChange}
            value={userName} name='userName' className='form-control mb-3' />

         <input type='email'
            onChange={onInputChange}
            value={email} name='email' className='form-control mb-3' />

         <input type='password'
            onChange={onInputChange}
            value={password} name='password' className='form-control mb-3' />
         
         <button onClick={onClickReset} className='btn btn-primary'>Reset</button>

      </>
   )
}
