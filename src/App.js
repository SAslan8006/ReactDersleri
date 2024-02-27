import React, { useState } from 'react';
import Header from './componenets/Memoization/Header';

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className='App'>
      <Header number={number < 5 ? 0 : number}></Header>
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Arttır</button>
    </div>
  );
}

export default App;
