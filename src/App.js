import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'

function App() {
  return (
    <div className='App'>
      <div>
        <h1>Any place in your app!</h1>
        <Formik
          initialValues={{ fname: '', lname: '', email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label htmlFor='fname'>First Name: </label>
              <Field type="text" placeholder="First Name" name="fname" />
              <label htmlFor='lname'>Last Name: </label>
              <Field type="text" placeholder="Last Name" name="lname" />
              <label htmlFor='email'>E-mail: </label>
              <Field type="email" placeholder="E-mail" name="email" />
              <ErrorMessage name="email" component="div" />
              <label htmlFor='password'>Password: </label>
              <Field type="password" placeholder="Password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>

  );
}

export default App;
