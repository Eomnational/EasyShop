import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // 你可以引入全局样式

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




