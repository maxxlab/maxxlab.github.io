import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import LineGraphdashboard from "../../Graphs/DashboardGrafs/LineGrah";
import "./styles/ProfitWidget.css"
import axios from "axios";

const client = axios.create({
  baseURL: "https://back-end-hack.up.railway.app/api/transactions/INCOME",
});

export default function ProfitWidget() {
  const [balanceMain, setBalanceMain] = useState([]);

  useEffect(() => {
    client.get("").then((response) => {
      setBalanceMain(response.data);
      console.log(response.data);
      // console.log(response)
    });
  }, []);
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "50%",
        minWidth: "43%",
        minHeight: "316px",
        borderRadius: "20px",
        boxShadow: 12,
        margin: 2,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent >
        <Typography className="title-prof" sx={{fontSize: 40, fontWeight: 600, marginLeft:2}}>{balanceMain}$</Typography>
        <Typography className="sub-prof" sx={{fontSize: 20,marginLeft:2, marginBottom: "15px", color: 'rgba(60, 60, 67, 0.6)' }}>Profit</Typography>
        <LineGraphdashboard/>
      </CardContent>
    </Card>
  );
}
