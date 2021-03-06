import React, { useContext } from 'react';
import { TodoContext } from '.././contexts/TodoContext';
import './Style.css';

const ViewTodos = () => {
  const { todos, editTodo, dispatch } = useContext(TodoContext);

  const handleClick = (e, todo) => {
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
              <input type="checkbox"
                     id="done"
                     onClick={handleClick}
                     onChange={()=> dispatch({type: 'DONE', id: todo.id, todo: todo})}
              />
              <span style={{color: "red"}}>{todo.todo} -> {todo.who}</span>
              <button onClick={() => dispatch({
                type: 'REMOVE_TODO', id: todo.id
              })}
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
