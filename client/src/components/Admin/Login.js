import React, { useState } from 'react'
import Axios from 'axios';

function Login() {

    const [userNameReg, setUserNameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState('')

    const register = () => {
        Axios.post('https://mossenspizzeria.herokuapp.com/api/register', {
            userName: userNameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
        window.location.reload()
    };

    const login = () => {
        Axios.get('https://mossenspizzeria.herokuapp.com/api/login', {
            userName: userName,
            password: password,
        }).then((response) => {

            if(response.data.message) {

                setLoginStatus(response.data.message)
            }else{
                setLoginStatus(response.data[0].userName)
            }

        });
    };

    return (
        <div>
            <div>
                <h1>Registrera</h1>
                <input type="text" placeholder="Användarnamn"
                    onChange={(e) => { setUserNameReg(e.target.value) }}
                />
                <input type="password" placeholder="Lösenord"
                    onChange={(e) => { setPasswordReg(e.target.value) }}
                />
                <button onClick={register}>Resgistera</button>
            </div>
            <div>
                <h1>Logga in</h1>
                <input type="text" placeholder="Användarnamn" 
                 onChange={(e) => { setUserName(e.target.value) }}
                />
                <input type="password" placeholder="Lösenord" 
                 onChange={(e) => { setPassword(e.target.value) }}
                />
                <button onClick={login}>Logga in</button>
            </div>
            <h1>{loginStatus}</h1>
        </div>
    )
}

export default Login
