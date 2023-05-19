import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function MyCards() {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "50%",
        minWidth: "52%",
        minHeight: "100%",
        borderRadius: "20px",
        boxShadow: 12,
        marginTop: 2,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent>
        <Typography sx={{ marginBottom: "15px", fontSize: '24pt' }}>My Cards</Typography>
        <Divider />
      </CardContent>
    </Card>
  );
}
