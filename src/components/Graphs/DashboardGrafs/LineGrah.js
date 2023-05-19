import "./styles/LineGraph.css";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import axios from "axios";


const client = axios.create({
   baseURL: "https://back-end-hack.up.railway.app/api/transactions/INCOME",
 });

export default function LineGraphdashboard() {
   const [balanceLine, setBalanceLine] = useState([]);
   const data = [
      {
        name: "Jan",
        uv: 500,
      },
      {
        name: "Feb",
        uv: 620,
      },
      {
        name: "Mar",
        uv: 400,
    
      },
      {
        name: "Apr",
        uv: 480,
    
      },
      {
        name: "May",
        uv: balanceLine,
    
      }
    ];

  useEffect(() => {
    client.get("").then((response) => {
      setBalanceLine(response.data);
      console.log(response.data);
      // console.log(response)
    });
  }, []);
  return (
    <AreaChart
      width={window.innerWidth/3.5}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 0,
        left: 10,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area  type="monotone" dataKey="uv" stroke="#4FE4DB" fill="#EBFAFB" />
    </AreaChart>
  );
}
