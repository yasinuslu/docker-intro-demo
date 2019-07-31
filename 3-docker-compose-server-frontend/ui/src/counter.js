import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinusSquare,
  faPlusSquare,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { useCounter } from './useCounter';

const StyledCounter = styled.div`
  display: flex;
  flex: 1;
  font-size: 80px;
  justify-content: center;
  align-items: center;
`;

const Count = styled.div`
  color: #ff6e00;
  margin-left: 10px;
  font-style: bold;
`;

const StyledButton = styled.button`
  margin-left: 10px;
  color: #ff6e00;
  border: 0px;
  background-color: white;
  font-size: 80px;
`;

function Button({ disabled, onClick, icon }) {
  return (
    <StyledButton disabled={disabled} onClick={disabled ? undefined : onClick}>
      <FontAwesomeIcon icon={icon} />
    </StyledButton>
  );
}

export function Counter({ name }) {
  const { isLoading, count, increment, decrement } = useCounter(name);

  return (
    <StyledCounter>
      <Button disabled={isLoading} onClick={decrement} icon={faMinusSquare} />
      <Count>
        {isLoading ? <FontAwesomeIcon spin icon={faCircleNotch} /> : count}
      </Count>
      <Button disabled={isLoading} onClick={increment} icon={faPlusSquare} />
    </StyledCounter>
  );
}
