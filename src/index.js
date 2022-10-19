import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Employees from './Pages/Employees';

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
