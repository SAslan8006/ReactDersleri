import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [number, setNumber] = useState(0)
    const [name, setName] = useState("Ahmet");

    useEffect(() => {
        console.log("State Güncellendi")
    })
    useEffect(() => {
        console.log("Component Mount Edildi")
    }, [])

    useEffect(() => {
        console.log("useEffect çalıştı")
    }, [number])

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Değiştir</button>
            <br />
            <h1>{name}</h1>
            <button onClick={() => setName("Mehmet")}>Değiştir</button>
        </div>
    )
}

export default UseEffect
