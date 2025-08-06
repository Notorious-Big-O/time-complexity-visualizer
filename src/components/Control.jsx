import { hardcodedData } from "../../data"

const Control = ({ algoSelect, setAlgoSelect, startingN, setStartingN, endingN, setEndingN, resolution, setResolution}) => {

  return (
    <div className="control">
      <div>
        <label htmlFor="">Algo</label>
        <select name="" id="" onChange={(e) => setAlgoSelect(hardcodedData[e.target.value])}>
          <option value="bubbleSort">bubbleSort</option>
          <option value="sortAndRemoveDup">sortAndRemoveDup</option>
          <option value="countEvens">countEvens</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="">Starting</label>
        <input type="text" id="starting"  value={startingN} onChange={(e) => setStartingN(e.target.value)} />
      </div>
      
      <div>
        <label htmlFor="">Stopping</label>
        <input type="text" id="stopping"  value={endingN} onChange={(e) => setEndingN(e.target.value)} />
      </div>
      
      <div>
        <label htmlFor="">Skip</label>
        <input type="text" id="skip" value={resolution} onChange={(e) => setResolution(e.target.value)} />
      
      </div>
    </div>
  )
}
export default Control