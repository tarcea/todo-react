import React, { useContext } from 'react';
import { TodoContext } from '.././contexts/TodoContext';
import './Style.css';

const ViewTodos = () => {
  const { todos, deleteTodo, editTodo } = useContext(TodoContext);
  const handleClick = (e) => {
    const check = e.target.nextSibling.classList;
    e.target.checked ? (
      check.add("done")
    ) : (
      check.remove("done")
    )
  }

  const viewTodos = todos.map(todo => (
        <div key={todo.id}>
          <p>
            <label>
              <input type="checkbox" onClick={handleClick} id="todo-item" />
              <span style={{color: "red"}}>{todo.todo} -> {todo.who}</span>
              <button onClick={() => deleteTodo(todo.id)}
                      className="btn-flat"
                      style={{}}>delete</button>
              <button onClick={() => editTodo(todo.id)}
                      className="btn-flat"
                      style={{}}>edit</button>
            </label>
          </p>
        </div>
      ));

  return (
    <div>
    <h1>Todos</h1>
      {viewTodos}
    </div>
  );
}

export default ViewTodos;
