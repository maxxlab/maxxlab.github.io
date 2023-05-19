import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 , state: 1.6},
  { name: "Group B", value: 300 , state: 1.5},
  { name: "Group C", value: 300 , state: 1.4},
  { name: "Group D", value: 200 , state: 1.2}
];
const COLORS = ["#62C8FE", "#6D8EA0", "#40DDCE", "#16BFD6"];

export default function PieGraphCredits() {
   return (<div style={{display:'flex', alignItems:'center', marginLeft:'15%'}}>
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
               <span style={{marginRight:"10px"}}>{name.name}</span>
               <span>{name.state}%</span>
            </li>
         ))}
         </ul>
      </div>
</div>
);
}
