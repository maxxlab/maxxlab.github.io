
import React, { Component } from 'react';
import "./styles/ListOfCryptos.css";

class ListOfCryptos extends Component {
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
            id: 7,
            name: 'TRCsd',
            price_change_percentage_24h: -10.002,
            current_price: 2000,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
         },
         {
          id: 8,
          name: 'TRCsd',
          price_change_percentage_24h: -10.002,
          current_price: 2000,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
       },
       {
        id: 9,
        name: 'TRCsd',
        price_change_percentage_24h: -10.002,
        current_price: 2000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
     },
     {
      id: 10,
      name: 'TRCsd',
      price_change_percentage_24h: -10.002,
      current_price: 2000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
   },
   {
    id: 11,
    name: 'TRCsd',
    price_change_percentage_24h: -10.002,
    current_price: 2000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png'
 }
      ]
    };
  }


//   componentDidMount() {
//    let url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';
//    //  let url ='https://api.coingecko.com/api/v3/coins/list';
//    //  let url = 'https://api.polygon.io/v3/reference/tickers/types?asset_class=crypto&apiKey=Fn0PwswoV4RTs5EB760VdIUWUxfFR17O'


// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     // Обробка даних у форматі JSON
//     this.setState({ List: data })
//    console.log(data);
//   })
//   .catch(error => {
//     // Обробка помилки
//     console.error('Помилка отримання даних:', error);
//   });
//     }


  render() {
   const { List,fakeList } = this.state;
   console.log(fakeList);

    return (
      <div className='crypto-box'>
        <ul className='ul-crypto'>
        {
           fakeList.map(current =>(
              <li key={current.id}  className={current.id % 2 === 0 ? 'red-box li-element' : 'green-box li-element'}>
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

export default ListOfCryptos;