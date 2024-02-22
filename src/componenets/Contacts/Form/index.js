import React, { useState } from 'react'

function Form({ addContact }) {
    const [form, setForm] = useState({ fullname: "", phone_number: "" });
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullname === '' || form.phone_number === '') {
            return false;
        }
        console.log(form);
        addContact([form])
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        placeholder="Full Name"
                        name="fullname"
                        onChange={onChangeInput}
                    />
                </div>
                <div>
                    <input
                        placeholder='Telefon'
                        name="phone_number"
                        onChange={onChangeInput}
                    />
                </div>
                <div>
                    <button onClick={onSubmit}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form