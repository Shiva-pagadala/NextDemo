"use client"
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div >
    
      <h1> Counter: {count}</h1>
      <button className='bg-blue-500 p-2 m-4' onClick={increment}>Increment</button>
      <button className='bg-blue-500 p-2 m-4' onClick={reset}>Reset</button>
      <button className='bg-blue-500 p-2 m-4' onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
