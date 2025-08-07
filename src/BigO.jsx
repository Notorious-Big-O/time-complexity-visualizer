import { useState, useMemo } from 'react';

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

function BigO() {
  const [algoSelect, setAlgoSelect] = useState(hardcodedData.bubbleSort);
  const [dataPoints, setDataPoints] = useState([]);
  const [startingN, setStartingN] = useState(500);
  const [endingN, setEndingN] = useState(10000);
  const [resolution, setResolution] = useState(100);

  const graphData = useMemo(
    () => ({
      dataPoints,
    }),
    [dataPoints]
  );

  const runTests = async () => {
    setDataPoints([]); // Clear previous results

    const testParams = testingParamsFactory();
    testParams.startingN = startingN;
    testParams.endingN = endingN;
    testParams.resolution = resolution;
    testParams.algoFn = algoSelect.fn || bubbleSort;

    await timeAlgoComplexity(testParams, (dp) => {
      setDataPoints((prev) => [...prev, dp]);
    });
  };

  return (
    <div className='app'>
      <h1>Notorious Big-O</h1>
      <div className='top'>
        <Control
          algoSelect={algoSelect}
          setAlgoSelect={setAlgoSelect}
          startingN={startingN}
          setStartingN={setStartingN}
          endingN={endingN}
          setEndingN={setEndingN}
          resolution={resolution}
          setResolution={setResolution}
          runTests={runTests}
        />
        <Graph graphData={graphData} />
      </div>
      <div className='bottom'>
        <CodePanel algoSelect={algoSelect} />
      </div>
    </div>
  );
}

export default BigO;
