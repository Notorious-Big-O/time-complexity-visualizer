import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Control from './components/Control'
import Graph from './components/Graph'
import CodePanel from './components/CodePanel'
import { hardcodedData } from '../data'

function App() {
  const [algoSelect, setAlgoSelect] = useState(hardcodedData.bubbleSort)
  

  return (
    <div className='app'>
      <h1>BIG-O CALCULATOR</h1>
      <div className='top'>
        <Control algoSelect={algoSelect} setAlgoSelect={setAlgoSelect} />
        <Graph />
      </div>
      <div className='bottom'>
        <CodePanel algoSelect={algoSelect} />
      </div>
    </div>
  )
}

export default App
