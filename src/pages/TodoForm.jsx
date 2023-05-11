import React, { useState } from 'react'
import {v4 as uuid} from 'uuid';

//in this components, it used to add the task content to the form

function TodoForm(props) {
    //first of all, we need a value to keep track of the value changes of input form
    const [input, setInput] = useState("")

    const handleChange = event => {
        setInput(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();

        const unique_id = uuid();
        const small_id = unique_id.slice(0,8);

        props.onSubmit({
            id: small_id,
            content: input
        });

        setInput("");

        //when the form submit, it will pass to the list, 

    };

    //after the state can be update, now we need to submit the form

    return   (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input type="text" className="todo-input" placeholder='Add a task to do' name='content' onChange={handleChange} value={input} />
                <button className="todo-button">Add a task</button>
            </form>
        </div>
    )
}

export default TodoForm