import { v4 as uuidv4 } from 'uuid';

export const todoReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return[...state, {
        todo: action.todo.todo,
        who: action.todo.who,
        done: false,
        id: uuidv4()
      }]

    case 'REMOVE_TODO':
      return state.filter(todo => {
      return todo.id !== action.id
    });

    case 'UPDATE_TODO':
      return state.map(
        (todo) => (todo.id === action.id ? action.todo : todo)
        )

    case 'DONE':
      return state.map(
        (todo) => (todo.id === action.id ?
         {...action.todo, done:!todo.done} : todo))

    default:
      return state
  }
}
