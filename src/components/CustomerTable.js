import React from 'react';
import { useSelector } from 'react-redux';
import './CustomerTable.css';

const CustomerTable = () => {
  const customers = useSelector((state) => state.customers);

  return (
    <div className="ctable">
      <table>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Product Quantity</th>
            <th>Billing Date</th>
            <th>Contact Details</th>
            <th>Address</th>
            <th>Billing Price</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.quantity}</td> 
              <td>{customer.date}</td>
              <td>{customer.contact}</td>
              <td>{customer.address}</td>
              <td>{customer.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
