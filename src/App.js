import React from 'react';
import './App.css';
import User from './componenets/User';

const friends = [
  { id: 1, name: "Ahmet" },
  { id: 2, name: "Mehmet" },
  { id: 3, name: "Zeynep" },
  { id: 4, name: "Ayse" },
  { id: 5, name: "Yasemin" }
]
function App() {
  return (
    < >
      <User name="Mehmet" sname="Kara" isLoggedIn={true}
        friends={friends} />
    </>
  );
}

export default App;
