import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function User() {
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const [user, setUser] = useState([])

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUser(res.data))
            .finally(() => setLoading(false))
    }, [id])
    return (
        <div>
            <h1>User Detail</h1>
            {loading && <div>Loading...</div>}
            <div>
                <p>İsim:{user.name}</p>
                <p>Kullanıcı Adı:{user.username}</p>
                <p>Email:{user.email}</p>
                <p>Web site:{user.website}</p>
                <Link to={`/user/${parseInt(id) + 1}`}>Next User</Link>
            </div>
        </div >
    )
}

export default User