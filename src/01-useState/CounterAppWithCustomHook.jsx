import { useCounter } from "../hooks/useCounter";

export const CounterAppWithCustomHook = () => {

   const { counter, increment, decrement, reset} = useCounter();

   return (
      <>

         <h2>
            Counter With Custom Hook: {counter}
         </h2>
         <button className='btn btn-primary' onClick={()=>increment()}>+ 1</button>
         <span className='mx-3'>|</span>
         <button className='btn btn-info' onClick={reset}>Reset</button>
         <span className='mx-3'>|</span>
         <button className='btn btn-warning' onClick={()=>decrement()}>- 1</button>

      </>
   )
}
