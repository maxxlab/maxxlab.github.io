import React from 'react';
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function Deposit() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "504px",
        minWidth: "504px",
        minHeight: "312px",
        borderRadius: "20px",
        boxShadow: 12,
        margin: 2,
        border: "1px solid black",
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: '16pt',  }}>Deposit</Typography>
        
      </CardContent>
    </Card>
  )
}
