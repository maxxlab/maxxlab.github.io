import React from 'react';
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function Credit() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "100%",
        minWidth: "100%",
        minHeight: "48%",
        borderRadius: "20px",
        boxShadow: 12,
        marginTop: 0,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
       
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: '16pt',  }}>Credit</Typography>
      </CardContent>
    </Card>
  )
}
