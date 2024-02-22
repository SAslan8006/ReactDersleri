import React, { useEffect, useState } from 'react'
import List from './List';
import Form from './Form';

function Contacts() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {

    }, [contacts]);

    return (
        <div>
            <List />
            <Form addContact={setContacts} />
        </div>
    )
}

export default Contacts;