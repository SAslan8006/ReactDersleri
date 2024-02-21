import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Ahmet");
  const [age, setAge] = useState(20);
  const [friends, setFriends] = useState(["Ahmet", "Mehmet", "Zeynep", "Ayse", "Yasemin"]);
  return (
    <div className='App' >
      <h1>Merhaba {name} Yaşım {age}</h1>
      <button onClick={() => setName("Mehmet")}>İsim Değiştir</button>
      <button onClick={() => setAge(25)}>Yaş Değiştir</button>
      <hr />
      <h1>Arkadaslar</h1>
      {friends.map((friend, index) => <div key={index}>{friend}</div>)}
      <button onClick={() => setFriends([...friends, "Ahmet"])}>Arkadaş Değiştir</button>

    </div>
  );
}

export default App;
