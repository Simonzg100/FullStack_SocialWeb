import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "./RadarChart.css";

const RadarChartComponent2 = ({ data, title, leagueName }) => {
  // Assuming `data` is the array of skills with their corresponding values
  // const radarData = data.map((skill) => ({
  //   subject: skill.Skill,
  //   A: skill.Total_PTS,
  // }));

  // Determine the maximum value for the radar chart scale
  const maxValue = Math.max(...data.map((item) => item.Total_PTS));

  return (
    <div className="radar-chart-container2">
      <h2 className="title">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: "#ffffff" }} />
          <PolarRadiusAxis
            angle={30}
            domain={[0, maxValue]}
            tick={{ fill: "#ffffff" }}
          />
          <Radar
            name="Total"
            dataKey="value" // Changed from "A" to "value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartComponent2;
