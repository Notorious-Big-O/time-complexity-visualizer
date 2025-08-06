import { useEffect, useState, useMemo } from 'react';

import Control from './components/Control';
import Graph from './components/Graph';
import CodePanel from './components/CodePanel';

import './App.css';

import {
  timeAlgoComplexity,
  testingParamsFactory,
} from '../utils/testing_framework';
import { hardcodedData } from '../data';
import { bubbleSort } from '../algo-snippets/bubbleSort';

function App() {
  const [algoSelect, setAlgoSelect] = useState(hardcodedData.bubbleSort);
  const [dataPoints, setDataPoints] = useState([]);

  const graphData = useMemo(
    () => ({
      dataPoints,
    }),
    [dataPoints]
  );

  useEffect(() => {
    const testParams = testingParamsFactory();
    testParams.startingN = 100;
    testParams.endingN = 10000;
    testParams.resolution = 100;

    testParams.algoFn = bubbleSort;
    const doAsync = async () => {
      await timeAlgoComplexity(testParams, (dp) => {
        setDataPoints((prev) => [...prev, dp]);
      });
    };

    doAsync();
  }, []);

  return (
    <div className='app'>
      <h1>Notorious Big-O</h1>
      <div className='top'>
        <Control algoSelect={algoSelect} setAlgoSelect={setAlgoSelect} />
        <Graph graphData={graphData} />
      </div>
      <div className='bottom'>
        <CodePanel algoSelect={algoSelect} />
      </div>
    </div>
  );
}

export default App;