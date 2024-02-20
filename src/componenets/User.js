import ProTypes from "prop-types";

function User({ name, sname, isLoggedIn, age, friends }) {
    return (
        <>
            <div>
                {isLoggedIn ? `Selam ${name} ${sname} ${age}` : "Giriş Yapınız!"}
            </div>
            {friends && friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
        </>
    )
}
User.propTypes = {
    name: ProTypes.string.isRequired,
    //isRequried zorunlu alan olduğunu belirtir. Eğer bu alana değeri verilmemişse uyarı verir
    sname: ProTypes.string.isRequired,
    isLoggedIn: ProTypes.bool.isRequired,
    //age ile ilgili işlem yapılmayacaksa matematiksel bunu hem string hem number yapabiliriz.
    age: ProTypes.oneOfType([ProTypes.string, ProTypes.number]),
    friends: ProTypes.array,
}

export default User;