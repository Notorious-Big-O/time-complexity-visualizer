const Timestamps = ({ algoSelect }) => {
  const data = algoSelect.dataPoints;

  return (
    <div className='timestamps'>
      <table
        style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}
      >
        <thead>
          <tr>
            <th
              colSpan={2}
              style={{
                textAlign: 'center',
                borderBottom: '2px solid black',
                padding: '0.5rem',
                fontWeight: 'normal',
                fontSize: '1rem',
              }}
            >
              time stamps
            </th>
          </tr>
          <tr>
            <th
              style={{
                width: '50%',
                borderRight: '2px solid black',
                padding: '0.5rem',
                textAlign: 'center',
              }}
            >
              n
            </th>
            <th
              style={{ width: '50%', padding: '0.5rem', textAlign: 'center' }}
            >
              milliseconds
            </th>
          </tr>
        </thead>
      </table>

      <div
        style={{
          height: '180px',
          overflowY: 'auto',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
          }}
        >
          <tbody>
            {data.map((obj, i) => (
              <tr key={i}>
                <td
                  style={{
                    borderRight: '2px solid black',
                    padding: '0.5rem',
                    width: '50%',
                  }}
                >
                  {obj.numberOfInputs}
                </td>
                <td style={{ padding: '0.5rem', width: '50%' }}>
                  {obj.algoDatapoint}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Timestamps;
