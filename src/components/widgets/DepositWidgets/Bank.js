import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Card, CardContent, CardMedia, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function BankDeposit() {
  const [bank, setBank] = React.useState("");

  const handleChange = (event) => {
    setBank(event.target.value);
  };

  return (
    <>
      <Card
        sx={{
          marginTop: "30px",
          maxWidth: "100%",
          minWidth: "100%",
          minHeight: "400px",
          borderRadius: "20px",
          boxShadow: 12,
          background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(5px)',
        padding:'20px'
        }}
      >
        <CardContent>
          <Box>
            <Box>
            <Typography sx={{ fontSize: '26pt',fontWeight: 600, opacity:0.8  }}>Take Deposit</Typography>
            </Box>
            <Divider sx={{backgroundColor:'rgba(151, 151, 151, 0.25)' , height: 2}}/>
            <Box>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'90%',margin:'0 auto', height:'70px'}}>
                  <Typography sx={{fontSize:'22px'}}>Choose Bank</Typography>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bank}
                    label="Bank"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Privat24</MenuItem>
                    <MenuItem value={2}>MonoBank</MenuItem>
                    <MenuItem value={3}>Oschadbank</MenuItem>
                  </Select>
                </Box >
                    <Divider sx={{backgroundColor:'rgba(151, 151, 151, 0.25)' , height: 2}}/>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'90%',margin:'0 auto', height:'70px'}}>
                    <Typography sx={{fontSize:'22px'}}>Write Amount</Typography>
                    <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    sx={{ width: "170px" }}
                  />
                </Box>
                <Divider sx={{backgroundColor:'rgba(151, 151, 151, 0.25)' , height: 2}}/>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'90%',margin:'0 auto', height:'70px'}}>
                  <Typography sx={{fontSize:'22px'}}>Percent</Typography>
                  <Typography sx={{fontSize:'22px'}}>1.6%</Typography>
                </Box>
                <Divider sx={{backgroundColor:'rgba(151, 151, 151, 0.25)' , height: 2}}/>
            </Box>
            <Box sx={{margin:'0 auto'}}>
            <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4FE4DB",
                  margin:'0 auto',
                  color: "white",
                  marginBottom: "0px",
                  width:'100%',
                  marginTop:'40px'
                }}
              >
                Buy
              </Button>
            </Box>
          </Box>
          
        </CardContent>
      </Card>
    </>
  );
}
