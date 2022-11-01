import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Employees from './Pages/Employees';
import "@fontsource/ibm-plex-serif"; // Defaults to weight 400.
import "@fontsource/russo-one"; // Defaults to weight 400.
// import 'bootstrap/dist/css/bootstrap.min.css';

//Redux
import { Provider } from 'react-redux';
import store from './utils/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/employee-list' element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
