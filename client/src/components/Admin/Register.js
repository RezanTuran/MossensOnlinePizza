// import React, {useState} from 'react'
// import Axios from 'axios';

// function Register() {

//     const [userNameReg, setUserNameReg] = useState('')
//     const [passwordReg, setPasswordReg] = useState('')

//     const adminRegister = () => {
//         Axios.post('https://mossenspizzeria.herokuapp.com/api/register', {
//             userName: userNameReg,
//             password: passwordReg,
//         }).then((response) => {
//             console.log(response);
//         });
//     };

//     return (
//         <div>
//             <div>
//                 <h1>Registrera</h1>
//                 <input type="text" placeholder="Användarnamn"
//                     onChange={(e) => { setUserNameReg(e.target.value) }}
//                 />
//                 <input type="password" placeholder="Lösenord"
//                     onChange={(e) => { setPasswordReg(e.target.value) }}
//                 />
//                 <button onClick={adminRegister}>Resgistera</button>
//             </div>
//         </div>
//     )
// }

// export default Register

import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Mossens Pizzeria
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Register() {
    const classes = useStyles();

    const [userNameReg, setUserNameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [emailReg, setEmailReg] = useState('')
    const [sureNameReg, setSureNameReg] = useState('')

    const adminRegister = () => {
        Axios.post('https://mossenspizzeria.herokuapp.com/api/register', {
            userName: userNameReg,
            password: passwordReg,
            email: emailReg,
            sureName: sureNameReg
            
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register Admin
        </Typography>
                <form className={classes.form} method="post">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Förnamn"
                                autoFocus
                                onChange={(e) => { setUserNameReg(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Efternamn"
                                name="lastName"
                                autoComplete="lname"
                                onChange={(e) => { setSureNameReg(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => { setEmailReg(e.target.value) }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Lösenord"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => { setPasswordReg(e.target.value) }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={adminRegister}
                    >
                        Registera
          </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}