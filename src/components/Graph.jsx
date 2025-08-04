const Graph = ({ graphMatch }) => {
  console.log(graphMatch)
  return (
    <div className="graph">
      {
        graphMatch !== "/graph-images/countEvens.algo.png" ? <img src={graphMatch} alt="" style={{ height: '100%', width: '90%'}} /> : <img src={graphMatch} alt="" style={{ height: '100%', width: '70%'}} />
      }
    </div>
  )
}
export default Graph