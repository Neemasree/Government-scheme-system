import { useNavigate } from "react-router-dom";

function Navbar({ notificationCount = 0 }) {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    alert(`You have ${notificationCount} notification(s)`);
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <h3>Government Scheme System</h3>

      <div className="nav-right">
        <div className="notification" onClick={handleNotificationClick} style={{ cursor: 'pointer' }}>
          🔔
          {notificationCount > 0 && (
            <span className="badge">{notificationCount}</span>
          )}
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
