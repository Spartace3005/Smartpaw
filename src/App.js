import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LogIn from './Project/LogIn/logIn';
import Admin from './Project/Admin/admin';
import User from './Project/User/user';
import Premium from './Project/Premium/premium';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/premium">
          <Premium/>
        </Route>
        <Route path="/">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
