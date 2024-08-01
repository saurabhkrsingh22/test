import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBill } from '../store/billSlice';
import { addCustomer } from '../store/customerSlice';
import './BillGenerator.css'; // Import the CSS file

const BillGenerator = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerMobile, setCustomerMobile] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [billingDate, setBillingDate] = useState('');
  const [items, setItems] = useState([{ name: '', quantity: 0, price: 0 }]);
  const [totalQuantity, setTotalQuantity] = useState(0); // New state for total quantity
  const [totalAmount, setTotalAmount] = useState(0); // New state for total amount
  const dispatch = useDispatch();

  const handleAddItem = () => {
    setItems([...items, { name: '', quantity: 0, price: 0 }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = items.slice();
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const newBill = {
      customerName,
      customerMobile,
      customerAddress,
      billingDate,
      items,
      totalPrice,
    };
    dispatch(addBill(newBill));
    dispatch(addCustomer({
      name: customerName,
      quantity: totalQuantity,
      date: billingDate,
      contact: customerMobile,
      address: customerAddress,
      price: totalPrice,
    }));
    alert("Bill Generated Successfully");
  };

  useEffect(() => {
    const totalQty = items.reduce((total, item) => total + parseInt(item.quantity || 0, 10), 0);
    const totalAmt = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    setTotalQuantity(totalQty);
    setTotalAmount(totalAmt);
  }, [items]);

  return (
    <div className='content'>
      <h1>Bill Management System</h1>
      <div className="bill-generator">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Customer Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <div>
            <label>Customer Mobile</label>
            <input
              type="text"
              value={customerMobile}
              onChange={(e) => setCustomerMobile(e.target.value)}
            />
          </div>
          <div>
            <label>Customer Address</label>
            <input
              type="text"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
            />
          </div>
          <div>
            <label>Billing Date</label>
            <input
              type="date"
              value={billingDate}
              onChange={(e) => setBillingDate(e.target.value)}
            />
          </div>
          {items.map((item, index) => (
            <div key={index} className="item">
              <label>Product Name</label>
              <input
                type="text"
                placeholder="Product Name"
                value={item.name}
                onChange={(e) => handleItemChange(index, 'name', e.target.value)}
              />
              <br />
              <label>Quantity</label>
              <input
                type="number"
                placeholder="Quantity"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
              />
              <br />
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e) => handleItemChange(index, 'price', e.target.value)}
              />
              <p className='txt'>Total: {item.price * item.quantity}</p>
            </div>
          ))}
          <button type="button" className="add-item-button" onClick={handleAddItem}>Add Item</button>
          <button type="submit" className="submit-button">Generate Bill</button>
        </form>
        <div className="totals">
          <p>Total Quantity of All Items: {totalQuantity}</p>
          <p>Total Amount of All Items: {totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default BillGenerator;
