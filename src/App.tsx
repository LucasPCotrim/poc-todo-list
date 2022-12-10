import React from 'react';
import GlobalStyle from './global/GlobalStyle';
import HomePage from './components/HomePage/HomePage';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <>
      <GlobalStyle />
      <HomePage>
        <TodoList data-testid='todo-list' />
      </HomePage>
    </>
  );
}

export default App;

