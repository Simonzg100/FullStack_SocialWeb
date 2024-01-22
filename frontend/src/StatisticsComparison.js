// StatisticsComparison.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./StatisticsComparison.css";

const StatisticsComparison = ({ playerStats, averageStats }) => {
  // Assuming playerStats and averageStats are objects with the same keys
  if (!playerStats[0]) {
    return <div>no player is found</div>;
  }

  const keys = Object.keys(playerStats[0]);

  const startIndex = 4; // Adjust this index to start reading from the fourth key

  const data = keys.slice(startIndex).map((key) => ({
    name: key,
    Player: playerStats[0][key],
    Average: averageStats[0][key],
  }));

  if ((playerStats[0], averageStats[0])) {
    return (
      <div>
        <h1 className="title">Statistics Comparison</h1>
        <ResponsiveContainer width="150%" height={600}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tick={{ fill: "#ffffff" }} />
            <YAxis type="category" dataKey="name" tick={{ fill: "#ffffff" }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Player" fill="#aeaaff" />
            <Bar dataKey="Average" fill="#ef6eff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
};

export default StatisticsComparison;
