import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./Chart.css";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="hidden md:block chart h-60 m-4 p-2">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={6}>
            <LineChart  data={data}>
                <XAxis dataKey="name" stroke="#5550bd" />
                <YAxis />
                <Line type="monotone" dataKey={dataKey} stroke="#e60404" />
                <Tooltip />
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
            </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
