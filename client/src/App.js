import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";
import Router from './router/router';

const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Router />
    </div>
  );
}
