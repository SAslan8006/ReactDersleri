import React from 'react';
import './App.css';
import Header from './componenets/Header';
import User from './componenets/User';

function App() {
  return (
    < >
      <User name="Mehmet" sname="Kara" isLoggedIn={false} />
    </>
  );
}

export default App;
