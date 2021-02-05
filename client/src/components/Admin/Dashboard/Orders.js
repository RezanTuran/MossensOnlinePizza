import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import Axios from 'axios';
import TableContainer from '@material-ui/core/TableContainer';
import './dashboard.css'

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
    <React.Fragment>
      <Title>Senaste Beställningar</Title>
      <TableContainer style={{borderRadius:'8px'}} >
        <table>
          <thead>
            <tr>
              <th>Datum</th>
              <th>Namn</th>
              <th>Address</th>
              <th>E-post</th>
              <th>Telefonnummer</th>
              <th>Pizza namn</th>
              <th>Antal</th>
              <th>Total pris</th>
            </tr>
          </thead>
            {orderList.map((val) => (
              <tbody key={val.id}>
              <tr>
                  <td className="orderTD">{val.date}</td>
                  <td className="orderTD">{val.firstName + ' ' + val.sureName}</td>
                  <td className="orderTD">{val.adress}</td>
                  <td className="orderTD">{val.epost}</td>
                  <td className="orderTD">{val.phone}</td>
                  <td className="orderTD">{val.pizzaName}</td>
                  <td className="orderTD">{val.quantity}</td>
                  <td className="orderTD">{val.pizzaPrice}:-</td>
              </tr>
          </tbody>
            ))}
        </table>
      </TableContainer>
      <div className={classes.seeMore}>
        <Link to="/order" style={{ textDecoration: 'none', color: '#3f51b5' }} >
          Se fler beställningar
        </Link>
      </div>
    </React.Fragment>
  );
}