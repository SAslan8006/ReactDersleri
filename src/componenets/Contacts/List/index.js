import React, { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState('')
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLowerCase())
        })
    })
    return (
        <div>
            <input
                placeholder='Filter'
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)} />
            <ul style={{ margin: "15px 0" }} className="list">
                {filtered.map((contact, i) => (
                    <li style={{
                        background: "antiquewhite",
                        padding: "5px",
                        marginBottom: "2px",
                        display: "flex",
                        justifyContent: "space-between",
                    }} key={i}>
                        <span>{contact.fullname}</span>
                        <span>{contact.phone_number}</span>

                    </li>
                ))}
            </ul>
            <p>Total contatcs {filtered.length}</p>
        </div >
    )
}

export default List