import React, {useState} from 'react'


function Edit(props) {
  const [input,setInput] = useState(props.edit?props.edit.value:'');

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <div className="edit-form">
      <input type="text" value={input} name='text' className='todo-input edit' onChange={handleChange}/>
      <button className='todo-button edit'>Update</button>
    </div>
  )
}

export default Edit