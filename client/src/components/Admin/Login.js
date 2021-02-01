import React, {useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
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
      <Link color="inherit" href="#">
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const classes = useStyles();

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
                handleButtonClick()
            }
        });
    };

    useEffect(() => {
        Axios.get("https://mossenspizzeria.herokuapp.com/api/login").then((response) => {
            if(response.data.loggedIn === true) {
                handleButtonClick()
            }
        })
    },)


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper} >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Panel
        </Typography>
        <div>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Användarnamn"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => { setUserName(e.target.value) }}
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Password"
            label="Lösenord"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={adminLogin}
          >
            Logga in
          </Button>
        </div>
        <h1>{loginStatus}</h1>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}