import React, {createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([
      {todo: "buy milk", who: "john", edit: false, id: 1},
      {todo: "walk the dog", who: "marry", edit: false, id: 2},
      {todo: "make the bed", who: "brad", edit: false, id: 3},
      {todo: "go home",who: "mulan", edit: false, id: 4}
  ]);
  // flag to show if one todo is in edit mode
  const [editMode, setMode] = useState(false);
  // selected todo for editing
  const [toEdit, setTo] = useState(null);

  const newTodo = (todo) => {
    todo.id = uuid();
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  const editTodo = (id) => {
    const newTodos = todos.filter(todo => {
      return id === todo.id
    });
    setMode(true);
    setTo(newTodos[0])
  }

  const updateTodo = (id, updatedTodo) => {
    setMode(false);
    setTodos(todos.map(
      (todo) => (todo.id === id ? updatedTodo : todo)
      )
    );
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    });
    setTodos(newTodos)
  }

  const cancel = () => {
    setMode(false);
  }

  return (
    <TodoContext.Provider
      value={
        { todos, newTodo, editTodo, editMode,
          toEdit, updateTodo, deleteTodo, cancel
        }
      }>
      {props.children}
    </TodoContext.Provider>
  );

}

export default TodoContextProvider;
