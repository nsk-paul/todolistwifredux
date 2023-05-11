import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'

import { NavLink } from 'react-router-dom'


function Todo({todos, removeTodo, completeTodo}) {


    return todos.map((todo,index) => (
        //when the checkbox is clicked, we will update the complete state to complete/incomplete
        //if the state is complete, the check box will be checked
        //if the state is incomplete, the check box will not be checked
        <div key={todo.id} className={todo.isComplete ? 'todo-row complete': 'todo-row'}>
            <div>
                <input className='todo-checkbox' type="checkbox" onClick={()=> completeTodo(todo.id)} />
            </div>
            <div className='input-content'>
                {todo.content}
            </div>
            <div className="icons">
                <NavLink to={"editform"} >
                    <FiEdit className='edit-icon'/>
                </NavLink>
                <AiOutlineCloseCircle className='delete-icon' onClick={()=>removeTodo(todo.id)}/>
            </div>

        </div>
    ))
}

export default Todo