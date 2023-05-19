import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";

export default function TransactionHistoryExpendsWidget(props) {
  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: props.width,
        minWidth: props.width,
        minHeight: props.height,
        borderRadius: "20px",
        boxShadow: 12,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: "20pt" }}>Transaction History</Typography>

        <Divider />
        <TransactionTile />
        <TransactionTile />
        <TransactionTile />
      </CardContent>
    </Card>
  );
}

function TransactionTile() {
  return (
    <Box
      sx={{
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
      }}
    >
      <Box sx={{display: 'flex'}}>
        <LocalTaxiIcon
          sx={{
            backgroundColor: "#4882F0",
            borderRadius: "15px",
            fontSize: "28pt",
            padding: "6px",
            color: "#ffffff",
            marginRight: '20px'
          }}
        />
        <Box>
          <Typography sx={{ fontSize: "12pt" }}>
            "Golub" Taxi Transportation
          </Typography>
          <Typography
            sx={{ fontSize: "12pt", color: "#3C3C43", opacity: "0.6" }}
          >
            20th May, 18:39
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography sx={{ fontSize: "12pt", color: "red" }}>-344</Typography>
        <Typography sx={{ fontSize: "12pt", color: "#3C3C43", opacity: "0.6" }}>
          EUR
        </Typography>
      </Box>
    </Box>
  );
}
