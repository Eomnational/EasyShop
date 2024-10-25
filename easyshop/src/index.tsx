import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // 导入 Provider
import { configureStore } from '@reduxjs/toolkit'; // 导入 configureStore
import Routes from './Routes';
import rootReducer from './components/store/reducers/index'; // 导入根 reducer

// 创建 Redux store
const store = configureStore({
  reducer: rootReducer,
});

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <Routes />
    </Provider>
  </React.StrictMode>
);





