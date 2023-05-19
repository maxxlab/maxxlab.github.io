import Button from "@mui/material/Button";
import { TextField, Typography } from '@mui/material';
import { Box, width } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./styles/Carousel.css"
const client = axios.create({
   baseURL: "https://back-end-hack.up.railway.app/api/",
 });

function UncontrolledExample() {
   const inputStyles = {
      borderRadius: "10px",
      marginBottom: "10px",
      height: "40px",
      fontSize: "13pt",
      width: '100%',
      color: '#FFFFFF'
    };
    
   const [cards, setCards] = useState([]);

  useEffect(() => {
    client.get("").then((response) => {
      setCards(response.data.cardList);
      // console.log(response)
    });
  }, []);
  return (
    <Carousel className='card-pix' style={{margin:'0 auto'}}>
       {cards.map((card) => (
            <Carousel.Item  style={{width: '70%',borderRadius:20,marginLeft:'15%'}}>
               <img
               style={{borderRadius:'50px'}}
                  className="d-block w-100"
                  src="https://i.pinimg.com/564x/bc/a0/32/bca032c91a2998cca258928895ea649d.jpg"
                  alt="Second slide"
               />

               <Carousel.Caption style={{width:'100%'}}>

                  <h3><Typography sx={{fontSize:'1.5rem',fontWeight:700,display:'flex',justifyContent:'flex-start'}}>{card.cardNum}</Typography></h3>
                  <Box sx={{display:'flex',width:'60%', justifyContent:'space-between'}}>
                  <p><Typography sx={{fontSize:'1.5rem',fontWeight:700, display:'flex',justifyContent:'flex-start'}}>${card.currentBalance}</Typography></p>
                  <p><Typography sx={{fontSize:'1.2rem',display:'flex'}}>{card.expiryDate}</Typography></p>
                  </Box>
               </Carousel.Caption>
            </Carousel.Item>
       ))}
       <Carousel.Item  style={{width: '70%',borderRadius:20,marginLeft:'15%'}}>
               <img
               style={{borderRadius:'50px'}}
                  className="d-block w-100"
                  src="https://i.pinimg.com/564x/bc/a0/32/bca032c91a2998cca258928895ea649d.jpg"
                  alt="Second slide"
               />

               <Carousel.Caption>
                  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                     <Box>
                     <Typography>Car Number</Typography>
                  <h3><Typography><TextField
                  id="outlined-basic"
                  label="Card Number"
                  variant="outlined"
                  InputProps={{
                     style: inputStyles,
                  }}
                  /></Typography></h3>
                     </Box>

                  <Button
                     variant="contained"
                     sx={{
                     borderRadius: "12px",
                     backgroundColor: "#3290FF",
                     color: "white",
                     maxHeight: '34px',
                     maxWidth: '34px',
                     fontSize: '20pt',
                     border: 'none'
                     }}
                  >
                     +
          </Button>
                  </Box >
                  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <Box>
                  <Typography>Current Balance</Typography>
                   <h3><Typography><TextField
                  id="outlined-basic"
                  label="Current Balance"
                  variant="outlined"
                  InputProps={{
                     style: inputStyles,
                  }}
                  /></Typography></h3>
                        </Box>

                  <Box>
                  <Typography>Expiry Date</Typography>
                   <h3><Typography><TextField
                  id="outlined-basic"
                  label="Expiry Date"
                  variant="outlined"
                  InputProps={{
                     style: inputStyles,
                  }}
                  /></Typography></h3>
                        </Box>

                  </Box>

               </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
   // <div>
   //    {cards.map((card) => {
   //        return (
   //          <>
   //            <Typography>{card.cardNum}</Typography>
   //            <Typography>{card.currentBalance}</Typography>
   //            <Typography>{card.expiryDate}</Typography>
   //          </>
   //          // <div className="post-card" key={post.id}>
   //          //   <h2 className="post-title">{post.title}</h2>
   //          //   <p className="post-body">{post.body}</p>
   //          //   <div className="button">
   //          //     <div className="delete-btn">Delete</div>
   //          //   </div>
   //          // </div>
   //        );
   //      })}
   // </div>
  );
}

export default UncontrolledExample;