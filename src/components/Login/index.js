import useUser from 'hooks/useUser';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [path, navigate] = useLocation();
    const { login, isLogged, isLoginLoading, hasLoginError } = useUser();

    useEffect(() => {
        if (isLogged) navigate('/');
    }, [isLogged, navigate])

    const handleSubmit = e => {
        e.preventDefault();
        login({username, password});
    }

    return (
        <>
            {isLoginLoading && <strong>Checking credentials</strong>}
            {!isLoginLoading &&
                <form className='form' onSubmit={handleSubmit}>
                    <label>
                        username
                        <input placeholder='username' onChange={e => setUsername(e.target.value)} value={username} />
                    </label>
                    <label>
                        password
                        <input placeholder='password' onChange={e => setPassword(e.target.value)} type='password' value={password} />
                    </label>
                    
                    <button className='btn' >Login</button>
                </form>
            }
            {
                hasLoginError && <strong>Credentials are invalid</strong>
            }
        </>
    )
}