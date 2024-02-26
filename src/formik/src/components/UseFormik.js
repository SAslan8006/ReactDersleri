import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik'

function UseFormik() {
    const { handleChange, handleSubmit, values } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            gender: "male",
            hobies: [],
            country: "Turkiye",
        },

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='App'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input
                    id='firstName'
                    name='firstName'
                    placeholder='Jane'
                    onChange={handleChange}
                    value={values.firstName}
                />
                <br />

                <label htmlFor='lastName'>Last Name</label>
                <input
                    id='lastName'
                    name='lastName'
                    placeholder='Doe'
                    onChange={handleChange}
                    value={values.lastName}
                />
                <br />

                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    name='email'
                    placeholder='jane@acme.com'
                    type='email'
                    onChange={handleChange}
                    value={values.email}
                />
                <br />
                <label htmlFor='gender'>Gender: </label>
                <span>Male</span>
                <input type='radio' name='gender' value='male' onChange={handleChange} checked={values.gender === "male"} />
                <span>Female</span>
                <input type='radio' name='gender' value='female' onChange={handleChange} checked={values.gender === "female"} />
                <br />
                <br />
                <div> FootBall
                    <input type="checkbox" name='hobbies' value="Futbool" onChange={handleChange} />
                </div>
                <div> Cinema
                    <input type="checkbox" name='hobbies' value="Cinema" onChange={handleChange} />
                </div>
                <div> Photography
                    <input type="checkbox" name='hobbies' value="Photography" onChange={handleChange} />
                </div>
                <br />
                <select name='country' value={values.country} onChange={handleChange} >
                    <option value="Turkiye">Turkiye</option>
                    <option value="engeland">İngiltere</option>
                    <option value="usa">Amerika</option>
                </select>
                <br />
                <button type='submit'>Submit</button>
            </form>

        </div>
    );
}

export default UseFormik;
