import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const el = document.querySelector('#root')

console.log({ el });

ReactDOM.render(<App />, el)