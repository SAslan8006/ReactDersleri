import { useFormik } from 'formik';
import React from 'react'
import validationSchema from './Validation';
function Signup() {
    const { handleChange, handleSubmit, values } = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",

        },

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema,
    });
    return (
        <div>  <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>

                <label > Email </label>
                <input
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                />
                <br /><br />
                <label > Password </label>
                <input
                    name='password'
                    onChange={handleChange}
                    value={values.password}
                /><br /><br />
                <label > Confirm Password </label>
                <input
                    name='passwordConfirm'
                    onChange={handleChange}
                    value={values.passwordConfirm}
                /><br />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Signup