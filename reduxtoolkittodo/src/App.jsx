import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className='text-center py-4 px-3'>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
