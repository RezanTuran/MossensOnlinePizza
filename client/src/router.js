import React from "react";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import PizzaMenu from "./components/Pages/Menu/PizzaMenu";
import Galery from "./components/Pages/Galery";
import Cart from "./components/Pages/Cart";
import Admin from "./components/Admin/Admin";
import { Route, Switch, Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({});

export default function App() {
  const history = useHistory();

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Switch>
        <Router history={history}>
          <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact path="/contact" render={props => <Contact {...props} />} />
          <Route exact path="/about" render={props => <About {...props} />} />
          <Route exact path="/menu" render={props => <PizzaMenu {...props} />} />
          <Route exact path="/galery" render={props => <Galery {...props} />} />
          <Route exact path="/cart" render={props => <Cart {...props} />} />
          <Route exact path="/admin" render={props => <Admin {...props} />} />
        </Router>
      </Switch>
    </div>
  );
}
