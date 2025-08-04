const CodeBlock = ({ algoSelect }) => {
  console.log(algoSelect.algoFn)
  return (
    <div className="codeblock">
        <div style={{ width: '26rem' }}>
          {algoSelect.algoFn.toString()}
        </div>
        <div style={{ display: 'flex', gap: '2rem'}}>
            <button>Run Code</button>
            <button>Abort</button>
        </div>
    </div>
  )
}
export default CodeBlock