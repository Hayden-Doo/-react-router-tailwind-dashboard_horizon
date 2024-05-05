import React, { useState, useReducer } from 'react';
import TodoHd from './components/TodoHd';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';
import { TodoProvider } from '../../contexts/TodoContext';
import { Provider } from 'react-redux';
// import store from '../../store';
import todoSlice from '../../store/slices/todoSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

const Todo = () => {
  return (
    <Provider store={store}>
      <h1>
        <TodoHd />
        <TodoEditor />
        <TodoList />
      </h1>
    </Provider>
  );
};

export default Todo;
