import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import Charts from "../components/Charts";

function FieldDashboard() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Navbar />

        <div className="dashboard-content">
          <h2>Field Officer Task Dashboard</h2>

          <div className="card-grid">
            <StatCard title="Assigned Cases" value="50" color="blue" />
            <StatCard title="Pending Verification" value="15" color="orange" />
          </div>

          <div className="info-box">
            <h3>Your Actions</h3>
            <ul>
              <li>Verify beneficiary documents</li>
              <li>Update verification status</li>
              <li>Report issues</li>
            </ul>
          </div>

          <Charts role="Field Officer" />
        </div>
      </div>
    </div>
  );
}

export default FieldDashboard;
