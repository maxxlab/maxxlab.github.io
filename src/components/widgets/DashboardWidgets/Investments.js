import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function Investments() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "45%",
        minWidth: "45%",
        maxHeight: "314px",
        minHeight: "310px",
        borderRadius: "20px",
        marginRight: "10px",
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
          Investments
        </Typography>
        <Divider />
      </CardContent>
    </Card>
  );
}
