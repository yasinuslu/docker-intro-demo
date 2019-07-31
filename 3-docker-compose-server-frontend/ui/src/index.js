import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { Counter } from './counter';

const CounterContainer = styled.div`
  display: flex;
  flex: 1;
`;

render(
  <CounterContainer>
    <Counter name="counter1" />
  </CounterContainer>,
  document.getElementById('root')
);
