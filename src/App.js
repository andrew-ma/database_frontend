import './App.sass';

function App()
{
  return (
    <div className="">
      <h1 className="title">Nanophotonics Database</h1>
      <p className="subtitle">
        A database of nanophotonics devices
      </p>

      <div className="field">
        <div className="control">
          <input type="text" className="input" placeholder="Input" />
        </div>
      </div>


    {/* Dropdown */}

      <div className="field">
        <div className="control">
          <span className="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
        </div>
      </div>
      
      {/* Query Input Field */}
      
      {/* Table */}
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <th>heading 1</th>
            <td>cell 1</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default App;
