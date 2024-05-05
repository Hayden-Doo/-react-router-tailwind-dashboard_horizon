import React, { createContext, useReducer, useContext } from 'react';

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({ children }) {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // <TodoStateContext.Provider value={state}>
    //   <TodoDispatchContext.Provider value={dispatch}>
    //     {children}
    //   </TodoDispatchContext.Provider>
    // </TodoStateContext.Provider>
    <></>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
