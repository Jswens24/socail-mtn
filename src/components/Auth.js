import axios from 'axios'
import { useState } from 'react'

const Auth = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(true)

    const submitHandler = e => {
        e.preventDefault()
        const body = {
            username,
            password
        }
        if (register) {
            axios.post('https://socialmtn.devmountain.com/register', body)
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => console.log(err))
        } else {
            axios.post('https://socialmtn.devmountain.com/login', body)
                .then(res => {
                    console.log(res.data);
                })
        }
        console.log('submitHandler called')
    }

    return (
        <main>
            <h1>Welcome!</h1>
            <form className='form auth-form' onSubmit={submitHandler}>
                <input
                    type='text'
                    placeholder='enter username'
                    value={username}
                    className='form-input'
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='enter password'
                    value={password}
                    className='form-input'
                    onChange={e => setPassword(e.target.value)}
                />
                <button className='form-btn' >
                    {register ? 'Sign Up' : 'Login'}
                </button>
            </form>
            <button className='form-btn' onClick={() => setRegister(!register)}>
                Need to {register ? 'Login' : 'Sign Up'}?
            </button>
        </main>
    )
}

export default Auth