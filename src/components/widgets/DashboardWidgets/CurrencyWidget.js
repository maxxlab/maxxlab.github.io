// import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
// import React from "react";
// import { SvgIcon } from "@mui/material";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import axios from "axios";
import { Component } from "react";
import "./styles/CurrencyWidget.css"
// export default function CurrencyWidget() {
//   return (
//     <Card
//       sx={{
//         borderRadius: "20px",
//         width: {
//           xs: 404,
//           sm: 404,
//           md: 304,
//           lg: 204,
//           xl: 204,
//         },
//         height: "84px",
//         marginTop: '15px',
//         boxShadow: 12,
//         margin: 2,
//         border: "1px solid black",
//       }}
//     >
//       <CardContent
//         sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
//       >
//         <AttachMoneyIcon sx={{ fontSize: 40 }} />
//         <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '20px'}}>
//           <Typography>USD</Typography>
//           <Typography sx={{ fontSize: 24 }}>37.70</Typography>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// }
// import React, { Component } from 'react';
// import axios from 'axios';
// import "./pie.css";


class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      USD: [],
    };
  }

  componentDidMount() {
    let url ='https://api.exchangerate.host/latest';
    axios.get(url, {
      params: {
        base: 'UAH',
        symbols: "PLN,EUR,USD,GBP",
      },
    })
      .then(response => {
        this.setState({ USD: Object.entries(response.data.rates) });
      })
      .catch(error => {
        console.error('Помилка отримання даних:', error);
      });
  }

  render() {
    const { USD } = this.state;

    return (
      <div className='hello'>
        <ul className='box'>
          {USD.map(([currency, rate]) => (
            <li className='li-elemnt-price' key={currency}>
               <img className='img-dollar' src="https://cdn-icons-png.flaticon.com/512/25/25228.png" alt="sad" />
               <div className='curr-box'>
               <span className='span-title'>{currency} </span>
               <span className='span-number'>{(1/rate).toFixed(2)}</span>
               
               </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MyClass;