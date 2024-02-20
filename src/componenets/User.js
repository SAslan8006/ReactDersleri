import ProTypes from "prop-types";

function User({ name, sname, isLoggedIn, age, friends, address }) {
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
    age: ProTypes.oneOfType([ProTypes.string, ProTypes.number]).isRequired,
    friends: ProTypes.array,
    //Shape, bir nesnenin içeriğini belirlemek için PropTypes içinde kullanılır.
    address: ProTypes.shape({
        title: ProTypes.string.isRequired,
        zip: ProTypes.number.isRequired,

    })
}

export default User;