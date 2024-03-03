import React, { useState } from 'react'
import { send } from './socketApi'
function Pallet() {
    const [color, setColor] = useState("#000000")
    return (
        <div className='pallete'>
            <input type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)} />
            <button onClick={() => send(color)} >Click</button>
        </div>
    )
}

export default Pallet