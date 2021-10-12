import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {

  const [todos, setTodos] = useState([]);

  /**
   * Function for adding todo.
   * @param {object} todo 
   * @returns 
   */
  const addTodo = (todo) => {

    if (!String(todo.text).trim()) return;
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
  }

  const updateTodo = (todoId, newValue) => {

    if (!newValue.text || /^\s*$/.test(newValue.text)) return;
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }

  const removeTodo = (id) => {

    const removeArray = todos.filter(todo => todo.id !== id);
    setTodos(removeArray);
  }

  const completeTodo = (id) => {

    let updateTodos = todos.map(todo => {
      if (todo.id === id) todo.isComplete = !todo.isComplete;
      return todo;
    });
    setTodos(updateTodos);
  };

  return (
    <>
      <h1>Plan for Today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  )
}

export default TodoList;
