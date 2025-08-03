import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Control from './components/Control'
import Graph from './components/Graph'
import CodePanel from './components/CodePanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>BIG-O CALCULATOR</h1>
      <div className='top'>
        <Control />
        <Graph />
      </div>
      <div className='bottom'>
        <CodePanel />
      </div>
    </div>
  )
}

export default App
