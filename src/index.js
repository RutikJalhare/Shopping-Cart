
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cart from './Cart';
import Info from './Info';
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Provider store={store}>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <App />} />
      <Route path='/mycart' element={ <Cart />} />
      <Route path='/info/:productid' element={ <Info />} />
    </Routes>
    </BrowserRouter>
    </Provider>
   
  </React.StrictMode>
);
















