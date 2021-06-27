import logo from './logo.svg';
import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

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


class App extends Component {
  state = { username: '', password: '', email: '', authenticationCode: '', step: 0 }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  signUp = async () => {
    const { username, password, email } = this.state
    try {
      await Auth.signUp({ username, password, attributes: { email } })
      console.log("successfully signed up")
      this.setState({ step: 1 })
    } catch (err) { console.log('error signing up: ', err) }
  }

  confirmSignUp = async () => {
    const { username, authenticationCode } = this.state
    try {
      await Auth.confirmSignUp(username, authenticationCode)
      console.log('Successful user sign up')
    } catch (err) { console.log('error confirming sign up: ', err) }
  }

  render() {
    return (
      // <Router>
      //   <Navigation />
      //   <Switch>
      //     <Route exact path="/">
      //       <Home />
      //     </Route>
      //     <Route path="/shop">
      //       <Shop />
      //     </Route>
      //     <Route exact path="/cart">
      //       <Cart />
      //     </Route>
      //     <Route exact path="/account">
      //       <Account />
      //     </Route>
      //     <Route path="/admin">
      //       <Admin />
      //     </Route>
      //     <Route path="/checkout">
      //       <Checkout />
      //     </Route>
      //     <Route path="/auth">
      //       <AmplifySignOut />
      //     </Route>
      //   </Switch>
      // </Router >
      <div className="App">
        {
          this.state.step === 0 && (
            <div>
              <input placeholder='username' onChange={this.onChange} name='username' />
              <input placeholder='password' onChange={this.onChange} name='password' />
              <input placeholder='email' onChange={this.onChange} name='email' />
              <button onClick={this.signUp}>Sign Up</button>
            </div>
          )
        }
        {
          this.state.step === 1 && (
            <div>
              <input placeholder='username' onChange={this.onChange} name='username' />
              <input placeholder='authentication code' onChange={this.onChange} name='authenticationCode' />
              <button onClick={this.confirmSignUp}>Sign Up</button>
            </div>
          )
        }
      </div>
    );
  }
}


export default App;
