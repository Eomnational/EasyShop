import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { API } from './config';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
console.log(API);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




