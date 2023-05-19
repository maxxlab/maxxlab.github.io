import "./styles/BarChart.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
   {
      name: "Dec",
      uv: 5000,
      pv: 2400,
      amt: 2400
    },
  {
    name: "Jan",
    uv: 5000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "May",
    uv: 10890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Jun",
    
  }
];



export default function BarCharCrypt() {
  
  return (
    <BarChart
      width={window.innerWidth/2.7}
      height={300}
      data={data}
      margin={{
        top: 25,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="2 2" stroke="#CCCCCC"/>
      <XAxis stroke="#878787" dataKey="name" />
      <YAxis stroke="#878787"/>
      <Tooltip />
      <Legend name="hello"/>
      <Bar dataKey="pv" fill="#76A1F5" />
      <Bar dataKey="uv" fill="rgba(238, 79, 49, 0.7)" />
    </BarChart>
  );
}