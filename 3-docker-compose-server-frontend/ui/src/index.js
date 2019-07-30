import React from 'react';
import { render } from 'react-dom';
import { Counter } from './counter';

render(
  <div>
    <Counter name="counter1" />
  </div>,
  document.getElementById('root')
);
