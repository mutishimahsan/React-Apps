import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  const btnSky = () => {
    if(color != 'sky') {
      setColor('sky');
      document.body.style.backgroundColor = '#00ccffff'
    }
  }

  const btnRed = () => {
    if(color != 'red') {
      setColor('red');
      document.body.style.backgroundColor = 'red'
    }
  }
  
  const btnGreen = () => {
    if(color != 'green') {
      setColor('green');
      document.body.style.backgroundColor = 'green'
    }
  }

  const btnBlue = () => {
    if (color != 'blue') {
      setColor('blue');
      document.body.style.backgroundColor = 'blue'
    }
  }

  const btnGray = () => {
    if(color != 'gray') {
      setColor('gray');
      document.body.style.backgroundColor = 'gray'
    }
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200">
        <div className="flex justify-center space-x-4">
          <button onClick={btnSky} className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded-lg">
            Sky
          </button>
          <button onClick={btnRed} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg">
            Red
          </button>
          <button onClick={btnGreen} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg">
            Green
          </button>
          <button onClick={btnBlue} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
            Blue
          </button>
          <button onClick={btnGray} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg">
            Grey
          </button>
        </div>
      </div>
    </>
  )
}

export default App
