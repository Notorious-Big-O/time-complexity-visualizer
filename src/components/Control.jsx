import { useState } from "react"
import { hardcodedData } from "../../data"

const Control = ({ algoSelect, setAlgoSelect}) => {

  return (
    <div className="control">
      Control
      <label htmlFor="">
        Algo
        <select name="" id="" onChange={(e) => setAlgoSelect(hardcodedData[e.target.value])}>
          <option value="bubbleSort">bubbleSort</option>
          <option value="sortAndRemoveDup">sortAndRemoveDup</option>
          <option value="countEvens">countEvens</option>
        </select>
      </label>
      
      <label htmlFor="">
        Starting
        <select name="" id="">
          {
            algoSelect.dataPoints.map(obj => <option>{obj.numberOfInputs}</option>)
          }
        </select>
      </label>

      <label htmlFor="">
        Stopping
        <select name="" id="">
          {
            algoSelect.dataPoints.map(obj => <option>{obj.numberOfInputs}</option>)
          }
        </select>
      </label>

      <label htmlFor="">
        Skip
        <select name="" id="">
          <option value="">5000</option>
        </select>
      </label>
    </div>
  )
}
export default Control