import { useEffect, useState } from 'react'
import './App.css'
import Control from './components/Control'
import Graph from './components/Graph'
import CodePanel from './components/CodePanel'
import { hardcodedData } from '../data'
import bubbleSortImg from '../graph-images/bubbleSort.algo.png'
import countEvensImg from '../graph-images/countEvens.algo.png'
import sortAndRemoveDupImg from '../graph-images/sortAndRemoveDup.algo.png'

function App() {
  const [algoSelect, setAlgoSelect] = useState(hardcodedData.bubbleSort)
  const [graphMatch, setGraphMatch] = useState()

  console.log(algoSelect.algoFn.name === 'bubbleSort')

  useEffect(() => {
    if (algoSelect.algoFn.name === 'bubbleSort') {
      setGraphMatch(bubbleSortImg)
    } else if (algoSelect.algoFn.name === 'countEvens') {
      setGraphMatch(countEvensImg)
    } else if (algoSelect.algoFn.name === 'sortAndRemoveDup') {
      setGraphMatch(sortAndRemoveDupImg)
    } else {
      setGraphMatch("Graph Not Found")
    }
  }, [algoSelect])

  return (
    <div className='app'>
      <h1>BIG-O CALCULATOR</h1>
      <div className='top'>
        <Control algoSelect={algoSelect} setAlgoSelect={setAlgoSelect} />
        <Graph graphMatch={graphMatch} />
      </div>
      <div className='bottom'>
        <CodePanel algoSelect={algoSelect} />
      </div>
    </div>
  )
}

export default App
