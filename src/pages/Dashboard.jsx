import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

function Dashboard() {
  const role = localStorage.getItem("role");

  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Navbar />

        <div className="dashboard-content">

          {/* ADMIN DASHBOARD */}
          {role === "Admin" && (
            <>
              <h2>Admin Monitoring Dashboard</h2>

              <div className="card-grid">
                <StatCard title="Total Schemes" value="12" color="blue" />
                <StatCard title="Total Beneficiaries" value="1240" color="green" />
                <StatCard title="Pending Approvals" value="300" color="orange" />
                <StatCard title="Completed Cases" value="860" color="purple" />
              </div>

              <div className="info-box">
                <h3>Admin Responsibilities</h3>
                <ul>
                  <li>Monitor overall scheme progress</li>
                  <li>Manage schemes</li>
                  <li>Track district performance</li>
                  <li>Ensure fund release process</li>
                </ul>
              </div>
            </>
          )}

          {/* DISTRICT OFFICER DASHBOARD */}
          {role === "District Officer" && (
            <>
              <h2>District Officer Dashboard</h2>

              <select className="district-filter">
                <option>Chennai</option>
                <option>Madurai</option>
                <option>Coimbatore</option>
              </select>

              <div className="card-grid">
                <StatCard title="District Beneficiaries" value="420" color="blue" />
                <StatCard title="Pending Approvals" value="120" color="orange" />
                <StatCard title="Verified by Field Officers" value="250" color="green" />
              </div>

              <div className="info-box">
                <h3>Your Responsibilities</h3>
                <ul>
                  <li>Approve verified beneficiaries</li>
                  <li>Monitor district progress</li>
                  <li>Escalate delayed cases</li>
                </ul>
              </div>
            </>
          )}

          {/* FIELD OFFICER DASHBOARD */}
          {role === "Field Officer" && (
            <>
              <h2>Field Officer Task Dashboard</h2>

              <div className="card-grid">
                <StatCard title="Assigned Cases" value="50" color="blue" />
                <StatCard title="Pending Verification" value="15" color="orange" />
                <StatCard title="Verified Today" value="10" color="green" />
              </div>

              <div className="info-box">
                <h3>Your Responsibilities</h3>
                <ul>
                  <li>Verify beneficiary documents</li>
                  <li>Update verification status</li>
                  <li>Report discrepancies</li>
                </ul>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
