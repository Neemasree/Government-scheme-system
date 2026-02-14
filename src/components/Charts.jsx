import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b"];

function Charts({ role }) {
  let barData, pieData, barTitle, pieTitle;

  if (role === "Admin") {
    barData = [
      { name: "Approved", value: 860 },
      { name: "Pending", value: 300 },
      { name: "Rejected", value: 80 }
    ];
    pieData = [
      { name: "Housing", value: 400 },
      { name: "Scholarship", value: 350 },
      { name: "Farmer Support", value: 490 }
    ];
    barTitle = "Overall Beneficiary Status";
    pieTitle = "Scheme Distribution";
  } else if (role === "District Officer") {
    barData = [
      { name: "Verified", value: 300 },
      { name: "Pending", value: 120 },
      { name: "Escalated", value: 50 }
    ];
    pieData = [
      { name: "Chennai", value: 180 },
      { name: "Madurai", value: 140 },
      { name: "Coimbatore", value: 100 }
    ];
    barTitle = "District Approval Status";
    pieTitle = "District-wise Distribution";
  } else {
    barData = [
      { name: "Verified", value: 35 },
      { name: "Pending", value: 15 },
      { name: "Issues", value: 5 }
    ];
    pieData = [
      { name: "Documents OK", value: 35 },
      { name: "Missing Docs", value: 10 },
      { name: "Invalid", value: 5 }
    ];
    barTitle = "Field Verification Status";
    pieTitle = "Document Status";
  }

  return (
    <div className="charts-container">

      <div className="chart-box">
        <h3>{barTitle}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-box">
        <h3>{pieTitle}</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default Charts;
