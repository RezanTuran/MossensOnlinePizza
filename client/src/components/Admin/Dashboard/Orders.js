import React, { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Axios from 'axios';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {


  const [orderList, setOrderlist] = useState([])

  useEffect(() => {
    Axios.get('https://mossenspizzeria.herokuapp.com/api/getOrder').then((Response) => {
      setOrderlist(Response.data)
    })
  }, [])

  const classes = useStyles();
  return (
    <>
      <React.Fragment>
        <Title>Senaste Beställningar</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Datum</TableCell>
              <TableCell>Namn</TableCell>
              <TableCell>Skicka till</TableCell>
              <TableCell>E-post</TableCell>
              <TableCell>Telefonnummer</TableCell>
              <TableCell>Pizza namn</TableCell>
              <TableCell>Antal</TableCell>
              <TableCell>Total pris</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {orderList.map((val) => (
              <TableRow key={val.id}>
                <TableCell>{val.date}</TableCell>
                <TableCell>{val.firstName + ' ' + val.sureName}</TableCell>
                <TableCell>{val.adress}</TableCell>
                <TableCell>{val.epost}</TableCell>
                <TableCell>{val.phone}</TableCell>
                <TableCell>{val.pizzaName}</TableCell>
                <TableCell>{val.quantity}</TableCell>
                <TableCell>{val.pizzaPrice}:-</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Link color="primary" href="#" onClick={preventDefault}>
            Se fler beställningar
        </Link>
        </div>
      </React.Fragment>
    </>
  );
}