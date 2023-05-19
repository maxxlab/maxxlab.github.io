import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const inputStyles = {
  borderRadius: "10px",
  marginBottom: "10px",
  height: "50px",
  fontSize: "13pt",
};

export default function AddIncome() {
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
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "16pt",
            marginBottom: "5px",
          }}
        >
          Add Income
        </Typography>
        <Divider sx={{ marginBottom: "15px" }} />
        <TextField
          id="outlined-basic"
          label="Income Name"
          variant="outlined"
          InputProps={{
            style: inputStyles,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Income Count"
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
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "12px",
              backgroundColor: "#3290FF",
              color: "white",
              maxHeight: '34px',
              maxWidth: '34px',
              fontSize: '20pt'
            }}
          >
            +
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
