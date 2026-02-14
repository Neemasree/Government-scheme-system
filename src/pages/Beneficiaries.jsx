import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Beneficiaries() {
  const role = localStorage.getItem("role");

  const [beneficiaries, setBeneficiaries] = useState([
    { id: 1, name: "Ravi Kumar", scheme: "Housing", stage: "Applied" },
    { id: 2, name: "Meena Devi", scheme: "Scholarship", stage: "Verified" },
    { id: 3, name: "Arun Kumar", scheme: "Farmer Support", stage: "Approved" },
    { id: 4, name: "Sita Devi", scheme: "Housing", stage: "Completed" }
  ]);

  const [activities, setActivities] = useState([]);
  const [name, setName] = useState("");
  const [scheme, setScheme] = useState("");

  // Notification Count
  const notificationCount =
    role === "Field Officer"
      ? beneficiaries.filter(b => b.stage === "Applied").length
      : role === "District Officer"
      ? beneficiaries.filter(b => b.stage === "Verified").length
      : role === "Admin"
      ? beneficiaries.filter(b => b.stage === "Approved").length
      : 0;

  const addBeneficiary = () => {
    if (!name || !scheme) return;

    const newBeneficiary = {
      id: Date.now(),
      name,
      scheme,
      stage: "Applied"
    };

    setBeneficiaries([...beneficiaries, newBeneficiary]);

    setActivities(prev => [
      {
        id: Date.now(),
        message: `${name} added by ${role}`,
        time: new Date().toLocaleString()
      },
      ...prev
    ]);

    setName("");
    setScheme("");
  };

  const moveToNextStage = (id) => {
    setBeneficiaries(
      beneficiaries.map((b) => {
        if (b.id === id) {

          let newStage = b.stage;

          if (role === "Field Officer" && b.stage === "Applied") {
            newStage = "Verified";
          }

          if (role === "District Officer" && b.stage === "Verified") {
            newStage = "Approved";
          }

          if (role === "Admin" && b.stage === "Approved") {
            newStage = "Completed";
          }

          if (newStage !== b.stage) {
            setActivities(prev => [
              {
                id: Date.now(),
                message: `${b.name} moved from ${b.stage} to ${newStage} by ${role}`,
                time: new Date().toLocaleString()
              },
              ...prev
            ]);
          }

          return { ...b, stage: newStage };
        }

        return b;
      })
    );
  };

  const deleteBeneficiary = (id) => {
    if (role !== "Admin") return;

    const deleted = beneficiaries.find(b => b.id === id);

    setBeneficiaries(beneficiaries.filter(b => b.id !== id));

    setActivities(prev => [
      {
        id: Date.now(),
        message: `${deleted.name} deleted by Admin`,
        time: new Date().toLocaleString()
      },
      ...prev
    ]);
  };

  // Role-based task filtering
  const filteredBeneficiaries = beneficiaries.filter((b) => {
    if (role === "Field Officer") return b.stage === "Applied";
    if (role === "District Officer") return b.stage === "Verified";
    if (role === "Admin") return b.stage === "Approved";
    return true;
  });

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar notificationCount={notificationCount} />

        <div className="dashboard-content">
          <h2>Beneficiary Task Queue</h2>

          {(role === "Admin" || role === "District Officer") && (
            <div className="form-box">
              <input
                type="text"
                placeholder="Beneficiary Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Scheme Name"
                value={scheme}
                onChange={(e) => setScheme(e.target.value)}
              />

              <button onClick={addBeneficiary}>Add</button>
            </div>
          )}

          <table className="beneficiary-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Scheme</th>
                <th>Stage</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredBeneficiaries.map((b) => (
                <tr key={b.id}>
                  <td>{b.name}</td>
                  <td>{b.scheme}</td>
                  <td>{b.stage}</td>
                  <td>
                    {role === "Field Officer" && b.stage === "Applied" && (
                      <button onClick={() => moveToNextStage(b.id)}>Verify</button>
                    )}

                    {role === "District Officer" && b.stage === "Verified" && (
                      <button onClick={() => moveToNextStage(b.id)}>Approve</button>
                    )}

                    {role === "Admin" && b.stage === "Approved" && (
                      <button onClick={() => moveToNextStage(b.id)}>Complete</button>
                    )}

                    {role === "Admin" && (
                      <button
                        className="delete-btn"
                        onClick={() => deleteBeneficiary(b.id)}
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="activity-box">
            <h3>Recent Activities</h3>

            {activities.length === 0 && <p>No activity yet</p>}

            {activities.map((a) => (
              <div key={a.id} className="activity-item">
                <p>{a.message}</p>
                <small>{a.time}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beneficiaries;
