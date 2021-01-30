import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2em'
    },
    input: {
        margin: '1em'
    }
}));


function AdressForm() {
    const classes = useStyles();

    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

    const renderPizzaFromLocalStrg = cartFromLocalStorage.map(pizza => {
        return (`
            ${'Pizzanamn: ' + pizza.pizzaName}
            ${'Pizzapris: ' + pizza.pizzaPrice + ' :- '}
            ${'Ingredients: ' + pizza.ingredients}
            ${'Antal: ' + pizza.quantity}
        `
        )
    })

    const [firstName, setFirstName] = useState('')
    const [sureName, setSureName] = useState('')
    const [phone, setPhone] = useState('')
    const [epost, setEpost] = useState('')
    const [postNumber, setPostnumber] = useState('')
    const [adress, setAdress] = useState('')
    let date = new Date()
    const [orderList, setOrderlist] = useState([])

    // Post order
    const insertOrder = () => {
        Axios.post('https://mossenspizzeria.herokuapp.com/api/insertOrder', {
            firstName: firstName,
            sureName: sureName,
            phone: phone,
            epost: epost,
            postNumber: postNumber,
            adress: adress,
            date: date,
            food: renderPizzaFromLocalStrg.toString()
        });

        setOrderlist([
            ...orderList,
            { firstName: firstName, sureName: sureName, phone: phone, epost: epost, postNumber: postNumber, adress: adress, date: date, food: renderPizzaFromLocalStrg.toString() }
        ]);
        window.location.reload()
    };

    return (
        <div>
            <div className={classes.root}>
                <TextField className={classes.input} name="firstName" type="text" id="outlined-basic" label="Förnamn" variant="outlined"
                    onChange={(e) => {
                        setFirstName(e.target.value)
                    }}
                />
                <TextField className={classes.input} name="sureName" type="text" id="outlined-basic" label="Efternamn" variant="outlined"
                    onChange={(e) => {
                        setSureName(e.target.value)
                    }}
                />
                <TextField className={classes.input} name="phone" type="number" id="outlined-basic" label="Telefonnummer" variant="outlined"
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}
                />
                <TextField className={classes.input} name="epost" type="email" id="outlined-basic" label="E-post" variant="outlined"
                    onChange={(e) => {
                        setEpost(e.target.value)
                    }}
                />
                <TextField className={classes.input} name="postNumber" type="number" id="outlined-basic" label="Postnummer" variant="outlined"
                    onChange={(e) => {
                        setPostnumber(e.target.value)
                    }}
                />
                <TextField className={classes.input} name="adress" type="text" id="outlined-basic" label="Address" variant="outlined" multiline rows={4}
                    onChange={(e) => {
                        setAdress(e.target.value)
                    }}
                />

                <Button
                    onClick={insertOrder}
                    variant="contained"
                    color="secondary"
                >
                    Slutför
                </Button>
            </div>
        </div>
    )
}

export default AdressForm
