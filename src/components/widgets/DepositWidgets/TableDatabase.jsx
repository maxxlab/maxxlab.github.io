import axios from 'axios';
import React, { Component, useState } from 'react';
import "./styles/table.css";


class TableDataBaseofDeposits extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
      Table: [],
    };
  }
  

  componentDidMount() {
   const client = axios.create({
      baseURL: "https://back-end-hack.up.railway.app/api/operations/DEPOSIT/all",
    });
    client.get("").then((response) => {
      this.setState({ Table: response.data })
     console.log(response.data)
   });

  }

  render() {
   const { Table } = this.state;
   console.log(Table);
   

    return (
      <div style={{borderRadius:'50px'}}>
      <table style={{width: '95%',margin: ' 0 auto',  borderRadius: '10px', marginTop: '2%', background: 'rgba(255, 255, 255, 0.9)',backdropFilter: 'blur(5px)'}} className='table'>
         <thead>
         <tr >
            <th scope="col" >Bank</th>
            <th scope="col">Status</th>
            <th scope="col">Amount</th>
            <th scope="col">Percent</th>
            <th scope="col">Date</th>
            <th scope="col">Buttons</th>
         </tr>
         </thead>
         <tbody>
            {
               Table.map(current =>(
            <tr key={current.id}>
               <td className='td-title'>{current.bankName}</td>
               <td  className='td-nubm'><button  type="button" className="btn-good">{current.active}</button></td>
               <td  className='td-nubm'>$ {current.amount}</td>
               <td  className='td-nubm'>{current.percent} %</td>
               <td  className='td-nubm'>22.02.2003</td>
               <td  className='td-butt'>
                  <button  type="button" className="btn btn-outline-primary">Show</button>
                  <button  type="button"  className="btn btn-outline-warning">Edit</button>
               </td>
            </tr>
               ))
            }

            
         </tbody>
      </table>
      </div>
    );
  }
}

export default TableDataBaseofDeposits;