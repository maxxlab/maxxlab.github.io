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
     name: "Jan",
     uv: 10000,
     pv: 2400,
     amt: 2400
   },
   {
     name: "Feb",
     uv: 14000,
     pv: 1398,
     amt: 2210
   },
   {
     name: "Mar",
     uv: 12000,
     pv: 9800,
     amt: 2290
   },
   {
     name: "Apr",
     uv: 18080,
     pv: 3908,
     amt: 2000
   },
   {
     name: "May",
     uv: 19190,
     pv: 4800,
     amt: 2181
   },
   {
      name: "Jun",

    }
 ];

export default function LineGraphCrypto() {
  return (
    <AreaChart
      width={window.innerWidth/2.7}
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
