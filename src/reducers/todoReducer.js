import uuid from 'uuid/v1';

export const todoReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return[...state, {
        todo: action.todo.todo,
        who: action.todo.who,
        done: action.todo.done || false,
        id: uuid()
      }]
    case 'REMOVE_TODO':
      return state.filter(todo => {
      return todo.id !== action.id
    });
    case 'UPDATE_TODO':
    return state.map(
      (todo) => (todo.id === action.id ? action.todo : todo)
      )
    default:
      return state
  }
}
