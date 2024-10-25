import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import createRootReducer from './reducers/index'; // 导入你的根 reducer
import { routerMiddleware } from 'connected-react-router';

export const history =createBrouseHistory()

const store = configureStore(createRootReducer(history),applyMiddleware(routerMiddleware(history))
);

export default store;
