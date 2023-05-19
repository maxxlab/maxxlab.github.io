import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import axios from "axios";

const client = axios.create({
  baseURL: "https://back-end-hack.up.railway.app/api/",
});

export default function TransactionHistoryExpendsWidget(props) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    client.get("transactions").then((response) => {
      setTransactions(response.data);
      // console.log(response)
    });
  }, []);

  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: props.width,
        minWidth: props.width,
        minHeight: props.height,
        borderRadius: "20px",
        boxShadow: 12,
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(5px)",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: "20pt" }}>Transaction History</Typography>

        <Divider />
        {transactions.map((transaction) => (
          <TransactionTile
            description={transaction.description}
            date={transaction.date}
            currency={transaction.currency}
            amount={transaction.amount}
            type={transaction.transactionType}
          />
        ))}
      </CardContent>
    </Card>
  );
}

function TransactionTile(props) {
  return (
     <Box>
        <Box
      sx={{
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding:'20px'
      }}
    >
      <Box sx={{ display: "flex" }}>
        <LocalTaxiIcon
          sx={{
            backgroundColor: "#4882F0",
            borderRadius: "15px",
            fontSize: "28pt",
            padding: "6px",
            color: "#ffffff",
            marginRight: "20px",
          }}
        />
        <Box>
          <Typography sx={{ fontSize: "12pt" }}>{props.description}</Typography>
          <Typography
            sx={{ fontSize: "12pt", color: "#3C3C43", opacity: "0.6" }}
          >
            {props.date}
          </Typography>
        </Box>
      </Box>

      <Box>
        {props.type === "INCOME" ? (
          <Typography sx={{ fontSize: "12pt", color: "green" }}>
            {props.amount}
          </Typography>
        ) : (
          <Typography sx={{ fontSize: "12pt", color: "red" }}>
            {props.amount}
          </Typography>
        )}

        <Typography sx={{ fontSize: "12pt", color: "#3C3C43", opacity: "0.6" }}>
          {props.currency}
        </Typography>
      </Box>
      
    </Box>
         <Divider />
     </Box>
    
  );
}