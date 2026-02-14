import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import Charts from "../components/Charts";

function AdminDashboard() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Navbar />

        <div className="dashboard-content">
          <h2>Admin Control Panel</h2>

          <div className="card-grid">
            <StatCard title="Total Schemes" value="12" color="blue" />
            <StatCard title="Total Beneficiaries" value="1240" color="green" />
            <StatCard title="Pending Approvals" value="300" color="orange" />
            <StatCard title="Completed Cases" value="860" color="purple" />
          </div>

          <div className="info-box">
            <h3>Admin Actions</h3>
            <ul>
              <li>Manage schemes</li>
              <li>Monitor district performance</li>
              <li>Release funds</li>
              <li>System-level supervision</li>
            </ul>
          </div>

          <Charts role="Admin" />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
