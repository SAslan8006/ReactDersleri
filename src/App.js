import { useEffect, useState } from 'react';
import './App.css';
import Pallet from './componenets/RealTime/frontend/Pallet';
import { init, subscribe } from './componenets/RealTime/frontend/socketApi';

function App() {
  const [activeColor, setColor] = useState("#000000");
  useEffect(() => {
    init();
    subscribe((color) => {
      setColor(color);
    });
  }, []);
  return (
    <div className='App' style={{ backgroundColor: activeColor }}>
      <h1>{activeColor}</h1>
      <Pallet activeColor={activeColor} />
    </div>
  )
}

export default App;
