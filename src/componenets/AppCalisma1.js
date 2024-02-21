import React from 'react';
import './App.css';
import User from './User';

const friends = [
  { id: 1, name: "Ahmet", age: 23 },
  { id: 2, name: "Mehmet", age: 29 },
  { id: 3, name: "Zeynep", age: 32 },
  { id: 4, name: "Ayse", age: 45 },
  { id: 5, name: "Yasemin", age: 40 }
]
function App() {
  return (
    < >
      <User
        name="Mehmet"
        sname="Kara"
        age={23}
        isLoggedIn={true}
        friends={friends}
        address={{
          title: 'Ataşehir/İstanbul',
          zip: 34755
        }}
      />
    </>
  );
}

export default App;
