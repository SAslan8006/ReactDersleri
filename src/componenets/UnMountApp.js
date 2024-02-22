import React, { useState, useEffect } from 'react';
import './App.css';
import Sayac from './componenets/Sayac';
import Example from './componenets/Example';
import UseEfectUy from './componenets/UseEffect';
import Unmount from './componenets/Unmount';

function App() {
    const [visible, setVisible] = useState(true);
    return (
        <div className='App' >
            {visible && <Unmount />}
            <button onClick={() => setVisible(!visible)}>Kaldır</button>
        </div >
    );
}

export default App;
