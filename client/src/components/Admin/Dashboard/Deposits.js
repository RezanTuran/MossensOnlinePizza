import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const year = new Date().getFullYear();
const day = new Date().getDate();
const month = new Date().getMonth();

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Senaste insättningar</Title>
      <Typography component="p" variant="h4">
        3,024.00 KR
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {year + '/' + day + '/' + month}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Visa balans
        </Link>
      </div>
    </React.Fragment>
  );
}
