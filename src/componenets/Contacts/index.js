import React, { useEffect, useState } from 'react'
import List from './List';
import Form from './Form';

function Contacts() {
    const [contacts, setContacts] = useState([
        { fullname: "Ahmet", phone_number: "555 555 55 55" },
        { fullname: "Mehmet", phone_number: "555 555 55 55" },
        { fullname: "Hatice", phone_number: "555 555 55 55" }
    ]);
    useEffect(() => {

    }, [contacts]);

    return (
        <div>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts;