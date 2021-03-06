import React from 'react';
import Home from '../components/Pages/Home';
import Contact from '../components/Pages/Contact';
import About from '../components/Pages/About';
import PizzaMenu from '../components/Menu/PizzaMenu';
import Galery from '../components/Pages/Galery';
import Admin from '../components/Admin/Admin';
import Login from '../components/Admin/Login';
import Register from '../components/Admin/Register';
import { Route, Switch } from 'react-router-dom';
import InserPizza from '../components/Admin/InserPizza';
import Checkout from '../components/Checkout/Checkout';
import Order from '../components/Admin/Order';
import OrderConfirmation from '../components/OrderConfirmation/OrderConfirmation';

export default function App() {
  return (
    <Switch>
      <Route exact from="/" render={(props) => <Home {...props} />} />
      <Route exact path="/contact" render={(props) => <Contact {...props} />} />
      <Route exact path="/about" render={(props) => <About {...props} />} />
      <Route exact path="/menu" render={(props) => <PizzaMenu {...props} />} />
      <Route exact path="/galery" render={(props) => <Galery {...props} />} />
      <Route exact path="/admin" render={(props) => <Admin {...props} />} />
      <Route exact path="/login" render={(props) => <Login {...props} />} />
      <Route
        exact
        path="/register"
        render={(props) => <Register {...props} />}
      />
      <Route
        exact
        path="/insertPizza"
        render={(props) => <InserPizza {...props} />}
      />
      <Route
        exact
        path="/checkout"
        render={(props) => <Checkout {...props} />}
      />
      <Route exact path="/order" render={(props) => <Order {...props} />} />
      <Route
        exact
        path="/orderconfirmation"
        render={(props) => <OrderConfirmation {...props} />}
      />
    </Switch>
  );
}
