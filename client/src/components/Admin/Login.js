import React, { useState,useEffect } from 'react'
import Axios from 'axios';
import Register from './Register'

function Login(props) {

    const { history } = props;

    const handleButtonClick = () => {
        history.push('./admin');
    };

    const [userNameLogin, setUserName] = useState('')
    const [passwordLogin, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState('')

    Axios.defaults.withCredentials = true

    const adminLogin = () => {
        Axios.post('https://mossenspizzeria.herokuapp.com/api/login', {
            userName: userNameLogin,
            password: passwordLogin,
        }).then((response) => {            
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

    useEffect(() => {
        Axios.get("https://mossenspizzeria.herokuapp.com/api/login").then((response) => {
            console.log(response);
        })
    }, [])

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
            <Register />
        </div>
    )
}

export default Login
