import React, { useEffect, useState } from 'react'

function Unmount() {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState("Ahmet");

    useEffect(() => {
        console.log("Component Mount Edildi")
        const interval = setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        console.log("number state güncellendi")
    }, [number])


    useEffect(() => {
        console.log("name state güncellendi")
    }, [name])

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Değiştir</button>
            <br />
        </div>
    )
}

export default Unmount

