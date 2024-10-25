import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';


const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);




