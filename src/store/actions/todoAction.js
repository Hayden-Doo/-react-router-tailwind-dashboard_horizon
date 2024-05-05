export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (task) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      isDone: false,
      task,
      createdDate: new Date().getTime(),
    },
  };
};

export const onUpdate = (id) => ({
  type: UPDATE_TODO,
  payload: id,
});

export const onDelete = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
