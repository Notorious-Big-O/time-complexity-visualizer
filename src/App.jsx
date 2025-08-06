import { useEffect, useState } from 'react';
import './App.css';
import Control from './components/Control';
import Graph from './components/Graph';
import CodePanel from './components/CodePanel';
import { hardcodedData } from '../data';
import {
  timeAlgoComplexity,
  testingParamsFactory,
} from '../utils/testing_framework';
import { bubbleSort } from '../algo-snippets/bubbleSort';

function App() {
  const [algoSelect, setAlgoSelect] = useState(hardcodedData.bubbleSort);
  const [graphData, setGraphData] = useState(hardcodedData.bubbleSort);

  console.log(algoSelect.algoFn.name === 'bubbleSort');

  useEffect(() => {
    const testParams = testingParamsFactory();
    testParams.startingN = 500;
    testParams.endingN = 1000;
    testParams.resolution = 100;

    testParams.algoFn = bubbleSort;
    const doAsync = async () => {
      await timeAlgoComplexity(testParams, (dataPoint) => {
        console.log(`DataPoint: ${JSON.stringify(dataPoint)}`);
        // setGraphData(data);
      });
    };

    doAsync();
  }, []);

  return (
    <div className='app'>
      <h1>BIG-O CALCULATOR</h1>
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
