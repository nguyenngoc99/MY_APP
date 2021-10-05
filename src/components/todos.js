import React, {Fragment, useState} from  "react";
import TodoItem from "./todoItem";
import AddTodo from "./addTodo";

const Todos = () => {
    const [todosState, setTodosState] = useState ([
        {
            id: 1,
            title: 'Việc 1',
            complete: true
        },

        {
            id: 2,
            title: 'Việc 2',
            complete: false
        },

        {
            id: 3,
            title: 'Việc 3',
            complete: false
        }

    ]);

    const markComplete = id => {
        const newTodos = todosState.map(todo => {
            if (todo.id === id) todo.complete = !todo.complete
            return todo
        })

        setTodosState(newTodos)
    }

    const deleteTodo = id => {
        const newTodos = todosState.filter(todo => todo.id !== id)
        setTodosState(newTodos)
    }


    const allTodos = [];

    for (let todo of todosState) {
        allTodos.push(<p>{todo}</p>)
    }

    return (
        <Fragment>
            <AddTodo/>
            {todosState.map(todo => {
                return (
                <TodoItem 
                    key = {todo.id} 
                    todoProps = {todo} 
                    markCompleteFunc = {markComplete}
                    deleteTodoFunc = {deleteTodo} />
                )
            })}
        </Fragment>
    )
}

export default Todos;