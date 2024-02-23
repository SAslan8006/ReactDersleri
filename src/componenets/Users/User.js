import React, { useEffect, useState } from 'react'

function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
                // setLoading(false)
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div>
            <h1>Users</h1>
            {loading && <div>Loading...</div>}
            {users.map((users) => (
                <div key={users.id}>{users.name}</div>
            ))}
        </div>
    )
}

export default User