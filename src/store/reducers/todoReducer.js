import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/todoAction';

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

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
