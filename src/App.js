import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './componenets/Route/About';
import Contacts from './componenets/Contacts/index';
import Users from './componenets/Route/Users';
import User from './componenets/Route/User';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contacts">Contacts</a></li>
            <li><a href='/users'>Users</a></li>
            <li><a href='/user'>User</a></li>

          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path='/users' element={<Users />} />
          <Route path='/user/:id' element={<User />} />

        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
