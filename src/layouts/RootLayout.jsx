import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <nav>
                <h1>To do list</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="uncomplete">Uncomplete tasks</NavLink>
                <NavLink to="complete">Complete tasks</NavLink>
            </nav>
        </header>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout