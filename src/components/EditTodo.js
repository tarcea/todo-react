import React, { useState, useContext } from 'react';
import { TodoContext } from '.././contexts/TodoContext';
//import  { Redirect } from 'react-router-dom'

const EditTodo = () => {
const { toEdit, dispatch, cancel } = useContext(TodoContext);
const [todo, setTodo] = useState(toEdit);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'UPDATE_TODO', id: todo.id, todo: todo});
    setTodo({todo: "", who: ""});
    cancel();
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setTodo({...todo, [e.target.name]: value})

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
               name="todo"
               onChange={handleChange}
               value={todo.todo}
        />
        <input type="text"
               name="who"
               onChange={handleChange}
               value={todo.who}
        />
        <button className="waves-effect waves-light btn-small">
          update
        </button>
        <button className="waves-effect waves-light btn-small"
                style={{marginLeft: "30px"}}
                onClick={cancel} >cancel
        </button>
      </form>
    </div>
  );
}

export default EditTodo;
