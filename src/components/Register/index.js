import React, {useState} from 'react'
import registerService from 'services/register'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

export default function Register() {
    const {handleSubmit, register, errors} = useForm()
    const [registered, setRegistered] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = values => {
        setIsSubmitting(true)
        console.log(values)
        registerService(values)
            .then(() => { 
                setRegistered(true)
                setIsSubmitting(false)
            })
    }

    if (registered) {
        return <h2>Congratulations! You've been successfully registered!</h2>
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='username' placeholder='Pon tu username' ref={register({ required: 'This is required' })} ></input>
            <ErrorMessage errors={errors} name='username' as='span' />
            <input name='password' placeholder='Pon tu password' ref={register} type='password' ></input>
            <ErrorMessage errors={errors} name='username' as={<span></span>} />
            <button disabled={isSubmitting} >Registrarse</button>
        </form>
    </>
}