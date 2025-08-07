import { hardcodedData } from '../../data';
import styles from './Control.module.css';

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
    <div className={styles.controlBox}>
      <div className='control'>
        <div>
          <div className={styles.algoSection}>
            <label htmlFor=''>Choose your Algorithm: </label>

            <select
              className={styles.algoSelectBox}
              name=''
              id=''
              onChange={(e) => setAlgoSelect(hardcodedData[e.target.value])}
            >
              <option value='bubbleSort'>bubbleSort</option>
              <option value='sortAndRemoveDup'>sortAndRemoveDup</option>
              <option value='countEvens'>countEvens</option>
            </select>
          </div>
        </div>

        <div className={styles.startStopIncrement}>
          <label htmlFor=''>Starting # of Inputs: </label>
          <input
            className={styles.startingInput}
            type='number'
            id='starting'
            value={startingN}
            onChange={(e) => setStartingN(e.target.value)}
          />

          <label htmlFor=''>Ending # of Inputs: </label>
          <input
            className={styles.endingInput}
            type='number'
            id='ending'
            value={endingN}
            onChange={(e) => setEndingN(e.target.value)}
          />

          <label htmlFor=''>Increment By: </label>
          <input
            className={styles.incrementInput}
            type='number'
            id='skip'
            value={resolution}
            onChange={(e) => setResolution(e.target.value)}
          />
        </div>
        <div>
          <button onClick={runTests}>Start Test</button>
          <button className={styles.abortButton}>Abort</button>
        </div>
      </div>
      <div class={styles.algoControls}>
        <p>
          <form>
            <div>
              <input type='radio' name='algoSelector' value='log(n)' />
              <label htmlFor=''>O(log(n))</label>
            </div>
            <div>
              <input type='radio' name='algoSelector' value='log(n)' />
              <label htmlFor=''>O(n*log(n)) </label>
            </div>
            <div>
              <input type='radio' name='algoSelector' value='log(n)' />
              <label htmlFor=''>O(n) </label>
            </div>
          </form>
        </p>
      </div>
    </div>
  );
};
export default Control;
