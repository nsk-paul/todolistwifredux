import React from 'react'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from './pages/Home';
import Uncompleted from './pages/Uncompleted';
import Completed from './pages/Completed';
import RootLayout from './layouts/RootLayout';
import TodoForm from './pages/TodoForm';
import Edit from './pages/Edit';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='uncomplete' element={<Uncompleted/>}></Route>
      <Route path='complete' element={<Completed/>}></Route>
      <Route path='todoform' element={<TodoForm/>}></Route>
      <Route path='editform' element={<Edit/>}></Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App