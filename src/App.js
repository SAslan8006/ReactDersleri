import { useEffect } from 'react';
import './App.css';
import Pallet from './componenets/RealTime/frontend/Pallet';
import { init } from './componenets/RealTime/frontend/socketApi';

function App() {
  useEffect(() => {
    init()
  }, []);
  return (
    <div className='App'>
      <Pallet></Pallet>
    </div>
  )
}

export default App;
