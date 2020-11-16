import React, { useContext } from 'react';
import { TodoContext } from '.././contexts/TodoContext';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';

const Update = () => {
  const { editMode } = useContext(TodoContext);

  return (
    <div>
      { editMode ? <EditTodo /> : <AddTodo /> }
    </div>
  );
}

export default Update;
