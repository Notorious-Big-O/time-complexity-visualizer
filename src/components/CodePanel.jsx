import CodeBlock from "./CodeBlock"
import Timestamps from "./Timestamps"

const CodePanel = () => {
  return (
    <div className="code-panel">
        <div>
            <CodeBlock />
        </div>
        <Timestamps />
    </div>
  )
}
export default CodePanel