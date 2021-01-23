import React, {useState} from 'react'
import Axios from 'axios';

function Register() {

    const [userNameReg, setUserNameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    Axios.defaults.withCredentials = true;

    const adminRegister = () => {
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
                <input type="password" placeholder="Lösenord"
                    onChange={(e) => { setPasswordReg(e.target.value) }}
                />
                <button onClick={adminRegister}>Resgistera</button>
            </div>
        </div>
    )
}

export default Register
