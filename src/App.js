import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


import CustomerTable from './components/CustomerTable';
import BillGenerator from './components/BillGenerator';
import './styles.css';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Homepage />

          <div className="content">
            <Routes>
             
              <Route path="/customers" element={<CustomerTable/>} />
              <Route path="/bill-generator" element={<BillGenerator/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
