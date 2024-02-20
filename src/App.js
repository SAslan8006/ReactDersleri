import React from 'react';
import './App.css';
import Header from './componenets/Header';
const name = "Mahmut";
const sname = "Kara"
const isLoggedIn = false;
function App() {
  return (
    < >
      <h1>{isLoggedIn && `Benim Adım ${name} soyadım ${sname}`}</h1>
      <h1>{!isLoggedIn && `Giriş Yapmadınız...`}</h1>
      <h1>{isLoggedIn ? `Benim Adım ${name} soyadım ${sname}` : `Giriş Yapmadınız...`}</h1>


    </>
  );
}

export default App;
