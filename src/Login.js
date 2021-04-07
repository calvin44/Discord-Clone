import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button';
import { auth, provider } from './firebase'

const Login = () => {
    const signIn = () =>{
        // Do clever google login
        auth.signInWithPopup(provider)
            .catch(err => alert(err))
    }

    return (
        <div className="login">
            <div>
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2020/10/Discord-logo.png" alt="discord-logo"></img>
            </div>

            <Button onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
