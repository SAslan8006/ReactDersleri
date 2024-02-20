function User({ name, sname, isLoggedIn, friends }) {
    return (
        <>
            <div>{isLoggedIn ? `Selam ${name} ${sname}` : "Giriş Yapınız!"}</div>
            {friends.map((friend, index) => <div key={friend.id}>{friend.name}</div>)}
        </>
    )
}

export default User;