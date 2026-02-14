import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import Charts from "../components/Charts";

function DistrictDashboard() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Navbar />

        <div className="dashboard-content">
          <h2>District Officer Dashboard</h2>

          <select className="district-filter">
            <option>Chennai</option>
            <option>Madurai</option>
            <option>Coimbatore</option>
          </select>

          <div className="card-grid">
            <StatCard title="District Beneficiaries" value="420" color="blue" />
            <StatCard title="Pending Approvals" value="120" color="orange" />
          </div>

          <div className="info-box">
            <h3>Your Actions</h3>
            <ul>
              <li>Approve verified beneficiaries</li>
              <li>Monitor district progress</li>
              <li>Escalate delayed cases</li>
            </ul>
          </div>

          <Charts role="District Officer" />
        </div>
      </div>
    </div>
  );
}

export default DistrictDashboard;
