import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-green-400 p-4 rounded-xl'>Tailwind Test</h2>

      <Card title="Card 1" btnText="Click Me!"/>
      <Card title="Card 2" btnText="Visit Me!"/>
    </>
  )
}

export default App
