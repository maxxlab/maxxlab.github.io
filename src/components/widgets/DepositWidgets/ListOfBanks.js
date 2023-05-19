// import React from "react";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import { Card, CardContent, CardMedia } from "@mui/material";
// import { Typography } from "@mui/material";

// export default function ListOfBanks() {
//   return (
//     <>
//       <Card
//         sx={{
//           marginTop: "30px",
//           maxWidth: "504px",
//           minWidth: "504px",
//           minHeight: "882px",
//           borderRadius: "20px",
//           boxShadow: 12,
//           margin: 2,
//           border: "1px solid black",
//         }}
//       >
//         <CardContent></CardContent>
//       </Card>
//     </>
//   );
// }




import React, { Component } from 'react';
import "./styles/ListOfBanks.css";

class ListOfBanksOfDepoits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      fakeList: [
         {
            id: 1,
            name: 'BTCsadsda',
            price_change_percentage_24h: 0.002,
            current_price: 2400,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
         },
         {
            id: 2,
            name: 'ETHadsad',
            price_change_percentage_24h: -0.002,
            current_price: 1040,
            image: 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663'
         },
         {
            id: 3,
            name: 'BNBsadsd',
            price_change_percentage_24h: 0.002,
            current_price: 20000,
            image: 'https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546'
         },
         {
            id: 4,
            name: 'BNBsdsd',
            price_change_percentage_24h: 0.002,
            current_price: 12000,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
         },
         {
            id: 5,
            name: 'LTCdsd',
            price_change_percentage_24h: -2.002,
            current_price: 20340,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
         },
         {
            id: 6,
            name: 'ARBsd',
            price_change_percentage_24h: 0.002,
            current_price: 2020,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
         },
         {
          id: 6,
          name: 'ARBsd',
          price_change_percentage_24h: 0.002,
          current_price: 2020,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
       }
      ]
    };
  }


  render() {
   const { List,fakeList } = this.state;
   console.log(fakeList);
  

    return (
      <div className='bank-box'>
        <ul className='ul-bank'>
        {
           fakeList.map(current =>(
              <li key={current.id}  className={current.id % 2 === 0 ? 'red-box li-element-bank' : 'green-box li-element-bank'}>
                 <div className='logo'>
                     <img className='btc-img' src={current.image} alt="" />
                     <div className='info'>
                           <h1 className='h1-tetx'>{current.name}</h1>  
                           <div className={current.price_change_percentage_24h < 0 ? 'red' : 'green'}>
                              {(current.price_change_percentage_24h).toFixed(3)}%
                           </div>  
                     </div>
                 </div>
                  <img className='imageCur' src={current.price_change_percentage_24h < 0 ?   'https://i.pinimg.com/originals/21/28/79/212879a64e21926dd6883a6170e4cd64.png' : 'https://i.pinimg.com/originals/e9/9d/c4/e99dc463cf0b6002abe84280d060e22d.png'} alt="" />
                  <span className='curr-price-list'>${current.current_price}</span>

                </li>
           ))
        }
        </ul>
      </div>
    );
  }
}

export default ListOfBanksOfDepoits;
