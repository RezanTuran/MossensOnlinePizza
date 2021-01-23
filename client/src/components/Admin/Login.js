import React, { useState } from 'react'
import Axios from 'axios';
import Register from './Register'

function Login(props) {

    const { history } = props;

    const handleButtonClick = () => {
        history.push('./admin');
    };

    const [userNameLogin, setUserName] = useState('')
    const [passwordLogin, setPassword] = useState('')

    const [userNameReg, setUserNameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const [loginStatus, setLoginStatus] = useState('')

    const adminLogin = () => {
        Axios.post('https://mossenspizzeria.herokuapp.com/api/login', {
            userName: userNameLogin,
            password: passwordLogin,
        }).then((response) => {
            console.log(response);
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].userName)
            }
            if (response.data[0].userName === userNameLogin && response.data[0].password === passwordLogin) {
                handleButtonClick()
            }
        });
    };

    const adminRegister = () => {
        Axios.post('https://mossenspizzeria.herokuapp.com/api/register', {
            userName: userNameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
        window.location.reload()
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
            <button onClick={adminLogin}>Logga in</button>
            <h1>{loginStatus}</h1>

            <div>
            <div>
                <h1>Registrera</h1>
                <input type="text" placeholder="Användarnamn"
                    onChange={(e) => { setUserNameReg(e.target.value) }}
                />
                <input type="password" placeholder="Lösenord"
                    onChange={(e) => { setPasswordReg(e.target.value) }}
                />
                <button onClick={adminRegister}>Resgistera</button>
            </div>
        </div>

        </div>
    )
}

export default Login
