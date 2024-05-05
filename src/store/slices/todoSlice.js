import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
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
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
