import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoalsCharExp from "../../Graphs/Expends/GoalsChar";

export default function MakeLimitIncomeDonate() {
  return (
    <Card
      sx={{
        marginTop: "-100px",
        maxWidth: "61%",
        minWidth: "45%",
        maxHeight: "401px",
        minHeight: "501px",
        borderRadius: "20px",
        boxShadow: 12,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)',
        padding: '20px'
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <MakeSmth  makeText="Make Limit" />
          <MakeSmth makeText="Make Income" />
          <MakeSmth makeText="Make Donate" />
        </Box>
        <GoalsCharExp/>
      </CardContent>
    </Card>
  );
}

function MakeSmth(props) {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center",  }}
      >
        <Typography sx={{ marginBottom: "15px" }}>{props.makeText}</Typography>
        <Card>
          <CardContent
            sx={{
              backgroundColor: "#FDFDFD",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "80px",
              }}
            >
              <TextField
                value="10000"
                onChange={(e) => e.target.value}
                size="small"
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4FE4DB",
                  marginTop: "15px",
                  borderRadius: "12px",
                  color: "white",
                }}
              >
                OK
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
