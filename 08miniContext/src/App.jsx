import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProivder'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>This is a Context Project!</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
