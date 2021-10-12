import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (e) =>{
        setInput(e.target.value);

    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');
    };

    const ChangeButton = (button) =>{
        return ( 
        <><input 
        className = "todo-input" 
        type = 'text' 
        placeholder = 'Add a todo' 
        value = {input} 
        name = 'text' 
        onChange = {handleChange}
        ref = {inputRef}
        />
        <button 
            className = "todo-button" 
            onClick = {handleSubmit}
        >
            {button}
        </button>
    </>
        )
       
    }

    return (
        <form className = "todo-form" onSubmit = {handleSubmit}>
            { props.edit ? ChangeButton('Update') : ChangeButton('Add') }
           
        </form>
    );
};

export default TodoForm;
