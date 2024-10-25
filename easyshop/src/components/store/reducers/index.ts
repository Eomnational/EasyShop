import { combineReducers } from 'redux';
import testReducer from './test.reducer'; // 假设这是你的 reducer 文件
import { connectRouter } from 'connected-react-router';
import { History } from 'history'; // 导入历史对象

const rootReducer =(history:History)=> combineReducers({
  test: testReducer,
  router: connectRouter(history), // 使用传入的 history 对象
});

export default rootReducer;

