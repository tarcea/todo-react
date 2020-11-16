import React from 'react';
import ViewTodos from './components/ViewTodos';
import Update from './components/Update';
import TodoContextProvider from './contexts/TodoContext';

const App = () => {

  return (
    <div className="container">
      <TodoContextProvider>
        <ViewTodos />
        <Update />
      </TodoContextProvider>
    </div>
  );
}

export default App;
