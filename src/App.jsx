import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminDashboard from "./pages/AdminDashboard";
import DistrictDashboard from "./pages/DistrictDashboard";
import FieldDashboard from "./pages/FieldDashboard";
import Schemes from "./pages/Schemes";
import Beneficiaries from "./pages/Beneficiaries";
import Login from "./pages/Login";

function App() {
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const handleStorageChange = () => {
      setRole(localStorage.getItem("role"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (!role) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {role === "Admin" && (
          <>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/beneficiaries" element={<Beneficiaries />} />
          </>
        )}

        {role === "District Officer" && (
          <>
            <Route path="/" element={<DistrictDashboard />} />
            <Route path="/beneficiaries" element={<Beneficiaries />} />
          </>
        )}

        {role === "Field Officer" && (
          <>
            <Route path="/" element={<FieldDashboard />} />
            <Route path="/beneficiaries" element={<Beneficiaries />} />
          </>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
