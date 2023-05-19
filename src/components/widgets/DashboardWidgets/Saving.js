import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import "./styles/Savings.css"

export default function Saving() {
  
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "45%",
        minWidth: "45%",
        maxHeight: "314px",
        minHeight: "310px",
        borderRadius: "20px",
        boxShadow: 12,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "24pt",
            marginBottom: "15px",
            color: "#3C3C43",
            opacity: "0.6",
          }}
        >
          Saving
        </Typography>
        <Divider />
        <Box sx={{paddingTop:'15%'}}>
        <Typography sx={{
          margin: '0 auto',
            fontSize: `${window.innerWidth < 1450 ? "20pt" :"30pt"}`,
            marginBottom: "15px",
            color: "#3C3C43",
            opacity: "0.9",
            fontWeight: 600,
            // marginTop: '25%',
            textAlign: 'center',
            padding: '20px',
            backgroundColor:'rgba(255, 255, 255, 0.49)',
            borderRadius: '10px',
            width: '50%',
            boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px;'
          }} className="font-px">
            $1200
            </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
