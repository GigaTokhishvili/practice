import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount(Math.floor(Math.random() * 700))}>
          get rand
        </button>
      </div>
    </>
  )
}

export default App
