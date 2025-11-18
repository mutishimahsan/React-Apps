import { useCallback, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState(0)
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(character) str += '`!@#$%^&*(){}?=-_'

    for(let i=1; i<= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, number, character])

  const copyBtn = () => {
    let newText = document.getElementById("passInput");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input className='outline-none w-full py-1 px-3 bg-white' id='passInput' type="text" value={password} readOnly />
          <button className='bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded-r-lg' onClick={copyBtn}>copy</button>
        </div>

        <div className='flex text-sm gap-x-2 text-white'>
          <div className='flex items-center gap-x-1'>
            <input type="range" className='cursor-pointer' min={6} max={100} value={length} onChange={(e) => {setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={number} id='numberInput' onChange={() => { setNumber((prev) => !prev) }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={character} id='characterInput' onChange={() => {setCharacter((prev) => !prev)}} />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
