import React from 'react';
import { render } from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Counter } from './counter';

const CounterContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`;

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

render(
  <CounterContainer>
    <GlobalStyle />
    <Counter name="counter1" />
    <Counter name="counter2" />
    <Counter name="counter3" />
  </CounterContainer>,
  document.getElementById('root')
);
