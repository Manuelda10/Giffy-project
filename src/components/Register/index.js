import React, {useState} from 'react'
import registerService from 'services/register'
import { useForm } from 'react-hook-form'

export default function Register() {
    const {handleSubmit, register} = useForm()
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
            <input name='email' placeholder='Pon tu email' {...register("email", { required: 'This is required' })} type='email' ></input>
            <input name='password' placeholder='Pon tu password' {...register("password", {required: 'This is required'})} type='password' ></input>
            <button disabled={isSubmitting} >Registrarse</button>
        </form>
    </>
}