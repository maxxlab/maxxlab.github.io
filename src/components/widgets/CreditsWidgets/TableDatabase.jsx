import React, { Component } from 'react';
import "./styles/table.css";


class TableDataBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Table: [],
    };
  }

  componentDidMount() {
  
  }

  render() {
   

    return (
      <div style={{borderRadius:'50px'}}>
      <table style={{width: '95%',margin: ' 0 auto',  borderRadius: '10px', marginTop: '2%'}} className='table'>
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
            <tr >
               <td className='td-title'>Privat Bank</td>
               <td  className='td-nubm'><button  type="button" className="btn-good">Active</button></td>
               <td  className='td-nubm'>$ 2000</td>
               <td  className='td-nubm'>2 %</td>
               <td  className='td-nubm'>22.02.2003</td>
               <td  className='td-butt'>
                  <button  type="button" className="btn btn-outline-primary">Show</button>
                  <button  type="button"  className="btn btn-outline-warning">Edit</button>
               </td>
            </tr>
            <tr >
               <td className='td-title'>Privat Bank</td>
               <td  className='td-nubm'><button  type="button" className="btn-good">Active</button></td>
               <td  className='td-nubm'>$ 2000</td>
               <td  className='td-nubm'>2 %</td>
               <td  className='td-nubm'>22.02.2003</td>
               <td  className='td-butt'>
                  <button  type="button" className="btn btn-outline-primary">Show</button>
                  <button  type="button"  className="btn btn-outline-warning">Edit</button>
               </td>
            </tr> 
            <tr >
               <td className='td-title'>Privat Bank</td>
               <td  className='td-nubm'><button  type="button" className="btn-red">Active</button></td>
               <td  className='td-nubm'>$ 2000</td>
               <td  className='td-nubm'>2 %</td>
               <td  className='td-nubm'>22.02.2003</td>
               <td  className='td-butt'>
                  <button  type="button" className="btn btn-outline-primary">Show</button>
                  <button  type="button"  className="btn btn-outline-warning">Edit</button>
               </td>
            </tr> 
            <tr >
               <td className='td-title'>Privat Bank</td>
               <td  className='td-nubm'><button  type="button" className="btn-good">Active</button></td>
               <td  className='td-nubm'>$ 2000</td>
               <td  className='td-nubm'>2 %</td>
               <td  className='td-nubm'>22.02.2003</td>
               <td  className='td-butt'>
                  <button  type="button" className="btn btn-outline-primary">Аогвчити</button>
                  <button  type="button"  className="btn btn-outline-warning">Edit</button>
               </td>
            </tr> 
            <tr >
               <td className='td-title'>Privat Bank</td>
               <td  className='td-nubm'><button  type="button" className="btn-red">Active</button></td>
               <td  className='td-nubm'>$ 2000</td>
               <td  className='td-nubm'>2 %</td>
               <td  className='td-nubm'>22.02.2003</td>
               <td  className='td-butt'>
                  <button  type="button" className="btn btn-outline-primary">Show</button>
                  <button  type="button"  className="btn btn-outline-warning">Edit</button>
               </td>
            </tr> 
            <tr >
            <td className='td-title'>Privat Bank</td>
            <td  className='td-nubm'><button  type="button"  className="btn-red">Active</button></td>
            <td  className='td-nubm'>$ 2000</td>
            <td  className='td-nubm'>2 %</td>
            <td  className='td-nubm'>22.02.2003</td>
            <td  className='td-butt'>
               <button  type="button" className="btn btn-outline-primary">Show</button>
               <button  type="button"  className="btn btn-outline-warning">Edit</button>
            </td>
            </tr> 
            <tr >
               <td className='td-title'>Privat Bank</td>
               <td  className='td-nubm'><button  type="button" className="btn-red">Active</button></td>
               <td  className='td-nubm'>$ 2000</td>
               <td  className='td-nubm'>2 %</td>
               <td  className='td-nubm'>22.02.2003</td>
               <td  className='td-butt'>
                  <button  type="button" className="btn btn-outline-primary">Show</button>
                  <button  type="button"  className="btn btn-outline-warning">Edit</button>
               </td>
            </tr> 
            <tr >
               <td className='td-title'>Privat Bank</td>
               <td  className='td-nubm'><button  type="button" className="btn-good">Active</button></td>
               <td  className='td-nubm'>$ 2000</td>
               <td  className='td-nubm'>2 %</td>
               <td  className='td-nubm'>22.02.2003</td>
               <td  className='td-butt'>
                  <button  type="button" className="btn btn-outline-primary">Show</button>
                  <button  type="button"  className="btn btn-outline-warning">Edit</button>
               </td>
            </tr>
         </tbody>
      </table>
      </div>
    );
  }
}

export default TableDataBase;