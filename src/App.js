import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'

function App() {
  return (
    <div className='App'>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <input
              id='firstName'
              name='firstName'
              placeholder='Jane'
              onChange={handleChange}
            />
            <br />

            <label htmlFor='lastName'>Last Name</label>
            <input
              id='lastName'
              name='lastName'
              placeholder='Doe'
              onChange={handleChange}
            />
            <br />

            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              placeholder='jane@acme.com'
              type='email'
              onChange={handleChange}
            />
            <br />
            <button type='submit'>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
