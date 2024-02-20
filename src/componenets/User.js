import ProTypes from "prop-types";

function User({ name, sname, isLoggedIn, age, friends }) {
    return (
        <>
            <div>{isLoggedIn ? `Selam ${name} ${sname} ${age}` : "Giriş Yapınız!"}</div>
            {friends.map((friend, index) => <div key={friend.id}>{friend.name}</div>)}
        </>
    )
}
User.propTypes = {
    name: ProTypes.string,
    sname: ProTypes.string,
    isLoggedIn: ProTypes.bool,
    age: ProTypes.number,
    friends: ProTypes.object
}

export default User;