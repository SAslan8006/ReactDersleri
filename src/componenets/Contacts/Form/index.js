import React, { useEffect, useState } from 'react'

const initialFormValues = { fullname: "", phone_number: "" }
function Form({ addContact, contacts }) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues)
    }, [contacts])
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullname === '' || form.phone_number === '') {
            return false;
        }
        addContact([...contacts, form])

    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    placeholder="Full Name"
                    name="fullname"
                    value={form.fullname}
                    onChange={onChangeInput}
                />
            </div>
            <div>
                <input
                    placeholder='Telefon'
                    name="phone_number"
                    value={form.phone_number}
                    onChange={onChangeInput}
                />
            </div>
            <div className='btn'>
                <button onClick={onSubmit}>Add</button>
            </div>
        </form>
    )
}

export default Form