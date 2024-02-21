import React, { useState } from 'react'

function Example() {
    const [isim, setİsim] = useState("");
    const [soyad, setSoyad] = useState("");
    const [form, setForm] = useState({ name: "", surname: "" });

    const onChangeName = (event) => setİsim(event.target.value)
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <div>
            İsim:
            <br />
            <input
                name="name"
                type="text"
                value={form.name}
                onChange={onChangeInput}
            />
            <br />
            <br />
            Soyad:
            <br />
            <input
                name="surname"
                type="text"
                value={form.surname}
                onChange={onChangeInput}
            />
            <br />
            <p>Merhaba {form.name} {form.surname}</p>
        </div>
    )
}

export default Example