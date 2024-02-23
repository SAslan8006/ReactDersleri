import axios from 'axios';
import React, { useEffect, useState } from 'react'

function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res.data)
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