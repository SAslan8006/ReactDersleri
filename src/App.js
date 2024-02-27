import React, { useState, useMemo } from 'react';
import Header from './componenets/Memoization/Header';
// const data = { "number": "Mehmet" } // Bu şekilde düzerlenebiliyor memo çalışması için adresi global yaptığında adres fiziksel sabit olur

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const data = useMemo(() => { return { "name": "Mehmet" } }, [])
  const data1 = useMemo(() => { return { "name": "Mehmet", number } }, [number])
  const data3 = useMemo(() => { return calculateObject() }, [])
  const data4 = calculateObject();
  const data5 = useMemo(() => { return calculateObject(); }, [])
  return (
    <div className='App'>
      <Header data={data5}></Header>
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Arttır</button>
      <br />
      <br />
      <input value={text} onChange={({ target }) => setText(target.value)} />
    </div>
  );
}

function calculateObject() {
  console.log("calculateObject");
  for (let i = 0; i < 1000000000; i++) { }
  console.log("calculateObject completed");
  return { "name": "Mehmet" }
}

export default App;
