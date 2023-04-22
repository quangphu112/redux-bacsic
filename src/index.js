import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Company from './components/company/company';
import Division from './components/division/divison';
import User from './components/user/user';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/company' element={<Company/>} />
          <Route path='/division' element={<Division/>} />
          <Route path='/user' element={<User/>} />
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
