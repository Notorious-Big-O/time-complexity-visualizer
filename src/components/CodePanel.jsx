import CodeBlock from "./CodeBlock"
import Timestamps from "./Timestamps"

const CodePanel = ({ algoSelect }) => {
  
  return (
    <div className="code-panel">
        <div className="codeblock-container">
            <CodeBlock algoSelect={algoSelect} />
        </div>
        <Timestamps algoSelect={algoSelect} />
    </div>
  )
}
export default CodePanel