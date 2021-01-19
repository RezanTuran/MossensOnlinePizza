import React, { useState } from 'react'
import Axios from 'axios';

function Login() {

    const [userNameReg, setUserNameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const register = () => {
        Axios.post('https://mossenspizzeria.herokuapp.com/api/register', {
            userName: userNameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div>
            <div>
                <h1>Registrera</h1>
                <input type="text" placeholder="Användarnamn"
                    onChange={(e) => { setUserNameReg(e.target.value) }}
                />
                <input type="text" placeholder="Lösenord"
                    onChange={(e) => { setPasswordReg(e.target.value) }}
                />
                <button onClick={register}>Resgistera</button>
            </div>
            <div>
                <h1>Logga in</h1>
                <input type="text" placeholder="Användarnamn" />
                <input type="password" placeholder="Lösenord" />
                <button>Logga in</button>
            </div>
        </div>
    )
}

export default Login
