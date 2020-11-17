import React, { useState } from 'react';
import ViewTodos from './components/ViewTodos';
import Update from './components/Update';
import TodoContextProvider from './contexts/TodoContext';

const App = () => {
  const [done, setDone] = useState(false);

  const isDone = (flag) => {
    setDone(flag)

  }

  return (
    <div className="container">
      <TodoContextProvider>
        <ViewTodos isDone={isDone} done={done} />
        <Update />
      </TodoContextProvider>
    </div>
  );
}

export default App;
