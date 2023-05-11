import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

//this page showing all the task

function Home() {
  //first we need an array to store all the tasks 
  //by using the addTodo function, we will update the todos 
  //since todos is more than 1, so an array is needed
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    //todo is the props that pass to this components
    if(!todo.content || /^\s*$/.test(todo.content)){
      return
    }

    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const removeTodo = id => {
    //we can just call ...todos to get the existing todo
    //when I call this function, it will get the paras of removeTodo from Todo
    //then we can call the filter function and save it in another array

    const remainingArr = [...todos].filter(
      //since we are using todos.filter to loop through the todos and leave the value that fit the condition
      todo => todo.id !== id 
    )
    setTodos(remainingArr);
  }

  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo
    })
    setTodos(updateTodos)
  }

  return (
    <div>
      <h2>All task lists</h2>
      <TodoForm onSubmit={addTodo}/>
      <Todo 
      todos={todos}
      removeTodo={removeTodo}
      completeTodo={completeTodo}
      />
    </div>
  )
}

export default Home