import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const client = axios.create({
  baseURL: "https://back-end-hack.up.railway.app/api/",
});

const inputStyles = {
  borderRadius: "10px",
  marginBottom: "10px",
  height: "40px",
  fontSize: "13pt",
  width: "130%",
};

export default function AddIncome() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const [transactions, setTransactions] = useState([]);

  const [, updateState] = React.useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(description, amount);
    window.location.reload()
  };
  useEffect(() => {}, []);

  const addIncome = (description, amount) => {
    client
      .post("transactions", {
        description: description,
        amount: amount,
        currency: "USD",
        transactionType: "INCOME",
        transactionTime: "2023-05-19T20:02:31",
      })
      .then((response) => {
        setTransactions([response.data, ...transactions]);
      });
    setDescription();
    setAmount(0);
  };

  return (
    <Card
      sx={{
        marginTop: "30px",
        maxWidth: "360px",
        minWidth: "35%",
        maxHeight: "295px",
        minHeight: "295px",
        borderRadius: "20px",
        boxShadow: 12,
        marginTop: 2,
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(5px)",
        padding: "10px",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontSize: "16pt",
              marginBottom: "5px",
            }}
          >
            Add Income
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                borderRadius: "12px",
                backgroundColor: "#3290FF",
                color: "white",
                maxHeight: "34px",
                maxWidth: "34px",
                fontSize: "20pt",
              }}
            >
              +
            </Button>
          </Box>
        </Box>

        <Divider sx={{ marginBottom: "15px" }} />
        <Box sx={{display:'flex',flexDirection:'column', width: '70%'}}>
        <TextField
          id="outlined-basic"
          label="Income Name"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
          InputProps={{
            style: inputStyles,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Income Count"
          variant="outlined"
          onChange={(e) => setAmount(e.target.value)}
          InputProps={{
            style: inputStyles,
          }}
        />
        </Box>
        {/* <TextField
          id="outlined-basic"
          label="Income Date"
          variant="outlined"
          InputProps={{
            style: inputStyles,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Income Date"
          variant="outlined"
          InputProps={{
            style: inputStyles,
          }}
        /> */}
      </CardContent>
    </Card>
  );
}