import "./styles/BarChar.css";
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
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Jul",
    uv: 6490,
    pv: 8300,
    amt: 2100
  },
  {
   name: "Aug",
   uv: 7490,
   pv: 5300,
   amt: 2100
 },
 {
   name: "Sep",
   uv: 9490,
   pv: 2300,
   amt: 2100
 },
 {
   name: "Oct",
   
 },
 {
   name: "Nov",
   
 },
 {
   name: "Dec",
   
 }
];



export default function BarCharDash() {
  
  return (
    <BarChart
      width={1000}
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