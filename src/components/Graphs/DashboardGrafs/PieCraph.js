import { Box } from "@mui/system";
import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Crypto", value: 400 },
  { name: "Savings", value: 300 },
  { name: "Investmen", value: 300 },
  { name: "Balance", value: 200 },
];
const COLORS = ["#62C8FE", "#6D8EA0", "#40DDCE", "#16BFD6"];

export default function PieGraphDash() {
  return (<div style={{display:'flex', alignItems:'center'}}>
      <PieChart width={220} height={300} style={{marginRight:'5%'}}>
            <Pie
            data={data}
            cx={100}
            cy={120}
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
            
            >
            {data.map((entry, index) => (
               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
         </PieChart>
         <div>
            <ul>
            {data.map((name, index) => (
               <li key={`cell-${index}`} style={{display:'flex',marginBottom:10}}>
                  <div style={{width:'20px',marginRight:10,height:'20px',backgroundColor:`${COLORS[index % COLORS.length]}`}}></div>
                  <span>{name.name}</span>
               </li>
            ))}
            </ul>
         </div>
  </div>
  );
}
