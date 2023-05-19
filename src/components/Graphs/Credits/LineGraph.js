import "./styles/LineGraph.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 1000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 1400,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2100,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 1880,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 2190,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2090,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 2190,
    pv: 40300,
    amt: 0
  },
  {
   name: "Page G",
   
 },
 {
   name: "Page G",
   
 }
];

export default function LineGraphCrypto() {
  return (
    <AreaChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" fill="rgba(255, 255, 255, 0.47)"/>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area  type="monotone" dataKey="uv" stroke="#60D3CC" fill="rgba(79, 228, 219, 0.3)"  />
    </AreaChart>
  );
}
