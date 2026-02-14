import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("Admin");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("role", role);
    window.location.href = "/";
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Government Scheme Monitor</h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Admin</option>
          <option>District Officer</option>
          <option>Field Officer</option>
        </select>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
