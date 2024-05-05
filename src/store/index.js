import todoReducer from './reducers/todoReducer';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  todo: todoReducer,
  // cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
