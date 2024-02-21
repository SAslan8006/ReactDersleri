import React, { useState } from 'react';

function Sayac() {
    const [count, setCount] = useState(0);
    const azalt = () => {
        if (count > 0) setCount(count - 1)
    }

    return (
        <div className='App' >
            <h1>Sayaç</h1>
            <h1>{count}</h1>
            <button onClick={azalt}>Azalt</button>
            <button onClick={() => setCount(count + 1)}>Yükselt</button>

        </div >
    );
}

export default Sayac;
