import React, { useState } from 'react'
import Axios from 'axios';
import Register from './Register'

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState('')

    const login = () => {
        Axios.post('https://mossenspizzeria.herokuapp.com/api/login', {
            userName: userName,
            password: password,
        }).then((response) => {

            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].userName)
            }
            if(response.data[0].userName === userName && response.data[0].password === password){
                alert("inloggad")
            }
        });
    };

    return (
            <div>
                <h1>Logga in</h1>
                <input type="text" placeholder="Användarnamn"
                    onChange={(e) => { setUserName(e.target.value) }}
                />
                <input type="password" placeholder="Lösenord"
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button onClick={login}>Logga in</button>
                <h1>{loginStatus}</h1>
                <Register />
            </div>
    )
}

export default Login
