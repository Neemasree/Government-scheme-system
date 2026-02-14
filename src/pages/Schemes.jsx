import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Schemes() {
  const [schemes, setSchemes] = useState([
    { id: 1, name: "Housing Scheme", stages: 4 },
    { id: 2, name: "Scholarship Scheme", stages: 3 }
  ]);

  const [schemeName, setSchemeName] = useState("");
  const [stages, setStages] = useState("");

  const addScheme = () => {
    if (!schemeName || !stages) return;

    const newScheme = {
      id: Date.now(),
      name: schemeName,
      stages: stages
    };

    setSchemes([...schemes, newScheme]);
    setSchemeName("");
    setStages("");
  };

  const deleteScheme = (id) => {
    setSchemes(schemes.filter(s => s.id !== id));
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="dashboard-content">
          <h2>Scheme Management</h2>

          {/* Add Scheme Form */}
          <div className="form-box">
            <input
              type="text"
              placeholder="Scheme Name"
              value={schemeName}
              onChange={(e) => setSchemeName(e.target.value)}
            />

            <input
              type="number"
              placeholder="Number of Stages"
              value={stages}
              onChange={(e) => setStages(e.target.value)}
            />

            <button onClick={addScheme}>Add Scheme</button>
          </div>

          {/* Table */}
          <table className="beneficiary-table">
            <thead>
              <tr>
                <th>Scheme Name</th>
                <th>Total Stages</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {schemes.map((s) => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.stages}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => deleteScheme(s.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default Schemes;
