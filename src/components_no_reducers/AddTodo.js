import React, { useState, useContext } from 'react';
import { TodoContext } from '.././contexts/TodoContext';

const AddTodo = () => {
  const { newTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState(
      {todo: "", who: ""}
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    newTodo(todo);
    setTodo({todo: "", who: ""});
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setTodo({...todo, [e.target.id]: value});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
               placeholder="todo"
               id="todo"
               onChange={handleChange}
               value={todo.todo}
        />
        <input type="text"
               placeholder="who"
               id="who"
               onChange={handleChange}
               value={todo.who}
        />
        <button className="waves-effect waves-light btn-small">
          addTODO
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
