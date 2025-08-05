import prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import { useEffect, useState } from "react"


const CodeBlock = ({ algoSelect }) => {
  const [formattedCode, setFormattedCode] = useState('')

  useEffect(() => {
    try {
      const result = prettier.format(algoSelect.algoFn.toString(), {
        parser: 'babel',
        plugins: [parserBabel.default]
      })
      setFormattedCode(result)
    } catch (error) {
      // console.error('Prettier formatting failed:', error)
      setFormattedCode(algoSelect.algoFn.toString())
    }
  }, [algoSelect])
  
  
  return (
    <div className="codeblock">
        <div style={{ width: '26rem', height: '12rem' }}>
          <pre>
            <code>{formattedCode}</code>
          </pre>
        </div>
        <div style={{ display: 'flex', gap: '2rem'}}>
            <button>Run Code</button>
            <button>Abort</button>
        </div>
    </div>
  )
}
export default CodeBlock