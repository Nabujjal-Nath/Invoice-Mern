import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Table() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/details').then(res => {
            console.log(res);
            setList(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])
    
    var sum=0;

  const tableData=list.map((item,index)=>{
      const {desc,quantity,unit_price,total}=item;
       sum=sum+total;
      return(
        <tr key={index}>
        <td>{index}</td>
        <td>{desc}</td>
        <td>{quantity}</td>
        <td>{unit_price}</td>
        <td>{total}</td>
     </tr>
      )
  })

    return (

        <div>
            
            <table id='students'>
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                    </tr>
                    {tableData}
                    <tr>
                       <td>Subtotal</td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td>{sum}</td>
                    </tr>
                    <tr>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td>{0.00}</td>
                    </tr>
                    <tr>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{sum+.00}</td>
                 </tr>

                </tbody>
            </table>
        </div>

    )

}
export default Table;