import React from 'react';
import Header from './components/Header';
import Todos from './components/todos';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Todos />
    </div>
  )
}

export default App;
