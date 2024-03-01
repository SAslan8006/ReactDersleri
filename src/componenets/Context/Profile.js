import React, { useContext, useState } from 'react'
import UserContext from '../../context/UserContext'

function Profile() {
    const { user, setUser } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser({ id: 1, username: "süleyman", bio: "lorem ipsum" })
        }, 1500)
    }
    const handleLogout = () => {
        setLoading(false);
        setTimeout(() => {
            setUser(null)
        }, 1500)
    }
    return (
        <div>
            {!user && <button onClick={handleLogin}>{loading ? "Login..." : "Login"}</button>}
            <code>{JSON.stringify(user)}</code>
            <br />
            {user && <button onClick={handleLogout}>Logout</button>}
        </div>
    )
}

export default Profile