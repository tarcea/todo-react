import React, {createContext, useState, useReducer, useEffect } from 'react';
import { todoReducer } from '../reducers/todoReducer';
//import uuid from 'uuid/v1';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : []
  });
  // flag to show if one todo is in edit mode
  const [editMode, setMode] = useState(false);
  // selected todo for editing
  const [toEdit, setTo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const editTodo = (id) => {
    const newTodos = todos.filter(todo => {
      return id === todo.id
    });
    setMode(true);
    setTo(newTodos[0])
  }

  const cancel = () => {
    setMode(false);
  }



  return (
    <TodoContext.Provider
      value={
        { todos, editTodo, editMode,
          toEdit, cancel, dispatch, setTo
        }
      }>
      {props.children}
    </TodoContext.Provider>
  );

}

export default TodoContextProvider;
