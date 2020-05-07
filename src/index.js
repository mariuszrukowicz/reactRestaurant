import 'gestalt/dist/gestalt.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Singup from './components/Signup';

const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={Signin} path="/signin" />
        <Route component={Singup} path="/signup" />
        <Route component={Checkout} path="/checkout" />
      </Switch>
    </React.Fragment>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
