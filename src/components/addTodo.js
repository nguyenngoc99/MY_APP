import React, {useState} from "react";
import { PropTypes } from 'prop-types';

const AddTodo = props => {

    const [title, setTitle] = useState ('')

    const addTodoFormStyle = {
        display: 'flex',

    }

    const addTodoInputStyle = {
        flex: '10',
        padding: '5px',

    }

    const addTodoSubmitStyle = {
        flex: '1'

    }

    const changeTitle = event =>{
        setTitle(event.target.value)
    }

    return (
        <form style = {addTodoFormStyle}>
            <input type = "text" name = "title" placeholder = "Thêm việc" style = {addTodoInputStyle} onChange = {changeTitle} />
            <input type = "submit" value = "thêm" style = {addTodoSubmitStyle} />
        </form>
    )
}

AddTodo.propTypes = {

}

export default AddTodo;