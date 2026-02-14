import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const role = localStorage.getItem("role");

  return (
    <div className="sidebar">
      <h2 className="logo">GovMonitor</h2>

      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Dashboard</Link>
        </li>

        {role === "Admin" && (
          <li className={location.pathname === "/schemes" ? "active" : ""}>
            <Link to="/schemes">Schemes</Link>
          </li>
        )}

        {(role === "Admin" || role === "District Officer" || role === "Field Officer") && (
          <li className={location.pathname === "/beneficiaries" ? "active" : ""}>
            <Link to="/beneficiaries">Beneficiaries</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
