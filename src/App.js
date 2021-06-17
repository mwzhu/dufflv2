import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Amplify from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth';
import awsconfig from './aws-exports';

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Account from "./pages/Account"
import Admin from "./pages/Admin"
import Checkout from "./pages/Checkout"
import Navigation from "./components/Navigation"

Amplify.configure(awsconfig);
Auth.configure(awsconfig);


function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/account">
          <Account />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
