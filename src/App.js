import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from './componenets/Route/About';
import Contacts from './componenets/Contacts/index';
import Users from './componenets/Route/Users';
import User from './componenets/Route/User';
import Error404 from './componenets/Route/Error404';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><NavLink activeStyle={{ backgroundColor: "red" }} to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li>

          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path='/users' element={<Users />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='*' element={<Error404 />} />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
