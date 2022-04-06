import React, {useState} from 'react'
import register from 'services/register'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const validateFields = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required username'
    }

    if (!values.password) {
        errors.password = 'Required password'
    } else if (values.password.length < 3) {
        errors.password = 'Length must be greater than 3'
    }
}

const initialValues = {
    username: '',
    password: ''
}

export default function Register() {
    const [registered, setRegistered] = useState(false)

    if (registered) {
        return <h2>Congratulations! You've been successfully registered!</h2>
    }

    return <>
        <h2>Formulario de Registro</h2>
        <Formik
            initialValues={initialValues}
            validate={validateFields}
            onSubmit={(values, {setFieldError}) => {
                return register(values).then(() => setRegistered(true)).catch(() => {
                    setFieldError('username', 'This username is not valid')
                })
            }}
        >
            {
                ({errors, isSubmitting}) => <Form>
                    <Field name='username' placeholder='username' ></Field>
                    <ErrorMessage name='username' component='small' />
                    <Field name='password' placeholder='password' type='password' ></Field>
                    <ErrorMessage name='password' component='small' />
                    <button className='btn' disabled={isSubmitting} >
                        Registrarse
                    </button>
                    {console.log(errors)}
                </Form>
            }
        </Formik>
    </>
}