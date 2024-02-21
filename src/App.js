import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Ahmet");
  const [age, setAge] = useState(20);
  return (
    <div className='App' >
      <h1>Merhaba {name} Yaşım {age}</h1>
      <button onClick={() => setName("Mehmet")}>İsim Değiştir</button>
      <button onClick={() => setAge(25)}>Yaş Değiştir</button>

    </div>
  );
}

export default App;
