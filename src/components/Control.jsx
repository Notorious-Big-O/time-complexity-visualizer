import { hardcodedData } from '../../data';

const Control = ({
  algoSelect,
  setAlgoSelect,
  startingN,
  setStartingN,
  endingN,
  setEndingN,
  resolution,
  setResolution,
  runTests,
}) => {
  return (
    <div className='control'>
      <div>
        <label htmlFor=''>Algo: </label>
        <select
          name=''
          id=''
          onChange={(e) => setAlgoSelect(hardcodedData[e.target.value])}
        >
          <option value='bubbleSort'>bubbleSort</option>
          <option value='sortAndRemoveDup'>sortAndRemoveDup</option>
          <option value='countEvens'>countEvens</option>
        </select>
      </div>

      <div>
        <label htmlFor=''>Starting: </label>
        <input
          type='number'
          id='starting'
          value={startingN}
          onChange={(e) => setStartingN(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor=''>Stopping: </label>
        <input
          type='number'
          id='stopping'
          value={endingN}
          onChange={(e) => setEndingN(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor=''>Increment: </label>
        <input
          type='number'
          id='skip'
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
        />
      </div>
      <div>
        <button onClick={runTests}>Start Test</button>
        <button>Abort</button>
      </div>
    </div>
  );
};
export default Control;
