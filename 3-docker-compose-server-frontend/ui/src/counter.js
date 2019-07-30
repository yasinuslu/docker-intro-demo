import React from 'react';
import { useCounter } from './useCounter';

export function Counter({ name }) {
  const { isLoading, count, increment, decrement } = useCounter(name);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
