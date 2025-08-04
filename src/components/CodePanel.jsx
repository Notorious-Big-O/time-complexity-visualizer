import CodeBlock from "./CodeBlock"
import Timestamps from "./Timestamps"

const CodePanel = ({ algoSelect }) => {
  
  return (
    <div className="code-panel">
        <div className="codeblock-container">
            Codeblock
            <CodeBlock algoSelect={algoSelect} />
        </div>
        <Timestamps />
    </div>
  )
}
export default CodePanel