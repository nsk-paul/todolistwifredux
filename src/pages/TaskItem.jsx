import React from 'react'

function TaskItem(task) {
  return (
    <div>
        <input type="checkbox" checked={task.completed} onChange={handleCheckboxChange} />
        <span>{task.title}</span>
        <button>Edit</button>
    </div>
  )
}

export default TaskItem