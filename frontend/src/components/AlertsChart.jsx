import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const data = [
  { name: "9 AM", Updates: 40, Alerts: 30 },
  { name: "12 PM", Updates: 80, Alerts: 50 },
  { name: "3 PM", Updates: 60, Alerts: 90 },
  { name: "6 PM", Updates: 100, Alerts: 70 },
];

const AlertsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        style={{
          //backgroundColor: "#1e1e2f", // Dark background
          borderRadius: "12px", // Rounded corners
          padding: "10px",
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          strokeOpacity={0.3}
          stroke="#ffffff" // Grid lines in light color with opacity
        />
        <XAxis
          dataKey="name"
          stroke="#ffffff" // Axis text color
          tick={{ fontSize: 12, fill: "#ffffff", opacity: 0.7 }} // Custom tick styles
          axisLine={{ stroke: "#555555" }} // Axis line color
        />
        <YAxis
          stroke="#ffffff" // Axis text color
          tick={{ fontSize: 12, fill: "#ffffff", opacity: 0.7 }} // Custom tick styles
          axisLine={{ stroke: "#555555" }} // Axis line color
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#333333", // Dark background for tooltip
            border: "none",
            borderRadius: "8px",
            color: "#ffffff",
          }}
          itemStyle={{ color: "#ffffff" }} // Tooltip text color
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          wrapperStyle={{ color: "#ffffff", opacity: 0.8 }} // Legend styles
        />
        <Line
          type="monotone"
          dataKey="Updates"
          stroke="#82ca9d" // Green color
          strokeWidth={2}
          dot={{ fill: "#82ca9d", strokeWidth: 2, r: 4 }} // Styled dots
        />
        <Line
          type="monotone"
          dataKey="Alerts"
          stroke="#8884d8" // Blue color
          strokeWidth={2}
          dot={{ fill: "#8884d8", strokeWidth: 2, r: 4 }} // Styled dots
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AlertsChart;