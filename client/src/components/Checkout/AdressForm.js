import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: '2em'
    },
    input: {
        margin:'1em'
    }
  }));

function AdressForm() {
    const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField className={classes.input} id="outlined-basic" label="Förnamn" variant="outlined" />
                <TextField className={classes.input} id="outlined-basic" label="Efternamn" variant="outlined" />
                <TextField className={classes.input} id="outlined-basic" label="Telefonnummer" variant="outlined" />
                <TextField className={classes.input} id="outlined-basic" label="Postnummer" variant="outlined" />
                <TextField className={classes.input} id="outlined-basic" label="Address" variant="outlined" multiline rows={4}/>
            </form>
        </div>
    )
}

export default AdressForm
