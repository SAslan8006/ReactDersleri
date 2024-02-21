import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App' >
      <h1>Sayaç</h1>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
      <button onClick={() => setCount(count + 1)}>Yükselt</button>

    </div >
  );
}

export default App;
