import React, { useState, useReducer } from 'react';
import TodoHd from './components/TodoHd';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

const mockTodo = [
  {
    id: 1,
    isDone: false,
    task: '고양이 밥주기',
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    task: '감자 캐기',
    createdDate: new Date().getTime(),
  },
  {
    id: 3,
    isDone: false,
    task: '고양이 놀아주기',
    createdDate: new Date().getTime(),
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const Todo = () => {
  // const [todo, setTodo] = useState(mockTodo);
  const [state, dispatch] = useReducer(reducer, mockTodo);

  const addTodo = (task) => {
    const newTodo = {
      // id: state.length + 1,
      id: state.length + 1,
      isDone: false,
      task,
      createdDate: new Date().getTime(),
    };
    // setTodo([newTodo, ...todo]);
    dispatch({ type: 'ADD', payload: newTodo });
  };
  const onUpdate = (id) => {
    // setTodo(
    //   todo.map((item) => {
    //     if (item.id === id) {
    //       return { ...item, isDone: !item.isDone };
    //     }
    //     return item;
    //   })
    // );
    dispatch({ type: 'UPDATE', payload: id });
  };
  const onDelete = (id) => {
    // setTodo(todo.filter((item) => item.id !== id));
    dispatch({ type: 'DELETE', payload: id });
  };

  return (
    <div>
      <h1>
        <TodoHd />
        <TodoEditor addTodo={addTodo} />
        {/* <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} /> */}
        <TodoList todo={state} onUpdate={onUpdate} onDelete={onDelete} />
      </h1>
    </div>
  );
};

export default Todo;
