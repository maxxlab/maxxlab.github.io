import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function TotalProfit() {
  let balance = 12322
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "20%",
        minWidth: "10%",
        maxHeight: "201px",
        minHeight: "100px",
        borderRadius: "20px",
        boxShadow: 12,
        marginTop: 2,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent>
          <div className="invest-box">
            <div>
              <img style={{width:'90%', borderRadius: 100, paddingRight:'10px'}} src={balance > 0 ? "https://i.pinimg.com/564x/38/3a/86/383a86c9f90bb9b82ef4e186f59e5926.jpg": "https://i.pinimg.com/564x/6e/32/07/6e3207ad912f5009939f1bdbc9ea8831.jpg"}   alt=""/>
            </div>
            <div>
              <div style={{display: 'flex',flexDirection:'column'}}>
                <span style={{fontSize:'30px',color:`${balance < 0 ? 'red' : '#20C2B9'}`,fontWeight:600,opacity:0.8}}>+35%</span>
              </div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
