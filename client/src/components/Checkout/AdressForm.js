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

    const [firstName, setFirstName] = useState('')
    const [sureName, setSureName] = useState('')
    const [phone, setPhone] = useState('')
    const [epost, setEpost] = useState('')
    const [postNumber, setPostnumber] = useState('')
    const [adress, setAdress] = useState('')

    const [orderList, setOrderlist] = useState([])

    // Post order
    const insertOrder = () => {
        Axios.post('https://mossenspizzeria.herokuapp.com/api/insertOrder', {
            firstName: firstName,
            sureName: sureName,
            phone: phone,
            epost: epost,
            postNumber: postNumber,
            adress: adress
        });

        setOrderlist([
            ...orderList,
            { firstName: firstName, sureName: sureName, phone: phone, epost: epost, postNumber: postNumber, adress: adress }
        ]);
        window.location.reload()
    };

    return (
        <div>
            <div className={classes.root}>
                <label>namn</label>
                <input type="text" name="firstName" onChange={(e) => {
                    setFirstName(e.target.value)
                }} />
                <label>efternamn</label>
                <input type="text" name="sureName" onChange={(e) => {
                    setSureName(e.target.value)
                }} />
                <label>phone</label>
                <input type="text" name="phone" onChange={(e) => {
                    setPhone(e.target.value)
                }} />
                <label>espot</label>
                <input type="text" name="epost" onChange={(e) => {
                    setEpost(e.target.value)
                }} />
                <label>postnr</label>
                <input type="text" name="postNumber" onChange={(e) => {
                    setPostnumber(e.target.value)
                }} />
                <label>adress</label>
                <input type="text" name="adress" onChange={(e) => {
                    setAdress(e.target.value)
                }} />

                <button onClick={insertOrder}>Spara</button>
            </div>
        </div>
    )
}

export default AdressForm
