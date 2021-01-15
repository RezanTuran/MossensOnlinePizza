import React from "react";
import Home from "../components/Pages/Home";
import Contact from "../components/Pages/Contact";
import About from "../components/Pages/About";
import PizzaMenu from "../components/Menu/PizzaMenu";
import Galery from "../components/Pages/Galery";
import Cart from "../components/Pages/Cart";
import Admin from "../components/Admin/Admin";
import { Route, Switch } from "react-router-dom";

export default function App() {

  return (
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/contact" render={props => <Contact {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <Route exact path="/menu" render={props => <PizzaMenu {...props} />} />
        <Route exact path="/galery" render={props => <Galery {...props} />} />
        <Route exact path="/cart" render={props => <Cart {...props} />} />
        <Route exact path="/admin" render={props => <Admin {...props} />} />
      </Switch>
  );
}
