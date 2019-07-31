import React from 'react';
import styled from 'styled-components';
import { useCounter } from './useCounter';

const StyledCounter = styled.div`
  display: flex;
  flex: 1;
`;

const Count = styled.div`
  color: orange;
  font-size: 20px;
`;

const Button = styled.button`
  margin-left: 15px;
  color: orange;
  border: 2px solid orange;
  background-color: white;
`;

export function Counter({ name }) {
  const { isLoading, count, increment, decrement } = useCounter(name);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <StyledCounter>
      <Count>{count}</Count>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </StyledCounter>
  );
}
