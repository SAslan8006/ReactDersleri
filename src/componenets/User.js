function User({ name, sname, isLoggedIn }) {
    return (
        <div>{isLoggedIn ? `Selam ${name} ${sname}` : "Giriş Yapınız!"}</div>
    )
}

export default User;